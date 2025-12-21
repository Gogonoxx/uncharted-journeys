/**
 * Uncharted Journeys - Journey Manager Application
 * Full 4-stage journey management using Foundry v13 ApplicationV2
 */

import { REGIONS, ENCOUNTER_TYPES, ENCOUNTERS } from './data/encounters.js';
import { ROLES, getRoleById } from './data/roles.js';
import { PREPARATIONS, getPreparation, PREPARATION_BASE_DC, PREPARATION_ICONS } from './data/preparations.js';
import { DISTANCES, PACE_OPTIONS, calculateDifficulty, getBaseEncounters, getArrivalResult, BIOMES, ENCOUNTER_POOLS } from './data/journey-tables.js';
import { JourneySessionManager, JourneySessionModel } from './journey-session.js';
import { ExhaustionManager } from './exhaustion-manager.js';
import { getResolutionConfig } from './data/encounter-type-rules.js';
import { BIOME_LOCATIONS, getBiomeList, getRandomEncounterType, LOCATION_ENCOUNTER_POOLS } from './data/biome-locations.js';

const { ApplicationV2, HandlebarsApplicationMixin } = foundry.applications.api;

/**
 * Main Journey Manager Application
 * Handles all 4 stages: Route, Prepare, Journey, Journey's End
 */
export class JourneyManagerApp extends HandlebarsApplicationMixin(ApplicationV2) {

  /** @override */
  static DEFAULT_OPTIONS = {
    id: 'journey-manager',
    classes: ['uncharted-journeys', 'journey-manager'],
    tag: 'form',
    window: {
      frame: true,
      positioned: true,
      title: 'Uncharted Journeys',
      icon: 'fas fa-route',
      resizable: true
    },
    position: {
      width: 500,
      height: 900
    },
    form: {
      submitOnChange: false,
      closeOnSubmit: false
    },
    actions: {
      // Navigation
      changeTab: JourneyManagerApp.#onChangeTab,

      // Stage 1: Route
      setDistance: JourneyManagerApp.#onSetDistance,
      adjustWeather: JourneyManagerApp.#onAdjustWeather,
      adjustTerrain: JourneyManagerApp.#onAdjustTerrain,
      adjustNemesis: JourneyManagerApp.#onAdjustNemesis,
      toggleNemesis: JourneyManagerApp.#onToggleNemesis,
      setBiome: JourneyManagerApp.#onSetBiome,
      addBiome: JourneyManagerApp.#onAddBiome,
      removeBiome: JourneyManagerApp.#onRemoveBiome,
      confirmRoute: JourneyManagerApp.#onConfirmRoute,

      // Stage 2: Prepare
      assignRole: JourneyManagerApp.#onAssignRole,
      assignAllRoles: JourneyManagerApp.#onAssignAllRoles,
      sendPreparationList: JourneyManagerApp.#onSendPreparationList,
      rollPreparation: JourneyManagerApp.#onRollPreparation,
      sendRestOptions: JourneyManagerApp.#onSendRestOptions,
      sendSkillCheck: JourneyManagerApp.#onSendSkillCheck,
      setGroupCheckResult: JourneyManagerApp.#onSetGroupCheckResult,
      confirmPreparation: JourneyManagerApp.#onConfirmPreparation,

      // Stage 3: Journey
      setPace: JourneyManagerApp.#onSetPace,
      addEncounter: JourneyManagerApp.#onAddEncounter,
      removeEncounter: JourneyManagerApp.#onRemoveEncounter,
      rollEncounterType: JourneyManagerApp.#onRollEncounterType,
      rollEncounter: JourneyManagerApp.#onRollEncounter,
      sendEncounterToChat: JourneyManagerApp.#onSendEncounterToChat,
      resolveEncounter: JourneyManagerApp.#onResolveEncounter,
      beginResolution: JourneyManagerApp.#onBeginResolution,
      finalizeEncounter: JourneyManagerApp.#onFinalizeEncounter,
      nextEncounter: JourneyManagerApp.#onNextEncounter,
      useRoleAbility: JourneyManagerApp.#onUseRoleAbility,
      completeJourney: JourneyManagerApp.#onCompleteJourney,
      copyResearchPrompt: JourneyManagerApp.#onCopyResearchPrompt,
      copyEncounterPrompt: JourneyManagerApp.#onCopyEncounterPrompt,
      copyDungeonPrompt: JourneyManagerApp.#onCopyDungeonPrompt,

      // Journey Map Markers
      generateMarkers: JourneyManagerApp.#onGenerateMarkers,
      revealMarker: JourneyManagerApp.#onRevealMarker,
      resolveMarker: JourneyManagerApp.#onResolveMarker,
      clearMarkers: JourneyManagerApp.#onClearMarkers,

      // Biome Nodes
      addBiomeNode: JourneyManagerApp.#onAddBiomeNode,
      removeBiomeNode: JourneyManagerApp.#onRemoveBiomeNode,
      rollBiomeNodeEncounter: JourneyManagerApp.#onRollBiomeNodeEncounter,

      // Stage 4: Journey's End
      rollArrival: JourneyManagerApp.#onRollArrival,
      rollExhaustionSave: JourneyManagerApp.#onRollExhaustionSave,
      sendEndSummary: JourneyManagerApp.#onSendEndSummary,
      newJourney: JourneyManagerApp.#onNewJourney,

      // Utility
      abandonJourney: JourneyManagerApp.#onAbandonJourney
    }
  };

  /** @override */
  static PARTS = {
    tabs: {
      template: 'modules/uncharted-journeys/templates/parts/tabs.hbs'
    },
    route: {
      template: 'modules/uncharted-journeys/templates/tabs/set-route.hbs'
    },
    prepare: {
      template: 'modules/uncharted-journeys/templates/tabs/prepare.hbs'
    },
    journey: {
      template: 'modules/uncharted-journeys/templates/tabs/journey.hbs'
    },
    journeyEnd: {
      template: 'modules/uncharted-journeys/templates/tabs/journey-end.hbs'
    }
  };

  /** Tab group configuration */
  tabGroups = {
    primary: 'route'
  };

  /** Store scroll position for restoration after render */
  _scrollPosition = 0;

  /**
   * Get or create the current journey session
   * @returns {JourneySessionModel}
   */
  get session() {
    let session = JourneySessionManager.getCurrent();
    if (!session) {
      session = JourneySessionManager.createNew();
    }
    return session;
  }

  /** @override */
  async _prepareContext(options = {}) {
    const context = await super._prepareContext(options);

    // Ensure session exists and is saved before rendering
    let session = JourneySessionManager.getCurrent();
    if (!session) {
      session = JourneySessionManager.createNew();
      await JourneySessionManager.save(session);
      // Auto-assign known party members to roles
      await JourneySessionManager.autoAssignDefaultRoles();
      session = JourneySessionManager.getCurrent();
    }

    // Determine which tab should be active based on session stage
    const stageToTab = {
      1: 'route',
      2: 'prepare',
      3: 'journey',
      4: 'journeyEnd'
    };
    const activeTab = stageToTab[session.currentStage] || 'route';
    this.tabGroups.primary = activeTab;

    // Build actors array and lookup object
    const actorsList = game.actors.filter(a => a.type === 'character' && a.hasPlayerOwner);
    const actorsById = {};
    const actorsByName = {};
    for (const actor of actorsList) {
      actorsById[actor.id] = { id: actor.id, name: actor.name };
      actorsByName[actor.name.toLowerCase()] = { id: actor.id, name: actor.name };
    }

    // Default actor assignments by role (pre-select common party members)
    const defaultActorsByRole = {
      leader: 'ignatius',
      quartermaster: 'dante',
      sentry: 'finn',
      outrider: 'rey'
    };

    // Build party members lookup by role for easier template access
    const partyMembersByRole = {};
    for (const member of session.partyMembers) {
      partyMembersByRole[member.role] = member;
    }

    // Apply default selections for roles that don't have assignments yet
    for (const [role, actorName] of Object.entries(defaultActorsByRole)) {
      if (!partyMembersByRole[role]) {
        const actor = actorsByName[actorName.toLowerCase()];
        if (actor) {
          // Create a temporary entry for template rendering (not saved to session)
          partyMembersByRole[role] = {
            role,
            actorId: actor.id,
            isDefault: true  // Flag to indicate this is a default, not saved
          };
        }
      }
    }

    // Build enriched party members with actor names and skill data for display
    const partyMembersWithNames = session.partyMembers.map(member => {
      const actor = actorsById[member.actorId];
      const role = ROLES[member.role];
      return {
        ...member,
        actorName: actor?.name || 'Unknown',
        roleName: role?.name || member.role,
        primarySkill: role?.primarySkill || 'perception',
        alternativeSkill: role?.alternativeSkill || 'stealth'
      };
    });

    // Convert currentEncounter description from Markdown to HTML
    let enrichedCurrentEncounter = session.currentEncounter;

    if (session.currentEncounter?.description) {
      const htmlDescription = JourneyManagerApp.markdownToHtml(session.currentEncounter.description);
      enrichedCurrentEncounter = {
        ...session.currentEncounter,
        descriptionHTML: htmlDescription,
        // Pass through researchPrompt if present (for Old Memories Research encounters)
        researchPrompt: session.currentEncounter.researchPrompt || null,
        // Pass through encounterPrompt if present (for Monster Hunt / Deadly Fight encounters)
        encounterPrompt: session.currentEncounter.encounterPrompt || null,
        // Pass through dungeonPrompt if present (for LAIR / DUNGEON encounters)
        dungeonPrompt: session.currentEncounter.dungeonPrompt || null
      };
    }

    // ============================================
    // JOURNEY MARKER DATA
    // ============================================

    // Get marker counts based on encounter count (shortest path)
    const encounterCount = session.totalEncounterCount;
    const markerCounts = JourneySessionManager.getMarkerCounts(encounterCount);

    // Get journey markers from session (stored in session.journeyMarkers)
    const journeyMarkers = session.journeyMarkers || [];
    const hasMarkers = journeyMarkers.length > 0;

    // Calculate marker statistics
    const totalMarkerCount = journeyMarkers.length;
    const resolvedMarkerCount = journeyMarkers.filter(m => m.status === 'resolved').length;
    const allMarkersResolved = hasMarkers && resolvedMarkerCount === totalMarkerCount;

    // ============================================
    // BIOME NODES DATA
    // ============================================

    // Get biome list from session's biome route
    const biomeIds = session.biomeRoute?.biomes || [];
    const biomeNodesGrouped = JourneySessionManager.getBiomeNodesGrouped();

    // Build biomeSequence for template (with icon and name from BIOME_LOCATIONS)
    const biomeSequence = biomeIds.map(biomeId => {
      const biomeLocationConfig = BIOME_LOCATIONS[biomeId];
      const biomeConfig = BIOMES[biomeId] || {};
      return {
        id: biomeId,
        name: biomeLocationConfig?.name || biomeConfig.name || biomeId,
        icon: biomeLocationConfig?.icon || 'fa-map-marker-alt'
      };
    });

    // Build biomeNodes array for template
    const biomeNodes = biomeIds.map(biomeId => {
      const biomeConfig = BIOMES[biomeId] || { name: biomeId };
      return {
        id: biomeId,
        name: biomeConfig.name || biomeId,
        nodes: (biomeNodesGrouped[biomeId] || []).map(node => ({
          ...node,
          // Ensure all node properties are available
          id: node.id,
          name: node.name || '',
          type: node.type,
          resolved: node.resolved || false
        }))
      };
    });

    // Calculate biome node statistics
    const totalBiomeNodeCount = JourneySessionManager.getTotalBiomeNodeCount();
    const resolvedBiomeNodeCount = JourneySessionManager.getResolvedBiomeNodeCount();
    const allBiomeNodesResolved = JourneySessionManager.allBiomeNodesResolved();

    return foundry.utils.mergeObject(context, {
      session,
      activeTab,
      tabs: this._prepareTabs(),

      // Stage 1: Route data
      distances: DISTANCES,

      // Stage 2: Prepare data
      roles: Object.values(ROLES),
      preparations: Object.values(PREPARATIONS),
      preparationDC: PREPARATION_BASE_DC,
      partyMembersByRole,
      partyMembersWithNames,

      // Stage 3: Journey data
      regions: REGIONS,
      encounterTypes: ENCOUNTER_TYPES,
      paceOptions: PACE_OPTIONS,

      // Journey marker data
      hasMarkers,
      journeyMarkers,
      markerCounts,
      encounterCount,  // For displaying "X Encounters = Y markers"
      totalMarkerCount,
      resolvedMarkerCount,
      allMarkersResolved,

      // Biome nodes data
      biomeSequence,
      biomeNodes,
      totalBiomeNodeCount,
      resolvedBiomeNodeCount,
      allBiomeNodesResolved,

      // Actors for assignment (both array and lookup)
      actors: actorsList,
      actorsById,

      // Current state helpers
      difficulty: session.difficulty,
      baseEncounters: session.baseEncounterCount,
      totalEncounters: session.encounters.length,  // Use actual array length for manual adjustments
      currentEncounter: enrichedCurrentEncounter,
      allPrepsComplete: session.allPreparationsComplete,
      allGroupChecksComplete: session.allGroupChecksComplete,
      allEncountersResolved: session.allEncountersResolved,
      passedGroupChecks: session.passedGroupChecks,
      failedGroupChecks: session.partyMembers.filter(m => m.groupCheckResult === 'failure').length,

      // Resolution helpers
      isGM: game.user.isGM,
      hasResolutionConfig: session.currentEncounter?.encounterType ?
        !!getResolutionConfig(session.currentEncounter.encounterType) : false,
      resolutionSuccessCount: session.currentEncounter?.resolution?.memberResults?.filter(r => r.result === 'success').length || 0,
      roles: ROLES
    });
  }

  /**
   * Prepare tab navigation data
   * @returns {Object} Tab configuration
   */
  _prepareTabs() {
    const session = this.session;
    return {
      route: {
        id: 'route',
        label: 'Route',
        icon: 'fa-map-marked-alt',
        active: this.tabGroups.primary === 'route',
        enabled: true,
        cssClass: session.currentStage >= 1 ? 'complete' : ''
      },
      prepare: {
        id: 'prepare',
        label: 'Prepare',
        icon: 'fa-tasks',
        active: this.tabGroups.primary === 'prepare',
        enabled: session.currentStage >= 2,
        cssClass: session.currentStage >= 2 ? 'complete' : ''
      },
      journey: {
        id: 'journey',
        label: 'Journey',
        icon: 'fa-hiking',
        active: this.tabGroups.primary === 'journey',
        enabled: session.currentStage >= 3,
        cssClass: session.currentStage >= 3 ? 'complete' : ''
      },
      journeyEnd: {
        id: 'journeyEnd',
        label: 'Arrival',
        icon: 'fa-flag-checkered',
        active: this.tabGroups.primary === 'journeyEnd',
        enabled: session.currentStage >= 4,
        cssClass: session.currentStage >= 4 ? 'complete' : ''
      }
    };
  }

  /** @override */
  _preparePartContext(partId, context) {
    context.partId = partId;
    context.tab = this.tabGroups.primary;
    return context;
  }

  /** @override */
  _onRender(context, options) {
    super._onRender(context, options);

    // Activate tooltips
    this.element.querySelectorAll('[data-tooltip]').forEach(el => {
      el.addEventListener('mouseenter', this._onTooltipHover.bind(this));
    });

    // Add change event listener for preparation select (can't use data-action for selects)
    this.element.querySelectorAll('.preparation-select').forEach(select => {
      select.addEventListener('change', this._onPreparationSelectChange.bind(this));
    });

    // Add change event listener for region select
    const regionSelect = this.element.querySelector('#encounterRegion');
    if (regionSelect) {
      regionSelect.addEventListener('change', this._onRegionSelectChange.bind(this));
    }

    // Add blur event listener for biome node name inputs
    this.element.querySelectorAll('.node-name-input').forEach(input => {
      input.addEventListener('blur', this._onBiomeNodeNameChange.bind(this));
    });

    // Restore scroll position if saved
    if (this._scrollPosition > 0) {
      const savedPosition = this._scrollPosition;
      this._scrollPosition = 0;
      // Use setTimeout to ensure DOM is fully rendered and laid out
      setTimeout(() => {
        const scrollContainer = this._getScrollContainer();
        if (scrollContainer) {
          scrollContainer.scrollTop = savedPosition;
        }
      }, 10);
    }
  }

  /**
   * Get the scrollable container element
   * @returns {HTMLElement|null}
   */
  _getScrollContainer() {
    // The active journey-stage is the actual scroll container (has overflow-y: auto in CSS)
    return this.element.querySelector('.journey-stage.active') ||
           this.element.querySelector('.window-content') ||
           this.element;
  }

  /**
   * Save current scroll position
   */
  _saveScrollPosition() {
    const scrollContainer = this._getScrollContainer();
    if (scrollContainer) {
      this._scrollPosition = scrollContainer.scrollTop;
    }
  }

  /**
   * Handle preparation select change
   * @param {Event} event - Change event
   */
  async _onPreparationSelectChange(event) {
    const select = event.currentTarget;
    const role = select.dataset.role;
    const prepId = select.value;

    const session = JourneySessionManager.getCurrent();
    if (!session) return;

    // Build new party members array with updated preparation (DataModel arrays are immutable)
    const newMembers = session.partyMembers.map(m => {
      if (m.role === role) {
        return { ...m, preparationId: prepId, preparationResult: 'pending' };
      }
      return { ...m };
    });

    session.updateSource({ partyMembers: newMembers });
    await JourneySessionManager.save(session);

    // Save scroll position before re-rendering
    this._saveScrollPosition();
    this.render();
  }

  /**
   * Handle region select change
   * Updates both the current encounter's region and the default region for future encounters
   * @param {Event} event - Change event
   */
  async _onRegionSelectChange(event) {
    const select = event.currentTarget;
    const region = select.value;

    const session = JourneySessionManager.getCurrent();
    if (!session) return;

    // Update the current encounter's region and the default region
    const currentIndex = session.currentEncounterIndex;
    const newEncounters = session.encounters.map((e, i) => {
      if (i === currentIndex) {
        return { ...e, region: region };
      }
      return { ...e };
    });

    session.updateSource({
      encounters: newEncounters,
      defaultRegion: region
    });
    await JourneySessionManager.save(session);

    // No need to re-render, just update the data
  }

  /**
   * Handle biome node name change
   * @param {Event} event - Blur event from input
   */
  async _onBiomeNodeNameChange(event) {
    const input = event.currentTarget;
    const nodeId = input.dataset.nodeId;
    const newName = input.value;

    if (!nodeId) return;

    await JourneySessionManager.renameBiomeNode(nodeId, newName);
    // No need to re-render, the input already shows the new value
  }

  /**
   * Handle tooltip display
   */
  _onTooltipHover(event) {
    const tooltip = event.currentTarget.dataset.tooltip;
    if (tooltip) {
      game.tooltip.activate(event.currentTarget, { text: tooltip });
    }
  }

  // ============================================
  // HELPER METHODS
  // ============================================

  /**
   * Convert simple Markdown to HTML
   * Supports: **bold**, *italic*, - lists, line breaks
   * @param {string} markdown - Markdown text
   * @returns {string} HTML string
   */
  static markdownToHtml(markdown) {
    if (!markdown) return '';

    let html = markdown;

    // Escape HTML entities first
    html = html.replace(/&/g, '&amp;')
               .replace(/</g, '&lt;')
               .replace(/>/g, '&gt;');

    // Bold: **text** → <strong>text</strong>
    html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');

    // Italic: *text* → <em>text</em> (but not inside **)
    html = html.replace(/\*([^*]+)\*/g, '<em>$1</em>');

    // Headers: ### text → <h4>text</h4>
    html = html.replace(/^### (.+)$/gm, '<h4>$1</h4>');
    html = html.replace(/^## (.+)$/gm, '<h3>$1</h3>');

    // List items: - text → <li>text</li>
    // First, wrap consecutive list items in <ul>
    const lines = html.split('\n');
    const processedLines = [];
    let inList = false;

    for (const line of lines) {
      const trimmed = line.trim();
      if (trimmed.startsWith('- ')) {
        if (!inList) {
          processedLines.push('<ul>');
          inList = true;
        }
        processedLines.push(`<li>${trimmed.slice(2)}</li>`);
      } else {
        if (inList) {
          processedLines.push('</ul>');
          inList = false;
        }
        if (trimmed) {
          processedLines.push(`<p>${trimmed}</p>`);
        }
      }
    }
    if (inList) {
      processedLines.push('</ul>');
    }

    return processedLines.join('\n');
  }

  /**
   * Save current form values to session before re-rendering
   * This prevents loss of unsaved form data on re-render
   */
  async _saveFormValues() {
    const form = this.element;
    if (!form) return;

    const session = JourneySessionManager.getCurrent();
    if (!session) return;

    // Get form data
    const origin = form.querySelector('[name="origin"]')?.value;
    const destination = form.querySelector('[name="destination"]')?.value;
    const defaultRegion = form.querySelector('[name="defaultRegion"]')?.value;

    // Build updates object for DataModel
    const updates = {};
    if (origin !== undefined && origin !== session.origin) {
      updates.origin = origin;
    }
    if (destination !== undefined && destination !== session.destination) {
      updates.destination = destination;
    }
    if (defaultRegion !== undefined && defaultRegion !== session.defaultRegion) {
      updates.defaultRegion = defaultRegion;
    }

    if (Object.keys(updates).length > 0) {
      session.updateSource(updates);
      await JourneySessionManager.save(session);
    }
  }

  // ============================================
  // NAVIGATION ACTIONS
  // ============================================

  static async #onChangeTab(event, target) {
    const tab = target.dataset.tab;
    if (tab) {
      await this._saveFormValues();
      this.tabGroups.primary = tab;
      this.render();
    }
  }

  // ============================================
  // STAGE 1: SET ROUTE ACTIONS
  // ============================================

  static async #onSetDistance(event, target) {
    await this._saveFormValues();
    const distance = target.dataset.distance;
    await JourneySessionManager.updateField('distance', distance);
    this.render();
  }

  static async #onAdjustWeather(event, target) {
    await this._saveFormValues();
    const delta = parseInt(target.dataset.delta, 10);
    const session = this.session;
    const newValue = Math.max(1, Math.min(10, session.weather + delta));
    await JourneySessionManager.updateField('weather', newValue);
    this.render();
  }

  static async #onAdjustTerrain(event, target) {
    await this._saveFormValues();
    const delta = parseInt(target.dataset.delta, 10);
    const session = this.session;
    const newValue = Math.max(1, Math.min(10, session.terrain + delta));
    await JourneySessionManager.updateField('terrain', newValue);
    this.render();
  }

  static async #onAdjustNemesis(event, target) {
    await this._saveFormValues();
    const delta = parseInt(target.dataset.delta, 10);
    const session = this.session;
    const newValue = Math.max(0, Math.min(10, session.nemesis + delta));
    await JourneySessionManager.updateField('nemesis', newValue);
    this.render();
  }

  static async #onToggleNemesis(event, target) {
    await this._saveFormValues();
    const session = this.session;
    await JourneySessionManager.updateField('nemesisActive', !session.nemesisActive);
    this.render();
  }

  static async #onSetBiome(event, target) {
    const slot = target.dataset.biomeSlot; // 'start', 'middle', or 'end'
    const value = target.value;

    const session = JourneySessionManager.getCurrent();
    if (!session) return;

    // Build updated biomeRoute
    const biomeRoute = {
      start: session.biomeRoute?.start || 'steppe',
      middle: session.biomeRoute?.middle || null,
      end: session.biomeRoute?.end || 'city'
    };

    // Update the specific slot
    if (slot === 'middle') {
      biomeRoute.middle = value || null; // Empty string becomes null
    } else {
      biomeRoute[slot] = value;
    }

    await JourneySessionManager.setBiomeRoute(biomeRoute);
    this.render();
  }

  /**
   * Add a biome to the route sequence
   */
  static async #onAddBiome(event, target) {
    const session = JourneySessionManager.getCurrent();
    if (!session) return;

    // Get the selected biome from the dropdown
    const select = this.element.querySelector('#add-biome-select');
    const biomeId = select?.value;

    if (!biomeId) {
      ui.notifications.warn('Bitte wähle ein Biom aus.');
      return;
    }

    // Get current biomes and add the new one
    const currentBiomes = session.biomeRoute?.biomes || ['grassland'];
    const newBiomes = [...currentBiomes, biomeId];

    await JourneySessionManager.setBiomeRoute(newBiomes);

    // Reset the select
    if (select) select.value = '';

    this.render();
  }

  /**
   * Remove a biome from the route sequence
   */
  static async #onRemoveBiome(event, target) {
    const index = parseInt(target.dataset.index, 10);
    if (isNaN(index)) return;

    const session = JourneySessionManager.getCurrent();
    if (!session) return;

    const currentBiomes = session.biomeRoute?.biomes || ['grassland'];

    // Don't allow removing if only one biome left
    if (currentBiomes.length <= 1) {
      ui.notifications.warn('Mindestens ein Biom muss ausgewählt sein.');
      return;
    }

    // Remove the biome at the specified index
    const newBiomes = currentBiomes.filter((_, i) => i !== index);

    await JourneySessionManager.setBiomeRoute(newBiomes);
    this.render();
  }

  static async #onConfirmRoute(event, target) {
    const session = this.session;

    // Validate route is set
    if (!session.distance) {
      ui.notifications.warn('Please select a journey distance.');
      return;
    }

    // Get form values for origin/destination
    // Note: With ApplicationV2 tag:'form', this.element IS the form
    const form = this.element;
    const formData = new FormData(form);

    const updates = {
      origin: formData.get('origin') || 'Unknown',
      destination: formData.get('destination') || 'Unknown',
      currentStage: 2
    };

    const currentSession = JourneySessionManager.getCurrent();
    currentSession.updateSource(updates);
    await JourneySessionManager.save(currentSession);

    // Generate the route map based on biome selection
    await JourneySessionManager.initializeRouteMap();

    // Send route summary to chat
    const updatedSession = JourneySessionManager.getCurrent();
    await this._sendRouteSummaryToChat(updatedSession);

    ui.notifications.info('Route confirmed! Proceeding to preparation phase.');
    this.tabGroups.primary = 'prepare';
    this.render();
  }

  /**
   * Send route summary to chat
   */
  async _sendRouteSummaryToChat(session) {
    const content = `
      <div class="uncharted-journeys chat-card route-summary">
        <h3><i class="fas fa-route"></i> Journey Route Set</h3>
        <div class="route-details">
          <p><strong>From:</strong> ${session.origin}</p>
          <p><strong>To:</strong> ${session.destination}</p>
          <p><strong>Distance:</strong> ${DISTANCES[session.distance]?.name || session.distance}</p>
          <p><strong>Base Encounters:</strong> ${session.baseEncounterCount}</p>
          <p><strong>Starting Difficulty:</strong> DC ${session.difficulty}</p>
        </div>
      </div>
    `;

    await ChatMessage.create({
      content,
      speaker: { alias: 'Uncharted Journeys' }
    });
  }

  // ============================================
  // STAGE 2: PREPARATION ACTIONS
  // ============================================

  static async #onAssignRole(event, target) {
    const role = target.dataset.role;
    const actorId = target.closest('.role-assignment').querySelector('select')?.value;

    if (!actorId) {
      ui.notifications.warn('Please select an actor for this role.');
      return;
    }

    await JourneySessionManager.addPartyMember(actorId, role);
    this.render();
  }

  static async #onAssignAllRoles(event, target) {
    const form = this.element;
    const roleSelects = form.querySelectorAll('.actor-select[data-role]');

    // Collect all role assignments
    const assignments = [];
    const usedActors = new Set();
    let hasEmpty = false;

    for (const select of roleSelects) {
      const role = select.dataset.role;
      const actorId = select.value;

      if (!actorId) {
        hasEmpty = true;
        continue;
      }

      if (usedActors.has(actorId)) {
        ui.notifications.warn('Each actor can only be assigned to one role. Please select different actors.');
        return;
      }

      usedActors.add(actorId);
      assignments.push({ actorId, role });
    }

    if (assignments.length === 0) {
      ui.notifications.warn('Please select at least one actor for a role.');
      return;
    }

    if (hasEmpty && assignments.length < 4) {
      ui.notifications.info(`Assigning ${assignments.length} role(s). You can assign more later.`);
    }

    // Build new party members array with all assignments
    const session = JourneySessionManager.getCurrent();
    if (!session) return;

    const newMembers = assignments.map(({ actorId, role }) => ({
      actorId,
      role,
      isPrimary: true,
      preparationId: '',
      preparationResult: 'pending',
      roleAbilityUsed: false,
      groupCheckResult: 'pending'
    }));

    session.updateSource({ partyMembers: newMembers });
    await JourneySessionManager.save(session);

    // Create role effect on each actor
    for (const { actorId, role } of assignments) {
      const actor = game.actors.get(actorId);
      if (!actor) continue;

      const roleData = ROLES[role];
      if (!roleData) continue;

      // Remove any existing journey role effects first
      const existingEffects = actor.items.filter(i =>
        i.type === 'effect' && i.name.startsWith('Journey Role:')
      );
      for (const effect of existingEffects) {
        await effect.delete();
      }

      // Get the ability description - handle both single ability and multiple abilities
      let abilityName, abilityDescription;
      if (roleData.ability) {
        abilityName = roleData.ability.name;
        abilityDescription = roleData.ability.shortDescription || roleData.ability.description;
      } else if (roleData.abilities) {
        // For roles with multiple abilities (like Outrider), list them all
        const abilityList = Object.values(roleData.abilities);
        abilityName = abilityList.map(a => a.name).join(' / ');
        abilityDescription = abilityList.map(a => a.shortDescription || a.description).join('<br>');
      } else {
        abilityName = roleData.name;
        abilityDescription = roleData.description;
      }

      // Create the new role effect
      const effectData = {
        type: 'effect',
        name: `Journey Role: ${roleData.name}`,
        img: `icons/svg/${roleData.icon.replace('fa-', '')}.svg`,
        system: {
          description: {
            value: `<p><strong>${abilityName}</strong></p><p>${abilityDescription}</p>`
          },
          duration: {
            unit: 'unlimited',
            value: -1
          },
          tokenIcon: {
            show: true
          }
        },
        flags: {
          'uncharted-journeys': {
            roleId: role,
            isJourneyRole: true
          }
        }
      };

      // Use appropriate icons for each role (V13-compatible SVG icons)
      const iconMap = {
        'fa-crown': 'icons/svg/sun.svg',           // Leader - sun/authority
        'fa-horse': 'icons/svg/wing.svg',          // Outrider - movement/scouting
        'fa-backpack': 'icons/svg/chest.svg',      // Quartermaster - supplies/storage
        'fa-eye': 'icons/svg/eye.svg'              // Sentry - perception/watchfulness
      };
      effectData.img = iconMap[roleData.icon] || 'icons/svg/aura.svg';

      await actor.createEmbeddedDocuments('Item', [effectData]);
    }

    ui.notifications.info(`Assigned ${assignments.length} party member(s) to roles.`);
    this.render();
  }

  static async #onSendPreparationList(event, target) {
    const session = this.session;
    const preps = Object.values(PREPARATIONS);

    // Build list of preparations with their skills
    const prepList = preps.map(prep => {
      let skills = prep.skillSlug;
      if (prep.altSkillSlug) {
        skills += ` / ${prep.altSkillSlug}`;
      }
      if (prep.thirdSkillSlug) {
        skills += ` / ${prep.thirdSkillSlug}`;
      }
      return `<li><strong>${prep.name}</strong> (${skills})</li>`;
    }).join('');

    const content = `
      <div class="uncharted-journeys chat-card preparation-list">
        <h3><i class="fas fa-clipboard-list"></i> Available Preparations</h3>
        <p>Each party member may attempt <strong>one</strong> preparation before the journey. DC: <strong>${session.difficulty}</strong></p>
        <ul class="prep-list">
          ${prepList}
        </ul>
      </div>
    `;

    await ChatMessage.create({
      content,
      speaker: { alias: 'Uncharted Journeys' }
    });
  }

  static async #onSendRestOptions(event, target) {
    const session = this.session;

    // Build rest options for each party member
    const memberRows = session.partyMembers.map(member => {
      const actor = game.actors.get(member.actorId);
      if (!actor) return '';

      return `
        <div class="rest-choice-row" data-actor-id="${member.actorId}">
          <span class="actor-name"><strong>${actor.name}</strong></span>
          <div class="rest-buttons">
            <button type="button" class="rest-btn" data-action="takeRest" data-actor-id="${member.actorId}">
              <i class="fas fa-bed"></i> Rest
            </button>
            <button type="button" class="stay-up-btn" data-action="stayUp" data-actor-id="${member.actorId}">
              <i class="fas fa-moon"></i> Stay Up
            </button>
          </div>
        </div>
      `;
    }).join('');

    const content = `
      <div class="uncharted-journeys chat-card rest-options">
        <h3><i class="fas fa-bed"></i> Rest Before the Journey</h3>
        <p>Each party member may choose to <strong>Rest</strong> (gain benefits of a long rest) or <strong>Stay Up</strong> (gain 1 level of exhaustion but may attempt another preparation).</p>
        <div class="rest-choices">
          ${memberRows}
        </div>
      </div>
    `;

    await ChatMessage.create({
      content,
      speaker: { alias: 'Uncharted Journeys' },
      flags: {
        'uncharted-journeys': {
          type: 'rest-options'
        }
      }
    });
  }

  static async #onRollPreparation(event, target) {
    const role = target.dataset.role;
    const session = JourneySessionManager.getCurrent();
    const member = session.partyMembers.find(m => m.role === role);

    if (!member || !member.preparationId) {
      ui.notifications.warn('No preparation selected for this role.');
      return;
    }

    const prep = getPreparation(member.preparationId);
    const actor = game.actors.get(member.actorId);

    if (!actor) {
      ui.notifications.error('Actor not found.');
      return;
    }

    const dc = session.difficulty; // Use current journey DC, not static preparation DC
    const traits = prep.traits?.join(',') || '';

    // Build skill check buttons for all available skills
    const skills = [prep.skillSlug];
    if (prep.altSkillSlug) skills.push(prep.altSkillSlug);
    if (prep.thirdSkillSlug) skills.push(prep.thirdSkillSlug);

    const skillChecks = skills.map(skill => {
      const skillDisplay = skill.charAt(0).toUpperCase() + skill.slice(1);
      return `<p>@Check[${skill}|dc:${dc}${traits ? '|traits:' + traits : ''}]{${skillDisplay} Check}</p>`;
    }).join('');

    // Rally the Party no longer needs a dropdown - it simply provides Will save bonuses

    // Get outcome descriptions from the new structure
    const successDesc = prep.outcomes?.success?.description || 'Kein spezieller Effekt.';
    const failureDesc = prep.outcomes?.failure?.description || 'Kein spezieller Effekt.';

    // Check if this preparation uses only 2 outcome levels
    const isTwoLevel = prep.twoLevelOutcome === true;

    let outcomeSection;
    let buttonsSection;

    if (isTwoLevel) {
      // Two-level outcome - only show Success/Failure
      outcomeSection = `
        <p><strong>Success</strong> ${successDesc}</p>
        <p><strong>Failure</strong> ${failureDesc}</p>
      `;
      buttonsSection = `
        <div class="outcome-buttons" data-role="${role}">
          <button type="button" data-action="setPreparationResult" data-role="${role}" data-result="success">Success</button>
          <button type="button" data-action="setPreparationResult" data-role="${role}" data-result="failure">Failure</button>
        </div>
      `;
    } else {
      // Four-level outcome - show all degrees of success
      const critSuccessDesc = prep.outcomes?.criticalSuccess?.description || 'Kein spezieller Effekt.';
      const critFailureDesc = prep.outcomes?.criticalFailure?.description || 'Kein spezieller Effekt.';
      outcomeSection = `
        <p><strong>Critical Success</strong> ${critSuccessDesc}</p>
        <p><strong>Success</strong> ${successDesc}</p>
        <p><strong>Failure</strong> ${failureDesc}</p>
        <p><strong>Critical Failure</strong> ${critFailureDesc}</p>
      `;
      buttonsSection = `
        <div class="outcome-buttons" data-role="${role}">
          <button type="button" data-action="setPreparationResult" data-role="${role}" data-result="criticalSuccess">Critical Success</button>
          <button type="button" data-action="setPreparationResult" data-role="${role}" data-result="success">Success</button>
          <button type="button" data-action="setPreparationResult" data-role="${role}" data-result="failure">Failure</button>
          <button type="button" data-action="setPreparationResult" data-role="${role}" data-result="criticalFailure">Critical Failure</button>
        </div>
      `;
    }

    const content = `
      <div class="uncharted-journeys chat-card preparation-check">
        <h3>${prep.name}</h3>
        <p><strong>${actor.name}</strong> versucht ${prep.name}.</p>
        <p>${prep.description}</p>
        <p><strong>DC</strong> ${dc}</p>
        <div class="check-prompt skill-options">
          ${skillChecks}
        </div>
        <hr>
        ${outcomeSection}
        <hr>
        ${buttonsSection}
      </div>
    `;

    await ChatMessage.create({
      content,
      speaker: { alias: 'Uncharted Journeys' },
      flags: {
        'uncharted-journeys': {
          type: 'preparation',
          role,
          preparationId: member.preparationId
        }
      }
    });
  }

  static async #onSendSkillCheck(event, target) {
    const role = target.dataset.role;
    const skill = target.dataset.skill;
    const session = this.session;
    const difficulty = session.difficulty;

    const member = session.partyMembers.find(m => m.role === role);
    if (!member) return;

    const actor = game.actors.get(member.actorId);
    if (!actor) return;

    // Capitalize skill name for display
    const skillDisplay = skill.charAt(0).toUpperCase() + skill.slice(1);

    // Send individual skill check to chat
    const content = `
      <div class="uncharted-journeys chat-card skill-check">
        <h3><i class="fas fa-dice-d20"></i> ${skillDisplay} Check</h3>
        <p><strong>${actor.name}</strong> makes a ${skillDisplay} check for the Group Journey Check.</p>
        <p class="difficulty"><strong>DC:</strong> ${difficulty}</p>
        <div class="check-prompt">
          <p>@Check[${skill}|dc:${difficulty}]{${skillDisplay} Check}</p>
        </div>
      </div>
    `;

    await ChatMessage.create({
      content,
      speaker: { alias: 'Uncharted Journeys' }
    });
  }

  static async #onSetGroupCheckResult(event, target) {
    const role = target.dataset.role;
    const result = target.dataset.result;

    await JourneySessionManager.setGroupCheckResult(role, result);
    this.render();
  }

  static async #onConfirmPreparation(event, target) {
    const session = this.session;

    // Check all roles are assigned
    const requiredRoles = ['leader', 'outrider', 'quartermaster', 'sentry'];
    const assignedRoles = session.partyMembers.map(m => m.role);
    const missingRoles = requiredRoles.filter(r => !assignedRoles.includes(r));

    if (missingRoles.length > 0) {
      ui.notifications.warn(`Please assign actors to all roles: ${missingRoles.join(', ')}`);
      return;
    }

    // Check all group checks are complete
    if (!session.allGroupChecksComplete) {
      ui.notifications.warn('Please complete all group checks before proceeding.');
      return;
    }

    // Initialize encounters and advance stage
    await JourneySessionManager.initializeEncounters();
    await JourneySessionManager.advanceStage();

    ui.notifications.info('Preparation complete! The journey begins.');
    this.tabGroups.primary = 'journey';
    this.render();
  }

  // ============================================
  // STAGE 3: JOURNEY ACTIONS
  // ============================================

  static async #onSetPace(event, target) {
    const pace = target.dataset.pace;
    await JourneySessionManager.updateField('pace', pace);
    this.render();
  }

  /**
   * Add an encounter to the journey
   */
  static async #onAddEncounter(event, target) {
    const session = JourneySessionManager.getCurrent();
    if (!session) return;

    // Create new encounter
    const newEncounter = {
      id: foundry.utils.randomID(),
      region: session.defaultRegion,
      typeRoll: null,
      encounterType: '',
      encounterRoll: null,
      title: '',
      description: '',
      status: 'pending',
      resolution: {
        step: 'pending',
        choiceMade: '',
        keyRoleResult: '',
        dcModifier: 0,
        advantageState: '',
        memberResults: [],
        outcome: '',
        effectsApplied: false
      }
    };

    // Add to end of encounters array
    const newEncounters = [...session.encounters, newEncounter];
    session.updateSource({ encounters: newEncounters });
    await JourneySessionManager.save(session);

    ui.notifications.info(`Added encounter. Total: ${newEncounters.length}`);
    this.render();
  }

  /**
   * Remove an encounter from the journey (removes last pending encounter)
   */
  static async #onRemoveEncounter(event, target) {
    const session = JourneySessionManager.getCurrent();
    if (!session) return;

    // Don't allow removing if only 1 encounter left
    if (session.encounters.length <= 1) {
      ui.notifications.warn('Cannot remove the last encounter.');
      return;
    }

    // Find the last pending encounter to remove
    // We remove from the end, but only if it's pending (not active or resolved)
    const encounters = session.encounters;
    let removeIndex = -1;

    // First try to find a pending encounter from the end
    for (let i = encounters.length - 1; i >= 0; i--) {
      if (encounters[i].status === 'pending') {
        removeIndex = i;
        break;
      }
    }

    if (removeIndex === -1) {
      ui.notifications.warn('No pending encounters to remove.');
      return;
    }

    // Remove the encounter
    const newEncounters = encounters.filter((_, i) => i !== removeIndex);
    session.updateSource({ encounters: newEncounters });
    await JourneySessionManager.save(session);

    ui.notifications.info(`Removed encounter. Total: ${newEncounters.length}`);
    this.render();
  }

  static async #onRollEncounterType(event, target) {
    const session = JourneySessionManager.getCurrent();
    const encounter = session.encounters[session.currentEncounterIndex];

    if (!encounter) {
      ui.notifications.error('No active encounter.');
      return;
    }

    // Roll 1d12
    const roll = new Roll('1d12');
    await roll.evaluate();

    // Get encounter type
    const typeIndex = roll.total - 1;
    const encounterType = ENCOUNTER_TYPES[typeIndex];

    // Update encounter using new array (DataModel arrays are immutable)
    const newEncounters = session.encounters.map((e, i) => {
      if (i === session.currentEncounterIndex) {
        return { ...e, typeRoll: roll.total, encounterType: encounterType };
      }
      return { ...e };
    });
    session.updateSource({ encounters: newEncounters });
    await JourneySessionManager.save(session);

    // Show roll in chat
    await roll.toMessage({
      flavor: `<strong>Encounter Type Roll</strong> (Encounter ${session.currentEncounterIndex + 1}/${session.totalEncounterCount})`,
      speaker: { alias: 'Uncharted Journeys' }
    }, { rollMode: 'gmroll' });

    this.render();
  }

  static async #onRollEncounter(event, target) {
    const session = JourneySessionManager.getCurrent();
    const encounter = session.encounters[session.currentEncounterIndex];

    if (!encounter?.encounterType) {
      ui.notifications.warn('Roll encounter type first!');
      return;
    }

    // Roll 1d10
    const roll = new Roll('1d10');
    await roll.evaluate();

    // Get encounter details - use the encounter's region (which is updated when dropdown changes)
    // Fall back to defaultRegion if encounter.region is not set
    const region = encounter.region || session.defaultRegion;
    const encounterType = encounter.encounterType;
    const encounterIndex = roll.total - 1;

    const regionData = ENCOUNTERS[region];
    if (!regionData) {
      ui.notifications.error(`Region "${region}" not found.`);
      return;
    }

    const typeData = regionData[encounterType];
    if (!typeData || typeData.length === 0) {
      ui.notifications.error(`No encounters for "${encounterType}" in "${region}".`);
      return;
    }

    const encounterData = typeData[encounterIndex];
    if (!encounterData) {
      ui.notifications.error(`Encounter #${roll.total} not found.`);
      return;
    }

    // Update encounter using new array (DataModel arrays are immutable)
    const newEncounters = session.encounters.map((e, i) => {
      if (i === session.currentEncounterIndex) {
        return {
          ...e,
          encounterRoll: roll.total,
          title: encounterData.title,
          description: encounterData.description,
          // Include researchPrompt if present (for Old Memories Research encounters)
          researchPrompt: encounterData.researchPrompt || null,
          // Include encounterPrompt if present (for Monster Hunt / Deadly Fight encounters)
          encounterPrompt: encounterData.encounterPrompt || null,
          // Include dungeonPrompt if present (for LAIR / DUNGEON encounters)
          dungeonPrompt: encounterData.dungeonPrompt || null
        };
      }
      return { ...e };
    });
    session.updateSource({ encounters: newEncounters });
    await JourneySessionManager.save(session);

    // Show roll in chat
    await roll.toMessage({
      flavor: `<strong>Encounter Roll</strong> (${region} - ${encounterType})`,
      speaker: { alias: 'Uncharted Journeys' }
    }, { rollMode: 'gmroll' });

    this.render();
  }

  static async #onSendEncounterToChat(event, target) {
    const session = this.session;
    const encounter = session.currentEncounter;

    if (!encounter?.title) {
      ui.notifications.warn('No encounter to send!');
      return;
    }

    const encounterTypeUUID = globalThis.UnchartedJourneys?.encounterTypeUUIDs?.[encounter.encounterType] || null;

    const content = await renderTemplate(
      'modules/uncharted-journeys/templates/chat-encounter.hbs',
      {
        region: session.defaultRegion,
        encounterType: encounter.encounterType,
        encounterTypeUUID,
        roll: encounter.encounterRoll,
        encounter: {
          title: encounter.title,
          description: encounter.description
        },
        encounterNumber: session.currentEncounterIndex + 1,
        totalEncounters: session.encounters.length
      }
    );

    await ChatMessage.create({
      content,
      whisper: ChatMessage.getWhisperRecipients('GM'),
      speaker: { alias: 'Uncharted Journeys' }
    });

    ui.notifications.info('Encounter sent to chat!');
  }

  static async #onResolveEncounter(event, target) {
    const session = JourneySessionManager.getCurrent();
    const encounter = session.encounters[session.currentEncounterIndex];

    if (!encounter) return;

    // Update encounter status using new array (DataModel arrays are immutable)
    const newEncounters = session.encounters.map((e, i) => {
      if (i === session.currentEncounterIndex) {
        return { ...e, status: 'resolved' };
      }
      return { ...e };
    });
    session.updateSource({ encounters: newEncounters });
    await JourneySessionManager.save(session);

    this.render();
  }

  /**
   * Begin the resolution flow for the current encounter
   * Sends appropriate chat messages based on the encounter's resolution pattern
   */
  static async #onBeginResolution(event, target) {
    const session = JourneySessionManager.getCurrent();
    const encounter = session.encounters[session.currentEncounterIndex];

    if (!encounter?.encounterType) {
      ui.notifications.warn('No encounter type set!');
      return;
    }

    const config = getResolutionConfig(encounter.encounterType);
    if (!config) {
      ui.notifications.warn(`No resolution config for "${encounter.encounterType}". Use manual resolution.`);
      return;
    }

    const dc = session.difficulty;

    // Determine the first step based on pattern
    let firstStep;
    switch (config.pattern) {
      case 'choice':
        firstStep = 'choice';
        break;
      case 'keyRole-then-group':
      case 'keyRole-then-saves':
      case 'keyRole-then-group-conditional':
        firstStep = 'keyRole';
        break;
      case 'group-only':
        firstStep = 'group';
        break;
      default:
        firstStep = 'pending';
    }

    // Update resolution step
    await JourneySessionManager.updateEncounterResolution({ step: firstStep });

    // Send the appropriate chat message
    if (firstStep === 'choice') {
      await this._sendChoiceChat(config, session);
    } else if (firstStep === 'keyRole') {
      await this._sendKeyRoleCheckChat(config, session, dc);
    } else if (firstStep === 'group') {
      await this._sendGroupCheckChat(config, session, dc);
    }

    this.render();
  }

  /**
   * Send choice prompt to chat (for Monster Hunt pattern)
   */
  async _sendChoiceChat(config, session) {
    const encounter = session.currentEncounter;

    const choices = Object.entries(config.choices).map(([id, choice]) => ({
      id,
      label: choice.label,
      icon: choice.icon,
      description: choice.description
    }));

    const content = await renderTemplate(
      'modules/uncharted-journeys/templates/chat-choice.hbs',
      {
        encounterType: encounter.encounterType,
        prompt: config.choicePrompt || 'The party must decide how to proceed:',
        choices,
        encounterIndex: session.currentEncounterIndex,
        isGM: game.user.isGM
      }
    );

    await ChatMessage.create({
      content,
      speaker: { alias: 'Uncharted Journeys' },
      flags: {
        'uncharted-journeys': {
          type: 'choice',
          encounterIndex: session.currentEncounterIndex,
          config: config
        }
      }
    });
  }

  /**
   * Send key role check prompt to chat
   */
  async _sendKeyRoleCheckChat(config, session, dc) {
    const encounter = session.currentEncounter;
    const keyRole = config.keyRole;
    const member = session.partyMembers.find(m => m.role === keyRole);

    if (!member) {
      ui.notifications.error(`No party member assigned to ${keyRole} role!`);
      return;
    }

    const actor = game.actors.get(member.actorId);
    if (!actor) {
      ui.notifications.error('Actor not found!');
      return;
    }

    const roleData = ROLES[keyRole];
    const checkConfig = config.keyRoleCheck;

    // Build skill check enricher (or show "See description" if skill varies)
    let skillCheck;
    if (checkConfig.skill) {
      skillCheck = `@Check[${checkConfig.skill}|dc:${dc}]{${checkConfig.skill.charAt(0).toUpperCase() + checkConfig.skill.slice(1)} Check}`;
    } else if (checkConfig.skillVariable) {
      skillCheck = `<em>Skill varies by encounter - see description (DC ${dc})</em>`;
    } else {
      skillCheck = `<em>DC ${dc} check</em>`;
    }

    // Determine if this check has a critical success option
    const hasCriticalSuccess = !!checkConfig.successBy5Effect;

    // Build effects preview
    const effectsPreview = [];
    if (checkConfig.successEffect) {
      if (checkConfig.successEffect.groupDcMod) {
        effectsPreview.push({ type: 'success', text: `DC ${checkConfig.successEffect.groupDcMod > 0 ? '+' : ''}${checkConfig.successEffect.groupDcMod} on group checks` });
      }
      if (checkConfig.successEffect.groupAdvantage) {
        effectsPreview.push({ type: 'success', text: 'Advantage on group checks' });
      }
    }
    if (checkConfig.successBy5Effect) {
      if (checkConfig.successBy5Effect.saveAdvantage) {
        effectsPreview.push({ type: 'critSuccess', text: 'Success by 5+: Advantage on saves' });
      }
      if (checkConfig.successBy5Effect.groupAdvantage) {
        effectsPreview.push({ type: 'critSuccess', text: 'Success by 5+: Advantage on group checks' });
      }
    }
    if (checkConfig.failureEffect) {
      if (checkConfig.failureEffect.groupDcMod) {
        effectsPreview.push({ type: 'failure', text: `DC ${checkConfig.failureEffect.groupDcMod > 0 ? '+' : ''}${checkConfig.failureEffect.groupDcMod} on group checks` });
      }
      if (checkConfig.failureEffect.saveDisadvantage) {
        effectsPreview.push({ type: 'failure', text: 'Disadvantage on saves' });
      }
      if (checkConfig.failureEffect.groupDisadvantage) {
        effectsPreview.push({ type: 'failure', text: 'Disadvantage on group checks' });
      }
    }

    const content = await renderTemplate(
      'modules/uncharted-journeys/templates/chat-key-role-check.hbs',
      {
        encounterType: encounter.encounterType,
        roleName: roleData?.name || keyRole,
        actorName: actor.name,
        dc,
        skillCheck,
        checkDescription: checkConfig.description,
        hasCriticalSuccess,
        effectsPreview,
        encounterIndex: session.currentEncounterIndex,
        isGM: game.user.isGM
      }
    );

    // Send to GM and the specific player who needs to make the check
    const whisperTargets = ChatMessage.getWhisperRecipients('GM');

    // Add the actor's owner(s) to whisper targets
    if (actor.hasPlayerOwner) {
      const ownerIds = game.users.filter(u => actor.testUserPermission(u, 'OWNER') && !u.isGM).map(u => u.id);
      for (const ownerId of ownerIds) {
        if (!whisperTargets.includes(ownerId)) {
          whisperTargets.push(ownerId);
        }
      }
    }

    await ChatMessage.create({
      content,
      whisper: whisperTargets,
      speaker: { alias: 'Uncharted Journeys' },
      flags: {
        'uncharted-journeys': {
          type: 'key-role-check',
          encounterIndex: session.currentEncounterIndex,
          config: config
        }
      }
    });
  }

  /**
   * Send group check prompt to chat
   */
  async _sendGroupCheckChat(config, session, dc, dcModifier = 0, advantageState = '') {
    const encounter = session.currentEncounter;
    const checkConfig = config.groupCheck;
    const adjustedDc = dc + dcModifier;

    // Build skill check enrichers for each skill option
    const skillChecks = checkConfig.skills.map(skill => {
      const skillDisplay = skill.charAt(0).toUpperCase() + skill.slice(1);
      return `@Check[${skill}|dc:${adjustedDc}]{${skillDisplay} Check}`;
    });

    // Add save type if specified (e.g., Natural Wonders uses Will save)
    let saveCheck = null;
    if (checkConfig.saveType) {
      const saveDisplay = checkConfig.saveType.charAt(0).toUpperCase() + checkConfig.saveType.slice(1);
      saveCheck = `@Check[${checkConfig.saveType}|dc:${adjustedDc}]{${saveDisplay} Save}`;
    }

    // Build party members list
    const partyMembers = session.partyMembers.map(member => {
      const actor = game.actors.get(member.actorId);
      const roleData = ROLES[member.role];
      return {
        actorId: member.actorId,
        name: actor?.name || 'Unknown',
        roleName: roleData?.name || member.role
      };
    });

    // Build replacement option data if applicable
    let canReplace = false;
    let replacerId = null;
    let replacerName = '';
    let replacerRole = '';
    let otherMembers = [];

    if (checkConfig.canReplace) {
      const replacer = session.partyMembers.find(m => m.role === checkConfig.canReplace);
      if (replacer) {
        const replacerActor = game.actors.get(replacer.actorId);
        const replacerRoleData = ROLES[replacer.role];
        canReplace = true;
        replacerId = replacer.actorId;
        replacerName = replacerActor?.name || 'Unknown';
        replacerRole = replacerRoleData?.name || replacer.role;
        otherMembers = partyMembers.filter(m => m.actorId !== replacer.actorId);
      }
    }

    // Get key role name if applicable
    let keyRoleName = '';
    if (config.keyRole) {
      const keyRoleData = ROLES[config.keyRole];
      keyRoleName = keyRoleData?.name || config.keyRole;
    }

    const content = await renderTemplate(
      'modules/uncharted-journeys/templates/chat-group-check.hbs',
      {
        dc: adjustedDc,
        dcModifier,
        keyRoleName,
        advantageState,
        skillChecks,
        saveCheck,
        partyMembers,
        partySize: partyMembers.length,
        canReplace,
        replacerId,
        replacerName,
        replacerRole,
        otherMembers,
        outcomes: checkConfig.outcomes ? {
          all: checkConfig.outcomes.all?.description || 'All party members succeed',
          majority: checkConfig.outcomes.majority?.description || 'Majority succeed',
          minority: checkConfig.outcomes.minority?.description || 'Half or fewer succeed',
          none: checkConfig.outcomes.none?.description || 'No one succeeds'
        } : null,
        encounterIndex: session.currentEncounterIndex,
        isGM: game.user.isGM
      }
    );

    await ChatMessage.create({
      content,
      speaker: { alias: 'Uncharted Journeys' },
      flags: {
        'uncharted-journeys': {
          type: 'group-check',
          encounterIndex: session.currentEncounterIndex,
          config: config
        }
      }
    });
  }

  /**
   * Send individual saves prompt to chat
   */
  async _sendIndividualSavesChat(config, session, dc, advantageState = '') {
    const saveConfig = config.individualSaves;

    // Build save enricher
    const saveCheck = `@Check[${saveConfig.save}|dc:${dc}]{${saveConfig.save.charAt(0).toUpperCase() + saveConfig.save.slice(1)} Save}`;

    // Build party members list
    const partyMembers = session.partyMembers.map(member => {
      const actor = game.actors.get(member.actorId);
      const roleData = ROLES[member.role];
      return {
        actorId: member.actorId,
        name: actor?.name || 'Unknown',
        roleName: roleData?.name || member.role
      };
    });

    // Get key role name if applicable
    let keyRoleName = '';
    if (config.keyRole) {
      const keyRoleData = ROLES[config.keyRole];
      keyRoleName = keyRoleData?.name || config.keyRole;
    }

    // Determine if outcomes are individual (success/failure) or group (all/majority/minority/none)
    const hasGroupOutcomes = saveConfig.outcomes?.all || saveConfig.outcomes?.majority ||
                             saveConfig.outcomes?.minority || saveConfig.outcomes?.none;

    let outcomesData = null;
    if (saveConfig.outcomes) {
      if (hasGroupOutcomes) {
        // Group outcomes - show what happens based on total successes
        outcomesData = {
          isGroup: true,
          all: saveConfig.outcomes.all?.description || 'Complete success',
          majority: saveConfig.outcomes.majority?.description || 'Partial success',
          minority: saveConfig.outcomes.minority?.description || 'Failure',
          none: saveConfig.outcomes.none?.description || 'Critical failure'
        };
      } else {
        // Individual outcomes - show what happens to each person
        outcomesData = {
          isGroup: false,
          success: saveConfig.outcomes.success?.description || 'No negative consequences',
          failure: saveConfig.outcomes.failure?.description || 'Negative effect'
        };
      }
    }

    const content = await renderTemplate(
      'modules/uncharted-journeys/templates/chat-individual-saves.hbs',
      {
        dc,
        keyRoleName,
        advantageState,
        saveCheck,
        partyMembers,
        partySize: partyMembers.length,
        outcomes: outcomesData,
        encounterIndex: session.currentEncounterIndex,
        isGM: game.user.isGM
      }
    );

    await ChatMessage.create({
      content,
      speaker: { alias: 'Uncharted Journeys' },
      flags: {
        'uncharted-journeys': {
          type: 'individual-saves',
          encounterIndex: session.currentEncounterIndex,
          config: config
        }
      }
    });
  }

  /**
   * Send outcome chat message (for conditional patterns like Deadly Fight on key role failure)
   */
  async _sendOutcomeChat(config, session, outcome, source = '') {
    // Find the outcome description from the config
    let outcomeText = '';
    let isCombat = false;

    // For key role failures that skip to result, check groupCheck outcomes
    if (config.groupCheck?.outcomes) {
      // Try to find an outcome whose effect matches the skip result
      for (const [tier, data] of Object.entries(config.groupCheck.outcomes)) {
        if (data.effect === outcome) {
          outcomeText = data.description;
          isCombat = outcome.includes('Surprised') || outcome.includes('combat');
          break;
        }
      }
    }

    // Fallback descriptions based on common outcome effects
    if (!outcomeText) {
      switch (outcome) {
        case 'partySurprised':
          outcomeText = 'The party is caught off guard! Combat begins and the party is Surprised.';
          isCombat = true;
          break;
        case 'partySurprisedDisadvantage':
          outcomeText = 'The party is caught completely unaware! Combat begins, the party is Surprised, and makes Initiative rolls with Disadvantage.';
          isCombat = true;
          break;
        case 'enemySurprised':
          outcomeText = 'The party catches the enemy off guard! When combat begins, the enemy is Surprised.';
          isCombat = true;
          break;
        default:
          outcomeText = 'Encounter resolved.';
      }
    }

    const content = await renderTemplate(
      'modules/uncharted-journeys/templates/chat-resolution-outcome.hbs',
      {
        outcomeTier: outcome,
        successCount: 0,
        totalCount: session.partyMembers.length,
        outcomeText,
        isCombat,
        hasExhaustion: false,
        exhaustionApplied: [],
        encounterIndex: session.currentEncounterIndex,
        isGM: game.user.isGM
      }
    );

    await ChatMessage.create({
      content,
      speaker: { alias: 'Uncharted Journeys' }
    });
  }

  /**
   * Finalize the encounter and mark it as resolved
   */
  static async #onFinalizeEncounter(event, target) {
    const session = JourneySessionManager.getCurrent();
    const encounter = session.encounters[session.currentEncounterIndex];

    if (!encounter) return;

    // Update encounter status using new array (DataModel arrays are immutable)
    const newEncounters = session.encounters.map((e, i) => {
      if (i === session.currentEncounterIndex) {
        return { ...e, status: 'resolved' };
      }
      return { ...e };
    });
    session.updateSource({ encounters: newEncounters });
    await JourneySessionManager.save(session);

    ui.notifications.info('Encounter resolved!');
    this.render();
  }

  /**
   * Copy the research prompt to clipboard for use in Encounter Builder
   */
  static async #onCopyResearchPrompt(event, target) {
    const session = JourneySessionManager.getCurrent();
    const encounter = session.currentEncounter;

    if (!encounter?.researchPrompt) {
      ui.notifications.warn('No research prompt available for this encounter.');
      return;
    }

    try {
      await navigator.clipboard.writeText(encounter.researchPrompt);
      ui.notifications.info('Research prompt copied to clipboard!');
    } catch (err) {
      // Fallback for browsers that don't support clipboard API
      console.error('Failed to copy to clipboard:', err);
      ui.notifications.error('Failed to copy. Check console for details.');
    }
  }

  /**
   * Copy the encounter prompt to clipboard for use in Encounter Builder
   */
  static async #onCopyEncounterPrompt(event, target) {
    const session = JourneySessionManager.getCurrent();
    const encounter = session.currentEncounter;

    if (!encounter?.encounterPrompt) {
      ui.notifications.warn('No encounter prompt available for this encounter.');
      return;
    }

    try {
      await navigator.clipboard.writeText(encounter.encounterPrompt);
      ui.notifications.info('Encounter prompt copied to clipboard!');
    } catch (err) {
      console.error('Failed to copy to clipboard:', err);
      ui.notifications.error('Failed to copy. Check console for details.');
    }
  }

  /**
   * Copy the dungeon prompt to clipboard for use in Dungeon Generator
   */
  static async #onCopyDungeonPrompt(event, target) {
    const session = JourneySessionManager.getCurrent();
    const encounter = session.currentEncounter;

    if (!encounter?.dungeonPrompt) {
      ui.notifications.warn('No dungeon prompt available for this encounter.');
      return;
    }

    try {
      await navigator.clipboard.writeText(encounter.dungeonPrompt);
      ui.notifications.info('Dungeon prompt copied to clipboard!');
    } catch (err) {
      console.error('Failed to copy to clipboard:', err);
      ui.notifications.error('Failed to copy. Check console for details.');
    }
  }

  // ============================================
  // JOURNEY MAP MARKER ACTIONS
  // ============================================

  /**
   * Generate journey markers and create Drawings on the scene
   * Creates colored circles that start hidden (gray) for players
   */
  static async #onGenerateMarkers(event, target) {
    const session = JourneySessionManager.getCurrent();
    if (!session) return;

    // Check if canvas is available
    if (!canvas?.scene) {
      ui.notifications.error('Keine aktive Szene gefunden. Bitte öffne eine Karte.');
      return;
    }

    // Generate markers via session manager
    const markers = await JourneySessionManager.generateJourneyMarkers();
    if (!markers || markers.length === 0) {
      ui.notifications.error('Keine Marker generiert.');
      return;
    }

    // Create Foundry Drawings on the scene
    await JourneySessionManager.createSceneMarkers(markers);

    ui.notifications.info(`${markers.length} Marker auf der Karte erstellt.`);
    this.render();
  }

  /**
   * Reveal a marker - changes it from hidden (gray) to its actual color
   */
  static async #onRevealMarker(event, target) {
    const drawingId = target.dataset.drawingId;
    if (!drawingId) {
      ui.notifications.warn('Kein Marker ausgewählt.');
      return;
    }

    await JourneySessionManager.revealMarker(drawingId);
    ui.notifications.info('Marker aufgedeckt!');
    this.render();
  }

  /**
   * Resolve/complete a marker - marks it as finished
   */
  static async #onResolveMarker(event, target) {
    const drawingId = target.dataset.drawingId;
    if (!drawingId) {
      ui.notifications.warn('Kein Marker ausgewählt.');
      return;
    }

    await JourneySessionManager.resolveMarker(drawingId);
    ui.notifications.info('Marker als erledigt markiert.');
    this.render();
  }

  /**
   * Clear all journey markers from the scene and session
   */
  static async #onClearMarkers(event, target) {
    const session = JourneySessionManager.getCurrent();
    if (!session) return;

    // Confirm deletion
    const confirmed = await Dialog.confirm({
      title: 'Alle Marker entfernen?',
      content: '<p>Sollen wirklich alle Reise-Marker von der Karte entfernt werden?</p>',
      yes: () => true,
      no: () => false,
      defaultYes: false
    });

    if (!confirmed) return;

    await JourneySessionManager.clearAllMarkers();
    ui.notifications.info('Alle Marker wurden entfernt.');
    this.render();
  }

  // ============================================
  // BIOME NODE ACTIONS
  // ============================================

  /**
   * Add a new biome node
   */
  static async #onAddBiomeNode(event, target) {
    const biomeId = target.dataset.biome;
    const nodeType = target.dataset.nodeType;

    if (!biomeId || !nodeType) {
      ui.notifications.warn('Biom oder Node-Typ fehlt.');
      return;
    }

    await JourneySessionManager.addBiomeNode(biomeId, nodeType);
    this.render();
  }

  /**
   * Remove a biome node
   */
  static async #onRemoveBiomeNode(event, target) {
    const nodeId = target.dataset.nodeId;
    if (!nodeId) return;

    await JourneySessionManager.removeBiomeNode(nodeId);
    this.render();
  }

  /**
   * Roll an encounter for a biome node using the Encounter Builder
   * Opens a dialog with options for Fronten, Spieler, and Comedic Relief
   * The encounter type is determined by the node's color (pool)
   */
  static async #onRollBiomeNodeEncounter(event, target) {
    const nodeId = target.dataset.nodeId;
    if (!nodeId) return;

    const node = JourneySessionManager.getBiomeNode(nodeId);
    if (!node) {
      ui.notifications.error('Node nicht gefunden.');
      return;
    }

    const session = JourneySessionManager.getCurrent();
    if (!session) return;

    // Determine encounter pool based on node type
    const poolMap = {
      'green': 'social',
      'yellow': 'mixed',
      'red': 'combat'
    };
    const poolType = poolMap[node.type] || 'mixed';
    const pool = ENCOUNTER_POOLS[poolType];

    if (!pool || pool.length === 0) {
      ui.notifications.error(`Kein Encounter-Pool für Typ "${node.type}" gefunden.`);
      return;
    }

    // Get biome name for display
    const biomeConfig = BIOMES[node.biomeId];
    const biomeName = biomeConfig?.name || node.biomeId;
    const locationName = node.name || biomeName;

    // Prepare dialog data
    const fronts = [
      { id: 'etwas_erwacht_in_der_tiefe', name: 'Etwas erwacht in der Tiefe', icon: '🌊', checked: false },
      { id: 'die_ostfront', name: 'Die Ostfront', icon: '⚔️', checked: false },
      { id: 'der_mochtegern_erzmagier', name: 'Der Möchtegern Erzmagier', icon: '🧙', checked: false },
      { id: 'die_stimmen_der_steppe', name: 'Die Stimmen der Steppe', icon: '🏜️', checked: false }
    ];

    const players = [
      { id: 'finn', name: 'Finn', class: 'Dragon Disciple', icon: '🐉', checked: true },
      { id: 'ignatius', name: 'Ignatius', class: 'Magier', icon: '🔥', checked: true },
      { id: 'dante', name: 'Dante', class: 'Krieger', icon: '⚔️', checked: true },
      { id: 'snaf', name: 'Snaf', class: 'Barde', icon: '🎭', checked: false },
      { id: 'bernard', name: 'Bernard', class: 'Zentaur', icon: '🐴', checked: false }
    ];

    // Render the dialog content
    const dialogContent = await renderTemplate(
      'modules/uncharted-journeys/templates/dialogs/encounter-options.hbs',
      {
        locationName,
        nodeType: node.type,
        biomeName,
        fronts,
        players
      }
    );

    // Show the dialog
    const result = await Dialog.wait({
      title: `Encounter generieren: ${locationName}`,
      content: dialogContent,
      buttons: {
        generate: {
          icon: '<i class="fas fa-magic"></i>',
          label: 'Encounter generieren',
          callback: (html) => {
            const form = html[0].querySelector('form');
            const formData = new FormData(form);

            // Collect selected fronts
            const selectedFronts = [];
            form.querySelectorAll('input[name="selectedFronts"]:checked').forEach(cb => {
              selectedFronts.push(cb.value);
            });

            // Collect active players
            const activePlayers = [];
            form.querySelectorAll('input[name="activePlayers"]:checked').forEach(cb => {
              activePlayers.push(cb.value);
            });

            // Comedic relief
            const comedicRelief = form.querySelector('input[name="comedicRelief"]')?.checked || false;

            return { selectedFronts, activePlayers, comedicRelief };
          }
        },
        cancel: {
          icon: '<i class="fas fa-times"></i>',
          label: 'Abbrechen',
          callback: () => null
        }
      },
      default: 'generate',
      close: () => null
    }, { width: 450, classes: ['uncharted-journeys', 'encounter-options'] });

    // User cancelled
    if (!result) return;

    // Roll a random encounter type from the pool
    const encounterTypeName = pool[Math.floor(Math.random() * pool.length)];

    // Convert encounter type name to API format (e.g., "A Chance Meeting" -> "a_chance_meeting")
    const encounterTypeId = encounterTypeName.toLowerCase().replace(/\s+/g, '_');

    // Check if Encounter Builder is available
    if (!globalThis.EncounterBuilder?.generate) {
      ui.notifications.error('Encounter Builder Modul ist nicht geladen!');
      return;
    }

    // Get party level from the game (average of party members)
    let partyLevel = 9; // Default
    try {
      const partyActors = game.actors.filter(a => a.type === 'character' && a.hasPlayerOwner);
      if (partyActors.length > 0) {
        const totalLevel = partyActors.reduce((sum, a) => sum + (a.system.details?.level?.value || 1), 0);
        partyLevel = Math.round(totalLevel / partyActors.length);
      }
    } catch (e) {
      console.warn('Could not determine party level, using default:', e);
    }

    // Prepare the request for Encounter Builder
    // travelBiome = actual biome (e.g., "forest", "swamp")
    // travelContext = location name (e.g., "Ruinen von Aldrath")
    const request = {
      encounterType: 'travel',
      partyLevel: partyLevel,
      travelEncounterType: encounterTypeId,
      travelBiome: node.biomeId,  // The actual biome ID
      travelContext: locationName,  // The location name as context
      campaignSpecific: true,
      comedicRelief: result.comedicRelief,
      activePlayers: result.activePlayers,
      selectedFronts: result.selectedFronts.length > 0 ? result.selectedFronts : null
    };

    // Show notification that generation is starting
    ui.notifications.info(`Generiere Encounter für "${locationName}"... (Pool: ${poolType}, Typ: ${encounterTypeName})`);

    try {
      // Call the Encounter Builder API
      const encounter = await globalThis.EncounterBuilder.generate(request);

      if (!encounter) {
        ui.notifications.error('Encounter-Generierung fehlgeschlagen.');
        return;
      }

      // Mark the node as resolved
      await JourneySessionManager.resolveBiomeNode(nodeId);

      ui.notifications.info(`Encounter für "${locationName}" generiert!`);
      this.render();

    } catch (error) {
      console.error('Encounter generation failed:', error);
      ui.notifications.error(`Fehler bei der Encounter-Generierung: ${error.message}`);
    }
  }

  static async #onNextEncounter(event, target) {
    const session = JourneySessionManager.getCurrent();

    if (session.currentEncounterIndex < session.encounters.length - 1) {
      const nextIndex = session.currentEncounterIndex + 1;
      // Update encounters array and index using updateSource (DataModel immutability)
      const newEncounters = session.encounters.map((e, i) => {
        if (i === nextIndex) {
          return { ...e, status: 'active' };
        }
        return { ...e };
      });
      session.updateSource({
        currentEncounterIndex: nextIndex,
        encounters: newEncounters
      });
      await JourneySessionManager.save(session);
    }

    this.render();
  }

  static async #onUseRoleAbility(event, target) {
    const role = target.dataset.role;
    const session = JourneySessionManager.getCurrent();
    const member = session.partyMembers.find(m => m.role === role);

    if (!member) return;

    if (member.roleAbilityUsed) {
      ui.notifications.warn('This role ability has already been used.');
      return;
    }

    const roleData = getRoleById(role);
    const actor = game.actors.get(member.actorId);

    if (!roleData || !actor) return;

    // Mark ability as used (DataModel arrays are immutable)
    const newMembers = session.partyMembers.map(m => {
      if (m.role === role) {
        return { ...m, roleAbilityUsed: true };
      }
      return { ...m };
    });
    session.updateSource({ partyMembers: newMembers });
    await JourneySessionManager.save(session);

    // Send ability usage to chat
    const content = `
      <div class="uncharted-journeys chat-card role-ability">
        <h3><i class="${roleData.icon}"></i> ${roleData.name} Ability</h3>
        <p><strong>${actor.name}</strong> uses their ${roleData.name} ability!</p>
        <p class="ability-description">${roleData.ability.description}</p>
      </div>
    `;

    await ChatMessage.create({
      content,
      speaker: { alias: 'Uncharted Journeys' }
    });

    this.render();
  }

  static async #onCompleteJourney(event, target) {
    // Journey can now be completed at any time - no need to resolve all encounters
    // The GM manages encounters via map markers and can end the journey when ready

    const currentSession = JourneySessionManager.getCurrent();

    // ============================================
    // CLEANUP: Remove all journey effects from party members
    // ============================================
    for (const member of currentSession.partyMembers) {
      const actor = game.actors.get(member.actorId);
      if (!actor) continue;

      // Find all effects from this module
      const journeyEffects = actor.items.filter(i =>
        i.type === 'effect' &&
        i.flags?.['uncharted-journeys']?.isPreparationEffect
      );

      // Delete all journey effects
      if (journeyEffects.length > 0) {
        const effectIds = journeyEffects.map(e => e.id);
        await actor.deleteEmbeddedDocuments('Item', effectIds);
        console.log(`Uncharted Journeys: Removed ${effectIds.length} effects from ${actor.name}`);
      }

      // Reset bonus hit dice
      const bonusHitDice = actor.getFlag('uncharted-journeys', 'bonusHitDice') ?? 0;
      if (bonusHitDice > 0) {
        // Get current values
        const level = actor.system?.details?.level?.value ?? 1;
        const baseMaxHitDice = level + 1;
        const currentHD = actor.getFlag('hit-dice-healing', 'current') ?? baseMaxHitDice;

        // Calculate new values (subtract the bonus)
        const newMaxHitDice = baseMaxHitDice; // Reset to base max
        const newCurrentHD = Math.max(0, currentHD - bonusHitDice);

        // Update flags
        await actor.setFlag('hit-dice-healing', 'current', newCurrentHD);
        await actor.setFlag('hit-dice-healing', 'max', newMaxHitDice);
        await actor.unsetFlag('uncharted-journeys', 'bonusHitDice');

        console.log(`Uncharted Journeys: Reset hit dice for ${actor.name} (removed ${bonusHitDice} bonus)`);
      }
    }

    // Advance to stage 4 (DataModel immutability)
    currentSession.updateSource({
      currentStage: 4,
      outcome: 'arrived'
    });
    await JourneySessionManager.save(currentSession);

    ui.notifications.info('Reise beendet! Alle Reise-Effekte wurden entfernt.');
    this.tabGroups.primary = 'journeyEnd';
    this.render();
  }

  // ============================================
  // STAGE 4: JOURNEY'S END ACTIONS
  // ============================================

  static async #onRollArrival(event, target) {
    const session = JourneySessionManager.getCurrent();

    // Get Sentry's Wisdom modifier for number of dice
    const sentryMember = session.partyMembers.find(m => m.role === 'sentry');
    let numDice = 1;
    let sentryName = 'Unknown';

    if (sentryMember) {
      const sentryActor = game.actors.get(sentryMember.actorId);
      if (sentryActor) {
        sentryName = sentryActor.name;
        // PF2E: abilities are at system.abilities.wis.mod
        const wisMod = sentryActor.system?.abilities?.wis?.mod ?? 0;
        numDice = Math.max(1, wisMod); // Minimum 1 die
      }
    }

    // Roll Xd12 and take highest (where X = Sentry's Wisdom modifier, min 1)
    const roll = new Roll(`${numDice}d12kh`);
    await roll.evaluate();

    // Update using updateSource (DataModel immutability)
    session.updateSource({
      arrivalRolls: roll.dice[0].results.map(r => r.result),
      arrivalResult: roll.total
    });
    await JourneySessionManager.save(session);

    const arrivalData = getArrivalResult(roll.total);

    // Show in chat
    await roll.toMessage({
      flavor: `<strong>Arrival Roll</strong> (${sentryName} - ${numDice}d12 keep highest)`,
      speaker: { alias: 'Uncharted Journeys' }
    });

    const content = `
      <div class="uncharted-journeys chat-card arrival-result">
        <h3><i class="fas fa-${arrivalData.icon}"></i> Arrival: ${arrivalData.title}</h3>
        <p>${arrivalData.description}</p>
        <p class="arrival-effect"><em>${arrivalData.effect}</em></p>
      </div>
    `;

    await ChatMessage.create({
      content,
      speaker: { alias: 'Uncharted Journeys' }
    });

    this.render();
  }

  static async #onRollExhaustionSave(event, target) {
    const actorId = target.dataset.actorId;
    const actor = game.actors.get(actorId);

    if (!actor) return;

    const session = JourneySessionManager.getCurrent();
    const dc = session.difficulty;

    // Get Quartermaster's Strength or Intelligence modifier (use higher)
    const quartermasterMember = session.partyMembers.find(m => m.role === 'quartermaster');
    let qmBonus = 0;
    let qmName = '';
    let qmAbility = '';

    if (quartermasterMember) {
      const qmActor = game.actors.get(quartermasterMember.actorId);
      if (qmActor) {
        qmName = qmActor.name;
        // PF2E: abilities are at system.abilities.str.mod / system.abilities.int.mod
        const strMod = qmActor.system?.abilities?.str?.mod ?? 0;
        const intMod = qmActor.system?.abilities?.int?.mod ?? 0;
        qmBonus = Math.max(strMod, intMod);
        qmAbility = strMod >= intMod ? 'Str' : 'Int';
      }
    }

    // Build bonus text
    const bonusText = qmBonus !== 0
      ? `<p class="qm-bonus"><i class="fas fa-plus-circle"></i> Add <strong>+${qmBonus}</strong> to roll (${qmName}'s ${qmAbility} modifier)</p>`
      : '';

    // Build save prompt
    const content = `
      <div class="uncharted-journeys chat-card exhaustion-save">
        <h3><i class="fas fa-tired"></i> End of Journey Save</h3>
        <p><strong>${actor.name}</strong> must make a Fortitude save to avoid exhaustion.</p>
        <p class="dc-info"><strong>DC:</strong> ${dc}</p>
        ${bonusText}
        <p>@Check[fortitude|dc:${dc}]{Fortitude Save}</p>
        <p class="save-outcomes">
          <span class="success"><i class="fas fa-check"></i> Success: Gain temporary HP = level</span>
          <span class="failure"><i class="fas fa-times"></i> Failure: Gain 1 level of Exhaustion</span>
        </p>
        <div class="outcome-buttons">
          <button type="button" data-action="applyExhaustionResult" data-actor-id="${actorId}" data-result="success">
            <i class="fas fa-check"></i> Success
          </button>
          <button type="button" data-action="applyExhaustionResult" data-actor-id="${actorId}" data-result="failure">
            <i class="fas fa-times"></i> Failure
          </button>
        </div>
      </div>
    `;

    await ChatMessage.create({
      content,
      speaker: { alias: 'Uncharted Journeys' }
    });
  }

  static async #onSendEndSummary(event, target) {
    const session = this.session;
    const arrivalData = session.arrivalResult ? getArrivalResult(session.arrivalResult) : null;

    const content = `
      <div class="uncharted-journeys chat-card journey-summary">
        <h2><i class="fas fa-scroll"></i> Journey Complete</h2>
        <div class="summary-section">
          <h3>Route</h3>
          <p><strong>From:</strong> ${session.origin} <strong>To:</strong> ${session.destination}</p>
          <p><strong>Distance:</strong> ${DISTANCES[session.distance]?.name || session.distance}</p>
        </div>
        <div class="summary-section">
          <h3>Party</h3>
          <ul>
            ${session.partyMembers.map(m => {
              const actor = game.actors.get(m.actorId);
              const role = getRoleById(m.role);
              return `<li><strong>${actor?.name || 'Unknown'}</strong> - ${role?.name || m.role}</li>`;
            }).join('')}
          </ul>
        </div>
        <div class="summary-section">
          <h3>Results</h3>
          <p><strong>Encounters:</strong> ${session.resolvedEncounterCount}/${session.totalEncounterCount}</p>
          <p><strong>Outcome:</strong> ${session.outcome === 'arrived' ? 'Arrived Safely' : 'Abandoned'}</p>
          ${arrivalData ? `<p><strong>Arrival:</strong> ${arrivalData.title}</p>` : ''}
        </div>
      </div>
    `;

    await ChatMessage.create({
      content,
      speaker: { alias: 'Uncharted Journeys' }
    });
  }

  static async #onNewJourney(event, target) {
    const confirmed = await Dialog.confirm({
      title: 'Start New Journey',
      content: '<p>Are you sure you want to start a new journey? This will clear all current journey data.</p>'
    });

    if (confirmed) {
      await JourneySessionManager.clear();
      this.tabGroups.primary = 'route';
      this.render();
      ui.notifications.info('New journey started!');
    }
  }

  // ============================================
  // UTILITY ACTIONS
  // ============================================

  static async #onAbandonJourney(event, target) {
    const confirmed = await Dialog.confirm({
      title: 'Abandon Journey',
      content: '<p>Are you sure you want to abandon this journey? The party will need to make exhaustion saves.</p>'
    });

    if (confirmed) {
      const session = JourneySessionManager.getCurrent();

      // ============================================
      // CLEANUP: Remove all journey effects from party members
      // (Same cleanup as completeJourney)
      // ============================================
      for (const member of session.partyMembers) {
        const actor = game.actors.get(member.actorId);
        if (!actor) continue;

        // Find all effects from this module
        const journeyEffects = actor.items.filter(i =>
          i.type === 'effect' &&
          i.flags?.['uncharted-journeys']?.isPreparationEffect
        );

        // Delete all journey effects
        if (journeyEffects.length > 0) {
          const effectIds = journeyEffects.map(e => e.id);
          await actor.deleteEmbeddedDocuments('Item', effectIds);
          console.log(`Uncharted Journeys: Removed ${effectIds.length} effects from ${actor.name}`);
        }

        // Reset bonus hit dice
        const bonusHitDice = actor.getFlag('uncharted-journeys', 'bonusHitDice') ?? 0;
        if (bonusHitDice > 0) {
          // Get current values
          const level = actor.system?.details?.level?.value ?? 1;
          const baseMaxHitDice = level + 1;
          const currentHD = actor.getFlag('hit-dice-healing', 'current') ?? baseMaxHitDice;

          // Calculate new values (subtract the bonus)
          const newMaxHitDice = baseMaxHitDice; // Reset to base max
          const newCurrentHD = Math.max(0, currentHD - bonusHitDice);

          // Update flags
          await actor.setFlag('hit-dice-healing', 'current', newCurrentHD);
          await actor.setFlag('hit-dice-healing', 'max', newMaxHitDice);
          await actor.unsetFlag('uncharted-journeys', 'bonusHitDice');

          console.log(`Uncharted Journeys: Reset hit dice for ${actor.name} (removed ${bonusHitDice} bonus)`);
        }
      }

      // Update using updateSource (DataModel immutability)
      session.updateSource({
        outcome: 'abandoned',
        currentStage: 4
      });
      await JourneySessionManager.save(session);

      ui.notifications.warn('Reise abgebrochen! Alle Reise-Effekte wurden entfernt.');
      this.tabGroups.primary = 'journeyEnd';
      this.render();
    }
  }
}

// Keep the legacy JourneyEncounterApp for backwards compatibility
export { JourneyManagerApp as JourneyEncounterApp };

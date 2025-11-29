/**
 * Uncharted Journeys - Journey Manager Application
 * Full 4-stage journey management using Foundry v13 ApplicationV2
 */

import { REGIONS, ENCOUNTER_TYPES, ENCOUNTERS } from './data/encounters.js';
import { ROLES, getRoleById } from './data/roles.js';
import { PREPARATIONS, getPreparation, PREPARATION_BASE_DC } from './data/preparations.js';
import { DISTANCES, PACE_OPTIONS, calculateDifficulty, getBaseEncounters, getArrivalResult } from './data/journey-tables.js';
import { JourneySessionManager, JourneySessionModel } from './journey-session.js';
import { ExhaustionManager } from './exhaustion-manager.js';

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
      width: 600,
      height: 700
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
      confirmRoute: JourneyManagerApp.#onConfirmRoute,

      // Stage 2: Prepare
      assignRole: JourneyManagerApp.#onAssignRole,
      selectPreparation: JourneyManagerApp.#onSelectPreparation,
      rollPreparation: JourneyManagerApp.#onRollPreparation,
      sendGroupCheck: JourneyManagerApp.#onSendGroupCheck,
      setGroupCheckResult: JourneyManagerApp.#onSetGroupCheckResult,
      confirmPreparation: JourneyManagerApp.#onConfirmPreparation,

      // Stage 3: Journey
      setPace: JourneyManagerApp.#onSetPace,
      rollEncounterType: JourneyManagerApp.#onRollEncounterType,
      rollEncounter: JourneyManagerApp.#onRollEncounter,
      sendEncounterToChat: JourneyManagerApp.#onSendEncounterToChat,
      resolveEncounter: JourneyManagerApp.#onResolveEncounter,
      nextEncounter: JourneyManagerApp.#onNextEncounter,
      useRoleAbility: JourneyManagerApp.#onUseRoleAbility,
      completeJourney: JourneyManagerApp.#onCompleteJourney,

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
    const session = this.session;

    // Determine which tab should be active based on session stage
    const stageToTab = {
      1: 'route',
      2: 'prepare',
      3: 'journey',
      4: 'journeyEnd'
    };
    const activeTab = stageToTab[session.currentStage] || 'route';
    this.tabGroups.primary = activeTab;

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

      // Stage 3: Journey data
      regions: REGIONS,
      encounterTypes: ENCOUNTER_TYPES,
      paceOptions: PACE_OPTIONS,

      // Actors for assignment
      actors: game.actors.filter(a => a.type === 'character' && a.hasPlayerOwner),

      // Current state helpers
      difficulty: session.difficulty,
      baseEncounters: session.baseEncounterCount,
      totalEncounters: session.totalEncounterCount,
      currentEncounter: session.currentEncounter,
      allPrepsComplete: session.allPreparationsComplete,
      allGroupChecksComplete: session.allGroupChecksComplete,
      allEncountersResolved: session.allEncountersResolved
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
        label: '1. Set Route',
        icon: 'fa-map-marked-alt',
        active: this.tabGroups.primary === 'route',
        enabled: true,
        cssClass: session.currentStage >= 1 ? 'complete' : ''
      },
      prepare: {
        id: 'prepare',
        label: '2. Prepare',
        icon: 'fa-tasks',
        active: this.tabGroups.primary === 'prepare',
        enabled: session.currentStage >= 2,
        cssClass: session.currentStage >= 2 ? 'complete' : ''
      },
      journey: {
        id: 'journey',
        label: '3. Journey',
        icon: 'fa-hiking',
        active: this.tabGroups.primary === 'journey',
        enabled: session.currentStage >= 3,
        cssClass: session.currentStage >= 3 ? 'complete' : ''
      },
      journeyEnd: {
        id: 'journeyEnd',
        label: '4. Journey\'s End',
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
  // NAVIGATION ACTIONS
  // ============================================

  static #onChangeTab(event, target) {
    const tab = target.dataset.tab;
    if (tab) {
      this.tabGroups.primary = tab;
      this.render();
    }
  }

  // ============================================
  // STAGE 1: SET ROUTE ACTIONS
  // ============================================

  static async #onSetDistance(event, target) {
    const distance = target.dataset.distance;
    await JourneySessionManager.updateField('distance', distance);
    this.render();
  }

  static async #onAdjustWeather(event, target) {
    const delta = parseInt(target.dataset.delta, 10);
    const session = this.session;
    const newValue = Math.clamp(session.weather + delta, 1, 10);
    await JourneySessionManager.updateField('weather', newValue);
    this.render();
  }

  static async #onAdjustTerrain(event, target) {
    const delta = parseInt(target.dataset.delta, 10);
    const session = this.session;
    const newValue = Math.clamp(session.terrain + delta, 1, 10);
    await JourneySessionManager.updateField('terrain', newValue);
    this.render();
  }

  static async #onAdjustNemesis(event, target) {
    const delta = parseInt(target.dataset.delta, 10);
    const session = this.session;
    const newValue = Math.clamp(session.nemesis + delta, 0, 10);
    await JourneySessionManager.updateField('nemesis', newValue);
    this.render();
  }

  static async #onToggleNemesis(event, target) {
    const session = this.session;
    await JourneySessionManager.updateField('nemesisActive', !session.nemesisActive);
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
    const form = this.element.querySelector('form');
    const formData = new FormData(form);

    const updates = {
      origin: formData.get('origin') || 'Unknown',
      destination: formData.get('destination') || 'Unknown',
      currentStage: 2
    };

    const currentSession = JourneySessionManager.getCurrent();
    Object.assign(currentSession, updates);
    await JourneySessionManager.save(currentSession);

    // Send route summary to chat
    await this._sendRouteSummaryToChat(currentSession);

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
          <p><strong>Distance:</strong> ${DISTANCES[session.distance]?.label || session.distance}</p>
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

  static async #onSelectPreparation(event, target) {
    const role = target.dataset.role;
    const prepId = target.value;

    const session = JourneySessionManager.getCurrent();
    const member = session.partyMembers.find(m => m.role === role);
    if (member) {
      member.preparationId = prepId;
      member.preparationResult = 'pending';
      await JourneySessionManager.save(session);
      this.render();
    }
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

    // Build the check message using PF2E enricher syntax
    const checkType = prep.skillSlug;
    const dc = prep.dc;
    const traits = prep.traits?.join(',') || '';

    const content = `
      <div class="uncharted-journeys chat-card preparation-check">
        <h3><i class="fas fa-clipboard-check"></i> ${prep.name}</h3>
        <p class="actor-name"><strong>${actor.name}</strong> attempts to ${prep.name.toLowerCase()}.</p>
        <p class="description">${prep.description}</p>
        <div class="check-prompt">
          <p>@Check[${checkType}|dc:${dc}${traits ? '|traits:' + traits : ''}]{${prep.name} Check}</p>
        </div>
        <div class="outcome-buttons" data-role="${role}">
          <button type="button" class="success-btn" data-action="setPreparationResult" data-role="${role}" data-result="success">
            <i class="fas fa-check"></i> Success
          </button>
          <button type="button" class="failure-btn" data-action="setPreparationResult" data-role="${role}" data-result="failure">
            <i class="fas fa-times"></i> Failure
          </button>
        </div>
        <div class="effects">
          <p class="success-effect"><strong>Success:</strong> ${prep.successEffect}</p>
          <p class="failure-effect"><strong>Failure:</strong> ${prep.failureEffect}</p>
        </div>
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

  static async #onSendGroupCheck(event, target) {
    const session = this.session;
    const difficulty = session.difficulty;

    // Build group check message
    const content = `
      <div class="uncharted-journeys chat-card group-check">
        <h3><i class="fas fa-users"></i> Group Journey Check</h3>
        <p>Each party member must make a skill check using their role's primary or alternative skill.</p>
        <p class="difficulty"><strong>DC:</strong> ${difficulty}</p>

        <div class="role-checks">
          ${session.partyMembers.map(m => {
            const role = getRoleById(m.role);
            const actor = game.actors.get(m.actorId);
            if (!role || !actor) return '';

            return `
              <div class="role-check" data-role="${m.role}">
                <p><strong>${actor.name}</strong> (${role.name})</p>
                <p>@Check[${role.primarySkill}|dc:${difficulty}]{${role.name} Check}</p>
                <p class="alt-skill">Alternative: ${role.alternativeSkill}</p>
              </div>
            `;
          }).join('')}
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

    // Update encounter
    encounter.typeRoll = roll.total;
    encounter.encounterType = encounterType;
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

    // Get encounter details
    const region = session.defaultRegion;
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

    // Update encounter
    encounter.encounterRoll = roll.total;
    encounter.title = encounterData.title;
    encounter.description = encounterData.description;
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
        totalEncounters: session.totalEncounterCount
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

    encounter.status = 'resolved';
    await JourneySessionManager.save(session);

    this.render();
  }

  static async #onNextEncounter(event, target) {
    const session = JourneySessionManager.getCurrent();

    if (session.currentEncounterIndex < session.encounters.length - 1) {
      session.currentEncounterIndex += 1;
      session.encounters[session.currentEncounterIndex].status = 'active';
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

    // Mark ability as used
    member.roleAbilityUsed = true;
    await JourneySessionManager.save(session);

    // Send ability usage to chat
    const content = `
      <div class="uncharted-journeys chat-card role-ability">
        <h3><i class="${roleData.icon}"></i> ${roleData.name} Ability</h3>
        <p><strong>${actor.name}</strong> uses their ${roleData.name} ability!</p>
        <p class="ability-description">${roleData.ability}</p>
      </div>
    `;

    await ChatMessage.create({
      content,
      speaker: { alias: 'Uncharted Journeys' }
    });

    this.render();
  }

  static async #onCompleteJourney(event, target) {
    const session = this.session;

    if (!session.allEncountersResolved) {
      ui.notifications.warn('Please resolve all encounters before completing the journey.');
      return;
    }

    // Advance to stage 4
    const currentSession = JourneySessionManager.getCurrent();
    currentSession.currentStage = 4;
    currentSession.outcome = 'arrived';
    await JourneySessionManager.save(currentSession);

    ui.notifications.info('Journey complete! Proceeding to Journey\'s End.');
    this.tabGroups.primary = 'journeyEnd';
    this.render();
  }

  // ============================================
  // STAGE 4: JOURNEY'S END ACTIONS
  // ============================================

  static async #onRollArrival(event, target) {
    const session = JourneySessionManager.getCurrent();

    // Roll 2d6
    const roll = new Roll('2d6');
    await roll.evaluate();

    session.arrivalRolls = roll.dice[0].results.map(r => r.result);
    session.arrivalResult = roll.total;
    await JourneySessionManager.save(session);

    const arrivalData = getArrivalResult(roll.total);

    // Show in chat
    await roll.toMessage({
      flavor: `<strong>Arrival Roll</strong>`,
      speaker: { alias: 'Uncharted Journeys' }
    });

    const content = `
      <div class="uncharted-journeys chat-card arrival-result">
        <h3><i class="fas fa-flag-checkered"></i> Arrival: ${arrivalData.title}</h3>
        <p>${arrivalData.description}</p>
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

    // Build save prompt
    const content = `
      <div class="uncharted-journeys chat-card exhaustion-save">
        <h3><i class="fas fa-tired"></i> End of Journey Save</h3>
        <p><strong>${actor.name}</strong> must make a Fortitude save to avoid exhaustion.</p>
        <p>@Check[fortitude|dc:${dc}]{Exhaustion Save}</p>
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
          <p><strong>Distance:</strong> ${DISTANCES[session.distance]?.label || session.distance}</p>
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
      session.outcome = 'abandoned';
      session.currentStage = 4;
      await JourneySessionManager.save(session);

      ui.notifications.warn('Journey abandoned.');
      this.tabGroups.primary = 'journeyEnd';
      this.render();
    }
  }
}

// Keep the legacy JourneyEncounterApp for backwards compatibility
export { JourneyManagerApp as JourneyEncounterApp };

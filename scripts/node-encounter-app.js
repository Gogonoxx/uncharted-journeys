/**
 * Node Encounter Application
 * Opens when GM clicks on a journey node Drawing on the map.
 * Allows pre-rolling encounter types and generating full encounters.
 */

import { JourneySessionManager } from './journey-session.js';
import { BIOME_LOCATIONS, LOCATION_ENCOUNTER_POOLS, getRandomEncounterType, getRandomLocation } from './data/biome-locations.js';
import { BIOMES, ENCOUNTER_POOLS } from './data/journey-tables.js';
import { getResolutionConfig } from './data/encounter-type-rules.js';
import { generateLocationName } from './data/name-generator.js';

const { ApplicationV2, HandlebarsApplicationMixin } = foundry.applications.api;

/**
 * Application for handling node encounters
 * Opens when clicking on a Drawing with uncharted-journeys flags
 */
export class NodeEncounterApp extends HandlebarsApplicationMixin(ApplicationV2) {

  /** @type {string} Node ID */
  #nodeId = null;

  /** @type {string} Drawing ID */
  #drawingId = null;

  /** @override */
  static DEFAULT_OPTIONS = {
    id: 'node-encounter-{id}',
    classes: ['uncharted-journeys', 'node-encounter-app'],
    tag: 'div',
    window: {
      frame: true,
      positioned: true,
      title: 'Ort',
      icon: 'fas fa-map-marker-alt',
      resizable: true
    },
    position: {
      width: 500,
      height: 650
    },
    actions: {
      prerollEncounterType: NodeEncounterApp.#onPrerollEncounterType,
      generateEncounter: NodeEncounterApp.#onGenerateEncounter,
      resolveNode: NodeEncounterApp.#onResolveNode,
      copyEncounterText: NodeEncounterApp.#onCopyEncounterText,
      startResolution: NodeEncounterApp.#onStartResolution,
      regenerateNodeName: NodeEncounterApp.#onRegenerateNodeName,
      revealNode: NodeEncounterApp.#onRevealNode,
      setDeception: NodeEncounterApp.#onSetDeception,
      clearDeception: NodeEncounterApp.#onClearDeception
    }
  };

  /** @override */
  static PARTS = {
    main: {
      template: 'modules/uncharted-journeys/templates/apps/node-encounter.hbs'
    }
  };

  /**
   * Create a NodeEncounterApp instance
   * @param {string} nodeId - The biome node ID
   * @param {string} drawingId - The Foundry Drawing ID
   * @param {Object} options - Application options
   */
  constructor(nodeId, drawingId, options = {}) {
    // Create unique ID for this window
    const uniqueId = `node-encounter-${nodeId}`;
    super({ ...options, id: uniqueId });
    this.#nodeId = nodeId;
    this.#drawingId = drawingId;
  }

  /** @override */
  get title() {
    const node = this.#getNode();
    return node?.name || 'Unbekannter Ort';
  }

  /**
   * Get the node data
   * @returns {Object|null}
   */
  #getNode() {
    return JourneySessionManager.getBiomeNode(this.#nodeId);
  }

  /** @override */
  async _prepareContext(options = {}) {
    const context = await super._prepareContext(options);
    const node = this.#getNode();
    const session = JourneySessionManager.getCurrent();

    if (!node || !session) {
      return { ...context, error: true };
    }

    // Get biome info
    const biomeConfig = BIOME_LOCATIONS[node.biomeId] || BIOMES[node.biomeId];
    const biomeName = biomeConfig?.name || node.biomeId;
    const biomeIcon = biomeConfig?.icon || 'fa-map-marker-alt';

    // Node type labels
    const typeLabels = {
      green: 'Sicher',
      yellow: 'Gemischt',
      red: 'Gefaehrlich'
    };

    // Fog of War state
    const isRevealed = node.revealed === true;
    // hasDeception is true only if displayedType is explicitly set (not the fallback)
    const hasDeception = !!node.displayedType;
    // For display, use deception if set, otherwise use true values
    const displayedType = node.displayedType || node.type;
    const displayedName = node.displayedName || node.name;

    // Get the encounter pool for this node type
    const poolMap = {
      'green': 'social',
      'yellow': 'mixed',
      'red': 'combat'
    };
    const poolType = poolMap[node.type] || 'mixed';
    const encounterPool = ENCOUNTER_POOLS[poolType] || [];

    // Prepare fronts data
    const fronts = [
      { id: 'etwas_erwacht_in_der_tiefe', name: 'Etwas erwacht in der Tiefe', icon: '🌊', checked: false },
      { id: 'die_ostfront', name: 'Die Ostfront', icon: '⚔️', checked: false },
      { id: 'der_mochtegern_erzmagier', name: 'Der Möchtegern Erzmagier', icon: '🧙', checked: false },
      { id: 'die_stimmen_der_steppe', name: 'Die Stimmen der Steppe', icon: '🏜️', checked: false }
    ];

    // Prepare players data
    const players = [
      { id: 'finn', name: 'Finn', class: 'Dragon Disciple', icon: '🐉', checked: true },
      { id: 'ignatius', name: 'Ignatius', class: 'Magier', icon: '🔥', checked: true },
      { id: 'dante', name: 'Dante', class: 'Krieger', icon: '⚔️', checked: true },
      { id: 'snaf', name: 'Snaf', class: 'Barde', icon: '🎭', checked: false },
      { id: 'bernard', name: 'Bernard', class: 'Zentaur', icon: '🐴', checked: false }
    ];

    // Check for cached data
    const cachedEncounterType = node.prerolledEncounterType || null;
    const cachedEncounter = node.cachedEncounter || null;

    return {
      ...context,
      error: false,
      node: {
        id: node.id,
        name: node.name,
        type: node.type,
        typeLabel: typeLabels[node.type] || node.type,
        biomeId: node.biomeId,
        biomeName: biomeName,
        biomeIcon: biomeIcon,
        resolved: node.resolved,
        drawingId: node.drawingId,
        // Fog of War fields
        revealed: isRevealed,
        displayedType: displayedType,
        displayedTypeLabel: typeLabels[displayedType] || displayedType,
        displayedName: displayedName,
        hasDeception: hasDeception
      },
      encounterPool: encounterPool,
      poolType: poolType,
      fronts: fronts,
      players: players,
      // Cached/pre-rolled data
      hasPrerolledType: !!cachedEncounterType,
      prerolledEncounterType: cachedEncounterType,
      hasCachedEncounter: !!cachedEncounter,
      cachedEncounter: cachedEncounter,
      // Deception options for dropdown
      deceptionOptions: [
        { value: 'green', label: 'Sicher (Grün)', selected: displayedType === 'green' },
        { value: 'yellow', label: 'Gemischt (Gelb)', selected: displayedType === 'yellow' },
        { value: 'red', label: 'Gefährlich (Rot)', selected: displayedType === 'red' }
      ]
    };
  }

  /**
   * Pre-roll the encounter type without generating the full encounter
   * Useful for Seer role to know what's coming
   */
  static async #onPrerollEncounterType(event, target) {
    const app = this;
    const node = app.#getNode();
    if (!node) return;

    // Get the encounter pool based on node type
    const poolMap = {
      'green': 'social',
      'yellow': 'mixed',
      'red': 'combat'
    };
    const poolType = poolMap[node.type] || 'mixed';
    const pool = ENCOUNTER_POOLS[poolType];

    if (!pool || pool.length === 0) {
      ui.notifications.error('Kein Encounter-Pool gefunden.');
      return;
    }

    // Roll a random encounter type
    const encounterTypeName = pool[Math.floor(Math.random() * pool.length)];

    // Save pre-rolled type to node
    await app.#savePrerolledType(encounterTypeName);

    // Show notification
    ui.notifications.info(`Encounter-Typ vorgerollt: ${encounterTypeName}`);

    // Re-render to show the pre-rolled type
    app.render();
  }

  /**
   * Save pre-rolled encounter type to node data
   * @param {string} encounterTypeName
   */
  async #savePrerolledType(encounterTypeName) {
    const session = JourneySessionManager.getCurrent();
    if (!session) return;

    const biomeNodes = (session.biomeNodes || []).map(n => {
      if (n.id === this.#nodeId) {
        return { ...n, prerolledEncounterType: encounterTypeName };
      }
      return n;
    });
    session.updateSource({ biomeNodes });
    await JourneySessionManager.save(session);
  }

  /**
   * Generate the full encounter using Encounter Builder
   */
  static async #onGenerateEncounter(event, target) {
    const app = this;
    const node = app.#getNode();
    if (!node) return;

    const session = JourneySessionManager.getCurrent();
    if (!session) return;

    // Get form data from the app
    const form = app.element.querySelector('form');
    if (!form) {
      ui.notifications.error('Formular nicht gefunden.');
      return;
    }

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

    // Determine encounter type - use pre-rolled or roll new
    const poolMap = {
      'green': 'social',
      'yellow': 'mixed',
      'red': 'combat'
    };
    const poolType = poolMap[node.type] || 'mixed';
    const pool = ENCOUNTER_POOLS[poolType];

    let encounterTypeName = node.prerolledEncounterType;
    if (!encounterTypeName && pool && pool.length > 0) {
      encounterTypeName = pool[Math.floor(Math.random() * pool.length)];
    }

    if (!encounterTypeName) {
      ui.notifications.error('Kein Encounter-Typ verfügbar.');
      return;
    }

    // Convert encounter type name to API format
    const encounterTypeId = encounterTypeName.toLowerCase().replace(/\s+/g, '_');

    // Check if Encounter Builder is available
    if (!globalThis.EncounterBuilder?.generate) {
      ui.notifications.error('Encounter Builder Modul ist nicht geladen!');
      return;
    }

    // Get party level
    let partyLevel = 9;
    try {
      const partyActors = game.actors.filter(a => a.type === 'character' && a.hasPlayerOwner);
      if (partyActors.length > 0) {
        const totalLevel = partyActors.reduce((sum, a) => sum + (a.system.details?.level?.value || 1), 0);
        partyLevel = Math.round(totalLevel / partyActors.length);
      }
    } catch (e) {
      console.warn('Could not determine party level, using default:', e);
    }

    // Get biome info
    const biomeConfig = BIOME_LOCATIONS[node.biomeId] || BIOMES[node.biomeId];
    const biomeName = biomeConfig?.name || node.biomeId;
    const locationName = node.name || biomeName;

    // Prepare the request for Encounter Builder
    const request = {
      encounterType: 'travel',
      partyLevel: partyLevel,
      travelEncounterType: encounterTypeId,
      travelBiome: node.biomeId,
      travelContext: locationName,
      campaignSpecific: true,
      comedicRelief: comedicRelief,
      activePlayers: activePlayers,
      selectedFronts: selectedFronts.length > 0 ? selectedFronts : null
    };

    // Show notification
    ui.notifications.info(`Generiere Encounter für "${locationName}"... (Typ: ${encounterTypeName})`);

    try {
      // Call the Encounter Builder API
      const encounter = await globalThis.EncounterBuilder.generate(request);

      if (!encounter) {
        ui.notifications.error('Encounter-Generierung fehlgeschlagen.');
        return;
      }

      // Cache the encounter in node data
      await app.#cacheEncounter(encounter, encounterTypeName);

      ui.notifications.info(`Encounter für "${locationName}" generiert!`);

      // Re-render to show the encounter
      app.render();

    } catch (error) {
      console.error('Encounter generation failed:', error);
      ui.notifications.error(`Fehler bei der Encounter-Generierung: ${error.message}`);
    }
  }

  /**
   * Cache the generated encounter in node data
   * Normalizes field names from the Encounter Builder API to what the template expects
   * @param {Object} encounter - The generated encounter
   * @param {string} encounterTypeName - The encounter type name
   */
  async #cacheEncounter(encounter, encounterTypeName) {
    const session = JourneySessionManager.getCurrent();
    if (!session) return;

    // Normalize encounter data - map API field names to template field names
    // Server returns: campaignDanger, campaignFront, campaignSecretText, campaignSecretXP, campaignHook, campaignPC
    // Claude returns (for combat): narrativeAnchor.front/danger/secret, playerHook
    // Template expects: danger, front, secret, playerHook, stringToPull
    const normalizedEncounter = {
      ...encounter,
      // Map danger field - prefer narrativeAnchor (combat), fallback to campaignDanger (travel)
      danger: encounter.narrativeAnchor?.danger || encounter.campaignDanger || null,
      // Map front field - prefer narrativeAnchor (combat), fallback to campaignFront (travel)
      front: encounter.narrativeAnchor?.front || encounter.campaignFront || null,
      // Map secret field - prefer narrativeAnchor (combat), fallback to campaignSecretText (travel)
      // Include XP value if available
      secret: encounter.narrativeAnchor?.secret ||
              (encounter.campaignSecretText
                ? (encounter.campaignSecretXP ? `(${encounter.campaignSecretXP}xp) ${encounter.campaignSecretText}` : encounter.campaignSecretText)
                : null),
      // Map playerHook - campaignHook is the hook description text
      playerHook: encounter.campaignHook || encounter.playerHook || null,
      // Map stringToPull - campaignPC is the player name this hook relates to
      stringToPull: encounter.campaignPC || null
    };

    console.log('[NodeEncounter] Caching normalized encounter:', {
      title: normalizedEncounter.title,
      danger: normalizedEncounter.danger,
      front: normalizedEncounter.front,
      secret: normalizedEncounter.secret,
      playerHook: normalizedEncounter.playerHook,
      stringToPull: normalizedEncounter.stringToPull
    });

    const biomeNodes = (session.biomeNodes || []).map(n => {
      if (n.id === this.#nodeId) {
        return {
          ...n,
          prerolledEncounterType: encounterTypeName,
          cachedEncounter: normalizedEncounter
        };
      }
      return n;
    });
    session.updateSource({ biomeNodes });
    await JourneySessionManager.save(session);
  }

  /**
   * Save updated node name to session
   * @param {string} newName - The new location name
   */
  async #saveNodeName(newName) {
    const session = JourneySessionManager.getCurrent();
    if (!session) return;

    const biomeNodes = (session.biomeNodes || []).map(n => {
      if (n.id === this.#nodeId) {
        return { ...n, name: newName };
      }
      return n;
    });
    session.updateSource({ biomeNodes });
    await JourneySessionManager.save(session);
  }

  /**
   * Regenerate the node name using the name generator
   */
  static async #onRegenerateNodeName(event, target) {
    const app = this;
    const node = app.#getNode();
    if (!node) return;

    // Generate new name using the name generator
    const newLocation = getRandomLocation(node.biomeId, node.type);
    const newName = newLocation?.name || node.name;

    // Save and update
    await app.#saveNodeName(newName);

    // Update the input field directly for immediate feedback
    const input = app.element.querySelector('.location-name-input');
    if (input) {
      input.value = newName;
    }

    ui.notifications.info(`Neuer Name: ${newName}`);
  }

  /** @override */
  _onRender(context, options) {
    super._onRender(context, options);

    // Add event listener for name input changes
    const nameInput = this.element.querySelector('.location-name-input');
    if (nameInput) {
      nameInput.addEventListener('change', async (event) => {
        const newName = event.target.value.trim();
        if (newName) {
          await this.#saveNodeName(newName);
          ui.notifications.info(`Name geändert: ${newName}`);
        }
      });
    }
  }

  /**
   * Mark the node as resolved
   */
  static async #onResolveNode(event, target) {
    const app = this;
    await JourneySessionManager.resolveBiomeNode(app.#nodeId);

    // Update the Drawing appearance
    if (app.#drawingId && canvas?.scene) {
      const drawing = canvas.scene.drawings.get(app.#drawingId);
      if (drawing) {
        await drawing.update({
          fillAlpha: 0.4,
          strokeAlpha: 0.5,
          'flags.uncharted-journeys.status': 'resolved'
        });
      }
    }

    ui.notifications.info('Ort als erledigt markiert!');
    app.render();
  }

  /**
   * Start the resolution mechanic for this encounter
   * Sets the node encounter as the current encounter in session, then triggers resolution
   * Uses the JourneyManagerApp's resolution methods for interactive chat templates
   */
  static async #onStartResolution(event, target) {
    const app = this;
    const node = app.#getNode();

    if (!node?.cachedEncounter) {
      ui.notifications.warn('Kein Encounter vorhanden!');
      return;
    }

    const encounter = node.cachedEncounter;
    const encounterType = encounter.encounterType || node.prerolledEncounterType;

    if (!encounterType) {
      ui.notifications.warn('Kein Encounter-Typ gefunden!');
      return;
    }

    // Normalize encounter type for config lookup
    const normalizedType = encounterType.includes(' ') ? encounterType :
      encounterType.split('_').map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(' ');

    const config = getResolutionConfig(normalizedType);
    if (!config) {
      ui.notifications.warn(`Keine Resolution-Konfiguration für "${normalizedType}".`);
      return;
    }

    // Get session
    const session = JourneySessionManager.getCurrent();
    if (!session) {
      ui.notifications.error('Keine aktive Journey-Session!');
      return;
    }

    // Get the JourneyManagerApp instance from the global UnchartedJourneys object
    const journeyApp = globalThis.UnchartedJourneys?.app;
    if (!journeyApp) {
      ui.notifications.error('JourneyManagerApp nicht gefunden! Bitte öffne zuerst die Journey Manager App.');
      return;
    }

    // Create a temporary encounter object compatible with the resolution system
    const tempEncounter = {
      encounterType: normalizedType,
      text: encounter.fullText || encounter.description || '',
      nodeId: node.id,
      nodeName: node.name,
      resolution: {
        step: 'pending',
        memberResults: []
      }
    };

    // Set this as the current encounter in the session
    // DataModel arrays are immutable, so we need to create new arrays
    const existingEncounters = [...session.encounters];
    let encounterIndex = existingEncounters.findIndex(e => e.nodeId === node.id);

    if (encounterIndex === -1) {
      // Add new encounter
      existingEncounters.push(tempEncounter);
      encounterIndex = existingEncounters.length - 1;
    } else {
      // Update existing
      existingEncounters[encounterIndex] = {
        ...existingEncounters[encounterIndex],
        ...tempEncounter
      };
    }

    // Update session with new encounters array and current index
    session.updateSource({
      encounters: existingEncounters,
      currentEncounterIndex: encounterIndex
    });
    await JourneySessionManager.save(session);

    // Now trigger the resolution flow via the JourneyManagerApp
    // This will use the existing resolution logic with interactive chat templates
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

    // Re-fetch session after updates
    const updatedSession = JourneySessionManager.getCurrent();

    // Send the appropriate chat message using JourneyManagerApp's methods
    // These methods send interactive chat cards with buttons
    try {
      if (firstStep === 'choice') {
        await journeyApp._sendChoiceChat(config, updatedSession);
      } else if (firstStep === 'keyRole') {
        await journeyApp._sendKeyRoleCheckChat(config, updatedSession, dc);
      } else if (firstStep === 'group') {
        await journeyApp._sendGroupCheckChat(config, updatedSession, dc);
      }

      ui.notifications.info(`Resolution gestartet für "${normalizedType}"`);
    } catch (error) {
      console.error('Resolution chat error:', error);
      ui.notifications.error(`Fehler beim Starten der Resolution: ${error.message}`);
    }

    // Refresh the JourneyManagerApp if it's open
    if (journeyApp.rendered) {
      journeyApp.render();
    }

    app.render();
  }

  /**
   * Copy encounter text to clipboard
   */
  static async #onCopyEncounterText(event, target) {
    const app = this;
    const node = app.#getNode();
    if (!node?.cachedEncounter) return;

    const encounter = node.cachedEncounter;
    const text = encounter.fullText || encounter.description || JSON.stringify(encounter, null, 2);

    try {
      await navigator.clipboard.writeText(text);
      ui.notifications.info('Encounter-Text in Zwischenablage kopiert!');
    } catch (error) {
      console.error('Failed to copy text:', error);
      ui.notifications.error('Fehler beim Kopieren.');
    }
  }

  // ============================================================================
  // FOG OF WAR ACTIONS
  // ============================================================================

  /**
   * Reveal the node to players
   * If a deception is set, shows the fake color; otherwise shows true color
   */
  static async #onRevealNode(event, target) {
    const app = this;
    const node = app.#getNode();
    if (!node) return;

    // Just set revealed to true - don't clear deception
    await app.#updateNodeFogOfWar({
      revealed: true
    });

    // If deception is set, show fake color; otherwise show true color
    const colorToShow = node.displayedType || node.type;
    await app.#updateDrawingColor(colorToShow);

    const typeLabelMap = { green: 'Sicher', yellow: 'Gemischt', red: 'Gefährlich' };
    if (node.displayedType) {
      ui.notifications.info(`Ort aufgedeckt mit Täuschung: erscheint als ${typeLabelMap[node.displayedType]}`);
    } else {
      ui.notifications.info(`Ort aufgedeckt: ${node.name} (${typeLabelMap[node.type]})`);
    }
    app.render();
  }

  /**
   * Set a deceptive color and name for the node (Täuschung)
   * The node stays hidden (gray) - deception is only visible when revealed
   */
  static async #onSetDeception(event, target) {
    const app = this;
    const node = app.#getNode();
    if (!node) return;

    const form = app.element.querySelector('form');
    if (!form) return;

    const deceptionType = form.querySelector('select[name="deceptionType"]')?.value;
    const deceptionName = form.querySelector('input[name="deceptionName"]')?.value?.trim();

    if (!deceptionType) {
      ui.notifications.warn('Bitte wähle eine Täuschungsfarbe aus.');
      return;
    }

    // Auto-generate a name matching the deception type if none provided
    let finalDeceptionName = deceptionName;
    if (!finalDeceptionName) {
      // Generate a name that matches the fake color (deceptionType), not the real color
      finalDeceptionName = generateLocationName(node.biomeId, deceptionType);
      console.log(`[Täuschung] Auto-generated name for ${deceptionType}: ${finalDeceptionName}`);
    }

    // Store deception but DON'T reveal - node stays gray until revealed
    await app.#updateNodeFogOfWar({
      displayedType: deceptionType,
      displayedName: finalDeceptionName || null
    });

    // If already revealed, update the Drawing to show the fake color
    // Otherwise keep it gray
    if (node.revealed) {
      await app.#updateDrawingColor(deceptionType);
    }
    // Don't change Drawing if not revealed - stays gray

    const typeLabelMap = { green: 'Sicher', yellow: 'Gemischt', red: 'Gefährlich' };
    const statusMsg = node.revealed
      ? `Täuschung gesetzt und sichtbar: erscheint als ${typeLabelMap[deceptionType]}`
      : `Täuschung vorbereitet: wird als ${typeLabelMap[deceptionType]} erscheinen wenn aufgedeckt`;
    ui.notifications.info(statusMsg);
    app.render();
  }

  /**
   * Clear any deception from the node
   * If revealed, shows true color; if hidden, stays gray
   */
  static async #onClearDeception(event, target) {
    const app = this;
    const node = app.#getNode();
    if (!node) return;

    await app.#updateNodeFogOfWar({
      displayedType: null,
      displayedName: null
    });

    // If already revealed, update to show true color
    if (node.revealed) {
      await app.#updateDrawingColor(node.type);
      ui.notifications.info('Täuschung entfernt - wahrer Ort aufgedeckt.');
    } else {
      ui.notifications.info('Täuschung entfernt.');
    }
    app.render();
  }

  /**
   * Update fog of war fields in the session
   * @param {Object} updates - The fog of war field updates
   */
  async #updateNodeFogOfWar(updates) {
    const session = JourneySessionManager.getCurrent();
    if (!session) return;

    const biomeNodes = (session.biomeNodes || []).map(n => {
      if (n.id === this.#nodeId) {
        return { ...n, ...updates };
      }
      return n;
    });
    session.updateSource({ biomeNodes });
    await JourneySessionManager.save(session);
  }

  /**
   * Update the Drawing's appearance based on visibility state
   * @param {string} nodeType - 'green', 'yellow', 'red', or 'hidden'
   */
  async #updateDrawingColor(nodeType) {
    if (!this.#drawingId || !canvas?.scene) return;

    const drawing = canvas.scene.drawings.get(this.#drawingId);
    if (!drawing) return;

    const node = this.#getNode();

    // Color map matching JourneySessionManager.MARKER_COLORS
    const colorMap = {
      green:  { fill: '#228b22', stroke: '#006400' },   // Forest green
      yellow: { fill: '#FFD700', stroke: '#B8860B' },   // Goldenrod
      red:    { fill: '#dc143c', stroke: '#8B0000' },   // Crimson
      hidden: { fill: '#808080', stroke: '#404040' }    // Gray
    };

    const colors = colorMap[nodeType] || colorMap.hidden;

    await drawing.update({
      fillColor: colors.fill,
      strokeColor: colors.stroke,
      text: nodeType === 'hidden' ? '?' : '',  // "?" indicates hidden
      'flags.uncharted-journeys.displayedType': nodeType,
      'flags.uncharted-journeys.displayedName': node?.displayedName || null,
      'flags.uncharted-journeys.status': nodeType === 'hidden' ? 'hidden' : 'revealed',
      'flags.uncharted-journeys.hasDeception': !!(node?.displayedType || node?.displayedName)
    });
  }

  /**
   * Open a NodeEncounterApp for a Drawing
   * @param {DrawingDocument} drawing - The Drawing document
   * @returns {NodeEncounterApp|null}
   */
  static openForDrawing(drawing) {
    const flags = drawing.flags?.['uncharted-journeys'];
    if (!flags?.nodeId) return null;

    // Check if window already exists
    const existingApp = Object.values(ui.windows).find(
      w => w instanceof NodeEncounterApp && w.#nodeId === flags.nodeId
    );

    if (existingApp) {
      existingApp.bringToFront();
      existingApp.render();
      return existingApp;
    }

    // Create new window
    const app = new NodeEncounterApp(flags.nodeId, drawing.id);
    app.render(true);
    return app;
  }
}

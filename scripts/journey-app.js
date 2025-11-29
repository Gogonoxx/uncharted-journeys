/**
 * Uncharted Journeys - Encounter Roller Application
 * Uses Foundry v13 ApplicationV2 with HandlebarsApplicationMixin
 */

import { REGIONS, ENCOUNTER_TYPES, ENCOUNTERS } from './data/encounters.js';

const { ApplicationV2, HandlebarsApplicationMixin } = foundry.applications.api;

/**
 * Main application window for rolling journey encounters
 */
export class JourneyEncounterApp extends HandlebarsApplicationMixin(ApplicationV2) {

  /** @override */
  static DEFAULT_OPTIONS = {
    id: 'journey-encounter-roller',
    classes: ['uncharted-journeys', 'encounter-roller'],
    tag: 'form',
    window: {
      frame: true,
      positioned: true,
      title: 'Uncharted Journeys - Encounter Roller',
      icon: 'fas fa-route',
      resizable: true
    },
    position: {
      width: 500,
      height: 'auto'
    },
    actions: {
      rollEncounterType: JourneyEncounterApp.#onRollEncounterType,
      rollEncounter: JourneyEncounterApp.#onRollEncounter,
      sendToChat: JourneyEncounterApp.#onSendToChat,
      clearResults: JourneyEncounterApp.#onClearResults
    }
  };

  /** @override */
  static PARTS = {
    main: {
      template: 'modules/uncharted-journeys/templates/encounter-roller.hbs'
    }
  };

  /**
   * Current state of the encounter roller
   */
  #state = {
    currentRegion: 'Frontiers',
    encounterTypeRoll: null,
    currentEncounterType: null,
    encounterRoll: null,
    currentEncounter: null
  };

  /**
   * Prepare data for template rendering
   * @override
   */
  async _prepareContext(options = {}) {
    const context = await super._prepareContext(options);

    return foundry.utils.mergeObject(context, {
      regions: REGIONS,
      encounterTypes: ENCOUNTER_TYPES,
      state: this.#state,
      hasEncounterType: this.#state.currentEncounterType !== null,
      hasEncounter: this.#state.currentEncounter !== null
    });
  }

  /**
   * Handle region selection change
   * @override
   */
  _onChangeForm(formConfig, event) {
    super._onChangeForm(formConfig, event);

    if (event.target.name === 'region') {
      this.#state.currentRegion = event.target.value;
      // Clear encounter when region changes
      this.#state.encounterRoll = null;
      this.#state.currentEncounter = null;
      this.render({ parts: ['main'] });
    }
  }

  /**
   * Roll 1d12 for encounter type
   */
  static async #onRollEncounterType(event, target) {
    const app = this;

    // Roll 1d12
    const roll = new Roll('1d12');
    await roll.evaluate();

    // Get the encounter type (1-indexed to 0-indexed)
    const typeIndex = roll.total - 1;
    const encounterType = ENCOUNTER_TYPES[typeIndex];

    // Update state
    app.#state.encounterTypeRoll = roll.total;
    app.#state.currentEncounterType = encounterType;

    // Clear previous encounter result
    app.#state.encounterRoll = null;
    app.#state.currentEncounter = null;

    // Show the roll in chat (dice so Nice! etc can display it)
    await roll.toMessage({
      flavor: `<strong>Encounter Type Roll</strong>`,
      speaker: { alias: 'Journey Encounter' }
    }, { rollMode: 'gmroll' });

    // Re-render
    app.render({ parts: ['main'] });
  }

  /**
   * Roll 1d10 for specific encounter
   */
  static async #onRollEncounter(event, target) {
    const app = this;

    // Must have encounter type first
    if (!app.#state.currentEncounterType) {
      ui.notifications.warn('Roll encounter type first!');
      return;
    }

    // Roll 1d10
    const roll = new Roll('1d10');
    await roll.evaluate();

    // Get the encounter from the data
    const region = app.#state.currentRegion;
    const encounterType = app.#state.currentEncounterType;
    const encounterIndex = roll.total - 1;

    const regionData = ENCOUNTERS[region];
    if (!regionData) {
      ui.notifications.error(`Region "${region}" not found in encounter data`);
      return;
    }

    const typeData = regionData[encounterType];
    if (!typeData || typeData.length === 0) {
      ui.notifications.error(`No encounters found for "${encounterType}" in "${region}"`);
      return;
    }

    const encounter = typeData[encounterIndex];
    if (!encounter) {
      ui.notifications.error(`Encounter #${roll.total} not found`);
      return;
    }

    // Update state
    app.#state.encounterRoll = roll.total;
    app.#state.currentEncounter = encounter;

    // Show the roll in chat
    await roll.toMessage({
      flavor: `<strong>Encounter Roll</strong> (${region} - ${encounterType})`,
      speaker: { alias: 'Journey Encounter' }
    }, { rollMode: 'gmroll' });

    // Re-render
    app.render({ parts: ['main'] });
  }

  /**
   * Send the current encounter to chat
   */
  static async #onSendToChat(event, target) {
    const app = this;

    if (!app.#state.currentEncounter) {
      ui.notifications.warn('No encounter to send!');
      return;
    }

    const encounter = app.#state.currentEncounter;
    const region = app.#state.currentRegion;
    const encounterType = app.#state.currentEncounterType;

    // Get the UUID for the encounter type from the global object
    const encounterTypeUUID = globalThis.UnchartedJourneys?.encounterTypeUUIDs?.[encounterType] || null;

    // Render the chat template
    const content = await renderTemplate(
      'modules/uncharted-journeys/templates/chat-encounter.hbs',
      {
        region,
        encounterType,
        encounterTypeUUID,
        roll: app.#state.encounterRoll,
        encounter
      }
    );

    // Create the chat message (GM only)
    await ChatMessage.create({
      content,
      whisper: ChatMessage.getWhisperRecipients('GM'),
      speaker: { alias: 'Uncharted Journeys' },
      flags: {
        'uncharted-journeys': {
          region,
          encounterType,
          encounter
        }
      }
    });

    ui.notifications.info('Encounter sent to chat!');
  }

  /**
   * Clear all results
   */
  static #onClearResults(event, target) {
    const app = this;

    app.#state.encounterTypeRoll = null;
    app.#state.currentEncounterType = null;
    app.#state.encounterRoll = null;
    app.#state.currentEncounter = null;

    app.render({ parts: ['main'] });
  }
}

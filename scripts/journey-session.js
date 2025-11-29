/**
 * Uncharted Journeys - Journey Session Management
 * Handles persistent journey state using Foundry's DataModel
 */

import { DISTANCES, calculateDifficulty, getBaseEncounters } from './data/journey-tables.js';

const { StringField, NumberField, BooleanField, SchemaField, ArrayField } = foundry.data.fields;

/**
 * Data model for a party member in a journey
 */
class PartyMemberSchema extends SchemaField {
  constructor(options = {}) {
    super({
      actorId: new StringField({ required: true }),
      role: new StringField({
        choices: ['leader', 'outrider', 'quartermaster', 'sentry'],
        required: true
      }),
      isPrimary: new BooleanField({ initial: true }),
      preparationId: new StringField({ blank: true }),
      preparationResult: new StringField({
        choices: ['', 'pending', 'success', 'failure'],
        initial: 'pending'
      }),
      roleAbilityUsed: new BooleanField({ initial: false }),
      groupCheckResult: new StringField({
        choices: ['', 'pending', 'success', 'failure'],
        initial: 'pending'
      })
    }, options);
  }
}

/**
 * Data model for an encounter in the journey
 */
class EncounterSchema extends SchemaField {
  constructor(options = {}) {
    super({
      id: new StringField({ required: true }),
      region: new StringField({ required: true }),
      typeRoll: new NumberField({ nullable: true }),
      encounterType: new StringField({ blank: true }),
      encounterRoll: new NumberField({ nullable: true }),
      title: new StringField({ blank: true }),
      description: new StringField({ blank: true }),
      status: new StringField({
        choices: ['pending', 'active', 'resolved'],
        initial: 'pending'
      })
    }, options);
  }
}

/**
 * Main Journey Session Data Model
 */
export class JourneySessionModel extends foundry.abstract.DataModel {

  static defineSchema() {
    return {
      // Meta
      id: new StringField({ required: true }),
      createdAt: new NumberField({ initial: () => Date.now() }),

      // Stage 1: Route
      origin: new StringField({ blank: true }),
      destination: new StringField({ blank: true }),
      distance: new StringField({
        choices: Object.keys(DISTANCES),
        initial: 'medium'
      }),
      weather: new NumberField({ min: 1, max: 10, integer: true, initial: 1 }),
      terrain: new NumberField({ min: 1, max: 10, integer: true, initial: 1 }),
      nemesis: new NumberField({ min: 0, max: 10, integer: true, initial: 0 }),
      nemesisActive: new BooleanField({ initial: false }),

      // Stage 2: Preparation
      partyMembers: new ArrayField(new PartyMemberSchema()),
      difficultyModifiers: new ArrayField(new SchemaField({
        source: new StringField(),
        value: new NumberField()
      })),

      // Stage 3: Journey
      currentStage: new NumberField({ min: 1, max: 4, integer: true, initial: 1 }),
      pace: new StringField({
        choices: ['rush', 'normal', 'careful'],
        initial: 'normal'
      }),
      encounters: new ArrayField(new EncounterSchema()),
      currentEncounterIndex: new NumberField({ integer: true, initial: 0 }),
      defaultRegion: new StringField({ initial: 'Frontiers' }),

      // Stage 4: End
      outcome: new StringField({
        choices: ['', 'arrived', 'abandoned'],
        initial: '',
        blank: true
      }),
      arrivalRolls: new ArrayField(new NumberField()),
      arrivalResult: new NumberField({ nullable: true }),
      endOfJourneySaves: new ArrayField(new SchemaField({
        actorId: new StringField(),
        roll: new NumberField(),
        success: new BooleanField()
      }))
    };
  }

  /**
   * Calculate the current journey difficulty
   * @returns {number} Total DC
   */
  get difficulty() {
    let base = calculateDifficulty(
      this.weather,
      this.terrain,
      this.nemesisActive ? this.nemesis : 0
    );

    // Apply modifiers from preparations
    for (const mod of this.difficultyModifiers) {
      base += mod.value;
    }

    // Apply pace modifiers
    if (this.pace === 'rush') base += 5;
    if (this.pace === 'careful') base -= 3;

    return Math.max(10, base);
  }

  /**
   * Get base encounter count for current distance
   * @returns {number} Base encounters
   */
  get baseEncounterCount() {
    return getBaseEncounters(this.distance);
  }

  /**
   * Get total encounter count including modifiers
   * @returns {number} Total encounters
   */
  get totalEncounterCount() {
    let count = this.baseEncounterCount;

    // Pace modifiers
    if (this.pace === 'rush') count -= 1;
    if (this.pace === 'careful') count += 1;

    // Group check results
    const failedChecks = this.partyMembers.filter(m => m.groupCheckResult === 'failure').length;
    if (failedChecks >= 2) count += 1;

    return Math.max(1, count);
  }

  /**
   * Get the current active encounter
   * @returns {Object|null} Current encounter or null
   */
  get currentEncounter() {
    return this.encounters[this.currentEncounterIndex] ?? null;
  }

  /**
   * Check if all preparations are complete
   * @returns {boolean}
   */
  get allPreparationsComplete() {
    return this.partyMembers.every(m =>
      !m.preparationId || m.preparationResult !== 'pending'
    );
  }

  /**
   * Check if all group checks are complete
   * @returns {boolean}
   */
  get allGroupChecksComplete() {
    return this.partyMembers.every(m => m.groupCheckResult !== 'pending');
  }

  /**
   * Get count of passed group checks
   * @returns {number}
   */
  get passedGroupChecks() {
    return this.partyMembers.filter(m => m.groupCheckResult === 'success').length;
  }

  /**
   * Get count of resolved encounters
   * @returns {number}
   */
  get resolvedEncounterCount() {
    return this.encounters.filter(e => e.status === 'resolved').length;
  }

  /**
   * Check if all encounters are resolved
   * @returns {boolean}
   */
  get allEncountersResolved() {
    return this.encounters.length > 0 &&
           this.encounters.every(e => e.status === 'resolved');
  }

  /**
   * Get party member by role
   * @param {string} role - Role ID
   * @returns {Object|null} Party member data
   */
  getMemberByRole(role) {
    return this.partyMembers.find(m => m.role === role) ?? null;
  }

  /**
   * Get actor for a party member
   * @param {string} actorId - Actor ID
   * @returns {Actor|null} The actor or null
   */
  getActor(actorId) {
    return game.actors.get(actorId) ?? null;
  }
}

/**
 * Journey Session Manager
 * Handles saving/loading journey state to Foundry settings
 */
export class JourneySessionManager {

  static SETTING_KEY = 'currentJourney';

  /**
   * Initialize the settings for journey storage
   */
  static registerSettings() {
    game.settings.register('uncharted-journeys', this.SETTING_KEY, {
      name: 'Current Journey Data',
      scope: 'world',
      config: false,
      type: Object,
      default: null,
      onChange: value => {
        // Notify any open journey apps to refresh
        Hooks.callAll('uncharted-journeys.journeyUpdated', value);
      }
    });
  }

  /**
   * Create a new journey session
   * @returns {JourneySessionModel} New journey session
   */
  static createNew() {
    const data = {
      id: foundry.utils.randomID(),
      createdAt: Date.now()
    };
    return new JourneySessionModel(data);
  }

  /**
   * Get the current journey session
   * @returns {JourneySessionModel|null} Current session or null
   */
  static getCurrent() {
    const data = game.settings.get('uncharted-journeys', this.SETTING_KEY);
    if (!data) return null;
    return new JourneySessionModel(data);
  }

  /**
   * Save a journey session
   * @param {JourneySessionModel} session - The session to save
   */
  static async save(session) {
    await game.settings.set('uncharted-journeys', this.SETTING_KEY, session.toObject());
  }

  /**
   * Clear the current journey
   */
  static async clear() {
    await game.settings.set('uncharted-journeys', this.SETTING_KEY, null);
  }

  /**
   * Update a specific field in the current journey
   * @param {string} path - Dot-notation path to the field
   * @param {*} value - New value
   */
  static async updateField(path, value) {
    const session = this.getCurrent();
    if (!session) return;

    foundry.utils.setProperty(session, path, value);
    await this.save(session);
  }

  /**
   * Add a party member to the journey
   * @param {string} actorId - Actor ID
   * @param {string} role - Role ID
   */
  static async addPartyMember(actorId, role) {
    const session = this.getCurrent();
    if (!session) return;

    // Remove existing member with same role
    const existingIndex = session.partyMembers.findIndex(m => m.role === role);
    if (existingIndex >= 0) {
      session.partyMembers.splice(existingIndex, 1);
    }

    session.partyMembers.push({
      actorId,
      role,
      isPrimary: true,
      preparationId: '',
      preparationResult: 'pending',
      roleAbilityUsed: false,
      groupCheckResult: 'pending'
    });

    await this.save(session);
  }

  /**
   * Set preparation result for a party member
   * @param {string} role - Role ID
   * @param {string} result - 'success' or 'failure'
   * @param {number} difficultyMod - Difficulty modifier to apply
   */
  static async setPreparationResult(role, result, difficultyMod = 0) {
    const session = this.getCurrent();
    if (!session) return;

    const member = session.partyMembers.find(m => m.role === role);
    if (member) {
      member.preparationResult = result;
    }

    if (difficultyMod !== 0) {
      session.difficultyModifiers.push({
        source: `preparation-${role}`,
        value: difficultyMod
      });
    }

    await this.save(session);
  }

  /**
   * Set group check result for a party member
   * @param {string} role - Role ID
   * @param {string} result - 'success' or 'failure'
   */
  static async setGroupCheckResult(role, result) {
    const session = this.getCurrent();
    if (!session) return;

    const member = session.partyMembers.find(m => m.role === role);
    if (member) {
      member.groupCheckResult = result;
    }

    await this.save(session);
  }

  /**
   * Initialize encounters for the journey
   */
  static async initializeEncounters() {
    const session = this.getCurrent();
    if (!session) return;

    const count = session.totalEncounterCount;
    session.encounters = [];

    for (let i = 0; i < count; i++) {
      session.encounters.push({
        id: foundry.utils.randomID(),
        region: session.defaultRegion,
        typeRoll: null,
        encounterType: '',
        encounterRoll: null,
        title: '',
        description: '',
        status: i === 0 ? 'active' : 'pending'
      });
    }

    session.currentEncounterIndex = 0;
    await this.save(session);
  }

  /**
   * Advance to the next stage
   */
  static async advanceStage() {
    const session = this.getCurrent();
    if (!session) return;

    if (session.currentStage < 4) {
      session.currentStage += 1;
      await this.save(session);
    }
  }
}

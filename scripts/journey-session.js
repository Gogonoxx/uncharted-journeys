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
        initial: 'pending',
        blank: true
      }),
      roleAbilityUsed: new BooleanField({ initial: false }),
      groupCheckResult: new StringField({
        choices: ['', 'pending', 'success', 'failure'],
        initial: 'pending',
        blank: true
      })
    }, options);
  }
}

/**
 * Data model for encounter resolution member results
 */
class ResolutionMemberResultSchema extends SchemaField {
  constructor(options = {}) {
    super({
      actorId: new StringField({ required: true }),
      result: new StringField({
        choices: ['', 'success', 'failure'],
        initial: '',
        blank: true
      }),
      replaced: new BooleanField({ initial: false })
    }, options);
  }
}

/**
 * Data model for encounter resolution state
 */
class EncounterResolutionSchema extends SchemaField {
  constructor(options = {}) {
    super({
      // Current step in resolution flow
      step: new StringField({
        choices: ['pending', 'choice', 'keyRole', 'group', 'saves', 'complete'],
        initial: 'pending'
      }),
      // For Monster Hunt - which path was chosen
      choiceMade: new StringField({
        choices: ['', 'track', 'avoid'],
        initial: '',
        blank: true
      }),
      // Key role check result
      keyRoleResult: new StringField({
        choices: ['', 'criticalSuccess', 'success', 'failure'],
        initial: '',
        blank: true
      }),
      // DC modifier from key role check (e.g., -2 or +2)
      dcModifier: new NumberField({ integer: true, initial: 0 }),
      // Advantage/disadvantage state from key role check
      advantageState: new StringField({
        choices: ['', 'advantage', 'disadvantage'],
        initial: '',
        blank: true
      }),
      // Individual member results for group checks/saves
      memberResults: new ArrayField(new ResolutionMemberResultSchema()),
      // Final outcome tier
      outcome: new StringField({
        choices: [
          '', 'all', 'majority', 'minority', 'none', 'individual', 'combat',
          // Combat-related outcomes (Deadly Fight, etc.)
          'partySurprised', 'partySurprisedDisadvantage',
          'enemySurprised', 'enemySurprisedBonus', 'neitherSurprised',
          // Special outcomes for key role failures
          'keyRoleFailure'
        ],
        initial: '',
        blank: true
      }),
      // Whether effects have been applied
      effectsApplied: new BooleanField({ initial: false })
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
      }),
      // Resolution tracking
      resolution: new EncounterResolutionSchema()
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

    // DataModels require updateSource() to modify values
    session.updateSource({ [path]: value });
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

    // Build new party members array (DataModel arrays are immutable)
    const newMembers = session.partyMembers.filter(m => m.role !== role);
    newMembers.push({
      actorId,
      role,
      isPrimary: true,
      preparationId: '',
      preparationResult: 'pending',
      roleAbilityUsed: false,
      groupCheckResult: 'pending'
    });

    session.updateSource({ partyMembers: newMembers });
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

    // Build new party members array with updated result (DataModel arrays are immutable)
    const newMembers = session.partyMembers.map(m => {
      if (m.role === role) {
        return { ...m, preparationResult: result };
      }
      return { ...m };
    });

    // Build new modifiers array if needed
    const updates = { partyMembers: newMembers };
    if (difficultyMod !== 0) {
      const newModifiers = [...session.difficultyModifiers, {
        source: `preparation-${role}`,
        value: difficultyMod
      }];
      updates.difficultyModifiers = newModifiers;
    }

    session.updateSource(updates);
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

    // Build new party members array with updated result (DataModel arrays are immutable)
    const newMembers = session.partyMembers.map(m => {
      if (m.role === role) {
        return { ...m, groupCheckResult: result };
      }
      return { ...m };
    });

    session.updateSource({ partyMembers: newMembers });
    await this.save(session);
  }

  /**
   * Initialize encounters for the journey
   */
  static async initializeEncounters() {
    const session = this.getCurrent();
    if (!session) return;

    const count = session.totalEncounterCount;
    const newEncounters = [];

    for (let i = 0; i < count; i++) {
      newEncounters.push({
        id: foundry.utils.randomID(),
        region: session.defaultRegion,
        typeRoll: null,
        encounterType: '',
        encounterRoll: null,
        title: '',
        description: '',
        status: i === 0 ? 'active' : 'pending',
        // Initialize resolution tracking
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
      });
    }

    // Use updateSource for DataModel immutability
    session.updateSource({
      encounters: newEncounters,
      currentEncounterIndex: 0
    });
    await this.save(session);
  }

  /**
   * Update the resolution state for the current encounter
   * @param {Object} resolutionUpdate - Partial resolution object to merge
   */
  static async updateEncounterResolution(resolutionUpdate) {
    const session = this.getCurrent();
    if (!session) return;

    const currentIndex = session.currentEncounterIndex;
    const currentEncounter = session.encounters[currentIndex];
    if (!currentEncounter) return;

    // Merge resolution updates
    const newResolution = {
      ...currentEncounter.resolution,
      ...resolutionUpdate
    };

    // Build new encounters array (DataModel arrays are immutable)
    const newEncounters = session.encounters.map((e, i) => {
      if (i === currentIndex) {
        return { ...e, resolution: newResolution };
      }
      return { ...e };
    });

    session.updateSource({ encounters: newEncounters });
    await this.save(session);
  }

  /**
   * Set a member's result in the current encounter resolution
   * @param {string} actorId - Actor ID
   * @param {string} result - 'success' or 'failure'
   * @param {boolean} replaced - Whether this result was replaced by key role
   */
  static async setResolutionMemberResult(actorId, result, replaced = false) {
    const session = this.getCurrent();
    if (!session) return;

    const currentIndex = session.currentEncounterIndex;
    const currentEncounter = session.encounters[currentIndex];
    if (!currentEncounter) return;

    // Update or add the member result
    const existingResults = currentEncounter.resolution.memberResults || [];
    const existingIndex = existingResults.findIndex(r => r.actorId === actorId);

    let newMemberResults;
    if (existingIndex >= 0) {
      newMemberResults = existingResults.map((r, i) => {
        if (i === existingIndex) {
          return { actorId, result, replaced };
        }
        return { ...r };
      });
    } else {
      newMemberResults = [...existingResults, { actorId, result, replaced }];
    }

    await this.updateEncounterResolution({ memberResults: newMemberResults });
  }

  /**
   * Calculate the outcome tier based on member results
   * @returns {string} 'all', 'majority', 'minority', or 'none'
   */
  static calculateOutcomeTier() {
    const session = this.getCurrent();
    if (!session) return 'none';

    const currentEncounter = session.currentEncounter;
    if (!currentEncounter) return 'none';

    const results = currentEncounter.resolution.memberResults || [];
    const total = results.length;
    const successes = results.filter(r => r.result === 'success').length;

    if (successes === total && total > 0) return 'all';
    if (successes > total / 2) return 'majority';
    if (successes > 0) return 'minority';
    return 'none';
  }

  /**
   * Advance to the next stage
   */
  static async advanceStage() {
    const session = this.getCurrent();
    if (!session) return;

    if (session.currentStage < 4) {
      // Use updateSource for DataModel immutability
      session.updateSource({ currentStage: session.currentStage + 1 });
      await this.save(session);
    }
  }
}

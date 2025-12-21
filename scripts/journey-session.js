/**
 * Uncharted Journeys - Journey Session Management (PF2E Redesign)
 * Handles persistent journey state using Foundry's DataModel
 *
 * NEW PF2E MECHANICS:
 * - Fog of War: Nodes start gray, revealed through preparations/abilities
 * - Fake-Farben: Nodes can have displayedColor ≠ actualColor (from failed preparations)
 * - Encounter Rerolls: Player vs GM reroll tracking from Consult the Occult
 * - Node-Skip: Tracking how many nodes can be skipped from Procure Mounts
 * - Role Tracking: Per-ally/per-player ability usage
 */

import { DISTANCES, calculateDifficulty, getBaseEncounters } from './data/journey-tables.js';
import { BIOME_LOCATIONS, LOCATION_ENCOUNTER_POOLS, getRandomLocation, getRandomEncounterType } from './data/biome-locations.js';

/**
 * Get initial role tracking state (defined inline to avoid import issues)
 * @returns {Object} Initial tracking state for all role abilities
 */
function getInitialRoleTrackingState() {
  return {
    leader: {
      usedOnAllies: []
    },
    outrider: {
      deepExplorationUsed: false
    },
    quartermaster: {
      usedOnPlayers: []
    },
    sentry: {
      tacticalRetreatUsed: false
    }
  };
}

const { StringField, NumberField, BooleanField, SchemaField, ArrayField, ObjectField } = foundry.data.fields;

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
        choices: ['', 'pending', 'criticalSuccess', 'success', 'failure', 'criticalFailure'],
        initial: 'pending',
        blank: true
      }),
      roleAbilityUsed: new BooleanField({ initial: false }),
      groupCheckResult: new StringField({
        choices: ['', 'pending', 'criticalSuccess', 'success', 'failure', 'criticalFailure'],
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
        choices: ['', 'criticalSuccess', 'success', 'failure', 'criticalFailure'],
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
      // Research prompt for Old Memories encounters
      researchPrompt: new StringField({ blank: true, nullable: true }),
      // Encounter prompt for Monster Hunt / Deadly Fight encounters
      encounterPrompt: new StringField({ blank: true, nullable: true }),
      // Dungeon prompt for LAIR / DUNGEON encounters
      dungeonPrompt: new StringField({ blank: true, nullable: true }),
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
 * Data model for a journey marker on the map
 */
class JourneyMarkerSchema extends SchemaField {
  constructor(options = {}) {
    super({
      id: new StringField({ required: true }),
      markerType: new StringField({
        choices: ['yellow', 'red', 'green'],
        required: true
      }),
      locationName: new StringField({ required: true }),
      status: new StringField({
        choices: ['hidden', 'available', 'resolved'],
        initial: 'hidden'
      }),
      drawingId: new StringField({ blank: true, nullable: true })  // Foundry Drawing ID
    }, options);
  }
}

/**
 * Data model for a biome node (manually placed encounter location)
 *
 * Fog of War System:
 * - Nodes start hidden (revealed: false) with gray color
 * - GM can reveal true color OR set a deceptive color/name (Täuschung)
 * - If displayedType/displayedName are set, those override the true values for players
 */
class BiomeNodeSchema extends SchemaField {
  constructor(options = {}) {
    super({
      id: new StringField({ required: true }),
      biomeId: new StringField({ required: true }),
      name: new StringField({ initial: '' }),
      type: new StringField({
        choices: ['green', 'yellow', 'red'],
        required: true
      }),
      resolved: new BooleanField({ initial: false }),
      encounterId: new StringField({ blank: true, nullable: true }),  // Reference to rolled encounter
      drawingId: new StringField({ blank: true, nullable: true }),  // Optional Foundry Drawing ID
      prerolledEncounterType: new StringField({ blank: true, nullable: true }),  // Pre-rolled encounter type (for Seer)
      cachedEncounter: new ObjectField({ nullable: true }),  // Cached generated encounter data

      // Fog of War fields
      revealed: new BooleanField({ initial: false }),  // Is the node revealed to players?
      displayedType: new StringField({                  // Deceptive color (Täuschungsfarbe)
        choices: ['green', 'yellow', 'red'],
        blank: true,
        nullable: true
      }),
      displayedName: new StringField({ blank: true, nullable: true })  // Deceptive name (Täuschungsname)
    }, options);
  }
}

/**
 * Data model for a location within a node
 */
class NodeLocationSchema extends SchemaField {
  constructor(options = {}) {
    super({
      id: new StringField({ required: true }),
      name: new StringField({ required: true }),
      type: new StringField({
        choices: ['green', 'yellow', 'red', 'treasure'],
        required: true
      })
    }, options);
  }
}

/**
 * Data model for a route map node (Graph-based structure)
 *
 * The route map is now a DAG (Directed Acyclic Graph) where:
 * - Nodes are organized by depth (vertical) and pathIndex (horizontal)
 * - Each node has a parentId and childIds for traversal
 * - Branches can span multiple depths before converging
 * - Red nodes are SHORTCUTS at fractional depths (0.5, 1.5, etc.) that skip rows
 */
class RouteNodeSchema extends SchemaField {
  constructor(options = {}) {
    super({
      // Identification
      id: new StringField({ required: true }),

      // Graph position
      // NOTE: depth can be fractional for shortcut nodes (e.g., 0.5, 1.5)
      depth: new NumberField({ initial: 0 }),                      // Vertical position (0 = start, 0.5 = shortcut between 0 and 1)
      pathIndex: new NumberField({ integer: true, initial: 0 }),   // Horizontal position (0 = leftmost)

      // Biome & Location
      biome: new StringField({ required: true }),
      location: new NodeLocationSchema(),

      // Graph connections
      parentIds: new ArrayField(new StringField()),                // Predecessor node IDs (can have multiple for convergence)
      childIds: new ArrayField(new StringField()),                 // Successor node IDs (multiple = branch point)
      convergesTo: new StringField({ blank: true, nullable: true }), // Where this path eventually converges

      // Encounter data
      encounterType: new StringField({ blank: true, nullable: true }),
      prerolledType: new StringField({ blank: true, nullable: true }), // From sentry scout
      encounter: new ObjectField({ nullable: true }),

      // Node state
      status: new StringField({
        choices: ['pending', 'available', 'active', 'resolved', 'skipped'],
        initial: 'pending'
      }),

      // Special properties
      canRest: new BooleanField({ initial: false }),
      isTreasure: new BooleanField({ initial: false }),
      isStart: new BooleanField({ initial: false }),
      isGoal: new BooleanField({ initial: false }),

      // Shortcut properties (for red nodes that skip rows)
      isShortcut: new BooleanField({ initial: false }),            // True for red shortcut nodes
      skipFrom: new NumberField({ integer: true, nullable: true }), // Source row this shortcut skips from
      skipTo: new NumberField({ integer: true, nullable: true }),    // Target row this shortcut skips to

      // === PF2E FOG OF WAR / FAKE-FARBEN SYSTEM ===
      // Nodes start hidden (gray), can be revealed through preparations/abilities
      revealed: new BooleanField({ initial: false }),              // Is the color visible to players?
      displayedColor: new StringField({                            // What color players SEE (can be fake!)
        choices: ['', 'green', 'yellow', 'red', 'gray'],
        initial: 'gray',                                           // Gray = hidden/unknown
        blank: true
      }),
      actualColor: new StringField({                               // The TRUE color (set at creation)
        choices: ['', 'green', 'yellow', 'red'],
        initial: '',
        blank: true
      }),
      hasFakeColor: new BooleanField({ initial: false }),          // True if displayedColor ≠ actualColor
      revealedEncounterType: new BooleanField({ initial: false })  // Is encounter type known to players?
    }, options);
  }
}

/**
 * Data model for biome route configuration
 * Now uses a simple array of biome IDs for the sequence
 */
class BiomeRouteSchema extends SchemaField {
  constructor(options = {}) {
    super({
      // Sequence of biomes the journey passes through
      biomes: new ArrayField(new StringField(), { initial: [] }),  // No default biome
      // Whether a treasure node should be placed (hidden side path)
      hasTreasure: new BooleanField({ initial: false }),
      treasurePlaced: new BooleanField({ initial: false })
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

      // Route Map System (Graph-based)
      biomeRoute: new BiomeRouteSchema(),
      routeMap: new ArrayField(new RouteNodeSchema()),
      currentNodeId: new StringField({ blank: true, nullable: true }),  // Current node ID (not index!)
      sentryScoutUsed: new BooleanField({ initial: false }),

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

      // Journey Markers (Map-based system)
      journeyMarkers: new ArrayField(new JourneyMarkerSchema()),

      // Biome Nodes (manually placed encounter locations per biome)
      biomeNodes: new ArrayField(new BiomeNodeSchema()),

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
      })),

      // === PF2E REDESIGN: NEW TRACKING FIELDS ===

      // Encounter Rerolls (from Consult the Occult preparation)
      playerEncounterRerolls: new NumberField({ integer: true, initial: 0 }),  // Rerolls players can use
      gmEncounterRerolls: new NumberField({ integer: true, initial: 0 }),      // Rerolls GM can use

      // Node Skip (from Procure Mounts preparation)
      nodeSkipsAvailable: new NumberField({ integer: true, initial: 0 }),      // How many nodes can be skipped

      // Encounter Count Modifiers (from Prepare the Party)
      encounterCountModifier: new NumberField({ integer: true, initial: 0 }),  // +/- encounters

      // DC Modifiers from preparations (replaces old difficultyModifiers structure)
      // Now tracks individual prep results
      preparationDCModifiers: new ArrayField(new SchemaField({
        source: new StringField(),      // Preparation ID
        actorId: new StringField(),     // Who made the check
        value: new NumberField(),       // DC modifier amount
        description: new StringField()  // What caused it
      })),

      // Journey Effects (Foundry effects to apply to actors)
      journeyEffects: new ArrayField(new SchemaField({
        prepId: new StringField(),      // Which preparation created this
        actorId: new StringField(),     // Which actor (or 'all')
        rules: new ArrayField(new ObjectField()),  // PF2E rule elements
        label: new StringField()
      })),

      // Role Ability Tracking (per-ally and per-player limits)
      roleTracking: new ObjectField({ initial: () => getInitialRoleTrackingState() }),

      // Special flags from preparations
      ignoreFirstExhaustion: new BooleanField({ initial: false }),  // From Prepare a Feast
      noRestBeforeJourney: new BooleanField({ initial: false })     // From critical fail on Carouse
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
    // Base count +1 for route variety
    let count = this.baseEncounterCount + 1;

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

  /**
   * Get the current route map node by ID
   * @returns {Object|null} Current node or null
   */
  get currentNode() {
    if (!this.currentNodeId) {
      // Find start node if no current node set
      return this.routeMap.find(n => n.isStart) ?? this.routeMap[0] ?? null;
    }
    return this.routeMap.find(n => n.id === this.currentNodeId) ?? null;
  }

  /**
   * Check if route map has been generated
   * @returns {boolean}
   */
  get hasRouteMap() {
    return this.routeMap && this.routeMap.length > 0;
  }

  /**
   * Get resolved node count in route map
   * @returns {number}
   */
  get resolvedNodeCount() {
    return this.routeMap.filter(n => n.status === 'resolved').length;
  }

  /**
   * Get available next nodes (children of current node)
   * @returns {Array} Array of available child nodes
   */
  get availableNextNodes() {
    const current = this.currentNode;
    if (!current || !current.childIds || current.childIds.length === 0) return [];

    return current.childIds
      .map(id => this.routeMap.find(n => n.id === id))
      .filter(n => n && n.status !== 'resolved' && n.status !== 'skipped');
  }

  /**
   * Check if current node is a branch point (has multiple children)
   * @returns {boolean}
   */
  get isAtBranchChoice() {
    const current = this.currentNode;
    return current && current.childIds && current.childIds.length > 1;
  }

  /**
   * Get journey DC for skill checks
   * @returns {number}
   */
  get journeyDC() {
    return this.difficulty;
  }

  /**
   * Check if all nodes in the route map are resolved (or the goal is reached)
   * @returns {boolean}
   */
  get allNodesResolved() {
    const goalNode = this.routeMap.find(n => n.isGoal);
    return goalNode && goalNode.status === 'resolved';
  }

  /**
   * Get node by ID
   * @param {string} nodeId - Node ID
   * @returns {Object|null} Node or null
   */
  getNodeById(nodeId) {
    return this.routeMap.find(n => n.id === nodeId) ?? null;
  }

  /**
   * Get all nodes at a specific depth
   * @param {number} depth - Depth level
   * @returns {Array} Nodes at that depth
   */
  getNodesAtDepth(depth) {
    return this.routeMap.filter(n => n.depth === depth);
  }

  /**
   * Get the maximum depth in the route map
   * @returns {number}
   */
  get maxDepth() {
    return Math.max(...this.routeMap.map(n => n.depth), 0);
  }

  /**
   * Get the maximum path index at any depth
   * @returns {number}
   */
  get maxPathIndex() {
    return Math.max(...this.routeMap.map(n => n.pathIndex), 0);
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
   * Default role assignments for known party members
   * Maps actor name patterns to roles
   */
  static DEFAULT_ROLE_ASSIGNMENTS = {
    'leader': ['Ignatius', 'Knisterbart'],
    'quartermaster': ['Dante', 'Silberzunge'],
    'sentry': ['Finn'],
    'outrider': ['Snaf', 'Bernard']
  };

  /**
   * Auto-assign known party members to roles based on actor names
   * @returns {Promise<void>}
   */
  static async autoAssignDefaultRoles() {
    const session = this.getCurrent();
    if (!session) return;

    const actors = game.actors.filter(a => a.type === 'character' && a.hasPlayerOwner);
    const newMembers = [];

    for (const [role, namePatterns] of Object.entries(this.DEFAULT_ROLE_ASSIGNMENTS)) {
      // Find an actor matching any of the name patterns
      const matchingActor = actors.find(actor =>
        namePatterns.some(pattern =>
          actor.name.toLowerCase().includes(pattern.toLowerCase())
        )
      );

      if (matchingActor) {
        newMembers.push({
          actorId: matchingActor.id,
          role,
          isPrimary: true,
          preparationId: '',
          preparationResult: 'pending',
          roleAbilityUsed: false,
          groupCheckResult: 'pending'
        });
      }
    }

    if (newMembers.length > 0) {
      session.updateSource({ partyMembers: newMembers });
      await this.save(session);
    }
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

  /**
   * Generate an organic branching route map
   *
   * STRUCTURE:
   * - 3 main columns (0, 1, 2) for main path
   * - Column 3 reserved for treasure only
   * - Main path is yellow/green nodes only (row by row)
   * - Red nodes are SHORTCUTS that skip rows
   *
   * NEW RULES (FINAL):
   * 1. RED nodes SKIP a row - they connect from row N to row N+2
   * 2. RED nodes are ALWAYS optional - parent always has yellow/green alternative at row N+1
   * 3. RED path = fewer total encounters (faster but dangerous)
   * 4. Main path = yellow/green nodes (row by row)
   * 5. Treasure node always in column 3
   *
   * @param {Array} biomeSequence - Array of biome IDs
   * @param {number} baseNodeCount - Target number of nodes on main path
   * @param {string} distance - Journey distance (short/medium/long)
   * @returns {Array} Generated route map nodes
   */
  static generateBranchingRoute(biomeSequence, baseNodeCount, distance = 'medium') {
    const nodes = [];
    let nodeIdCounter = 0;
    const nextId = () => `node-${nodeIdCounter++}`;

    // Config based on distance
    // Rows are for main path (yellow/green), red shortcuts are added separately
    const config = {
      short: { rows: 5, yellow: 4, red: 2, green: 2 },
      medium: { rows: 7, yellow: 6, red: 3, green: 3 },
      long: { rows: 9, yellow: 8, red: 4, green: 4 }
    };
    const { rows: totalRows, yellow: targetYellow, red: targetRed, green: targetGreen } = config[distance];

    // Track color counts (for yellow/green on main path)
    let colorCounts = { yellow: 0, red: 0, green: 0 };

    // Get next yellow or green color (NO RED in main path!)
    const getNextYellowOrGreen = (parentColor) => {
      const remaining = {
        yellow: targetYellow - colorCounts.yellow,
        green: targetGreen - colorCounts.green
      };

      let pool = [];
      if (parentColor === 'green') {
        // After green, favor yellow
        if (remaining.yellow > 0) pool.push('yellow', 'yellow', 'yellow');
        if (remaining.green > 0) pool.push('green');
      } else {
        // After yellow, slightly favor yellow but allow green
        if (remaining.yellow > 0) pool.push('yellow', 'yellow');
        if (remaining.green > 0) pool.push('green');
      }
      if (pool.length === 0) pool = ['yellow'];
      return this.#pickRandom(pool);
    };

    // Start node - always center column
    const startNode = {
      id: nextId(),
      depth: 0,
      pathIndex: 1,
      biome: biomeSequence[0],
      location: { id: 'start', name: 'Aufbruch', type: 'green' },
      parentIds: [],
      childIds: [],
      convergesTo: null,
      encounterType: null,
      prerolledType: null,
      encounter: null,
      status: 'active',
      canRest: false,
      isTreasure: false,
      isStart: true,
      isGoal: false,
      isShortcut: false
    };
    nodes.push(startNode);

    // === BUILD MAIN PATH (yellow/green only) row by row ===
    const nodesByRow = [[startNode]];

    for (let row = 1; row < totalRows; row++) {
      const prevRowNodes = nodesByRow[row - 1] || [];
      const rowNodes = [];

      // Calculate biome for this row
      const biomeIdx = Math.min(
        Math.floor(row * biomeSequence.length / totalRows),
        biomeSequence.length - 1
      );
      const biomeId = biomeSequence[biomeIdx];

      // Decide how many nodes in this row (1 or 2)
      const prevCount = prevRowNodes.length;
      const nodeCount = prevCount === 1 ?
        (Math.random() < 0.55 ? 2 : 1) :
        (Math.random() < 0.45 ? 1 : 2);

      // Determine columns (only 0, 1, 2 - column 3 is for treasure only)
      let columns;
      if (nodeCount === 1) {
        columns = [this.#pickRandom([0, 1, 1, 2])];
      } else {
        columns = this.#pickRandom([[0, 2], [0, 1], [1, 2]]);
      }

      // Colors (yellow/green only for main path)
      let colors = [];
      for (let i = 0; i < nodeCount; i++) {
        const parentColors = prevRowNodes.map(p => p.location?.type || 'yellow');
        const dominantParent = parentColors[0] || 'yellow';

        let color;
        if (nodeCount === 2 && i === 1 && colors[0] === 'green') {
          // If first was green, second should be yellow (variety)
          color = 'yellow';
        } else if (nodeCount === 2 && i === 1 && colors[0] === 'yellow') {
          // If first was yellow, second can be green sometimes
          color = Math.random() < 0.3 ? 'green' : 'yellow';
        } else {
          color = getNextYellowOrGreen(dominantParent);
        }
        colorCounts[color]++;
        colors.push(color);
      }

      // Create nodes for this row
      for (let i = 0; i < columns.length; i++) {
        const col = columns[i];
        const colorType = colors[i];
        const location = getRandomLocation(biomeId, colorType);
        const biomeData = BIOME_LOCATIONS[biomeId];

        const newNode = {
          id: nextId(),
          depth: row,
          pathIndex: col,
          biome: biomeId,
          location: location || {
            id: `${biomeId}-${colorType}-${row}`,
            name: `${biomeData?.name || biomeId}`,
            type: colorType
          },
          parentIds: [],
          childIds: [],
          convergesTo: null,
          encounterType: null,
          prerolledType: null,
          encounter: null,
          status: row === 1 ? 'available' : 'pending',
          canRest: colorType === 'green' && Math.random() < 0.4,
          isTreasure: false,
          isStart: false,
          isGoal: false,
          isShortcut: false
        };

        nodes.push(newNode);
        rowNodes.push(newNode);
      }

      // Connect parents to children
      for (const parent of prevRowNodes) {
        const connectableChildren = rowNodes.filter(child =>
          Math.abs(parent.pathIndex - child.pathIndex) <= 1
        );

        if (connectableChildren.length === 0) continue;

        // Connect to 1-2 children
        const connectionCount = Math.min(connectableChildren.length, Math.random() < 0.35 ? 1 : 2);
        const shuffled = [...connectableChildren].sort(() => Math.random() - 0.5);

        for (let i = 0; i < connectionCount; i++) {
          const child = shuffled[i];
          if (!parent.childIds.includes(child.id)) {
            parent.childIds.push(child.id);
            child.parentIds.push(parent.id);
          }
        }
      }

      // Ensure every child has at least one parent
      for (const child of rowNodes) {
        if (child.parentIds.length === 0) {
          const closest = prevRowNodes.reduce((best, p) => {
            const dist = Math.abs(p.pathIndex - child.pathIndex);
            if (!best || dist < Math.abs(best.pathIndex - child.pathIndex)) return p;
            return best;
          }, null);

          if (closest) {
            closest.childIds.push(child.id);
            child.parentIds.push(closest.id);
          }
        }
      }

      nodesByRow.push(rowNodes);
    }

    // Goal node
    const goalNode = {
      id: nextId(),
      depth: totalRows,
      pathIndex: 1,
      biome: biomeSequence[biomeSequence.length - 1],
      location: { id: 'destination', name: 'Ziel', type: 'green' },
      parentIds: [],
      childIds: [],
      convergesTo: null,
      encounterType: null,
      prerolledType: null,
      encounter: null,
      status: 'pending',
      canRest: true,
      isTreasure: false,
      isStart: false,
      isGoal: true,
      isShortcut: false
    };
    nodes.push(goalNode);

    // Connect last row to goal
    const lastRowNodes = nodesByRow[nodesByRow.length - 1] || [];
    for (const node of lastRowNodes) {
      node.childIds.push(goalNode.id);
      goalNode.parentIds.push(node.id);
    }

    // === ADD RED SHORTCUTS ===
    // Red = skip connection from row N directly to row N+2
    // Parent MUST have yellow/green child at row N+1 (the safe alternative)
    let redsPlaced = 0;

    for (let sourceRow = 0; sourceRow < totalRows - 2 && redsPlaced < targetRed; sourceRow++) {
      const sourceNodes = nodesByRow[sourceRow];
      const skipTargetRow = sourceRow + 2;
      const skipTargetNodes = nodesByRow[skipTargetRow];

      if (!skipTargetNodes || skipTargetNodes.length === 0) continue;

      for (const parent of sourceNodes) {
        if (redsPlaced >= targetRed) break;

        // Parent must have at least one child at row+1 (safe path)
        const hasNormalChild = parent.childIds.some(cid => {
          const child = nodes.find(n => n.id === cid);
          return child && child.depth === sourceRow + 1;
        });

        if (!hasNormalChild) continue;
        if (Math.random() > 0.6) continue; // Not every node gets a red option

        // Find target at row+2 that's connectable
        const connectableTargets = skipTargetNodes.filter(target =>
          Math.abs(parent.pathIndex - target.pathIndex) <= 1
        );

        if (connectableTargets.length === 0) continue;

        const target = this.#pickRandom(connectableTargets);

        // Calculate biome for the red node
        const biomeIdx = Math.min(
          Math.floor((sourceRow + 1) * biomeSequence.length / totalRows),
          biomeSequence.length - 1
        );
        const biomeId = biomeSequence[biomeIdx];
        const location = getRandomLocation(biomeId, 'red');
        const biomeData = BIOME_LOCATIONS[biomeId];

        // Create red node - it's a "floating" shortcut between rows
        // Place it at row+0.5 (fractional) and column based on parent/target
        const redNode = {
          id: nextId(),
          depth: sourceRow + 0.5, // Between rows! (fractional)
          pathIndex: Math.round((parent.pathIndex + target.pathIndex) / 2),
          biome: biomeId,
          location: location || {
            id: `shortcut-${sourceRow}`,
            name: 'Abkürzung',
            type: 'red'
          },
          parentIds: [parent.id],
          childIds: [target.id],
          convergesTo: target.id,
          encounterType: null,
          prerolledType: null,
          encounter: null,
          status: 'pending',
          canRest: false,
          isTreasure: false,
          isStart: false,
          isGoal: false,
          isShortcut: true,
          skipFrom: sourceRow,
          skipTo: skipTargetRow
        };

        parent.childIds.push(redNode.id);
        target.parentIds.push(redNode.id);

        nodes.push(redNode);
        colorCounts.red++;
        redsPlaced++;
      }
    }

    // Orphan check - ensure all nodes lead somewhere
    for (const node of nodes) {
      if (node.childIds.length === 0 && node.id !== goalNode.id && !node.location?.name?.includes('TREASURE')) {
        const nextRow = Math.ceil(node.depth) + 1;
        const nextRowNodes = nodesByRow[nextRow] || [];
        if (nextRowNodes.length > 0) {
          const target = this.#pickRandom(nextRowNodes);
          node.childIds.push(target.id);
          target.parentIds.push(node.id);
        } else {
          node.childIds.push(goalNode.id);
          goalNode.parentIds.push(node.id);
        }
      }
    }

    // Optionally add treasure node (always in column 3)
    const treasureChance = distance === 'short' ? 0.6 : distance === 'medium' ? 0.8 : 1.0;
    if (Math.random() < treasureChance) {
      this.#addTreasureNode(nodes, nodesByRow, biomeSequence, nextId, totalRows, goalNode);
    }

    return nodes;
  }

  /**
   * Normalize pathIndex values to consecutive integers for CSS grid
   * @param {Array} nodes - Array of nodes to normalize
   */
  static #normalizePathIndices(nodes) {
    // Get all unique pathIndex values
    const pathIndices = [...new Set(nodes.map(n => n.pathIndex))].sort((a, b) => a - b);

    // Create mapping to consecutive integers
    const indexMap = new Map();
    pathIndices.forEach((val, idx) => indexMap.set(val, idx));

    // Apply mapping
    for (const node of nodes) {
      node.pathIndex = indexMap.get(node.pathIndex);
    }
  }

  /**
   * Add a hidden treasure node as a side path in COLUMN 3
   * Treasure nodes branch off from yellow nodes in the middle of the journey
   * and reconnect to a later node on the main path
   *
   * @param {Array} nodes - Existing node array to modify
   * @param {Array} nodesByRow - Nodes organized by row
   * @param {Array} biomeSequence - Biome sequence for picking treasure biome
   * @param {Function} nextId - ID generator function
   * @param {number} totalRows - Total number of rows
   * @param {Object} goalNode - The goal node
   */
  static #addTreasureNode(nodes, nodesByRow, biomeSequence, nextId, totalRows, goalNode) {
    // Find suitable branch points (yellow nodes in the middle rows, not at edges)
    const middleRows = nodes.filter(n =>
      n.location?.type === 'yellow' &&
      !n.isStart &&
      !n.isGoal &&
      n.depth >= 2 &&
      n.depth <= totalRows - 2 &&
      n.pathIndex <= 2 // Must be in columns 0-2 to branch to column 3
    );

    if (middleRows.length === 0) return;

    // Pick a random yellow node to branch from
    const branchFrom = this.#pickRandom(middleRows);
    const biomeId = branchFrom.biome;
    const biomeData = BIOME_LOCATIONS[biomeId];

    if (!biomeData?.treasure || biomeData.treasure.length === 0) return;

    // Create treasure node - ALWAYS in column 3
    const treasureLocation = this.#pickRandom(biomeData.treasure);
    const treasureNode = {
      id: nextId(),
      depth: branchFrom.depth + 1,
      pathIndex: 3, // ALWAYS column 3 (separate from main path)
      biome: biomeId,
      location: {
        id: treasureLocation.id,
        name: treasureLocation.name,
        type: 'treasure'
      },
      parentIds: [branchFrom.id],
      childIds: [],
      convergesTo: null,
      encounterType: null,
      prerolledType: null,
      encounter: null,
      status: 'pending',
      canRest: false,
      isTreasure: true,
      isStart: false,
      isGoal: false
    };

    // Add treasure as a branch from the yellow node
    branchFrom.childIds.push(treasureNode.id);
    nodes.push(treasureNode);

    // Treasure connects back to a node in a later row
    const laterNodes = nodes.filter(n =>
      n.depth > treasureNode.depth &&
      n.depth <= treasureNode.depth + 2 &&
      !n.isGoal &&
      n.pathIndex <= 2 // Must be on main path
    );

    if (laterNodes.length > 0) {
      const reconnect = this.#pickRandom(laterNodes);
      treasureNode.childIds.push(reconnect.id);
      treasureNode.convergesTo = reconnect.id;
      reconnect.parentIds.push(treasureNode.id);
    } else {
      // If no suitable later node, connect to goal
      treasureNode.childIds.push(goalNode.id);
      treasureNode.convergesTo = goalNode.id;
      goalNode.parentIds.push(treasureNode.id);
    }
  }

  /**
   * Pick a random element from an array
   * @param {Array} arr - Array to pick from
   * @returns {*} Random element
   */
  static #pickRandom(arr) {
    if (!arr || arr.length === 0) return null;
    return arr[Math.floor(Math.random() * arr.length)];
  }

  /**
   * Get color weights for path generation based on position
   * Left paths tend red, middle yellow, right green
   *
   * @param {number} pathIndex - Path position (0 = leftmost)
   * @param {number} totalPaths - Total number of paths
   * @returns {Object} Weight object {red, yellow, green}
   */
  static #getColorWeights(pathIndex, totalPaths) {
    if (totalPaths <= 1) return { red: 0.2, yellow: 0.5, green: 0.3 };

    const position = pathIndex / (totalPaths - 1); // 0 to 1

    if (position < 0.33) {
      return { red: 0.6, yellow: 0.3, green: 0.1 };
    } else if (position < 0.66) {
      return { red: 0.2, yellow: 0.6, green: 0.2 };
    } else {
      return { red: 0.1, yellow: 0.3, green: 0.6 };
    }
  }

  /**
   * Generate route map using the old linear format (for backward compatibility)
   * @deprecated Use generateBranchingRoute instead
   */
  static generateRouteMap(biomeRoute, encounterCount) {
    // Convert old biomeRoute format to new format
    const biomes = biomeRoute.biomes || [biomeRoute.start, biomeRoute.middle, biomeRoute.end].filter(Boolean);
    return this.generateBranchingRoute(biomes, encounterCount, 'medium');
  }

  /**
   * Initialize the route map for the journey
   */
  static async initializeRouteMap() {
    const session = this.getCurrent();
    if (!session) return;

    const biomes = session.biomeRoute.biomes || ['grassland'];
    const routeMap = this.generateBranchingRoute(biomes, session.totalEncounterCount, session.distance);

    // Find the start node
    const startNode = routeMap.find(n => n.isStart);

    // Mark start node's children as available from the beginning
    // (Start node has no encounter, so children should be immediately accessible)
    if (startNode && startNode.childIds) {
      for (const childId of startNode.childIds) {
        const childNode = routeMap.find(n => n.id === childId);
        if (childNode && childNode.status === 'pending') {
          childNode.status = 'available';
        }
      }
    }

    session.updateSource({
      routeMap,
      currentNodeId: startNode?.id || routeMap[0]?.id || null,
      sentryScoutUsed: false
    });
    await this.save(session);
  }

  /**
   * Update the biome route configuration
   * @param {Array} biomes - Array of biome IDs
   */
  static async setBiomeRoute(biomes) {
    const session = this.getCurrent();
    if (!session) return;

    session.updateSource({
      biomeRoute: {
        biomes: biomes,
        hasTreasure: false,
        treasurePlaced: false
      }
    });
    await this.save(session);
  }

  /**
   * Enter a node on the route map by ID (rolls encounter type if not known)
   * @param {string} nodeId - ID of the node to enter
   */
  static async enterNode(nodeId) {
    const session = this.getCurrent();
    if (!session) return;

    const routeMap = session.routeMap.map(n => ({ ...n }));
    const nodeIndex = routeMap.findIndex(n => n.id === nodeId);
    if (nodeIndex === -1) return;

    const node = routeMap[nodeIndex];

    // Roll encounter type if not already known
    if (!node.encounterType && !node.isStart) {
      const locationType = node.location?.type || 'yellow';
      const pool = LOCATION_ENCOUNTER_POOLS[locationType];

      if (pool && pool.length > 0) {
        // Use prerolledType from scout if available, otherwise roll randomly
        node.encounterType = node.prerolledType || pool[Math.floor(Math.random() * pool.length)];
      }
    }

    // Update node status
    node.status = 'active';

    // Mark parent nodes as resolved, other children of parents as skipped
    const currentNode = session.currentNode;
    if (currentNode) {
      const currentIdx = routeMap.findIndex(n => n.id === currentNode.id);
      if (currentIdx !== -1) {
        routeMap[currentIdx].status = 'resolved';
      }

      // If there were alternative paths (siblings), mark them as skipped
      for (const siblingId of currentNode.childIds) {
        if (siblingId !== nodeId) {
          const siblingIdx = routeMap.findIndex(n => n.id === siblingId);
          if (siblingIdx !== -1 && routeMap[siblingIdx].status === 'pending') {
            // Only skip if this was an alternative at the same branch point
            // Don't skip nodes that might be reachable via other paths
            const sibling = routeMap[siblingIdx];
            const hasOtherParent = sibling.parentIds.some(pid =>
              pid !== currentNode.id && routeMap.find(n => n.id === pid)?.status !== 'resolved'
            );
            if (!hasOtherParent) {
              routeMap[siblingIdx].status = 'skipped';
            }
          }
        }
      }
    }

    // Mark child nodes as available
    for (const childId of node.childIds) {
      const childIdx = routeMap.findIndex(n => n.id === childId);
      if (childIdx !== -1 && routeMap[childIdx].status === 'pending') {
        routeMap[childIdx].status = 'available';
      }
    }

    session.updateSource({
      routeMap,
      currentNodeId: nodeId
    });
    await this.save(session);
  }

  /**
   * Mark sentry scout as used and optionally set prerolled type
   * @param {string} nodeId - Node ID being scouted
   * @param {string} prerolledType - The encounter type that was pre-rolled
   * @param {string} revealedType - The type shown to players (may be false info on failed check!)
   */
  static async setSentryScoutResult(nodeId, prerolledType, revealedType) {
    const session = this.getCurrent();
    if (!session) return;

    const routeMap = session.routeMap.map(n => ({ ...n }));
    const nodeIndex = routeMap.findIndex(n => n.id === nodeId);
    if (nodeIndex === -1) return;

    routeMap[nodeIndex].prerolledType = prerolledType;
    // revealedType is what the player sees - might be wrong if scout failed!

    session.updateSource({
      routeMap,
      sentryScoutUsed: true
    });
    await this.save(session);
  }

  /**
   * Select and enter a child node (used for branch choices)
   * @param {string} childNodeId - ID of the child node to enter
   */
  static async selectChildNode(childNodeId) {
    const session = this.getCurrent();
    if (!session) return;

    const currentNode = session.currentNode;
    if (!currentNode) return;

    // Verify this is a valid child
    if (!currentNode.childIds.includes(childNodeId)) {
      console.warn(`Node ${childNodeId} is not a child of current node ${currentNode.id}`);
      return;
    }

    await this.enterNode(childNodeId);
  }

  /**
   * Roll a specific encounter for a node based on its encounter type
   * @param {string} nodeId - ID of the node
   * @param {Object} encounterData - Full encounter data object
   */
  static async setNodeEncounter(nodeId, encounterData) {
    const session = this.getCurrent();
    if (!session) return;

    const routeMap = session.routeMap.map(n => ({ ...n }));
    const nodeIndex = routeMap.findIndex(n => n.id === nodeId);
    if (nodeIndex === -1) return;

    routeMap[nodeIndex].encounter = encounterData;

    session.updateSource({ routeMap });
    await this.save(session);
  }

  /**
   * Resolve a node (mark it as completed) and make children available
   * @param {string} nodeId - ID of the node to resolve
   */
  static async resolveNode(nodeId) {
    const session = this.getCurrent();
    if (!session) return;

    const routeMap = session.routeMap.map(n => ({ ...n }));
    const nodeIndex = routeMap.findIndex(n => n.id === nodeId);
    if (nodeIndex === -1) return;

    const node = routeMap[nodeIndex];
    node.status = 'resolved';

    // Make child nodes available
    for (const childId of node.childIds) {
      const childIdx = routeMap.findIndex(n => n.id === childId);
      if (childIdx !== -1 && routeMap[childIdx].status === 'pending') {
        routeMap[childIdx].status = 'available';
      }
    }

    session.updateSource({ routeMap });
    await this.save(session);
  }

  /**
   * Get all available nodes that can be entered next
   * @returns {Array} Array of available node objects
   */
  static getAvailableNodes() {
    const session = this.getCurrent();
    if (!session) return [];

    return session.routeMap.filter(n => n.status === 'available');
  }

  /**
   * Check if a specific node can be entered
   * @param {string} nodeId - Node ID to check
   * @returns {boolean}
   */
  static canEnterNode(nodeId) {
    const session = this.getCurrent();
    if (!session) return false;

    const node = session.routeMap.find(n => n.id === nodeId);
    return node && (node.status === 'available' || node.status === 'active');
  }

  /**
   * Get graph visualization data for the route map
   * Returns data needed to render the SVG connections
   * @returns {Object} { nodes, connections, maxDepth, maxPaths }
   */
  static getGraphVisualizationData() {
    const session = this.getCurrent();
    if (!session || !session.routeMap) return { nodes: [], connections: [], maxDepth: 0, maxPaths: 0 };

    const nodes = session.routeMap;
    const connections = [];

    // Generate connections from parent-child relationships
    for (const node of nodes) {
      for (const childId of node.childIds) {
        const child = nodes.find(n => n.id === childId);
        if (child) {
          connections.push({
            fromId: node.id,
            toId: child.id,
            fromDepth: node.depth,
            fromPath: node.pathIndex,
            toDepth: child.depth,
            toPath: child.pathIndex,
            type: node.status === 'resolved' && child.status !== 'skipped' ? 'chosen' :
                  child.status === 'skipped' ? 'skipped' : 'pending'
          });
        }
      }
    }

    const maxDepth = Math.max(...nodes.map(n => n.depth), 0);
    const maxPaths = Math.max(...nodes.map(n => n.pathIndex), 0) + 1;

    return { nodes, connections, maxDepth, maxPaths };
  }

  // ============================================
  // JOURNEY MARKER FUNCTIONS
  // ============================================

  /**
   * Marker colors for Drawing creation
   */
  static MARKER_COLORS = {
    yellow: { fill: '#FFD700', stroke: '#B8860B' },  // Gold
    red:    { fill: '#DC143C', stroke: '#8B0000' },  // Crimson
    green:  { fill: '#228B22', stroke: '#006400' },  // Forest Green
    hidden: { fill: '#808080', stroke: '#404040' }   // Gray
  };

  /**
   * Calculate marker counts based on encounter count (shortest path)
   * Yellow = shortest path markers, Red = dangerous shortcuts, Green = safe spots
   * @param {number} encounterCount - Total encounter count for the journey
   * @returns {Object} { yellow, red, green }
   */
  static getMarkerCounts(encounterCount) {
    switch (encounterCount) {
      case 2: return { yellow: 2, red: 1, green: 1 };  // 4 total
      case 3: return { yellow: 3, red: 2, green: 2 };  // 7 total
      case 4: return { yellow: 4, red: 2, green: 2 };  // 8 total
      case 5: return { yellow: 5, red: 3, green: 2 };  // 10 total
      case 6: return { yellow: 6, red: 3, green: 3 };  // 12 total
      default:
        // For 7+ encounters, scale up from 6
        if (encounterCount >= 7) {
          const extra = encounterCount - 6;
          return {
            yellow: 6 + extra,
            red: 3 + Math.floor(extra / 2),
            green: 3 + Math.ceil(extra / 2)
          };
        }
        // For 1 or less, use minimum
        return { yellow: 2, red: 1, green: 1 };
    }
  }

  /**
   * Generate journey markers based on encounter count
   * The encounter count determines the shortest path (yellow markers)
   * Red = dangerous shortcuts, Green = safe rest spots
   * @returns {Array} Array of marker objects
   */
  static async generateJourneyMarkers() {
    const session = this.getCurrent();
    if (!session) return [];

    // Import the location getter
    const { getRandomLocation } = await import('./data/biome-locations.js');

    // Use encounter count to determine marker counts
    const encounterCount = session.totalEncounterCount;
    const counts = this.getMarkerCounts(encounterCount);
    const markers = [];

    // Get biome from session or default to grassland
    const biomeId = session.biomeRoute?.biomes?.[0] || 'grassland';

    // Generate markers for each type
    const types = [
      { type: 'yellow', count: counts.yellow },
      { type: 'red', count: counts.red },
      { type: 'green', count: counts.green }
    ];

    for (const { type, count } of types) {
      for (let i = 0; i < count; i++) {
        // Get a random location name from the biome
        const location = getRandomLocation(biomeId, type);
        const locationName = location?.name || `${type.charAt(0).toUpperCase() + type.slice(1)} Marker ${i + 1}`;

        markers.push({
          id: foundry.utils.randomID(),
          markerType: type,
          locationName,
          status: 'hidden',  // hidden | available | resolved
          drawingId: null    // Will be set when Drawing is created
        });
      }
    }

    // Shuffle markers for variety
    for (let i = markers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [markers[i], markers[j]] = [markers[j], markers[i]];
    }

    return markers;
  }

  /**
   * Create Foundry Drawings on the scene for the markers
   * @param {Array} markers - Array of marker objects from generateJourneyMarkers
   */
  static async createSceneMarkers(markers) {
    const session = this.getCurrent();
    if (!session || !canvas?.scene) return;

    // Get current cursor/canvas position for stacking
    const viewPosition = canvas.stage.pivot;
    const startX = viewPosition.x || 1000;
    const startY = viewPosition.y || 1000;

    // Drawing size - smaller markers
    const markerSize = 40;
    const stackOffset = 15; // Offset for stacking

    const drawingData = [];
    const markersCopy = [...markers];

    for (let i = 0; i < markersCopy.length; i++) {
      const marker = markersCopy[i];
      // GM sees actual color from the start - "?" indicates hidden to players
      const colors = this.MARKER_COLORS[marker.markerType] || this.MARKER_COLORS.yellow;

      drawingData.push({
        x: startX + (i * stackOffset),
        y: startY + (i * stackOffset),
        shape: {
          type: "e",  // Ellipse - Foundry uses single-letter codes: e=ellipse, r=rectangle, p=polygon
          width: markerSize,
          height: markerSize
        },
        fillType: 1,  // Solid fill
        fillColor: colors.fill,
        fillAlpha: 0.8,
        strokeWidth: 3,
        strokeColor: colors.stroke,
        strokeAlpha: 1,
        text: '?',  // "?" = hidden (players don't know what it is), location name = revealed
        fontSize: 18,
        textColor: '#FFFFFF',
        flags: {
          'uncharted-journeys': {
            journeyId: session.id,
            markerId: marker.id,
            markerType: marker.markerType,
            locationName: marker.locationName,
            status: 'hidden'
          }
        }
      });
    }

    // Create all Drawings at once
    const createdDrawings = await canvas.scene.createEmbeddedDocuments('Drawing', drawingData);

    // Update markers with their Drawing IDs
    for (let i = 0; i < markersCopy.length; i++) {
      markersCopy[i].drawingId = createdDrawings[i].id;
    }

    // Save markers to session
    session.updateSource({ journeyMarkers: markersCopy });
    await this.save(session);

    return createdDrawings;
  }

  /**
   * Reveal a marker - changes from gray to its actual color
   * @param {string} drawingId - The Foundry Drawing ID
   */
  static async revealMarker(drawingId) {
    const session = this.getCurrent();
    if (!session || !canvas?.scene) return;

    const drawing = canvas.scene.drawings.get(drawingId);
    if (!drawing) {
      console.warn('Drawing not found:', drawingId);
      return;
    }

    const flags = drawing.flags?.['uncharted-journeys'];
    if (!flags) return;

    // Update Drawing - just change text from "?" to location name
    // Colors are already visible to GM, "?" just indicates "not revealed to players yet"
    await drawing.update({
      text: flags.locationName,
      fontSize: 10,  // Smaller font for location names
      'flags.uncharted-journeys.status': 'available'
    });

    // Update session markers
    const markers = session.journeyMarkers.map(m => {
      if (m.drawingId === drawingId) {
        return { ...m, status: 'available' };
      }
      return m;
    });
    session.updateSource({ journeyMarkers: markers });
    await this.save(session);
  }

  /**
   * Resolve/complete a marker
   * @param {string} drawingId - The Foundry Drawing ID
   */
  static async resolveMarker(drawingId) {
    const session = this.getCurrent();
    if (!session || !canvas?.scene) return;

    const drawing = canvas.scene.drawings.get(drawingId);
    if (!drawing) return;

    // Update Drawing appearance - make it faded
    await drawing.update({
      fillAlpha: 0.4,
      strokeAlpha: 0.5,
      'flags.uncharted-journeys.status': 'resolved'
    });

    // Update session markers
    const markers = session.journeyMarkers.map(m => {
      if (m.drawingId === drawingId) {
        return { ...m, status: 'resolved' };
      }
      return m;
    });
    session.updateSource({ journeyMarkers: markers });
    await this.save(session);
  }

  /**
   * Clear all journey markers from the scene and session
   */
  static async clearAllMarkers() {
    const session = this.getCurrent();
    if (!session) return;

    // Delete Drawings from scene
    if (canvas?.scene && session.journeyMarkers?.length > 0) {
      const drawingIds = session.journeyMarkers
        .map(m => m.drawingId)
        .filter(id => id && canvas.scene.drawings.get(id));

      if (drawingIds.length > 0) {
        await canvas.scene.deleteEmbeddedDocuments('Drawing', drawingIds);
      }
    }

    // Clear markers from session
    session.updateSource({ journeyMarkers: [] });
    await this.save(session);
  }

  // ============================================
  // BIOME NODE MANAGEMENT FUNCTIONS
  // ============================================

  /**
   * Add a biome node to the session
   * Auto-generates a name from biome-locations.js and creates a Foundry Drawing
   * @param {string} biomeId - The biome ID
   * @param {string} nodeType - The node type (green/yellow/red)
   * @param {string} name - Optional override name for the node
   * @returns {Object} The created node
   */
  static async addBiomeNode(biomeId, nodeType, name = '') {
    const session = this.getCurrent();
    if (!session) return null;

    // Auto-generate name from biome-locations if not provided
    let nodeName = name;
    if (!nodeName) {
      const location = getRandomLocation(biomeId, nodeType);
      nodeName = location?.name || `${nodeType} Ort`;
    }

    const newNode = {
      id: foundry.utils.randomID(),
      biomeId,
      name: nodeName,
      type: nodeType,
      resolved: false,
      encounterId: null,
      drawingId: null
    };

    // Create Foundry Drawing on the map
    if (canvas?.scene) {
      const drawing = await this.createNodeDrawing(newNode, session.id);
      if (drawing) {
        newNode.drawingId = drawing.id;
      }
    }

    const biomeNodes = [...(session.biomeNodes || []), newNode];
    session.updateSource({ biomeNodes });
    await this.save(session);

    return newNode;
  }

  /**
   * Create a Foundry Drawing for a biome node
   * Uses Fog of War - new nodes start HIDDEN (gray) until revealed by GM
   *
   * @param {Object} node - The node data
   * @param {string} journeyId - The journey session ID
   * @returns {DrawingDocument|null} The created Drawing
   */
  static async createNodeDrawing(node, journeyId) {
    if (!canvas?.scene) return null;

    // Get current view position for placement
    const viewPosition = canvas.stage.pivot;
    const startX = viewPosition.x || 1000;
    const startY = viewPosition.y || 1000;

    const markerSize = 40;

    // Fog of War: Determine color based on revealed state
    // - Not revealed: Always gray (hidden)
    // - Revealed with deception: Use displayedType color
    // - Revealed normally: Use actual type color
    let displayColor;
    if (node.revealed === true) {
      // Use displayed type if deception is active, otherwise use actual type
      const colorType = node.displayedType || node.type;
      displayColor = this.MARKER_COLORS[colorType] || this.MARKER_COLORS.yellow;
    } else {
      // Not revealed - show as hidden (gray)
      displayColor = this.MARKER_COLORS.hidden;
    }

    const drawingData = [{
      x: startX,
      y: startY,
      shape: {
        type: "e",  // Ellipse
        width: markerSize,
        height: markerSize
      },
      fillType: 1,
      fillColor: displayColor.fill,
      fillAlpha: 0.8,
      strokeWidth: 3,
      strokeColor: displayColor.stroke,
      strokeAlpha: 1,
      text: node.revealed ? '' : '?',  // "?" indicates hidden to players
      fontSize: 18,
      textColor: '#FFFFFF',
      flags: {
        'uncharted-journeys': {
          journeyId: journeyId,
          nodeId: node.id,
          nodeType: node.type,  // True type (for GM reference)
          displayedType: node.displayedType || null,  // Fake type if deception active
          locationName: node.name,
          displayedName: node.displayedName || null,  // Fake name if deception active
          status: node.revealed ? 'revealed' : 'hidden',
          hasDeception: !!(node.displayedType || node.displayedName)
        }
      }
    }];

    const createdDrawings = await canvas.scene.createEmbeddedDocuments('Drawing', drawingData);
    return createdDrawings[0] || null;
  }

  /**
   * Remove a biome node from the session
   * Also deletes the associated Drawing from the scene
   * @param {string} nodeId - The node ID to remove
   */
  static async removeBiomeNode(nodeId) {
    const session = this.getCurrent();
    if (!session) return;

    // Find the node to get its drawingId
    const node = (session.biomeNodes || []).find(n => n.id === nodeId);

    // Delete the Drawing from the scene if it exists
    if (node?.drawingId && canvas?.scene) {
      const drawing = canvas.scene.drawings.get(node.drawingId);
      if (drawing) {
        await canvas.scene.deleteEmbeddedDocuments('Drawing', [node.drawingId]);
      }
    }

    const biomeNodes = (session.biomeNodes || []).filter(n => n.id !== nodeId);
    session.updateSource({ biomeNodes });
    await this.save(session);
  }

  /**
   * Rename a biome node
   * Also updates the Drawing's locationName flag
   * @param {string} nodeId - The node ID
   * @param {string} newName - The new name
   */
  static async renameBiomeNode(nodeId, newName) {
    const session = this.getCurrent();
    if (!session) return;

    // Find the node to get its drawingId
    const node = (session.biomeNodes || []).find(n => n.id === nodeId);

    // Update the Drawing's locationName flag if it exists
    if (node?.drawingId && canvas?.scene) {
      const drawing = canvas.scene.drawings.get(node.drawingId);
      if (drawing) {
        await drawing.update({
          'flags.uncharted-journeys.locationName': newName
        });
      }
    }

    const biomeNodes = (session.biomeNodes || []).map(n => {
      if (n.id === nodeId) {
        return { ...n, name: newName };
      }
      return n;
    });
    session.updateSource({ biomeNodes });
    await this.save(session);
  }

  /**
   * Mark a biome node as resolved
   * @param {string} nodeId - The node ID
   * @param {string} encounterId - Optional encounter ID reference
   */
  static async resolveBiomeNode(nodeId, encounterId = null) {
    const session = this.getCurrent();
    if (!session) return;

    const biomeNodes = (session.biomeNodes || []).map(n => {
      if (n.id === nodeId) {
        return { ...n, resolved: true, encounterId: encounterId || n.encounterId };
      }
      return n;
    });
    session.updateSource({ biomeNodes });
    await this.save(session);
  }

  /**
   * Get a biome node by ID
   * @param {string} nodeId - The node ID
   * @returns {Object|null} The node or null
   */
  static getBiomeNode(nodeId) {
    const session = this.getCurrent();
    if (!session) return null;

    return (session.biomeNodes || []).find(n => n.id === nodeId) || null;
  }

  /**
   * Get all biome nodes grouped by biome
   * @returns {Object} Object with biome IDs as keys and arrays of nodes as values
   */
  static getBiomeNodesGrouped() {
    const session = this.getCurrent();
    if (!session) return {};

    const grouped = {};
    for (const node of (session.biomeNodes || [])) {
      if (!grouped[node.biomeId]) {
        grouped[node.biomeId] = [];
      }
      grouped[node.biomeId].push(node);
    }
    return grouped;
  }

  /**
   * Get total biome node count
   * @returns {number}
   */
  static getTotalBiomeNodeCount() {
    const session = this.getCurrent();
    if (!session) return 0;
    return (session.biomeNodes || []).length;
  }

  /**
   * Get resolved biome node count
   * @returns {number}
   */
  static getResolvedBiomeNodeCount() {
    const session = this.getCurrent();
    if (!session) return 0;
    return (session.biomeNodes || []).filter(n => n.resolved).length;
  }

  /**
   * Check if all biome nodes are resolved
   * @returns {boolean}
   */
  static allBiomeNodesResolved() {
    const session = this.getCurrent();
    if (!session) return false;
    const nodes = session.biomeNodes || [];
    return nodes.length > 0 && nodes.every(n => n.resolved);
  }

  // ============================================
  // PF2E REDESIGN: FOG OF WAR / NODE REVEAL
  // ============================================

  /**
   * Reveal a node's true color to players
   * @param {string} nodeId - Node ID to reveal
   * @param {boolean} revealEncounterType - Also reveal encounter type?
   */
  static async revealNodeColor(nodeId, revealEncounterType = false) {
    const session = this.getCurrent();
    if (!session) return;

    const routeMap = session.routeMap.map(n => ({ ...n }));
    const nodeIndex = routeMap.findIndex(n => n.id === nodeId);
    if (nodeIndex === -1) return;

    const node = routeMap[nodeIndex];
    node.revealed = true;
    node.displayedColor = node.actualColor || node.location?.type || 'yellow';
    node.hasFakeColor = false;

    if (revealEncounterType) {
      node.revealedEncounterType = true;
    }

    session.updateSource({ routeMap });
    await this.save(session);
  }

  /**
   * Reveal multiple nodes by count (for Chart Course / Research)
   * @param {number} count - How many nodes to reveal
   * @param {number} revealEncounterCount - How many should also reveal encounter type
   */
  static async revealRandomNodes(count, revealEncounterCount = 0) {
    const session = this.getCurrent();
    if (!session) return;

    const routeMap = session.routeMap.map(n => ({ ...n }));

    // Get unrevealed nodes (excluding start/goal)
    const unrevealedIndices = routeMap
      .map((n, i) => ({ node: n, index: i }))
      .filter(({ node }) => !node.revealed && !node.isStart && !node.isGoal)
      .map(({ index }) => index);

    // Shuffle and pick
    const shuffled = [...unrevealedIndices].sort(() => Math.random() - 0.5);
    const toReveal = shuffled.slice(0, count);

    for (let i = 0; i < toReveal.length; i++) {
      const idx = toReveal[i];
      routeMap[idx].revealed = true;
      routeMap[idx].displayedColor = routeMap[idx].actualColor || routeMap[idx].location?.type || 'yellow';
      routeMap[idx].hasFakeColor = false;

      if (i < revealEncounterCount) {
        routeMap[idx].revealedEncounterType = true;
      }
    }

    session.updateSource({ routeMap });
    await this.save(session);
  }

  /**
   * Reveal nodes of a specific color (for Seek Advice)
   * @param {string} color - Color to reveal ('green', 'yellow', 'red')
   * @param {number} count - How many to reveal
   */
  static async revealNodesByColor(color, count) {
    const session = this.getCurrent();
    if (!session) return;

    const routeMap = session.routeMap.map(n => ({ ...n }));

    // Find unrevealed nodes of the specified color
    const matchingIndices = routeMap
      .map((n, i) => ({ node: n, index: i }))
      .filter(({ node }) =>
        !node.revealed &&
        !node.isStart &&
        !node.isGoal &&
        (node.actualColor === color || node.location?.type === color)
      )
      .map(({ index }) => index);

    // Shuffle and pick
    const shuffled = [...matchingIndices].sort(() => Math.random() - 0.5);
    const toReveal = shuffled.slice(0, count);

    for (const idx of toReveal) {
      routeMap[idx].revealed = true;
      routeMap[idx].displayedColor = routeMap[idx].actualColor || routeMap[idx].location?.type || 'yellow';
      routeMap[idx].hasFakeColor = false;
    }

    session.updateSource({ routeMap });
    await this.save(session);
  }

  /**
   * Set a fake color on a node (for failed Chart Course / Research)
   * @param {number} count - How many nodes to give fake colors
   */
  static async setFakeColors(count) {
    const session = this.getCurrent();
    if (!session) return;

    const routeMap = session.routeMap.map(n => ({ ...n }));
    const colors = ['green', 'yellow', 'red'];

    // Get unrevealed nodes
    const unrevealedIndices = routeMap
      .map((n, i) => ({ node: n, index: i }))
      .filter(({ node }) => !node.revealed && !node.isStart && !node.isGoal)
      .map(({ index }) => index);

    // Shuffle and pick
    const shuffled = [...unrevealedIndices].sort(() => Math.random() - 0.5);
    const toFake = shuffled.slice(0, count);

    for (const idx of toFake) {
      const actualColor = routeMap[idx].actualColor || routeMap[idx].location?.type || 'yellow';
      // Pick a DIFFERENT color
      const fakeOptions = colors.filter(c => c !== actualColor);
      const fakeColor = fakeOptions[Math.floor(Math.random() * fakeOptions.length)];

      routeMap[idx].revealed = true;  // It appears revealed...
      routeMap[idx].displayedColor = fakeColor;  // ...but with wrong color!
      routeMap[idx].hasFakeColor = true;
    }

    session.updateSource({ routeMap });
    await this.save(session);
  }

  // ============================================
  // PF2E REDESIGN: ENCOUNTER REROLLS
  // ============================================

  /**
   * Add encounter rerolls (from Consult the Occult)
   * @param {number} count - Number of rerolls to add
   * @param {string} owner - 'player' or 'gm'
   */
  static async addEncounterRerolls(count, owner) {
    const session = this.getCurrent();
    if (!session) return;

    if (owner === 'player') {
      session.updateSource({
        playerEncounterRerolls: (session.playerEncounterRerolls || 0) + count
      });
    } else {
      session.updateSource({
        gmEncounterRerolls: (session.gmEncounterRerolls || 0) + count
      });
    }
    await this.save(session);
  }

  /**
   * Use an encounter reroll
   * @param {string} owner - 'player' or 'gm'
   * @returns {boolean} True if reroll was available and used
   */
  static async useEncounterReroll(owner) {
    const session = this.getCurrent();
    if (!session) return false;

    const field = owner === 'player' ? 'playerEncounterRerolls' : 'gmEncounterRerolls';
    const available = session[field] || 0;

    if (available <= 0) return false;

    session.updateSource({ [field]: available - 1 });
    await this.save(session);
    return true;
  }

  /**
   * Check if rerolls are available
   * @param {string} owner - 'player' or 'gm'
   * @returns {number} Number of available rerolls
   */
  static getAvailableRerolls(owner) {
    const session = this.getCurrent();
    if (!session) return 0;

    return owner === 'player'
      ? (session.playerEncounterRerolls || 0)
      : (session.gmEncounterRerolls || 0);
  }

  // ============================================
  // PF2E REDESIGN: NODE SKIP (PROCURE MOUNTS)
  // ============================================

  /**
   * Add node skips (from Procure Mounts)
   * @param {number} count - Number of skips to add
   */
  static async addNodeSkips(count) {
    const session = this.getCurrent();
    if (!session) return;

    session.updateSource({
      nodeSkipsAvailable: (session.nodeSkipsAvailable || 0) + count
    });
    await this.save(session);
  }

  /**
   * Use a node skip
   * @param {string} nodeId - ID of the node to skip
   * @returns {boolean} True if skip was available and used
   */
  static async useNodeSkip(nodeId) {
    const session = this.getCurrent();
    if (!session) return false;

    const available = session.nodeSkipsAvailable || 0;
    if (available <= 0) return false;

    // Mark the node as skipped
    const routeMap = session.routeMap.map(n => ({ ...n }));
    const nodeIndex = routeMap.findIndex(n => n.id === nodeId);
    if (nodeIndex === -1) return false;

    routeMap[nodeIndex].status = 'skipped';

    // Make child nodes available
    const node = routeMap[nodeIndex];
    for (const childId of node.childIds) {
      const childIdx = routeMap.findIndex(n => n.id === childId);
      if (childIdx !== -1 && routeMap[childIdx].status === 'pending') {
        routeMap[childIdx].status = 'available';
      }
    }

    session.updateSource({
      nodeSkipsAvailable: available - 1,
      routeMap
    });
    await this.save(session);
    return true;
  }

  /**
   * Get available node skips
   * @returns {number}
   */
  static getAvailableNodeSkips() {
    const session = this.getCurrent();
    return session?.nodeSkipsAvailable || 0;
  }

  // ============================================
  // PF2E REDESIGN: ROLE TRACKING
  // ============================================

  /**
   * Mark Leader's Inspiring Words as used for an ally
   * @param {string} allyId - Actor ID of the ally
   */
  static async useLeaderInspire(allyId) {
    const session = this.getCurrent();
    if (!session) return;

    const tracking = { ...session.roleTracking };
    if (!tracking.leader) tracking.leader = { usedOnAllies: [] };
    if (!tracking.leader.usedOnAllies.includes(allyId)) {
      tracking.leader.usedOnAllies.push(allyId);
    }

    session.updateSource({ roleTracking: tracking });
    await this.save(session);
  }

  /**
   * Mark Outrider's Deep Exploration as used
   */
  static async useOutriderDeepExploration() {
    const session = this.getCurrent();
    if (!session) return;

    const tracking = { ...session.roleTracking };
    if (!tracking.outrider) tracking.outrider = { deepExplorationUsed: false };
    tracking.outrider.deepExplorationUsed = true;

    session.updateSource({ roleTracking: tracking });
    await this.save(session);
  }

  /**
   * Mark Quartermaster's Share Supplies as used for a player
   * @param {string} playerId - Actor ID of the player
   */
  static async useQuartermasterShare(playerId) {
    const session = this.getCurrent();
    if (!session) return;

    const tracking = { ...session.roleTracking };
    if (!tracking.quartermaster) tracking.quartermaster = { usedOnPlayers: [] };
    if (!tracking.quartermaster.usedOnPlayers.includes(playerId)) {
      tracking.quartermaster.usedOnPlayers.push(playerId);
    }

    session.updateSource({ roleTracking: tracking });
    await this.save(session);
  }

  /**
   * Mark Sentry's Tactical Retreat as used
   */
  static async useSentryRetreat() {
    const session = this.getCurrent();
    if (!session) return;

    const tracking = { ...session.roleTracking };
    if (!tracking.sentry) tracking.sentry = { tacticalRetreatUsed: false };
    tracking.sentry.tacticalRetreatUsed = true;

    session.updateSource({ roleTracking: tracking });
    await this.save(session);
  }

  /**
   * Get role tracking state
   * @returns {Object} Current role tracking state
   */
  static getRoleTracking() {
    const session = this.getCurrent();
    return session?.roleTracking || getInitialRoleTrackingState();
  }

  // ============================================
  // PF2E REDESIGN: JOURNEY EFFECTS
  // ============================================

  /**
   * Add a journey effect (from preparation success)
   * @param {Object} effect - Effect data with prepId, actorId, rules, label
   */
  static async addJourneyEffect(effect) {
    const session = this.getCurrent();
    if (!session) return;

    const effects = [...(session.journeyEffects || []), effect];
    session.updateSource({ journeyEffects: effects });
    await this.save(session);
  }

  /**
   * Add DC modifier from preparation
   * @param {string} prepId - Preparation ID
   * @param {string} actorId - Actor who made the check
   * @param {number} value - DC modifier amount
   * @param {string} description - Description
   */
  static async addPreparationDCModifier(prepId, actorId, value, description) {
    const session = this.getCurrent();
    if (!session) return;

    const modifiers = [...(session.preparationDCModifiers || []), {
      source: prepId,
      actorId,
      value,
      description
    }];
    session.updateSource({ preparationDCModifiers: modifiers });
    await this.save(session);
  }

  /**
   * Modify encounter count (from Prepare the Party)
   * @param {number} modifier - Amount to add (can be negative)
   */
  static async modifyEncounterCount(modifier) {
    const session = this.getCurrent();
    if (!session) return;

    session.updateSource({
      encounterCountModifier: (session.encounterCountModifier || 0) + modifier
    });
    await this.save(session);
  }

  /**
   * Set ignore first exhaustion flag (from Prepare a Feast)
   * @param {boolean} value
   */
  static async setIgnoreFirstExhaustion(value) {
    const session = this.getCurrent();
    if (!session) return;

    session.updateSource({ ignoreFirstExhaustion: value });
    await this.save(session);
  }

  /**
   * Set no rest before journey flag (from critical fail Carouse)
   * @param {boolean} value
   */
  static async setNoRestBeforeJourney(value) {
    const session = this.getCurrent();
    if (!session) return;

    session.updateSource({ noRestBeforeJourney: value });
    await this.save(session);
  }
}

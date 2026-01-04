/**
 * Uncharted Journeys - Journey Tables
 * Static data for distances, weather, terrain, and arrival circumstances
 */

/**
 * Distance options and their base encounter counts
 */
export const DISTANCES = {
  short: {
    id: 'short',
    name: 'Short',
    description: 'Less than 150 miles (~1 week)',
    baseEncounters: 2,
    miles: '< 150 miles'
  },
  medium: {
    id: 'medium',
    name: 'Medium',
    description: '150-500 miles (~2-3 weeks)',
    baseEncounters: 3,
    miles: '150-500 miles'
  },
  long: {
    id: 'long',
    name: 'Long',
    description: '500-1000 miles (~1-2 months)',
    baseEncounters: 4,
    miles: '500-1000 miles'
  },
  veryLong: {
    id: 'veryLong',
    name: 'Very Long',
    description: 'Over 1000 miles (~2+ months)',
    baseEncounters: 5,
    miles: '1000+ miles'
  }
};

/**
 * Weather descriptions by value (1-10)
 */
export const WEATHER_DESCRIPTIONS = {
  1: 'Perfect weather. Clear skies and mild temperatures.',
  2: 'Pleasant conditions with occasional clouds.',
  3: 'Occasional bouts of rain, snow, or wind.',
  4: 'Frequent light precipitation or temperature extremes.',
  5: 'Unpredictable weather patterns. Dress in layers.',
  6: 'Regular storms or uncomfortable temperatures.',
  7: 'Harsh conditions. Shelter needed during bad spells.',
  8: 'Severe weather. Travel is difficult and dangerous.',
  9: 'Extreme conditions. Only the prepared survive.',
  10: 'Catastrophic weather. Nature itself fights against you.'
};

/**
 * Terrain descriptions by value (1-10)
 */
export const TERRAIN_DESCRIPTIONS = {
  1: 'Well-maintained roads through gentle countryside.',
  2: 'Good paths with minor obstacles.',
  3: 'Mixed terrain. Some rough patches.',
  4: 'Uneven ground. Watch your footing.',
  5: 'Rugged, rocky terrain. Barren expanses.',
  6: 'Difficult landscape. Dense forests or steep hills.',
  7: 'Treacherous paths. Risk of injury high.',
  8: 'Hostile environment. Mountains or swamps.',
  9: 'Near-impassable terrain. Requires special equipment.',
  10: 'Legendary difficulty. Few have crossed and survived.'
};

/**
 * Arrival circumstances table (1d12)
 * Based on Uncharted Journeys rulebook page 23
 */
export const ARRIVAL_TABLE = {
  1: {
    title: 'Unforeseen Danger',
    icon: 'skull',
    description: 'The party unknowingly stumble into a dangerous situation, such as walking into an ambush or entering a town overrun by plague. They are unaware of the hazards that await them and have no time to prepare. Any hostile creatures are aware of the party\'s arrival and have at least one round to prepare before making an Initiative check.',
    effect: 'Hostile creatures aware, have 1 round to prepare. Party cannot prepare.'
  },
  2: {
    title: 'Unforeseen Danger',
    icon: 'skull',
    description: 'The party unknowingly stumble into a dangerous situation, such as walking into an ambush or entering a town overrun by plague. They are unaware of the hazards that await them and have no time to prepare. Any hostile creatures are aware of the party\'s arrival and have at least one round to prepare before making an Initiative check.',
    effect: 'Hostile creatures aware, have 1 round to prepare. Party cannot prepare.'
  },
  3: {
    title: 'Immediate Danger',
    icon: 'exclamation-triangle',
    description: 'The party arrive during a perilous situation, such as a violent civil war or a fire rapidly spreading through a settlement. Neither the party nor any hostile creatures are surprised, but no one has a chance to prepare. Roll Initiative as normal if the situation requires it.',
    effect: 'No one surprised, no preparation time. Roll Initiative normally.'
  },
  4: {
    title: 'Immediate Danger',
    icon: 'exclamation-triangle',
    description: 'The party arrive during a perilous situation, such as a violent civil war or a fire rapidly spreading through a settlement. Neither the party nor any hostile creatures are surprised, but no one has a chance to prepare. Roll Initiative as normal if the situation requires it.',
    effect: 'No one surprised, no preparation time. Roll Initiative normally.'
  },
  5: {
    title: 'Immediate Danger',
    icon: 'exclamation-triangle',
    description: 'The party arrive during a perilous situation, such as a violent civil war or a fire rapidly spreading through a settlement. Neither the party nor any hostile creatures are surprised, but no one has a chance to prepare. Roll Initiative as normal if the situation requires it.',
    effect: 'No one surprised, no preparation time. Roll Initiative normally.'
  },
  6: {
    title: 'Imminent Danger',
    icon: 'hourglass-half',
    description: 'The party arrive on the cusp of a dangerous situation, such as when an ally is about to be executed or a storm is about to hit a coastal village. The party has at least one round to prepare or act before they are noticed by hostile creatures, and the party may notice hazardous conditions before being exposed to them.',
    effect: 'Party has 1 round to prepare before being noticed.'
  },
  7: {
    title: 'Imminent Danger',
    icon: 'hourglass-half',
    description: 'The party arrive on the cusp of a dangerous situation, such as when an ally is about to be executed or a storm is about to hit a coastal village. The party has at least one round to prepare or act before they are noticed by hostile creatures, and the party may notice hazardous conditions before being exposed to them.',
    effect: 'Party has 1 round to prepare before being noticed.'
  },
  8: {
    title: 'Unsafe',
    icon: 'shield-alt',
    description: 'The party ends their Journey safe from immediate danger but with a looming threat on the horizon, such as a hostile army preparing to attack or a nearby volcano about to erupt. The danger is close enough to prevent the party from taking a Short or Long Rest in the area but they have some time to prepare.',
    effect: 'No immediate danger but cannot rest. Time to prepare.'
  },
  9: {
    title: 'Unsafe',
    icon: 'shield-alt',
    description: 'The party ends their Journey safe from immediate danger but with a looming threat on the horizon, such as a hostile army preparing to attack or a nearby volcano about to erupt. The danger is close enough to prevent the party from taking a Short or Long Rest in the area but they have some time to prepare.',
    effect: 'No immediate danger but cannot rest. Time to prepare.'
  },
  10: {
    title: 'Relative Safety',
    icon: 'bed',
    description: 'The party arrives at a relatively safe time. Perhaps a dragon was spotted nearby but doesn\'t pose an immediate threat, or there is a vampire stalking the streets at night but they arrive while the sun is high in the sky. It is safe enough to take a Short Rest without significant risk, but danger is near enough to preclude a Long Rest.',
    effect: 'Safe for Short Rest. Long Rest not possible.'
  },
  11: {
    title: 'Relative Safety',
    icon: 'bed',
    description: 'The party arrives at a relatively safe time. Perhaps a dragon was spotted nearby but doesn\'t pose an immediate threat, or there is a vampire stalking the streets at night but they arrive while the sun is high in the sky. It is safe enough to take a Short Rest without significant risk, but danger is near enough to preclude a Long Rest.',
    effect: 'Safe for Short Rest. Long Rest not possible.'
  },
  12: {
    title: 'Safety',
    icon: 'home',
    description: 'The party ends their Journey in a safe location, far from danger. This may be a well fortified city during peacetime, or an arcane institute kept safe by powerful wards. It is safe to take a Short or Long Rest without significant risk.',
    effect: 'Safe for Short or Long Rest.'
  }
};

/**
 * Pace options for journey travel
 */
export const PACE_OPTIONS = {
  rush: {
    id: 'rush',
    name: 'Rush',
    encounterModifier: -1,
    difficultyModifier: +5,
    description: 'Move fast at the cost of caution. -1 encounter, +5 to DC, saves made with -2 penalty.'
  },
  normal: {
    id: 'normal',
    name: 'Normal',
    encounterModifier: 0,
    difficultyModifier: 0,
    description: 'Standard traveling pace.'
  },
  careful: {
    id: 'careful',
    name: 'Careful',
    encounterModifier: +1,
    difficultyModifier: -3,
    description: 'Take it slow and safe. +1 encounter, -3 to DC.'
  }
};

/**
 * Calculate journey difficulty
 * @param {number} weather - Weather value (1-10)
 * @param {number} terrain - Terrain value (1-10)
 * @param {number} nemesis - Nemesis modifier (0-10)
 * @returns {number} Total difficulty DC
 */
export function calculateDifficulty(weather, terrain, nemesis = 0) {
  return Math.max(10, 10 + weather + terrain + nemesis);
}

/**
 * Get base encounter count for a distance
 * @param {string} distanceId - Distance ID
 * @returns {number} Base encounter count
 */
export function getBaseEncounters(distanceId) {
  return DISTANCES[distanceId]?.baseEncounters ?? 2;
}

/**
 * Get arrival result from roll
 * @param {number} roll - Roll result (1-12)
 * @returns {Object} Arrival data
 */
export function getArrivalResult(roll) {
  const clampedRoll = Math.max(1, Math.min(12, roll));
  return ARRIVAL_TABLE[clampedRoll];
}

/**
 * Encounter Pools by danger level
 * 🔴 combat: Dangerous areas (Old Memories = gefährliche Ruinen)
 * 🟢 social: HÖHERE Chance auf sichere Encounters, aber NICHT komplett sicher!
 * 🟡 mixed: All encounter types possible (includes Natural Wonders - ONLY here!)
 *
 * Note: "Danger Afoot" appears in ALL THREE pools (warnings can happen anywhere)
 * Note: "A Bump in the Road" ist IMMER ein echtes Hazard mit Schaden - auch bei grünen Orten!
 * Note: "A Dark Place" wurde ENTFERNT - zu passiv, redundant mit Deadly Fight
 */
export const ENCOUNTER_POOLS = {
  // 🔴 Red - Dangerous (6 types)
  // A Dark Place ENTFERNT - zu passiv, redundant mit Deadly Fight
  combat: [
    'Deadly Fight',      // Front-driven combat situations
    'Monster Hunt',      // Active hunting
    'A Bump in the Road', // ⚠️ Echtes Hazard mit Schaden!
    'Danger Afoot',      // Warning (in ALL pools!)
    'Hidden Reserves',   // 🎲 LUCKY: Treasure in dangerous area!
    'Old Memories'       // 🏛️ SELTEN: Vergessene Ruinen → Research Encounter
  ],

  // 🟢 Green - Social (6 types) - HÖHERE Chance auf sichere Encounters, aber NICHT komplett sicher!
  social: [
    'A Chance Meeting',    // Meet travelers
    'Needing Assistance',  // Help someone
    'Fateful Encounter',   // Mysteriöser Fremder mit Quest
    'A Place to Rest',     // Rest spot
    'A Bump in the Road',  // ⚠️ Echtes Hazard mit Schaden! (auch hier!)
    'Danger Afoot'         // Warning (in ALL pools!)
  ],

  // 🟡 Yellow - Mixed (10 types, includes Natural Wonders - ONLY HERE!)
  // A Dark Place ENTFERNT - zu passiv
  mixed: [
    'Deadly Fight',
    'Monster Hunt',
    'Danger Afoot',
    'Hidden Reserves',
    'A Chance Meeting',
    'Needing Assistance',
    'Fateful Encounter',
    'A Place to Rest',
    'A Bump in the Road',
    'Natural Wonders'      // ONLY in mixed/yellow!
  ]
};

/**
 * Biome configurations
 * Each biome defines:
 * - pool: Which ENCOUNTER_POOL to use
 * - color: Visual indicator (red/yellow/green)
 * - lengthMod: Modifier to encounter count (-1 = shorter, +1 = longer)
 * - name: German display name
 * - canRest: Whether party can take a proper rest here
 */
export const BIOMES = {
  // 🔴 Dangerous - Pool: combat - SHORTER (lengthMod: -1)
  swamp:      { pool: 'combat', color: 'red',    lengthMod: -1, name: 'Sumpf' },
  ruins:      { pool: 'combat', color: 'red',    lengthMod: -1, name: 'Ruinen' },
  blighted:   { pool: 'combat', color: 'red',    lengthMod: -1, name: 'Verseuchtes Land' },
  clanlands:  { pool: 'combat', color: 'red',    lengthMod: -1, name: 'Clan-Gebiet' },

  // 🟢 Safe - Pool: social - Bonus: canRest
  city:       { pool: 'social', color: 'green',  lengthMod: 0,  name: 'Stadt', canRest: true },
  village:    { pool: 'social', color: 'green',  lengthMod: 0,  name: 'Dorf', canRest: true },
  inn:        { pool: 'social', color: 'green',  lengthMod: 0,  name: 'Gasthaus', canRest: true },

  // 🟡 Neutral - Pool: mixed - Standard
  steppe:     { pool: 'mixed', color: 'yellow', lengthMod: 0,  name: 'Steppe' },
  forest:     { pool: 'mixed', color: 'yellow', lengthMod: 0,  name: 'Wald' },
  hills:      { pool: 'mixed', color: 'yellow', lengthMod: 0,  name: 'Hügelland' },
  coast:      { pool: 'mixed', color: 'yellow', lengthMod: 0,  name: 'Küste' },
  mountains:  { pool: 'mixed', color: 'yellow', lengthMod: +1, name: 'Gebirge' }
};

/**
 * Get a random encounter type from a biome's pool
 * @param {string} biomeId - Biome ID
 * @returns {string} Random encounter type
 */
export function getRandomEncounterType(biomeId) {
  const biome = BIOMES[biomeId];
  if (!biome) return ENCOUNTER_POOLS.mixed[Math.floor(Math.random() * ENCOUNTER_POOLS.mixed.length)];

  const pool = ENCOUNTER_POOLS[biome.pool];
  return pool[Math.floor(Math.random() * pool.length)];
}

/**
 * Get biome configuration
 * @param {string} biomeId - Biome ID
 * @returns {Object} Biome configuration
 */
export function getBiomeConfig(biomeId) {
  return BIOMES[biomeId] || BIOMES.steppe;
}

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
    baseEncounters: 1,
    miles: '< 150 miles'
  },
  medium: {
    id: 'medium',
    name: 'Medium',
    description: '150-500 miles (~2-3 weeks)',
    baseEncounters: 2,
    miles: '150-500 miles'
  },
  long: {
    id: 'long',
    name: 'Long',
    description: '500-1000 miles (~1-2 months)',
    baseEncounters: 3,
    miles: '500-1000 miles'
  },
  veryLong: {
    id: 'veryLong',
    name: 'Very Long',
    description: 'Over 1000 miles (~2+ months)',
    baseEncounters: 4,
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
 * Arrival circumstances table (1-12)
 */
export const ARRIVAL_TABLE = {
  1: {
    name: 'Worst Possible Timing',
    icon: '🔴',
    description: 'The party arrives at the worst possible moment. Perhaps they walk into an ambush, arrive during a siege, or find their destination in flames. They face an immediate encounter or crisis.',
    effect: 'Immediate encounter or crisis. No rest available.'
  },
  2: {
    name: 'Bad Timing',
    icon: '🔴',
    description: 'The party arrives during trouble. A battle rages nearby, the town is under lockdown, or dangerous creatures prowl the area. Caution is needed.',
    effect: 'Hostile environment. Perception checks to avoid trouble.'
  },
  3: {
    name: 'Poor Circumstances',
    icon: '🟠',
    description: 'Something is wrong at the destination. Guards are suspicious, resources are scarce, or the welcome is cold. The party faces social or logistical challenges.',
    effect: 'Social or supply difficulties. -2 to social checks initially.'
  },
  4: {
    name: 'Inconvenient',
    icon: '🟠',
    description: 'Minor complications await. Perhaps the inn is full, shops are closed, or a local festival makes finding lodging difficult.',
    effect: 'Minor inconveniences. May need to improvise accommodations.'
  },
  5: {
    name: 'Neutral Arrival',
    icon: '🟡',
    description: 'The party arrives without incident. Nothing particularly good or bad awaits them. It is simply... a place.',
    effect: 'Standard arrival. No bonuses or penalties.'
  },
  6: {
    name: 'Quiet Welcome',
    icon: '🟡',
    description: 'The party arrives to find things calm and orderly. Nothing exciting, but nothing dangerous either. A Short Rest is possible.',
    effect: 'Safe for a Short Rest.'
  },
  7: {
    name: 'Good Timing',
    icon: '🟢',
    description: 'The party arrives at an opportune moment. Perhaps a market is in full swing, guards are changing shifts, or locals are in good spirits.',
    effect: '+1 circumstance bonus to initial social interactions.'
  },
  8: {
    name: 'Favorable Circumstances',
    icon: '🟢',
    description: 'Things are going well at the destination. Resources are plentiful, people are friendly, and opportunities abound.',
    effect: '+2 to first social check. Good selection of supplies.'
  },
  9: {
    name: 'Excellent Arrival',
    icon: '🟢',
    description: 'The party arrives to find excellent conditions. Perhaps they are expected and welcomed, or arrive just as good fortune strikes the area.',
    effect: 'Safe for a Long Rest. +2 to social checks for first day.'
  },
  10: {
    name: 'Relative Safety',
    icon: '🟢',
    description: 'The party arrives at a relatively safe time. Perhaps a dragon was spotted nearby but doesn\'t pose an immediate threat. It is safe enough to take a Short Rest without significant risk, but danger is near enough to preclude a Long Rest.',
    effect: 'Safe for Short Rest. Nearby threat requires awareness.'
  },
  11: {
    name: 'Relative Safety',
    icon: '🟢',
    description: 'The party arrives at a relatively safe time. Perhaps a dragon was spotted nearby but doesn\'t pose an immediate threat. It is safe enough to take a Short Rest without significant risk, but danger is near enough to preclude a Long Rest.',
    effect: 'Safe for Short Rest. Nearby threat requires awareness.'
  },
  12: {
    name: 'Perfect Timing',
    icon: '🟢',
    description: 'The party could not have arrived at a better moment. Perhaps a celebration is underway, an old friend is visiting, or recent events have put everyone in the best possible mood.',
    effect: 'Safe for Long Rest. +3 to social checks. Potential story opportunity.'
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

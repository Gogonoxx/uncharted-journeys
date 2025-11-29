/**
 * Uncharted Journeys - Preparations
 * All 19 preparations that can be made before a journey
 */

/**
 * Base DC for preparation checks
 */
export const PREPARATION_BASE_DC = 13;

/**
 * All available preparations
 */
export const PREPARATIONS = {
  rallyTheParty: {
    id: 'rallyTheParty',
    name: 'Rally the Party',
    skillSlug: 'performance',
    altSkillSlug: 'diplomacy',
    dc: PREPARATION_BASE_DC,
    traits: ['auditory', 'linguistic'],
    description: 'Give a rousing speech or pep talk to boost the party\'s morale for the journey ahead.',
    successEffect: 'Party gains +1 status bonus to all skill checks during the journey.',
    failureEffect: 'No effect.',
    difficultyModifier: { success: 0, failure: 0 },
    specialEffect: { type: 'partyBonus', value: 1, target: 'skillChecks' }
  },
  chartCourse: {
    id: 'chartCourse',
    name: 'Chart Course',
    skillSlug: 'survival',
    altSkillSlug: 'crafting',
    dc: PREPARATION_BASE_DC,
    traits: ['concentrate'],
    description: 'Study maps and charts to plan the optimal route for the journey.',
    successEffect: 'Journey Difficulty reduced by 5.',
    failureEffect: 'Journey Difficulty increased by 2.',
    difficultyModifier: { success: -5, failure: +2 }
  },
  packUp: {
    id: 'packUp',
    name: 'Pack Up',
    skillSlug: 'athletics',
    dc: PREPARATION_BASE_DC,
    traits: ['manipulate'],
    description: 'Carefully organize and distribute supplies among the party for efficient travel.',
    successEffect: 'Journey Difficulty reduced by 2.',
    failureEffect: 'No effect.',
    difficultyModifier: { success: -2, failure: 0 }
  },
  procureSupplies: {
    id: 'procureSupplies',
    name: 'Procure Supplies',
    skillSlug: 'society',
    altSkillSlug: 'survival',
    dc: PREPARATION_BASE_DC,
    traits: ['exploration'],
    description: 'Gather extra supplies, either by purchasing or foraging before departure.',
    successEffect: 'Quartermaster\'s Supply Dice are upgraded from d6 to d8.',
    failureEffect: 'No effect.',
    difficultyModifier: { success: 0, failure: 0 },
    specialEffect: { type: 'upgradeSupplyDice', value: 'd8' }
  },
  scoutAhead: {
    id: 'scoutAhead',
    name: 'Scout Ahead',
    skillSlug: 'survival',
    altSkillSlug: 'stealth',
    dc: PREPARATION_BASE_DC,
    traits: ['exploration'],
    description: 'Send scouts ahead to check the first part of the route for dangers.',
    successEffect: 'First encounter is revealed to the GM before traveling.',
    failureEffect: 'No effect.',
    difficultyModifier: { success: 0, failure: 0 },
    specialEffect: { type: 'revealEncounter', count: 1 }
  },
  gatherIntel: {
    id: 'gatherIntel',
    name: 'Gather Intel',
    skillSlug: 'diplomacy',
    altSkillSlug: 'society',
    dc: PREPARATION_BASE_DC,
    traits: ['linguistic'],
    description: 'Ask locals about current conditions along the planned route.',
    successEffect: 'Journey Difficulty reduced by 3 and learn about one regional hazard.',
    failureEffect: 'No effect.',
    difficultyModifier: { success: -3, failure: 0 },
    specialEffect: { type: 'revealHazard' }
  },
  prepareDefenses: {
    id: 'prepareDefenses',
    name: 'Prepare Defenses',
    skillSlug: 'crafting',
    altSkillSlug: 'athletics',
    dc: PREPARATION_BASE_DC,
    traits: ['manipulate'],
    description: 'Prepare defensive measures like caltrops, alarms, or fortification supplies.',
    successEffect: 'Party gains +2 circumstance bonus to Initiative during ambush encounters.',
    failureEffect: 'No effect.',
    difficultyModifier: { success: 0, failure: 0 },
    specialEffect: { type: 'initiativeBonus', value: 2, condition: 'ambush' }
  },
  maintainGear: {
    id: 'maintainGear',
    name: 'Maintain Gear',
    skillSlug: 'crafting',
    dc: PREPARATION_BASE_DC,
    traits: ['manipulate'],
    description: 'Perform maintenance on weapons, armor, and equipment before the journey.',
    successEffect: 'No equipment-related mishaps during travel. +1 to repair attempts.',
    failureEffect: 'No effect.',
    difficultyModifier: { success: 0, failure: 0 },
    specialEffect: { type: 'gearReliability' }
  },
  studyBestiary: {
    id: 'studyBestiary',
    name: 'Study Bestiary',
    skillSlug: 'nature',
    altSkillSlug: 'arcana',
    dc: PREPARATION_BASE_DC,
    traits: ['concentrate'],
    description: 'Research creatures known to inhabit the region you\'ll be traveling through.',
    successEffect: '+2 circumstance bonus to Recall Knowledge about creatures during encounters.',
    failureEffect: 'No effect.',
    difficultyModifier: { success: 0, failure: 0 },
    specialEffect: { type: 'recallKnowledgeBonus', value: 2 }
  },
  prepareRemedies: {
    id: 'prepareRemedies',
    name: 'Prepare Remedies',
    skillSlug: 'medicine',
    altSkillSlug: 'nature',
    dc: PREPARATION_BASE_DC,
    traits: ['manipulate'],
    description: 'Prepare healing supplies and remedies for common travel ailments.',
    successEffect: '+2 to Treat Wounds and Treat Disease checks during the journey.',
    failureEffect: 'No effect.',
    difficultyModifier: { success: 0, failure: 0 },
    specialEffect: { type: 'medicineBonus', value: 2 }
  },
  performRitual: {
    id: 'performRitual',
    name: 'Perform Ritual',
    skillSlug: 'religion',
    altSkillSlug: 'occultism',
    dc: PREPARATION_BASE_DC,
    traits: ['concentrate'],
    description: 'Perform a religious or magical ritual to bless the journey.',
    successEffect: 'Party gains +1 status bonus to saving throws for the first day.',
    failureEffect: 'No effect.',
    difficultyModifier: { success: 0, failure: 0 },
    specialEffect: { type: 'savingThrowBonus', value: 1, duration: 'firstDay' }
  },
  establishSignals: {
    id: 'establishSignals',
    name: 'Establish Signals',
    skillSlug: 'society',
    dc: PREPARATION_BASE_DC,
    traits: ['concentrate'],
    description: 'Establish a system of signals and codes for communication during travel.',
    successEffect: 'Party can communicate silently during encounters. +2 to group Stealth.',
    failureEffect: 'No effect.',
    difficultyModifier: { success: 0, failure: 0 },
    specialEffect: { type: 'stealthBonus', value: 2 }
  },
  trainFormation: {
    id: 'trainFormation',
    name: 'Train Formation',
    skillSlug: 'athletics',
    altSkillSlug: 'acrobatics',
    dc: PREPARATION_BASE_DC,
    traits: ['exploration'],
    description: 'Practice traveling in a specific formation for efficiency and safety.',
    successEffect: 'Journey Difficulty reduced by 2. Group can\'t be flanked while traveling.',
    failureEffect: 'No effect.',
    difficultyModifier: { success: -2, failure: 0 },
    specialEffect: { type: 'preventFlanking' }
  },
  secureAnimals: {
    id: 'secureAnimals',
    name: 'Secure Animals',
    skillSlug: 'nature',
    dc: PREPARATION_BASE_DC,
    traits: ['exploration'],
    description: 'Ensure mounts and pack animals are healthy, rested, and properly equipped.',
    successEffect: 'Mounted travel bonuses. Animals won\'t bolt during encounters.',
    failureEffect: 'No effect.',
    difficultyModifier: { success: 0, failure: 0 },
    specialEffect: { type: 'mountReliability' }
  },
  camouflageGear: {
    id: 'camouflageGear',
    name: 'Camouflage Gear',
    skillSlug: 'stealth',
    altSkillSlug: 'crafting',
    dc: PREPARATION_BASE_DC,
    traits: ['manipulate'],
    description: 'Prepare camouflage and concealment for gear and party members.',
    successEffect: '+2 circumstance bonus to avoid being spotted during travel.',
    failureEffect: 'No effect.',
    difficultyModifier: { success: 0, failure: 0 },
    specialEffect: { type: 'avoidanceBonus', value: 2 }
  },
  planContingencies: {
    id: 'planContingencies',
    name: 'Plan Contingencies',
    skillSlug: 'society',
    altSkillSlug: 'survival',
    dc: PREPARATION_BASE_DC,
    traits: ['concentrate'],
    description: 'Develop backup plans for common travel emergencies.',
    successEffect: 'Once per journey, reroll a failed group check.',
    failureEffect: 'No effect.',
    difficultyModifier: { success: 0, failure: 0 },
    specialEffect: { type: 'groupReroll', count: 1 }
  },
  lightenLoads: {
    id: 'lightenLoads',
    name: 'Lighten Loads',
    skillSlug: 'athletics',
    dc: PREPARATION_BASE_DC,
    traits: ['exploration'],
    description: 'Review and reduce unnecessary weight from everyone\'s packs.',
    successEffect: 'Party isn\'t slowed by encumbrance. +5 feet to party Speed.',
    failureEffect: 'No effect.',
    difficultyModifier: { success: 0, failure: 0 },
    specialEffect: { type: 'speedBonus', value: 5 }
  },
  inspireConfidence: {
    id: 'inspireConfidence',
    name: 'Inspire Confidence',
    skillSlug: 'performance',
    dc: PREPARATION_BASE_DC,
    traits: ['auditory', 'emotion'],
    description: 'Give the party confidence through stories of successful journeys.',
    successEffect: 'Party is immune to frightened condition for the first encounter.',
    failureEffect: 'No effect.',
    difficultyModifier: { success: 0, failure: 0 },
    specialEffect: { type: 'fearImmunity', duration: 'firstEncounter' }
  },
  coordinateRoles: {
    id: 'coordinateRoles',
    name: 'Coordinate Roles',
    skillSlug: 'diplomacy',
    dc: PREPARATION_BASE_DC,
    traits: ['linguistic'],
    description: 'Ensure everyone understands their role and responsibilities.',
    successEffect: 'Each role ability can be used one additional time.',
    failureEffect: 'No effect.',
    difficultyModifier: { success: 0, failure: 0 },
    specialEffect: { type: 'extraRoleUse', value: 1 }
  }
};

/**
 * Get preparation by ID
 * @param {string} prepId - Preparation ID
 * @returns {Object|null} Preparation data or null
 */
export function getPreparation(prepId) {
  return PREPARATIONS[prepId] ?? null;
}

/**
 * Get all preparations as an array
 * @returns {Array} Array of preparation objects
 */
export function getPreparationsArray() {
  return Object.values(PREPARATIONS);
}

/**
 * Get preparations grouped by primary skill
 * @returns {Object} Preparations grouped by skill slug
 */
export function getPreparationsBySkill() {
  const grouped = {};
  for (const prep of Object.values(PREPARATIONS)) {
    const skill = prep.skillSlug;
    if (!grouped[skill]) grouped[skill] = [];
    grouped[skill].push(prep);
  }
  return grouped;
}

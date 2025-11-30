/**
 * Uncharted Journeys - Preparations
 * Preparations from the Uncharted Journeys book (converted to PF2E skills)
 */

/**
 * Base DC for preparation checks (book default is 13, but we use journey DC)
 */
export const PREPARATION_BASE_DC = 13;

/**
 * Icon mapping for preparation effects
 */
export const PREPARATION_ICONS = {
  assistAlly: 'icons/skills/social/diplomacy-handshake-yellow.webp',
  brewTonics: 'icons/consumables/potions/potion-flask-corked-orange.webp',
  carouse: 'icons/consumables/drinks/alcohol-beer-mug-brown.webp',
  chartCourse: 'icons/sundries/documents/document-sealed-brown-red.webp',
  consultTheOccult: 'icons/magic/symbols/runes-star-pentagon-orange.webp',
  packUp: 'icons/svg/chest.svg',  // V13-compatible icon
  prepareAFeast: 'icons/consumables/food/turkey-leg-cooked-brown.webp',
  procureBeastsOfBurden: 'icons/creatures/mammals/ox-buffalo-horned-brown.webp',
  procureMounts: 'icons/creatures/mammals/horse-brown.webp',
  procureSupplies: 'icons/commodities/treasure/chest-simple-wooden.webp',
  rallyTheParty: 'icons/magic/sonic/bell-alarm-ringing-gold.webp',
  research: 'icons/sundries/documents/book-worn-brown.webp',
  seekAdvice: 'icons/skills/social/diplomacy-handshake.webp',
  studyTheWeather: 'icons/magic/air/fog-gas-smoke-swirling-gray.webp'
};

/**
 * Rally the Party options
 */
export const RALLY_OPTIONS = {
  encouraging: {
    id: 'encouraging',
    name: 'Encouraging',
    description: 'Each party member begins the Journey with Inspiration.',
    shortDescription: 'Party has Inspiration'
  },
  galvanising: {
    id: 'galvanising',
    name: 'Galvanising',
    description: 'Each party member gains +1 to ability checks until the end of the Journey.',
    shortDescription: '+1 status bonus to skill checks',
    rules: [{
      key: 'FlatModifier',
      selector: 'skill-check',
      value: 1,
      type: 'status',
      label: 'Rally the Party (Galvanising)'
    }]
  },
  hopeful: {
    id: 'hopeful',
    name: 'Hopeful',
    description: 'Each party member has advantage on ability checks and saving throws during the first Encounter.',
    shortDescription: 'Advantage on first encounter checks/saves'
  },
  resolute: {
    id: 'resolute',
    name: 'Resolute',
    description: 'Each party member gains temporary hit points equal to twice their Proficiency Bonus.',
    shortDescription: 'Temp HP = 2x Proficiency'
  },
  solemn: {
    id: 'solemn',
    name: 'Solemn',
    description: 'Each party member gains +1 to saving throws until the end of the Journey.',
    shortDescription: '+1 status bonus to saving throws',
    rules: [{
      key: 'FlatModifier',
      selector: 'saving-throw',
      value: 1,
      type: 'status',
      label: 'Rally the Party (Solemn)'
    }]
  }
};

/**
 * All available preparations from the book
 */
export const PREPARATIONS = {
  assistAlly: {
    id: 'assistAlly',
    name: 'Assist Ally',
    skillSlug: 'diplomacy',
    description: 'You assist an ally with their Preparations. One other character may make the ability check for their Preparation with advantage.',
    successEffect: 'One ally gains advantage on their Preparation check.',
    failureEffect: 'No effect.',
    difficultyModifier: { success: 0, failure: 0 }
  },
  brewTonics: {
    id: 'brewTonics',
    name: 'Brew Tonics',
    skillSlug: 'crafting',
    description: 'You bolster your party with fortifying brews, potions, salves, or tinctures.',
    successEffect: 'Each party member has advantage on Constitution checks and saving throws until the Journey ends. A character loses this benefit the first time they fail a Constitution check or saving throw.',
    failureEffect: 'No effect.',
    difficultyModifier: { success: 0, failure: 0 },
    effectOnSuccess: {
      name: 'Brew Tonics',
      description: 'Advantage on Constitution checks and saving throws (lose on first failure).',
      applyToAll: true
    }
  },
  carouse: {
    id: 'carouse',
    name: 'Carouse',
    skillSlug: 'athletics',
    altSkillSlug: 'performance',
    description: 'You decide the best way to prepare for the road ahead is to enjoy life now — visiting bars, enjoying fine meals, and swapping stories with the locals.',
    successEffect: 'Success: Advantage on all ability checks during the first Encounter. Success by 5+: Also reduce Journey Difficulty by 2.',
    failureEffect: 'Failure: Disadvantage on all ability checks during the first Encounter. Failure by 5+: Also skip the Rest step and begin with half Hit Dice.',
    difficultyModifier: { success: -2, failure: 0 },
    effectOnSuccess: {
      name: 'Carouse',
      description: 'Advantage on all ability checks during the first Encounter.',
      applyToAll: true
    }
  },
  chartCourse: {
    id: 'chartCourse',
    name: 'Chart Course',
    skillSlug: 'survival',
    altSkillSlug: 'crafting',
    description: 'Using the information you have about your origin and destination, you lay out the best possible course to follow for your Journey.',
    successEffect: 'Journey Difficulty reduced by 5.',
    failureEffect: 'Journey Difficulty increased by 2.',
    difficultyModifier: { success: -5, failure: 2 }
  },
  consultTheOccult: {
    id: 'consultTheOccult',
    name: 'Consult the Occult',
    skillSlug: 'arcana',
    altSkillSlug: 'occultism',
    description: 'You spend a few hours practising esoteric traditions to search for signs and portents concerning the difficulties that lie ahead.',
    successEffect: 'Each party member may reroll a failed saving throw once before the end of the Journey.',
    failureEffect: 'No effect.',
    difficultyModifier: { success: 0, failure: 0 },
    effectOnSuccess: {
      name: 'Consult the Occult',
      description: 'May reroll a failed saving throw once during this Journey.',
      applyToAll: true
    }
  },
  packUp: {
    id: 'packUp',
    name: 'Pack Up',
    skillSlug: 'athletics',
    description: 'You lug, haul, and consolidate the party\'s supplies, then painstakingly organise and pack them tightly to make them as easy to carry as possible.',
    successEffect: 'Journey Difficulty reduced by 2.',
    failureEffect: 'No effect.',
    difficultyModifier: { success: -2, failure: 0 }
  },
  prepareAFeast: {
    id: 'prepareAFeast',
    name: 'Prepare a Feast',
    skillSlug: 'survival',
    altSkillSlug: 'crafting',
    description: 'You prepare a feast, either simple and hearty or elaborate and decadent, lavishing your party with good food and company to lift their spirits before the Journey begins.',
    successEffect: 'The first time each party member suffers an effect that would make them gain a level of Exhaustion during the Journey, they do not gain Exhaustion.',
    failureEffect: 'No effect.',
    difficultyModifier: { success: 0, failure: 0 },
    effectOnSuccess: {
      name: 'Feast Prepared',
      description: 'Ignore the first level of Exhaustion you would gain during this Journey.',
      applyToAll: true
    }
  },
  procureBeastsOfBurden: {
    id: 'procureBeastsOfBurden',
    name: 'Procure Beasts of Burden',
    skillSlug: 'diplomacy',
    altSkillSlug: 'nature',
    description: 'You take time to find capable creatures to bear your party\'s supplies on the Journey ahead.',
    successEffect: 'Journey Difficulty reduced by 2.',
    failureEffect: 'No effect.',
    difficultyModifier: { success: -2, failure: 0 }
  },
  procureMounts: {
    id: 'procureMounts',
    name: 'Procure Mounts',
    skillSlug: 'diplomacy',
    altSkillSlug: 'stealth',
    description: 'You search for riding animals to carry your party throughout the Journey. You can purchase mounts or attempt to steal them.',
    successEffect: 'The party acquires a mount for each character (Agile, Rugged, or Strong type as determined by GM).',
    failureEffect: 'Failure when stealing: You are spotted and must abandon plans. Failure by 5+: Caught in the act with consequences.',
    difficultyModifier: { success: 0, failure: 0 },
    effectOnSuccess: {
      name: 'Mounted',
      description: 'You have a mount for this Journey (Agile, Rugged, or Strong type).',
      applyToAll: true
    }
  },
  procureSupplies: {
    id: 'procureSupplies',
    name: 'Procure Supplies',
    skillSlug: 'diplomacy',
    altSkillSlug: 'survival',
    thirdSkillSlug: 'stealth',
    description: 'You spend time inventorying the party\'s supplies and procuring the proper provisions to outfit the group for the challenges ahead.',
    successEffect: 'Each of the Quartermaster\'s Supply Dice increase from a d6 to a d8.',
    failureEffect: 'No effect.',
    difficultyModifier: { success: 0, failure: 0 },
    effectOnSuccess: {
      name: 'Supplies Procured',
      description: 'Quartermaster\'s Supply Dice are upgraded to d8s.',
      applyToQuartermaster: true
    }
  },
  rallyTheParty: {
    id: 'rallyTheParty',
    name: 'Rally the Party',
    skillSlug: 'performance',
    description: 'You speak to or perform for your party members, mentally and emotionally preparing them for the long road ahead. Choose: Encouraging (Inspiration), Galvanising (+1 to checks), Hopeful (advantage on first encounter), Resolute (temp HP), or Solemn (+1 to saves).',
    successEffect: 'Party gains the chosen benefit until the end of the Journey.',
    failureEffect: 'No effect.',
    difficultyModifier: { success: 0, failure: 0 },
    effectOnSuccess: {
      hasDropdown: true,
      dropdownOptions: 'RALLY_OPTIONS',
      applyToAll: true
    }
  },
  research: {
    id: 'research',
    name: 'Research',
    skillSlug: 'society',
    description: 'Poring over the records available at your origin, you search for relevant maps and information specific to the Journey you are about to undertake.',
    successEffect: 'Each party member may reroll a failed ability check once before the end of the Journey.',
    failureEffect: 'No effect.',
    difficultyModifier: { success: 0, failure: 0 },
    effectOnSuccess: {
      name: 'Research',
      description: 'May reroll a failed ability check once during this Journey.',
      applyToAll: true
    }
  },
  seekAdvice: {
    id: 'seekAdvice',
    name: 'Seek Advice',
    skillSlug: 'perception',
    altSkillSlug: 'diplomacy',
    description: 'You ask local inhabitants or travellers to provide advice about the Journey you are about to make.',
    successEffect: 'Each party member has advantage on Wisdom checks and saving throws until the Journey ends. A character loses this benefit the first time they fail a Wisdom check or saving throw.',
    failureEffect: 'No effect.',
    difficultyModifier: { success: 0, failure: 0 },
    effectOnSuccess: {
      name: 'Seek Advice',
      description: 'Advantage on Wisdom checks and saving throws (lose on first failure).',
      applyToAll: true
    }
  },
  studyTheWeather: {
    id: 'studyTheWeather',
    name: 'Study the Weather',
    skillSlug: 'nature',
    description: 'You survey the state of nature around you and do your best to forecast the weather, allowing you to prepare accordingly.',
    successEffect: 'Journey Difficulty reduced by 2.',
    failureEffect: 'No effect.',
    difficultyModifier: { success: -2, failure: 0 }
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

/**
 * Uncharted Journeys - Journey Roles
 * Defines the four journey roles and their abilities
 */

export const ROLES = {
  leader: {
    id: 'leader',
    name: 'Leader',
    icon: 'fa-crown',
    emoji: '👑',
    description: 'The Leader keeps spirits high and the group moving forward together.',
    primarySkill: 'diplomacy',
    alternativeSkill: 'perception',
    groupCheckDescription: 'Rally the party and maintain morale.',
    ability: {
      name: 'Inspirational Resolve',
      description: 'Once per Journey, as a Reaction when a party member fails a saving throw or ability check, you can allow them to reroll. You can use this ability once per party member per Journey.',
      usesPerJourney: 1,
      shortDescription: 'Reaction: Allow an ally to reroll a failed check (1/party member/journey)'
    }
  },
  outrider: {
    id: 'outrider',
    name: 'Outrider',
    icon: 'fa-horse',
    emoji: '🏇',
    description: 'The Outrider scouts ahead, finding safe paths and avoiding danger.',
    primarySkill: 'survival',
    alternativeSkill: 'nature',
    groupCheckDescription: 'Scout ahead for safe passage.',
    ability: {
      name: 'Find the Path',
      description: 'Once per Journey when the GM rolls to determine the Encounter Type, you can also roll. The GM tells you both results, and you choose which Encounter type the group faces.',
      usesPerJourney: 1,
      shortDescription: 'Once/journey: Roll encounter type and choose between your roll or GM\'s'
    }
  },
  quartermaster: {
    id: 'quartermaster',
    name: 'Quartermaster',
    icon: 'fa-backpack',
    emoji: '🎒',
    description: 'The Quartermaster manages supplies and keeps the party provisioned.',
    primarySkill: 'athletics',
    alternativeSkill: 'crafting',
    groupCheckDescription: 'Manage supplies and maintain equipment.',
    ability: {
      name: 'Well Prepared',
      description: 'At the start of Stage 3, gain Supply Dice equal to your Proficiency Bonus (d6s, or d8s with Procure Supplies). As a Reaction when an ally makes an ability check, spend a Supply Die to add it to their result.',
      supplyDice: {
        count: 3,
        die: 'd6',
        upgradedDie: 'd8'
      },
      shortDescription: 'Supply Dice (d6): Reaction to add die to ally\'s ability check'
    }
  },
  sentry: {
    id: 'sentry',
    name: 'Sentry',
    icon: 'fa-eye',
    emoji: '👁️',
    description: 'The Sentry keeps watch, alerting the party to dangers and opportunities.',
    primarySkill: 'perception',
    alternativeSkill: 'stealth',
    groupCheckDescription: 'Watch for dangers and opportunities.',
    ability: {
      name: 'Ever Vigilant',
      description: 'At the start of Stage 3, gain Focus Dice equal to your Proficiency Bonus (d6s). As a Reaction when an ally makes a saving throw, spend a Focus Die to add it to their result. You can also spend a Focus Die to grant +1d6 to an ally\'s Initiative.',
      focusDice: {
        count: 3,
        die: 'd6'
      },
      shortDescription: 'Focus Dice (d6): Reaction to add die to ally\'s save or Initiative'
    }
  }
};

/**
 * Get the skill slug for a role's group travel check
 * @param {string} roleId - The role ID
 * @param {boolean} useAlternative - Whether to use the alternative skill
 * @returns {string} The PF2E skill slug
 */
export function getRoleSkill(roleId, useAlternative = false) {
  const role = ROLES[roleId];
  if (!role) return 'perception';
  return useAlternative ? role.alternativeSkill : role.primarySkill;
}

/**
 * Get a role by its ID
 * @param {string} roleId - The role ID
 * @returns {Object|undefined} The role object or undefined
 */
export function getRoleById(roleId) {
  return ROLES[roleId];
}

/**
 * Get all roles as an array for iteration
 * @returns {Array} Array of role objects
 */
export function getRolesArray() {
  return Object.values(ROLES);
}

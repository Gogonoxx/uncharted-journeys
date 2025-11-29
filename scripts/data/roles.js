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
    alternativeSkill: 'intimidation',
    groupCheckDescription: 'Rally the party and maintain morale.',
    ability: {
      name: 'Inspirational Resolve',
      description: 'Once per journey, when a party member fails a check, the Leader can give an inspiring speech. The party member may reroll the check with a +2 circumstance bonus.',
      usesPerJourney: 1
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
      description: 'Once per journey, the Outrider can spend 1 hour scouting. On a successful Survival check (DC = Journey Difficulty), reduce the number of encounters by 1 (minimum 1).',
      usesPerJourney: 1
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
      description: 'The Quartermaster has a pool of Supply Dice (d6s by default, upgradeable to d8s). They can roll these dice to reduce damage taken, negate conditions, or provide bonuses during encounters.',
      supplyDice: {
        count: 3,
        die: 'd6',
        upgradedDie: 'd8'
      }
    },
    endOfJourneyBonus: {
      description: 'Add Strength modifier as a circumstance bonus to all party members\' Fortitude saves at journey\'s end.'
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
      description: 'The Sentry has a pool of Focus Dice (d6s by default). They can roll these dice to gain bonuses to Perception checks, grant allies bonuses to initiative, or spot hidden threats.',
      focusDice: {
        count: 3,
        die: 'd6'
      }
    },
    arrivalRoll: {
      description: 'At journey\'s end, the Sentry rolls Xd12 (where X = Wisdom modifier, minimum 1) and takes the highest result to determine arrival circumstances.'
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

/**
 * Uncharted Journeys - Journey Roles (PF2E Redesign)
 * Defines the four journey roles and their abilities with German names
 */

export const ROLES = {
  leader: {
    id: 'leader',
    name: 'Anführer',
    nameEn: 'Leader',
    icon: 'fa-crown',
    emoji: '👑',
    description: 'Der Anführer hält die Stimmung hoch und führt die Gruppe zusammen.',
    primarySkill: 'diplomacy',
    alternativeSkill: 'performance',
    groupCheckDescription: 'Die Gruppe zusammenhalten und die Moral aufrechterhalten.',
    ability: {
      name: 'Inspirierende Worte',
      nameEn: 'Inspiring Words',
      description: 'Als Reaktion, wenn ein Verbündeter einen Check oder Save fehlschlägt, darf dieser neu würfeln. Du kannst dies einmal pro Verbündetem pro Reise einsetzen.',
      trigger: 'allyFailsCheck',
      usageLimit: 'perAllyPerJourney',
      shortDescription: 'Reaktion: Verbündeter darf fehlgeschlagenen Wurf wiederholen (1x pro Verbündetem)'
    }
  },

  outrider: {
    id: 'outrider',
    name: 'Späher',
    nameEn: 'Outrider',
    icon: 'fa-horse',
    emoji: '🏇',
    description: 'Der Späher erkundet voraus, findet sichere Wege und vermeidet Gefahren.',
    primarySkill: 'survival',
    alternativeSkill: 'nature',
    groupCheckDescription: 'Voraus spähen für sichere Passage.',
    ability: {
      name: 'Vorauskundschaft',
      nameEn: 'Scout Ahead',
      description: 'Zweimal pro Reise kannst du den nächsten Ort aufdecken UND den Encounter-Typ erfahren.',
      trigger: 'onDemand',
      usesPerJourney: 2,
      effect: {
        type: 'revealNextNodeAndEncounter'
      },
      shortDescription: '2x/Reise: Nächsten Ort + Encounter-Typ aufdecken'
    }
  },

  quartermaster: {
    id: 'quartermaster',
    name: 'Versorgungsmeister',
    nameEn: 'Quartermaster',
    icon: 'fa-backpack',
    emoji: '🎒',
    description: 'Der Versorgungsmeister verwaltet Vorräte und hält die Gruppe versorgt.',
    primarySkill: 'athletics',
    alternativeSkill: 'crafting',
    groupCheckDescription: 'Vorräte verwalten und Ausrüstung instand halten.',
    ability: {
      name: 'Vorräte Teilen',
      nameEn: 'Share Supplies',
      description: 'Einmal pro Spieler pro Reise kannst du EINES wählen: Heile 1 Stufe Exhaustion bei diesem Spieler ODER stelle 1d6 Hit Dice für diesen Spieler wieder her.',
      trigger: 'onDemand',
      usageLimit: 'perPlayerPerJourney',
      effect: {
        type: 'choice',
        options: [
          {
            id: 'healExhaustion',
            name: 'Exhaustion heilen',
            description: 'Heile 1 Stufe Exhaustion',
            effect: { type: 'exhaustion', value: -1 }
          },
          {
            id: 'restoreHitDice',
            name: 'Hit Dice wiederherstellen',
            description: 'Stelle 1d6 Hit Dice wieder her',
            effect: { type: 'hitDice', value: '1d6' }
          }
        ]
      },
      shortDescription: '1x/Spieler: Heile Exhaustion ODER stelle 1d6 Hit Dice wieder her'
    }
  },

  sentry: {
    id: 'sentry',
    name: 'Wächter',
    nameEn: 'Sentry',
    icon: 'fa-eye',
    emoji: '👁️',
    description: 'Der Wächter hält Wache und warnt die Gruppe vor Gefahren.',
    primarySkill: 'perception',
    alternativeSkill: 'stealth',
    groupCheckDescription: 'Auf Gefahren und Gelegenheiten achten.',
    ability: {
      name: 'Taktischer Rückzug',
      nameEn: 'Tactical Retreat',
      description: 'Einmal pro Reise, vor einem Kampf (Danger Afoot, Deadly Fight, Monster Hunt): Die Gruppe kann VOR dem Kampf fliehen. Du machst einen Constitution Save. Bei Erfolg: Keine negativen Folgen. Bei Fehlschlag: Gruppe erhält 1 Stufe Exhaustion.',
      trigger: 'beforeCombatEncounter',
      usesPerJourney: 1,
      combatEncounterTypes: ['dangerAfoot', 'deadlyFight', 'monsterHunt'],
      effect: {
        type: 'fleeWithCheck',
        checkType: 'constitution',
        successEffect: null,
        failureEffect: {
          type: 'exhaustion',
          target: 'all',
          value: 1
        }
      },
      shortDescription: '1x/Reise: Vor Kampf fliehen (Con Save, Fehlschlag = Exhaustion)'
    }
  }
};

/**
 * Combat encounter types that trigger Sentry's Tactical Retreat ability
 */
export const COMBAT_ENCOUNTER_TYPES = ['dangerAfoot', 'deadlyFight', 'monsterHunt'];

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

/**
 * Check if an encounter type triggers the Sentry's Tactical Retreat ability
 * @param {string} encounterType - The encounter type ID
 * @returns {boolean} True if the encounter type is a combat type
 */
export function isCombatEncounterType(encounterType) {
  return COMBAT_ENCOUNTER_TYPES.includes(encounterType);
}

/**
 * Get role tracking state for a new journey
 * @returns {Object} Initial tracking state for all role abilities
 */
export function getInitialRoleTracking() {
  return {
    leader: {
      usedOnAllies: [] // Array of actor IDs that have received the reroll
    },
    outrider: {
      scoutUsesRemaining: 2 // Vorauskundschaft: 2x pro Reise
    },
    quartermaster: {
      usedOnPlayers: [] // Array of actor IDs that have received supplies
    },
    sentry: {
      tacticalRetreatUsed: false
    }
  };
}

/**
 * Check if the Leader can use Inspiring Words on a specific ally
 * @param {Object} tracking - Role tracking state
 * @param {string} allyId - The ally's actor ID
 * @returns {boolean} True if the ability can be used on this ally
 */
export function canLeaderInspire(tracking, allyId) {
  return !tracking.leader.usedOnAllies.includes(allyId);
}

/**
 * Check if the Outrider can use Vorauskundschaft (Scout Ahead)
 * @param {Object} tracking - Role tracking state
 * @returns {boolean} True if the ability can be used
 */
export function canOutriderScout(tracking) {
  return (tracking.outrider.scoutUsesRemaining ?? 0) > 0;
}

/**
 * Get remaining scout uses for the Outrider
 * @param {Object} tracking - Role tracking state
 * @returns {number} Number of remaining uses
 */
export function getOutriderScoutUsesRemaining(tracking) {
  return tracking.outrider.scoutUsesRemaining ?? 0;
}

/**
 * Check if the Quartermaster can share supplies with a specific player
 * @param {Object} tracking - Role tracking state
 * @param {string} playerId - The player's actor ID
 * @returns {boolean} True if the ability can be used on this player
 */
export function canQuartermasterShare(tracking, playerId) {
  return !tracking.quartermaster.usedOnPlayers.includes(playerId);
}

/**
 * Check if the Sentry can use Tactical Retreat
 * @param {Object} tracking - Role tracking state
 * @returns {boolean} True if the ability can be used
 */
export function canSentryRetreat(tracking) {
  return !tracking.sentry.tacticalRetreatUsed;
}

/**
 * Uncharted Journeys - Preparations (PF2E Redesign)
 * All preparations with 4 success levels and German names
 */

/**
 * Base DC for preparation checks (uses journey DC)
 */
export const PREPARATION_BASE_DC = 13;

/**
 * Icon mapping for preparation effects
 * Uses standard Foundry VTT icons that are guaranteed to exist
 */
export const PREPARATION_ICONS = {
  // Verbündeten Unterstützen - Helping hands (PF2E aid icon)
  assistAlly: 'systems/pf2e/icons/spells/guidance.webp',
  // Tränke Brauen - Potion flask (Foundry core icon)
  brewTonics: 'icons/consumables/potions/potion-flask-corked-orange.webp',
  // Feiern - Celebration/party (Foundry core icon)
  carouse: 'icons/consumables/drinks/alcohol-jug-spirits-brown.webp',
  // Route Planen - Map/scroll
  chartCourse: 'systems/pf2e/icons/equipment/adventuring-gear/map.webp',
  // Das Okkulte Befragen - Crystal ball/divination
  consultTheOccult: 'systems/pf2e/icons/spells/augury.webp',
  // Gepäck Packen - Backpack
  packUp: 'systems/pf2e/icons/equipment/adventuring-gear/backpack.webp',
  // Festmahl Bereiten - Feast/food
  prepareAFeast: 'systems/pf2e/icons/equipment/consumables/other-consumables/rations.webp',
  // Gruppe Vorbereiten - Leadership/group
  prepareTheParty: 'systems/pf2e/icons/spells/inspire-courage.webp',
  // Reittiere Beschaffen - Horse (Foundry core icon)
  procureMounts: 'icons/environment/creatures/horse-brown.webp',
  // Vorräte Beschaffen - Supplies/crate
  procureSupplies: 'systems/pf2e/icons/equipment/adventuring-gear/adventurers-pack.webp',
  // Gruppe Motivieren - Rally/inspiration
  rallyTheParty: 'systems/pf2e/icons/spells/inspire-heroics.webp',
  // Nachforschungen - Book/research
  research: 'systems/pf2e/icons/equipment/adventuring-gear/scholarly-journal.webp',
  // Rat Einholen - Seeking advice
  seekAdvice: 'systems/pf2e/icons/spells/read-omens.webp',
  // Wetter Studieren - Weather/nature
  studyTheWeather: 'systems/pf2e/icons/spells/control-weather.webp'
};

/**
 * Legacy RALLY_OPTIONS for backwards compatibility with main.js
 * The new PF2E design uses simple Will save bonuses instead of dropdown options
 */
export const RALLY_OPTIONS = {};

/**
 * Degree of success enumeration
 */
export const DEGREE_OF_SUCCESS = {
  CRITICAL_SUCCESS: 'criticalSuccess',
  SUCCESS: 'success',
  FAILURE: 'failure',
  CRITICAL_FAILURE: 'criticalFailure'
};

/**
 * Calculate degree of success from roll result
 * @param {number} total - Roll total
 * @param {number} dc - Difficulty class
 * @returns {string} Degree of success
 */
export function calculateDegreeOfSuccess(total, dc) {
  const difference = total - dc;
  if (difference >= 10) return DEGREE_OF_SUCCESS.CRITICAL_SUCCESS;
  if (difference >= 0) return DEGREE_OF_SUCCESS.SUCCESS;
  if (difference >= -10) return DEGREE_OF_SUCCESS.FAILURE;
  return DEGREE_OF_SUCCESS.CRITICAL_FAILURE;
}

/**
 * All available preparations - PF2E Redesign with German names
 * Each preparation has 4 success levels: criticalSuccess, success, failure, criticalFailure
 */
export const PREPARATIONS = {
  assistAlly: {
    id: 'assistAlly',
    name: 'Verbündeten Unterstützen',
    nameEn: 'Assist Ally',
    skillSlug: 'diplomacy',
    description: 'Du unterstützt einen Verbündeten bei seinen Vorbereitungen.',
    outcomes: {
      criticalSuccess: {
        description: 'Ein Verbündeter würfelt seine Vorbereitung mit Fortune (2x würfeln, besser nehmen).',
        effect: { type: 'fortune', target: 'ally' }
      },
      success: {
        description: 'Ein Verbündeter würfelt seine Vorbereitung mit Fortune (2x würfeln, besser nehmen).',
        effect: { type: 'fortune', target: 'ally' }
      },
      failure: {
        description: 'Kein Effekt.',
        effect: null
      },
      criticalFailure: {
        description: 'Kein Effekt.',
        effect: null
      }
    }
  },

  brewTonics: {
    id: 'brewTonics',
    name: 'Tränke Brauen',
    nameEn: 'Brew Tonics',
    skillSlug: 'crafting',
    description: 'Du stärkst deine Gruppe mit kräftigenden Gebräuen, Tränken, Salben oder Tinkturen.',
    outcomes: {
      criticalSuccess: {
        description: '+2 Status auf Reflex-Saves (alle, ganze Reise).',
        effect: {
          type: 'flatModifier',
          target: 'all',
          duration: 'journey',
          rules: [{
            key: 'FlatModifier',
            selector: 'reflex',
            value: 2,
            type: 'status',
            label: 'Tränke Brauen (Krit)'
          }]
        }
      },
      success: {
        description: '+1 Status auf Reflex-Saves (alle, ganze Reise).',
        effect: {
          type: 'flatModifier',
          target: 'all',
          duration: 'journey',
          rules: [{
            key: 'FlatModifier',
            selector: 'reflex',
            value: 1,
            type: 'status',
            label: 'Tränke Brauen'
          }]
        }
      },
      failure: {
        description: 'Kein Effekt.',
        effect: null
      },
      criticalFailure: {
        description: '-1 Status auf Reflex-Saves (alle, ganze Reise).',
        effect: {
          type: 'flatModifier',
          target: 'all',
          duration: 'journey',
          rules: [{
            key: 'FlatModifier',
            selector: 'reflex',
            value: -1,
            type: 'status',
            label: 'Tränke Brauen (Fehlschlag)'
          }]
        }
      }
    }
  },

  carouse: {
    id: 'carouse',
    name: 'Feiern',
    nameEn: 'Carouse',
    skillSlug: 'athletics',
    altSkillSlug: 'performance',
    description: 'Du entscheidest, dass der beste Weg sich auf die Reise vorzubereiten ist, das Leben jetzt zu genießen — Bars besuchen, gutes Essen genießen und Geschichten mit den Einheimischen austauschen.',
    outcomes: {
      criticalSuccess: {
        description: '+2 Status auf ALLE Saves (persönlich) + Reise DC -2.',
        effect: {
          type: 'combined',
          effects: [
            {
              type: 'flatModifier',
              target: 'self',
              duration: 'journey',
              rules: [
                { key: 'FlatModifier', selector: 'fortitude', value: 2, type: 'status', label: 'Feiern (Krit)' },
                { key: 'FlatModifier', selector: 'reflex', value: 2, type: 'status', label: 'Feiern (Krit)' },
                { key: 'FlatModifier', selector: 'will', value: 2, type: 'status', label: 'Feiern (Krit)' }
              ]
            },
            { type: 'dcModifier', value: -2 }
          ]
        }
      },
      success: {
        description: '+1 Status auf ALLE Saves (persönlich).',
        effect: {
          type: 'flatModifier',
          target: 'self',
          duration: 'journey',
          rules: [
            { key: 'FlatModifier', selector: 'fortitude', value: 1, type: 'status', label: 'Feiern' },
            { key: 'FlatModifier', selector: 'reflex', value: 1, type: 'status', label: 'Feiern' },
            { key: 'FlatModifier', selector: 'will', value: 1, type: 'status', label: 'Feiern' }
          ]
        }
      },
      failure: {
        description: '-1 Status auf ALLE Saves (persönlich).',
        effect: {
          type: 'flatModifier',
          target: 'self',
          duration: 'journey',
          rules: [
            { key: 'FlatModifier', selector: 'fortitude', value: -1, type: 'status', label: 'Feiern (Fehlschlag)' },
            { key: 'FlatModifier', selector: 'reflex', value: -1, type: 'status', label: 'Feiern (Fehlschlag)' },
            { key: 'FlatModifier', selector: 'will', value: -1, type: 'status', label: 'Feiern (Fehlschlag)' }
          ]
        }
      },
      criticalFailure: {
        description: '-2 Status auf ALLE Saves (persönlich) + keine Rast vor Reisebeginn.',
        effect: {
          type: 'combined',
          effects: [
            {
              type: 'flatModifier',
              target: 'self',
              duration: 'journey',
              rules: [
                { key: 'FlatModifier', selector: 'fortitude', value: -2, type: 'status', label: 'Feiern (Krit Fehlschlag)' },
                { key: 'FlatModifier', selector: 'reflex', value: -2, type: 'status', label: 'Feiern (Krit Fehlschlag)' },
                { key: 'FlatModifier', selector: 'will', value: -2, type: 'status', label: 'Feiern (Krit Fehlschlag)' }
              ]
            },
            { type: 'noRest' }
          ]
        }
      }
    }
  },

  chartCourse: {
    id: 'chartCourse',
    name: 'Route Planen',
    nameEn: 'Chart Course',
    skillSlug: 'survival',
    altSkillSlug: 'crafting',
    description: 'Mit den Informationen über Herkunft und Ziel legst du den bestmöglichen Kurs für eure Reise fest.',
    outcomes: {
      criticalSuccess: {
        description: 'Decke 1-3 Orte auf (je nach Reiselänge) + erfahre exakten Encounter-Typ für EINEN davon.',
        effect: {
          type: 'revealNodes',
          count: 'byJourneyLength', // 1-3 based on journey length
          revealEncounterType: 1
        }
      },
      success: {
        description: 'Decke 1-3 Orte auf (je nach Reiselänge).',
        effect: {
          type: 'revealNodes',
          count: 'byJourneyLength'
        }
      },
      failure: {
        description: 'Ein Ort bekommt eine falsche Farbe.',
        effect: {
          type: 'fakeColor',
          count: 1
        }
      },
      criticalFailure: {
        description: 'Zwei Orte bekommen falsche Farben.',
        effect: {
          type: 'fakeColor',
          count: 2
        }
      }
    }
  },

  consultTheOccult: {
    id: 'consultTheOccult',
    name: 'Das Okkulte Befragen',
    nameEn: 'Consult the Occult',
    skillSlug: 'arcana',
    altSkillSlug: 'occultism',
    description: 'Du verbringst einige Stunden damit, esoterische Traditionen zu praktizieren und nach Zeichen und Omen für die bevorstehenden Schwierigkeiten zu suchen.',
    outcomes: {
      criticalSuccess: {
        description: 'Erhalte 2x die Fähigkeit, einen Encounter-Typ neu zu würfeln.',
        effect: {
          type: 'encounterReroll',
          count: 2,
          owner: 'player'
        }
      },
      success: {
        description: 'Erhalte 1x die Fähigkeit, einen Encounter-Typ neu zu würfeln.',
        effect: {
          type: 'encounterReroll',
          count: 1,
          owner: 'player'
        }
      },
      failure: {
        description: 'Der GM erhält 1x die Fähigkeit, einen Encounter-Typ neu zu würfeln.',
        effect: {
          type: 'encounterReroll',
          count: 1,
          owner: 'gm'
        }
      },
      criticalFailure: {
        description: 'Der GM erhält 2x die Fähigkeit, einen Encounter-Typ neu zu würfeln.',
        effect: {
          type: 'encounterReroll',
          count: 2,
          owner: 'gm'
        }
      }
    }
  },

  packUp: {
    id: 'packUp',
    name: 'Gepäck Packen',
    nameEn: 'Pack Up',
    skillSlug: 'athletics',
    description: 'Du schleppst, trägst und konsolidierst die Vorräte der Gruppe, dann organisierst und packst du sie sorgfältig, um sie so leicht wie möglich zu transportieren.',
    outcomes: {
      criticalSuccess: {
        description: '+2 Status auf Fortitude-Saves (alle, ganze Reise).',
        effect: {
          type: 'flatModifier',
          target: 'all',
          duration: 'journey',
          rules: [{
            key: 'FlatModifier',
            selector: 'fortitude',
            value: 2,
            type: 'status',
            label: 'Gepäck Packen (Krit)'
          }]
        }
      },
      success: {
        description: '+1 Status auf Fortitude-Saves (alle, ganze Reise).',
        effect: {
          type: 'flatModifier',
          target: 'all',
          duration: 'journey',
          rules: [{
            key: 'FlatModifier',
            selector: 'fortitude',
            value: 1,
            type: 'status',
            label: 'Gepäck Packen'
          }]
        }
      },
      failure: {
        description: 'Kein Effekt.',
        effect: null
      },
      criticalFailure: {
        description: '-1 Status auf Fortitude-Saves (alle, ganze Reise).',
        effect: {
          type: 'flatModifier',
          target: 'all',
          duration: 'journey',
          rules: [{
            key: 'FlatModifier',
            selector: 'fortitude',
            value: -1,
            type: 'status',
            label: 'Gepäck Packen (Fehlschlag)'
          }]
        }
      }
    }
  },

  prepareAFeast: {
    id: 'prepareAFeast',
    name: 'Festmahl Bereiten',
    nameEn: 'Prepare a Feast',
    skillSlug: 'survival',
    altSkillSlug: 'crafting',
    description: 'Du bereitest ein Festmahl vor, einfach und herzhaft oder aufwendig und dekadent, und verwöhnst deine Gruppe mit gutem Essen und Gesellschaft, um ihre Stimmung vor Reisebeginn zu heben.',
    outcomes: {
      criticalSuccess: {
        description: 'Ignoriere erstes Exhaustion (alle) + Reise DC -2.',
        effect: {
          type: 'combined',
          effects: [
            {
              type: 'ignoreExhaustion',
              target: 'all',
              count: 1
            },
            { type: 'dcModifier', value: -2 }
          ]
        }
      },
      success: {
        description: 'Ignoriere erstes Exhaustion (alle) + Reise DC -1.',
        effect: {
          type: 'combined',
          effects: [
            {
              type: 'ignoreExhaustion',
              target: 'all',
              count: 1
            },
            { type: 'dcModifier', value: -1 }
          ]
        }
      },
      failure: {
        description: 'Kein Effekt.',
        effect: null
      },
      criticalFailure: {
        description: 'Alle Spieler starten mit 1 Stufe Exhaustion.',
        effect: {
          type: 'exhaustion',
          target: 'all',
          value: 1
        }
      }
    }
  },

  prepareTheParty: {
    id: 'prepareTheParty',
    name: 'Gruppe Vorbereiten',
    nameEn: 'Prepare the Party',
    skillSlug: 'diplomacy',
    description: 'Du koordinierst und organisierst die Gruppe, um die Reise effizienter zu gestalten.',
    outcomes: {
      criticalSuccess: {
        description: '-1 Encounter insgesamt + +1 Status auf alle Saves.',
        effect: {
          type: 'combined',
          effects: [
            { type: 'encounterCount', value: -1 },
            {
              type: 'flatModifier',
              target: 'all',
              duration: 'journey',
              rules: [
                { key: 'FlatModifier', selector: 'fortitude', value: 1, type: 'status', label: 'Gruppe Vorbereiten (Krit)' },
                { key: 'FlatModifier', selector: 'reflex', value: 1, type: 'status', label: 'Gruppe Vorbereiten (Krit)' },
                { key: 'FlatModifier', selector: 'will', value: 1, type: 'status', label: 'Gruppe Vorbereiten (Krit)' }
              ]
            }
          ]
        }
      },
      success: {
        description: '-1 Encounter insgesamt.',
        effect: {
          type: 'encounterCount',
          value: -1
        }
      },
      failure: {
        description: 'Kein Effekt.',
        effect: null
      },
      criticalFailure: {
        description: '+1 Encounter insgesamt.',
        effect: {
          type: 'encounterCount',
          value: 1
        }
      }
    }
  },

  procureMounts: {
    id: 'procureMounts',
    name: 'Reittiere Beschaffen',
    nameEn: 'Procure Mounts',
    skillSlug: 'diplomacy',
    altSkillSlug: 'stealth',
    description: 'Du suchst nach Reittieren, um eure Gruppe während der Reise zu transportieren. Du kannst Reittiere kaufen oder versuchen, sie zu stehlen.',
    // Only 2 outcome levels - success effect is strong enough
    twoLevelOutcome: true,
    outcomes: {
      criticalSuccess: {
        description: 'Erhalte die Fähigkeit, EIN Ort komplett zu überspringen.',
        effect: {
          type: 'nodeSkip',
          count: 1
        }
      },
      success: {
        description: 'Erhalte die Fähigkeit, EIN Ort komplett zu überspringen.',
        effect: {
          type: 'nodeSkip',
          count: 1
        }
      },
      failure: {
        description: 'Kein Effekt.',
        effect: null
      },
      criticalFailure: {
        description: 'Kein Effekt.',
        effect: null
      }
    }
  },

  procureSupplies: {
    id: 'procureSupplies',
    name: 'Vorräte Beschaffen',
    nameEn: 'Procure Supplies',
    skillSlug: 'diplomacy',
    altSkillSlug: 'survival',
    thirdSkillSlug: 'stealth',
    description: 'Du inventarisierst die Vorräte der Gruppe und beschaffst die richtigen Versorgungsgüter, um die Gruppe für die bevorstehenden Herausforderungen auszustatten.',
    outcomes: {
      criticalSuccess: {
        description: 'Jeder Spieler erhält +4 zusätzliche Hit Dice.',
        effect: {
          type: 'hitDice',
          target: 'all',
          value: 4
        }
      },
      success: {
        description: 'Jeder Spieler erhält +2 zusätzliche Hit Dice.',
        effect: {
          type: 'hitDice',
          target: 'all',
          value: 2
        }
      },
      failure: {
        description: 'Kein Effekt.',
        effect: null
      },
      criticalFailure: {
        description: 'Jeder Spieler verliert 2 Hit Dice.',
        effect: {
          type: 'hitDice',
          target: 'all',
          value: -2
        }
      }
    }
  },

  rallyTheParty: {
    id: 'rallyTheParty',
    name: 'Gruppe Motivieren',
    nameEn: 'Rally the Party',
    skillSlug: 'performance',
    description: 'Du sprichst zu oder trittst vor deinen Gruppenmitgliedern auf, um sie mental und emotional auf die lange Reise vorzubereiten.',
    outcomes: {
      criticalSuccess: {
        description: '+2 Status auf Will-Saves (alle, ganze Reise).',
        effect: {
          type: 'flatModifier',
          target: 'all',
          duration: 'journey',
          rules: [{
            key: 'FlatModifier',
            selector: 'will',
            value: 2,
            type: 'status',
            label: 'Gruppe Motivieren (Krit)'
          }]
        }
      },
      success: {
        description: '+1 Status auf Will-Saves (alle, ganze Reise).',
        effect: {
          type: 'flatModifier',
          target: 'all',
          duration: 'journey',
          rules: [{
            key: 'FlatModifier',
            selector: 'will',
            value: 1,
            type: 'status',
            label: 'Gruppe Motivieren'
          }]
        }
      },
      failure: {
        description: 'Kein Effekt.',
        effect: null
      },
      criticalFailure: {
        description: '-1 Status auf Will-Saves (alle, ganze Reise).',
        effect: {
          type: 'flatModifier',
          target: 'all',
          duration: 'journey',
          rules: [{
            key: 'FlatModifier',
            selector: 'will',
            value: -1,
            type: 'status',
            label: 'Gruppe Motivieren (Fehlschlag)'
          }]
        }
      }
    }
  },

  research: {
    id: 'research',
    name: 'Nachforschungen',
    nameEn: 'Research',
    skillSlug: 'society',
    description: 'Du wälzt die verfügbaren Aufzeichnungen an deinem Ausgangspunkt und suchst nach relevanten Karten und Informationen für die bevorstehende Reise.',
    outcomes: {
      criticalSuccess: {
        description: 'Decke 2 Orte auf + erfahre exakten Encounter-Typ für BEIDE.',
        effect: {
          type: 'revealNodes',
          count: 2,
          revealEncounterType: 2
        }
      },
      success: {
        description: 'Decke 1 Ort auf + erfahre exakten Encounter-Typ.',
        effect: {
          type: 'revealNodes',
          count: 1,
          revealEncounterType: 1
        }
      },
      failure: {
        description: 'Ein Ort bekommt eine falsche Farbe.',
        effect: {
          type: 'fakeColor',
          count: 1
        }
      },
      criticalFailure: {
        description: 'Zwei Orte bekommen falsche Farben.',
        effect: {
          type: 'fakeColor',
          count: 2
        }
      }
    }
  },

  seekAdvice: {
    id: 'seekAdvice',
    name: 'Rat Einholen',
    nameEn: 'Seek Advice',
    skillSlug: 'perception',
    altSkillSlug: 'diplomacy',
    description: 'Du fragst Einheimische oder Reisende um Rat für die bevorstehende Reise.',
    outcomes: {
      criticalSuccess: {
        description: 'Wähle eine Farbe und decke ZWEI Orte dieser Farbe auf.',
        effect: {
          type: 'revealByColor',
          count: 2,
          chooseColor: true
        }
      },
      success: {
        description: 'Wähle eine Farbe und decke EINEN Ort dieser Farbe auf.',
        effect: {
          type: 'revealByColor',
          count: 1,
          chooseColor: true
        }
      },
      failure: {
        description: 'Kein Effekt.',
        effect: null
      },
      criticalFailure: {
        description: 'Ein Ort bekommt eine falsche Farbe.',
        effect: {
          type: 'fakeColor',
          count: 1
        }
      }
    }
  },

  studyTheWeather: {
    id: 'studyTheWeather',
    name: 'Wetter Studieren',
    nameEn: 'Study the Weather',
    skillSlug: 'nature',
    description: 'Du beobachtest den Zustand der Natur um dich herum und versuchst das Wetter vorherzusagen, damit du dich entsprechend vorbereiten kannst.',
    outcomes: {
      criticalSuccess: {
        description: 'Reise DC -4.',
        effect: {
          type: 'dcModifier',
          value: -4
        }
      },
      success: {
        description: 'Reise DC -2.',
        effect: {
          type: 'dcModifier',
          value: -2
        }
      },
      failure: {
        description: 'Kein Effekt.',
        effect: null
      },
      criticalFailure: {
        description: 'Reise DC +2.',
        effect: {
          type: 'dcModifier',
          value: 2
        }
      }
    }
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

/**
 * Get the outcome for a preparation based on degree of success
 * @param {string} prepId - Preparation ID
 * @param {string} degree - Degree of success (from DEGREE_OF_SUCCESS)
 * @returns {Object|null} Outcome data or null
 */
export function getPreparationOutcome(prepId, degree) {
  const prep = getPreparation(prepId);
  if (!prep || !prep.outcomes) return null;
  return prep.outcomes[degree] ?? null;
}

/**
 * Calculate how many nodes to reveal based on journey length
 * @param {number} journeyLength - Total number of nodes in journey
 * @returns {number} Number of nodes to reveal (1-3)
 */
export function getRevealCountByJourneyLength(journeyLength) {
  if (journeyLength <= 4) return 1;
  if (journeyLength <= 8) return 2;
  return 3;
}

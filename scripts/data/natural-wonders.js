/**
 * Natural Wonders Data
 *
 * 10 interaktive Wonder-Typen mit festen Mechaniken.
 * Wonder-Typ wird VOR Claude-Generierung per 1d10 vorgewählt.
 * Claude generiert nur Flavor-Text, Mechaniken sind fest.
 */

export const NATURAL_WONDERS = {
  healing_spring: {
    id: "healing_spring",
    name: "Heilquelle",
    benefit: "Vollständig geheilt (alle HP)",
    cost: "Fort DC 18 oder Condition",
    mechanic: "Wer aus der Quelle trinkt, wird vollständig geheilt. Dafür Fort Save DC 18. Bei Fail: 1d4 Condition bis zur nächsten Rast (1 = Sickened 1, 2 = Clumsy 1, 3 = Stupefied 1, 4 = Frightened 1).",
    flavorHints: ["klares Wasser", "silbriger Schimmer", "heilige Steine", "warmer Dampf"],
    conditionTable: [
      { roll: 1, condition: "Sickened 1" },
      { roll: 2, condition: "Clumsy 1" },
      { roll: 3, condition: "Stupefied 1" },
      { roll: 4, condition: "Frightened 1" }
    ]
  },

  wishing_well: {
    id: "wishing_well",
    name: "Wunschbrunnen",
    benefit: "1d20 Effekt-Tabelle",
    cost: "Opfergabe: 1 beliebiges Item",
    mechanic: "Ein Item in den Brunnen werfen, dann 1d20 würfeln. Effekt tritt sofort ein.",
    flavorHints: ["alte Münzen am Grund", "flüsterndes Echo", "moosige Steine", "schimmerndes Wasser"],
    effectTable: [
      { roll: "1", effect: "Doomed 1 (permanent bis Remove Curse)" },
      { roll: "2-3", effect: "Drained 2 (bis Rast)" },
      { roll: "4-5", effect: "Stupefied 1 (bis Rast)" },
      { roll: "6-7", effect: "Clumsy 1 (bis Rast)" },
      { roll: "8-10", effect: "Nichts passiert" },
      { roll: "11-13", effect: "Heile 2d10+10 HP" },
      { roll: "14-15", effect: "Nächster Failed Save wird Success" },
      { roll: "16-17", effect: "Alle negativen Conditions entfernt" },
      { roll: "18-19", effect: "Reroll auf beliebigen Wurf heute" },
      { roll: "20", effect: "+1 AC ODER +1 Angriff ODER +1 Save (1 Tag, Spieler wählt)" }
    ]
  },

  elemental_spring: {
    id: "elemental_spring",
    name: "Elementarquelle",
    benefit: "+1d6 Elementarschaden (1 Tag)",
    cost: "-4 Stealth, Waffe leuchtet sichtbar",
    mechanic: "Eine Waffe in die Quelle tauchen. Element wird zufällig bestimmt (1d4: 1=Feuer, 2=Kälte, 3=Elektrizität, 4=Säure). Die Waffe macht +1d6 Elementarschaden für 1 Tag, leuchtet aber sichtbar und gibt -4 auf Stealth.",
    flavorHints: ["brodelndes Wasser", "farbige Blitze", "elementare Energie", "knisternde Luft"],
    elementTable: [
      { roll: 1, element: "Feuer", color: "rot-orange" },
      { roll: 2, element: "Kälte", color: "eisblau" },
      { roll: 3, element: "Elektrizität", color: "violett-weiß" },
      { roll: 4, element: "Säure", color: "giftgrün" }
    ]
  },

  fruit_tree: {
    id: "fruit_tree",
    name: "Fruchtbaum",
    benefit: "1d4 Healing Potions (Lesser)",
    cost: "-1 Skill Proficiency (1 Tag)",
    mechanic: "Der Baum trägt 1d4 magische Früchte, die wie Lesser Healing Potions wirken (2d8+5 HP). Wer eine Frucht isst, verliert für 1 Tag -1 auf eine zufällige Skill Proficiency (1d6: 1=Acrobatics, 2=Athletics, 3=Perception, 4=Stealth, 5=Arcana, 6=Nature).",
    flavorHints: ["goldene Früchte", "silberne Blätter", "süßer Duft", "uralte Rinde"]
  },

  echo_cave: {
    id: "echo_cave",
    name: "Echogrotte",
    benefit: "1 Frage wird beantwortet",
    cost: "Charakter-Geheimnis teilen",
    mechanic: "Die Grotte beantwortet eine Frage wahrheitsgemäß (GM entscheidet wie kryptisch). Dafür muss der Charakter ein persönliches Geheimnis laut aussprechen - alle Anwesenden hören es.",
    flavorHints: ["kristalline Wände", "unheimliches Echo", "flüsternde Stimmen", "schimmernde Stalaktiten"]
  },

  mist_pool: {
    id: "mist_pool",
    name: "Nebelteich",
    benefit: "Nächster erlittener Crit wird Normal Hit",
    cost: "Enfeebled 1 (bis Rast)",
    mechanic: "Im Nebel baden gibt Schutz: Der nächste kritische Treffer gegen den Charakter wird zu einem normalen Treffer reduziert (einmalig). Dafür Enfeebled 1 bis zur nächsten Rast.",
    flavorHints: ["dichter Nebel", "kühles Wasser", "traumhafte Stille", "verschwommene Konturen"]
  },

  moonstone: {
    id: "moonstone",
    name: "Mondstein",
    benefit: "1 Focus Point zurück",
    cost: "Fatigued (bis Rast)",
    mechanic: "Den Stein berühren gibt 1 Focus Point zurück. Dafür wird der Charakter Fatigued bis zur nächsten Rast.",
    flavorHints: ["silbrig leuchtend", "kühl wie Mondlicht", "alte Runen", "schwebende Partikel"]
  },

  whispering_tree: {
    id: "whispering_tree",
    name: "Flüsterbaum",
    benefit: "Warnung vor kommender Gefahr",
    cost: "Drained 1",
    mechanic: "Der Baum flüstert eine Warnung über die nächste Gefahr auf der Reise (GM gibt vagen Hinweis). Dafür Drained 1.",
    flavorHints: ["raschelnde Blätter", "Gesichter in der Rinde", "uralter Stamm", "flüsternder Wind"]
  },

  mirror_spring: {
    id: "mirror_spring",
    name: "Spiegelquelle",
    benefit: "Vision einer aktiven Front",
    cost: "Will DC 18 oder Stupefied 1",
    mechanic: "In die Quelle schauen zeigt eine Vision über eine der aktiven Fronten der Kampagne (GM wählt). Will Save DC 18 oder Stupefied 1 bis zur nächsten Rast.",
    flavorHints: ["perfekte Spiegelung", "tiefes Wasser", "seltsame Bilder", "hypnotische Oberfläche"]
  },

  lifebloom: {
    id: "lifebloom",
    name: "Lebensblume",
    benefit: "Wähle: Heal ODER Condition weg ODER Focus",
    cost: "Fatigued (bis Stadt-Rast)",
    mechanic: "Die Blume bietet EINE Option: (A) Heile 4d10 HP, ODER (B) Entferne eine Condition, ODER (C) Erhalte 1 Focus Point. Danach Fatigued bis zur Rast in einer Stadt (normale Rast reicht nicht).",
    flavorHints: ["leuchtende Blüte", "goldener Pollen", "süßer Nektar", "warmes Licht"]
  }
};

/**
 * Roll a random wonder type (1d10)
 * @returns {string} The wonder ID
 */
export function rollRandomWonder() {
  const keys = Object.keys(NATURAL_WONDERS);
  const index = Math.floor(Math.random() * keys.length);
  return keys[index];
}

/**
 * Get wonder data by ID
 * @param {string} wonderId - The wonder ID
 * @returns {Object|null} The wonder data or null
 */
export function getWonderData(wonderId) {
  return NATURAL_WONDERS[wonderId] || null;
}

/**
 * Get all wonder IDs
 * @returns {string[]} Array of wonder IDs
 */
export function getWonderIds() {
  return Object.keys(NATURAL_WONDERS);
}

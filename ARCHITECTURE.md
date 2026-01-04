# Uncharted Journeys - Architektur Dokumentation

**Letzte Aktualisierung:** 2024-12-23
**Version:** 2.4.0

## WICHTIG: VOR JEDER ÄNDERUNG LESEN!

Diese Dokumentation beschreibt die komplette Architektur des Uncharted Journeys Moduls.
**Bei Änderungen IMMER diese Datei konsultieren UND aktualisieren!**

---

## 1. SYSTEM-ÜBERSICHT

```
┌─────────────────────────────────────────────────────────────┐
│                    4-STAGE JOURNEY SYSTEM                    │
│                                                              │
│  Stage 1: SET ROUTE                                          │
│    └─ Distanz, Biome, Difficulty, Weather, Terrain           │
│                            ↓                                 │
│  Stage 2: PREPARE                                            │
│    └─ Rollen zuweisen, Vorbereitungen würfeln                │
│                            ↓                                 │
│  Stage 3: JOURNEY                                            │
│    └─ Encounters durchlaufen, Resolution, Nodes              │
│                            ↓                                 │
│  Stage 4: JOURNEY'S END                                      │
│    └─ Arrival, Exhaustion, Summary                           │
└─────────────────────────────────────────────────────────────┘
```

### Architektur-Pattern

```
┌─────────────────────────┐     ┌─────────────────────────┐
│   JourneyManagerApp     │     │    NodeEncounterApp     │
│   (Haupt-UI)            │     │    (Node-Popup)         │
│   - ApplicationV2       │     │    - Pro Node           │
│   - 4 Tabs (Stages)     │     │    - Kartenmarker       │
└───────────┬─────────────┘     └───────────┬─────────────┘
            │                               │
            └───────────────┬───────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│                  JourneySessionManager                       │
│  - Foundry Settings-basiert                                  │
│  - Persistenter Journey State                                │
│  - DataModel (JourneySessionModel)                          │
└───────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│                     DATA LAYER                               │
│  encounters.js | roles.js | encounter-type-rules.js         │
│  biome-locations.js | journey-tables.js | preparations.js   │
└─────────────────────────────────────────────────────────────┘
```

---

## 2. DATEI-STRUKTUR

```
modules/uncharted-journeys/
├── module.json                    # Foundry Modul-Definition
├── ARCHITECTURE.md                # DIESE DATEI!
├── scripts/
│   ├── main.js                    # Entry Point, Hooks, Globals
│   ├── journey-app.js             # JourneyManagerApp (Haupt-UI)
│   ├── node-encounter-app.js      # NodeEncounterApp (Node-Popup)
│   ├── journey-session.js         # Session State Management
│   ├── exhaustion-manager.js      # Exhaustion-Tracking
│   └── data/
│       ├── encounters.js          # 120 Orfnir Encounters (12×10)
│       ├── encounters_new.js      # Alternative Encounters
│       ├── encounter-type-rules.js # Die 12 Encounter-Kategorien + Resolution
│       ├── roles.js               # 4 Journey Roles + Abilities
│       ├── preparations.js        # Vorbereitungs-Aktionen
│       ├── journey-tables.js      # DCs, XP, Distanzen, Biomes
│       ├── biome-locations.js     # Biome-spezifische Orte
│       ├── natural-wonders.js     # Natural Wonders Daten
│       └── name-generator.js      # Orts-Namen-Generator
├── templates/
│   ├── parts/
│   │   └── tabs.hbs               # Tab-Navigation
│   ├── tabs/
│   │   ├── set-route.hbs          # Stage 1: Route Setup
│   │   ├── prepare.hbs            # Stage 2: Preparations
│   │   ├── journey.hbs            # Stage 3: Active Journey
│   │   └── journey-end.hbs        # Stage 4: Conclusion
│   ├── apps/
│   │   └── node-encounter.hbs     # Node Popup Template
│   ├── dialogs/
│   │   └── encounter-options.hbs  # Encounter-Optionen Dialog
│   ├── chat-*.hbs                 # Chat-Message Templates
│   │   ├── chat-encounter.hbs
│   │   ├── chat-choice.hbs
│   │   ├── chat-resolution-outcome.hbs
│   │   ├── chat-key-role-check.hbs
│   │   ├── chat-individual-saves.hbs
│   │   └── chat-group-check.hbs
│   └── encounter-roller.hbs       # Encounter Roller UI
├── styles/
│   └── journey.css                # Alle Styles
├── packs/
│   ├── encounter-types/           # Compendium: Encounter Rules
│   ├── roles/                     # Compendium: Role Journals
│   └── preparations/              # Compendium: Preparation Journals
└── lang/
    └── en.json                    # Übersetzungen
```

---

## 3. DIE 4 STAGES IM DETAIL

### Stage 1: SET ROUTE (set-route.hbs)

**Verantwortlich:** `JourneyManagerApp` Actions
- `setDistance`, `adjustWeather`, `adjustTerrain`
- `setBiome`, `addBiome`, `removeBiome`
- `toggleNemesis`, `adjustNemesis`
- `confirmRoute`

**Daten:**
```javascript
session = {
  route: {
    distance: 'short',      // short/medium/long/vast
    baseDifficulty: 0,      // Berechnet aus journey-tables.js
    weatherModifier: 0,
    terrainModifier: 0,
    nemesis: false,
    nemesisModifier: 0,
    biomes: ['forest']      // Array von Biome-IDs
  }
}
```

### Stage 2: PREPARE (prepare.hbs)

**Verantwortlich:** `JourneyManagerApp` Actions
- `assignRole`, `assignAllRoles`
- `rollPreparation`
- `sendPreparationList`, `sendRestOptions`, `sendSkillCheck`
- `setGroupCheckResult`
- `confirmPreparation`

**Daten:**
```javascript
session = {
  partyMembers: [
    {
      actorId: 'abc123',
      role: 'leader',           // leader/outrider/quartermaster/sentry
      isPrimary: true,
      preparationId: 'consult_occult',
      preparationResult: 'success'  // pending/criticalSuccess/success/failure/criticalFailure
    }
  ]
}
```

**Die 4 Rollen (roles.js):**

| Rolle | Name (DE) | Primary Skill | Ability |
|-------|-----------|---------------|---------|
| `leader` | Anführer | Diplomacy | Inspirierende Worte (Reroll für Verbündete) |
| `outrider` | Späher | Survival | Vorauskundschaft (2x Node aufdecken) |
| `quartermaster` | Versorgungsmeister | Athletics | Vorräte Teilen (Heal Exhaustion/Hit Dice) |
| `sentry` | Wächter | Perception | Taktischer Rückzug (Vor Kampf fliehen) |

### Stage 3: JOURNEY (journey.hbs)

**Verantwortlich:** `JourneyManagerApp` Actions
- `setPace`
- `addEncounter`, `removeEncounter`
- `rollEncounterType`, `rollEncounter`
- `sendEncounterToChat`
- `resolveEncounter`, `beginResolution`, `finalizeEncounter`
- `nextEncounter`, `completeJourney`
- `useRoleAbility`
- Node-Actions: `generateMarkers`, `revealMarker`, `resolveMarker`
- Biome-Nodes: `addBiomeNode`, `removeBiomeNode`, `rollBiomeNodeEncounter`

**Encounter-Resolution-Flow:**
```
1. Choice (optional) → z.B. Monster Hunt: Track oder Avoid?
2. Key Role Check → Rolle macht Check, modifiziert DC
3. Group Check → Alle würfeln, zähle Erfolge
4. Individual Saves (optional) → z.B. Constitution Saves
5. Complete → Ergebnis anwenden, nächster Encounter
```

### Stage 4: JOURNEY'S END (journey-end.hbs)

**Verantwortlich:** `JourneyManagerApp` Actions
- `rollArrival`
- `rollExhaustionSave`
- `sendEndSummary`
- `newJourney`

---

## 4. DIE 12 ENCOUNTER-KATEGORIEN

(Definiert in `encounter-type-rules.js`)

| # | Kategorie | Key Role | Resolution Pattern |
|---|-----------|----------|---------------------|
| 1 | A Chance Meeting | Leader | Leader Check → Group Check |
| 2 | Hidden Reserves | Quartermaster | Group Check only |
| 3 | A Bump in the Road | Outrider | Outrider Check → Individual Saves |
| 4 | Needing Assistance | Quartermaster | Group Check only |
| 5 | Danger Afoot | Sentry | Group Check only |
| 6 | Natural Wonders | Leader | Group Check (Will Save) |
| 7 | Monster Hunt | Outrider/Sentry | Choice → Group Check |
| 8 | A Place to Rest | Quartermaster | Group Check only |
| 9 | Old Memories | Leader | Group Check only |
| 10 | Deadly Fight | Sentry | Group Check only |
| 11 | Fateful Encounter | Leader | Varies by encounter |

> **Note:** "A Dark Place" was REMOVED (too passive, redundant with Deadly Fight)

**Resolution Config (ENCOUNTER_RESOLUTION_CONFIG):**
```javascript
{
  keyRoleCheck: {
    skill: 'society',
    successEffect: { dcMod: -2 },
    failureEffect: { dcMod: +2 }
  },
  groupCheck: {
    skills: ['diplomacy', 'perception', 'deception'],
    allSucceed: { effect: 'replaceNextEncounter' },
    majoritySucceed: { effect: 'inspiration' },
    minoritySucceed: { effect: 'none' },
    noneSucceed: { effect: 'addEncounter' }
  }
}
```

---

## 5. SESSION STATE MANAGEMENT

### JourneySessionManager (journey-session.js)

**Speicherort:** Foundry Settings (`game.settings`)
- `uncharted-journeys.currentSession` - Aktive Session
- `uncharted-journeys.sessionHistory` - Vergangene Sessions

**JourneySessionModel Fields:**
```javascript
{
  // Route (Stage 1)
  distance: StringField,
  baseDifficulty: NumberField,
  weatherModifier: NumberField,
  terrainModifier: NumberField,
  nemesis: BooleanField,
  nemesisModifier: NumberField,
  biomes: ArrayField,

  // Party (Stage 2)
  partyMembers: ArrayField<PartyMemberSchema>,

  // Journey (Stage 3)
  currentStage: StringField,    // 'route'|'prepare'|'journey'|'end'
  pace: StringField,
  encounters: ArrayField,
  currentEncounterIndex: NumberField,
  biomeNodes: ArrayField,       // Kartenmarker

  // Role Tracking
  roleTracking: ObjectField,    // Ability-Usage pro Rolle

  // Resolution State
  encounterResolution: EncounterResolutionSchema
}
```

### Biome Nodes (Fog of War System)

```javascript
biomeNode = {
  id: 'node_123',
  biomeId: 'forest',
  type: 'green',              // green/yellow/red (actual)
  displayedType: 'yellow',    // Kann abweichen (Fake-Farbe)
  name: 'Versteckte Lichtung',
  displayedName: 'Dunkler Wald',  // Kann abweichen
  revealed: false,
  resolved: false,
  prerolledEncounterType: null,
  cachedEncounter: null
}
```

---

## 6. CHAT DELEGATION SYSTEM

Das Modul delegiert viele UI-Interaktionen an den Foundry Chat.

**Chat Templates:**

| Template | Zweck |
|----------|-------|
| `chat-encounter.hbs` | Encounter-Beschreibung anzeigen |
| `chat-choice.hbs` | Entscheidungen (Track/Avoid) |
| `chat-key-role-check.hbs` | Key Role Check Prompt |
| `chat-group-check.hbs` | Gruppencheck Prompt |
| `chat-individual-saves.hbs` | Individuelle Saves |
| `chat-resolution-outcome.hbs` | Ergebnis-Zusammenfassung |

**Flow:**
```
JourneyManagerApp → ChatMessage.create() → Template.hbs
                                              ↓
                        Spieler klickt Button in Chat
                                              ↓
                        Socket/Hook → JourneyManagerApp
```

---

## 7. KRITISCHE ABHÄNGIGKEITEN

### Wenn du X änderst, musst du auch Y ändern:

| Änderung | Betroffene Dateien |
|----------|-------------------|
| **Neue Rolle hinzufügen** | 1. `roles.js` (Definition) <br> 2. `journey-session.js` (PartyMemberSchema choices) <br> 3. `prepare.hbs` (UI) <br> 4. `encounter-type-rules.js` (keyRole References) |
| **Neuer Encounter-Typ** | 1. `encounter-type-rules.js` (Definition + Resolution) <br> 2. `encounters.js` (10 Einträge pro Region) <br> 3. `biome-locations.js` (Pools) <br> 4. `journey-tables.js` (ENCOUNTER_POOLS) |
| **Neues Resolution Pattern** | 1. `encounter-type-rules.js` (ENCOUNTER_RESOLUTION_CONFIG) <br> 2. `journey-app.js` (Resolution Handler) <br> 3. `chat-*.hbs` (Falls neue UI nötig) |
| **Neue Stage** | 1. `journey-session.js` (currentStage choices) <br> 2. `journey-app.js` (PARTS + Actions) <br> 3. `templates/tabs/` (Neues Template) <br> 4. `tabs.hbs` (Navigation) |
| **Neues Biome** | 1. `biome-locations.js` (BIOME_LOCATIONS) <br> 2. `journey-tables.js` (BIOMES, ENCOUNTER_POOLS) |
| **Session State ändern** | 1. `journey-session.js` (Model Fields) <br> 2. Alle Apps die Session lesen |

---

## 8. CHECKLISTE: NEUEN ENCOUNTER-TYP HINZUFÜGEN

- [ ] **encounter-type-rules.js**:
  - [ ] Eintrag in `ENCOUNTER_TYPE_RULES` mit name, summary, keyRole, content
  - [ ] Eintrag in `ENCOUNTER_RESOLUTION_CONFIG` mit Resolution-Steps

- [ ] **encounters.js**:
  - [ ] 10 Einträge für jede Region (roll 1-10, title, description)
  - [ ] In `ENCOUNTER_TYPES` Array aufnehmen

- [ ] **biome-locations.js**:
  - [ ] In `LOCATION_ENCOUNTER_POOLS` für relevante Biomes

- [ ] **journey-tables.js**:
  - [ ] In `ENCOUNTER_POOLS` (social/mixed/combat)

- [ ] **journey-app.js** (falls neues Resolution Pattern):
  - [ ] Handler-Logik in Resolution-Flow

- [ ] **Chat Templates** (falls nötig):
  - [ ] Neues Template für spezielle UI

- [ ] **Diese Dokumentation aktualisieren!**

---

## 9. CHECKLISTE: NEUE ROLLE HINZUFÜGEN

- [ ] **roles.js**:
  ```javascript
  newRole: {
    id: 'newRole',
    name: 'Rollenname',
    nameEn: 'Role Name',
    icon: 'fa-icon',
    emoji: '🎯',
    description: '...',
    primarySkill: 'skill',
    alternativeSkill: 'skill2',
    groupCheckDescription: '...',
    ability: {
      name: 'Ability Name',
      description: '...',
      trigger: 'onDemand|allyFailsCheck',
      usageLimit: 'perJourney|perAllyPerJourney|perPlayerPerJourney',
      shortDescription: '...'
    }
  }
  ```

- [ ] **journey-session.js**:
  - [ ] In `PartyMemberSchema` → `role.choices` Array
  - [ ] In `getInitialRoleTrackingState()` falls Ability Tracking nötig

- [ ] **prepare.hbs**:
  - [ ] Rolle in UI anzeigbar machen

- [ ] **encounter-type-rules.js**:
  - [ ] `keyRole` bei relevanten Encounter-Typen

- [ ] **journey-app.js**:
  - [ ] `useRoleAbility` Handler für neue Ability

- [ ] **Diese Dokumentation aktualisieren!**

---

## 10. NODE ENCOUNTER SYSTEM

### NodeEncounterApp (node-encounter-app.js)

Öffnet sich wenn GM auf Kartenmarker klickt.

**Actions:**
| Action | Beschreibung |
|--------|--------------|
| `prerollEncounterType` | Encounter-Typ vorher würfeln |
| `generateEncounter` | Vollständigen Encounter generieren |
| `resolveNode` | Node als abgeschlossen markieren |
| `startResolution` | Resolution-Flow starten |
| `regenerateNodeName` | Neuen Namen generieren |
| `revealNode` | Fog of War aufheben |
| `setDeception` | Fake-Farbe setzen |
| `clearDeception` | Fake-Farbe entfernen |

**Node Types:**
- `green` (Sicher) → social Encounter Pool (6 Typen)
- `yellow` (Gemischt) → mixed Encounter Pool (11 Typen - OHNE Old Memories!)
- `red` (Gefährlich) → combat Encounter Pool (6 Typen - mit Old Memories!)

**WICHTIG: Old Memories erscheint NUR bei roten Orten!**
Old Memories sind seltene "Forgotten Discovery" Encounters, die zu Research Encounters führen.

---

## 11. MCP-SERVER INTEGRATION

Der Travel-Encounter-Server (`encounter-server.py`) generiert Encounter-Inhalte.

**Kategorisierung (Stand: 2025-01-02):**
```python
# NOTE: "a_dark_place" was REMOVED - too passive, redundant with Deadly Fight

# FULL_CAMPAIGN: 50% front, 50% personal (0% standalone!)
# Diese Encounter-Typen sind IMMER kampagnen-relevant
FULL_CAMPAIGN = ["a_chance_meeting", "needing_assistance",
                 "fateful_encounter", "danger_afoot"]

# FRONT_ONLY: 100% front (0% standalone, 0% personal)
# Diese Typen zeigen immer die aktive Front/Bedrohung
# WICHTIG: old_memories erscheint NUR bei roten Orten und führt zu Research Encounters!
FRONT_ONLY = ["monster_hunt", "deadly_fight", "a_place_to_rest",
              "needing_assistance", "old_memories"]

# LORE_ONLY: 100% standalone (eigenes Subsystem)
# Natural Wonders hat eigene Mechaniken (duale emotionale Wirkung)
LORE_ONLY = ["natural_wonders", "hidden_reserves", "a_bump_in_the_road"]
```

**Qualitäts-Richtlinien (4 Säulen):**
Jeder generierte Encounter muss erfüllen:
1. **ORGANISCH** - Fühlt sich natürlich für die Fantasy-Welt an
2. **ABWECHSLUNGSREICH** - Variierte Abstammungen, Transportmittel, Situationen
3. **INTERESSANT** - Tiefe, etwas zu entdecken, macht neugierig
4. **FANTASTISCH** - Fantasy-Elemente ohne Übertreibung

**API-Endpoint:**
```
POST /encounter
{
  encounterType: 'travel',
  travelType: 'a_chance_meeting',
  biome: 'forest',
  partyLevel: 9
}
```

---

## 12. DEBUGGING

### Foundry Console
```javascript
// Aktuelle Session anzeigen:
game.settings.get('uncharted-journeys', 'currentSession')

// Journey App öffnen:
UnchartedJourneys.open()

// Biome Nodes:
JourneySessionManager.getBiomeNodes()

// Encounter Type UUIDs (Compendium):
game.modules.get('uncharted-journeys').encounterTypeUUIDs
```

### Häufige Fehler

| Problem | Ursache | Lösung |
|---------|---------|--------|
| Session geht verloren | Settings nicht gespeichert | `JourneySessionManager.save()` aufrufen |
| Node nicht anklickbar | Drawing ohne Flags | Flags prüfen: `drawing.flags['uncharted-journeys']` |
| Resolution hängt | Step nicht aktualisiert | `session.encounterResolution.step` prüfen |
| Rolle nicht zuweisbar | Actor nicht in Party | `partyMembers` Array prüfen |

---

## 13. ÄNDERUNGSHISTORIE

| Datum | Version | Änderung |
|-------|---------|----------|
| 2024-12-23 | 2.4.0 | Dokumentation erstellt |
| 2024-12-23 | 2.3.1 | Resolution Mechaniken Bug Fix |
| | | Orte Update |

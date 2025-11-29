/**
 * Uncharted Journeys - Encounter Roller
 * Main module entry point
 */

import { JourneyEncounterApp } from './journey-app.js';
import { ENCOUNTER_TYPE_RULES } from './data/encounter-type-rules.js';

// Store a reference to the app instance on the module
let journeyApp = null;

// Store encounter type UUIDs after compendium is populated
export let ENCOUNTER_TYPE_UUIDS = {};

/**
 * Initialize the module
 */
Hooks.once('init', () => {
  console.log('Uncharted Journeys | Initializing module');
});

/**
 * Populate the encounter types compendium if empty
 */
async function populateEncounterTypesCompendium() {
  const pack = game.packs.get('uncharted-journeys.encounter-types');
  if (!pack) {
    console.warn('Uncharted Journeys | Encounter types compendium not found');
    return;
  }

  // Check if compendium already has entries
  const existingDocs = await pack.getDocuments();
  if (existingDocs.length > 0) {
    console.log('Uncharted Journeys | Compendium already populated, loading UUIDs');
    // Build UUID map from existing entries
    for (const doc of existingDocs) {
      ENCOUNTER_TYPE_UUIDS[doc.name] = doc.uuid;
    }
    return;
  }

  // Only GMs can populate the compendium
  if (!game.user.isGM) {
    console.log('Uncharted Journeys | Waiting for GM to populate compendium');
    return;
  }

  console.log('Uncharted Journeys | Populating encounter types compendium...');
  ui.notifications.info('Uncharted Journeys: Setting up encounter type journals...');

  // Unlock the compendium for editing
  await pack.configure({ locked: false });

  // Create journal entries for each encounter type
  for (const [typeName, typeData] of Object.entries(ENCOUNTER_TYPE_RULES)) {
    try {
      // Create journal with a single page containing the rules
      const journalData = {
        name: typeData.name,
        pages: [
          {
            name: typeData.name,
            type: 'text',
            text: {
              content: typeData.content,
              format: 1 // HTML format
            }
          }
        ],
        flags: {
          'uncharted-journeys': {
            keyRole: typeData.keyRole,
            summary: typeData.summary
          }
        }
      };

      const journal = await JournalEntry.create(journalData, { pack: pack.collection });
      ENCOUNTER_TYPE_UUIDS[typeName] = journal.uuid;
      console.log(`Uncharted Journeys | Created journal: ${typeName}`);
    } catch (error) {
      console.error(`Uncharted Journeys | Failed to create journal for ${typeName}:`, error);
    }
  }

  // Lock the compendium again
  await pack.configure({ locked: true });

  ui.notifications.info('Uncharted Journeys: Encounter type journals ready!');
  console.log('Uncharted Journeys | Compendium population complete');
}

/**
 * When the game is ready, set up the module
 */
Hooks.once('ready', async () => {
  console.log('Uncharted Journeys | Module ready');

  // Populate compendium if needed
  await populateEncounterTypesCompendium();

  // Create the app instance
  journeyApp = new JourneyEncounterApp();

  // Store reference on the module for macro access
  const module = game.modules.get('uncharted-journeys');
  if (module) {
    module.journeyApp = journeyApp;
    module.encounterTypeUUIDs = ENCOUNTER_TYPE_UUIDS;
  }

  // Also expose globally for easy macro access
  globalThis.UnchartedJourneys = {
    app: journeyApp,
    open: () => journeyApp.render(true),
    encounterTypeUUIDs: ENCOUNTER_TYPE_UUIDS
  };

  // Notify GM that the module is ready
  if (game.user.isGM) {
    ui.notifications.info('Uncharted Journeys loaded. Use the macro or type: UnchartedJourneys.open()');
  }
});

/**
 * Add a button to the scene controls for quick access (optional)
 */
Hooks.on('getSceneControlButtons', (controls) => {
  if (!game.user.isGM) return;

  const tokenControls = controls.find(c => c.name === 'token');
  if (tokenControls) {
    tokenControls.tools.push({
      name: 'uncharted-journeys',
      title: 'Uncharted Journeys',
      icon: 'fas fa-route',
      button: true,
      onClick: () => {
        if (journeyApp) {
          journeyApp.render(true);
        }
      }
    });
  }
});

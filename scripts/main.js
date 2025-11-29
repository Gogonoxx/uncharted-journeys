/**
 * Uncharted Journeys - Journey Manager
 * Main module entry point for the full 4-stage journey system
 */

import { JourneyManagerApp } from './journey-app.js';
import { JourneySessionManager } from './journey-session.js';
import { ExhaustionManager } from './exhaustion-manager.js';
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

  // Register journey session settings
  JourneySessionManager.registerSettings();

  // Register Handlebars helpers
  registerHandlebarsHelpers();
});

/**
 * Register custom Handlebars helpers
 */
function registerHandlebarsHelpers() {
  // Equal comparison
  Handlebars.registerHelper('eq', function(a, b) {
    return a === b;
  });

  // Not equal
  Handlebars.registerHelper('ne', function(a, b) {
    return a !== b;
  });

  // Greater than or equal
  Handlebars.registerHelper('gte', function(a, b) {
    return a >= b;
  });

  // Less than
  Handlebars.registerHelper('lt', function(a, b) {
    return a < b;
  });

  // Add numbers
  Handlebars.registerHelper('add', function(a, b) {
    return a + b;
  });

  // Subtract numbers
  Handlebars.registerHelper('sub', function(a, b) {
    return a - b;
  });

  // Lookup with nested path
  Handlebars.registerHelper('lookup', function(obj, key) {
    if (!obj) return undefined;
    return obj[key];
  });

  // And helper
  Handlebars.registerHelper('and', function(...args) {
    args.pop(); // Remove Handlebars options object
    return args.every(Boolean);
  });

  // Or helper
  Handlebars.registerHelper('or', function(...args) {
    args.pop(); // Remove Handlebars options object
    return args.some(Boolean);
  });

  // Not helper
  Handlebars.registerHelper('not', function(value) {
    return !value;
  });

  // Call a function with arguments
  Handlebars.registerHelper('call', function(fn, ...args) {
    args.pop(); // Remove Handlebars options object
    if (typeof fn === 'function') {
      return fn(...args);
    }
    return undefined;
  });
}

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
  journeyApp = new JourneyManagerApp();

  // Store reference on the module for macro access
  const module = game.modules.get('uncharted-journeys');
  if (module) {
    module.journeyApp = journeyApp;
    module.encounterTypeUUIDs = ENCOUNTER_TYPE_UUIDS;
    module.ExhaustionManager = ExhaustionManager;
  }

  // Also expose globally for easy macro access
  globalThis.UnchartedJourneys = {
    app: journeyApp,
    open: () => journeyApp.render(true),
    encounterTypeUUIDs: ENCOUNTER_TYPE_UUIDS,
    ExhaustionManager: ExhaustionManager,
    JourneySessionManager: JourneySessionManager
  };

  // Notify GM that the module is ready
  if (game.user.isGM) {
    ui.notifications.info('Uncharted Journeys loaded. Use the macro or type: UnchartedJourneys.open()');
  }
});

/**
 * Add a button to the scene controls for quick access
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

/**
 * Listen for journey updates to refresh open apps
 */
Hooks.on('uncharted-journeys.journeyUpdated', (value) => {
  if (journeyApp && journeyApp.rendered) {
    journeyApp.render();
  }
});

/**
 * Handle chat message button clicks for preparation and exhaustion results
 */
Hooks.on('renderChatMessage', (message, html) => {
  // In Foundry v13, html might be a jQuery object or HTMLElement
  const element = html instanceof HTMLElement ? html : html[0] ?? html;
  if (!element?.querySelectorAll) return;

  // Handle preparation result buttons
  element.querySelectorAll('[data-action="setPreparationResult"]').forEach(btn => {
    btn.addEventListener('click', async (event) => {
      const role = event.currentTarget.dataset.role;
      const result = event.currentTarget.dataset.result;
      const prepId = message.flags?.['uncharted-journeys']?.preparationId;

      if (role && result) {
        const { getPreparation } = await import('./data/preparations.js');
        const prep = getPreparation(prepId);
        const diffMod = prep?.difficultyModifier?.[result] || 0;

        await JourneySessionManager.setPreparationResult(role, result, diffMod);

        // Update the message to show the result
        const buttons = event.currentTarget.closest('.outcome-buttons');
        if (buttons) {
          buttons.innerHTML = `<span class="result-${result}"><i class="fas fa-${result === 'success' ? 'check' : 'times'}-circle"></i> ${result.charAt(0).toUpperCase() + result.slice(1)}</span>`;
        }
      }
    });
  });

  // Handle exhaustion result buttons
  element.querySelectorAll('[data-action="applyExhaustionResult"]').forEach(btn => {
    btn.addEventListener('click', async (event) => {
      const actorId = event.currentTarget.dataset.actorId;
      const result = event.currentTarget.dataset.result;

      if (actorId && result) {
        const actor = game.actors.get(actorId);
        if (actor && result === 'failure') {
          await ExhaustionManager.increaseExhaustion(actor);
        }

        // Record the result in session
        const session = JourneySessionManager.getCurrent();
        if (session) {
          session.endOfJourneySaves.push({
            actorId,
            roll: 0, // Manual entry
            success: result === 'success'
          });
          await JourneySessionManager.save(session);
        }

        // Update the message
        const buttons = event.currentTarget.closest('.outcome-buttons');
        if (buttons) {
          buttons.innerHTML = `<span class="result-${result}"><i class="fas fa-${result === 'success' ? 'check' : 'times'}-circle"></i> ${result.charAt(0).toUpperCase() + result.slice(1)}</span>`;
        }
      }
    });
  });
});

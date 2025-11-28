/**
 * Uncharted Journeys - Encounter Roller
 * Main module entry point
 */

import { JourneyEncounterApp } from './journey-app.js';

// Store a reference to the app instance on the module
let journeyApp = null;

/**
 * Initialize the module
 */
Hooks.once('init', () => {
  console.log('Uncharted Journeys | Initializing module');
});

/**
 * When the game is ready, set up the module
 */
Hooks.once('ready', () => {
  console.log('Uncharted Journeys | Module ready');

  // Create the app instance
  journeyApp = new JourneyEncounterApp();

  // Store reference on the module for macro access
  const module = game.modules.get('uncharted-journeys');
  if (module) {
    module.journeyApp = journeyApp;
  }

  // Also expose globally for easy macro access
  globalThis.UnchartedJourneys = {
    app: journeyApp,
    open: () => journeyApp.render(true)
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

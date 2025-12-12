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

  // Greater than
  Handlebars.registerHelper('gt', function(a, b) {
    return a > b;
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

  // Set up delegated event handler for chat buttons
  setupChatButtonDelegation();

  // Notify GM that the module is ready
  if (game.user.isGM) {
    ui.notifications.info('Uncharted Journeys loaded. Use the macro or type: UnchartedJourneys.open()');
  }
});

/**
 * Set up delegated event handling for chat message buttons
 * This uses a single listener on the chat log to catch all button clicks,
 * which avoids the double-click issue with per-button listeners
 */
function setupChatButtonDelegation() {
  // Get the chat log element
  const chatLog = document.getElementById('chat-log');
  if (!chatLog) {
    console.warn('Uncharted Journeys | Chat log not found for event delegation');
    return;
  }

  // Add a single delegated click listener
  chatLog.addEventListener('click', async (event) => {
    // Find the nearest element with a data-action attribute
    const actionElement = event.target.closest('[data-action]');
    if (!actionElement) return;

    const action = actionElement.dataset.action;

    // Only handle our module's actions
    const ourActions = [
      'setPreparationResult', 'applyExhaustionResult', 'takeRest', 'stayUp',
      'showEncounterTypeRules', 'setKeyRoleResult', 'setMemberResult',
      'finalizeGroupCheck', 'finalizeSaves', 'makeChoice', 'markEncounterResolved'
    ];
    if (!ourActions.includes(action)) return;

    // Prevent default behavior
    event.preventDefault();
    event.stopPropagation();

    // Get the chat message element and message data
    const messageElement = actionElement.closest('.chat-message');
    const messageId = messageElement?.dataset?.messageId;
    const message = messageId ? game.messages.get(messageId) : null;

    // Handle the action
    await handleChatAction(action, actionElement, message, messageElement);
  });

  console.log('Uncharted Journeys | Chat button delegation set up');
}

/**
 * Handle a chat action
 */
async function handleChatAction(action, element, message, messageElement) {
  switch (action) {
    case 'setPreparationResult':
      await handleSetPreparationResult(element, message);
      break;
    case 'applyExhaustionResult':
      await handleApplyExhaustionResult(element, message);
      break;
    case 'takeRest':
      await handleTakeRest(element);
      break;
    case 'stayUp':
      await handleStayUp(element);
      break;
    case 'showEncounterTypeRules':
      await handleShowEncounterTypeRules(element);
      break;
    case 'setKeyRoleResult':
      await handleSetKeyRoleResult(element, message);
      break;
    case 'setMemberResult':
      await handleSetMemberResult(element, messageElement);
      break;
    case 'finalizeGroupCheck':
      await handleFinalizeGroupCheck(element, message);
      break;
    case 'finalizeSaves':
      await handleFinalizeSaves(element, message);
      break;
    case 'makeChoice':
      await handleMakeChoice(element, message);
      break;
    case 'markEncounterResolved':
      await handleMarkEncounterResolved(element);
      break;
  }
}

async function handleSetPreparationResult(element, message) {
  const role = element.dataset.role;
  const result = element.dataset.result;
  const prepId = message?.flags?.['uncharted-journeys']?.preparationId;

  if (role && result) {
    const { getPreparation, PREPARATION_ICONS, RALLY_OPTIONS } = await import('./data/preparations.js');
    const prep = getPreparation(prepId);
    const diffMod = prep?.difficultyModifier?.[result] || 0;

    await JourneySessionManager.setPreparationResult(role, result, diffMod);

    // Create effects on party members if preparation succeeded and has effectOnSuccess
    if (result === 'success' && prep?.effectOnSuccess) {
      const session = JourneySessionManager.getCurrent();
      if (session) {
        const messageEl = element.closest('.chat-message');
        await createPreparationEffects(prep, prepId, session, messageEl, PREPARATION_ICONS, RALLY_OPTIONS);
      }
    }

    // Update the message to show the result
    const buttons = element.closest('.outcome-buttons');
    if (buttons) {
      buttons.innerHTML = `<span class="result-${result}"><i class="fas fa-${result === 'success' ? 'check' : 'times'}-circle"></i> ${result.charAt(0).toUpperCase() + result.slice(1)}</span>`;
    }
  }
}

async function handleApplyExhaustionResult(element, message) {
  const actorId = element.dataset.actorId;
  const result = element.dataset.result;

  if (actorId && result) {
    const actor = game.actors.get(actorId);
    if (actor && result === 'failure') {
      await ExhaustionManager.increaseExhaustion(actor);
    }

    // Record the result in session
    const session = JourneySessionManager.getCurrent();
    if (session) {
      const newSaves = [...session.endOfJourneySaves, {
        actorId,
        roll: 0,
        success: result === 'success'
      }];
      session.updateSource({ endOfJourneySaves: newSaves });
      await JourneySessionManager.save(session);
    }

    // Update the message
    const buttons = element.closest('.outcome-buttons');
    if (buttons) {
      buttons.innerHTML = `<span class="result-${result}"><i class="fas fa-${result === 'success' ? 'check' : 'times'}-circle"></i> ${result.charAt(0).toUpperCase() + result.slice(1)}</span>`;
    }
  }
}

async function handleTakeRest(element) {
  const actorId = element.dataset.actorId;
  if (!actorId) return;

  const actor = game.actors.get(actorId);
  if (!actor) return;

  if (actor.system?.attributes?.hp) {
    const maxHp = actor.system.attributes.hp.max;
    await actor.update({ 'system.attributes.hp.value': maxHp });

    await ChatMessage.create({
      content: `<div class="uncharted-journeys chat-card rest-result">
        <p><strong>${actor.name}</strong> takes a long rest and is fully refreshed.</p>
      </div>`,
      speaker: { alias: 'Uncharted Journeys' }
    });
  }

  const row = element.closest('.rest-choice-row');
  if (row) {
    const buttons = row.querySelector('.rest-buttons');
    if (buttons) {
      buttons.innerHTML = `<span class="rest-chosen"><i class="fas fa-bed"></i> Rested</span>`;
    }
  }
}

async function handleStayUp(element) {
  const actorId = element.dataset.actorId;
  if (!actorId) return;

  const actor = game.actors.get(actorId);
  if (!actor) return;

  await ExhaustionManager.increaseExhaustion(actor);

  await ChatMessage.create({
    content: `<div class="uncharted-journeys chat-card stay-up-result">
      <p><strong>${actor.name}</strong> stays up all night and gains 1 level of exhaustion. They may attempt another preparation.</p>
    </div>`,
    speaker: { alias: 'Uncharted Journeys' }
  });

  const row = element.closest('.rest-choice-row');
  if (row) {
    const buttons = row.querySelector('.rest-buttons');
    if (buttons) {
      buttons.innerHTML = `<span class="stay-up-chosen"><i class="fas fa-moon"></i> Stayed Up (+1 Exhaustion)</span>`;
    }
  }
}

async function handleShowEncounterTypeRules(element) {
  const encounterType = element.dataset.encounterType;
  if (!encounterType) return;

  const { ENCOUNTER_TYPE_RULES } = await import('./data/encounter-type-rules.js');
  const rules = ENCOUNTER_TYPE_RULES[encounterType];

  if (!rules) {
    ui.notifications.warn(`No rules found for encounter type: ${encounterType}`);
    return;
  }

  new Dialog({
    title: `${rules.name} - Rules`,
    content: `
      <div class="encounter-type-rules" style="max-height: 500px; overflow-y: auto; padding: 0.5rem;">
        <p class="key-role" style="font-style: italic; color: #666; margin-bottom: 1rem;">
          <strong>Key Role:</strong> ${rules.keyRole}
        </p>
        <p class="summary" style="margin-bottom: 1rem;">
          <strong>Summary:</strong> ${rules.summary}
        </p>
        <hr style="margin: 1rem 0;">
        ${rules.content}
      </div>
    `,
    buttons: {
      close: {
        icon: '<i class="fas fa-times"></i>',
        label: 'Close'
      }
    },
    default: 'close'
  }, {
    width: 600,
    height: 'auto',
    classes: ['uncharted-journeys', 'encounter-type-dialog']
  }).render(true);
}

async function handleSetKeyRoleResult(element, message) {
  // Mark as processed so inline handler doesn't duplicate
  if (element.dataset.ujProcessed) return;
  element.dataset.ujProcessed = 'true';

  const result = element.dataset.result;
  const config = message?.flags?.['uncharted-journeys']?.config;

  if (!result || !config) return;

  const session = JourneySessionManager.getCurrent();
  if (!session) return;

  let dcModifier = 0;
  let advantageState = '';

  if (result === 'criticalSuccess' && config.keyRoleCheck?.successBy5Effect) {
    // Check for advantage on both saves and group checks (successBy5Effect)
    if (config.keyRoleCheck.successBy5Effect.saveAdvantage || config.keyRoleCheck.successBy5Effect.groupAdvantage) {
      advantageState = 'advantage';
    }
  } else if (result === 'success' && config.keyRoleCheck?.successEffect) {
    if (config.keyRoleCheck.successEffect.groupDcMod) {
      dcModifier = config.keyRoleCheck.successEffect.groupDcMod;
    }
    if (config.keyRoleCheck.successEffect.groupAdvantage) {
      advantageState = 'advantage';
    }
  } else if (result === 'failure' && config.keyRoleCheck?.failureEffect) {
    if (config.keyRoleCheck.failureEffect.groupDcMod) {
      dcModifier = config.keyRoleCheck.failureEffect.groupDcMod;
    }
    // Check for disadvantage on both saves and group checks (failureEffect)
    if (config.keyRoleCheck.failureEffect.saveDisadvantage || config.keyRoleCheck.failureEffect.groupDisadvantage) {
      advantageState = 'disadvantage';
    }
  }

  await JourneySessionManager.updateEncounterResolution({
    keyRoleResult: result,
    dcModifier,
    advantageState
  });

  const buttons = element.closest('.outcome-buttons');
  if (buttons) {
    const resultLabel = result === 'criticalSuccess' ? 'Critical Success' :
                        result.charAt(0).toUpperCase() + result.slice(1);
    const icon = result === 'failure' ? 'times' : 'check';
    buttons.innerHTML = `<span class="result-${result}"><i class="fas fa-${icon}-circle"></i> ${resultLabel}</span>`;
  }

  const dc = session.difficulty;

  if (config.pattern === 'keyRole-then-group') {
    await JourneySessionManager.updateEncounterResolution({ step: 'group' });
    if (journeyApp) {
      await journeyApp._sendGroupCheckChat(config, session, dc, dcModifier, advantageState);
    }
  } else if (config.pattern === 'keyRole-then-saves') {
    await JourneySessionManager.updateEncounterResolution({ step: 'saves' });
    if (journeyApp) {
      await journeyApp._sendIndividualSavesChat(config, session, dc, advantageState);
    }
  } else if (config.pattern === 'keyRole-then-group-conditional') {
    // Conditional pattern: success proceeds to group, failure skips to outcome
    if (result === 'failure' && config.keyRoleCheck?.failureEffect?.skipToResult) {
      // Skip directly to outcome
      const skipOutcome = config.keyRoleCheck.failureEffect.skipToResult;
      await JourneySessionManager.updateEncounterResolution({
        step: 'complete',
        outcome: skipOutcome
      });
      // Send outcome chat
      if (journeyApp) {
        await journeyApp._sendOutcomeChat(config, session, skipOutcome, 'keyRoleFailure');
      }
    } else {
      // Success or critical success - proceed to group check
      await JourneySessionManager.updateEncounterResolution({ step: 'group' });
      if (journeyApp) {
        await journeyApp._sendGroupCheckChat(config, session, dc, dcModifier, advantageState);
      }
    }
  }

  if (journeyApp?.rendered) {
    journeyApp.render();
  }
}

async function handleSetMemberResult(element, messageElement) {
  const actorId = element.dataset.actorId;
  const result = element.dataset.result;

  if (!actorId || !result) return;

  const container = messageElement?.querySelector('.group-results, .saves-results');
  if (!container) return;

  const replacementCheckbox = messageElement?.querySelector(`input[name="replaceTarget"][value="${actorId}"]:checked`);
  const isReplaced = !!replacementCheckbox;

  await JourneySessionManager.setResolutionMemberResult(actorId, result, isReplaced);

  const row = element.closest('.member-result-row');
  if (row) {
    const resultDisplay = row.querySelector('.result-display');
    const buttons = row.querySelector('.result-buttons');
    if (resultDisplay) {
      const icon = result === 'success' ? 'check' : 'times';
      const colorClass = result === 'success' ? 'success' : 'failure';
      resultDisplay.innerHTML = `<span class="result-${colorClass}"><i class="fas fa-${icon}"></i> ${result.charAt(0).toUpperCase() + result.slice(1)}${isReplaced ? ' (Replaced)' : ''}</span>`;
    }
    if (buttons) {
      buttons.style.display = 'none';
    }
  }

  const session = JourneySessionManager.getCurrent();
  if (session) {
    const currentEncounter = session.currentEncounter;
    const results = currentEncounter?.resolution?.memberResults || [];
    const successCount = results.filter(r => r.result === 'success').length;
    const totalExpected = session.partyMembers.length;

    const countEl = messageElement?.querySelector('.success-count');
    if (countEl) {
      countEl.textContent = successCount;
    }

    if (results.length >= totalExpected) {
      const finalizeBtn = messageElement?.querySelector('.finalize-btn');
      if (finalizeBtn) {
        finalizeBtn.disabled = false;
      }
    }
  }
}

async function handleFinalizeGroupCheck(element, message) {
  const config = message?.flags?.['uncharted-journeys']?.config;
  if (!config) return;

  const outcomeTier = JourneySessionManager.calculateOutcomeTier();

  await JourneySessionManager.updateEncounterResolution({
    outcome: outcomeTier,
    step: 'complete'
  });

  const outcomes = config.groupCheck?.outcomes || {};
  const outcomeData = outcomes[outcomeTier];
  const outcomeEffect = outcomeData?.effect;

  const session = JourneySessionManager.getCurrent();
  const exhaustionApplied = [];

  if (session && (outcomeEffect === 'exhaustion' || outcomeEffect === 'partyExhaustion')) {
    for (const member of session.partyMembers) {
      const actor = game.actors.get(member.actorId);
      if (actor) {
        await ExhaustionManager.increaseExhaustion(actor);
        exhaustionApplied.push(actor.name);
      }
    }
  }

  if (session) {
    const results = session.currentEncounter?.resolution?.memberResults || [];
    const successCount = results.filter(r => r.result === 'success').length;

    await sendResolutionOutcomeChat(
      outcomeTier,
      successCount,
      results.length,
      outcomeData?.description || 'Encounter resolved.',
      outcomeData?.combat || false,
      exhaustionApplied,
      session.currentEncounterIndex
    );
  }

  element.disabled = true;
  element.innerHTML = '<i class="fas fa-check"></i> Finalized';

  if (journeyApp?.rendered) {
    journeyApp.render();
  }
}

async function handleFinalizeSaves(element, message) {
  const config = message?.flags?.['uncharted-journeys']?.config;
  if (!config) return;

  const session = JourneySessionManager.getCurrent();
  if (!session) return;

  const results = session.currentEncounter?.resolution?.memberResults || [];
  const successCount = results.filter(r => r.result === 'success').length;
  const failureCount = results.filter(r => r.result === 'failure').length;
  const totalCount = results.length;

  const outcomes = config.individualSaves?.outcomes || {};

  // Check if this uses group outcomes (all/majority/minority/none) or individual outcomes (success/failure)
  const hasGroupOutcomes = outcomes.all || outcomes.majority || outcomes.minority || outcomes.none;

  if (hasGroupOutcomes) {
    // GROUP outcomes - total successes determine what happens to everyone
    let outcomeTier;
    if (successCount === totalCount) {
      outcomeTier = 'all';
    } else if (successCount > totalCount / 2) {
      outcomeTier = 'majority';
    } else if (successCount > 0) {
      outcomeTier = 'minority';
    } else {
      outcomeTier = 'none';
    }

    const outcomeData = outcomes[outcomeTier];

    await JourneySessionManager.updateEncounterResolution({
      outcome: outcomeTier,
      step: 'complete'
    });

    // Apply effects based on outcome
    const exhaustionApplied = [];
    const effect = outcomeData?.effect;

    // Handle exhaustion effects (applied to everyone on certain outcomes)
    if (effect === 'addExhaustion' || effect === 'loseHitDieAndExhaustion') {
      for (const r of results) {
        const actor = game.actors.get(r.actorId);
        if (actor) {
          await ExhaustionManager.increaseExhaustion(actor);
          exhaustionApplied.push(actor.name);
        }
      }
    }

    // Send outcome to chat using the standard function
    await sendResolutionOutcomeChat(
      outcomeTier,
      successCount,
      totalCount,
      outcomeData?.description || 'Saves completed.',
      false,
      exhaustionApplied,
      session.currentEncounterIndex
    );
  } else {
    // INDIVIDUAL outcomes - each person's save determines their own outcome
    await JourneySessionManager.updateEncounterResolution({
      outcome: 'individual',
      step: 'complete'
    });

    const successDesc = outcomes.success?.description || 'No negative effects.';
    const failureDesc = outcomes.failure?.description || 'Negative effect applied.';
    const failureEffect = outcomes.failure?.effect;

    const exhaustionApplied = [];
    if (failureEffect === 'exhaustion') {
      for (const r of results) {
        if (r.result === 'failure') {
          const actor = game.actors.get(r.actorId);
          if (actor) {
            await ExhaustionManager.increaseExhaustion(actor);
            exhaustionApplied.push(actor.name);
          }
        }
      }
    }

    const summaryLines = results.map(r => {
      const actor = game.actors.get(r.actorId);
      const name = actor?.name || 'Unknown';
      const icon = r.result === 'success' ? 'check' : 'times';
      const outcome = r.result === 'success' ? successDesc : failureDesc;
      return `<p class="result-${r.result}"><i class="fas fa-${icon}"></i> <strong>${name}:</strong> ${outcome}</p>`;
    }).join('');

    let exhaustionNote = '';
    if (exhaustionApplied.length > 0) {
      exhaustionNote = `
        <div class="exhaustion-applied">
          <p><i class="fas fa-tired"></i> <strong>Exhaustion applied to:</strong> ${exhaustionApplied.join(', ')}</p>
        </div>
      `;
    }

    const outcomeContent = `
      <div class="uncharted-journeys chat-card resolution-outcome individual-saves-outcome">
        <h3><i class="fas fa-shield-alt"></i> Saving Throw Results</h3>
        <p class="outcome-summary"><strong>${successCount}</strong> succeeded, <strong>${failureCount}</strong> failed</p>
        <div class="individual-results">
          ${summaryLines}
        </div>
        ${exhaustionNote}
        <button type="button" class="mark-resolved-btn" data-action="markEncounterResolved" data-encounter-index="${session.currentEncounterIndex}">
          <i class="fas fa-check-double"></i> Mark Encounter Resolved
        </button>
      </div>
    `;

    await ChatMessage.create({
      content: outcomeContent,
      speaker: { alias: 'Uncharted Journeys' }
    });
  }

  element.disabled = true;
  element.innerHTML = '<i class="fas fa-check"></i> Finalized';

  if (journeyApp?.rendered) {
    journeyApp.render();
  }
}

async function handleMakeChoice(element, message) {
  const choice = element.dataset.choice;
  const config = message?.flags?.['uncharted-journeys']?.config;

  if (!choice || !config) return;

  const session = JourneySessionManager.getCurrent();
  if (!session) return;

  const choiceConfig = config.choices?.[choice];
  if (!choiceConfig) return;

  await JourneySessionManager.updateEncounterResolution({
    choiceMade: choice
  });

  const buttons = element.closest('.choice-buttons');
  if (buttons) {
    buttons.innerHTML = `<span class="choice-made"><i class="fas ${choiceConfig.icon}"></i> ${choiceConfig.label}</span>`;
  }

  const dc = session.difficulty;

  if (choiceConfig.pattern === 'keyRole-then-group') {
    await JourneySessionManager.updateEncounterResolution({ step: 'keyRole' });
    if (journeyApp) {
      const modifiedConfig = {
        ...config,
        pattern: choiceConfig.pattern,
        keyRole: choiceConfig.keyRole,
        keyRoleCheck: choiceConfig.keyRoleCheck,
        groupCheck: choiceConfig.groupCheck
      };
      await journeyApp._sendKeyRoleCheckChat(modifiedConfig, session, dc);
    }
  } else if (choiceConfig.pattern === 'group-only') {
    await JourneySessionManager.updateEncounterResolution({ step: 'group' });
    if (journeyApp) {
      const modifiedConfig = {
        ...config,
        pattern: choiceConfig.pattern,
        keyRole: choiceConfig.keyRole,
        groupCheck: choiceConfig.groupCheck
      };
      await journeyApp._sendGroupCheckChat(modifiedConfig, session, dc, 0, '');
    }
  } else if (choiceConfig.combat) {
    await JourneySessionManager.updateEncounterResolution({
      step: 'complete',
      outcome: 'combat'
    });

    await sendResolutionOutcomeChat(
      'combat',
      0,
      0,
      choiceConfig.description || 'Combat encounter begins.',
      true,
      [],
      session.currentEncounterIndex
    );
  }

  if (journeyApp?.rendered) {
    journeyApp.render();
  }
}

async function handleMarkEncounterResolved(element) {
  const encounterIndex = parseInt(element.dataset.encounterIndex, 10);
  const session = JourneySessionManager.getCurrent();
  if (!session) return;

  const newEncounters = session.encounters.map((e, i) => {
    if (i === encounterIndex) {
      return { ...e, status: 'resolved' };
    }
    return e;
  });

  session.updateSource({ encounters: newEncounters });
  await JourneySessionManager.save(session);

  element.disabled = true;
  element.innerHTML = '<i class="fas fa-check"></i> Resolved';

  if (journeyApp?.rendered) {
    journeyApp.render();
  }

  ui.notifications.info('Encounter marked as resolved!');
}

/**
 * Add a button to the scene controls for quick access
 * V13 API: controls is now a Record<string, SceneControl> object
 */
Hooks.on('getSceneControlButtons', (controls) => {
  // Access the tokens control directly by key (V13 API)
  const tokenControls = controls.tokens;
  if (tokenControls?.tools) {
    tokenControls.tools['uncharted-journeys'] = {
      name: 'uncharted-journeys',
      title: 'Uncharted Journeys',
      icon: 'fas fa-route',
      order: Object.keys(tokenControls.tools).length,
      button: true,
      visible: game.user.isGM,
      onChange: () => {
        if (journeyApp) {
          journeyApp.render(true);
        }
      }
    };
  }
});

/**
 * Listen for journey updates to refresh open apps
 */
Hooks.on('uncharted-journeys.journeyUpdated', (value) => {
  if (journeyApp && journeyApp.rendered) {
    // Save scroll position before re-rendering
    journeyApp._saveScrollPosition();
    journeyApp.render();
  }
});

/**
 * Create preparation success effects on party members
 * @param {Object} prep - The preparation data
 * @param {string} prepId - The preparation ID
 * @param {Object} session - The current journey session
 * @param {HTMLElement} element - The chat message element
 * @param {Object} PREPARATION_ICONS - Icon mapping
 * @param {Object} RALLY_OPTIONS - Rally the Party options
 */
async function createPreparationEffects(prep, prepId, session, element, PREPARATION_ICONS, RALLY_OPTIONS) {
  const effectConfig = prep.effectOnSuccess;
  if (!effectConfig) return;

  // Determine which actors to apply effects to
  let targetActors = [];

  if (effectConfig.applyToAll) {
    // Apply to all party members
    for (const member of session.partyMembers) {
      const actor = game.actors.get(member.actorId);
      if (actor) targetActors.push(actor);
    }
  } else if (effectConfig.applyToQuartermaster) {
    // Apply only to the Quartermaster
    const qmMember = session.partyMembers.find(m => m.role === 'quartermaster');
    if (qmMember) {
      const actor = game.actors.get(qmMember.actorId);
      if (actor) targetActors.push(actor);
    }
  }

  if (targetActors.length === 0) return;

  // Handle Rally the Party with dropdown selection
  let effectName = effectConfig.name || prep.name;
  let effectDescription = effectConfig.description || prep.successEffect;
  let rules = [];

  if (effectConfig.hasDropdown && prepId === 'rallyTheParty') {
    // Read the selected Rally option from the chat card
    const dropdown = element.querySelector('.rally-option-select');
    const selectedOption = dropdown?.value || 'encouraging';
    const rallyOption = RALLY_OPTIONS[selectedOption];

    if (rallyOption) {
      effectName = `Rally: ${rallyOption.name}`;
      effectDescription = rallyOption.description;

      // Add rule elements for mechanical bonuses
      if (rallyOption.rules) {
        rules = [...rallyOption.rules];
      }

      // Handle Resolute (temp HP)
      if (selectedOption === 'resolute') {
        // Will calculate per-actor below
      }
    }
  }

  // Create effects on each target actor
  for (const actor of targetActors) {
    // Remove any existing preparation effects from this preparation type
    const existingEffects = actor.items.filter(i =>
      i.type === 'effect' &&
      i.flags?.['uncharted-journeys']?.isPreparationEffect &&
      i.flags?.['uncharted-journeys']?.preparationId === prepId
    );

    // Delete existing effects of the same type
    if (existingEffects.length > 0) {
      const idsToDelete = existingEffects.map(e => e.id);
      await actor.deleteEmbeddedDocuments('Item', idsToDelete);
    }

    // Build effect data
    const effectData = {
      type: 'effect',
      name: `Preparation: ${effectName}`,
      img: PREPARATION_ICONS[prepId] || 'icons/svg/aura.svg',
      system: {
        description: {
          value: `<p>${effectDescription}</p>`
        },
        duration: {
          unit: 'unlimited',
          value: -1
        },
        tokenIcon: {
          show: true
        }
      },
      flags: {
        'uncharted-journeys': {
          isPreparationEffect: true,
          preparationId: prepId
        }
      }
    };

    // Add rule elements if any
    if (rules.length > 0) {
      effectData.system.rules = rules;
    }

    // Handle Resolute - add temp HP directly
    if (prepId === 'rallyTheParty') {
      const dropdown = element.querySelector('.rally-option-select');
      const selectedOption = dropdown?.value || 'encouraging';

      if (selectedOption === 'resolute') {
        // Get proficiency bonus (PF2E uses level-based proficiency)
        const level = actor.system?.details?.level?.value || 1;
        const profBonus = Math.floor(level / 2) + 2; // Simplified PF2E proficiency
        const tempHP = profBonus * 2;

        // Add temp HP via rule element
        effectData.system.rules = [{
          key: 'TempHP',
          value: tempHP,
          label: 'Rally the Party (Resolute)'
        }];

        effectData.system.description.value = `<p>Temporary HP: ${tempHP} (2x Proficiency Bonus)</p>`;
      }
    }

    await actor.createEmbeddedDocuments('Item', [effectData]);
  }

  // Notify success
  ui.notifications.info(`Preparation effect "${effectName}" applied to party!`);
}

/**
 * Handle chat message button clicks for preparation and exhaustion results
 * Uses per-button processing markers to avoid duplicate event listeners
 */
Hooks.on('renderChatMessage', (message, html) => {
  // In Foundry v13, html might be a jQuery object or HTMLElement
  const element = html instanceof HTMLElement ? html : html[0] ?? html;
  if (!element?.querySelectorAll) return;

  // Helper to add listener only once per button
  const addListenerOnce = (btn, handler) => {
    if (btn.dataset.ujListener) return;
    btn.dataset.ujListener = 'true';
    btn.addEventListener('click', handler);
  };

  // Handle preparation result buttons
  element.querySelectorAll('[data-action="setPreparationResult"]').forEach(btn => {
    addListenerOnce(btn, async (event) => {
      const role = event.currentTarget.dataset.role;
      const result = event.currentTarget.dataset.result;
      const prepId = message.flags?.['uncharted-journeys']?.preparationId;

      if (role && result) {
        const { getPreparation, PREPARATION_ICONS, RALLY_OPTIONS } = await import('./data/preparations.js');
        const prep = getPreparation(prepId);
        const diffMod = prep?.difficultyModifier?.[result] || 0;

        await JourneySessionManager.setPreparationResult(role, result, diffMod);

        // Create effects on party members if preparation succeeded and has effectOnSuccess
        if (result === 'success' && prep?.effectOnSuccess) {
          const session = JourneySessionManager.getCurrent();
          if (session) {
            await createPreparationEffects(prep, prepId, session, element, PREPARATION_ICONS, RALLY_OPTIONS);
          }
        }

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
    addListenerOnce(btn, async (event) => {
      const actorId = event.currentTarget.dataset.actorId;
      const result = event.currentTarget.dataset.result;

      if (actorId && result) {
        const actor = game.actors.get(actorId);
        if (actor && result === 'failure') {
          await ExhaustionManager.increaseExhaustion(actor);
        }

        // Record the result in session (DataModel arrays are immutable)
        const session = JourneySessionManager.getCurrent();
        if (session) {
          const newSaves = [...session.endOfJourneySaves, {
            actorId,
            roll: 0, // Manual entry
            success: result === 'success'
          }];
          session.updateSource({ endOfJourneySaves: newSaves });
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

  // Handle Rest button clicks
  element.querySelectorAll('[data-action="takeRest"]').forEach(btn => {
    addListenerOnce(btn, async (event) => {
      const actorId = event.currentTarget.dataset.actorId;
      if (!actorId) return;

      const actor = game.actors.get(actorId);
      if (!actor) return;

      // Trigger a long rest for this actor using PF2E system
      // PF2E uses the rest-for-the-night macro or actor method
      if (actor.system?.attributes?.hp) {
        // Restore HP to max
        const maxHp = actor.system.attributes.hp.max;
        await actor.update({ 'system.attributes.hp.value': maxHp });

        // Send confirmation to chat
        await ChatMessage.create({
          content: `<div class="uncharted-journeys chat-card rest-result">
            <p><strong>${actor.name}</strong> takes a long rest and is fully refreshed.</p>
          </div>`,
          speaker: { alias: 'Uncharted Journeys' }
        });
      }

      // Update the row to show the choice was made
      const row = event.currentTarget.closest('.rest-choice-row');
      if (row) {
        const buttons = row.querySelector('.rest-buttons');
        if (buttons) {
          buttons.innerHTML = `<span class="rest-chosen"><i class="fas fa-bed"></i> Rested</span>`;
        }
      }
    });
  });

  // Handle Stay Up button clicks
  element.querySelectorAll('[data-action="stayUp"]').forEach(btn => {
    addListenerOnce(btn, async (event) => {
      const actorId = event.currentTarget.dataset.actorId;
      if (!actorId) return;

      const actor = game.actors.get(actorId);
      if (!actor) return;

      // Increase exhaustion by 1
      await ExhaustionManager.increaseExhaustion(actor);

      // Send confirmation to chat
      await ChatMessage.create({
        content: `<div class="uncharted-journeys chat-card stay-up-result">
          <p><strong>${actor.name}</strong> stays up all night and gains 1 level of exhaustion. They may attempt another preparation.</p>
        </div>`,
        speaker: { alias: 'Uncharted Journeys' }
      });

      // Update the row to show the choice was made
      const row = event.currentTarget.closest('.rest-choice-row');
      if (row) {
        const buttons = row.querySelector('.rest-buttons');
        if (buttons) {
          buttons.innerHTML = `<span class="stay-up-chosen"><i class="fas fa-moon"></i> Stayed Up (+1 Exhaustion)</span>`;
        }
      }
    });
  });

  // Handle encounter type link clicks
  element.querySelectorAll('[data-action="showEncounterTypeRules"]').forEach(link => {
    link.addEventListener('click', async (event) => {
      event.preventDefault();
      const encounterType = event.currentTarget.dataset.encounterType;

      if (!encounterType) return;

      // Import the encounter type rules
      const { ENCOUNTER_TYPE_RULES } = await import('./data/encounter-type-rules.js');
      const rules = ENCOUNTER_TYPE_RULES[encounterType];

      if (!rules) {
        ui.notifications.warn(`No rules found for encounter type: ${encounterType}`);
        return;
      }

      // Show the rules in a Dialog
      new Dialog({
        title: `${rules.name} - Rules`,
        content: `
          <div class="encounter-type-rules" style="max-height: 500px; overflow-y: auto; padding: 0.5rem;">
            <p class="key-role" style="font-style: italic; color: #666; margin-bottom: 1rem;">
              <strong>Key Role:</strong> ${rules.keyRole}
            </p>
            <p class="summary" style="margin-bottom: 1rem;">
              <strong>Summary:</strong> ${rules.summary}
            </p>
            <hr style="margin: 1rem 0;">
            ${rules.content}
          </div>
        `,
        buttons: {
          close: {
            icon: '<i class="fas fa-times"></i>',
            label: 'Close'
          }
        },
        default: 'close'
      }, {
        width: 600,
        height: 'auto',
        classes: ['uncharted-journeys', 'encounter-type-dialog']
      }).render(true);
    });
  });

  // ============================================
  // ENCOUNTER RESOLUTION HANDLERS
  // ============================================

  // Handle key role check result buttons
  element.querySelectorAll('[data-action="setKeyRoleResult"]').forEach(btn => {
    addListenerOnce(btn, async (event) => {
      // Skip if already processed by delegated handler
      if (event.currentTarget.dataset.ujProcessed) return;

      const result = event.currentTarget.dataset.result;
      const config = message.flags?.['uncharted-journeys']?.config;

      if (!result || !config) return;

      const session = JourneySessionManager.getCurrent();
      if (!session) return;

      // Determine DC modifier and advantage state
      let dcModifier = 0;
      let advantageState = '';

      if (result === 'criticalSuccess' && config.keyRoleCheck?.successBy5Effect) {
        // Check for advantage on both saves and group checks (successBy5Effect)
        if (config.keyRoleCheck.successBy5Effect.saveAdvantage || config.keyRoleCheck.successBy5Effect.groupAdvantage) {
          advantageState = 'advantage';
        }
      } else if (result === 'success' && config.keyRoleCheck?.successEffect) {
        if (config.keyRoleCheck.successEffect.groupDcMod) {
          dcModifier = config.keyRoleCheck.successEffect.groupDcMod;
        }
        if (config.keyRoleCheck.successEffect.groupAdvantage) {
          advantageState = 'advantage';
        }
      } else if (result === 'failure' && config.keyRoleCheck?.failureEffect) {
        if (config.keyRoleCheck.failureEffect.groupDcMod) {
          dcModifier = config.keyRoleCheck.failureEffect.groupDcMod;
        }
        // Check for disadvantage on both saves and group checks (failureEffect)
        if (config.keyRoleCheck.failureEffect.saveDisadvantage || config.keyRoleCheck.failureEffect.groupDisadvantage) {
          advantageState = 'disadvantage';
        }
      }

      // Update resolution state
      await JourneySessionManager.updateEncounterResolution({
        keyRoleResult: result,
        dcModifier,
        advantageState
      });

      // Update the message to show the result
      const buttons = event.currentTarget.closest('.outcome-buttons');
      if (buttons) {
        const resultLabel = result === 'criticalSuccess' ? 'Critical Success' :
                          result.charAt(0).toUpperCase() + result.slice(1);
        const icon = result === 'failure' ? 'times' : 'check';
        buttons.innerHTML = `<span class="result-${result}"><i class="fas fa-${icon}-circle"></i> ${resultLabel}</span>`;
      }

      // Determine next step and send appropriate chat
      const dc = session.difficulty;

      if (config.pattern === 'keyRole-then-group') {
        await JourneySessionManager.updateEncounterResolution({ step: 'group' });
        // Send group check chat
        if (journeyApp) {
          await journeyApp._sendGroupCheckChat(config, session, dc, dcModifier, advantageState);
        }
      } else if (config.pattern === 'keyRole-then-saves') {
        await JourneySessionManager.updateEncounterResolution({ step: 'saves' });
        // Send individual saves chat
        if (journeyApp) {
          await journeyApp._sendIndividualSavesChat(config, session, dc, advantageState);
        }
      } else if (config.pattern === 'keyRole-then-group-conditional') {
        // Conditional pattern: success proceeds to group, failure skips to outcome
        if (result === 'failure' && config.keyRoleCheck?.failureEffect?.skipToResult) {
          // Skip directly to outcome
          const skipOutcome = config.keyRoleCheck.failureEffect.skipToResult;
          await JourneySessionManager.updateEncounterResolution({
            step: 'complete',
            outcome: skipOutcome
          });
          // Send outcome chat
          if (journeyApp) {
            await journeyApp._sendOutcomeChat(config, session, skipOutcome, 'keyRoleFailure');
          }
        } else {
          // Success or critical success - proceed to group check
          await JourneySessionManager.updateEncounterResolution({ step: 'group' });
          if (journeyApp) {
            await journeyApp._sendGroupCheckChat(config, session, dc, dcModifier, advantageState);
          }
        }
      }

      // Refresh the journey app
      if (journeyApp?.rendered) {
        journeyApp.render();
      }
    });
  });

  // Handle member result buttons (for group checks and saves)
  element.querySelectorAll('[data-action="setMemberResult"]').forEach(btn => {
    addListenerOnce(btn, async (event) => {
      const actorId = event.currentTarget.dataset.actorId;
      const result = event.currentTarget.dataset.result;

      if (!actorId || !result) return;

      // Check if this actor is being replaced by someone else
      const container = element.querySelector('.group-results, .saves-results');
      if (!container) return;

      // Check replacement checkboxes
      const replacementCheckbox = element.querySelector(`input[name="replaceTarget"][value="${actorId}"]:checked`);
      const isReplaced = !!replacementCheckbox;

      // Save the result
      await JourneySessionManager.setResolutionMemberResult(actorId, result, isReplaced);

      // Update UI for this member
      const row = event.currentTarget.closest('.member-result-row');
      if (row) {
        const resultDisplay = row.querySelector('.result-display');
        const buttons = row.querySelector('.result-buttons');
        if (resultDisplay) {
          const icon = result === 'success' ? 'check' : 'times';
          const colorClass = result === 'success' ? 'success' : 'failure';
          resultDisplay.innerHTML = `<span class="result-${colorClass}"><i class="fas fa-${icon}"></i> ${result.charAt(0).toUpperCase() + result.slice(1)}${isReplaced ? ' (Replaced)' : ''}</span>`;
        }
        if (buttons) {
          buttons.style.display = 'none';
        }
      }

      // Update success count
      const session = JourneySessionManager.getCurrent();
      if (session) {
        const currentEncounter = session.currentEncounter;
        const results = currentEncounter?.resolution?.memberResults || [];
        const successCount = results.filter(r => r.result === 'success').length;
        const totalExpected = session.partyMembers.length;

        const countEl = element.querySelector('.success-count');
        if (countEl) {
          countEl.textContent = successCount;
        }

        // Enable finalize button if all results are in
        if (results.length >= totalExpected) {
          const finalizeBtn = element.querySelector('.finalize-btn');
          if (finalizeBtn) {
            finalizeBtn.disabled = false;
          }
        }
      }
    });
  });

  // Handle finalize group check button
  element.querySelectorAll('[data-action="finalizeGroupCheck"]').forEach(btn => {
    addListenerOnce(btn, async (event) => {
      const config = message.flags?.['uncharted-journeys']?.config;
      if (!config) return;

      // Calculate outcome tier
      const outcomeTier = JourneySessionManager.calculateOutcomeTier();

      // Update resolution with outcome
      await JourneySessionManager.updateEncounterResolution({
        outcome: outcomeTier,
        step: 'complete'
      });

      // Get outcome data
      const outcomes = config.groupCheck?.outcomes || {};
      const outcomeData = outcomes[outcomeTier];
      const outcomeEffect = outcomeData?.effect;

      const session = JourneySessionManager.getCurrent();
      const exhaustionApplied = [];

      // Auto-apply exhaustion if the outcome effect calls for it
      if (session && (outcomeEffect === 'exhaustion' || outcomeEffect === 'partyExhaustion')) {
        for (const member of session.partyMembers) {
          const actor = game.actors.get(member.actorId);
          if (actor) {
            await ExhaustionManager.increaseExhaustion(actor);
            exhaustionApplied.push(actor.name);
          }
        }
      }

      // Send outcome to chat
      if (session) {
        const results = session.currentEncounter?.resolution?.memberResults || [];
        const successCount = results.filter(r => r.result === 'success').length;

        await sendResolutionOutcomeChat(
          outcomeTier,
          successCount,
          results.length,
          outcomeData?.description || 'Encounter resolved.',
          outcomeData?.combat || false,
          exhaustionApplied,
          session.currentEncounterIndex
        );
      }

      // Disable the button
      event.currentTarget.disabled = true;
      event.currentTarget.innerHTML = '<i class="fas fa-check"></i> Finalized';

      // Refresh journey app
      if (journeyApp?.rendered) {
        journeyApp.render();
      }
    });
  });

  // Handle finalize saves button
  element.querySelectorAll('[data-action="finalizeSaves"]').forEach(btn => {
    addListenerOnce(btn, async (event) => {
      const config = message.flags?.['uncharted-journeys']?.config;
      if (!config) return;

      const session = JourneySessionManager.getCurrent();
      if (!session) return;

      const results = session.currentEncounter?.resolution?.memberResults || [];
      const successCount = results.filter(r => r.result === 'success').length;
      const failureCount = results.filter(r => r.result === 'failure').length;
      const totalCount = results.length;

      const outcomes = config.individualSaves?.outcomes || {};

      // Check if this uses group outcomes (all/majority/minority/none) or individual outcomes (success/failure)
      const hasGroupOutcomes = outcomes.all || outcomes.majority || outcomes.minority || outcomes.none;

      if (hasGroupOutcomes) {
        // GROUP outcomes - total successes determine what happens to everyone
        let outcomeTier;
        if (successCount === totalCount) {
          outcomeTier = 'all';
        } else if (successCount > totalCount / 2) {
          outcomeTier = 'majority';
        } else if (successCount > 0) {
          outcomeTier = 'minority';
        } else {
          outcomeTier = 'none';
        }

        const outcomeData = outcomes[outcomeTier];

        await JourneySessionManager.updateEncounterResolution({
          outcome: outcomeTier,
          step: 'complete'
        });

        // Apply effects based on outcome
        const exhaustionApplied = [];
        const effect = outcomeData?.effect;

        // Handle exhaustion effects (applied to everyone on certain outcomes)
        if (effect === 'addExhaustion' || effect === 'loseHitDieAndExhaustion') {
          for (const r of results) {
            const actor = game.actors.get(r.actorId);
            if (actor) {
              await ExhaustionManager.increaseExhaustion(actor);
              exhaustionApplied.push(actor.name);
            }
          }
        }

        // Send outcome to chat using the standard function
        await sendResolutionOutcomeChat(
          outcomeTier,
          successCount,
          totalCount,
          outcomeData?.description || 'Saves completed.',
          false,
          exhaustionApplied,
          session.currentEncounterIndex
        );
      } else {
        // INDIVIDUAL outcomes - each person's save determines their own outcome
        await JourneySessionManager.updateEncounterResolution({
          outcome: 'individual',
          step: 'complete'
        });

        const successDesc = outcomes.success?.description || 'No negative effects.';
        const failureDesc = outcomes.failure?.description || 'Negative effect applied.';
        const failureEffect = outcomes.failure?.effect;

        const exhaustionApplied = [];
        if (failureEffect === 'exhaustion') {
          for (const r of results) {
            if (r.result === 'failure') {
              const actor = game.actors.get(r.actorId);
              if (actor) {
                await ExhaustionManager.increaseExhaustion(actor);
                exhaustionApplied.push(actor.name);
              }
            }
          }
        }

        const summaryLines = results.map(r => {
          const actor = game.actors.get(r.actorId);
          const name = actor?.name || 'Unknown';
          const icon = r.result === 'success' ? 'check' : 'times';
          const outcome = r.result === 'success' ? successDesc : failureDesc;
          return `<p class="result-${r.result}"><i class="fas fa-${icon}"></i> <strong>${name}:</strong> ${outcome}</p>`;
        }).join('');

        let exhaustionNote = '';
        if (exhaustionApplied.length > 0) {
          exhaustionNote = `
            <div class="exhaustion-applied">
              <p><i class="fas fa-tired"></i> <strong>Exhaustion applied to:</strong> ${exhaustionApplied.join(', ')}</p>
            </div>
          `;
        }

        const outcomeContent = `
          <div class="uncharted-journeys chat-card resolution-outcome individual-saves-outcome">
            <h3><i class="fas fa-shield-alt"></i> Saving Throw Results</h3>
            <p class="outcome-summary"><strong>${successCount}</strong> succeeded, <strong>${failureCount}</strong> failed</p>
            <div class="individual-results">
              ${summaryLines}
            </div>
            ${exhaustionNote}
            <button type="button" class="mark-resolved-btn" data-action="markEncounterResolved" data-encounter-index="${session.currentEncounterIndex}">
              <i class="fas fa-check-double"></i> Mark Encounter Resolved
            </button>
          </div>
        `;

        await ChatMessage.create({
          content: outcomeContent,
          speaker: { alias: 'Uncharted Journeys' }
        });
      }

      // Disable the button
      event.currentTarget.disabled = true;
      event.currentTarget.innerHTML = '<i class="fas fa-check"></i> Finalized';

      // Refresh journey app
      if (journeyApp?.rendered) {
        journeyApp.render();
      }
    });
  });

  // Handle choice buttons (Monster Hunt pattern)
  element.querySelectorAll('[data-action="makeChoice"]').forEach(btn => {
    addListenerOnce(btn, async (event) => {
      const choice = event.currentTarget.dataset.choice;
      const config = message.flags?.['uncharted-journeys']?.config;

      if (!choice || !config) return;

      const session = JourneySessionManager.getCurrent();
      if (!session) return;

      const choiceConfig = config.choices?.[choice];
      if (!choiceConfig) return;

      // Update resolution with choice
      await JourneySessionManager.updateEncounterResolution({
        choiceMade: choice
      });

      // Update the message to show the choice
      const buttons = event.currentTarget.closest('.choice-buttons');
      if (buttons) {
        buttons.innerHTML = `<span class="choice-made"><i class="fas ${choiceConfig.icon}"></i> ${choiceConfig.label}</span>`;
      }

      // Determine next step based on choice config
      const dc = session.difficulty;

      if (choiceConfig.pattern === 'keyRole-then-group') {
        await JourneySessionManager.updateEncounterResolution({ step: 'keyRole' });
        // Send key role check chat
        if (journeyApp) {
          // Create a modified config for this choice path
          const modifiedConfig = {
            ...config,
            pattern: choiceConfig.pattern,
            keyRole: choiceConfig.keyRole,
            keyRoleCheck: choiceConfig.keyRoleCheck,
            groupCheck: choiceConfig.groupCheck
          };
          await journeyApp._sendKeyRoleCheckChat(modifiedConfig, session, dc);
        }
      } else if (choiceConfig.pattern === 'group-only') {
        await JourneySessionManager.updateEncounterResolution({ step: 'group' });
        // Send group check chat
        if (journeyApp) {
          const modifiedConfig = {
            ...config,
            pattern: choiceConfig.pattern,
            keyRole: choiceConfig.keyRole,
            groupCheck: choiceConfig.groupCheck
          };
          await journeyApp._sendGroupCheckChat(modifiedConfig, session, dc, 0, '');
        }
      } else if (choiceConfig.combat) {
        // Direct combat encounter - mark as complete
        await JourneySessionManager.updateEncounterResolution({
          step: 'complete',
          outcome: 'combat'
        });

        // Send combat reminder to chat
        await sendResolutionOutcomeChat(
          'combat',
          0,
          0,
          choiceConfig.description,
          true,
          [],
          session.currentEncounterIndex
        );
      }

      // Refresh journey app
      if (journeyApp?.rendered) {
        journeyApp.render();
      }
    });
  });

  // Handle mark encounter resolved button
  element.querySelectorAll('[data-action="markEncounterResolved"]').forEach(btn => {
    addListenerOnce(btn, async (event) => {
      const encounterIndex = parseInt(event.currentTarget.dataset.encounterIndex, 10);
      const session = JourneySessionManager.getCurrent();
      if (!session) return;

      // Mark encounter as resolved
      const newEncounters = session.encounters.map((e, i) => {
        if (i === encounterIndex) {
          return { ...e, status: 'resolved' };
        }
        return { ...e };
      });
      session.updateSource({ encounters: newEncounters });
      await JourneySessionManager.save(session);

      // Update button
      event.currentTarget.disabled = true;
      event.currentTarget.innerHTML = '<i class="fas fa-check"></i> Resolved';

      // Refresh journey app
      if (journeyApp?.rendered) {
        journeyApp.render();
      }

      ui.notifications.info('Encounter marked as resolved!');
    });
  });
});

/**
 * Send resolution outcome to chat
 */
async function sendResolutionOutcomeChat(outcomeTier, successCount, totalCount, outcomeText, isCombat, exhaustionApplied, encounterIndex) {
  const content = await renderTemplate(
    'modules/uncharted-journeys/templates/chat-resolution-outcome.hbs',
    {
      outcomeTier,
      successCount,
      totalCount,
      outcomeText,
      isCombat,
      hasExhaustion: exhaustionApplied && exhaustionApplied.length > 0,
      exhaustionApplied,
      encounterIndex,
      isGM: game.user.isGM
    }
  );

  await ChatMessage.create({
    content,
    speaker: { alias: 'Uncharted Journeys' }
  });
}

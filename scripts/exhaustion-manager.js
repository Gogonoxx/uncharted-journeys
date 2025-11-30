/**
 * Uncharted Journeys - Custom Exhaustion System
 * Implements a 6-level exhaustion system using PF2E conditions
 *
 * PF2E doesn't have exhaustion levels like D&D 5E, so this module
 * implements a custom system that stacks PF2E conditions.
 *
 * The exhaustion is tracked via a clickable effect item on the actor
 * that works like afflictions - left click to increase, right click to decrease.
 */

/**
 * Exhaustion Level Table:
 *
 * Level 1: Fatigued
 * Level 2: -2 to saves, flat-footed to everything, Drained 1
 * Level 3: Speed halved, Clumsy 1, Enfeebled 1, Stupefied 1
 * Level 4: Dazzled, Sickened 1, +1 to Drained/Clumsy/Enfeebled/Stupefied
 * Level 5: Doomed 2, +2 to Drained/Clumsy/Enfeebled/Stupefied, Stunned 3 at combat start
 * Level 6: Unconscious (max 1 HP), cannot wake until 8 hours rest
 */

export class ExhaustionManager {

  /**
   * Define what each exhaustion level applies (cumulative from level 1)
   */
  static EXHAUSTION_LEVELS = {
    1: {
      conditions: { fatigued: true },
      effects: [],
      description: 'You are fatigued.'
    },
    2: {
      conditions: { drained: 1, 'flat-footed': true },
      effects: ['enhanced-fatigue'],
      description: 'The -1 to AC/Saves from Fatigued becomes: -2 to saves and flat-footed to everything. In addition, you gain Drained 1.'
    },
    3: {
      conditions: { clumsy: 1, enfeebled: 1, stupefied: 1 },
      effects: ['half-speed'],
      description: 'Your speed is halved. You gain Clumsy 1, Enfeebled 1, and Stupefied 1.'
    },
    4: {
      conditions: { drained: 1, clumsy: 1, enfeebled: 1, stupefied: 1, dazzled: true, sickened: 1 },
      effects: [],
      description: 'You are Dazzled and Sickened 1 and gain an additional point of Drained, Clumsy, Enfeebled, and Stupefied.'
    },
    5: {
      conditions: { drained: 2, clumsy: 2, enfeebled: 2, stupefied: 2, doomed: 2 },
      effects: ['stunned-combat-start'],
      description: 'You are Doomed 2 and gain 2 points of Drained, Clumsy, Enfeebled, and Stupefied. You begin each new combat with Stunned 3.'
    },
    6: {
      conditions: { unconscious: true },
      effects: ['max-1-hp', 'no-wake-8-hours'],
      description: 'You fall unconscious with no more than 1 HP and cannot be roused by any means until 8 hours of rest.'
    }
  };

  /**
   * The slug/ID for our exhaustion effect
   */
  static EXHAUSTION_EFFECT_SLUG = 'effect-exhaustion-uncharted-journeys';

  /**
   * Get the exhaustion effect item from an actor
   * @param {Actor} actor - The PF2E actor
   * @returns {Item|null} The exhaustion effect item or null
   */
  static getExhaustionEffect(actor) {
    return actor.items.find(i =>
      i.type === 'effect' &&
      i.flags?.['uncharted-journeys']?.isExhaustionEffect === true
    ) ?? null;
  }

  /**
   * Get current exhaustion level for an actor
   * @param {Actor} actor - The PF2E actor
   * @returns {number} Exhaustion level (0-6)
   */
  static getExhaustionLevel(actor) {
    const effect = this.getExhaustionEffect(actor);
    if (!effect) return 0;

    // Get the badge value from the effect
    const badgeValue = effect.system?.badge?.value;
    return typeof badgeValue === 'number' ? badgeValue : 0;
  }

  /**
   * Create the exhaustion effect data for a given level
   * @param {number} level - Exhaustion level (1-6)
   * @returns {Object} Effect item data
   */
  static createExhaustionEffectData(level) {
    const levelData = this.EXHAUSTION_LEVELS[level];

    return {
      type: 'effect',
      name: `Exhaustion ${level}`,
      img: 'icons/svg/unconscious.svg',
      system: {
        slug: this.EXHAUSTION_EFFECT_SLUG,
        description: {
          value: `<p><strong>Exhaustion Level ${level}</strong></p><p>${levelData?.description || ''}</p>`
        },
        duration: {
          value: -1,
          unit: 'unlimited',
          sustained: false,
          expiry: null
        },
        level: { value: null },
        badge: {
          type: 'counter',
          value: level,
          min: 1,
          max: 6,
          label: 'Stage'
        },
        rules: []
      },
      flags: {
        'uncharted-journeys': {
          isExhaustionEffect: true,
          exhaustionLevel: level
        }
      }
    };
  }

  /**
   * Set exhaustion level and apply appropriate conditions
   * @param {Actor} actor - The PF2E actor
   * @param {number} level - Target exhaustion level (0-6)
   * @param {boolean} silent - If true, don't send chat messages
   */
  static async setExhaustionLevel(actor, level, silent = false) {
    const currentLevel = this.getExhaustionLevel(actor);
    level = Math.max(0, Math.min(6, level));

    if (level === currentLevel) return;

    // Remove all exhaustion-related conditions first
    await this.clearExhaustionConditions(actor);

    // Handle the effect item
    const existingEffect = this.getExhaustionEffect(actor);

    if (level === 0) {
      // Remove exhaustion entirely
      if (existingEffect) {
        await existingEffect.delete();
      }
      await actor.unsetFlag('uncharted-journeys', 'exhaustionLevel');
    } else {
      // Apply conditions for new level (cumulative)
      await this.applyExhaustionConditions(actor, level);

      if (existingEffect) {
        // Update existing effect
        await existingEffect.update({
          name: `Exhaustion ${level}`,
          'system.badge.value': level,
          'system.description.value': `<p><strong>Exhaustion Level ${level}</strong></p><p>${this.EXHAUSTION_LEVELS[level]?.description || ''}</p>`,
          'flags.uncharted-journeys.exhaustionLevel': level
        });
      } else {
        // Create new effect
        const effectData = this.createExhaustionEffectData(level);
        await actor.createEmbeddedDocuments('Item', [effectData]);
      }

      // Store the level as a flag too for quick access
      await actor.setFlag('uncharted-journeys', 'exhaustionLevel', level);
    }

    // Build notification message
    const levelData = this.EXHAUSTION_LEVELS[level];
    let message;
    if (level > currentLevel) {
      message = `${actor.name} gains exhaustion level ${level}. ${levelData?.description || ''}`;
    } else if (level > 0) {
      message = `${actor.name} exhaustion reduced to level ${level}. ${levelData?.description || ''}`;
    } else {
      message = `${actor.name} is no longer exhausted.`;
    }

    ui.notifications.info(message);

    // Create a chat message for the exhaustion change
    if (!silent) {
      await this.createExhaustionMessage(actor, level, currentLevel);
    }
  }

  /**
   * Increase exhaustion by 1 level
   * @param {Actor} actor - The PF2E actor
   * @param {boolean} silent - If true, don't send chat messages
   */
  static async increaseExhaustion(actor, silent = false) {
    const current = this.getExhaustionLevel(actor);
    await this.setExhaustionLevel(actor, current + 1, silent);
  }

  /**
   * Decrease exhaustion by 1 level
   * @param {Actor} actor - The PF2E actor
   * @param {boolean} silent - If true, don't send chat messages
   */
  static async decreaseExhaustion(actor, silent = false) {
    const current = this.getExhaustionLevel(actor);
    await this.setExhaustionLevel(actor, current - 1, silent);
  }

  /**
   * Apply all conditions for a given exhaustion level (cumulative)
   * @param {Actor} actor - The PF2E actor
   * @param {number} targetLevel - Target exhaustion level
   */
  static async applyExhaustionConditions(actor, targetLevel) {
    // Calculate cumulative condition values
    const conditionTotals = {
      drained: 0,
      clumsy: 0,
      enfeebled: 0,
      stupefied: 0,
      sickened: 0,
      doomed: 0
    };

    // Sum up conditions from all levels up to target
    for (let lvl = 1; lvl <= targetLevel; lvl++) {
      const levelData = this.EXHAUSTION_LEVELS[lvl];
      if (!levelData) continue;

      for (const [condition, value] of Object.entries(levelData.conditions)) {
        if (typeof value === 'number') {
          conditionTotals[condition] = (conditionTotals[condition] || 0) + value;
        }
      }
    }

    // Apply fatigued at level 1+
    if (targetLevel >= 1) {
      await this.applyCondition(actor, 'fatigued');
    }

    // Apply flat-footed at level 2+
    if (targetLevel >= 2) {
      await this.applyCondition(actor, 'flat-footed');
    }

    // Apply dazzled at level 4+
    if (targetLevel >= 4) {
      await this.applyCondition(actor, 'dazzled');
    }

    // Apply unconscious at level 6
    if (targetLevel >= 6) {
      await this.applyCondition(actor, 'unconscious');
      // Set HP to max 1
      const currentHP = actor.system.attributes.hp.value;
      if (currentHP > 1) {
        await actor.update({ 'system.attributes.hp.value': 1 });
      }
    }

    // Apply valued conditions
    for (const [condition, value] of Object.entries(conditionTotals)) {
      if (value > 0) {
        await this.applyCondition(actor, condition, value);
      }
    }

    // Handle special effects
    if (targetLevel >= 3) {
      await this.applyHalfSpeedEffect(actor);
    }

    if (targetLevel >= 5) {
      await actor.setFlag('uncharted-journeys', 'stunnedOnCombatStart', 3);
    }
  }

  /**
   * Apply a condition to an actor
   * @param {Actor} actor - The PF2E actor
   * @param {string} slug - Condition slug
   * @param {number} value - Condition value (for valued conditions)
   */
  static async applyCondition(actor, slug, value = null) {
    try {
      if (value !== null) {
        // For valued conditions, try to set to specific value
        const existing = actor.conditions.bySlug(slug);
        if (existing.length > 0) {
          // Update existing condition value
          const condition = existing[0];
          if (condition.value !== value) {
            await condition.update({ 'system.value.value': value });
          }
        } else {
          // Add new condition with value
          await actor.increaseCondition(slug, { value });
        }
      } else {
        // For boolean conditions
        const existing = actor.conditions.bySlug(slug);
        if (existing.length === 0) {
          await actor.increaseCondition(slug);
        }
      }
    } catch (error) {
      console.error(`Uncharted Journeys | Failed to apply condition ${slug}:`, error);
    }
  }

  /**
   * Remove all exhaustion-related conditions
   * @param {Actor} actor - The PF2E actor
   */
  static async clearExhaustionConditions(actor) {
    const conditionsToRemove = [
      'fatigued', 'drained', 'clumsy', 'enfeebled', 'stupefied',
      'dazzled', 'sickened', 'doomed', 'flat-footed', 'unconscious'
    ];

    for (const slug of conditionsToRemove) {
      try {
        const conditions = actor.conditions.bySlug(slug);
        for (const condition of conditions) {
          await condition.delete();
        }
      } catch (error) {
        // Condition might not exist, that's fine
      }
    }

    // Remove special effects
    await this.removeHalfSpeedEffect(actor);
    await actor.unsetFlag('uncharted-journeys', 'stunnedOnCombatStart');
  }

  /**
   * Apply half-speed effect using a temporary effect item
   * @param {Actor} actor - The PF2E actor
   */
  static async applyHalfSpeedEffect(actor) {
    // Check if effect already exists
    const existing = actor.items.find(i =>
      i.flags?.['uncharted-journeys']?.exhaustionEffect === 'half-speed'
    );
    if (existing) return;

    // Create a temporary effect item for half speed
    const effectData = {
      type: 'effect',
      name: 'Exhaustion: Half Speed',
      img: 'icons/svg/downgrade.svg',
      system: {
        slug: 'exhaustion-half-speed',
        description: {
          value: '<p>Your speed is halved due to exhaustion level 3+.</p>'
        },
        duration: {
          value: -1,
          unit: 'unlimited'
        },
        rules: [{
          key: 'FlatModifier',
          selector: 'land-speed',
          type: 'untyped',
          value: {
            brackets: [{
              start: 0,
              end: Infinity,
              value: '-@actor.system.attributes.speed.value / 2'
            }]
          }
        }]
      },
      flags: {
        'uncharted-journeys': {
          exhaustionEffect: 'half-speed'
        }
      }
    };

    try {
      await actor.createEmbeddedDocuments('Item', [effectData]);
    } catch (error) {
      console.error('Uncharted Journeys | Failed to create half-speed effect:', error);
    }
  }

  /**
   * Remove half-speed effect
   * @param {Actor} actor - The PF2E actor
   */
  static async removeHalfSpeedEffect(actor) {
    const effect = actor.items.find(i =>
      i.flags?.['uncharted-journeys']?.exhaustionEffect === 'half-speed'
    );
    if (effect) {
      await effect.delete();
    }
  }

  /**
   * Create a chat message announcing the exhaustion change
   * @param {Actor} actor - The PF2E actor
   * @param {number} newLevel - New exhaustion level
   * @param {number} oldLevel - Previous exhaustion level
   */
  static async createExhaustionMessage(actor, newLevel, oldLevel) {
    const levelData = this.EXHAUSTION_LEVELS[newLevel];

    let content = `<div class="uncharted-journeys-exhaustion compact">`;
    content += `<p><strong>${actor.name}</strong> is now at exhaustion level <strong>${newLevel}</strong>.</p>`;

    if (newLevel > 0 && levelData) {
      content += `<p class="exhaustion-effect">${levelData.description}</p>`;
    } else if (newLevel === 0) {
      content += `<p class="exhaustion-effect">All exhaustion effects removed.</p>`;
    }

    content += `</div>`;

    await ChatMessage.create({
      content,
      speaker: { alias: 'Uncharted Journeys' }
    });
  }

  /**
   * Get a summary of all exhaustion effects for display
   * @param {number} level - Exhaustion level
   * @returns {Object} Summary of effects
   */
  static getExhaustionSummary(level) {
    if (level === 0) {
      return { level: 0, effects: [], description: 'Not exhausted' };
    }

    const effects = [];
    const conditionTotals = {
      drained: 0,
      clumsy: 0,
      enfeebled: 0,
      stupefied: 0,
      sickened: 0,
      doomed: 0
    };

    for (let lvl = 1; lvl <= level; lvl++) {
      const levelData = this.EXHAUSTION_LEVELS[lvl];
      if (!levelData) continue;

      for (const [condition, value] of Object.entries(levelData.conditions)) {
        if (typeof value === 'number') {
          conditionTotals[condition] += value;
        } else if (value === true) {
          effects.push(condition);
        }
      }

      effects.push(...levelData.effects);
    }

    // Add valued conditions to effects list
    for (const [condition, value] of Object.entries(conditionTotals)) {
      if (value > 0) {
        effects.push(`${condition} ${value}`);
      }
    }

    return {
      level,
      effects,
      description: this.EXHAUSTION_LEVELS[level]?.description || ''
    };
  }

  /**
   * Handle exhaustion effect badge changes (left/right click)
   * This is called when the user clicks the badge on the effect
   * Note: We can't use setExhaustionLevel here because the badge value
   * is already updated by PF2E, so getExhaustionLevel would return the new value
   * @param {Actor} actor - The actor
   * @param {Item} effect - The exhaustion effect item
   * @param {number} newValue - The new badge value
   */
  static async handleBadgeChange(actor, effect, newValue) {
    const oldLevel = effect.flags?.['uncharted-journeys']?.exhaustionLevel || 0;

    // Clamp to valid range
    newValue = Math.max(0, Math.min(6, newValue));

    if (newValue === oldLevel) return;

    // Clear existing exhaustion conditions
    await this.clearExhaustionConditions(actor);

    if (newValue === 0) {
      // Remove the effect entirely
      await effect.delete();
      await actor.unsetFlag('uncharted-journeys', 'exhaustionLevel');
      ui.notifications.info(`${actor.name} is no longer exhausted.`);
      await this.createExhaustionMessage(actor, 0, oldLevel);
    } else {
      // Apply conditions for new level
      await this.applyExhaustionConditions(actor, newValue);

      // Update the effect's flag and name (badge value already updated by PF2E)
      await effect.update({
        name: `Exhaustion ${newValue}`,
        'system.description.value': `<p><strong>Exhaustion Level ${newValue}</strong></p><p>${this.EXHAUSTION_LEVELS[newValue]?.description || ''}</p>`,
        'flags.uncharted-journeys.exhaustionLevel': newValue
      });

      // Update actor flag
      await actor.setFlag('uncharted-journeys', 'exhaustionLevel', newValue);

      // Notify
      const levelData = this.EXHAUSTION_LEVELS[newValue];
      const direction = newValue > oldLevel ? 'gains' : 'reduces to';
      ui.notifications.info(`${actor.name} ${direction} exhaustion level ${newValue}. ${levelData?.description || ''}`);

      await this.createExhaustionMessage(actor, newValue, oldLevel);
    }
  }
}

/**
 * Hook: Apply Stunned 3 at combat start for level 5+ exhaustion
 */
Hooks.on('combatStart', async (combat) => {
  for (const combatant of combat.combatants) {
    const actor = combatant.actor;
    if (!actor) continue;

    const stunnedValue = actor.getFlag('uncharted-journeys', 'stunnedOnCombatStart');
    if (stunnedValue) {
      try {
        await actor.increaseCondition('stunned', { value: stunnedValue });
        ui.notifications.warn(`${actor.name} begins combat Stunned ${stunnedValue} from exhaustion!`);

        await ChatMessage.create({
          content: `<div class="uncharted-journeys-exhaustion">
            <p><i class="fas fa-dizzy"></i> <strong>${actor.name}</strong> begins combat <strong>Stunned ${stunnedValue}</strong> due to severe exhaustion!</p>
          </div>`,
          speaker: { alias: 'Uncharted Journeys' }
        });
      } catch (error) {
        console.error('Uncharted Journeys | Failed to apply stunned on combat start:', error);
      }
    }
  }
});

/**
 * Hook: Reduce exhaustion on rest (optional integration with PF2E rest system)
 */
Hooks.on('pf2e.restForTheNight', async (actor) => {
  const currentLevel = ExhaustionManager.getExhaustionLevel(actor);
  if (currentLevel > 0) {
    await ExhaustionManager.decreaseExhaustion(actor);
  }
});

/**
 * Hook: Watch for exhaustion effect updates (badge clicks)
 * When the user left/right clicks the effect badge, PF2E updates the badge value
 */
Hooks.on('updateItem', async (item, changes, options, userId) => {
  // Only process if this is an exhaustion effect
  if (!item.flags?.['uncharted-journeys']?.isExhaustionEffect) return;

  // Only process if the badge value changed
  if (!changes.system?.badge?.value) return;

  // Only the user who made the change should process it
  if (game.user.id !== userId) return;

  const actor = item.actor;
  if (!actor) return;

  const newValue = changes.system.badge.value;
  const currentLevel = item.flags['uncharted-journeys'].exhaustionLevel || 0;

  // Prevent recursive updates
  if (newValue === currentLevel) return;

  // Handle the badge change
  await ExhaustionManager.handleBadgeChange(actor, item, newValue);
});

/**
 * Hook: Watch for exhaustion effect deletion
 * When the user deletes the effect, clear all exhaustion
 */
Hooks.on('deleteItem', async (item, options, userId) => {
  // Only process if this is an exhaustion effect
  if (!item.flags?.['uncharted-journeys']?.isExhaustionEffect) return;

  // Only the user who made the change should process it
  if (game.user.id !== userId) return;

  const actor = item.actor;
  if (!actor) return;

  // Clear all exhaustion conditions without creating a new effect
  await ExhaustionManager.clearExhaustionConditions(actor);
  await actor.unsetFlag('uncharted-journeys', 'exhaustionLevel');

  ui.notifications.info(`${actor.name} is no longer exhausted.`);
});

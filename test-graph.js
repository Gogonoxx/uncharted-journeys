/**
 * Test script for route graph generation
 * Run with: node test-graph.js
 *
 * NEW RULES (FINAL):
 * 1. RED nodes SKIP a row - they connect from row N to row N+2
 * 2. RED nodes are ALWAYS optional - parent always has yellow/green alternative
 * 3. RED path = fewer total encounters (faster but dangerous)
 * 4. Main path = yellow/green nodes (row by row)
 * 5. Treasure in column 3
 */

function generateBranchingRoute(biomeSequence, baseNodeCount, distance = 'medium') {
  const nodes = [];
  let nodeIdCounter = 0;
  const nextId = () => `node-${nodeIdCounter++}`;

  const pickRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];
  const random = () => Math.random();

  // Config based on distance
  const config = {
    short: { rows: 5, yellow: 4, red: 2, green: 2 },
    medium: { rows: 7, yellow: 6, red: 3, green: 3 },
    long: { rows: 9, yellow: 8, red: 4, green: 4 }
  };
  const { rows: totalRows, yellow: targetYellow, red: targetRed, green: targetGreen } = config[distance];

  let colorCounts = { yellow: 0, red: 0, green: 0 };

  function getNextYellowOrGreen(parentColor) {
    const remaining = {
      yellow: targetYellow - colorCounts.yellow,
      green: targetGreen - colorCounts.green
    };

    let pool = [];
    if (parentColor === 'green') {
      if (remaining.yellow > 0) pool.push('yellow', 'yellow', 'yellow');
      if (remaining.green > 0) pool.push('green');
    } else {
      if (remaining.yellow > 0) pool.push('yellow', 'yellow');
      if (remaining.green > 0) pool.push('green');
    }
    if (pool.length === 0) pool = ['yellow'];
    return pickRandom(pool);
  }

  // Start node
  const startNode = {
    id: nextId(),
    row: 0,
    col: 1,
    location: { name: 'START', type: 'green' },
    childIds: [],
    parentIds: []
  };
  nodes.push(startNode);

  // Build main path (yellow/green only) row by row
  const nodesByRow = [[startNode]];

  for (let row = 1; row < totalRows; row++) {
    const prevRowNodes = nodesByRow[row - 1] || [];
    const rowNodes = [];

    // 1-2 nodes per row
    const prevCount = prevRowNodes.length;
    const nodeCount = prevCount === 1 ? (random() < 0.55 ? 2 : 1) : (random() < 0.45 ? 1 : 2);

    let columns;
    if (nodeCount === 1) {
      columns = [pickRandom([0, 1, 1, 2])];
    } else {
      columns = pickRandom([[0, 2], [0, 1], [1, 2]]);
    }

    // Colors (yellow/green only for main path)
    let colors = [];
    for (let i = 0; i < nodeCount; i++) {
      const parentColors = prevRowNodes.map(p => p.location.type);
      const dominantParent = parentColors[0] || 'yellow';

      let color;
      if (nodeCount === 2 && i === 1 && colors[0] === 'green') {
        color = 'yellow';
      } else if (nodeCount === 2 && i === 1 && colors[0] === 'yellow') {
        color = random() < 0.3 ? 'green' : 'yellow';
      } else {
        color = getNextYellowOrGreen(dominantParent);
      }
      colorCounts[color]++;
      colors.push(color);
    }

    // Create nodes
    for (let i = 0; i < columns.length; i++) {
      const col = columns[i];
      const colorType = colors[i];

      const newNode = {
        id: nextId(),
        row,
        col,
        location: { name: `R${row}C${col}-${colorType[0].toUpperCase()}`, type: colorType },
        childIds: [],
        parentIds: []
      };
      nodes.push(newNode);
      rowNodes.push(newNode);
    }

    // Connect parents to children
    for (const parent of prevRowNodes) {
      const connectableChildren = rowNodes.filter(child =>
        Math.abs(parent.col - child.col) <= 1
      );

      if (connectableChildren.length === 0) continue;

      const connectionCount = Math.min(connectableChildren.length, random() < 0.35 ? 1 : 2);
      const shuffled = [...connectableChildren].sort(() => random() - 0.5);

      for (let i = 0; i < connectionCount; i++) {
        const child = shuffled[i];
        if (!parent.childIds.includes(child.id)) {
          parent.childIds.push(child.id);
          child.parentIds.push(parent.id);
        }
      }
    }

    // Ensure every child has parent
    for (const child of rowNodes) {
      if (child.parentIds.length === 0) {
        const closest = prevRowNodes.reduce((best, p) => {
          const dist = Math.abs(p.col - child.col);
          if (!best || dist < Math.abs(best.col - child.col)) return p;
          return best;
        }, null);
        if (closest) {
          closest.childIds.push(child.id);
          child.parentIds.push(closest.id);
        }
      }
    }

    nodesByRow.push(rowNodes);
  }

  // Goal node
  const goalNode = {
    id: nextId(),
    row: totalRows,
    col: 1,
    location: { name: 'GOAL', type: 'green' },
    childIds: [],
    parentIds: []
  };
  nodes.push(goalNode);

  // Connect last row to goal
  const lastRowNodes = nodesByRow[nodesByRow.length - 1] || [];
  for (const node of lastRowNodes) {
    node.childIds.push(goalNode.id);
    goalNode.parentIds.push(node.id);
  }

  // === ADD RED SHORTCUTS ===
  // Red = skip connection from row N directly to row N+2
  // Parent MUST have yellow/green child at row N+1 (the safe alternative)
  let redsPlaced = 0;

  for (let sourceRow = 0; sourceRow < totalRows - 2 && redsPlaced < targetRed; sourceRow++) {
    const sourceNodes = nodesByRow[sourceRow];
    const skipTargetRow = sourceRow + 2;
    const skipTargetNodes = nodesByRow[skipTargetRow];

    if (!skipTargetNodes || skipTargetNodes.length === 0) continue;

    for (const parent of sourceNodes) {
      if (redsPlaced >= targetRed) break;

      // Parent must have at least one child at row+1 (safe path)
      const hasNormalChild = parent.childIds.some(cid => {
        const child = nodes.find(n => n.id === cid);
        return child && child.row === sourceRow + 1;
      });

      if (!hasNormalChild) continue;
      if (random() > 0.6) continue; // Not every node gets a red option

      // Find target at row+2
      const connectableTargets = skipTargetNodes.filter(target =>
        Math.abs(parent.col - target.col) <= 1
      );

      if (connectableTargets.length === 0) continue;

      const target = pickRandom(connectableTargets);

      // Create red node - it's a "floating" shortcut between rows
      // Place it at row+0.5 (fractional) and column based on parent/target
      const redNode = {
        id: nextId(),
        row: sourceRow + 0.5, // Between rows!
        col: Math.round((parent.col + target.col) / 2),
        location: { name: `SHORTCUT`, type: 'red' },
        childIds: [target.id],
        parentIds: [parent.id],
        isShortcut: true,
        skipFrom: sourceRow,
        skipTo: skipTargetRow
      };

      parent.childIds.push(redNode.id);
      target.parentIds.push(redNode.id);

      nodes.push(redNode);
      colorCounts.red++;
      redsPlaced++;
    }
  }

  // Orphan check
  for (const node of nodes) {
    if (node.childIds.length === 0 && node.id !== goalNode.id && !node.location.name.includes('TREASURE')) {
      const nextRow = Math.ceil(node.row) + 1;
      const nextRowNodes = nodesByRow[nextRow] || [];
      if (nextRowNodes.length > 0) {
        const target = pickRandom(nextRowNodes);
        node.childIds.push(target.id);
        target.parentIds.push(node.id);
      } else {
        node.childIds.push(goalNode.id);
        goalNode.parentIds.push(node.id);
      }
    }
  }

  // Treasure
  if (random() < 0.8) {
    const yellowNodes = nodes.filter(n =>
      n.row >= 2 && n.row <= totalRows - 2 &&
      n.location.type === 'yellow' &&
      n.col <= 2 &&
      !n.isShortcut
    );

    if (yellowNodes.length > 0) {
      const branchFrom = pickRandom(yellowNodes);
      const treasureNode = {
        id: nextId(),
        row: branchFrom.row + 1,
        col: 3,
        location: { name: 'TREASURE', type: 'treasure' },
        childIds: [],
        parentIds: [branchFrom.id]
      };
      branchFrom.childIds.push(treasureNode.id);
      nodes.push(treasureNode);

      const laterNodes = nodes.filter(n =>
        n.row > treasureNode.row && n.row <= treasureNode.row + 2 &&
        !n.location.name.includes('GOAL') && n.col <= 2 && !n.isShortcut
      );
      if (laterNodes.length > 0) {
        const reconnect = pickRandom(laterNodes);
        treasureNode.childIds.push(reconnect.id);
        reconnect.parentIds.push(treasureNode.id);
      } else {
        treasureNode.childIds.push(goalNode.id);
        goalNode.parentIds.push(treasureNode.id);
      }
    }
  }

  return { nodes, colorCounts, nodesByRow };
}

// Visualization
function renderASCII(nodes, colorCounts) {
  const maxRow = Math.max(...nodes.map(n => Math.ceil(n.row)));
  const maxCol = Math.max(...nodes.map(n => n.col));

  // Grid with half-rows for shortcuts
  const grid = [];
  for (let r = 0; r <= maxRow * 2; r++) {
    grid[r] = [];
    for (let c = 0; c <= maxCol; c++) {
      grid[r][c] = '      ';
    }
  }

  // Place nodes
  for (const node of nodes) {
    const gridRow = Math.round(node.row * 2); // Scale for half-rows
    const color = node.location.type;
    const symbol = color === 'red' ? ' [🔴] ' :
                   color === 'yellow' ? ' [🟡] ' :
                   color === 'green' ? ' [🟢] ' :
                   color === 'treasure' ? ' [💎] ' :
                   ' [??] ';
    grid[gridRow][node.col] = symbol;
  }

  console.log('\n=== ROUTE MAP (with shortcuts between rows) ===\n');
  const colHeaders = Array.from({length: maxCol + 1}, (_, i) => i === 3 ? 'SCHATZ' : ` Col${i} `);
  console.log('Row  | ' + colHeaders.join('|'));
  console.log('-----+' + '-'.repeat((maxCol + 1) * 8));

  for (let r = 0; r <= maxRow * 2; r++) {
    const hasContent = grid[r].some(c => c.trim() !== '');
    if (hasContent) {
      const row = grid[r].join('|');
      const rowLabel = r % 2 === 0 ? `  ${r/2}  ` : ' skip ';
      console.log(`${rowLabel}| ${row}`);
    }
  }

  // Connections
  console.log('\n=== CONNECTIONS ===');
  for (const node of nodes) {
    if (node.childIds.length > 0) {
      const children = node.childIds.map(cid => {
        const child = nodes.find(n => n.id === cid);
        if (!child) return '?';
        const rowDiff = Math.ceil(child.row) - Math.ceil(node.row);
        const skipMarker = rowDiff > 1 ? ` [SKIP→R${Math.ceil(child.row)}]` : '';
        return `${child.location.type[0].toUpperCase()}${skipMarker}`;
      });

      let info = '';
      const hasRed = children.some(c => c.startsWith('R'));
      const hasNonRed = children.some(c => !c.startsWith('R'));
      if (hasRed && hasNonRed) info = ' ✓ Red optional';
      else if (hasRed && !hasNonRed) info = ' ⚠️ RED FORCED!';

      const isShort = node.isShortcut ? ' (SHORTCUT)' : '';
      console.log(`R${node.row}C${node.col}${isShort} (${node.location.type[0]}) -> [${children.join(', ')}]${info}`);
    }
  }

  // Stats
  console.log('\n=== STATS ===');
  console.log(`Nodes: ${nodes.length} | 🔴${colorCounts.red} 🟡${colorCounts.yellow} 🟢${colorCounts.green}`);

  // Verify
  let redOptional = 0, redForced = 0, skips = 0;
  for (const node of nodes) {
    if (node.location.type === 'red') {
      for (const parentId of node.parentIds) {
        const parent = nodes.find(n => n.id === parentId);
        if (parent) {
          const nonRed = parent.childIds.filter(cid => {
            const c = nodes.find(n => n.id === cid);
            return c && c.location.type !== 'red';
          });
          if (nonRed.length > 0) redOptional++;
          else redForced++;
        }
      }
    }
    // Check for actual row skips
    for (const childId of node.childIds) {
      const child = nodes.find(n => n.id === childId);
      if (child && Math.ceil(child.row) - Math.ceil(node.row) > 1) {
        skips++;
      }
    }
  }
  console.log(`Red optional: ${redOptional} | Red forced: ${redForced} | Skip connections: ${skips}`);

  const treasure = nodes.find(n => n.location.type === 'treasure');
  if (treasure) console.log(`Treasure: col ${treasure.col} ${treasure.col === 3 ? '✓' : '⚠️'}`);
}

// RUN
console.log('=== RED SHORTCUTS TEST ===\n');
console.log('Red nodes are SHORTCUTS that skip a row.');
console.log('They appear BETWEEN rows (at row 0.5, 1.5, etc.)\n');

for (const dist of ['short', 'medium']) {
  console.log(`\n${'='.repeat(60)}`);
  console.log(`DISTANCE: ${dist.toUpperCase()}`);
  console.log('='.repeat(60));

  for (let i = 0; i < 2; i++) {
    console.log(`\n--- Run ${i + 1} ---`);
    const { nodes, colorCounts } = generateBranchingRoute(['grassland'], 5, dist);
    renderASCII(nodes, colorCounts);
  }
}

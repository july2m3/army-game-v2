import hexTiles from "../borderless.png";
import archer from "../sprites/archer.png";
import archerLeft from "../sprites/archerLeft.png";
import assassin from "../sprites/assassin.png";
import assassinLeft from "../sprites/assassinLeft.png";
import brute from "../sprites/brute.png";
import bruteLeft from "../sprites/bruteLeft.png";
import spearman from "../sprites/spearman.png";
import spearmanLeft from "../sprites/spearmanLeft.png";

const gridWidth = 8;
const gridHeight = 16;

const sprites = {
  grid: hexTiles,
  archerPlayer: archerLeft,
  archerEnemy: archer,
  assassinPlayer: assassinLeft,
  assassinEnemy: assassin,
  brutePlayer: bruteLeft,
  bruteEnemy: brute,
  spearmanPlayer: spearmanLeft,
  spearmanEnemy: spearman,
};

// prettier-ignore
const grid = [
  0, 0, 0, 0, 0, 0, 0, 0,
  8, 1, 1, 1, 1, 1, 1, 1,
  4, 3, 3, 3, 3, 3, 3, 3,
  5, 5, 5, 1, 1, 1, 1, 1,
  0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0,
  8, 1, 1, 1, 1, 1, 1, 1,
  4, 3, 3, 3, 3, 3, 3, 3,
  5, 5, 5, 1, 1, 1, 1, 1,
  0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0,
];

export { sprites, grid, gridHeight, gridWidth };

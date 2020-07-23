import hexTiles from '../borderless.png';
import archer from '../sprites/archer.png';
import archerLeft from '../sprites/archerLeft.png';
import assassin from '../sprites/assassin.png';
import assassinLeft from '../sprites/assassinLeft.png';
import brute from '../sprites/brute.png';
import bruteLeft from '../sprites/bruteLeft.png';
import spearman from '../sprites/spearman.png';
import spearmanLeft from '../sprites/spearmanLeft.png';

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

const GetCharacterFromName = (characterName: string, soldiers: any) => {
  switch (characterName) {
    case 'Brute':
      return soldiers[0];
    case 'Heavy Infantry':
      return soldiers[1];
    case 'Knight':
      return soldiers[2];
    case 'Light Infantry':
      return soldiers[3];
    case 'Pikeman':
      return soldiers[4];
    case 'Scout':
      return soldiers[5];
    case 'Spearman':
      return soldiers[6];
    case 'Assassin':
      return soldiers[7];
    case 'Archer':
      return soldiers[8];
    default:
      return soldiers[0];
  }
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

import React from 'react';
import { v4 as uuid } from 'uuid';

import './style.scss';

import hexTiles from './borderless.png';

import archer from './sprites/archer.png';
import archerLeft from './sprites/archerLeft.png';

import assassin from './sprites/assassin.png';
import assassinLeft from './sprites/assassinLeft.png';

import brute from './sprites/brute.png';
import bruteLeft from './sprites/bruteLeft.png';

import spearman from './sprites/spearman.png';
import spearmanLeft from './sprites/spearmanLeft.png';

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

// let soldier
interface SoldierSprites {
  image: any;
  row: number;
  col: number;
}

const Sprite = (img: any, c: number, r: number) => {
  console.log(`here with ${img} ${c}, ${r}`);
  let xLocation = r * 48 + 16 + 8;
  let yLocation = c * 16 - 24 + 16;

  // if is odd
  if (c % 2 === 0) {
    xLocation -= 24;
  }

  return (
    <>
      <div
        key={uuid()}
        className="sprite"
        style={{
          background: `url(${img}) left center`,
          left: `${xLocation}px`,
          top: `${yLocation}px`,
        }}
      />
    </>
  );
};

// given a number, return those amount od soldiers
const createPlayerArmy = (numberOfSoldiers: number) => {
  return (
    <>
      {Sprite(assassinLeft, 2, 2)}
      {Sprite(archerLeft, 4, 2)}
      {Sprite(bruteLeft, 6, 2)}
      {Sprite(spearmanLeft, 8, 2)}
    </>
  );
};

const createEnemyArmy = (numberOfSoldiers: number) => {
  return (
    <>
      {Sprite(assassin, 2, 5)}
      {Sprite(archer, 4, 5)}
      {Sprite(brute, 6, 5)}
      {Sprite(spearman, 8, 5)}
    </>
  );
};

// for each sodlier show soldiers
const showSoldiers = (soldiers: Array<SoldierSprites>) => {
  soldiers.map((soldier) => {
    return Sprite(soldier.image, soldier.row, soldier.col);
  });
};

const App = () => {
  const [playerSoldiers, updatePlayerSoldiers] = React.useState([
    { image: 'null', row: 2, column: 2 },
  ]);
  const [enemySoldiers, updateEnemySoldiers] = React.useState({});
  const width = 8;
  const height = 16;
  let items = new Array(width * height).fill(1).map((i) => {
    return {
      x: Math.floor(Math.random() * 7),
      y: Math.floor(Math.random() * 4),
    };
  });

  // if row is odd, move it to the side, give it class of odd
  const gridItems = items.map((i, index) => {
    const positionX = grid[index] % 8;
    const positionY = Math.floor(grid[index] / 8);
    const x = positionX * 32;
    const y = positionY * 32 + (positionY * 16 + 16);

    const currentColumn = Math.floor(index / width);
    const currentRow = Math.floor(index % 8);
    const itemClass = Math.floor(index / width) % 2 === 0 ? 'even' : 'odd';

    return (
      <li
        className={`${itemClass}`}
        key={uuid()}
        style={{
          background: `url(${hexTiles}) no-repeat`,
          backgroundPosition: `-${x}px -${y}px`,
          width: '32px',
          height: '32px',
        }}
      >
        {currentColumn}, {currentRow}
      </li>
    );
  });

  React.useEffect(() => {
    let soldiers: Array<any> = [];
    soldiers = [...soldiers, { image: assassinLeft, column: 4, row: 2 }];
    soldiers = [...soldiers, { image: archerLeft, column: 2, row: 2 }];
    // soldiers = [...soldiers, { image: assassinLeft, row: 2, column: 2 }];
    updatePlayerSoldiers(soldiers);
  }, []);

  const PlayerArmy = () => {
    if (playerSoldiers.length < 2) return;
    console.log(playerSoldiers);
    // const info = playerSoldiers.map((soldier) => {
    //   Sprite(soldier.image, soldier.column, soldier.row);
    // });
    // console.log(info);

    return (
      <>
        {playerSoldiers.map((soldier) =>
          Sprite(soldier.image, soldier.column, soldier.row),
        )}
      </>
    );
  };

  const soldiersMarch = () => {
    console.log('updating soldiers');
    const currentSoldiers = [...playerSoldiers];

    currentSoldiers.map((soldier) => {
      console.log(soldier);
      if (soldier.column % 2 === 0) {
        soldier.column = soldier.column + 1;
        if (soldier.column > width) {
          soldier.row = 0;
        }
      } else {
        // return (soldier.row = soldier.row + 1; soldier.column);
        soldier.column = soldier.column - 1;
        soldier.row = soldier.row + 1;
        if (soldier.row >= width) {
          soldier.row = 0;
        }
      }
      return soldier;
    });
    updatePlayerSoldiers([...currentSoldiers]);
  };

  return (
    <>
      <div className="container">
        <div className="grid">
          <ul>
            {gridItems}
            {PlayerArmy()}
            {/* {createPlayerArmy(2)} */}
            {/* {createEnemyArmy(2)} */}
          </ul>
        </div>
        <img
          src={hexTiles}
          alt="loading hex tiles"
          style={{ display: 'none' }}
        />
      </div>
      <button
        className="hugeButton"
        onClick={() => {
          soldiersMarch();
        }}
      >
        March forward
      </button>
    </>
  );
};

export default App;

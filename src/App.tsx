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

const Sprite = (img: any, c: number, r: number, isPlayer?: boolean) => {
  let xLocation = r * 48 + 16 + 8;
  let yLocation = c * 16 - 24 + 16;
  let translateInfo = 'scaleX(1)';

  // if (isPlayer === true) {
  //   // translateInfo = 'scaleX(-1)';
  // }

  // if is odd
  if (c % 2 === 0) {
    xLocation -= 24;
  }

  console.log(xLocation, yLocation);

  return (
    <>
      <div
        className="sprite"
        style={{
          zIndex: 1,
          // transform: translateInfo,
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
      {Sprite(archerLeft, 4, 2, true)}
      {Sprite(bruteLeft, 6, 2, true)}
      {Sprite(spearmanLeft, 8, 2)}
    </>
  );
};

const createEnemyArmy = (numberOfSoldiers: number) => {
  return (
    <>
      {Sprite(assassin, 2, 5)}
      {Sprite(archer, 4, 5, true)}
      {Sprite(brute, 6, 5, true)}
      {Sprite(spearman, 8, 5)}
    </>
  );
};

const App = () => {
  const width = 8;
  const height = 16;
  let items = new Array(width * height).fill(1).map((i) => {
    return {
      x: Math.floor(Math.random() * 7),
      y: Math.floor(Math.random() * 4),
    };
  });

  // backgroundPositionY: '-16px',
  // if row is odd, move the fuck to the side, give it class of odd
  const listOfItems = items.map((i, index) => {
    const positionX = grid[index] % 8;
    const positionY = Math.floor(grid[index] / 8);
    const x = positionX * 32;
    const y = positionY * 32 + (positionY * 16 + 16);

    const currentColumn = Math.floor(index / width);
    const currentRow = Math.floor(index % 8);
    console.log(currentColumn, currentRow);
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

  return (
    <div className="container">
      <div className="grid">
        <ul>
          {listOfItems}
          {createPlayerArmy(2)}
          {createEnemyArmy(2)}

          {/* for testing */}
          {/* {Sprite(archer, 12, 5)}
          {Sprite(archer, 1, 0)}
          {Sprite(brute, 1, 1)}
          {Sprite(assassin, 3, 4)}
          {Sprite(spearman, 4, 4)} */}
        </ul>
      </div>
      <img src={hexTiles} alt="loading hex tiles" style={{ display: 'none' }} />
    </div>
  );
};

export default App;

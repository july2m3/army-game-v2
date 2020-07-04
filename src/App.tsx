import React from 'react';
import { v4 as uuid } from 'uuid';

import './style.scss';

import hexTiles from './borderless.png';
import archer from './sprites/archer.png';
import assassin from './sprites/assassin.png';
import brute from './sprites/brute.png';
import spearman from './sprites/spearman.png';

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
];

const Sprite = (img: any, x: number, y: number) => {
  let xLocation = x * 32;
  let yLocation = y * 32 - 8;
  console.log(xLocation, yLocation);

  return (
    <>
      <div
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

const App = () => {
  const width = 8;
  const height = 6;
  let items = new Array(width * height).fill(1).map((i) => {
    return {
      x: Math.floor(Math.random() * 7),
      y: Math.floor(Math.random() * 4),
    };
  });

  // backgroundPositionY: '-16px',
  const listOfItems = items.map((i, index) => {
    const positionX = grid[index] % 8;
    const positionY = Math.floor(grid[index] / 8);
    const x = positionX * 32;
    const y = positionY * 32 + (positionY * 16 + 16);

    return (
      <li
        key={uuid()}
        style={{
          // background: `url(${hexTiles}) no-repeat`,
          // zoom: '2',
          backgroundPosition: `-${x}px -${y}px`,
          width: '32px',
          height: '32px',
        }}
      ></li>
    );
  });

  return (
    <div className="container">
      <div className="grid">
        <ul>
          {Sprite(archer, 0, 0)}
          {Sprite(brute, 1, 1)}
          {Sprite(assassin, 3, 4)}
          {Sprite(spearman, 5, 4)}
          {listOfItems}
        </ul>
      </div>
      <img src={hexTiles} alt="loading hex tiles" style={{ display: 'none' }} />
    </div>
  );
};

export default App;

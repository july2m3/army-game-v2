import React from 'react';
import { v4 as uuid } from 'uuid';

import './style.scss';
import hexTiles from './borderless.png';
import emptyImage from './emptySmall.png';
import blankImage from './white.png';

// prettier-ignore
const grid = [
  0, 0, 0, 0, 0, 0, 0, 0,
  8, 1, 1, 1, 1, 1, 1, 1,
  3, 3, 3, 3, 3, 3, 3, 3,
  1, 1, 1, 1, 1, 1, 1, 1,
  0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0,
];

const App = () => {
  const width = 8;
  const height = 8;
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
          background: `url(${hexTiles}) no-repeat`,
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
        <ul>{listOfItems}</ul>
      </div>
      <img src={hexTiles} alt="loading hex tiles" style={{ display: 'none' }} />
    </div>
  );
};

export default App;

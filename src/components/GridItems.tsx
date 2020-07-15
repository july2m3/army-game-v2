import React from "react";

import { v4 as uuid } from "uuid";
import { sprites, grid, gridHeight, gridWidth } from "./GameFunctions";

const GridItems = () => {
  const items = new Array(gridWidth * gridHeight).fill(1).map((i) => {
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

    const currentColumn = Math.floor(index / gridWidth);
    const currentRow = Math.floor(index % 8);
    const itemClass = Math.floor(index / gridWidth) % 2 === 0 ? "even" : "odd";

    return (
      <li
        className={`${itemClass}`}
        key={uuid()}
        style={{
          background: `url(${sprites.grid}) no-repeat`,
          backgroundPosition: `-${x}px -${y}px`,
          width: "32px",
          height: "32px",
        }}
      >
        {currentColumn}, {currentRow}
      </li>
    );
  });

  return <>{gridItems}</>;
};

export default GridItems;

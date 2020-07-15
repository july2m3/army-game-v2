import React from "react";
import { v4 as uuid } from "uuid";

import Sprite from "./components/Sprite";
import {
  sprites,
  grid,
  gridHeight,
  gridWidth,
} from "./components/GameFunctions";

import "./style.scss";

// let soldier
interface SoldierSprites {
  image: any;
  row: number;
  col: number;
}

const App = () => {
  const [playerSoldiers, updatePlayerSoldiers] = React.useState([
    { image: "null", row: 2, column: 2 },
  ]);
  // const [enemySoldiers, updateEnemySoldiers] = React.useState({});

  let items = new Array(gridWidth * gridHeight).fill(1).map((i) => {
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

  React.useEffect(() => {
    let soldiers: Array<any> = [];
    soldiers = [
      ...soldiers,
      { image: sprites.assassinPlayer, column: 4, row: 2 },
    ];
    soldiers = [
      ...soldiers,
      { image: sprites.archerPlayer, column: 2, row: 2 },
    ];
    updatePlayerSoldiers(soldiers);
  }, []);

  const PlayerArmy = () => {
    if (playerSoldiers.length < 2) return;
    console.log(playerSoldiers);

    return (
      <>
        {playerSoldiers.map((soldier) =>
          Sprite(soldier.image, soldier.column, soldier.row),
        )}
      </>
    );
  };

  const enemyArmy = () => {
    console.log("enemy army");
  };

  const soldiersMarch = () => {
    console.log("updating soldiers");
    const currentSoldiers = [...playerSoldiers];

    currentSoldiers.map((soldier) => {
      console.log(soldier);
      if (soldier.column % 2 === 0) {
        soldier.column = soldier.column + 1;
        if (soldier.column > gridWidth) {
          soldier.row = 0;
        }
      } else {
        // return (soldier.row = soldier.row + 1; soldier.column);
        soldier.column = soldier.column - 1;
        soldier.row = soldier.row + 1;
        if (soldier.row >= gridWidth) {
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
            {enemyArmy()}
          </ul>
        </div>
        <img
          src={sprites.grid}
          alt="loading hex tiles"
          style={{ display: "none" }}
        />
      </div>
      <button
        className="player-button"
        onClick={() => {
          soldiersMarch();
        }}
      >
        March Forward
      </button>

      <button className="enemy-button">Enemy Forward</button>
    </>
  );
};

export default App;

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
import GridItems from "./components/GridItems";

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
  const [enemySoldiers, updateEnemySoldiers] = React.useState([
    { image: "null", row: 2, column: 2 },
  ]);

  React.useEffect(() => {
    let playerSoldiers: Array<any> = [];
    let enemySoldiers: Array<any> = [];
    playerSoldiers = [
      { image: sprites.assassinPlayer, column: 4, row: 2 },
      { image: sprites.archerPlayer, column: 2, row: 2 },
    ];
    enemySoldiers = [
      { image: sprites.assassinEnemy, column: 2, row: 6 },
      { image: sprites.archerEnemy, column: 4, row: 6 },
    ];

    updatePlayerSoldiers(playerSoldiers);
    updateEnemySoldiers(enemySoldiers);
  }, []);

  const playerArmy = () => {
    if (playerSoldiers.length < 2) return;

    return (
      <>
        {playerSoldiers.map((soldier) =>
          Sprite(soldier.image, soldier.column, soldier.row, true),
        )}
      </>
    );
  };

  const enemyArmy = () => {
    if (enemySoldiers.length < 2) return;
    return (
      <>
        {enemySoldiers.map((soldier) =>
          Sprite(soldier.image, soldier.column, soldier.row, false),
        )}
      </>
    );
  };

  const soldiersMarch = (isPlayer = true) => {
    const currentSoldiers = isPlayer ? [...playerSoldiers] : [...enemySoldiers];
    if (isPlayer) {
      currentSoldiers.map((soldier) => {
        if (soldier.column % 2 === 0) {
          console.log(soldier.column);
          soldier.column = soldier.column + 1;
          if (soldier.column > gridWidth) {
            soldier.row = 0;
          }
        } else {
          soldier.column = soldier.column - 1;
          soldier.row = soldier.row + 1;
          if (soldier.row >= gridWidth) {
            soldier.row = 0;
          }
        }
        return soldier;
      });
      updatePlayerSoldiers([...currentSoldiers]);
    } else {
      currentSoldiers.map((soldier) => {
        if (soldier.column % 2 === 0) {
          soldier.column = soldier.column + 1;
          soldier.row = soldier.row - 1;
        } else {
          soldier.column = soldier.column - 1;
        }
      });
      updateEnemySoldiers([...currentSoldiers]);
    }
  };

  return (
    <>
      <div className="container">
        <div className="grid">
          <ul>
            <GridItems />
            {playerArmy()}
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

      <button
        className="enemy-button"
        onClick={() => {
          soldiersMarch(false);
        }}
      >
        Enemy Forward
      </button>
    </>
  );
};

export default App;

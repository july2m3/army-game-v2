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
  // const [enemySoldiers, updateEnemySoldiers] = React.useState({});

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
    const currentSoldiers = [...playerSoldiers];

    currentSoldiers.map((soldier) => {
      if (soldier.column % 2 === 0) {
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
  };

  return (
    <>
      <div className="container">
        <div className="grid">
          <ul>
            <GridItems />
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

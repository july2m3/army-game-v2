class Soldier {
  attack: number;
  hp: number;
  accuracy: number;
  isAlive: boolean;
  name: string;

  constructor(attack = 15, hp = 15, accuracy = 100, name = 'Julio') {
    this.name = name;
    this.attack = attack >= 1 ? attack : 1;
    this.hp = hp > 0 ? hp : 1;
    this.accuracy = accuracy < 0 ? 1 : accuracy > 100 ? 100 : accuracy;
    this.isAlive = hp > 0;
  }

  attackEnemy = (enemy: Soldier, previousLog = ['']) => {
    let log = [...previousLog];

    if (this !== enemy) {
      const attackRole = Math.random() * 100;

      // If attack hit
      if (attackRole <= this.accuracy) {
        enemy.hp -= this.attack;
        log = [
          ...log,
          `${this.name} hit ${enemy.name}. ${enemy.name} now has ${enemy.hp}hp`,
        ];
        // check if enemy died in battle
        enemy.isAlive = enemy.hp > 0;
      } else {
        // else if attack missed
        log = [...log, `${this.name} missed!`];
      }
    }
    return log;
  };
}
export default Soldier;

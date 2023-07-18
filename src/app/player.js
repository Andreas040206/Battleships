import gameboard from "./gameboard";

class player {
  constructor(name) {
    this.name = name;
    this.board = new gameboard();
  }
}

class AI {
  constructor() {
    this.name = "AI";
    this.board = new gameboard();
    this.attackLog = [];
    this.nextAttack = [];
    this.newAttackedShip = [];
  }
  attack(player) {
    const hasAttacked = ([x, y]) => {
      return this.attackLog.reduce((state, coor) => {
        if (coor[0] == x && coor[1] == y) {
          return true;
        } else {
          return state;
        }
      }, false);
    };

    const attackRandomly = () => {
      let x = Math.ceil(Math.random() * 10);
      let y = Math.ceil(Math.random() * 10);

      if (hasAttacked([x, y]) == true) {
        return this.attack(player);
      } else {
        this.attackLog.push([x, y]);
        return [x, y];
      }
    };

    if (this.nextAttack[0] !== undefined) {
      // We have hit something before, and we have attacked a new spot
      if (
        this.attackLog[this.attackLog.length - 1][0] ==
          player.board.hits[player.board.hits.length - 1][0] &&
        this.attackLog[this.attackLog.length - 1][1] ==
          player.board.hits[player.board.hits.length - 1][1]
      ) {
        // We hit something last time
        let prevAttack = this.attackLog[this.attackLog.length - 1];

        // Push to attacked ship
        this.newAttackedShip.push(prevAttack);
      }

      if (this.newAttackedShip.length > 1) {
        // This means we have hit two points of the ship, we know it direction
        // We need to change the plan

        if (this.newAttackedShip[0][0] == this.newAttackedShip[1][0]) {
          // Its on the y axis

          // We need to clear next attack to prevent attacking unnecessary spots
          this.nextAttack = [];

          // Find ship edges
          // Find the smallest
          let shipStart = this.newAttackedShip.reduce(
            (state, cur) => (state[1] > cur[1] ? cur : state),
            [0, Infinity]
          );
          // Find the greatest
          let shipEnd = this.newAttackedShip.reduce(
            (state, cur) => (state[1] < cur[1] ? cur : state),
            [0, 0 - Infinity]
          );

          // Find end and see if it needs to be attacked
          if (
            hasAttacked([shipEnd[0], shipEnd[1] + 1]) == false &&
            shipEnd[1] + 1 <= 10
          ) {
            // We need to attack this spot later
            this.nextAttack.push([shipEnd[0], shipEnd[1] + 1]);
          }
          // Find start and see if it needs to be attacked
          if (
            hasAttacked([shipStart[0], shipStart[1] - 1]) == false &&
            shipStart[1] - 1 >= 1
          ) {
            // We need to attack this spot later
            this.nextAttack.push([shipStart[0], shipStart[1] - 1]);
          }

          if (
            (hasAttacked([shipEnd[0], shipEnd[1] + 1]) == true ||
              shipEnd[1] + 1 > 10) &&
            (hasAttacked([shipStart[0], shipStart[1] - 1]) == true ||
              shipStart[1] - 1 < 1)
          ) {
            // We have destroyed the intiere ship

            // Clear attacking ship, because it is destroyed
            this.newAttackedShip = [];

            return attackRandomly();
          }
        } else {
          // Its on the x axis

          // We need to clear next attack to prevent attacking unnecessary spots
          this.nextAttack = [];

          // Find ship edges

          // Find the smallest
          let shipStart = this.newAttackedShip.reduce(
            (state, cur) => (state[0] > cur[0] ? cur : state),
            [Infinity, 0]
          );
          // Find the greatest
          let shipEnd = this.newAttackedShip.reduce(
            (state, cur) => (state[0] < cur[0] ? cur : state),
            [0 - Infinity, 0]
          );

          // Find end and see if it needs to be attacked
          if (
            hasAttacked([shipEnd[0] + 1, shipEnd[1]]) == false &&
            shipEnd[0] + 1 <= 10
          ) {
            // We need to attack this spot later
            this.nextAttack.push([shipEnd[0] + 1, shipEnd[1]]);
          }
          // Find start and see if it needs to be attacked
          if (
            hasAttacked([shipStart[0] - 1, shipStart[1]]) == false &&
            shipStart[0] - 1 >= 1
          ) {
            // We need to attack this spot later
            this.nextAttack.push([shipStart[0] - 1, shipStart[1]]);
          }

          if (
            (hasAttacked([shipEnd[0] + 1, shipEnd[1]]) == true ||
              shipEnd[0] + 1 > 10) &&
            (hasAttacked([shipStart[0] - 1, shipStart[1]]) == true ||
              shipStart[0] - 1 < 1)
          ) {
            // Clear attacking ship, because it is destroyed

            // Clear attacking ship
            this.newAttackedShip = [];

            return attackRandomly();
          }
        }
      }
      // we need to attack acordingly to our plan

      this.attackLog.push(this.nextAttack[0]);
      this.nextAttack.shift();

      // To make sure it dosen't skip an attack because nextAttack[0] == undefinded
      if (this.nextAttack[0] == undefined) {
        this.nextAttack.push(null);
      }

      // If all spots around the ship has been attacked
      if (
        hasAttacked([
          this.newAttackedShip[0][0] - 1,
          this.newAttackedShip[0][1],
        ]) == true &&
        hasAttacked([
          this.newAttackedShip[0][0] + 1,
          this.newAttackedShip[0][1],
        ]) == true &&
        hasAttacked([
          this.newAttackedShip[0][0],
          this.newAttackedShip[0][1] + 1,
        ]) == true &&
        hasAttacked([
          this.newAttackedShip[0][0],
          this.newAttackedShip[0][1] - 1,
        ]) == true
      ) {
        // We shouldn't attack around the ship

        // Clear newAttackedShip
        this.newAttackedShip = [];

        // Clear next
        this.nextAttack = [];

        // Make a random attack
        attackRandomly();
      }
      return this.attackLog[this.attackLog.length - 1];
    } else if (this.attackLog.length > 0 && player.board.hits.length > 0) {
      if (
        this.attackLog[this.attackLog.length - 1][0] ==
          player.board.hits[player.board.hits.length - 1][0] &&
        this.attackLog[this.attackLog.length - 1][1] ==
          player.board.hits[player.board.hits.length - 1][1]
      ) {
        // We have just hit something, and we have no prev plans
        let prevAttack = this.attackLog[this.attackLog.length - 1];

        // Push to attacked ship
        this.newAttackedShip.push(prevAttack);

        if (
          prevAttack[0] + 1 <= 10 &&
          hasAttacked([prevAttack[0] + 1, prevAttack[1]]) == false
        ) {
          // We need to check this spot
          this.nextAttack.push([prevAttack[0] + 1, prevAttack[1]]);
        }
        if (
          prevAttack[1] + 1 <= 10 &&
          hasAttacked([prevAttack[0], prevAttack[1] + 1]) == false
        ) {
          // We need to check this spot
          this.nextAttack.push([prevAttack[0], prevAttack[1] + 1]);
        }

        if (
          prevAttack[0] - 1 >= 1 &&
          hasAttacked([prevAttack[0] - 1, prevAttack[1]]) == false
        ) {
          // We need to check this spot
          this.nextAttack.push([prevAttack[0] - 1, prevAttack[1]]);
        }
        if (
          prevAttack[1] - 1 >= 1 &&
          hasAttacked([prevAttack[0], prevAttack[1] - 1]) == false
        ) {
          // We need to check this spot
          this.nextAttack.push([prevAttack[0], prevAttack[1] - 1]);
        }

        // make sure it dosen't attack undefined
        if (this.nextAttack[0] == undefined) {
          return attackRandomly();
        } else {
          this.attackLog.push(this.nextAttack[0]);
          this.nextAttack.shift();

          return this.attackLog[this.attackLog.length - 1];
        }
      } else {
        // We have no clue, shoot randomly
        return attackRandomly();
      }
    } else {
      // We have no clue, shoot randomly
      return attackRandomly();
    }
  }
  placeShips() {
    let shipAry = [];

    const calcCoor = (shipLength) => {
      let x = Math.ceil(Math.random() * 10);
      let y = Math.ceil(Math.random() * 10);

      let shipCoorAry = [[x, y]];

      if (Math.random() < 0.5) {
        for (let i = 1; i < shipLength; i++) {
          if (x + shipLength <= 10) {
            shipCoorAry.push([x + i, y]);
          } else {
            shipCoorAry.push([x - i, y]);
          }
        }
      } else {
        for (let i = 1; i < shipLength; i++) {
          if (y + shipLength <= 10) {
            shipCoorAry.push([x, y + i]);
          } else {
            shipCoorAry.push([x, y - i]);
          }
        }
      }

      let hasDub = (arr) => arr.length !== new Set(arr).size;

      let shipCoorTestAry = [];

      shipAry.forEach((shipElCoor) => {
        shipElCoor.forEach((coorSet) => {
          shipCoorTestAry.push(coorSet[0].toString() + coorSet[1].toString());
        });
      });

      shipCoorAry.forEach((coorSet) => {
        shipCoorTestAry.push(coorSet[0].toString() + coorSet[1].toString());
      });

      if (hasDub(shipCoorTestAry) == true) {
        return calcCoor(shipLength);
      } else {
        return shipCoorAry;
      }
    };

    shipAry.push(calcCoor(2));
    shipAry.push(calcCoor(3));
    shipAry.push(calcCoor(3));
    shipAry.push(calcCoor(4));
    shipAry.push(calcCoor(4));
    shipAry.push(calcCoor(5));

    this.board.placeShips(shipAry);
  }
}

const newAI = new AI();
newAI.placeShips();

export { player, AI };

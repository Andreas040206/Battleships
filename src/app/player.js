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
  }
  attack() {
    let x = Math.ceil(Math.random() * 10);
    let y = Math.ceil(Math.random() * 10);

    let hasAttacked = this.attackLog.reduce((state, coor) => {
      if (coor[0] == x && coor[1] == y) {
        return true;
      } else {
        return state;
      }
    }, false);

    if (hasAttacked == true) {
      return this.attack();
    } else {
      this.attackLog.push([x, y]);
      return [x, y];
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

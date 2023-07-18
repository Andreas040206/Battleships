import ship from "./ships";

class gameboard {
  constructor() {
    this.missed = [];
    this.hits = [];
    this.ships = [];
  }

  placeShips(ary) {
    ary.forEach((newAry) => {
      const newShip = new ship(newAry);
      this.ships.push(newShip);
    });
  }

  shipsSailing() {
    return this.ships.reduce(
      (count, shipEl) => (shipEl.isSunk() == false ? count + 1 : count),
      0
    );
  }

  recieveAttack([x, y]) {
    // First we compare coordinates so we dont hit the same spot twice
    if (
      this.missed.reduce(
        (state, cur) =>
          cur[0] == x && cur[1] == y ? (state = false) : (state = true),
        true
      ) == true &&
      this.hits.reduce(
        (state, cur) =>
          cur[0] == x && cur[1] == y ? (state = false) : (state = true),
        true
      ) == true
    ) {
      // We check if a ship has been hit
      let isHit = this.ships.reduce((isHit1, placedShip) => {
        let val = placedShip.coor.reduce((state, coordinate) => {
          if (coordinate[0] == x && coordinate[1] == y) {
            // We have a hit
            placedShip.hit();
            this.hits.push([x, y]);
            return true;
          } else {
            return state;
          }
        }, false);
        if (val == true) {
          return true;
        } else {
          return isHit1;
        }
      }, false);
      if (isHit == false) this.missed.push([x, y]);
    } else {
      // We hit the same spot
      // Trow error
    }
  }

  allSunk = () => (this.shipsSailing() == 0 ? true : false);
}

export default gameboard;

import ship from "../app/ships";
import gameboard from "../app/gameboard";
import { player, AI } from "../app/player";
import { ary } from "lodash";

test("ships: Ship can sink", () => {
  const newShip = new ship([
    [3, 3],
    [3, 4],
    [3, 5],
  ]);
  newShip.hit();
  newShip.hit();
  newShip.hit();
  expect(newShip.isSunk()).toBe(true);
});

test("Gameboard: Missed attacks and hits will be logged", () => {
  const newBoard = new gameboard([]);

  newBoard.placeShips([
    [
      [3, 3],
      [3, 4],
      [3, 5],
    ],
  ]);

  newBoard.recieveAttack([3, 3]);
  newBoard.recieveAttack([3, 4]);

  newBoard.recieveAttack([5, 5]);
  newBoard.recieveAttack([6, 8]);

  expect(newBoard.hits).toContainEqual([3, 3]);
  expect(newBoard.hits).toContainEqual([3, 4]);
  expect(newBoard.missed).toContainEqual([5, 5]);
  expect(newBoard.missed).toContainEqual([6, 8]);
});

test("Gameboard: Ships can sink", () => {
  const newBoard = new gameboard();

  newBoard.placeShips([
    [
      [4, 6],
      [4, 7],
      [4, 8],
      [4, 9],
      [4, 10],
    ],
    [
      [6, 5],
      [6, 4],
      [6, 3],
      [6, 2],
    ],
    [
      [3, 1],
      [3, 2],
      [3, 3],
      [3, 4],
    ],
    [
      [10, 9],
      [10, 8],
      [10, 7],
    ],
    [
      [8, 3],
      [8, 4],
      [8, 5],
    ],
    [
      [8, 7],
      [8, 8],
    ],
  ]);

  expect(newBoard.shipsSailing()).toBe(6);

  newBoard.recieveAttack([8, 7]);
  newBoard.recieveAttack([8, 8]);

  newBoard.recieveAttack([4, 6]);
  newBoard.recieveAttack([4, 7]);
  newBoard.recieveAttack([4, 8]);
  newBoard.recieveAttack([4, 9]);
  newBoard.recieveAttack([4, 10]);

  newBoard.recieveAttack([10, 9]);
  newBoard.recieveAttack([10, 8]);
  newBoard.recieveAttack([10, 7]);

  newBoard.recieveAttack([3, 1]);
  newBoard.recieveAttack([3, 2]);
  newBoard.recieveAttack([3, 3]);
  newBoard.recieveAttack([3, 4]);

  newBoard.recieveAttack([8, 3]);
  newBoard.recieveAttack([8, 4]);
  newBoard.recieveAttack([8, 5]);

  expect(newBoard.shipsSailing()).toBe(1);

  newBoard.recieveAttack([6, 5]);
  newBoard.recieveAttack([6, 4]);
  newBoard.recieveAttack([6, 3]);
  newBoard.recieveAttack([6, 2]);

  expect(newBoard.allSunk()).toBe(true);
});

test("AI: Place ships correctly", () => {
  const bot = new AI();

  bot.placeShips();

  // Test if all ships are placed inside of grid
  let isPLacedCorrect = bot.board.ships.reduce((state, shipEl) => {
    let shipState = shipEl.coor.reduce((state1, coor) => {
      if (coor[0] <= 10 || coor[0] >= 1 || coor[1] <= 10 || coor[1] >= 1) {
        return true;
      } else {
        return state1;
      }
    }, false);
    if (shipState == false) return false;
    else return state;
  }, true);

  let hasDub = (arr) => arr.length !== new Set(arr).size;

  let shipCoorAry = [];

  bot.board.ships.forEach((shipEl) => {
    shipEl.coor.forEach((coorSet) => {
      shipCoorAry.push(coorSet[0].toString() + coorSet[1].toString());
    });
  });

  expect(isPLacedCorrect).toBe(true);
  expect(bot.board.ships.length).toBe(6);

  expect(hasDub(shipCoorAry)).toBe(false);
});

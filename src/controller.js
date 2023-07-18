import {
  loadingScreen,
  placeShipsDOM,
  playAgainstAI,
  resumeGame,
  twoPlayer,
} from "./gameloop";

loadingScreen();

if (localStorage.getItem("game")) {
  // If there is data of previus game, let them resume
  resumeGame().then(() => {
    const game = JSON.parse(localStorage.getItem("game"));

    if (game.player1 !== undefined && game.player2 !== undefined) {
      // Its a two player game

      if (
        game.player1.board.ships[0] !== undefined &&
        game.player2.board.ships[0] !== undefined
      ) {
        // All ships have been placed

        // Create new game
        const newGame = new twoPlayer(game.player1.name, game.player2.name);

        // Push ship coordinats
        const p1ShipCoor = [];

        game.player1.board.ships.forEach((shipEl) => {
          p1ShipCoor.push(shipEl.coor);
        });

        // Push ship coordinats
        const p2ShipCoor = [];

        game.player2.board.ships.forEach((shipEl) => {
          p2ShipCoor.push(shipEl.coor);
        });

        // Add new ships so they have methoeds
        newGame.player1.board.placeShips(p1ShipCoor);
        newGame.player2.board.placeShips(p2ShipCoor);

        // Add attacks by reciving all attacks, so ships update too
        game.player1.board.hits.forEach((hitCoor) => {
          newGame.player1.board.recieveAttack(hitCoor);
        });

        // Copy missed log
        newGame.player1.board.missed = game.player1.board.missed;

        // Add attacks by reciving all attacks, so ships update too
        game.player2.board.hits.forEach((hitCoor) => {
          newGame.player2.board.recieveAttack(hitCoor);
        });

        // Copy missed log
        newGame.player2.board.missed = game.player2.board.missed;

        // Remove the loadingScreen
        const loadingScreenEl = document.getElementById("loadingScreenEl");

        loadingScreenEl.style.transition = "1s";
        setTimeout(() => {
          loadingScreenEl.style.opacity = "0";
        }, 50);
        setTimeout(() => {
          document.body.removeChild(loadingScreenEl);
        }, 1050);

        // Check whoms turn it was
        setTimeout(() => {
          if (
            newGame.player1.board.missed.length +
              newGame.player1.board.hits.length ==
            newGame.player2.board.missed.length +
              newGame.player2.board.hits.length
          ) {
            // Its player 1's turn
            newGame.passScreenDOM(newGame.player1).then(() => {
              newGame.attackCycleDOM(newGame.player1, newGame.player2);
            });
          } else {
            // Its player 2's turn
            newGame.passScreenDOM(newGame.player2).then(() => {
              newGame.attackCycleDOM(newGame.player2, newGame.player1);
            });
          }
        }, 1050);
      } else if (game.player1.board.ships[0] == undefined) {
        // No ships have been placed

        // Create new game
        const newGame = new twoPlayer(game.player1.name, game.player2.name);

        // Remove the loadingScreen
        const loadingScreenEl = document.getElementById("loadingScreenEl");

        loadingScreenEl.style.transition = "1s";
        setTimeout(() => {
          loadingScreenEl.style.opacity = "0";
        }, 50);
        setTimeout(() => {
          document.body.removeChild(loadingScreenEl);
        }, 1050);

        // Preceed with gamecycle
        setTimeout(() => {
          newGame.passScreenDOM(newGame.player1).then(() => {
            placeShipsDOM(newGame.player1).then(() => {
              localStorage.setItem("game", JSON.stringify(newGame));
              newGame.passScreenDOM(newGame.player2).then(() => {
                placeShipsDOM(newGame.player2).then(() => {
                  localStorage.setItem("game", JSON.stringify(newGame));
                  newGame.passScreenDOM(newGame.player1).then(() => {
                    newGame.attackCycleDOM(newGame.player1, newGame.player2);
                  });
                });
              });
            });
          });
        }, 1050);
      } else {
        // player 1 has placed their ships

        // Create new game
        const newGame = new twoPlayer(game.player1.name, game.player2.name);

        // Remove the loadingScreen
        const loadingScreenEl = document.getElementById("loadingScreenEl");

        loadingScreenEl.style.transition = "1s";
        setTimeout(() => {
          loadingScreenEl.style.opacity = "0";
        }, 50);
        setTimeout(() => {
          document.body.removeChild(loadingScreenEl);
        }, 1050);

        // Push ship coordinats
        const p1ShipCoor = [];

        game.player1.board.ships.forEach((shipEl) => {
          p1ShipCoor.push(shipEl.coor);
        });

        // Add new ships so they have methoeds
        newGame.player1.board.placeShips(p1ShipCoor);

        // Preceed with gamecycle
        setTimeout(() => {
          newGame.passScreenDOM(newGame.player2).then(() => {
            placeShipsDOM(newGame.player2).then(() => {
              localStorage.setItem("game", JSON.stringify(newGame));
              newGame.passScreenDOM(newGame.player1).then(() => {
                newGame.attackCycleDOM(newGame.player1, newGame.player2);
              });
            });
          });
        }, 1050);
      }
    } else {
      // Its an AI game

      const newGame = new playAgainstAI("");

      // Copy coordinates
      const playerShipCoor = [];

      game.player.board.ships.forEach((shipEl) => {
        playerShipCoor.push(shipEl.coor);
      });

      // Place ships again so ships have methoeds
      newGame.player.board.placeShips(playerShipCoor);

      // Add attacks by reciving all attacks, so ships update too
      game.player.board.hits.forEach((hitCoor) => {
        newGame.player.board.recieveAttack(hitCoor);
      });

      // Copy missed log
      newGame.player.board.missed = game.player.board.missed;

      // Copy coordinates
      const AIShipCoor = [];

      game.AI.board.ships.forEach((shipEl) => {
        AIShipCoor.push(shipEl.coor);
      });

      // Place ships again so ships have methoeds
      newGame.AI.board.placeShips(AIShipCoor);

      // Add attacks by reciving all attacks, so ships update too
      game.AI.board.hits.forEach((hitCoor) => {
        newGame.AI.board.recieveAttack(hitCoor);
      });

      // Copy missed log
      newGame.AI.board.missed = game.AI.board.missed;

      // Copy attack log
      newGame.AI.attackLog = game.AI.attackLog;

      // Remove the loadingScreen
      const loadingScreenEl = document.getElementById("loadingScreenEl");

      loadingScreenEl.style.transition = "1s";
      setTimeout(() => {
        loadingScreenEl.style.opacity = "0";
      }, 50);
      setTimeout(() => {
        document.body.removeChild(loadingScreenEl);
      }, 1050);

      setTimeout(() => {
        newGame.displayGameDom();
      }, 1050);
    }
  });
}

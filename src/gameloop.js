import { player, AI } from "./app/player";

// Soundeffects
import battleMusicSrc from "./Audio/battle-of-the-dragons-8037.mp3";
import clickSoundSrc from "./Audio/computer-processing-sound-effects-short-click-select-01-122134.mp3";
import buttonShiftSoundSrc from "./Audio/interface-button-154180.mp3";
import watterSplashSoundSrc from "./Audio/splash-by-blaukreuz-6261.mp3";
import explotionSoundSrc from "./Audio/medium-explosion-40472.mp3";

import ship from "./app/ships";

// Img
import passDeviceImageSrc from "./images/passDeviceSrc.png";
import settingIconSrc from "./images/settingsIconSrc.svg";
import backArrowIconSrc from "./images/backArrowIconSrc.svg";

let masterVolume = 0.5;

let musicVolume = 1;
let SFXVolume = 1;

// Check localstorage for audio data
if (localStorage.getItem("audioVolume")) {
  // There is data
  const audioObj = JSON.parse(localStorage.getItem("audioVolume"));

  // Set current volume
  masterVolume = audioObj.masterVolume;
  musicVolume = audioObj.musicVolume;
  SFXVolume = audioObj.SFXVolume;
}

const saveAudioToStorage = () => {
  const audioObj = {
    masterVolume: masterVolume,
    musicVolume: musicVolume,
    SFXVolume: SFXVolume,
  };
  localStorage.setItem("audioVolume", JSON.stringify(audioObj));
};

const battleMusic = new Audio(battleMusicSrc);
battleMusic.loop = true;

const changeVolume = () => {
  // Change music volume
  battleMusic.volume = masterVolume * musicVolume;
};

changeVolume();

const playButtonShiftSound = () => {
  if (interacted == true) {
    const sfx = new Audio(buttonShiftSoundSrc);
    sfx.volume = masterVolume * SFXVolume;
    sfx.play();
  }
};

const playClickSound = () => {
  if (interacted == true) {
    const sfx = new Audio(clickSoundSrc);
    sfx.volume = masterVolume * SFXVolume;
    sfx.play();
  }
};

const playSplashSound = () => {
  if (interacted == true) {
    const sfx = new Audio(watterSplashSoundSrc);
    sfx.volume = masterVolume * SFXVolume;
    sfx.play();
  }
};

const playExplosionSound = () => {
  if (interacted == true) {
    const sfx = new Audio(explotionSoundSrc);
    sfx.volume = masterVolume * SFXVolume;
    sfx.play();
  }
};

let interacted = false;

document.body.addEventListener("click", () => {
  if (interacted == false) {
    battleMusic.play();
    interacted = true;
  }
});

const loadingScreen = () => {
  return new Promise((resolve) => {
    const content = document.createElement("div");
    content.classList.add("contentCon");

    // For targeting if unfinished game is on (Check controller.js )
    content.setAttribute("id", "loadingScreenEl");

    // Creating header container
    const headerCon = document.createElement("div");
    headerCon.classList.add("loadingscreenHeaderCon");

    const header = document.createElement("span");
    header.classList.add("loadingscreenHeader");
    header.textContent = "BATTLESHIPS";

    headerCon.appendChild(header);

    // Creating btns
    const btnCon = document.createElement("div");
    btnCon.classList.add("loadingscreenBtnCon");

    // To make sure btn is not activated twice
    let btnClicked = false;

    const twoPlayerBtn = document.createElement("button");
    twoPlayerBtn.classList.add("loadingscreenStartBtn", "btn");
    twoPlayerBtn.textContent = "2 Player";

    twoPlayerBtn.addEventListener("click", () => {
      // Playes sound
      playClickSound();

      // Checks if a btn allready have been clicked
      if (btnClicked == false) {
        btnClicked = true;
        return new Promise((resolve, reject) => {
          // Fade existing content away
          headerCon.style.opacity = "0";
          btnCon.style.opacity = "0";

          setTimeout(() => {
            resolve();
          }, 4000);
        }).then(() => {
          // Remove content
          document.body.removeChild(content);

          // Append the new content
          const newGame = new twoPlayer();
          newGame.gameCycleDOM();
        });
      }
    });

    twoPlayerBtn.addEventListener("mouseenter", () => {
      playButtonShiftSound();
    });

    const AIBtn = document.createElement("button");
    AIBtn.classList.add("loadingscreenStartBtn", "btn");
    AIBtn.textContent = "Against AI";

    AIBtn.addEventListener("click", () => {
      // Adds click sound
      playClickSound();

      // Checks if a btn allready have been clicked
      if (btnClicked == false) {
        btnClicked = true;
        return new Promise((resolve, reject) => {
          // Fade existing content away
          headerCon.style.opacity = "0";
          btnCon.style.opacity = "0";

          setTimeout(() => {
            resolve();
          }, 4000);
        }).then(() => {
          // Remove content
          document.body.removeChild(content);

          // Append the new content
          const newGame = new playAgainstAI();
          newGame.displayGamecycleDOM();
        });
      }
    });

    AIBtn.addEventListener("mouseenter", () => {
      playButtonShiftSound();
    });

    btnCon.appendChild(twoPlayerBtn);
    btnCon.appendChild(AIBtn);

    // Appending all
    content.appendChild(headerCon);

    // Make them ready to fade in on load
    btnCon.style.opacity = "0";

    content.appendChild(btnCon);

    document.body.appendChild(content);

    // Appending setting btn
    settingsDOM();

    setTimeout(() => {
      // Make header rise effect
      header.style.bottom = "-10px";
    }, 500);

    setTimeout(() => {
      // Make them fade in
      btnCon.style.opacity = "1";
    }, 2200);

    setTimeout(() => {
      // When header have risen, start wave animation
      header.style.animation = "move 3s ease-in-out infinite alternate";
    }, 4500);
  });
};

class playAgainstAI {
  constructor() {
    this.player = new player("");
    this.AI = new AI();
  }
  displayGamecycleDOM() {
    // First display placement page
    placeShipsDOM(this.player).then(() => {
      // AI place ships
      this.AI.placeShips();

      // save game info to local storage
      localStorage.setItem("game", JSON.stringify(this));

      // When placement is done display game
      this.displayGameDom();
    });
  }
  displayGameDom() {
    return new Promise((resolve) => {
      const content = document.createElement("div");
      content.classList.add("contentCon", "AIGameCon");

      // Creating header
      const headerCon = document.createElement("div");
      headerCon.classList.add(
        "loadingscreenHeaderCon",
        "ingameHeaderCon",
        "AIGameHeaderCon"
      );

      const header = document.createElement("span");
      header.classList.add("loadingscreenHeader", "ingameHeader");
      header.textContent = "BATTLESHIPS";

      headerCon.appendChild(header);

      // Creating gameboards
      const gameboardsContainer = document.createElement("div");
      gameboardsContainer.classList.add("contentCon");

      const enemyGameboardCon = document.createElement("div");
      enemyGameboardCon.classList.add("enemyGameboardCon");

      const enemyGameboardHeader = document.createElement("span");
      enemyGameboardHeader.classList.add("enemyGameboardHeader");
      enemyGameboardHeader.textContent = "ENEMY SEAS";

      const enemyGameboard = document.createElement("div");
      enemyGameboard.classList.add("enemyGameboard");

      enemyGameboardCon.appendChild(enemyGameboard);
      enemyGameboardCon.appendChild(enemyGameboardHeader);

      setTimeout(() => {
        // Display friendly header after 4s
        friendlyBoardHeader.style.opacity = "1";
      }, 4000);

      setTimeout(() => {
        // Display enemy header after 5s with red
        enemyGameboardHeader.style.opacity = "1";
        enemyGameboardHeader.style.color = "red";
      }, 5000);

      setTimeout(() => {
        // Set enemy header turn white again
        enemyGameboardHeader.style.color = "white";
      }, 7000);

      // Creating wave animation element
      const seaWave = document.createElement("div");
      seaWave.classList.add("seaWave");

      // Creating the friendly board
      const friendlyBoardcon = document.createElement("div");
      friendlyBoardcon.classList.add("friendlyBoardcon");

      const friendlyBoardHeader = document.createElement("span");
      friendlyBoardHeader.classList.add("friendlyBoardHeader");
      friendlyBoardHeader.textContent = "FRIENDLY SEAS";

      const friendlyBoard = document.createElement("div");
      friendlyBoard.classList.add("friendlyBoard");

      friendlyBoardcon.appendChild(friendlyBoardHeader);
      friendlyBoardcon.appendChild(friendlyBoard);

      setTimeout(() => {
        // Display gameboards after 3s
        enemyGameboard.style.opacity = "1";
        friendlyBoard.style.opacity = "1";
      }, 3000);

      let gameStopped = false;

      const populateEnemyGameboard = () => {
        // Create all grid slots
        for (let i = 1; i <= 10; i++) {
          for (let j = 1; j <= 10; j++) {
            const slot = document.createElement("div");
            slot.classList.add("enemyGridSlot");

            // If it have been attacked
            let haveBeenAttacked = false;

            // Checks if it have been hit
            this.AI.board.hits.forEach((coor) => {
              // Compare coordinates
              if (j == coor[0] && i == coor[1]) {
                slot.classList.add("enemyGridSlotHit");
                haveBeenAttacked = true;
              }
            });
            // Checks if it have been attacked but missed
            this.AI.board.missed.forEach((coor) => {
              // Compare coordinates
              if (j == coor[0] && i == coor[1]) {
                slot.classList.add("enemyGridSlotMissed");
                haveBeenAttacked = true;
              }
            });

            // If it havent been attacked, make ready for it
            if (haveBeenAttacked == false) {
              slot.classList.add("enemyGridSlotUnattacked");
              slot.addEventListener("click", () => {
                // On click attack AI with coordinates
                if (gameStopped !== true) AIAttackcycle([j, i]);
              });
            }

            enemyGameboard.appendChild(slot);
          }
        }
      };

      const populateFriendlyGameboard = () => {
        // Create all grid slots
        for (let i = 1; i <= 10; i++) {
          for (let j = 1; j <= 10; j++) {
            const slot = document.createElement("div");
            slot.classList.add("enemyGridSlot");

            // If a ship has been hit
            this.player.board.hits.forEach((coor) => {
              // Compare coordinates
              if (j == coor[0] && i == coor[1]) {
                slot.classList.add("enemyGridSlotHit");
              }
            });
            // If the enemy have missed
            this.player.board.missed.forEach((coor) => {
              // Compare coordinates
              if (j == coor[0] && i == coor[1]) {
                slot.classList.add("enemyGridSlotMissed");
              }
            });
            // If slot is a ship
            this.player.board.ships.forEach((shipEl) => {
              shipEl.coor.forEach((coor) => {
                // Compare coordinates
                if (j == coor[0] && i == coor[1]) {
                  slot.classList.add("friendlyGridSlotShip");
                }
              });
            });

            friendlyBoard.appendChild(slot);
          }
        }
      };

      populateEnemyGameboard();
      populateFriendlyGameboard();

      const AIAttackcycle = ([x, y]) => {
        // AI reciece attack
        let attackedLength = this.AI.board.hits.length;

        this.AI.board.recieveAttack([x, y]);

        // Check if it hit a ship or not
        if (this.AI.board.hits.length == attackedLength) {
          playSplashSound();
        } else {
          playExplosionSound();
        }

        // Player recieve attack
        this.player.board.recieveAttack(this.AI.attack(this.player));

        // Set local storage
        localStorage.setItem("game", JSON.stringify(this));

        // Reload both gameboards
        while (friendlyBoard.lastChild) {
          friendlyBoard.removeChild(friendlyBoard.lastChild);
        }
        while (enemyGameboard.lastChild) {
          enemyGameboard.removeChild(enemyGameboard.lastChild);
        }

        populateEnemyGameboard();
        populateFriendlyGameboard();

        // If one won display win screen
        if (this.AI.board.allSunk() == true) {
          // Clear local storage
          localStorage.clear("game");

          gameStopped = true;

          const winScreen = document.createElement("div");
          winScreen.classList.add("winScreenPlayer");

          const winScreenText = document.createElement("span");
          winScreenText.classList.add("winScreenText");
          winScreenText.textContent = "YOU WON!!!";

          winScreen.appendChild(winScreenText);

          document.body.appendChild(winScreen);

          setTimeout(() => {
            winScreen.style.bottom = "0px";
          }, 50);
          setTimeout(() => {
            while (content.lastChild) {
              content.removeChild(content.lastChild);
            }
          }, 4500);
          setTimeout(() => {
            winScreen.style.opacity = "0";
          }, 7500);
          setTimeout(() => {
            while (document.body.lastChild) {
              document.body.removeChild(document.body.lastChild);
            }
            loadingScreen();
          }, 11500);
        }

        if (this.player.board.allSunk() == true) {
          // Clear loacl storage
          localStorage.clear("game");

          gameStopped = true;

          const winScreenAI = document.createElement("div");
          winScreenAI.classList.add("winScreenAI");

          const winScreenText = document.createElement("span");
          winScreenText.classList.add("winScreenText");
          winScreenText.textContent = "YOU LOST";

          winScreenAI.appendChild(winScreenText);

          document.body.appendChild(winScreenAI);

          setTimeout(() => {
            winScreenAI.style.top = "0px";
          }, 50);
          setTimeout(() => {
            while (content.lastChild) {
              content.removeChild(content.lastChild);
            }
          }, 4500);
          setTimeout(() => {
            winScreenAI.style.opacity = "0";
          }, 7500);
          setTimeout(() => {
            while (document.body.lastChild) {
              document.body.removeChild(document.body.lastChild);
            }
            loadingScreen();
          }, 11500);
        }
      };

      // Appending
      gameboardsContainer.appendChild(enemyGameboardCon);
      gameboardsContainer.appendChild(seaWave);
      gameboardsContainer.appendChild(friendlyBoardcon);

      setTimeout(() => {
        // Fade in after 1.5s
        enemyGameboardCon.style.opacity = "1";
        seaWave.style.opacity = "1";
        friendlyBoardcon.style.opacity = "1";
      }, 1500);

      // Appending all
      content.appendChild(headerCon);
      content.appendChild(gameboardsContainer);

      setTimeout(() => {
        // Fade in after 0.5s
        headerCon.style.opacity = "1";
      }, 500);

      document.body.appendChild(content);
    });
  }
}

class twoPlayer {
  constructor(player1Name, player2Name) {
    this.player1 = new player(player1Name);
    this.player2 = new player(player2Name);
  }
  gameCycleDOM() {
    // Run every part when it resolves
    this.getNameDOM().then(() => {
      localStorage.setItem("game", JSON.stringify(this));
      this.passScreenDOM(this.player1).then(() => {
        placeShipsDOM(this.player1).then(() => {
          localStorage.setItem("game", JSON.stringify(this));
          this.passScreenDOM(this.player2).then(() => {
            placeShipsDOM(this.player2).then(() => {
              localStorage.setItem("game", JSON.stringify(this));
              this.passScreenDOM(this.player1).then(() => {
                this.attackCycleDOM(this.player1, this.player2);
              });
            });
          });
        });
      });
    });
  }
  getNameDOM() {
    return new Promise((resolve) => {
      const content = document.createElement("form");
      content.classList.add("contentCon", "getNameContentCon");
      content.setAttribute("onsubmit", "return false");

      // Create input con
      const nameInputCon = document.createElement("div");
      nameInputCon.classList.add("getNameInputConCon");

      // Create PLayer 1 inputcon
      const player1InputCon = document.createElement("div");
      player1InputCon.classList.add("getNameInputCon", "contentCon");

      const player1InputLabel = document.createElement("span");
      player1InputLabel.classList.add("getNameInputLabel");
      player1InputLabel.textContent = "PLAYER 1:";

      const player1Input = document.createElement("input");
      player1Input.classList.add("getNameInput");
      player1Input.setAttribute("placeholder", "NAME");

      player1Input.addEventListener("input", () => {
        playButtonShiftSound();
        player1Input.value = player1Input.value.toUpperCase();
        if (player1Input.value !== "" && player2Input.value !== "") {
          nextBtn.classList.add("getNameNextBtnReady");
        } else if (player1Input.value == "" || player2Input.value == "") {
          nextBtn.classList.remove("getNameNextBtnReady");
        }
        if (player1Input.value !== "") {
          player1Input.setCustomValidity("");
        }
      });

      player1Input.addEventListener("click", () => {
        playButtonShiftSound();
      });

      player1InputCon.appendChild(player1InputLabel);
      player1InputCon.appendChild(player1Input);

      // Create PLayer 2 inputcon
      const player2InputCon = document.createElement("div");
      player2InputCon.classList.add("getNameInputCon", "contentCon");

      const player2InputLabel = document.createElement("span");
      player2InputLabel.classList.add("getNameInputLabel");
      player2InputLabel.textContent = "PLAYER 2:";

      const player2Input = document.createElement("input");
      player2Input.classList.add("getNameInput");
      player2Input.setAttribute("placeholder", "NAME");

      player2Input.addEventListener("input", () => {
        playButtonShiftSound();
        player2Input.value = player2Input.value.toUpperCase();
        if (player1Input.value !== "" && player2Input.value !== "") {
          nextBtn.classList.add("getNameNextBtnReady");
        } else if (player1Input.value == "" || player2Input.value == "") {
          nextBtn.classList.remove("getNameNextBtnReady");
        }
        if (player2Input.value !== "") {
          player2Input.setCustomValidity("");
        }
      });

      player2Input.addEventListener("click", () => {
        playButtonShiftSound();
      });

      player2InputCon.appendChild(player2InputLabel);
      player2InputCon.appendChild(player2Input);

      // Appending
      nameInputCon.appendChild(player1InputCon);
      nameInputCon.appendChild(player2InputCon);

      // Creating nextBtn
      const nextBtn = document.createElement("input");
      nextBtn.setAttribute("type", "submit");
      nextBtn.classList.add("getNameNextBtn", "btn");
      nextBtn.setAttribute("value", "NEXT");

      let hasSubmitted = false;

      nextBtn.addEventListener("click", () => {
        if (
          player1Input.value !== "" &&
          player2Input.value !== "" &&
          hasSubmitted == false
        ) {
          playClickSound();
          this.player1.name = player1Input.value;
          this.player2.name = player2Input.value;

          content.style.opacity = "0";
          hasSubmitted = true;
          setTimeout(() => {
            document.body.removeChild(content);
            resolve();
          }, 4050);
        } else {
          if (player1Input.value === "") {
            player1Input.setCustomValidity("Please fill out this field");
          } else if (player2Input.value === "") {
            player2Input.setCustomValidity("Please fill out this field");
          }
        }
      });

      nextBtn.addEventListener("mouseenter", () => {
        if (
          player1Input.value !== "" &&
          player2Input.value !== "" &&
          hasSubmitted == false
        ) {
          playButtonShiftSound();
        }
      });

      // Appending last
      content.appendChild(nameInputCon);
      content.appendChild(nextBtn);

      document.body.appendChild(content);

      setTimeout(() => {
        // Let fade in
        content.style.opacity = "1";
      }, 50);
    });
  }
  passScreenDOM(player) {
    return new Promise((resolve) => {
      const content = document.createElement("div");
      content.classList.add("passDeviceCon");

      // Pass header
      const passHeader = document.createElement("span");
      passHeader.classList.add("passScreenHeader");
      passHeader.textContent = `PLEASE PASS THE DEVICE TO ${player.name}`;

      // Create pass icon
      const passDeviceImage = new Image();
      passDeviceImage.src = passDeviceImageSrc;
      passDeviceImage.classList.add("passDeviceImage");

      // Press to continue text
      const continueText = document.createElement("span");
      continueText.classList.add("passDeviceContinueText");
      continueText.textContent = "TAP TO CONTINUE";

      content.appendChild(passHeader);
      content.appendChild(passDeviceImage);
      content.appendChild(continueText);

      let isClicked = false;

      content.addEventListener("click", () => {
        if (isClicked == false) {
          isClicked = true;
          content.style.opacity = "0";
          setTimeout(() => {
            document.body.removeChild(content);
            resolve();
          }, 2000);
        }
      });

      content.style.opacity = "0";

      document.body.appendChild(content);
      setTimeout(() => {
        content.style.opacity = "1";
      }, 50);
    });
  }
  attackCycleDOM(player, playerNext) {
    return new Promise((resolve) => {
      const attackP1 = () => {
        attackDOM(player, playerNext).then(() => {
          localStorage.setItem("game", JSON.stringify(this));
          this.passScreenDOM(playerNext).then(() => {
            attackP2();
          });
        });
      };

      const attackP2 = () => {
        attackDOM(playerNext, player).then(() => {
          localStorage.setItem("game", JSON.stringify(this));
          this.passScreenDOM(player).then(() => {
            attackP1();
          });
        });
      };

      attackP1();
    });
  }
}

const placeShipsDOM = (player) => {
  return new Promise((resolve) => {
    // Place ships rotated if they are
    let rotated = false;

    const content = document.createElement("div");
    content.classList.add("contentCon", "placementCon");

    // Creating header
    const headerCon = document.createElement("div");
    headerCon.classList.add("placementHeaderCon");

    const header = document.createElement("span");
    header.classList.add(
      "loadingscreenHeader",
      "ingameHeader",
      "placementHeader"
    );
    header.textContent = `AYE-AYE CAPTAIN ${player.name} SELECT AND DROP YOUR SHIPS WHERE YOU WANT THEM`;

    headerCon.appendChild(header);

    // Creating drag and drop module
    const dragAndDropCon = document.createElement("div");
    dragAndDropCon.classList.add("dragAndDropCon");

    // Creating grid
    const gameBoardGrid = document.createElement("div");
    gameBoardGrid.classList.add("friendlyBoard", "placementBoard");

    // For saving selected ship in a varible
    let selectedShip = undefined;

    // Highlights selcted ship
    // Fn NOT PURE (access varible outside scope)
    const selectFn = () => {
      shipsCon.childNodes.forEach((el) => {
        el.classList.remove("placementSelectedShipEl");
      });
      selectedShip.classList.add("placementSelectedShipEl");
    };

    // Cacl ship coordinates
    // Fn NOT PURE (access varible outside scope)
    const caclShipCoor = ([x, y], num) => {
      // Save cacl coordinates
      let coorAry = [];

      if (rotated == true) {
        for (let i = 0; i < num; i++) {
          coorAry.push([x + i, y]);
        }
      } else {
        for (let i = 0; i < num; i++) {
          coorAry.push([x, y + i]);
        }
      }
      return coorAry;
    };

    // Saves hovered slots for next reload on grid
    let hoveredSlot = [[]];

    // If ships can be placed
    // Has to be scoped here for function to access previos calls
    let canPlace = true;

    const populateBoard = () => {
      for (let i = 1; i <= 10; i++) {
        for (let j = 1; j <= 10; j++) {
          const gridPlacementSlot = document.createElement("div");
          gridPlacementSlot.classList.add("gridPlacementSlot");

          // Indicate weather or not a ship has allready been placed here
          let shipElSlot = false;

          player.board.ships.forEach((shipEl) => {
            shipEl.coor.forEach((coor) => {
              if (j == coor[0] && i == coor[1]) {
                gridPlacementSlot.classList.add("friendlyGridSlotShip");
                shipElSlot = true;
              }
            });
          });

          if (shipElSlot == false) {
            gridPlacementSlot.addEventListener("click", () => {
              // If a ship is selected and ship is not and illigal place
              if (selectedShip != undefined && canPlace != false) {
                playSplashSound();

                // Create new ship with the calculated coordinates
                let newShip = new ship(
                  caclShipCoor([j, i], selectedShip.childElementCount)
                );
                // Push new ship to the player
                player.board.ships.push(newShip);

                // Make ship disapear from selectable ships
                selectedShip.classList.add("hide");

                // Clear selected ship
                selectedShip = undefined;

                // Clear hovered slots
                hoveredSlot = [[]];

                // Reload gameboard
                reloadGameboardGrid();

                // Allow player to move to battle
                if (player.board.ships.length == 6) {
                  nextBtn.classList.add("placementNextBtnReady");
                  nextReady = true;
                }
              }
            });

            // If slot is hovered
            let isHoveredSlot = false;

            if (hoveredSlot[0][0] == j && hoveredSlot[0][1] == i) {
              // This is hovered slot
              isHoveredSlot = true;
            }

            // This is not the hovered slot
            if (isHoveredSlot == false) {
              gridPlacementSlot.addEventListener("mouseenter", () => {
                if (selectedShip != undefined) {
                  // if a ship is selected
                  // Calc hovered slots based on selected ship
                  hoveredSlot = caclShipCoor(
                    [j, i],
                    selectedShip.childElementCount
                  );

                  // Reset can place
                  canPlace = true;

                  // Check if hovered is out of grid
                  hoveredSlot.forEach((corr1) => {
                    if (
                      corr1[0] < 1 ||
                      corr1[0] > 10 ||
                      corr1[1] < 1 ||
                      corr1[1] > 10
                    ) {
                      // It can't be placed then
                      canPlace = false;
                    }
                    // Check if hovered slots is over an existing ship
                    player.board.ships.forEach((shipEl1) => {
                      shipEl1.coor.forEach((coor2) => {
                        if (corr1[0] == coor2[0] && corr1[1] == coor2[1]) {
                          // Can't place ship here
                          canPlace = false;
                        }
                      });
                    });
                  });
                  // Reload to display changes
                  reloadGameboardGrid();
                }
              });
            }
          }

          // Add class to all hovered spots
          hoveredSlot.forEach((corr1) => {
            if (corr1[0] == j && corr1[1] == i) {
              // If one is out of range
              if (canPlace == false) {
                gridPlacementSlot.classList.add(
                  "placementHoveredSlotOutOfRange"
                );
              } else {
                gridPlacementSlot.classList.add("placementHoveredSlot");
              }
            }
          });

          // Append new slot
          gameBoardGrid.appendChild(gridPlacementSlot);
        }
      }
    };

    // Fires on load
    populateBoard();

    // Reload fn removes all and populates board
    const reloadGameboardGrid = () => {
      while (gameBoardGrid.lastChild) {
        gameBoardGrid.removeChild(gameBoardGrid.lastChild);
      }
      populateBoard();
    };

    // Creating ship drag and drops
    const shipDragCon = document.createElement("div");
    shipDragCon.classList.add("shipDragCon");

    const shipsCon = document.createElement("div");
    shipsCon.classList.add("placementShipsCon");

    // Creates selectable ships
    const creatingShips = (length) => {
      const shipEl = document.createElement("div");
      shipEl.classList.add("placementShipEl");

      // Make sure each cell is equal to grid cell
      shipEl.style.gridTemplateRows = `repeat(${length},1fr`;
      shipEl.style.height = `${length * 3.5}vh`;

      shipEl.addEventListener("click", () => {
        // Add ship to selected
        selectedShip = shipEl;
        // Highligts selected ship
        playButtonShiftSound();
        selectFn();
      });

      // Add slots to ship grid
      for (let i = 1; i <= length; i++) {
        const slot = document.createElement("div");
        slot.classList.add("friendlyGridSlotShip", "gridPlacementSlot");

        shipEl.appendChild(slot);
      }

      return shipEl;
    };

    // Create all ships
    const populateAllShips = () => {
      shipsCon.appendChild(creatingShips(5));
      shipsCon.appendChild(creatingShips(4));
      shipsCon.appendChild(creatingShips(4));
      shipsCon.appendChild(creatingShips(3));
      shipsCon.appendChild(creatingShips(3));
      shipsCon.appendChild(creatingShips(2));
    };

    populateAllShips();

    // Creating rotateBtn
    const rotateBtn = document.createElement("div");
    rotateBtn.classList.add("placementRotateBtn", "btn");
    rotateBtn.textContent = "Rotate";

    rotateBtn.addEventListener("click", () => {
      playButtonShiftSound();
      if (rotated == false) {
        // Rotate
        shipsCon.style.rotate = "90deg";
        rotated = true;
      } else if (rotated) {
        // Rotate back
        shipsCon.style.rotate = "0deg";
        rotated = false;
      }
    });

    // Appending
    shipDragCon.appendChild(shipsCon);
    shipDragCon.appendChild(rotateBtn);

    // Appending
    dragAndDropCon.appendChild(gameBoardGrid);
    dragAndDropCon.appendChild(shipDragCon);

    // Creating btncontainer for resetbtn and next btn
    const lowerBtnCon = document.createElement("div");
    lowerBtnCon.classList.add("placementLowerBtnCon");

    const resetBtn = document.createElement("button");
    resetBtn.classList.add("placementResetBtn", "btn");
    resetBtn.textContent = "RESET";

    let nextReady = false;

    resetBtn.addEventListener("click", () => {
      playButtonShiftSound();

      // If any ships left, remove them
      while (shipsCon.lastChild) {
        shipsCon.removeChild(shipsCon.lastChild);
      }
      // Create new selectable ships
      populateAllShips();
      // Clear players ships
      player.board.ships = [];
      // Clear the gameboard
      reloadGameboardGrid();

      // Make sure user can't go to battle now
      nextBtn.classList.remove("placementNextBtnReady");
      nextReady = false;
    });

    const nextBtn = document.createElement("button");
    nextBtn.classList.add("placementNextBtn", "btn");
    nextBtn.textContent = "NEXT";

    nextBtn.addEventListener("click", () => {
      // Only if all ships are placed
      if (nextReady == true) {
        playClickSound();
        // Create nice transistion before clearing and resolving
        content.style.right = "300vw";
        content.style.transition = "4s ease-in";
        setTimeout(() => {
          document.body.removeChild(content);
          resolve();
        }, 4000);
      }
    });

    nextBtn.addEventListener("mouseenter", () => {
      if (nextReady == true) {
        playButtonShiftSound();
      }
    });

    // Appening
    lowerBtnCon.appendChild(resetBtn);
    lowerBtnCon.appendChild(nextBtn);

    // Appending last
    content.appendChild(headerCon);
    content.appendChild(dragAndDropCon);
    content.appendChild(lowerBtnCon);

    document.body.appendChild(content);

    setTimeout(() => {
      content.style.right = "-100vw";
    }, 50);
  });
};

const settingsDOM = () => {
  return new Promise((resolve) => {
    const settingIcon = new Image();
    settingIcon.src = settingIconSrc;
    settingIcon.classList.add("settingIcon");

    document.body.appendChild(settingIcon);

    let settingIconHasBeenClicked = false;

    settingIcon.addEventListener("click", () => {
      // To avoid double load
      if (settingIconHasBeenClicked == false) {
        playButtonShiftSound();
        createSettingPage();
        settingIconHasBeenClicked = true;
      }
    });

    const createSettingPage = () => {
      const settingPageCon = document.createElement("div");
      settingPageCon.classList.add("settingPageCon");

      const backArrow = new Image();
      backArrow.src = backArrowIconSrc;
      backArrow.classList.add("settingBackArrow");

      let backArrowHasBennClicked = false;

      backArrow.addEventListener("click", () => {
        // to avoid double load
        if (backArrowHasBennClicked == false) {
          playButtonShiftSound();
          backArrowHasBennClicked = true;
          settingIconHasBeenClicked = false;
          settingPageCon.style.opacity = "0";
          setTimeout(() => {
            document.body.removeChild(settingPageCon);
            document.body.appendChild(settingIcon);
          }, 1000);
        }
      });

      // Creating sliders
      const sliderCon = document.createElement("div");
      sliderCon.classList.add("contentCon", "settingsSliderCon");

      // Mastersound slider
      const sliderConMaster = document.createElement("div");
      sliderConMaster.classList.add("settingSmallSliderCon");

      const sliderMiniConMaster = document.createElement("div");
      sliderMiniConMaster.classList.add("settingsSliderMiniCon");

      const sliderMaster = document.createElement("input");
      sliderMaster.setAttribute("type", "range");
      sliderMaster.setAttribute("value", masterVolume * 100);
      sliderMaster.classList.add("settingsSlider");

      const sliderMasterValue = document.createElement("span");
      sliderMasterValue.classList.add("settingsSliderValue");
      sliderMasterValue.textContent = `${sliderMaster.value}%`;

      sliderMaster.addEventListener("mousemove", () => {
        // Change valueble text
        sliderMasterValue.textContent = `${sliderMaster.value}%`;

        // Change global volume value
        masterVolume = sliderMaster.value / 100;

        // Set storage
        saveAudioToStorage();

        // Make sure all playing audio change volume
        changeVolume();
      });

      sliderMaster.addEventListener("change", () => {
        // Change valueble text
        sliderMasterValue.textContent = `${sliderMaster.value}%`;

        // Change global volume value
        masterVolume = sliderMaster.value / 100;

        // Set storage
        saveAudioToStorage();

        // Make sure all playing audio change volume
        changeVolume();
      });

      sliderMiniConMaster.appendChild(sliderMaster);
      sliderMiniConMaster.appendChild(sliderMasterValue);

      const sliderMasterLabel = document.createElement("span");
      sliderMasterLabel.classList.add("settingsSliderLabel");
      sliderMasterLabel.textContent = "MASTER VOLUME";

      sliderConMaster.appendChild(sliderMasterLabel);
      sliderConMaster.appendChild(sliderMiniConMaster);

      // Music sound slider
      const sliderConMusic = document.createElement("div");
      sliderConMusic.classList.add("settingSmallSliderCon");

      const sliderMiniConMusic = document.createElement("div");
      sliderMiniConMusic.classList.add("settingsSliderMiniCon");

      const sliderMusic = document.createElement("input");
      sliderMusic.setAttribute("type", "range");
      sliderMusic.setAttribute("value", musicVolume * 100);
      sliderMusic.classList.add("settingsSlider");

      const sliderMusicValue = document.createElement("span");
      sliderMusicValue.classList.add("settingsSliderValue");
      sliderMusicValue.textContent = `${sliderMusic.value}%`;

      sliderMusic.addEventListener("mousemove", () => {
        // Change valueble text
        sliderMusicValue.textContent = `${sliderMusic.value}%`;

        // Change global volume value
        musicVolume = sliderMusic.value / 100;

        // Set storage
        saveAudioToStorage();

        // Make sure all playing audio change volume
        changeVolume();
      });

      sliderMusic.addEventListener("change", () => {
        // Change valueble text
        sliderMusicValue.textContent = `${sliderMusic.value}%`;

        // Change global volume value
        musicVolume = sliderMusic.value / 100;

        // Set storage
        saveAudioToStorage();

        // Make sure all playing audio change volume
        changeVolume();
      });

      sliderMiniConMusic.appendChild(sliderMusic);
      sliderMiniConMusic.appendChild(sliderMusicValue);

      const sliderMusicLabel = document.createElement("span");
      sliderMusicLabel.classList.add("settingsSliderLabel");
      sliderMusicLabel.textContent = "MUSIC VOLUME";

      sliderConMusic.appendChild(sliderMusicLabel);
      sliderConMusic.appendChild(sliderMiniConMusic);

      // SFX sound slider
      const sliderConSFX = document.createElement("div");
      sliderConSFX.classList.add("settingSmallSliderCon");

      const sliderMiniConSFX = document.createElement("div");
      sliderMiniConSFX.classList.add("settingsSliderMiniCon");

      const sliderSFX = document.createElement("input");
      sliderSFX.setAttribute("type", "range");
      sliderSFX.setAttribute("value", SFXVolume * 100);
      sliderSFX.classList.add("settingsSlider");

      const sliderSFXValue = document.createElement("span");
      sliderSFXValue.classList.add("settingsSliderValue");
      sliderSFXValue.textContent = `${sliderSFX.value}%`;

      sliderSFX.addEventListener("mousemove", () => {
        // Change valueble te
        sliderSFXValue.textContent = `${sliderSFX.value}%`;

        // Change global volume value
        SFXVolume = sliderSFX.value / 100;

        // Set storage
        saveAudioToStorage();

        // Make sure all playing audio change volume
        changeVolume();
      });

      sliderSFX.addEventListener("change", () => {
        // Change valueble te
        sliderSFXValue.textContent = `${sliderSFX.value}%`;

        // Change global volume value
        SFXVolume = sliderSFX.value / 100;

        // Set storage
        saveAudioToStorage();

        // Make sure all playing audio change volume
        changeVolume();
      });

      sliderMiniConSFX.appendChild(sliderSFX);
      sliderMiniConSFX.appendChild(sliderSFXValue);

      const sliderSFXLabel = document.createElement("span");
      sliderSFXLabel.classList.add("settingsSliderLabel");
      sliderSFXLabel.textContent = "SFX VOLUME";

      sliderConSFX.appendChild(sliderSFXLabel);
      sliderConSFX.appendChild(sliderMiniConSFX);

      // Appending slider cons
      sliderCon.appendChild(sliderConMaster);
      sliderCon.appendChild(sliderConMusic);
      sliderCon.appendChild(sliderConSFX);

      // Creating back to lobby btn
      const backToLobbyBtnCon = document.createElement("div");
      backToLobbyBtnCon.classList.add("backToLobbyBtnCon");

      const backToLobbyBtn = document.createElement("button");
      backToLobbyBtn.classList.add("btn", "backToLobbyBtn");
      backToLobbyBtn.textContent = "LEAVE GAME";

      let isbackToLobbyBtnClicked = false;

      backToLobbyBtn.addEventListener("click", () => {
        if (isbackToLobbyBtnClicked == false) {
          // Avoid double click
          isbackToLobbyBtnClicked = true;

          // Clear storage
          localStorage.clear("game");

          // Play sound
          playClickSound();

          // Remove current content exepect this newly appended child
          while (document.body.childElementCount != 1) {
            document.body.removeChild(document.body.firstChild);
          }
          loadingScreen();
          // Make sure no double clicking
          backArrowHasBennClicked = true;

          // Fade
          settingPageCon.style.opacity = "0";

          setTimeout(() => {
            document.body.removeChild(settingPageCon);
          }, 1000);
        }
      });

      backToLobbyBtnCon.appendChild(backToLobbyBtn);

      // Appending last
      settingPageCon.appendChild(backArrow);
      settingPageCon.appendChild(sliderCon);

      if (!document.getElementById("loadingScreenEl")) {
        settingPageCon.appendChild(backToLobbyBtnCon);
      }

      settingPageCon.style.opacity = "0";

      document.body.appendChild(settingPageCon);

      setTimeout(() => {
        // Transistionw
        settingPageCon.style.opacity = "1";
      }, 50);
    };
  });
};

const attackDOM = (attackingPLayer, recievingPlayer) => {
  return new Promise((resolve) => {
    // Creating boards
    const content = document.createElement("div");
    content.classList.add("contentCon", "AIGameCon");

    // Creating header
    const headerCon = document.createElement("div");
    headerCon.classList.add(
      "loadingscreenHeaderCon",
      "ingameHeaderCon",
      "AIGameHeaderCon"
    );

    const header = document.createElement("span");
    header.classList.add("loadingscreenHeader", "ingameHeader");
    header.textContent = "BATTLESHIPS";

    headerCon.appendChild(header);

    // Creating gameboards
    const gameboardsContainer = document.createElement("div");
    gameboardsContainer.classList.add("contentCon");

    const enemyGameboardCon = document.createElement("div");
    enemyGameboardCon.classList.add("enemyGameboardCon");

    const enemyGameboardHeader = document.createElement("span");
    enemyGameboardHeader.classList.add("enemyGameboardHeader");
    enemyGameboardHeader.textContent = "ENEMY SEAS";

    const enemyGameboard = document.createElement("div");
    enemyGameboard.classList.add("enemyGameboard");

    enemyGameboardCon.appendChild(enemyGameboard);
    enemyGameboardCon.appendChild(enemyGameboardHeader);

    setTimeout(() => {
      // Display friendly header after 4s
      friendlyBoardHeader.style.opacity = "1";
    }, 2000);

    setTimeout(() => {
      // Display enemy header after 5s with red
      enemyGameboardHeader.style.opacity = "1";
      enemyGameboardHeader.style.color = "red";
    }, 3000);

    setTimeout(() => {
      // Set enemy header turn white again
      enemyGameboardHeader.style.color = "white";
    }, 5000);

    // Creating wave animation element
    const seaWave = document.createElement("div");
    seaWave.classList.add("seaWave");

    // Creating the friendly board
    const friendlyBoardcon = document.createElement("div");
    friendlyBoardcon.classList.add("friendlyBoardcon");

    const friendlyBoardHeader = document.createElement("span");
    friendlyBoardHeader.classList.add("friendlyBoardHeader");
    friendlyBoardHeader.textContent = "FRIENDLY SEAS";

    const friendlyBoard = document.createElement("div");
    friendlyBoard.classList.add("friendlyBoard");

    friendlyBoardcon.appendChild(friendlyBoardHeader);
    friendlyBoardcon.appendChild(friendlyBoard);

    setTimeout(() => {
      // Display gameboards after 3s
      enemyGameboard.style.opacity = "1";
      friendlyBoard.style.opacity = "1";
    }, 1000);

    let gameStopped = false;

    const populateEnemyGameboard = () => {
      // Create all grid slots
      for (let i = 1; i <= 10; i++) {
        for (let j = 1; j <= 10; j++) {
          const slot = document.createElement("div");
          slot.classList.add("enemyGridSlot");

          // If it have been attacked
          let haveBeenAttacked = false;

          // Checks if it have been hit
          recievingPlayer.board.hits.forEach((coor) => {
            // Compare coordinates
            if (j == coor[0] && i == coor[1]) {
              slot.classList.add("enemyGridSlotHit");
              haveBeenAttacked = true;
            }
          });
          // Checks if it have been attacked but missed
          recievingPlayer.board.missed.forEach((coor) => {
            // Compare coordinates
            if (j == coor[0] && i == coor[1]) {
              slot.classList.add("enemyGridSlotMissed");
              haveBeenAttacked = true;
            }
          });

          // If it havent been attacked, make ready for it
          if (haveBeenAttacked == false) {
            slot.classList.add("enemyGridSlotUnattacked");
            slot.addEventListener("click", () => {
              // On click attack AI with coordinates
              if (gameStopped !== true) {
                gameStopped = true;
                attacking([j, i]);
              }
            });
          }

          enemyGameboard.appendChild(slot);
        }
      }
    };

    const populateFriendlyGameboard = () => {
      // Create all grid slots
      for (let i = 1; i <= 10; i++) {
        for (let j = 1; j <= 10; j++) {
          const slot = document.createElement("div");
          slot.classList.add("enemyGridSlot");

          // If a ship has been hit
          attackingPLayer.board.hits.forEach((coor) => {
            // Compare coordinates
            if (j == coor[0] && i == coor[1]) {
              slot.classList.add("enemyGridSlotHit");
            }
          });
          // If the enemy have missed
          attackingPLayer.board.missed.forEach((coor) => {
            // Compare coordinates
            if (j == coor[0] && i == coor[1]) {
              slot.classList.add("enemyGridSlotMissed");
            }
          });
          // If slot is a ship
          attackingPLayer.board.ships.forEach((shipEl) => {
            shipEl.coor.forEach((coor) => {
              // Compare coordinates
              if (j == coor[0] && i == coor[1]) {
                slot.classList.add("friendlyGridSlotShip");
              }
            });
          });

          friendlyBoard.appendChild(slot);
        }
      }
    };

    populateEnemyGameboard();
    populateFriendlyGameboard();

    const attacking = ([x, y]) => {
      // Attack player board

      let attackedLength = recievingPlayer.board.hits.length;

      recievingPlayer.board.recieveAttack([x, y]);

      // Check if a ship was hit
      if (recievingPlayer.board.hits.length == attackedLength) {
        playSplashSound();
      } else {
        playExplosionSound();
      }

      // Reload both gameboards
      while (enemyGameboard.lastChild) {
        enemyGameboard.removeChild(enemyGameboard.lastChild);
      }

      populateEnemyGameboard();

      // If one won display win screen
      if (recievingPlayer.board.allSunk() == true) {
        gameStopped = true;

        const winScreen = document.createElement("div");
        winScreen.classList.add("winScreenPlayer");

        const winScreenText = document.createElement("span");
        winScreenText.classList.add("winScreenText");
        winScreenText.textContent = `${attackingPLayer.name} WON THE GAME!`;

        winScreen.appendChild(winScreenText);

        document.body.appendChild(winScreen);

        setTimeout(() => {
          winScreen.style.bottom = "0px";
        }, 50);
        setTimeout(() => {
          while (content.lastChild) {
            content.removeChild(content.lastChild);
          }
        }, 4500);
        setTimeout(() => {
          winScreen.style.opacity = "0";
        }, 7500);
        setTimeout(() => {
          while (document.body.lastChild) {
            document.body.removeChild(document.body.lastChild);
          }
          loadingScreen();
        }, 11500);
      } else {
        setTimeout(() => {
          content.style.opacity = "0";
        }, 1000);
        setTimeout(() => {
          document.body.removeChild(content);
          resolve();
        }, 3000);
      }
    };

    // Appending
    gameboardsContainer.appendChild(enemyGameboardCon);
    gameboardsContainer.appendChild(seaWave);
    gameboardsContainer.appendChild(friendlyBoardcon);

    setTimeout(() => {
      // Fade in after 1.5s
      enemyGameboardCon.style.opacity = "1";
      seaWave.style.opacity = "1";
      friendlyBoardcon.style.opacity = "1";
    }, 500);

    // Appending all
    content.appendChild(headerCon);
    content.appendChild(gameboardsContainer);

    setTimeout(() => {
      // Fade in after 0.5s
      headerCon.style.opacity = "1";
    }, 500);

    document.body.appendChild(content);
  });
};

const resumeGame = () => {
  return new Promise((resolve) => {
    const content = document.createElement("div");
    content.classList.add("contentCon", "resumeGameBackground");

    const menuCon = document.createElement("div");
    menuCon.classList.add("resumeGameCon", "contentCon");

    const header = document.createElement("span");
    header.classList.add("resumeGameText");
    header.textContent =
      "YOU HAVE AN UNFINISHED GAME, DO YOU WANT TO CONTINUE?";

    const btnCon = document.createElement("div");
    btnCon.classList.add("resumeGameBtnCon");

    const backBtn = document.createElement("button");
    backBtn.classList.add("btn", "resumeGameBackBtn");
    backBtn.textContent = "NO";

    let btnClicked = false;

    backBtn.addEventListener("click", () => {
      if (btnClicked == false) {
        btnClicked = true;
        playClickSound();

        // Clear storage
        localStorage.clear("game");

        content.style.opacity = "0";

        setTimeout(() => {
          document.body.removeChild(content);
        }, 2000);
      }
    });

    backBtn.addEventListener("mouseenter", () => {
      playButtonShiftSound();
    });

    const resumeBtn = document.createElement("button");
    resumeBtn.classList.add("btn", "resumeGameResumeBtn");
    resumeBtn.textContent = "YES";

    resumeBtn.addEventListener("click", () => {
      if (btnClicked == false) {
        btnClicked = true;
        playClickSound();
        resolve();

        content.style.opacity = "0";

        setTimeout(() => {
          document.body.removeChild(content);
        }, 2000);
      }
    });

    resumeBtn.addEventListener("mouseenter", () => {
      playButtonShiftSound();
    });

    btnCon.appendChild(backBtn);
    btnCon.appendChild(resumeBtn);

    menuCon.appendChild(header);
    menuCon.appendChild(btnCon);

    content.appendChild(menuCon);

    document.body.appendChild(content);
  });
};

export { loadingScreen, resumeGame, twoPlayer, playAgainstAI, placeShipsDOM };

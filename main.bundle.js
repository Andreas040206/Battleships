/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./BlackOpsOne-Regular.ttf */ "./src/BlackOpsOne-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
  font-family: "MyFont";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

body {
  background-color: #000fb7;
  margin: 0px;
  font-family: "MyFont";
  user-select: none;
}

.hide {
  visibility: hidden;
}

.btn {
  height: min(70px, 10vw);
  width: min(200px, 30vw);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: min(30px, 6vw);
  font-family: "MyFont";
  border: none;
  transition: 0.3s;
  user-select: none;
}

.btn:hover {
  scale: 1.05;
}

/* Loadingscreen styles */

.contentCon {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.loadingscreenHeaderCon {
  height: min(85px, 9vw);
  margin-top: 10vh;
  display: flex;
  width: 80%;
  justify-content: center;
  overflow: hidden;
  transition: 4s;
}

.loadingscreenHeader {
  font-size: min(10vw, 90px);
  color: white;
  position: relative;
  bottom: -60px;
  transition-timing-function: cubic-bezier(0.13, 0.65, 0.46, 1.57);
  transition-duration: 4s;
}

@keyframes move {
  0% {
    bottom: -10px;
  }
  100% {
    bottom: -1px;
  }
}

.loadingscreenBtnCon {
  display: flex;
  justify-content: center;
  margin-top: 30vh;
  gap: min(5vw, 50px);
  width: min(80vw, 600px);
  transition: 4s;
}

.loadingscreenStartBtn {
  height: min(70px, 15vw);
  width: min(200px, 45vw);
  font-size: min(25px, 6vw);
  background-color: #0180ff;
  font-family: "Myfont";
  color: white;
}

.loadingscreenStartBtn:hover {
  background-color: rgb(191, 191, 191);
}

/* Loadingscreen styles END */

/* Ingame styles*/
.AIGameCon {
  transition: 2s;
}

.AIGameHeaderCon {
  transition: 2s;
  opacity: 0;
}

.ingameHeaderCon {
  height: min(40px, 5vw);
  margin-top: 3vh;
  display: flex;
  flex-wrap: wrap;
}

.ingameHeader {
  animation: move 3s cubic-bezier(0.13, 0.65, 0.46, 1.57) infinite alternate;
  margin-top: 0px;
  font-size: min(40px, 5vw);
  flex-wrap: wrap;
}

.enemyGameboardCon {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3vh;
}

.enemyGameboardHeader {
  color: rgb(255, 255, 255);
  font-size: min(30px, 6vw);
  margin-top: 2vh;
  transition: 2s;
  opacity: 0;
}

.enemyGameboard {
  height: 35vh;
  width: 35vh;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(10, 1fr);
  border: 2px solid rgb(255, 255, 255);
  transition: 2s;
  opacity: 0;
}

@keyframes gameboardWave {
  0% {
    transform: translateY(3vh);
  }
  80% {
    transform: translateY(0.2vh);
  }
  100% {
  }
}

.seaWave {
  height: 10vh;
  width: 100vw;
  background-color: #0180ff;
  animation: gameboardWave 2.5s ease-in-out infinite alternate;
  transition: 2s;
  opacity: 0;
}

.friendlyBoardcon {
  position: absolute;
  bottom: 0;
  height: 42vh;
  width: 100vw;
  background-color: #0180ff;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: 2s;
  opacity: 0;
}

.friendlyBoardHeader {
  color: white;
  font-size: min(30px, 6vw);
  margin-bottom: 1vh;
  transition: 2s;
  opacity: 0;
}

.friendlyBoard {
  height: 35vh;
  width: 35vh;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(10, 1fr);
  border: 2px solid rgb(255, 255, 255);
  transition: 2s;
  opacity: 0;
}

.enemyGridSlot {
  border: solid 2px white;
}

.enemyGridSlotMissed {
  background-color: #a6a6a6;
}

.enemyGridSlotUnattacked {
  transition: 0.3s;
}

.enemyGridSlotUnattacked:hover {
  background-color: #5d64b5;
}

.friendlyGridSlotShip {
  background-color: rgb(65, 65, 65);
}

.enemyGridSlotHit {
  background-color: #ff0000;
}

.winScreenPlayer {
  background-color: #0180ff;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  bottom: -100vh;
  transition: 4s ease-in-out;
  z-index: 1;
}

.winScreenText {
  color: white;
  font-size: 70px;
  text-align: center;
}

.winScreenAI {
  background-color: #000fb7;
  position: fixed;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  top: -100vh;
  transition: 4s ease-in-out;
}

/* Placement styles*/
.placementCon {
  width: 300vw;
  height: 100vh;
  background-color: #0180ff;
  transition: 6s ease-out;
  position: fixed;
  right: -300vw;
}

@keyframes placementHeaderWave {
  0% {
    bottom: -2vh;
  }
  100% {
    bottom: 0vh;
  }
}

.gridPlacementSlot {
  border: 2px white solid;
}

.placementBoard {
  height: 35vh;
  width: 35vh;
  opacity: 1;
}

.dragAndDropCon {
  height: 60vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 40px;
  align-items: center;
  justify-content: center;
}

.placementShipsConCon {
  display: flex;
  flex-direction: row;
  gap: 8px;
}

.placementShipsCon {
  display: flex;
  flex-direction: row;
  gap: 10px;
  width: 16vh;
  height: 20vh;
}

.placementShipEl {
  display: grid;
  border: solid 2px white;
  width: 3.5vh;
}

.shipDragCon {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.placementRotateBtn {
  background-color: rgb(65, 65, 65);
  color: white;
}

.placementSelectedShipEl {
  box-shadow: 0px 0px 10px white;
}

.placementHoveredSlot {
  background-color: #7b7b7b;
}

.placementHoveredSlotOutOfRange {
  background-color: #c55858;
}

.placementLowerBtnCon {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: min(65vw, 700px);
}

.placementResetBtn {
  background-color: #c55858;
  color: white;
}

.placementNextBtn {
  background-color: #16599d;
  color: #0180ff;
}
.placementNextBtn:hover {
  scale: 1;
}

.placementNextBtnReady {
  background-color: #05c6a9;
  color: white;
}

.placementNextBtnReady:hover {
  scale: 1.05;
}

.placementHeader {
  animation: placementHeaderWave 3s ease-in-out infinite alternate;
}

.placementHeaderCon {
  height: auto;
  width: 90vw;
  display: flex;
  justify-content: center;
  text-align: center;
  margin-bottom: 3vh;
  margin-top: calc(1vh);
}

@media only screen and (max-width: 700px) {
  .placementLowerBtnCon {
    margin-top: 70px;
  }
}

.getNameContentCon {
  transition: 4s;
  opacity: 0;
}

.getNameInputConCon {
  margin-top: 30vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: min(90vw, 600px);
}

.getNameInputCon {
  gap: 5px;
  align-items: flex-start;
}

.getNameInput {
  color: black;
  font-family: "myFont";
  font-size: 30px;
  width: min(230px, 40vw);
}

.getNameInputLabel {
  font-size: 30px;
  color: white;
}

.getNameNextBtn {
  margin-top: 20vh;
  color: #000fb7;
  background-color: #000647;
  height: min(70px, 15vw);
  width: min(200px, 45vw);
}

.getNameNextBtn:hover {
  scale: 1;
}

.getNameNextBtnReady {
  color: white;
  background-color: #05c6a9;
}

.getNameNextBtnReady:hover {
  scale: 1.1;
}

.passDeviceCon {
  padding-top: 15vh;
  height: 85vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #000972;
  transition: 2s ease-in-out;
  position: fixed;
  gap: min(2vh, 100px);
}

.passScreenHeader {
  color: white;
  font-size: min(40px, 7vw);
  text-align: center;
  width: 90vw;
}

.passDeviceImage {
  width: min(600px, 100vw);
}

.passDeviceContinueText {
  color: white;
  font-size: min(20px, 4vw);
  margin-top: 30vh;
}

.settingIcon {
  height: min(50px, 8vw);
  position: fixed;
  right: 2vw;
  bottom: 2vw;
  z-index: 1;
  transition: 0.3s;
}

.settingIcon:hover {
  scale: 1.1;
}

.settingPageCon {
  top: 0;
  position: fixed;
  height: 100vh;
  width: 100vw;
  z-index: 2;
  background-color: #000972;
  transition: 1s;
}

.settingBackArrow {
  height: min(60px, 6vw);
  position: fixed;
  color: white;
  left: 5vw;
  top: 7vh;
  transition: 0.3s;
}

.settingBackArrow:hover {
  scale: 1.1;
  color: rgb(219, 219, 219);
}

.settingsSliderCon {
  display: flex;
  margin-top: 20vh;
  gap: 5vh;
}

.settingSmallSliderCon {
  display: flex;
  flex-direction: column;
  width: min(600px, 80vw);
}

.settingsSliderLabel {
  color: white;
  padding-left: 5px;
  font-size: 20px;
}

.settingsSliderMiniCon {
  display: flex;
  flex-direction: row;
  width: 100%;
}

.settingsSlider {
  appearance: none;
  width: 100%;
}

.settingsSliderValue {
  height: 8px;
  width: 50px;
  margin-top: -2.5px;
  color: white;
  text-align: end;
}

.settingsSlider::-webkit-slider-runnable-track {
  -webkit-appearance: none;
  height: 8px;
}

.settingsSlider::-moz-range-track {
  -moz-appearance: none;
  height: 8px;
}

.settingsSlider::-ms-track {
  appearance: none;
  height: 8px;
}

.settingsSlider::-webkit-slider-thumb {
  -webkit-appearance: none;
  height: 20px;
  width: 10px;
  background-color: #0180ff;
  margin-top: -5.5px;
  cursor: pointer;
  border: none;
}

.settingsSlider::-moz-range-thumb {
  -moz-appearance: none;
  height: 20px;
  width: 10px;
  background-color: #0180ff;
  margin-top: -5.5px;
  cursor: pointer;
  border: none;
}

.settingsSlider::-ms-thumb {
  appearance: none;
  height: 20px;
  width: 10px;
  background-color: #0180ff;
  margin-top: -5.5px;
  cursor: pointer;
  border: none;
}

.resumeGameBackground {
  top: 0px;
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.671);
  backdrop-filter: blur(4px);
  justify-content: center;
  transition: 1s;
}

.resumeGameCon {
  height: 25vh;
  width: 100vw;
  background-color: #000fb7;
  padding-top: 5vh;
  gap: 5vh;
}

.resumeGameText {
  color: white;
  font-size: min(30px, 5vw);
  text-align: center;
}

.resumeGameBtnCon {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: min(500px, 70vw);
}

.resumeGameResumeBtn {
  background-color: #05c6a9;
  color: white;
}

.backToLobbyBtnCon {
  display: flex;
  flex-direction: row;
  width: 100vw;
  justify-content: center;
  margin-top: 20vh;
}

.backToLobbyBtn {
  width: min(300px, 65vw);
  background-color: #c55858;
  color: white;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n  font-family: \"MyFont\";\n  src: url(\"./BlackOpsOne-Regular.ttf\");\n}\n\nbody {\n  background-color: #000fb7;\n  margin: 0px;\n  font-family: \"MyFont\";\n  user-select: none;\n}\n\n.hide {\n  visibility: hidden;\n}\n\n.btn {\n  height: min(70px, 10vw);\n  width: min(200px, 30vw);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: min(30px, 6vw);\n  font-family: \"MyFont\";\n  border: none;\n  transition: 0.3s;\n  user-select: none;\n}\n\n.btn:hover {\n  scale: 1.05;\n}\n\n/* Loadingscreen styles */\n\n.contentCon {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.loadingscreenHeaderCon {\n  height: min(85px, 9vw);\n  margin-top: 10vh;\n  display: flex;\n  width: 80%;\n  justify-content: center;\n  overflow: hidden;\n  transition: 4s;\n}\n\n.loadingscreenHeader {\n  font-size: min(10vw, 90px);\n  color: white;\n  position: relative;\n  bottom: -60px;\n  transition-timing-function: cubic-bezier(0.13, 0.65, 0.46, 1.57);\n  transition-duration: 4s;\n}\n\n@keyframes move {\n  0% {\n    bottom: -10px;\n  }\n  100% {\n    bottom: -1px;\n  }\n}\n\n.loadingscreenBtnCon {\n  display: flex;\n  justify-content: center;\n  margin-top: 30vh;\n  gap: min(5vw, 50px);\n  width: min(80vw, 600px);\n  transition: 4s;\n}\n\n.loadingscreenStartBtn {\n  height: min(70px, 15vw);\n  width: min(200px, 45vw);\n  font-size: min(25px, 6vw);\n  background-color: #0180ff;\n  font-family: \"Myfont\";\n  color: white;\n}\n\n.loadingscreenStartBtn:hover {\n  background-color: rgb(191, 191, 191);\n}\n\n/* Loadingscreen styles END */\n\n/* Ingame styles*/\n.AIGameCon {\n  transition: 2s;\n}\n\n.AIGameHeaderCon {\n  transition: 2s;\n  opacity: 0;\n}\n\n.ingameHeaderCon {\n  height: min(40px, 5vw);\n  margin-top: 3vh;\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.ingameHeader {\n  animation: move 3s cubic-bezier(0.13, 0.65, 0.46, 1.57) infinite alternate;\n  margin-top: 0px;\n  font-size: min(40px, 5vw);\n  flex-wrap: wrap;\n}\n\n.enemyGameboardCon {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 3vh;\n}\n\n.enemyGameboardHeader {\n  color: rgb(255, 255, 255);\n  font-size: min(30px, 6vw);\n  margin-top: 2vh;\n  transition: 2s;\n  opacity: 0;\n}\n\n.enemyGameboard {\n  height: 35vh;\n  width: 35vh;\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  border: 2px solid rgb(255, 255, 255);\n  transition: 2s;\n  opacity: 0;\n}\n\n@keyframes gameboardWave {\n  0% {\n    transform: translateY(3vh);\n  }\n  80% {\n    transform: translateY(0.2vh);\n  }\n  100% {\n  }\n}\n\n.seaWave {\n  height: 10vh;\n  width: 100vw;\n  background-color: #0180ff;\n  animation: gameboardWave 2.5s ease-in-out infinite alternate;\n  transition: 2s;\n  opacity: 0;\n}\n\n.friendlyBoardcon {\n  position: absolute;\n  bottom: 0;\n  height: 42vh;\n  width: 100vw;\n  background-color: #0180ff;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  transition: 2s;\n  opacity: 0;\n}\n\n.friendlyBoardHeader {\n  color: white;\n  font-size: min(30px, 6vw);\n  margin-bottom: 1vh;\n  transition: 2s;\n  opacity: 0;\n}\n\n.friendlyBoard {\n  height: 35vh;\n  width: 35vh;\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  border: 2px solid rgb(255, 255, 255);\n  transition: 2s;\n  opacity: 0;\n}\n\n.enemyGridSlot {\n  border: solid 2px white;\n}\n\n.enemyGridSlotMissed {\n  background-color: #a6a6a6;\n}\n\n.enemyGridSlotUnattacked {\n  transition: 0.3s;\n}\n\n.enemyGridSlotUnattacked:hover {\n  background-color: #5d64b5;\n}\n\n.friendlyGridSlotShip {\n  background-color: rgb(65, 65, 65);\n}\n\n.enemyGridSlotHit {\n  background-color: #ff0000;\n}\n\n.winScreenPlayer {\n  background-color: #0180ff;\n  position: fixed;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  width: 100vw;\n  bottom: -100vh;\n  transition: 4s ease-in-out;\n  z-index: 1;\n}\n\n.winScreenText {\n  color: white;\n  font-size: 70px;\n  text-align: center;\n}\n\n.winScreenAI {\n  background-color: #000fb7;\n  position: fixed;\n  z-index: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  width: 100vw;\n  top: -100vh;\n  transition: 4s ease-in-out;\n}\n\n/* Placement styles*/\n.placementCon {\n  width: 300vw;\n  height: 100vh;\n  background-color: #0180ff;\n  transition: 6s ease-out;\n  position: fixed;\n  right: -300vw;\n}\n\n@keyframes placementHeaderWave {\n  0% {\n    bottom: -2vh;\n  }\n  100% {\n    bottom: 0vh;\n  }\n}\n\n.gridPlacementSlot {\n  border: 2px white solid;\n}\n\n.placementBoard {\n  height: 35vh;\n  width: 35vh;\n  opacity: 1;\n}\n\n.dragAndDropCon {\n  height: 60vh;\n  width: 100vw;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  gap: 40px;\n  align-items: center;\n  justify-content: center;\n}\n\n.placementShipsConCon {\n  display: flex;\n  flex-direction: row;\n  gap: 8px;\n}\n\n.placementShipsCon {\n  display: flex;\n  flex-direction: row;\n  gap: 10px;\n  width: 16vh;\n  height: 20vh;\n}\n\n.placementShipEl {\n  display: grid;\n  border: solid 2px white;\n  width: 3.5vh;\n}\n\n.shipDragCon {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n}\n\n.placementRotateBtn {\n  background-color: rgb(65, 65, 65);\n  color: white;\n}\n\n.placementSelectedShipEl {\n  box-shadow: 0px 0px 10px white;\n}\n\n.placementHoveredSlot {\n  background-color: #7b7b7b;\n}\n\n.placementHoveredSlotOutOfRange {\n  background-color: #c55858;\n}\n\n.placementLowerBtnCon {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  width: min(65vw, 700px);\n}\n\n.placementResetBtn {\n  background-color: #c55858;\n  color: white;\n}\n\n.placementNextBtn {\n  background-color: #16599d;\n  color: #0180ff;\n}\n.placementNextBtn:hover {\n  scale: 1;\n}\n\n.placementNextBtnReady {\n  background-color: #05c6a9;\n  color: white;\n}\n\n.placementNextBtnReady:hover {\n  scale: 1.05;\n}\n\n.placementHeader {\n  animation: placementHeaderWave 3s ease-in-out infinite alternate;\n}\n\n.placementHeaderCon {\n  height: auto;\n  width: 90vw;\n  display: flex;\n  justify-content: center;\n  text-align: center;\n  margin-bottom: 3vh;\n  margin-top: calc(1vh);\n}\n\n@media only screen and (max-width: 700px) {\n  .placementLowerBtnCon {\n    margin-top: 70px;\n  }\n}\n\n.getNameContentCon {\n  transition: 4s;\n  opacity: 0;\n}\n\n.getNameInputConCon {\n  margin-top: 30vh;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  width: min(90vw, 600px);\n}\n\n.getNameInputCon {\n  gap: 5px;\n  align-items: flex-start;\n}\n\n.getNameInput {\n  color: black;\n  font-family: \"myFont\";\n  font-size: 30px;\n  width: min(230px, 40vw);\n}\n\n.getNameInputLabel {\n  font-size: 30px;\n  color: white;\n}\n\n.getNameNextBtn {\n  margin-top: 20vh;\n  color: #000fb7;\n  background-color: #000647;\n  height: min(70px, 15vw);\n  width: min(200px, 45vw);\n}\n\n.getNameNextBtn:hover {\n  scale: 1;\n}\n\n.getNameNextBtnReady {\n  color: white;\n  background-color: #05c6a9;\n}\n\n.getNameNextBtnReady:hover {\n  scale: 1.1;\n}\n\n.passDeviceCon {\n  padding-top: 15vh;\n  height: 85vh;\n  width: 100vw;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-color: #000972;\n  transition: 2s ease-in-out;\n  position: fixed;\n  gap: min(2vh, 100px);\n}\n\n.passScreenHeader {\n  color: white;\n  font-size: min(40px, 7vw);\n  text-align: center;\n  width: 90vw;\n}\n\n.passDeviceImage {\n  width: min(600px, 100vw);\n}\n\n.passDeviceContinueText {\n  color: white;\n  font-size: min(20px, 4vw);\n  margin-top: 30vh;\n}\n\n.settingIcon {\n  height: min(50px, 8vw);\n  position: fixed;\n  right: 2vw;\n  bottom: 2vw;\n  z-index: 1;\n  transition: 0.3s;\n}\n\n.settingIcon:hover {\n  scale: 1.1;\n}\n\n.settingPageCon {\n  top: 0;\n  position: fixed;\n  height: 100vh;\n  width: 100vw;\n  z-index: 2;\n  background-color: #000972;\n  transition: 1s;\n}\n\n.settingBackArrow {\n  height: min(60px, 6vw);\n  position: fixed;\n  color: white;\n  left: 5vw;\n  top: 7vh;\n  transition: 0.3s;\n}\n\n.settingBackArrow:hover {\n  scale: 1.1;\n  color: rgb(219, 219, 219);\n}\n\n.settingsSliderCon {\n  display: flex;\n  margin-top: 20vh;\n  gap: 5vh;\n}\n\n.settingSmallSliderCon {\n  display: flex;\n  flex-direction: column;\n  width: min(600px, 80vw);\n}\n\n.settingsSliderLabel {\n  color: white;\n  padding-left: 5px;\n  font-size: 20px;\n}\n\n.settingsSliderMiniCon {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n}\n\n.settingsSlider {\n  appearance: none;\n  width: 100%;\n}\n\n.settingsSliderValue {\n  height: 8px;\n  width: 50px;\n  margin-top: -2.5px;\n  color: white;\n  text-align: end;\n}\n\n.settingsSlider::-webkit-slider-runnable-track {\n  -webkit-appearance: none;\n  height: 8px;\n}\n\n.settingsSlider::-moz-range-track {\n  -moz-appearance: none;\n  height: 8px;\n}\n\n.settingsSlider::-ms-track {\n  appearance: none;\n  height: 8px;\n}\n\n.settingsSlider::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  height: 20px;\n  width: 10px;\n  background-color: #0180ff;\n  margin-top: -5.5px;\n  cursor: pointer;\n  border: none;\n}\n\n.settingsSlider::-moz-range-thumb {\n  -moz-appearance: none;\n  height: 20px;\n  width: 10px;\n  background-color: #0180ff;\n  margin-top: -5.5px;\n  cursor: pointer;\n  border: none;\n}\n\n.settingsSlider::-ms-thumb {\n  appearance: none;\n  height: 20px;\n  width: 10px;\n  background-color: #0180ff;\n  margin-top: -5.5px;\n  cursor: pointer;\n  border: none;\n}\n\n.resumeGameBackground {\n  top: 0px;\n  position: fixed;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.671);\n  backdrop-filter: blur(4px);\n  justify-content: center;\n  transition: 1s;\n}\n\n.resumeGameCon {\n  height: 25vh;\n  width: 100vw;\n  background-color: #000fb7;\n  padding-top: 5vh;\n  gap: 5vh;\n}\n\n.resumeGameText {\n  color: white;\n  font-size: min(30px, 5vw);\n  text-align: center;\n}\n\n.resumeGameBtnCon {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  width: min(500px, 70vw);\n}\n\n.resumeGameResumeBtn {\n  background-color: #05c6a9;\n  color: white;\n}\n\n.backToLobbyBtnCon {\n  display: flex;\n  flex-direction: row;\n  width: 100vw;\n  justify-content: center;\n  margin-top: 20vh;\n}\n\n.backToLobbyBtn {\n  width: min(300px, 65vw);\n  background-color: #c55858;\n  color: white;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/app/gameboard.js":
/*!******************************!*\
  !*** ./src/app/gameboard.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ships__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ships */ "./src/app/ships.js");


class gameboard {
  constructor() {
    this.missed = [];
    this.hits = [];
    this.ships = [];
  }

  placeShips(ary) {
    ary.forEach((newAry) => {
      const newShip = new _ships__WEBPACK_IMPORTED_MODULE_0__["default"](newAry);
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gameboard);


/***/ }),

/***/ "./src/app/player.js":
/*!***************************!*\
  !*** ./src/app/player.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AI: () => (/* binding */ AI),
/* harmony export */   player: () => (/* binding */ player)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/app/gameboard.js");


class player {
  constructor(name) {
    this.name = name;
    this.board = new _gameboard__WEBPACK_IMPORTED_MODULE_0__["default"]();
  }
}

class AI {
  constructor() {
    this.name = "AI";
    this.board = new _gameboard__WEBPACK_IMPORTED_MODULE_0__["default"]();
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




/***/ }),

/***/ "./src/app/ships.js":
/*!**************************!*\
  !*** ./src/app/ships.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class ship {
  constructor(ary) {
    this.length = ary.length;
    this.coor = ary;
    this.hits = 0;
  }
  hit() {
    this.hits++;
  }
  isSunk = () => (this.hits == this.length ? true : false);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ship);


/***/ }),

/***/ "./src/controller.js":
/*!***************************!*\
  !*** ./src/controller.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _gameloop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameloop */ "./src/gameloop.js");


(0,_gameloop__WEBPACK_IMPORTED_MODULE_0__.loadingScreen)();

if (localStorage.getItem("game")) {
  // If there is data of previus game, let them resume
  (0,_gameloop__WEBPACK_IMPORTED_MODULE_0__.resumeGame)().then(() => {
    const game = JSON.parse(localStorage.getItem("game"));

    if (game.player1 !== undefined && game.player2 !== undefined) {
      // Its a two player game

      if (
        game.player1.board.ships[0] !== undefined &&
        game.player2.board.ships[0] !== undefined
      ) {
        // All ships have been placed

        // Create new game
        const newGame = new _gameloop__WEBPACK_IMPORTED_MODULE_0__.twoPlayer(game.player1.name, game.player2.name);

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
        const newGame = new _gameloop__WEBPACK_IMPORTED_MODULE_0__.twoPlayer(game.player1.name, game.player2.name);

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
            (0,_gameloop__WEBPACK_IMPORTED_MODULE_0__.placeShipsDOM)(newGame.player1).then(() => {
              localStorage.setItem("game", JSON.stringify(newGame));
              newGame.passScreenDOM(newGame.player2).then(() => {
                (0,_gameloop__WEBPACK_IMPORTED_MODULE_0__.placeShipsDOM)(newGame.player2).then(() => {
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
        const newGame = new _gameloop__WEBPACK_IMPORTED_MODULE_0__.twoPlayer(game.player1.name, game.player2.name);

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
            (0,_gameloop__WEBPACK_IMPORTED_MODULE_0__.placeShipsDOM)(newGame.player2).then(() => {
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

      const newGame = new _gameloop__WEBPACK_IMPORTED_MODULE_0__.playAgainstAI("");

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


/***/ }),

/***/ "./src/gameloop.js":
/*!*************************!*\
  !*** ./src/gameloop.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadingScreen: () => (/* binding */ loadingScreen),
/* harmony export */   placeShipsDOM: () => (/* binding */ placeShipsDOM),
/* harmony export */   playAgainstAI: () => (/* binding */ playAgainstAI),
/* harmony export */   resumeGame: () => (/* binding */ resumeGame),
/* harmony export */   twoPlayer: () => (/* binding */ twoPlayer)
/* harmony export */ });
/* harmony import */ var _app_player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/player */ "./src/app/player.js");
/* harmony import */ var _Audio_battle_of_the_dragons_8037_mp3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Audio/battle-of-the-dragons-8037.mp3 */ "./src/Audio/battle-of-the-dragons-8037.mp3");
/* harmony import */ var _Audio_computer_processing_sound_effects_short_click_select_01_122134_mp3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Audio/computer-processing-sound-effects-short-click-select-01-122134.mp3 */ "./src/Audio/computer-processing-sound-effects-short-click-select-01-122134.mp3");
/* harmony import */ var _Audio_interface_button_154180_mp3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Audio/interface-button-154180.mp3 */ "./src/Audio/interface-button-154180.mp3");
/* harmony import */ var _Audio_splash_by_blaukreuz_6261_mp3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Audio/splash-by-blaukreuz-6261.mp3 */ "./src/Audio/splash-by-blaukreuz-6261.mp3");
/* harmony import */ var _Audio_medium_explosion_40472_mp3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Audio/medium-explosion-40472.mp3 */ "./src/Audio/medium-explosion-40472.mp3");
/* harmony import */ var _app_ships__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app/ships */ "./src/app/ships.js");
/* harmony import */ var _images_passDeviceSrc_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/passDeviceSrc.png */ "./src/images/passDeviceSrc.png");
/* harmony import */ var _images_settingsIconSrc_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/settingsIconSrc.svg */ "./src/images/settingsIconSrc.svg");
/* harmony import */ var _images_backArrowIconSrc_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./images/backArrowIconSrc.svg */ "./src/images/backArrowIconSrc.svg");


// Soundeffects








// Img




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

const battleMusic = new Audio(_Audio_battle_of_the_dragons_8037_mp3__WEBPACK_IMPORTED_MODULE_1__);
battleMusic.loop = true;

const changeVolume = () => {
  // Change music volume
  battleMusic.volume = masterVolume * musicVolume;
};

changeVolume();

const playButtonShiftSound = () => {
  if (interacted == true) {
    const sfx = new Audio(_Audio_interface_button_154180_mp3__WEBPACK_IMPORTED_MODULE_3__);
    sfx.volume = masterVolume * SFXVolume;
    sfx.play();
  }
};

const playClickSound = () => {
  if (interacted == true) {
    const sfx = new Audio(_Audio_computer_processing_sound_effects_short_click_select_01_122134_mp3__WEBPACK_IMPORTED_MODULE_2__);
    sfx.volume = masterVolume * SFXVolume;
    sfx.play();
  }
};

const playSplashSound = () => {
  if (interacted == true) {
    const sfx = new Audio(_Audio_splash_by_blaukreuz_6261_mp3__WEBPACK_IMPORTED_MODULE_4__);
    sfx.volume = masterVolume * SFXVolume;
    sfx.play();
  }
};

const playExplosionSound = () => {
  if (interacted == true) {
    const sfx = new Audio(_Audio_medium_explosion_40472_mp3__WEBPACK_IMPORTED_MODULE_5__);
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
    this.player = new _app_player__WEBPACK_IMPORTED_MODULE_0__.player("");
    this.AI = new _app_player__WEBPACK_IMPORTED_MODULE_0__.AI();
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
    this.player1 = new _app_player__WEBPACK_IMPORTED_MODULE_0__.player(player1Name);
    this.player2 = new _app_player__WEBPACK_IMPORTED_MODULE_0__.player(player2Name);
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
      passDeviceImage.src = _images_passDeviceSrc_png__WEBPACK_IMPORTED_MODULE_7__;
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
                let newShip = new _app_ships__WEBPACK_IMPORTED_MODULE_6__["default"](
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
    shipsCon.classList.add("placementShipsConCon");

    const shipsCon1 = document.createElement("div");
    shipsCon1.classList.add("placementShipsCon");

    const shipsCon2 = document.createElement("div");
    shipsCon2.classList.add("placementShipsCon");

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
      shipsCon1.appendChild(creatingShips(5));
      shipsCon1.appendChild(creatingShips(4));
      shipsCon1.appendChild(creatingShips(4));
      shipsCon2.appendChild(creatingShips(3));
      shipsCon2.appendChild(creatingShips(3));
      shipsCon2.appendChild(creatingShips(2));
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
        shipsCon1.style.rotate = "90deg";
        shipsCon2.style.rotate = "90deg";
        rotated = true;
      } else if (rotated) {
        // Rotate back
        shipsCon1.style.rotate = "0deg";
        shipsCon2.style.rotate = "0deg";
        rotated = false;
      }
    });

    // Appending
    shipsCon.appendChild(shipsCon1);
    shipsCon.appendChild(shipsCon2);
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
    settingIcon.src = _images_settingsIconSrc_svg__WEBPACK_IMPORTED_MODULE_8__;
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
      backArrow.src = _images_backArrowIconSrc_svg__WEBPACK_IMPORTED_MODULE_9__;
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




/***/ }),

/***/ "./src/Audio/battle-of-the-dragons-8037.mp3":
/*!**************************************************!*\
  !*** ./src/Audio/battle-of-the-dragons-8037.mp3 ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8a3bddd4d5649503333e.mp3";

/***/ }),

/***/ "./src/Audio/computer-processing-sound-effects-short-click-select-01-122134.mp3":
/*!**************************************************************************************!*\
  !*** ./src/Audio/computer-processing-sound-effects-short-click-select-01-122134.mp3 ***!
  \**************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b37ae8b32c9f1adeb14a.mp3";

/***/ }),

/***/ "./src/Audio/interface-button-154180.mp3":
/*!***********************************************!*\
  !*** ./src/Audio/interface-button-154180.mp3 ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8052ef188f53dd821971.mp3";

/***/ }),

/***/ "./src/Audio/medium-explosion-40472.mp3":
/*!**********************************************!*\
  !*** ./src/Audio/medium-explosion-40472.mp3 ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "487767dafc5bab0c3275.mp3";

/***/ }),

/***/ "./src/Audio/splash-by-blaukreuz-6261.mp3":
/*!************************************************!*\
  !*** ./src/Audio/splash-by-blaukreuz-6261.mp3 ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "de67f6401b67e5c5c2d5.mp3";

/***/ }),

/***/ "./src/BlackOpsOne-Regular.ttf":
/*!*************************************!*\
  !*** ./src/BlackOpsOne-Regular.ttf ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b8437be32fe8faca71ed.ttf";

/***/ }),

/***/ "./src/images/backArrowIconSrc.svg":
/*!*****************************************!*\
  !*** ./src/images/backArrowIconSrc.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "91d948637b792a93a827.svg";

/***/ }),

/***/ "./src/images/passDeviceSrc.png":
/*!**************************************!*\
  !*** ./src/images/passDeviceSrc.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7bba34cbc2db4bfcd7b0.png";

/***/ }),

/***/ "./src/images/settingsIconSrc.svg":
/*!****************************************!*\
  !*** ./src/images/settingsIconSrc.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c55f31ac7c86c13fb952.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controller */ "./src/controller.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUNPO0FBQ2hHLDRDQUE0QywrSEFBNEM7QUFDeEYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxnRkFBZ0YsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sYUFBYSxNQUFNLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLGFBQWEsYUFBYSxNQUFNLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssS0FBSyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLFlBQVksTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFV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QUM5QjtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZSxTQUFTLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakVXOztBQUVwQztBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsa0RBQVM7QUFDOUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsa0RBQVM7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSx3QkFBd0IsZ0JBQWdCO0FBQ3hDO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSLHdCQUF3QixnQkFBZ0I7QUFDeEM7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTzs7QUFFUDtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNB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O0FBQzlDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwwQkFBMEIsOERBQWlCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQSxzQkFBc0IsK0NBQU07QUFDNUIsa0JBQWtCLDJDQUFFO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7O0FBRUE7QUFDQTtBQUNBLHdCQUF3QixTQUFTO0FBQ2pDLDBCQUEwQixTQUFTO0FBQ25DO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3QkFBd0IsU0FBUztBQUNqQywwQkFBMEIsU0FBUztBQUNuQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2YsYUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBdUIsK0NBQU07QUFDN0IsdUJBQXVCLCtDQUFNO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmLGFBQWE7QUFDYixXQUFXO0FBQ1gsU0FBUztBQUNULE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFVBQVU7QUFDVjtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw0REFBNEQsWUFBWTs7QUFFeEU7QUFDQTtBQUNBLDRCQUE0QixzREFBa0I7QUFDOUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsT0FBTzs7QUFFUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsU0FBUztBQUNUOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLGFBQWE7O0FBRXpEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixXQUFXOztBQUVYO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUNBQXVDLHNCQUFzQjs7QUFFN0Q7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsUUFBUTtBQUNSO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDs7QUFFOEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN4cUQ5RTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7O0FDQXNCO0FBQ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvYXBwL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvYXBwL3BsYXllci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvYXBwL3NoaXBzLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9jb250cm9sbGVyLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9nYW1lbG9vcC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9CbGFja09wc09uZS1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIk15Rm9udFwiO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbn1cblxuYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDBmYjc7XG4gIG1hcmdpbjogMHB4O1xuICBmb250LWZhbWlseTogXCJNeUZvbnRcIjtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbi5oaWRlIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG4uYnRuIHtcbiAgaGVpZ2h0OiBtaW4oNzBweCwgMTB2dyk7XG4gIHdpZHRoOiBtaW4oMjAwcHgsIDMwdncpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiBtaW4oMzBweCwgNnZ3KTtcbiAgZm9udC1mYW1pbHk6IFwiTXlGb250XCI7XG4gIGJvcmRlcjogbm9uZTtcbiAgdHJhbnNpdGlvbjogMC4zcztcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbi5idG46aG92ZXIge1xuICBzY2FsZTogMS4wNTtcbn1cblxuLyogTG9hZGluZ3NjcmVlbiBzdHlsZXMgKi9cblxuLmNvbnRlbnRDb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubG9hZGluZ3NjcmVlbkhlYWRlckNvbiB7XG4gIGhlaWdodDogbWluKDg1cHgsIDl2dyk7XG4gIG1hcmdpbi10b3A6IDEwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiA4MCU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0cmFuc2l0aW9uOiA0cztcbn1cblxuLmxvYWRpbmdzY3JlZW5IZWFkZXIge1xuICBmb250LXNpemU6IG1pbigxMHZ3LCA5MHB4KTtcbiAgY29sb3I6IHdoaXRlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvdHRvbTogLTYwcHg7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xMywgMC42NSwgMC40NiwgMS41Nyk7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDRzO1xufVxuXG5Aa2V5ZnJhbWVzIG1vdmUge1xuICAwJSB7XG4gICAgYm90dG9tOiAtMTBweDtcbiAgfVxuICAxMDAlIHtcbiAgICBib3R0b206IC0xcHg7XG4gIH1cbn1cblxuLmxvYWRpbmdzY3JlZW5CdG5Db24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMzB2aDtcbiAgZ2FwOiBtaW4oNXZ3LCA1MHB4KTtcbiAgd2lkdGg6IG1pbig4MHZ3LCA2MDBweCk7XG4gIHRyYW5zaXRpb246IDRzO1xufVxuXG4ubG9hZGluZ3NjcmVlblN0YXJ0QnRuIHtcbiAgaGVpZ2h0OiBtaW4oNzBweCwgMTV2dyk7XG4gIHdpZHRoOiBtaW4oMjAwcHgsIDQ1dncpO1xuICBmb250LXNpemU6IG1pbigyNXB4LCA2dncpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDE4MGZmO1xuICBmb250LWZhbWlseTogXCJNeWZvbnRcIjtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ubG9hZGluZ3NjcmVlblN0YXJ0QnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5MSwgMTkxLCAxOTEpO1xufVxuXG4vKiBMb2FkaW5nc2NyZWVuIHN0eWxlcyBFTkQgKi9cblxuLyogSW5nYW1lIHN0eWxlcyovXG4uQUlHYW1lQ29uIHtcbiAgdHJhbnNpdGlvbjogMnM7XG59XG5cbi5BSUdhbWVIZWFkZXJDb24ge1xuICB0cmFuc2l0aW9uOiAycztcbiAgb3BhY2l0eTogMDtcbn1cblxuLmluZ2FtZUhlYWRlckNvbiB7XG4gIGhlaWdodDogbWluKDQwcHgsIDV2dyk7XG4gIG1hcmdpbi10b3A6IDN2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4uaW5nYW1lSGVhZGVyIHtcbiAgYW5pbWF0aW9uOiBtb3ZlIDNzIGN1YmljLWJlemllcigwLjEzLCAwLjY1LCAwLjQ2LCAxLjU3KSBpbmZpbml0ZSBhbHRlcm5hdGU7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgZm9udC1zaXplOiBtaW4oNDBweCwgNXZ3KTtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4uZW5lbXlHYW1lYm9hcmRDb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAzdmg7XG59XG5cbi5lbmVteUdhbWVib2FyZEhlYWRlciB7XG4gIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gIGZvbnQtc2l6ZTogbWluKDMwcHgsIDZ2dyk7XG4gIG1hcmdpbi10b3A6IDJ2aDtcbiAgdHJhbnNpdGlvbjogMnM7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi5lbmVteUdhbWVib2FyZCB7XG4gIGhlaWdodDogMzV2aDtcbiAgd2lkdGg6IDM1dmg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcbiAgYm9yZGVyOiAycHggc29saWQgcmdiKDI1NSwgMjU1LCAyNTUpO1xuICB0cmFuc2l0aW9uOiAycztcbiAgb3BhY2l0eTogMDtcbn1cblxuQGtleWZyYW1lcyBnYW1lYm9hcmRXYXZlIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgzdmgpO1xuICB9XG4gIDgwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAuMnZoKTtcbiAgfVxuICAxMDAlIHtcbiAgfVxufVxuXG4uc2VhV2F2ZSB7XG4gIGhlaWdodDogMTB2aDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDE4MGZmO1xuICBhbmltYXRpb246IGdhbWVib2FyZFdhdmUgMi41cyBlYXNlLWluLW91dCBpbmZpbml0ZSBhbHRlcm5hdGU7XG4gIHRyYW5zaXRpb246IDJzO1xuICBvcGFjaXR5OiAwO1xufVxuXG4uZnJpZW5kbHlCb2FyZGNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBoZWlnaHQ6IDQydmg7XG4gIHdpZHRoOiAxMDB2dztcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAxODBmZjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdHJhbnNpdGlvbjogMnM7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi5mcmllbmRseUJvYXJkSGVhZGVyIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IG1pbigzMHB4LCA2dncpO1xuICBtYXJnaW4tYm90dG9tOiAxdmg7XG4gIHRyYW5zaXRpb246IDJzO1xuICBvcGFjaXR5OiAwO1xufVxuXG4uZnJpZW5kbHlCb2FyZCB7XG4gIGhlaWdodDogMzV2aDtcbiAgd2lkdGg6IDM1dmg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcbiAgYm9yZGVyOiAycHggc29saWQgcmdiKDI1NSwgMjU1LCAyNTUpO1xuICB0cmFuc2l0aW9uOiAycztcbiAgb3BhY2l0eTogMDtcbn1cblxuLmVuZW15R3JpZFNsb3Qge1xuICBib3JkZXI6IHNvbGlkIDJweCB3aGl0ZTtcbn1cblxuLmVuZW15R3JpZFNsb3RNaXNzZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTZhNmE2O1xufVxuXG4uZW5lbXlHcmlkU2xvdFVuYXR0YWNrZWQge1xuICB0cmFuc2l0aW9uOiAwLjNzO1xufVxuXG4uZW5lbXlHcmlkU2xvdFVuYXR0YWNrZWQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWQ2NGI1O1xufVxuXG4uZnJpZW5kbHlHcmlkU2xvdFNoaXAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjUsIDY1LCA2NSk7XG59XG5cbi5lbmVteUdyaWRTbG90SGl0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMDAwMDtcbn1cblxuLndpblNjcmVlblBsYXllciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMTgwZmY7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDB2dztcbiAgYm90dG9tOiAtMTAwdmg7XG4gIHRyYW5zaXRpb246IDRzIGVhc2UtaW4tb3V0O1xuICB6LWluZGV4OiAxO1xufVxuXG4ud2luU2NyZWVuVGV4dCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiA3MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi53aW5TY3JlZW5BSSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDBmYjc7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDB2dztcbiAgdG9wOiAtMTAwdmg7XG4gIHRyYW5zaXRpb246IDRzIGVhc2UtaW4tb3V0O1xufVxuXG4vKiBQbGFjZW1lbnQgc3R5bGVzKi9cbi5wbGFjZW1lbnRDb24ge1xuICB3aWR0aDogMzAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMTgwZmY7XG4gIHRyYW5zaXRpb246IDZzIGVhc2Utb3V0O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHJpZ2h0OiAtMzAwdnc7XG59XG5cbkBrZXlmcmFtZXMgcGxhY2VtZW50SGVhZGVyV2F2ZSB7XG4gIDAlIHtcbiAgICBib3R0b206IC0ydmg7XG4gIH1cbiAgMTAwJSB7XG4gICAgYm90dG9tOiAwdmg7XG4gIH1cbn1cblxuLmdyaWRQbGFjZW1lbnRTbG90IHtcbiAgYm9yZGVyOiAycHggd2hpdGUgc29saWQ7XG59XG5cbi5wbGFjZW1lbnRCb2FyZCB7XG4gIGhlaWdodDogMzV2aDtcbiAgd2lkdGg6IDM1dmg7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5kcmFnQW5kRHJvcENvbiB7XG4gIGhlaWdodDogNjB2aDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGdhcDogNDBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5wbGFjZW1lbnRTaGlwc0NvbkNvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGdhcDogOHB4O1xufVxuXG4ucGxhY2VtZW50U2hpcHNDb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBnYXA6IDEwcHg7XG4gIHdpZHRoOiAxNnZoO1xuICBoZWlnaHQ6IDIwdmg7XG59XG5cbi5wbGFjZW1lbnRTaGlwRWwge1xuICBkaXNwbGF5OiBncmlkO1xuICBib3JkZXI6IHNvbGlkIDJweCB3aGl0ZTtcbiAgd2lkdGg6IDMuNXZoO1xufVxuXG4uc2hpcERyYWdDb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnBsYWNlbWVudFJvdGF0ZUJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig2NSwgNjUsIDY1KTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ucGxhY2VtZW50U2VsZWN0ZWRTaGlwRWwge1xuICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggd2hpdGU7XG59XG5cbi5wbGFjZW1lbnRIb3ZlcmVkU2xvdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3YjdiN2I7XG59XG5cbi5wbGFjZW1lbnRIb3ZlcmVkU2xvdE91dE9mUmFuZ2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzU1ODU4O1xufVxuXG4ucGxhY2VtZW50TG93ZXJCdG5Db24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHdpZHRoOiBtaW4oNjV2dywgNzAwcHgpO1xufVxuXG4ucGxhY2VtZW50UmVzZXRCdG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzU1ODU4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5wbGFjZW1lbnROZXh0QnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE2NTk5ZDtcbiAgY29sb3I6ICMwMTgwZmY7XG59XG4ucGxhY2VtZW50TmV4dEJ0bjpob3ZlciB7XG4gIHNjYWxlOiAxO1xufVxuXG4ucGxhY2VtZW50TmV4dEJ0blJlYWR5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA1YzZhOTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ucGxhY2VtZW50TmV4dEJ0blJlYWR5OmhvdmVyIHtcbiAgc2NhbGU6IDEuMDU7XG59XG5cbi5wbGFjZW1lbnRIZWFkZXIge1xuICBhbmltYXRpb246IHBsYWNlbWVudEhlYWRlcldhdmUgM3MgZWFzZS1pbi1vdXQgaW5maW5pdGUgYWx0ZXJuYXRlO1xufVxuXG4ucGxhY2VtZW50SGVhZGVyQ29uIHtcbiAgaGVpZ2h0OiBhdXRvO1xuICB3aWR0aDogOTB2dztcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogM3ZoO1xuICBtYXJnaW4tdG9wOiBjYWxjKDF2aCk7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgLnBsYWNlbWVudExvd2VyQnRuQ29uIHtcbiAgICBtYXJnaW4tdG9wOiA3MHB4O1xuICB9XG59XG5cbi5nZXROYW1lQ29udGVudENvbiB7XG4gIHRyYW5zaXRpb246IDRzO1xuICBvcGFjaXR5OiAwO1xufVxuXG4uZ2V0TmFtZUlucHV0Q29uQ29uIHtcbiAgbWFyZ2luLXRvcDogMzB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB3aWR0aDogbWluKDkwdncsIDYwMHB4KTtcbn1cblxuLmdldE5hbWVJbnB1dENvbiB7XG4gIGdhcDogNXB4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cblxuLmdldE5hbWVJbnB1dCB7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1mYW1pbHk6IFwibXlGb250XCI7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgd2lkdGg6IG1pbigyMzBweCwgNDB2dyk7XG59XG5cbi5nZXROYW1lSW5wdXRMYWJlbCB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uZ2V0TmFtZU5leHRCdG4ge1xuICBtYXJnaW4tdG9wOiAyMHZoO1xuICBjb2xvcjogIzAwMGZiNztcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDY0NztcbiAgaGVpZ2h0OiBtaW4oNzBweCwgMTV2dyk7XG4gIHdpZHRoOiBtaW4oMjAwcHgsIDQ1dncpO1xufVxuXG4uZ2V0TmFtZU5leHRCdG46aG92ZXIge1xuICBzY2FsZTogMTtcbn1cblxuLmdldE5hbWVOZXh0QnRuUmVhZHkge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNWM2YTk7XG59XG5cbi5nZXROYW1lTmV4dEJ0blJlYWR5OmhvdmVyIHtcbiAgc2NhbGU6IDEuMTtcbn1cblxuLnBhc3NEZXZpY2VDb24ge1xuICBwYWRkaW5nLXRvcDogMTV2aDtcbiAgaGVpZ2h0OiA4NXZoO1xuICB3aWR0aDogMTAwdnc7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwOTcyO1xuICB0cmFuc2l0aW9uOiAycyBlYXNlLWluLW91dDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBnYXA6IG1pbigydmgsIDEwMHB4KTtcbn1cblxuLnBhc3NTY3JlZW5IZWFkZXIge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogbWluKDQwcHgsIDd2dyk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDkwdnc7XG59XG5cbi5wYXNzRGV2aWNlSW1hZ2Uge1xuICB3aWR0aDogbWluKDYwMHB4LCAxMDB2dyk7XG59XG5cbi5wYXNzRGV2aWNlQ29udGludWVUZXh0IHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IG1pbigyMHB4LCA0dncpO1xuICBtYXJnaW4tdG9wOiAzMHZoO1xufVxuXG4uc2V0dGluZ0ljb24ge1xuICBoZWlnaHQ6IG1pbig1MHB4LCA4dncpO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHJpZ2h0OiAydnc7XG4gIGJvdHRvbTogMnZ3O1xuICB6LWluZGV4OiAxO1xuICB0cmFuc2l0aW9uOiAwLjNzO1xufVxuXG4uc2V0dGluZ0ljb246aG92ZXIge1xuICBzY2FsZTogMS4xO1xufVxuXG4uc2V0dGluZ1BhZ2VDb24ge1xuICB0b3A6IDA7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMHZ3O1xuICB6LWluZGV4OiAyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwOTcyO1xuICB0cmFuc2l0aW9uOiAxcztcbn1cblxuLnNldHRpbmdCYWNrQXJyb3cge1xuICBoZWlnaHQ6IG1pbig2MHB4LCA2dncpO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbGVmdDogNXZ3O1xuICB0b3A6IDd2aDtcbiAgdHJhbnNpdGlvbjogMC4zcztcbn1cblxuLnNldHRpbmdCYWNrQXJyb3c6aG92ZXIge1xuICBzY2FsZTogMS4xO1xuICBjb2xvcjogcmdiKDIxOSwgMjE5LCAyMTkpO1xufVxuXG4uc2V0dGluZ3NTbGlkZXJDb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tdG9wOiAyMHZoO1xuICBnYXA6IDV2aDtcbn1cblxuLnNldHRpbmdTbWFsbFNsaWRlckNvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiBtaW4oNjAwcHgsIDgwdncpO1xufVxuXG4uc2V0dGluZ3NTbGlkZXJMYWJlbCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLnNldHRpbmdzU2xpZGVyTWluaUNvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uc2V0dGluZ3NTbGlkZXIge1xuICBhcHBlYXJhbmNlOiBub25lO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnNldHRpbmdzU2xpZGVyVmFsdWUge1xuICBoZWlnaHQ6IDhweDtcbiAgd2lkdGg6IDUwcHg7XG4gIG1hcmdpbi10b3A6IC0yLjVweDtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBlbmQ7XG59XG5cbi5zZXR0aW5nc1NsaWRlcjo6LXdlYmtpdC1zbGlkZXItcnVubmFibGUtdHJhY2sge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIGhlaWdodDogOHB4O1xufVxuXG4uc2V0dGluZ3NTbGlkZXI6Oi1tb3otcmFuZ2UtdHJhY2sge1xuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gIGhlaWdodDogOHB4O1xufVxuXG4uc2V0dGluZ3NTbGlkZXI6Oi1tcy10cmFjayB7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIGhlaWdodDogOHB4O1xufVxuXG4uc2V0dGluZ3NTbGlkZXI6Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDE4MGZmO1xuICBtYXJnaW4tdG9wOiAtNS41cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4uc2V0dGluZ3NTbGlkZXI6Oi1tb3otcmFuZ2UtdGh1bWIge1xuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMTgwZmY7XG4gIG1hcmdpbi10b3A6IC01LjVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5zZXR0aW5nc1NsaWRlcjo6LW1zLXRodW1iIHtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAxODBmZjtcbiAgbWFyZ2luLXRvcDogLTUuNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLnJlc3VtZUdhbWVCYWNrZ3JvdW5kIHtcbiAgdG9wOiAwcHg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNjcxKTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0cmFuc2l0aW9uOiAxcztcbn1cblxuLnJlc3VtZUdhbWVDb24ge1xuICBoZWlnaHQ6IDI1dmg7XG4gIHdpZHRoOiAxMDB2dztcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMGZiNztcbiAgcGFkZGluZy10b3A6IDV2aDtcbiAgZ2FwOiA1dmg7XG59XG5cbi5yZXN1bWVHYW1lVGV4dCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiBtaW4oMzBweCwgNXZ3KTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucmVzdW1lR2FtZUJ0bkNvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgd2lkdGg6IG1pbig1MDBweCwgNzB2dyk7XG59XG5cbi5yZXN1bWVHYW1lUmVzdW1lQnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA1YzZhOTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uYmFja1RvTG9iYnlCdG5Db24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICB3aWR0aDogMTAwdnc7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAyMHZoO1xufVxuXG4uYmFja1RvTG9iYnlCdG4ge1xuICB3aWR0aDogbWluKDMwMHB4LCA2NXZ3KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M1NTg1ODtcbiAgY29sb3I6IHdoaXRlO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UscUJBQXFCO0VBQ3JCLDRDQUFxQztBQUN2Qzs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQSx5QkFBeUI7O0FBRXpCO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixVQUFVO0VBQ1YsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGdFQUFnRTtFQUNoRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRTtJQUNFLGFBQWE7RUFDZjtFQUNBO0lBQ0UsWUFBWTtFQUNkO0FBQ0Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQSw2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QixZQUFZO0VBQ1osV0FBVztFQUNYLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osV0FBVztFQUNYLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osV0FBVztFQUNYLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFFBQVE7RUFDUixlQUFlO0VBQ2YsWUFBWTtFQUNaLGFBQWE7RUFDYixzQ0FBc0M7RUFDdEMsMEJBQTBCO0VBQzFCLHVCQUF1QjtFQUN2QixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLFFBQVE7QUFDVjs7QUFFQTtFQUNFLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTXlGb250XFxcIjtcXG4gIHNyYzogdXJsKFxcXCIuL0JsYWNrT3BzT25lLVJlZ3VsYXIudHRmXFxcIik7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMGZiNztcXG4gIG1hcmdpbjogMHB4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNeUZvbnRcXFwiO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbi5oaWRlIHtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuLmJ0biB7XFxuICBoZWlnaHQ6IG1pbig3MHB4LCAxMHZ3KTtcXG4gIHdpZHRoOiBtaW4oMjAwcHgsIDMwdncpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogbWluKDMwcHgsIDZ2dyk7XFxuICBmb250LWZhbWlseTogXFxcIk15Rm9udFxcXCI7XFxuICBib3JkZXI6IG5vbmU7XFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbi5idG46aG92ZXIge1xcbiAgc2NhbGU6IDEuMDU7XFxufVxcblxcbi8qIExvYWRpbmdzY3JlZW4gc3R5bGVzICovXFxuXFxuLmNvbnRlbnRDb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubG9hZGluZ3NjcmVlbkhlYWRlckNvbiB7XFxuICBoZWlnaHQ6IG1pbig4NXB4LCA5dncpO1xcbiAgbWFyZ2luLXRvcDogMTB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogODAlO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgdHJhbnNpdGlvbjogNHM7XFxufVxcblxcbi5sb2FkaW5nc2NyZWVuSGVhZGVyIHtcXG4gIGZvbnQtc2l6ZTogbWluKDEwdncsIDkwcHgpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYm90dG9tOiAtNjBweDtcXG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xMywgMC42NSwgMC40NiwgMS41Nyk7XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA0cztcXG59XFxuXFxuQGtleWZyYW1lcyBtb3ZlIHtcXG4gIDAlIHtcXG4gICAgYm90dG9tOiAtMTBweDtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBib3R0b206IC0xcHg7XFxuICB9XFxufVxcblxcbi5sb2FkaW5nc2NyZWVuQnRuQ29uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IDMwdmg7XFxuICBnYXA6IG1pbig1dncsIDUwcHgpO1xcbiAgd2lkdGg6IG1pbig4MHZ3LCA2MDBweCk7XFxuICB0cmFuc2l0aW9uOiA0cztcXG59XFxuXFxuLmxvYWRpbmdzY3JlZW5TdGFydEJ0biB7XFxuICBoZWlnaHQ6IG1pbig3MHB4LCAxNXZ3KTtcXG4gIHdpZHRoOiBtaW4oMjAwcHgsIDQ1dncpO1xcbiAgZm9udC1zaXplOiBtaW4oMjVweCwgNnZ3KTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMTgwZmY7XFxuICBmb250LWZhbWlseTogXFxcIk15Zm9udFxcXCI7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5sb2FkaW5nc2NyZWVuU3RhcnRCdG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5MSwgMTkxLCAxOTEpO1xcbn1cXG5cXG4vKiBMb2FkaW5nc2NyZWVuIHN0eWxlcyBFTkQgKi9cXG5cXG4vKiBJbmdhbWUgc3R5bGVzKi9cXG4uQUlHYW1lQ29uIHtcXG4gIHRyYW5zaXRpb246IDJzO1xcbn1cXG5cXG4uQUlHYW1lSGVhZGVyQ29uIHtcXG4gIHRyYW5zaXRpb246IDJzO1xcbiAgb3BhY2l0eTogMDtcXG59XFxuXFxuLmluZ2FtZUhlYWRlckNvbiB7XFxuICBoZWlnaHQ6IG1pbig0MHB4LCA1dncpO1xcbiAgbWFyZ2luLXRvcDogM3ZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLmluZ2FtZUhlYWRlciB7XFxuICBhbmltYXRpb246IG1vdmUgM3MgY3ViaWMtYmV6aWVyKDAuMTMsIDAuNjUsIDAuNDYsIDEuNTcpIGluZmluaXRlIGFsdGVybmF0ZTtcXG4gIG1hcmdpbi10b3A6IDBweDtcXG4gIGZvbnQtc2l6ZTogbWluKDQwcHgsIDV2dyk7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbi5lbmVteUdhbWVib2FyZENvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiAzdmg7XFxufVxcblxcbi5lbmVteUdhbWVib2FyZEhlYWRlciB7XFxuICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgZm9udC1zaXplOiBtaW4oMzBweCwgNnZ3KTtcXG4gIG1hcmdpbi10b3A6IDJ2aDtcXG4gIHRyYW5zaXRpb246IDJzO1xcbiAgb3BhY2l0eTogMDtcXG59XFxuXFxuLmVuZW15R2FtZWJvYXJkIHtcXG4gIGhlaWdodDogMzV2aDtcXG4gIHdpZHRoOiAzNXZoO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICB0cmFuc2l0aW9uOiAycztcXG4gIG9wYWNpdHk6IDA7XFxufVxcblxcbkBrZXlmcmFtZXMgZ2FtZWJvYXJkV2F2ZSB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgzdmgpO1xcbiAgfVxcbiAgODAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAuMnZoKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgfVxcbn1cXG5cXG4uc2VhV2F2ZSB7XFxuICBoZWlnaHQ6IDEwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDE4MGZmO1xcbiAgYW5pbWF0aW9uOiBnYW1lYm9hcmRXYXZlIDIuNXMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYWx0ZXJuYXRlO1xcbiAgdHJhbnNpdGlvbjogMnM7XFxuICBvcGFjaXR5OiAwO1xcbn1cXG5cXG4uZnJpZW5kbHlCb2FyZGNvbiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDA7XFxuICBoZWlnaHQ6IDQydmg7XFxuICB3aWR0aDogMTAwdnc7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDE4MGZmO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgdHJhbnNpdGlvbjogMnM7XFxuICBvcGFjaXR5OiAwO1xcbn1cXG5cXG4uZnJpZW5kbHlCb2FyZEhlYWRlciB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IG1pbigzMHB4LCA2dncpO1xcbiAgbWFyZ2luLWJvdHRvbTogMXZoO1xcbiAgdHJhbnNpdGlvbjogMnM7XFxuICBvcGFjaXR5OiAwO1xcbn1cXG5cXG4uZnJpZW5kbHlCb2FyZCB7XFxuICBoZWlnaHQ6IDM1dmg7XFxuICB3aWR0aDogMzV2aDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbiAgYm9yZGVyOiAycHggc29saWQgcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgdHJhbnNpdGlvbjogMnM7XFxuICBvcGFjaXR5OiAwO1xcbn1cXG5cXG4uZW5lbXlHcmlkU2xvdCB7XFxuICBib3JkZXI6IHNvbGlkIDJweCB3aGl0ZTtcXG59XFxuXFxuLmVuZW15R3JpZFNsb3RNaXNzZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2E2YTZhNjtcXG59XFxuXFxuLmVuZW15R3JpZFNsb3RVbmF0dGFja2VkIHtcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxufVxcblxcbi5lbmVteUdyaWRTbG90VW5hdHRhY2tlZDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWQ2NGI1O1xcbn1cXG5cXG4uZnJpZW5kbHlHcmlkU2xvdFNoaXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDY1LCA2NSwgNjUpO1xcbn1cXG5cXG4uZW5lbXlHcmlkU2xvdEhpdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYwMDAwO1xcbn1cXG5cXG4ud2luU2NyZWVuUGxheWVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMTgwZmY7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGJvdHRvbTogLTEwMHZoO1xcbiAgdHJhbnNpdGlvbjogNHMgZWFzZS1pbi1vdXQ7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG4ud2luU2NyZWVuVGV4dCB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDcwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi53aW5TY3JlZW5BSSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwZmI3O1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgei1pbmRleDogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgdG9wOiAtMTAwdmg7XFxuICB0cmFuc2l0aW9uOiA0cyBlYXNlLWluLW91dDtcXG59XFxuXFxuLyogUGxhY2VtZW50IHN0eWxlcyovXFxuLnBsYWNlbWVudENvbiB7XFxuICB3aWR0aDogMzAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAxODBmZjtcXG4gIHRyYW5zaXRpb246IDZzIGVhc2Utb3V0O1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgcmlnaHQ6IC0zMDB2dztcXG59XFxuXFxuQGtleWZyYW1lcyBwbGFjZW1lbnRIZWFkZXJXYXZlIHtcXG4gIDAlIHtcXG4gICAgYm90dG9tOiAtMnZoO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIGJvdHRvbTogMHZoO1xcbiAgfVxcbn1cXG5cXG4uZ3JpZFBsYWNlbWVudFNsb3Qge1xcbiAgYm9yZGVyOiAycHggd2hpdGUgc29saWQ7XFxufVxcblxcbi5wbGFjZW1lbnRCb2FyZCB7XFxuICBoZWlnaHQ6IDM1dmg7XFxuICB3aWR0aDogMzV2aDtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbi5kcmFnQW5kRHJvcENvbiB7XFxuICBoZWlnaHQ6IDYwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGdhcDogNDBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnBsYWNlbWVudFNoaXBzQ29uQ29uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgZ2FwOiA4cHg7XFxufVxcblxcbi5wbGFjZW1lbnRTaGlwc0NvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGdhcDogMTBweDtcXG4gIHdpZHRoOiAxNnZoO1xcbiAgaGVpZ2h0OiAyMHZoO1xcbn1cXG5cXG4ucGxhY2VtZW50U2hpcEVsIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBib3JkZXI6IHNvbGlkIDJweCB3aGl0ZTtcXG4gIHdpZHRoOiAzLjV2aDtcXG59XFxuXFxuLnNoaXBEcmFnQ29uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucGxhY2VtZW50Um90YXRlQnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig2NSwgNjUsIDY1KTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnBsYWNlbWVudFNlbGVjdGVkU2hpcEVsIHtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCB3aGl0ZTtcXG59XFxuXFxuLnBsYWNlbWVudEhvdmVyZWRTbG90IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3YjdiN2I7XFxufVxcblxcbi5wbGFjZW1lbnRIb3ZlcmVkU2xvdE91dE9mUmFuZ2Uge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M1NTg1ODtcXG59XFxuXFxuLnBsYWNlbWVudExvd2VyQnRuQ29uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgd2lkdGg6IG1pbig2NXZ3LCA3MDBweCk7XFxufVxcblxcbi5wbGFjZW1lbnRSZXNldEJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzU1ODU4O1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ucGxhY2VtZW50TmV4dEJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTY1OTlkO1xcbiAgY29sb3I6ICMwMTgwZmY7XFxufVxcbi5wbGFjZW1lbnROZXh0QnRuOmhvdmVyIHtcXG4gIHNjYWxlOiAxO1xcbn1cXG5cXG4ucGxhY2VtZW50TmV4dEJ0blJlYWR5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwNWM2YTk7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5wbGFjZW1lbnROZXh0QnRuUmVhZHk6aG92ZXIge1xcbiAgc2NhbGU6IDEuMDU7XFxufVxcblxcbi5wbGFjZW1lbnRIZWFkZXIge1xcbiAgYW5pbWF0aW9uOiBwbGFjZW1lbnRIZWFkZXJXYXZlIDNzIGVhc2UtaW4tb3V0IGluZmluaXRlIGFsdGVybmF0ZTtcXG59XFxuXFxuLnBsYWNlbWVudEhlYWRlckNvbiB7XFxuICBoZWlnaHQ6IGF1dG87XFxuICB3aWR0aDogOTB2dztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDN2aDtcXG4gIG1hcmdpbi10b3A6IGNhbGMoMXZoKTtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xcbiAgLnBsYWNlbWVudExvd2VyQnRuQ29uIHtcXG4gICAgbWFyZ2luLXRvcDogNzBweDtcXG4gIH1cXG59XFxuXFxuLmdldE5hbWVDb250ZW50Q29uIHtcXG4gIHRyYW5zaXRpb246IDRzO1xcbiAgb3BhY2l0eTogMDtcXG59XFxuXFxuLmdldE5hbWVJbnB1dENvbkNvbiB7XFxuICBtYXJnaW4tdG9wOiAzMHZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICB3aWR0aDogbWluKDkwdncsIDYwMHB4KTtcXG59XFxuXFxuLmdldE5hbWVJbnB1dENvbiB7XFxuICBnYXA6IDVweDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4uZ2V0TmFtZUlucHV0IHtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGZvbnQtZmFtaWx5OiBcXFwibXlGb250XFxcIjtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG4gIHdpZHRoOiBtaW4oMjMwcHgsIDQwdncpO1xcbn1cXG5cXG4uZ2V0TmFtZUlucHV0TGFiZWwge1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uZ2V0TmFtZU5leHRCdG4ge1xcbiAgbWFyZ2luLXRvcDogMjB2aDtcXG4gIGNvbG9yOiAjMDAwZmI3O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDY0NztcXG4gIGhlaWdodDogbWluKDcwcHgsIDE1dncpO1xcbiAgd2lkdGg6IG1pbigyMDBweCwgNDV2dyk7XFxufVxcblxcbi5nZXROYW1lTmV4dEJ0bjpob3ZlciB7XFxuICBzY2FsZTogMTtcXG59XFxuXFxuLmdldE5hbWVOZXh0QnRuUmVhZHkge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA1YzZhOTtcXG59XFxuXFxuLmdldE5hbWVOZXh0QnRuUmVhZHk6aG92ZXIge1xcbiAgc2NhbGU6IDEuMTtcXG59XFxuXFxuLnBhc3NEZXZpY2VDb24ge1xcbiAgcGFkZGluZy10b3A6IDE1dmg7XFxuICBoZWlnaHQ6IDg1dmg7XFxuICB3aWR0aDogMTAwdnc7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA5NzI7XFxuICB0cmFuc2l0aW9uOiAycyBlYXNlLWluLW91dDtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGdhcDogbWluKDJ2aCwgMTAwcHgpO1xcbn1cXG5cXG4ucGFzc1NjcmVlbkhlYWRlciB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IG1pbig0MHB4LCA3dncpO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDkwdnc7XFxufVxcblxcbi5wYXNzRGV2aWNlSW1hZ2Uge1xcbiAgd2lkdGg6IG1pbig2MDBweCwgMTAwdncpO1xcbn1cXG5cXG4ucGFzc0RldmljZUNvbnRpbnVlVGV4dCB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IG1pbigyMHB4LCA0dncpO1xcbiAgbWFyZ2luLXRvcDogMzB2aDtcXG59XFxuXFxuLnNldHRpbmdJY29uIHtcXG4gIGhlaWdodDogbWluKDUwcHgsIDh2dyk7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICByaWdodDogMnZ3O1xcbiAgYm90dG9tOiAydnc7XFxuICB6LWluZGV4OiAxO1xcbiAgdHJhbnNpdGlvbjogMC4zcztcXG59XFxuXFxuLnNldHRpbmdJY29uOmhvdmVyIHtcXG4gIHNjYWxlOiAxLjE7XFxufVxcblxcbi5zZXR0aW5nUGFnZUNvbiB7XFxuICB0b3A6IDA7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgei1pbmRleDogMjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA5NzI7XFxuICB0cmFuc2l0aW9uOiAxcztcXG59XFxuXFxuLnNldHRpbmdCYWNrQXJyb3cge1xcbiAgaGVpZ2h0OiBtaW4oNjBweCwgNnZ3KTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGxlZnQ6IDV2dztcXG4gIHRvcDogN3ZoO1xcbiAgdHJhbnNpdGlvbjogMC4zcztcXG59XFxuXFxuLnNldHRpbmdCYWNrQXJyb3c6aG92ZXIge1xcbiAgc2NhbGU6IDEuMTtcXG4gIGNvbG9yOiByZ2IoMjE5LCAyMTksIDIxOSk7XFxufVxcblxcbi5zZXR0aW5nc1NsaWRlckNvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWFyZ2luLXRvcDogMjB2aDtcXG4gIGdhcDogNXZoO1xcbn1cXG5cXG4uc2V0dGluZ1NtYWxsU2xpZGVyQ29uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IG1pbig2MDBweCwgODB2dyk7XFxufVxcblxcbi5zZXR0aW5nc1NsaWRlckxhYmVsIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmctbGVmdDogNXB4O1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4uc2V0dGluZ3NTbGlkZXJNaW5pQ29uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5zZXR0aW5nc1NsaWRlciB7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5zZXR0aW5nc1NsaWRlclZhbHVlIHtcXG4gIGhlaWdodDogOHB4O1xcbiAgd2lkdGg6IDUwcHg7XFxuICBtYXJnaW4tdG9wOiAtMi41cHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICB0ZXh0LWFsaWduOiBlbmQ7XFxufVxcblxcbi5zZXR0aW5nc1NsaWRlcjo6LXdlYmtpdC1zbGlkZXItcnVubmFibGUtdHJhY2sge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgaGVpZ2h0OiA4cHg7XFxufVxcblxcbi5zZXR0aW5nc1NsaWRlcjo6LW1vei1yYW5nZS10cmFjayB7XFxuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XFxuICBoZWlnaHQ6IDhweDtcXG59XFxuXFxuLnNldHRpbmdzU2xpZGVyOjotbXMtdHJhY2sge1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIGhlaWdodDogOHB4O1xcbn1cXG5cXG4uc2V0dGluZ3NTbGlkZXI6Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gIGhlaWdodDogMjBweDtcXG4gIHdpZHRoOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAxODBmZjtcXG4gIG1hcmdpbi10b3A6IC01LjVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLnNldHRpbmdzU2xpZGVyOjotbW96LXJhbmdlLXRodW1iIHtcXG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcXG4gIGhlaWdodDogMjBweDtcXG4gIHdpZHRoOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAxODBmZjtcXG4gIG1hcmdpbi10b3A6IC01LjVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLnNldHRpbmdzU2xpZGVyOjotbXMtdGh1bWIge1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIGhlaWdodDogMjBweDtcXG4gIHdpZHRoOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAxODBmZjtcXG4gIG1hcmdpbi10b3A6IC01LjVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLnJlc3VtZUdhbWVCYWNrZ3JvdW5kIHtcXG4gIHRvcDogMHB4O1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42NzEpO1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHRyYW5zaXRpb246IDFzO1xcbn1cXG5cXG4ucmVzdW1lR2FtZUNvbiB7XFxuICBoZWlnaHQ6IDI1dmg7XFxuICB3aWR0aDogMTAwdnc7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwZmI3O1xcbiAgcGFkZGluZy10b3A6IDV2aDtcXG4gIGdhcDogNXZoO1xcbn1cXG5cXG4ucmVzdW1lR2FtZVRleHQge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiBtaW4oMzBweCwgNXZ3KTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnJlc3VtZUdhbWVCdG5Db24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICB3aWR0aDogbWluKDUwMHB4LCA3MHZ3KTtcXG59XFxuXFxuLnJlc3VtZUdhbWVSZXN1bWVCdG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA1YzZhOTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmJhY2tUb0xvYmJ5QnRuQ29uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiAyMHZoO1xcbn1cXG5cXG4uYmFja1RvTG9iYnlCdG4ge1xcbiAgd2lkdGg6IG1pbigzMDBweCwgNjV2dyk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzU1ODU4O1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBzaGlwIGZyb20gXCIuL3NoaXBzXCI7XG5cbmNsYXNzIGdhbWVib2FyZCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMubWlzc2VkID0gW107XG4gICAgdGhpcy5oaXRzID0gW107XG4gICAgdGhpcy5zaGlwcyA9IFtdO1xuICB9XG5cbiAgcGxhY2VTaGlwcyhhcnkpIHtcbiAgICBhcnkuZm9yRWFjaCgobmV3QXJ5KSA9PiB7XG4gICAgICBjb25zdCBuZXdTaGlwID0gbmV3IHNoaXAobmV3QXJ5KTtcbiAgICAgIHRoaXMuc2hpcHMucHVzaChuZXdTaGlwKTtcbiAgICB9KTtcbiAgfVxuXG4gIHNoaXBzU2FpbGluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zaGlwcy5yZWR1Y2UoXG4gICAgICAoY291bnQsIHNoaXBFbCkgPT4gKHNoaXBFbC5pc1N1bmsoKSA9PSBmYWxzZSA/IGNvdW50ICsgMSA6IGNvdW50KSxcbiAgICAgIDBcbiAgICApO1xuICB9XG5cbiAgcmVjaWV2ZUF0dGFjayhbeCwgeV0pIHtcbiAgICAvLyBGaXJzdCB3ZSBjb21wYXJlIGNvb3JkaW5hdGVzIHNvIHdlIGRvbnQgaGl0IHRoZSBzYW1lIHNwb3QgdHdpY2VcbiAgICBpZiAoXG4gICAgICB0aGlzLm1pc3NlZC5yZWR1Y2UoXG4gICAgICAgIChzdGF0ZSwgY3VyKSA9PlxuICAgICAgICAgIGN1clswXSA9PSB4ICYmIGN1clsxXSA9PSB5ID8gKHN0YXRlID0gZmFsc2UpIDogKHN0YXRlID0gdHJ1ZSksXG4gICAgICAgIHRydWVcbiAgICAgICkgPT0gdHJ1ZSAmJlxuICAgICAgdGhpcy5oaXRzLnJlZHVjZShcbiAgICAgICAgKHN0YXRlLCBjdXIpID0+XG4gICAgICAgICAgY3VyWzBdID09IHggJiYgY3VyWzFdID09IHkgPyAoc3RhdGUgPSBmYWxzZSkgOiAoc3RhdGUgPSB0cnVlKSxcbiAgICAgICAgdHJ1ZVxuICAgICAgKSA9PSB0cnVlXG4gICAgKSB7XG4gICAgICAvLyBXZSBjaGVjayBpZiBhIHNoaXAgaGFzIGJlZW4gaGl0XG4gICAgICBsZXQgaXNIaXQgPSB0aGlzLnNoaXBzLnJlZHVjZSgoaXNIaXQxLCBwbGFjZWRTaGlwKSA9PiB7XG4gICAgICAgIGxldCB2YWwgPSBwbGFjZWRTaGlwLmNvb3IucmVkdWNlKChzdGF0ZSwgY29vcmRpbmF0ZSkgPT4ge1xuICAgICAgICAgIGlmIChjb29yZGluYXRlWzBdID09IHggJiYgY29vcmRpbmF0ZVsxXSA9PSB5KSB7XG4gICAgICAgICAgICAvLyBXZSBoYXZlIGEgaGl0XG4gICAgICAgICAgICBwbGFjZWRTaGlwLmhpdCgpO1xuICAgICAgICAgICAgdGhpcy5oaXRzLnB1c2goW3gsIHldKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICAgICAgfVxuICAgICAgICB9LCBmYWxzZSk7XG4gICAgICAgIGlmICh2YWwgPT0gdHJ1ZSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBpc0hpdDE7XG4gICAgICAgIH1cbiAgICAgIH0sIGZhbHNlKTtcbiAgICAgIGlmIChpc0hpdCA9PSBmYWxzZSkgdGhpcy5taXNzZWQucHVzaChbeCwgeV0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBXZSBoaXQgdGhlIHNhbWUgc3BvdFxuICAgICAgLy8gVHJvdyBlcnJvclxuICAgIH1cbiAgfVxuXG4gIGFsbFN1bmsgPSAoKSA9PiAodGhpcy5zaGlwc1NhaWxpbmcoKSA9PSAwID8gdHJ1ZSA6IGZhbHNlKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2FtZWJvYXJkO1xuIiwiaW1wb3J0IGdhbWVib2FyZCBmcm9tIFwiLi9nYW1lYm9hcmRcIjtcblxuY2xhc3MgcGxheWVyIHtcbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5ib2FyZCA9IG5ldyBnYW1lYm9hcmQoKTtcbiAgfVxufVxuXG5jbGFzcyBBSSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMubmFtZSA9IFwiQUlcIjtcbiAgICB0aGlzLmJvYXJkID0gbmV3IGdhbWVib2FyZCgpO1xuICAgIHRoaXMuYXR0YWNrTG9nID0gW107XG4gICAgdGhpcy5uZXh0QXR0YWNrID0gW107XG4gICAgdGhpcy5uZXdBdHRhY2tlZFNoaXAgPSBbXTtcbiAgfVxuICBhdHRhY2socGxheWVyKSB7XG4gICAgY29uc3QgaGFzQXR0YWNrZWQgPSAoW3gsIHldKSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5hdHRhY2tMb2cucmVkdWNlKChzdGF0ZSwgY29vcikgPT4ge1xuICAgICAgICBpZiAoY29vclswXSA9PSB4ICYmIGNvb3JbMV0gPT0geSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgICAgfVxuICAgICAgfSwgZmFsc2UpO1xuICAgIH07XG5cbiAgICBjb25zdCBhdHRhY2tSYW5kb21seSA9ICgpID0+IHtcbiAgICAgIGxldCB4ID0gTWF0aC5jZWlsKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICBsZXQgeSA9IE1hdGguY2VpbChNYXRoLnJhbmRvbSgpICogMTApO1xuXG4gICAgICBpZiAoaGFzQXR0YWNrZWQoW3gsIHldKSA9PSB0cnVlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmF0dGFjayhwbGF5ZXIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5hdHRhY2tMb2cucHVzaChbeCwgeV0pO1xuICAgICAgICByZXR1cm4gW3gsIHldO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBpZiAodGhpcy5uZXh0QXR0YWNrWzBdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIFdlIGhhdmUgaGl0IHNvbWV0aGluZyBiZWZvcmUsIGFuZCB3ZSBoYXZlIGF0dGFja2VkIGEgbmV3IHNwb3RcbiAgICAgIGlmIChcbiAgICAgICAgdGhpcy5hdHRhY2tMb2dbdGhpcy5hdHRhY2tMb2cubGVuZ3RoIC0gMV1bMF0gPT1cbiAgICAgICAgICBwbGF5ZXIuYm9hcmQuaGl0c1twbGF5ZXIuYm9hcmQuaGl0cy5sZW5ndGggLSAxXVswXSAmJlxuICAgICAgICB0aGlzLmF0dGFja0xvZ1t0aGlzLmF0dGFja0xvZy5sZW5ndGggLSAxXVsxXSA9PVxuICAgICAgICAgIHBsYXllci5ib2FyZC5oaXRzW3BsYXllci5ib2FyZC5oaXRzLmxlbmd0aCAtIDFdWzFdXG4gICAgICApIHtcbiAgICAgICAgLy8gV2UgaGl0IHNvbWV0aGluZyBsYXN0IHRpbWVcbiAgICAgICAgbGV0IHByZXZBdHRhY2sgPSB0aGlzLmF0dGFja0xvZ1t0aGlzLmF0dGFja0xvZy5sZW5ndGggLSAxXTtcblxuICAgICAgICAvLyBQdXNoIHRvIGF0dGFja2VkIHNoaXBcbiAgICAgICAgdGhpcy5uZXdBdHRhY2tlZFNoaXAucHVzaChwcmV2QXR0YWNrKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMubmV3QXR0YWNrZWRTaGlwLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgLy8gVGhpcyBtZWFucyB3ZSBoYXZlIGhpdCB0d28gcG9pbnRzIG9mIHRoZSBzaGlwLCB3ZSBrbm93IGl0IGRpcmVjdGlvblxuICAgICAgICAvLyBXZSBuZWVkIHRvIGNoYW5nZSB0aGUgcGxhblxuXG4gICAgICAgIGlmICh0aGlzLm5ld0F0dGFja2VkU2hpcFswXVswXSA9PSB0aGlzLm5ld0F0dGFja2VkU2hpcFsxXVswXSkge1xuICAgICAgICAgIC8vIEl0cyBvbiB0aGUgeSBheGlzXG5cbiAgICAgICAgICAvLyBXZSBuZWVkIHRvIGNsZWFyIG5leHQgYXR0YWNrIHRvIHByZXZlbnQgYXR0YWNraW5nIHVubmVjZXNzYXJ5IHNwb3RzXG4gICAgICAgICAgdGhpcy5uZXh0QXR0YWNrID0gW107XG5cbiAgICAgICAgICAvLyBGaW5kIHNoaXAgZWRnZXNcbiAgICAgICAgICAvLyBGaW5kIHRoZSBzbWFsbGVzdFxuICAgICAgICAgIGxldCBzaGlwU3RhcnQgPSB0aGlzLm5ld0F0dGFja2VkU2hpcC5yZWR1Y2UoXG4gICAgICAgICAgICAoc3RhdGUsIGN1cikgPT4gKHN0YXRlWzFdID4gY3VyWzFdID8gY3VyIDogc3RhdGUpLFxuICAgICAgICAgICAgWzAsIEluZmluaXR5XVxuICAgICAgICAgICk7XG4gICAgICAgICAgLy8gRmluZCB0aGUgZ3JlYXRlc3RcbiAgICAgICAgICBsZXQgc2hpcEVuZCA9IHRoaXMubmV3QXR0YWNrZWRTaGlwLnJlZHVjZShcbiAgICAgICAgICAgIChzdGF0ZSwgY3VyKSA9PiAoc3RhdGVbMV0gPCBjdXJbMV0gPyBjdXIgOiBzdGF0ZSksXG4gICAgICAgICAgICBbMCwgMCAtIEluZmluaXR5XVxuICAgICAgICAgICk7XG5cbiAgICAgICAgICAvLyBGaW5kIGVuZCBhbmQgc2VlIGlmIGl0IG5lZWRzIHRvIGJlIGF0dGFja2VkXG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgaGFzQXR0YWNrZWQoW3NoaXBFbmRbMF0sIHNoaXBFbmRbMV0gKyAxXSkgPT0gZmFsc2UgJiZcbiAgICAgICAgICAgIHNoaXBFbmRbMV0gKyAxIDw9IDEwXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICAvLyBXZSBuZWVkIHRvIGF0dGFjayB0aGlzIHNwb3QgbGF0ZXJcbiAgICAgICAgICAgIHRoaXMubmV4dEF0dGFjay5wdXNoKFtzaGlwRW5kWzBdLCBzaGlwRW5kWzFdICsgMV0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBGaW5kIHN0YXJ0IGFuZCBzZWUgaWYgaXQgbmVlZHMgdG8gYmUgYXR0YWNrZWRcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBoYXNBdHRhY2tlZChbc2hpcFN0YXJ0WzBdLCBzaGlwU3RhcnRbMV0gLSAxXSkgPT0gZmFsc2UgJiZcbiAgICAgICAgICAgIHNoaXBTdGFydFsxXSAtIDEgPj0gMVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgLy8gV2UgbmVlZCB0byBhdHRhY2sgdGhpcyBzcG90IGxhdGVyXG4gICAgICAgICAgICB0aGlzLm5leHRBdHRhY2sucHVzaChbc2hpcFN0YXJ0WzBdLCBzaGlwU3RhcnRbMV0gLSAxXSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgKGhhc0F0dGFja2VkKFtzaGlwRW5kWzBdLCBzaGlwRW5kWzFdICsgMV0pID09IHRydWUgfHxcbiAgICAgICAgICAgICAgc2hpcEVuZFsxXSArIDEgPiAxMCkgJiZcbiAgICAgICAgICAgIChoYXNBdHRhY2tlZChbc2hpcFN0YXJ0WzBdLCBzaGlwU3RhcnRbMV0gLSAxXSkgPT0gdHJ1ZSB8fFxuICAgICAgICAgICAgICBzaGlwU3RhcnRbMV0gLSAxIDwgMSlcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIC8vIFdlIGhhdmUgZGVzdHJveWVkIHRoZSBpbnRpZXJlIHNoaXBcblxuICAgICAgICAgICAgLy8gQ2xlYXIgYXR0YWNraW5nIHNoaXAsIGJlY2F1c2UgaXQgaXMgZGVzdHJveWVkXG4gICAgICAgICAgICB0aGlzLm5ld0F0dGFja2VkU2hpcCA9IFtdO1xuXG4gICAgICAgICAgICByZXR1cm4gYXR0YWNrUmFuZG9tbHkoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gSXRzIG9uIHRoZSB4IGF4aXNcblxuICAgICAgICAgIC8vIFdlIG5lZWQgdG8gY2xlYXIgbmV4dCBhdHRhY2sgdG8gcHJldmVudCBhdHRhY2tpbmcgdW5uZWNlc3Nhcnkgc3BvdHNcbiAgICAgICAgICB0aGlzLm5leHRBdHRhY2sgPSBbXTtcblxuICAgICAgICAgIC8vIEZpbmQgc2hpcCBlZGdlc1xuXG4gICAgICAgICAgLy8gRmluZCB0aGUgc21hbGxlc3RcbiAgICAgICAgICBsZXQgc2hpcFN0YXJ0ID0gdGhpcy5uZXdBdHRhY2tlZFNoaXAucmVkdWNlKFxuICAgICAgICAgICAgKHN0YXRlLCBjdXIpID0+IChzdGF0ZVswXSA+IGN1clswXSA/IGN1ciA6IHN0YXRlKSxcbiAgICAgICAgICAgIFtJbmZpbml0eSwgMF1cbiAgICAgICAgICApO1xuICAgICAgICAgIC8vIEZpbmQgdGhlIGdyZWF0ZXN0XG4gICAgICAgICAgbGV0IHNoaXBFbmQgPSB0aGlzLm5ld0F0dGFja2VkU2hpcC5yZWR1Y2UoXG4gICAgICAgICAgICAoc3RhdGUsIGN1cikgPT4gKHN0YXRlWzBdIDwgY3VyWzBdID8gY3VyIDogc3RhdGUpLFxuICAgICAgICAgICAgWzAgLSBJbmZpbml0eSwgMF1cbiAgICAgICAgICApO1xuXG4gICAgICAgICAgLy8gRmluZCBlbmQgYW5kIHNlZSBpZiBpdCBuZWVkcyB0byBiZSBhdHRhY2tlZFxuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIGhhc0F0dGFja2VkKFtzaGlwRW5kWzBdICsgMSwgc2hpcEVuZFsxXV0pID09IGZhbHNlICYmXG4gICAgICAgICAgICBzaGlwRW5kWzBdICsgMSA8PSAxMFxuICAgICAgICAgICkge1xuICAgICAgICAgICAgLy8gV2UgbmVlZCB0byBhdHRhY2sgdGhpcyBzcG90IGxhdGVyXG4gICAgICAgICAgICB0aGlzLm5leHRBdHRhY2sucHVzaChbc2hpcEVuZFswXSArIDEsIHNoaXBFbmRbMV1dKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gRmluZCBzdGFydCBhbmQgc2VlIGlmIGl0IG5lZWRzIHRvIGJlIGF0dGFja2VkXG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgaGFzQXR0YWNrZWQoW3NoaXBTdGFydFswXSAtIDEsIHNoaXBTdGFydFsxXV0pID09IGZhbHNlICYmXG4gICAgICAgICAgICBzaGlwU3RhcnRbMF0gLSAxID49IDFcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIC8vIFdlIG5lZWQgdG8gYXR0YWNrIHRoaXMgc3BvdCBsYXRlclxuICAgICAgICAgICAgdGhpcy5uZXh0QXR0YWNrLnB1c2goW3NoaXBTdGFydFswXSAtIDEsIHNoaXBTdGFydFsxXV0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIChoYXNBdHRhY2tlZChbc2hpcEVuZFswXSArIDEsIHNoaXBFbmRbMV1dKSA9PSB0cnVlIHx8XG4gICAgICAgICAgICAgIHNoaXBFbmRbMF0gKyAxID4gMTApICYmXG4gICAgICAgICAgICAoaGFzQXR0YWNrZWQoW3NoaXBTdGFydFswXSAtIDEsIHNoaXBTdGFydFsxXV0pID09IHRydWUgfHxcbiAgICAgICAgICAgICAgc2hpcFN0YXJ0WzBdIC0gMSA8IDEpXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICAvLyBDbGVhciBhdHRhY2tpbmcgc2hpcCwgYmVjYXVzZSBpdCBpcyBkZXN0cm95ZWRcblxuICAgICAgICAgICAgLy8gQ2xlYXIgYXR0YWNraW5nIHNoaXBcbiAgICAgICAgICAgIHRoaXMubmV3QXR0YWNrZWRTaGlwID0gW107XG5cbiAgICAgICAgICAgIHJldHVybiBhdHRhY2tSYW5kb21seSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy8gd2UgbmVlZCB0byBhdHRhY2sgYWNvcmRpbmdseSB0byBvdXIgcGxhblxuXG4gICAgICB0aGlzLmF0dGFja0xvZy5wdXNoKHRoaXMubmV4dEF0dGFja1swXSk7XG4gICAgICB0aGlzLm5leHRBdHRhY2suc2hpZnQoKTtcblxuICAgICAgLy8gVG8gbWFrZSBzdXJlIGl0IGRvc2VuJ3Qgc2tpcCBhbiBhdHRhY2sgYmVjYXVzZSBuZXh0QXR0YWNrWzBdID09IHVuZGVmaW5kZWRcbiAgICAgIGlmICh0aGlzLm5leHRBdHRhY2tbMF0gPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMubmV4dEF0dGFjay5wdXNoKG51bGwpO1xuICAgICAgfVxuXG4gICAgICAvLyBJZiBhbGwgc3BvdHMgYXJvdW5kIHRoZSBzaGlwIGhhcyBiZWVuIGF0dGFja2VkXG4gICAgICBpZiAoXG4gICAgICAgIGhhc0F0dGFja2VkKFtcbiAgICAgICAgICB0aGlzLm5ld0F0dGFja2VkU2hpcFswXVswXSAtIDEsXG4gICAgICAgICAgdGhpcy5uZXdBdHRhY2tlZFNoaXBbMF1bMV0sXG4gICAgICAgIF0pID09IHRydWUgJiZcbiAgICAgICAgaGFzQXR0YWNrZWQoW1xuICAgICAgICAgIHRoaXMubmV3QXR0YWNrZWRTaGlwWzBdWzBdICsgMSxcbiAgICAgICAgICB0aGlzLm5ld0F0dGFja2VkU2hpcFswXVsxXSxcbiAgICAgICAgXSkgPT0gdHJ1ZSAmJlxuICAgICAgICBoYXNBdHRhY2tlZChbXG4gICAgICAgICAgdGhpcy5uZXdBdHRhY2tlZFNoaXBbMF1bMF0sXG4gICAgICAgICAgdGhpcy5uZXdBdHRhY2tlZFNoaXBbMF1bMV0gKyAxLFxuICAgICAgICBdKSA9PSB0cnVlICYmXG4gICAgICAgIGhhc0F0dGFja2VkKFtcbiAgICAgICAgICB0aGlzLm5ld0F0dGFja2VkU2hpcFswXVswXSxcbiAgICAgICAgICB0aGlzLm5ld0F0dGFja2VkU2hpcFswXVsxXSAtIDEsXG4gICAgICAgIF0pID09IHRydWVcbiAgICAgICkge1xuICAgICAgICAvLyBXZSBzaG91bGRuJ3QgYXR0YWNrIGFyb3VuZCB0aGUgc2hpcFxuXG4gICAgICAgIC8vIENsZWFyIG5ld0F0dGFja2VkU2hpcFxuICAgICAgICB0aGlzLm5ld0F0dGFja2VkU2hpcCA9IFtdO1xuXG4gICAgICAgIC8vIENsZWFyIG5leHRcbiAgICAgICAgdGhpcy5uZXh0QXR0YWNrID0gW107XG5cbiAgICAgICAgLy8gTWFrZSBhIHJhbmRvbSBhdHRhY2tcbiAgICAgICAgYXR0YWNrUmFuZG9tbHkoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLmF0dGFja0xvZ1t0aGlzLmF0dGFja0xvZy5sZW5ndGggLSAxXTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuYXR0YWNrTG9nLmxlbmd0aCA+IDAgJiYgcGxheWVyLmJvYXJkLmhpdHMubGVuZ3RoID4gMCkge1xuICAgICAgaWYgKFxuICAgICAgICB0aGlzLmF0dGFja0xvZ1t0aGlzLmF0dGFja0xvZy5sZW5ndGggLSAxXVswXSA9PVxuICAgICAgICAgIHBsYXllci5ib2FyZC5oaXRzW3BsYXllci5ib2FyZC5oaXRzLmxlbmd0aCAtIDFdWzBdICYmXG4gICAgICAgIHRoaXMuYXR0YWNrTG9nW3RoaXMuYXR0YWNrTG9nLmxlbmd0aCAtIDFdWzFdID09XG4gICAgICAgICAgcGxheWVyLmJvYXJkLmhpdHNbcGxheWVyLmJvYXJkLmhpdHMubGVuZ3RoIC0gMV1bMV1cbiAgICAgICkge1xuICAgICAgICAvLyBXZSBoYXZlIGp1c3QgaGl0IHNvbWV0aGluZywgYW5kIHdlIGhhdmUgbm8gcHJldiBwbGFuc1xuICAgICAgICBsZXQgcHJldkF0dGFjayA9IHRoaXMuYXR0YWNrTG9nW3RoaXMuYXR0YWNrTG9nLmxlbmd0aCAtIDFdO1xuXG4gICAgICAgIC8vIFB1c2ggdG8gYXR0YWNrZWQgc2hpcFxuICAgICAgICB0aGlzLm5ld0F0dGFja2VkU2hpcC5wdXNoKHByZXZBdHRhY2spO1xuXG4gICAgICAgIGlmIChcbiAgICAgICAgICBwcmV2QXR0YWNrWzBdICsgMSA8PSAxMCAmJlxuICAgICAgICAgIGhhc0F0dGFja2VkKFtwcmV2QXR0YWNrWzBdICsgMSwgcHJldkF0dGFja1sxXV0pID09IGZhbHNlXG4gICAgICAgICkge1xuICAgICAgICAgIC8vIFdlIG5lZWQgdG8gY2hlY2sgdGhpcyBzcG90XG4gICAgICAgICAgdGhpcy5uZXh0QXR0YWNrLnB1c2goW3ByZXZBdHRhY2tbMF0gKyAxLCBwcmV2QXR0YWNrWzFdXSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKFxuICAgICAgICAgIHByZXZBdHRhY2tbMV0gKyAxIDw9IDEwICYmXG4gICAgICAgICAgaGFzQXR0YWNrZWQoW3ByZXZBdHRhY2tbMF0sIHByZXZBdHRhY2tbMV0gKyAxXSkgPT0gZmFsc2VcbiAgICAgICAgKSB7XG4gICAgICAgICAgLy8gV2UgbmVlZCB0byBjaGVjayB0aGlzIHNwb3RcbiAgICAgICAgICB0aGlzLm5leHRBdHRhY2sucHVzaChbcHJldkF0dGFja1swXSwgcHJldkF0dGFja1sxXSArIDFdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChcbiAgICAgICAgICBwcmV2QXR0YWNrWzBdIC0gMSA+PSAxICYmXG4gICAgICAgICAgaGFzQXR0YWNrZWQoW3ByZXZBdHRhY2tbMF0gLSAxLCBwcmV2QXR0YWNrWzFdXSkgPT0gZmFsc2VcbiAgICAgICAgKSB7XG4gICAgICAgICAgLy8gV2UgbmVlZCB0byBjaGVjayB0aGlzIHNwb3RcbiAgICAgICAgICB0aGlzLm5leHRBdHRhY2sucHVzaChbcHJldkF0dGFja1swXSAtIDEsIHByZXZBdHRhY2tbMV1dKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoXG4gICAgICAgICAgcHJldkF0dGFja1sxXSAtIDEgPj0gMSAmJlxuICAgICAgICAgIGhhc0F0dGFja2VkKFtwcmV2QXR0YWNrWzBdLCBwcmV2QXR0YWNrWzFdIC0gMV0pID09IGZhbHNlXG4gICAgICAgICkge1xuICAgICAgICAgIC8vIFdlIG5lZWQgdG8gY2hlY2sgdGhpcyBzcG90XG4gICAgICAgICAgdGhpcy5uZXh0QXR0YWNrLnB1c2goW3ByZXZBdHRhY2tbMF0sIHByZXZBdHRhY2tbMV0gLSAxXSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBtYWtlIHN1cmUgaXQgZG9zZW4ndCBhdHRhY2sgdW5kZWZpbmVkXG4gICAgICAgIGlmICh0aGlzLm5leHRBdHRhY2tbMF0gPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcmV0dXJuIGF0dGFja1JhbmRvbWx5KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5hdHRhY2tMb2cucHVzaCh0aGlzLm5leHRBdHRhY2tbMF0pO1xuICAgICAgICAgIHRoaXMubmV4dEF0dGFjay5zaGlmdCgpO1xuXG4gICAgICAgICAgcmV0dXJuIHRoaXMuYXR0YWNrTG9nW3RoaXMuYXR0YWNrTG9nLmxlbmd0aCAtIDFdO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBXZSBoYXZlIG5vIGNsdWUsIHNob290IHJhbmRvbWx5XG4gICAgICAgIHJldHVybiBhdHRhY2tSYW5kb21seSgpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBXZSBoYXZlIG5vIGNsdWUsIHNob290IHJhbmRvbWx5XG4gICAgICByZXR1cm4gYXR0YWNrUmFuZG9tbHkoKTtcbiAgICB9XG4gIH1cbiAgcGxhY2VTaGlwcygpIHtcbiAgICBsZXQgc2hpcEFyeSA9IFtdO1xuXG4gICAgY29uc3QgY2FsY0Nvb3IgPSAoc2hpcExlbmd0aCkgPT4ge1xuICAgICAgbGV0IHggPSBNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgIGxldCB5ID0gTWF0aC5jZWlsKE1hdGgucmFuZG9tKCkgKiAxMCk7XG5cbiAgICAgIGxldCBzaGlwQ29vckFyeSA9IFtbeCwgeV1dO1xuXG4gICAgICBpZiAoTWF0aC5yYW5kb20oKSA8IDAuNSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHNoaXBMZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmICh4ICsgc2hpcExlbmd0aCA8PSAxMCkge1xuICAgICAgICAgICAgc2hpcENvb3JBcnkucHVzaChbeCArIGksIHldKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2hpcENvb3JBcnkucHVzaChbeCAtIGksIHldKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgc2hpcExlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKHkgKyBzaGlwTGVuZ3RoIDw9IDEwKSB7XG4gICAgICAgICAgICBzaGlwQ29vckFyeS5wdXNoKFt4LCB5ICsgaV0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzaGlwQ29vckFyeS5wdXNoKFt4LCB5IC0gaV0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXQgaGFzRHViID0gKGFycikgPT4gYXJyLmxlbmd0aCAhPT0gbmV3IFNldChhcnIpLnNpemU7XG5cbiAgICAgIGxldCBzaGlwQ29vclRlc3RBcnkgPSBbXTtcblxuICAgICAgc2hpcEFyeS5mb3JFYWNoKChzaGlwRWxDb29yKSA9PiB7XG4gICAgICAgIHNoaXBFbENvb3IuZm9yRWFjaCgoY29vclNldCkgPT4ge1xuICAgICAgICAgIHNoaXBDb29yVGVzdEFyeS5wdXNoKGNvb3JTZXRbMF0udG9TdHJpbmcoKSArIGNvb3JTZXRbMV0udG9TdHJpbmcoKSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIHNoaXBDb29yQXJ5LmZvckVhY2goKGNvb3JTZXQpID0+IHtcbiAgICAgICAgc2hpcENvb3JUZXN0QXJ5LnB1c2goY29vclNldFswXS50b1N0cmluZygpICsgY29vclNldFsxXS50b1N0cmluZygpKTtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoaGFzRHViKHNoaXBDb29yVGVzdEFyeSkgPT0gdHJ1ZSkge1xuICAgICAgICByZXR1cm4gY2FsY0Nvb3Ioc2hpcExlbmd0aCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gc2hpcENvb3JBcnk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHNoaXBBcnkucHVzaChjYWxjQ29vcigyKSk7XG4gICAgc2hpcEFyeS5wdXNoKGNhbGNDb29yKDMpKTtcbiAgICBzaGlwQXJ5LnB1c2goY2FsY0Nvb3IoMykpO1xuICAgIHNoaXBBcnkucHVzaChjYWxjQ29vcig0KSk7XG4gICAgc2hpcEFyeS5wdXNoKGNhbGNDb29yKDQpKTtcbiAgICBzaGlwQXJ5LnB1c2goY2FsY0Nvb3IoNSkpO1xuXG4gICAgdGhpcy5ib2FyZC5wbGFjZVNoaXBzKHNoaXBBcnkpO1xuICB9XG59XG5cbmNvbnN0IG5ld0FJID0gbmV3IEFJKCk7XG5uZXdBSS5wbGFjZVNoaXBzKCk7XG5cbmV4cG9ydCB7IHBsYXllciwgQUkgfTtcbiIsImNsYXNzIHNoaXAge1xuICBjb25zdHJ1Y3RvcihhcnkpIHtcbiAgICB0aGlzLmxlbmd0aCA9IGFyeS5sZW5ndGg7XG4gICAgdGhpcy5jb29yID0gYXJ5O1xuICAgIHRoaXMuaGl0cyA9IDA7XG4gIH1cbiAgaGl0KCkge1xuICAgIHRoaXMuaGl0cysrO1xuICB9XG4gIGlzU3VuayA9ICgpID0+ICh0aGlzLmhpdHMgPT0gdGhpcy5sZW5ndGggPyB0cnVlIDogZmFsc2UpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzaGlwO1xuIiwiaW1wb3J0IHtcbiAgbG9hZGluZ1NjcmVlbixcbiAgcGxhY2VTaGlwc0RPTSxcbiAgcGxheUFnYWluc3RBSSxcbiAgcmVzdW1lR2FtZSxcbiAgdHdvUGxheWVyLFxufSBmcm9tIFwiLi9nYW1lbG9vcFwiO1xuXG5sb2FkaW5nU2NyZWVuKCk7XG5cbmlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImdhbWVcIikpIHtcbiAgLy8gSWYgdGhlcmUgaXMgZGF0YSBvZiBwcmV2aXVzIGdhbWUsIGxldCB0aGVtIHJlc3VtZVxuICByZXN1bWVHYW1lKCkudGhlbigoKSA9PiB7XG4gICAgY29uc3QgZ2FtZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJnYW1lXCIpKTtcblxuICAgIGlmIChnYW1lLnBsYXllcjEgIT09IHVuZGVmaW5lZCAmJiBnYW1lLnBsYXllcjIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gSXRzIGEgdHdvIHBsYXllciBnYW1lXG5cbiAgICAgIGlmIChcbiAgICAgICAgZ2FtZS5wbGF5ZXIxLmJvYXJkLnNoaXBzWzBdICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgZ2FtZS5wbGF5ZXIyLmJvYXJkLnNoaXBzWzBdICE9PSB1bmRlZmluZWRcbiAgICAgICkge1xuICAgICAgICAvLyBBbGwgc2hpcHMgaGF2ZSBiZWVuIHBsYWNlZFxuXG4gICAgICAgIC8vIENyZWF0ZSBuZXcgZ2FtZVxuICAgICAgICBjb25zdCBuZXdHYW1lID0gbmV3IHR3b1BsYXllcihnYW1lLnBsYXllcjEubmFtZSwgZ2FtZS5wbGF5ZXIyLm5hbWUpO1xuXG4gICAgICAgIC8vIFB1c2ggc2hpcCBjb29yZGluYXRzXG4gICAgICAgIGNvbnN0IHAxU2hpcENvb3IgPSBbXTtcblxuICAgICAgICBnYW1lLnBsYXllcjEuYm9hcmQuc2hpcHMuZm9yRWFjaCgoc2hpcEVsKSA9PiB7XG4gICAgICAgICAgcDFTaGlwQ29vci5wdXNoKHNoaXBFbC5jb29yKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gUHVzaCBzaGlwIGNvb3JkaW5hdHNcbiAgICAgICAgY29uc3QgcDJTaGlwQ29vciA9IFtdO1xuXG4gICAgICAgIGdhbWUucGxheWVyMi5ib2FyZC5zaGlwcy5mb3JFYWNoKChzaGlwRWwpID0+IHtcbiAgICAgICAgICBwMlNoaXBDb29yLnB1c2goc2hpcEVsLmNvb3IpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBBZGQgbmV3IHNoaXBzIHNvIHRoZXkgaGF2ZSBtZXRob2Vkc1xuICAgICAgICBuZXdHYW1lLnBsYXllcjEuYm9hcmQucGxhY2VTaGlwcyhwMVNoaXBDb29yKTtcbiAgICAgICAgbmV3R2FtZS5wbGF5ZXIyLmJvYXJkLnBsYWNlU2hpcHMocDJTaGlwQ29vcik7XG5cbiAgICAgICAgLy8gQWRkIGF0dGFja3MgYnkgcmVjaXZpbmcgYWxsIGF0dGFja3MsIHNvIHNoaXBzIHVwZGF0ZSB0b29cbiAgICAgICAgZ2FtZS5wbGF5ZXIxLmJvYXJkLmhpdHMuZm9yRWFjaCgoaGl0Q29vcikgPT4ge1xuICAgICAgICAgIG5ld0dhbWUucGxheWVyMS5ib2FyZC5yZWNpZXZlQXR0YWNrKGhpdENvb3IpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBDb3B5IG1pc3NlZCBsb2dcbiAgICAgICAgbmV3R2FtZS5wbGF5ZXIxLmJvYXJkLm1pc3NlZCA9IGdhbWUucGxheWVyMS5ib2FyZC5taXNzZWQ7XG5cbiAgICAgICAgLy8gQWRkIGF0dGFja3MgYnkgcmVjaXZpbmcgYWxsIGF0dGFja3MsIHNvIHNoaXBzIHVwZGF0ZSB0b29cbiAgICAgICAgZ2FtZS5wbGF5ZXIyLmJvYXJkLmhpdHMuZm9yRWFjaCgoaGl0Q29vcikgPT4ge1xuICAgICAgICAgIG5ld0dhbWUucGxheWVyMi5ib2FyZC5yZWNpZXZlQXR0YWNrKGhpdENvb3IpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBDb3B5IG1pc3NlZCBsb2dcbiAgICAgICAgbmV3R2FtZS5wbGF5ZXIyLmJvYXJkLm1pc3NlZCA9IGdhbWUucGxheWVyMi5ib2FyZC5taXNzZWQ7XG5cbiAgICAgICAgLy8gUmVtb3ZlIHRoZSBsb2FkaW5nU2NyZWVuXG4gICAgICAgIGNvbnN0IGxvYWRpbmdTY3JlZW5FbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9hZGluZ1NjcmVlbkVsXCIpO1xuXG4gICAgICAgIGxvYWRpbmdTY3JlZW5FbC5zdHlsZS50cmFuc2l0aW9uID0gXCIxc1wiO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBsb2FkaW5nU2NyZWVuRWwuc3R5bGUub3BhY2l0eSA9IFwiMFwiO1xuICAgICAgICB9LCA1MCk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQobG9hZGluZ1NjcmVlbkVsKTtcbiAgICAgICAgfSwgMTA1MCk7XG5cbiAgICAgICAgLy8gQ2hlY2sgd2hvbXMgdHVybiBpdCB3YXNcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgbmV3R2FtZS5wbGF5ZXIxLmJvYXJkLm1pc3NlZC5sZW5ndGggK1xuICAgICAgICAgICAgICBuZXdHYW1lLnBsYXllcjEuYm9hcmQuaGl0cy5sZW5ndGggPT1cbiAgICAgICAgICAgIG5ld0dhbWUucGxheWVyMi5ib2FyZC5taXNzZWQubGVuZ3RoICtcbiAgICAgICAgICAgICAgbmV3R2FtZS5wbGF5ZXIyLmJvYXJkLmhpdHMubGVuZ3RoXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICAvLyBJdHMgcGxheWVyIDEncyB0dXJuXG4gICAgICAgICAgICBuZXdHYW1lLnBhc3NTY3JlZW5ET00obmV3R2FtZS5wbGF5ZXIxKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgbmV3R2FtZS5hdHRhY2tDeWNsZURPTShuZXdHYW1lLnBsYXllcjEsIG5ld0dhbWUucGxheWVyMik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gSXRzIHBsYXllciAyJ3MgdHVyblxuICAgICAgICAgICAgbmV3R2FtZS5wYXNzU2NyZWVuRE9NKG5ld0dhbWUucGxheWVyMikudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgIG5ld0dhbWUuYXR0YWNrQ3ljbGVET00obmV3R2FtZS5wbGF5ZXIyLCBuZXdHYW1lLnBsYXllcjEpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9LCAxMDUwKTtcbiAgICAgIH0gZWxzZSBpZiAoZ2FtZS5wbGF5ZXIxLmJvYXJkLnNoaXBzWzBdID09IHVuZGVmaW5lZCkge1xuICAgICAgICAvLyBObyBzaGlwcyBoYXZlIGJlZW4gcGxhY2VkXG5cbiAgICAgICAgLy8gQ3JlYXRlIG5ldyBnYW1lXG4gICAgICAgIGNvbnN0IG5ld0dhbWUgPSBuZXcgdHdvUGxheWVyKGdhbWUucGxheWVyMS5uYW1lLCBnYW1lLnBsYXllcjIubmFtZSk7XG5cbiAgICAgICAgLy8gUmVtb3ZlIHRoZSBsb2FkaW5nU2NyZWVuXG4gICAgICAgIGNvbnN0IGxvYWRpbmdTY3JlZW5FbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9hZGluZ1NjcmVlbkVsXCIpO1xuXG4gICAgICAgIGxvYWRpbmdTY3JlZW5FbC5zdHlsZS50cmFuc2l0aW9uID0gXCIxc1wiO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBsb2FkaW5nU2NyZWVuRWwuc3R5bGUub3BhY2l0eSA9IFwiMFwiO1xuICAgICAgICB9LCA1MCk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQobG9hZGluZ1NjcmVlbkVsKTtcbiAgICAgICAgfSwgMTA1MCk7XG5cbiAgICAgICAgLy8gUHJlY2VlZCB3aXRoIGdhbWVjeWNsZVxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBuZXdHYW1lLnBhc3NTY3JlZW5ET00obmV3R2FtZS5wbGF5ZXIxKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHBsYWNlU2hpcHNET00obmV3R2FtZS5wbGF5ZXIxKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJnYW1lXCIsIEpTT04uc3RyaW5naWZ5KG5ld0dhbWUpKTtcbiAgICAgICAgICAgICAgbmV3R2FtZS5wYXNzU2NyZWVuRE9NKG5ld0dhbWUucGxheWVyMikudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgcGxhY2VTaGlwc0RPTShuZXdHYW1lLnBsYXllcjIpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJnYW1lXCIsIEpTT04uc3RyaW5naWZ5KG5ld0dhbWUpKTtcbiAgICAgICAgICAgICAgICAgIG5ld0dhbWUucGFzc1NjcmVlbkRPTShuZXdHYW1lLnBsYXllcjEpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBuZXdHYW1lLmF0dGFja0N5Y2xlRE9NKG5ld0dhbWUucGxheWVyMSwgbmV3R2FtZS5wbGF5ZXIyKTtcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9LCAxMDUwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHBsYXllciAxIGhhcyBwbGFjZWQgdGhlaXIgc2hpcHNcblxuICAgICAgICAvLyBDcmVhdGUgbmV3IGdhbWVcbiAgICAgICAgY29uc3QgbmV3R2FtZSA9IG5ldyB0d29QbGF5ZXIoZ2FtZS5wbGF5ZXIxLm5hbWUsIGdhbWUucGxheWVyMi5uYW1lKTtcblxuICAgICAgICAvLyBSZW1vdmUgdGhlIGxvYWRpbmdTY3JlZW5cbiAgICAgICAgY29uc3QgbG9hZGluZ1NjcmVlbkVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2FkaW5nU2NyZWVuRWxcIik7XG5cbiAgICAgICAgbG9hZGluZ1NjcmVlbkVsLnN0eWxlLnRyYW5zaXRpb24gPSBcIjFzXCI7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGxvYWRpbmdTY3JlZW5FbC5zdHlsZS5vcGFjaXR5ID0gXCIwXCI7XG4gICAgICAgIH0sIDUwKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChsb2FkaW5nU2NyZWVuRWwpO1xuICAgICAgICB9LCAxMDUwKTtcblxuICAgICAgICAvLyBQdXNoIHNoaXAgY29vcmRpbmF0c1xuICAgICAgICBjb25zdCBwMVNoaXBDb29yID0gW107XG5cbiAgICAgICAgZ2FtZS5wbGF5ZXIxLmJvYXJkLnNoaXBzLmZvckVhY2goKHNoaXBFbCkgPT4ge1xuICAgICAgICAgIHAxU2hpcENvb3IucHVzaChzaGlwRWwuY29vcik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIEFkZCBuZXcgc2hpcHMgc28gdGhleSBoYXZlIG1ldGhvZWRzXG4gICAgICAgIG5ld0dhbWUucGxheWVyMS5ib2FyZC5wbGFjZVNoaXBzKHAxU2hpcENvb3IpO1xuXG4gICAgICAgIC8vIFByZWNlZWQgd2l0aCBnYW1lY3ljbGVcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgbmV3R2FtZS5wYXNzU2NyZWVuRE9NKG5ld0dhbWUucGxheWVyMikudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBwbGFjZVNoaXBzRE9NKG5ld0dhbWUucGxheWVyMikudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZ2FtZVwiLCBKU09OLnN0cmluZ2lmeShuZXdHYW1lKSk7XG4gICAgICAgICAgICAgIG5ld0dhbWUucGFzc1NjcmVlbkRPTShuZXdHYW1lLnBsYXllcjEpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIG5ld0dhbWUuYXR0YWNrQ3ljbGVET00obmV3R2FtZS5wbGF5ZXIxLCBuZXdHYW1lLnBsYXllcjIpO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9LCAxMDUwKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gSXRzIGFuIEFJIGdhbWVcblxuICAgICAgY29uc3QgbmV3R2FtZSA9IG5ldyBwbGF5QWdhaW5zdEFJKFwiXCIpO1xuXG4gICAgICAvLyBDb3B5IGNvb3JkaW5hdGVzXG4gICAgICBjb25zdCBwbGF5ZXJTaGlwQ29vciA9IFtdO1xuXG4gICAgICBnYW1lLnBsYXllci5ib2FyZC5zaGlwcy5mb3JFYWNoKChzaGlwRWwpID0+IHtcbiAgICAgICAgcGxheWVyU2hpcENvb3IucHVzaChzaGlwRWwuY29vcik7XG4gICAgICB9KTtcblxuICAgICAgLy8gUGxhY2Ugc2hpcHMgYWdhaW4gc28gc2hpcHMgaGF2ZSBtZXRob2Vkc1xuICAgICAgbmV3R2FtZS5wbGF5ZXIuYm9hcmQucGxhY2VTaGlwcyhwbGF5ZXJTaGlwQ29vcik7XG5cbiAgICAgIC8vIEFkZCBhdHRhY2tzIGJ5IHJlY2l2aW5nIGFsbCBhdHRhY2tzLCBzbyBzaGlwcyB1cGRhdGUgdG9vXG4gICAgICBnYW1lLnBsYXllci5ib2FyZC5oaXRzLmZvckVhY2goKGhpdENvb3IpID0+IHtcbiAgICAgICAgbmV3R2FtZS5wbGF5ZXIuYm9hcmQucmVjaWV2ZUF0dGFjayhoaXRDb29yKTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBDb3B5IG1pc3NlZCBsb2dcbiAgICAgIG5ld0dhbWUucGxheWVyLmJvYXJkLm1pc3NlZCA9IGdhbWUucGxheWVyLmJvYXJkLm1pc3NlZDtcblxuICAgICAgLy8gQ29weSBjb29yZGluYXRlc1xuICAgICAgY29uc3QgQUlTaGlwQ29vciA9IFtdO1xuXG4gICAgICBnYW1lLkFJLmJvYXJkLnNoaXBzLmZvckVhY2goKHNoaXBFbCkgPT4ge1xuICAgICAgICBBSVNoaXBDb29yLnB1c2goc2hpcEVsLmNvb3IpO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIFBsYWNlIHNoaXBzIGFnYWluIHNvIHNoaXBzIGhhdmUgbWV0aG9lZHNcbiAgICAgIG5ld0dhbWUuQUkuYm9hcmQucGxhY2VTaGlwcyhBSVNoaXBDb29yKTtcblxuICAgICAgLy8gQWRkIGF0dGFja3MgYnkgcmVjaXZpbmcgYWxsIGF0dGFja3MsIHNvIHNoaXBzIHVwZGF0ZSB0b29cbiAgICAgIGdhbWUuQUkuYm9hcmQuaGl0cy5mb3JFYWNoKChoaXRDb29yKSA9PiB7XG4gICAgICAgIG5ld0dhbWUuQUkuYm9hcmQucmVjaWV2ZUF0dGFjayhoaXRDb29yKTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBDb3B5IG1pc3NlZCBsb2dcbiAgICAgIG5ld0dhbWUuQUkuYm9hcmQubWlzc2VkID0gZ2FtZS5BSS5ib2FyZC5taXNzZWQ7XG5cbiAgICAgIC8vIENvcHkgYXR0YWNrIGxvZ1xuICAgICAgbmV3R2FtZS5BSS5hdHRhY2tMb2cgPSBnYW1lLkFJLmF0dGFja0xvZztcblxuICAgICAgLy8gUmVtb3ZlIHRoZSBsb2FkaW5nU2NyZWVuXG4gICAgICBjb25zdCBsb2FkaW5nU2NyZWVuRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvYWRpbmdTY3JlZW5FbFwiKTtcblxuICAgICAgbG9hZGluZ1NjcmVlbkVsLnN0eWxlLnRyYW5zaXRpb24gPSBcIjFzXCI7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgbG9hZGluZ1NjcmVlbkVsLnN0eWxlLm9wYWNpdHkgPSBcIjBcIjtcbiAgICAgIH0sIDUwKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGxvYWRpbmdTY3JlZW5FbCk7XG4gICAgICB9LCAxMDUwKTtcblxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIG5ld0dhbWUuZGlzcGxheUdhbWVEb20oKTtcbiAgICAgIH0sIDEwNTApO1xuICAgIH1cbiAgfSk7XG59XG4iLCJpbXBvcnQgeyBwbGF5ZXIsIEFJIH0gZnJvbSBcIi4vYXBwL3BsYXllclwiO1xuXG4vLyBTb3VuZGVmZmVjdHNcbmltcG9ydCBiYXR0bGVNdXNpY1NyYyBmcm9tIFwiLi9BdWRpby9iYXR0bGUtb2YtdGhlLWRyYWdvbnMtODAzNy5tcDNcIjtcbmltcG9ydCBjbGlja1NvdW5kU3JjIGZyb20gXCIuL0F1ZGlvL2NvbXB1dGVyLXByb2Nlc3Npbmctc291bmQtZWZmZWN0cy1zaG9ydC1jbGljay1zZWxlY3QtMDEtMTIyMTM0Lm1wM1wiO1xuaW1wb3J0IGJ1dHRvblNoaWZ0U291bmRTcmMgZnJvbSBcIi4vQXVkaW8vaW50ZXJmYWNlLWJ1dHRvbi0xNTQxODAubXAzXCI7XG5pbXBvcnQgd2F0dGVyU3BsYXNoU291bmRTcmMgZnJvbSBcIi4vQXVkaW8vc3BsYXNoLWJ5LWJsYXVrcmV1ei02MjYxLm1wM1wiO1xuaW1wb3J0IGV4cGxvdGlvblNvdW5kU3JjIGZyb20gXCIuL0F1ZGlvL21lZGl1bS1leHBsb3Npb24tNDA0NzIubXAzXCI7XG5cbmltcG9ydCBzaGlwIGZyb20gXCIuL2FwcC9zaGlwc1wiO1xuXG4vLyBJbWdcbmltcG9ydCBwYXNzRGV2aWNlSW1hZ2VTcmMgZnJvbSBcIi4vaW1hZ2VzL3Bhc3NEZXZpY2VTcmMucG5nXCI7XG5pbXBvcnQgc2V0dGluZ0ljb25TcmMgZnJvbSBcIi4vaW1hZ2VzL3NldHRpbmdzSWNvblNyYy5zdmdcIjtcbmltcG9ydCBiYWNrQXJyb3dJY29uU3JjIGZyb20gXCIuL2ltYWdlcy9iYWNrQXJyb3dJY29uU3JjLnN2Z1wiO1xuXG5sZXQgbWFzdGVyVm9sdW1lID0gMC41O1xuXG5sZXQgbXVzaWNWb2x1bWUgPSAxO1xubGV0IFNGWFZvbHVtZSA9IDE7XG5cbi8vIENoZWNrIGxvY2Fsc3RvcmFnZSBmb3IgYXVkaW8gZGF0YVxuaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYXVkaW9Wb2x1bWVcIikpIHtcbiAgLy8gVGhlcmUgaXMgZGF0YVxuICBjb25zdCBhdWRpb09iaiA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhdWRpb1ZvbHVtZVwiKSk7XG5cbiAgLy8gU2V0IGN1cnJlbnQgdm9sdW1lXG4gIG1hc3RlclZvbHVtZSA9IGF1ZGlvT2JqLm1hc3RlclZvbHVtZTtcbiAgbXVzaWNWb2x1bWUgPSBhdWRpb09iai5tdXNpY1ZvbHVtZTtcbiAgU0ZYVm9sdW1lID0gYXVkaW9PYmouU0ZYVm9sdW1lO1xufVxuXG5jb25zdCBzYXZlQXVkaW9Ub1N0b3JhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IGF1ZGlvT2JqID0ge1xuICAgIG1hc3RlclZvbHVtZTogbWFzdGVyVm9sdW1lLFxuICAgIG11c2ljVm9sdW1lOiBtdXNpY1ZvbHVtZSxcbiAgICBTRlhWb2x1bWU6IFNGWFZvbHVtZSxcbiAgfTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJhdWRpb1ZvbHVtZVwiLCBKU09OLnN0cmluZ2lmeShhdWRpb09iaikpO1xufTtcblxuY29uc3QgYmF0dGxlTXVzaWMgPSBuZXcgQXVkaW8oYmF0dGxlTXVzaWNTcmMpO1xuYmF0dGxlTXVzaWMubG9vcCA9IHRydWU7XG5cbmNvbnN0IGNoYW5nZVZvbHVtZSA9ICgpID0+IHtcbiAgLy8gQ2hhbmdlIG11c2ljIHZvbHVtZVxuICBiYXR0bGVNdXNpYy52b2x1bWUgPSBtYXN0ZXJWb2x1bWUgKiBtdXNpY1ZvbHVtZTtcbn07XG5cbmNoYW5nZVZvbHVtZSgpO1xuXG5jb25zdCBwbGF5QnV0dG9uU2hpZnRTb3VuZCA9ICgpID0+IHtcbiAgaWYgKGludGVyYWN0ZWQgPT0gdHJ1ZSkge1xuICAgIGNvbnN0IHNmeCA9IG5ldyBBdWRpbyhidXR0b25TaGlmdFNvdW5kU3JjKTtcbiAgICBzZngudm9sdW1lID0gbWFzdGVyVm9sdW1lICogU0ZYVm9sdW1lO1xuICAgIHNmeC5wbGF5KCk7XG4gIH1cbn07XG5cbmNvbnN0IHBsYXlDbGlja1NvdW5kID0gKCkgPT4ge1xuICBpZiAoaW50ZXJhY3RlZCA9PSB0cnVlKSB7XG4gICAgY29uc3Qgc2Z4ID0gbmV3IEF1ZGlvKGNsaWNrU291bmRTcmMpO1xuICAgIHNmeC52b2x1bWUgPSBtYXN0ZXJWb2x1bWUgKiBTRlhWb2x1bWU7XG4gICAgc2Z4LnBsYXkoKTtcbiAgfVxufTtcblxuY29uc3QgcGxheVNwbGFzaFNvdW5kID0gKCkgPT4ge1xuICBpZiAoaW50ZXJhY3RlZCA9PSB0cnVlKSB7XG4gICAgY29uc3Qgc2Z4ID0gbmV3IEF1ZGlvKHdhdHRlclNwbGFzaFNvdW5kU3JjKTtcbiAgICBzZngudm9sdW1lID0gbWFzdGVyVm9sdW1lICogU0ZYVm9sdW1lO1xuICAgIHNmeC5wbGF5KCk7XG4gIH1cbn07XG5cbmNvbnN0IHBsYXlFeHBsb3Npb25Tb3VuZCA9ICgpID0+IHtcbiAgaWYgKGludGVyYWN0ZWQgPT0gdHJ1ZSkge1xuICAgIGNvbnN0IHNmeCA9IG5ldyBBdWRpbyhleHBsb3Rpb25Tb3VuZFNyYyk7XG4gICAgc2Z4LnZvbHVtZSA9IG1hc3RlclZvbHVtZSAqIFNGWFZvbHVtZTtcbiAgICBzZngucGxheSgpO1xuICB9XG59O1xuXG5sZXQgaW50ZXJhY3RlZCA9IGZhbHNlO1xuXG5kb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGlmIChpbnRlcmFjdGVkID09IGZhbHNlKSB7XG4gICAgYmF0dGxlTXVzaWMucGxheSgpO1xuICAgIGludGVyYWN0ZWQgPSB0cnVlO1xuICB9XG59KTtcblxuY29uc3QgbG9hZGluZ1NjcmVlbiA9ICgpID0+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGVudC5jbGFzc0xpc3QuYWRkKFwiY29udGVudENvblwiKTtcblxuICAgIC8vIEZvciB0YXJnZXRpbmcgaWYgdW5maW5pc2hlZCBnYW1lIGlzIG9uIChDaGVjayBjb250cm9sbGVyLmpzIClcbiAgICBjb250ZW50LnNldEF0dHJpYnV0ZShcImlkXCIsIFwibG9hZGluZ1NjcmVlbkVsXCIpO1xuXG4gICAgLy8gQ3JlYXRpbmcgaGVhZGVyIGNvbnRhaW5lclxuICAgIGNvbnN0IGhlYWRlckNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaGVhZGVyQ29uLmNsYXNzTGlzdC5hZGQoXCJsb2FkaW5nc2NyZWVuSGVhZGVyQ29uXCIpO1xuXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJsb2FkaW5nc2NyZWVuSGVhZGVyXCIpO1xuICAgIGhlYWRlci50ZXh0Q29udGVudCA9IFwiQkFUVExFU0hJUFNcIjtcblxuICAgIGhlYWRlckNvbi5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gICAgLy8gQ3JlYXRpbmcgYnRuc1xuICAgIGNvbnN0IGJ0bkNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYnRuQ29uLmNsYXNzTGlzdC5hZGQoXCJsb2FkaW5nc2NyZWVuQnRuQ29uXCIpO1xuXG4gICAgLy8gVG8gbWFrZSBzdXJlIGJ0biBpcyBub3QgYWN0aXZhdGVkIHR3aWNlXG4gICAgbGV0IGJ0bkNsaWNrZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHR3b1BsYXllckJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgdHdvUGxheWVyQnRuLmNsYXNzTGlzdC5hZGQoXCJsb2FkaW5nc2NyZWVuU3RhcnRCdG5cIiwgXCJidG5cIik7XG4gICAgdHdvUGxheWVyQnRuLnRleHRDb250ZW50ID0gXCIyIFBsYXllclwiO1xuXG4gICAgdHdvUGxheWVyQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAvLyBQbGF5ZXMgc291bmRcbiAgICAgIHBsYXlDbGlja1NvdW5kKCk7XG5cbiAgICAgIC8vIENoZWNrcyBpZiBhIGJ0biBhbGxyZWFkeSBoYXZlIGJlZW4gY2xpY2tlZFxuICAgICAgaWYgKGJ0bkNsaWNrZWQgPT0gZmFsc2UpIHtcbiAgICAgICAgYnRuQ2xpY2tlZCA9IHRydWU7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgLy8gRmFkZSBleGlzdGluZyBjb250ZW50IGF3YXlcbiAgICAgICAgICBoZWFkZXJDb24uc3R5bGUub3BhY2l0eSA9IFwiMFwiO1xuICAgICAgICAgIGJ0bkNvbi5zdHlsZS5vcGFjaXR5ID0gXCIwXCI7XG5cbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICB9LCA0MDAwKTtcbiAgICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgLy8gUmVtb3ZlIGNvbnRlbnRcbiAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGNvbnRlbnQpO1xuXG4gICAgICAgICAgLy8gQXBwZW5kIHRoZSBuZXcgY29udGVudFxuICAgICAgICAgIGNvbnN0IG5ld0dhbWUgPSBuZXcgdHdvUGxheWVyKCk7XG4gICAgICAgICAgbmV3R2FtZS5nYW1lQ3ljbGVET00oKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0d29QbGF5ZXJCdG4uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgKCkgPT4ge1xuICAgICAgcGxheUJ1dHRvblNoaWZ0U291bmQoKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IEFJQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBBSUJ0bi5jbGFzc0xpc3QuYWRkKFwibG9hZGluZ3NjcmVlblN0YXJ0QnRuXCIsIFwiYnRuXCIpO1xuICAgIEFJQnRuLnRleHRDb250ZW50ID0gXCJBZ2FpbnN0IEFJXCI7XG5cbiAgICBBSUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgLy8gQWRkcyBjbGljayBzb3VuZFxuICAgICAgcGxheUNsaWNrU291bmQoKTtcblxuICAgICAgLy8gQ2hlY2tzIGlmIGEgYnRuIGFsbHJlYWR5IGhhdmUgYmVlbiBjbGlja2VkXG4gICAgICBpZiAoYnRuQ2xpY2tlZCA9PSBmYWxzZSkge1xuICAgICAgICBidG5DbGlja2VkID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAvLyBGYWRlIGV4aXN0aW5nIGNvbnRlbnQgYXdheVxuICAgICAgICAgIGhlYWRlckNvbi5zdHlsZS5vcGFjaXR5ID0gXCIwXCI7XG4gICAgICAgICAgYnRuQ29uLnN0eWxlLm9wYWNpdHkgPSBcIjBcIjtcblxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgIH0sIDQwMDApO1xuICAgICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAvLyBSZW1vdmUgY29udGVudFxuICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoY29udGVudCk7XG5cbiAgICAgICAgICAvLyBBcHBlbmQgdGhlIG5ldyBjb250ZW50XG4gICAgICAgICAgY29uc3QgbmV3R2FtZSA9IG5ldyBwbGF5QWdhaW5zdEFJKCk7XG4gICAgICAgICAgbmV3R2FtZS5kaXNwbGF5R2FtZWN5Y2xlRE9NKCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgQUlCdG4uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgKCkgPT4ge1xuICAgICAgcGxheUJ1dHRvblNoaWZ0U291bmQoKTtcbiAgICB9KTtcblxuICAgIGJ0bkNvbi5hcHBlbmRDaGlsZCh0d29QbGF5ZXJCdG4pO1xuICAgIGJ0bkNvbi5hcHBlbmRDaGlsZChBSUJ0bik7XG5cbiAgICAvLyBBcHBlbmRpbmcgYWxsXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXJDb24pO1xuXG4gICAgLy8gTWFrZSB0aGVtIHJlYWR5IHRvIGZhZGUgaW4gb24gbG9hZFxuICAgIGJ0bkNvbi5zdHlsZS5vcGFjaXR5ID0gXCIwXCI7XG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGJ0bkNvbik7XG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuXG4gICAgLy8gQXBwZW5kaW5nIHNldHRpbmcgYnRuXG4gICAgc2V0dGluZ3NET00oKTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgLy8gTWFrZSBoZWFkZXIgcmlzZSBlZmZlY3RcbiAgICAgIGhlYWRlci5zdHlsZS5ib3R0b20gPSBcIi0xMHB4XCI7XG4gICAgfSwgNTAwKTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgLy8gTWFrZSB0aGVtIGZhZGUgaW5cbiAgICAgIGJ0bkNvbi5zdHlsZS5vcGFjaXR5ID0gXCIxXCI7XG4gICAgfSwgMjIwMCk7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIC8vIFdoZW4gaGVhZGVyIGhhdmUgcmlzZW4sIHN0YXJ0IHdhdmUgYW5pbWF0aW9uXG4gICAgICBoZWFkZXIuc3R5bGUuYW5pbWF0aW9uID0gXCJtb3ZlIDNzIGVhc2UtaW4tb3V0IGluZmluaXRlIGFsdGVybmF0ZVwiO1xuICAgIH0sIDQ1MDApO1xuICB9KTtcbn07XG5cbmNsYXNzIHBsYXlBZ2FpbnN0QUkge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnBsYXllciA9IG5ldyBwbGF5ZXIoXCJcIik7XG4gICAgdGhpcy5BSSA9IG5ldyBBSSgpO1xuICB9XG4gIGRpc3BsYXlHYW1lY3ljbGVET00oKSB7XG4gICAgLy8gRmlyc3QgZGlzcGxheSBwbGFjZW1lbnQgcGFnZVxuICAgIHBsYWNlU2hpcHNET00odGhpcy5wbGF5ZXIpLnRoZW4oKCkgPT4ge1xuICAgICAgLy8gQUkgcGxhY2Ugc2hpcHNcbiAgICAgIHRoaXMuQUkucGxhY2VTaGlwcygpO1xuXG4gICAgICAvLyBzYXZlIGdhbWUgaW5mbyB0byBsb2NhbCBzdG9yYWdlXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImdhbWVcIiwgSlNPTi5zdHJpbmdpZnkodGhpcykpO1xuXG4gICAgICAvLyBXaGVuIHBsYWNlbWVudCBpcyBkb25lIGRpc3BsYXkgZ2FtZVxuICAgICAgdGhpcy5kaXNwbGF5R2FtZURvbSgpO1xuICAgIH0pO1xuICB9XG4gIGRpc3BsYXlHYW1lRG9tKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoXCJjb250ZW50Q29uXCIsIFwiQUlHYW1lQ29uXCIpO1xuXG4gICAgICAvLyBDcmVhdGluZyBoZWFkZXJcbiAgICAgIGNvbnN0IGhlYWRlckNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBoZWFkZXJDb24uY2xhc3NMaXN0LmFkZChcbiAgICAgICAgXCJsb2FkaW5nc2NyZWVuSGVhZGVyQ29uXCIsXG4gICAgICAgIFwiaW5nYW1lSGVhZGVyQ29uXCIsXG4gICAgICAgIFwiQUlHYW1lSGVhZGVyQ29uXCJcbiAgICAgICk7XG5cbiAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJsb2FkaW5nc2NyZWVuSGVhZGVyXCIsIFwiaW5nYW1lSGVhZGVyXCIpO1xuICAgICAgaGVhZGVyLnRleHRDb250ZW50ID0gXCJCQVRUTEVTSElQU1wiO1xuXG4gICAgICBoZWFkZXJDb24uYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuICAgICAgLy8gQ3JlYXRpbmcgZ2FtZWJvYXJkc1xuICAgICAgY29uc3QgZ2FtZWJvYXJkc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBnYW1lYm9hcmRzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb250ZW50Q29uXCIpO1xuXG4gICAgICBjb25zdCBlbmVteUdhbWVib2FyZENvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBlbmVteUdhbWVib2FyZENvbi5jbGFzc0xpc3QuYWRkKFwiZW5lbXlHYW1lYm9hcmRDb25cIik7XG5cbiAgICAgIGNvbnN0IGVuZW15R2FtZWJvYXJkSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICBlbmVteUdhbWVib2FyZEhlYWRlci5jbGFzc0xpc3QuYWRkKFwiZW5lbXlHYW1lYm9hcmRIZWFkZXJcIik7XG4gICAgICBlbmVteUdhbWVib2FyZEhlYWRlci50ZXh0Q29udGVudCA9IFwiRU5FTVkgU0VBU1wiO1xuXG4gICAgICBjb25zdCBlbmVteUdhbWVib2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBlbmVteUdhbWVib2FyZC5jbGFzc0xpc3QuYWRkKFwiZW5lbXlHYW1lYm9hcmRcIik7XG5cbiAgICAgIGVuZW15R2FtZWJvYXJkQ29uLmFwcGVuZENoaWxkKGVuZW15R2FtZWJvYXJkKTtcbiAgICAgIGVuZW15R2FtZWJvYXJkQ29uLmFwcGVuZENoaWxkKGVuZW15R2FtZWJvYXJkSGVhZGVyKTtcblxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIC8vIERpc3BsYXkgZnJpZW5kbHkgaGVhZGVyIGFmdGVyIDRzXG4gICAgICAgIGZyaWVuZGx5Qm9hcmRIZWFkZXIuc3R5bGUub3BhY2l0eSA9IFwiMVwiO1xuICAgICAgfSwgNDAwMCk7XG5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAvLyBEaXNwbGF5IGVuZW15IGhlYWRlciBhZnRlciA1cyB3aXRoIHJlZFxuICAgICAgICBlbmVteUdhbWVib2FyZEhlYWRlci5zdHlsZS5vcGFjaXR5ID0gXCIxXCI7XG4gICAgICAgIGVuZW15R2FtZWJvYXJkSGVhZGVyLnN0eWxlLmNvbG9yID0gXCJyZWRcIjtcbiAgICAgIH0sIDUwMDApO1xuXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgLy8gU2V0IGVuZW15IGhlYWRlciB0dXJuIHdoaXRlIGFnYWluXG4gICAgICAgIGVuZW15R2FtZWJvYXJkSGVhZGVyLnN0eWxlLmNvbG9yID0gXCJ3aGl0ZVwiO1xuICAgICAgfSwgNzAwMCk7XG5cbiAgICAgIC8vIENyZWF0aW5nIHdhdmUgYW5pbWF0aW9uIGVsZW1lbnRcbiAgICAgIGNvbnN0IHNlYVdhdmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgc2VhV2F2ZS5jbGFzc0xpc3QuYWRkKFwic2VhV2F2ZVwiKTtcblxuICAgICAgLy8gQ3JlYXRpbmcgdGhlIGZyaWVuZGx5IGJvYXJkXG4gICAgICBjb25zdCBmcmllbmRseUJvYXJkY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGZyaWVuZGx5Qm9hcmRjb24uY2xhc3NMaXN0LmFkZChcImZyaWVuZGx5Qm9hcmRjb25cIik7XG5cbiAgICAgIGNvbnN0IGZyaWVuZGx5Qm9hcmRIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgIGZyaWVuZGx5Qm9hcmRIZWFkZXIuY2xhc3NMaXN0LmFkZChcImZyaWVuZGx5Qm9hcmRIZWFkZXJcIik7XG4gICAgICBmcmllbmRseUJvYXJkSGVhZGVyLnRleHRDb250ZW50ID0gXCJGUklFTkRMWSBTRUFTXCI7XG5cbiAgICAgIGNvbnN0IGZyaWVuZGx5Qm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgZnJpZW5kbHlCb2FyZC5jbGFzc0xpc3QuYWRkKFwiZnJpZW5kbHlCb2FyZFwiKTtcblxuICAgICAgZnJpZW5kbHlCb2FyZGNvbi5hcHBlbmRDaGlsZChmcmllbmRseUJvYXJkSGVhZGVyKTtcbiAgICAgIGZyaWVuZGx5Qm9hcmRjb24uYXBwZW5kQ2hpbGQoZnJpZW5kbHlCb2FyZCk7XG5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAvLyBEaXNwbGF5IGdhbWVib2FyZHMgYWZ0ZXIgM3NcbiAgICAgICAgZW5lbXlHYW1lYm9hcmQuc3R5bGUub3BhY2l0eSA9IFwiMVwiO1xuICAgICAgICBmcmllbmRseUJvYXJkLnN0eWxlLm9wYWNpdHkgPSBcIjFcIjtcbiAgICAgIH0sIDMwMDApO1xuXG4gICAgICBsZXQgZ2FtZVN0b3BwZWQgPSBmYWxzZTtcblxuICAgICAgY29uc3QgcG9wdWxhdGVFbmVteUdhbWVib2FyZCA9ICgpID0+IHtcbiAgICAgICAgLy8gQ3JlYXRlIGFsbCBncmlkIHNsb3RzXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDEwOyBpKyspIHtcbiAgICAgICAgICBmb3IgKGxldCBqID0gMTsgaiA8PSAxMDsgaisrKSB7XG4gICAgICAgICAgICBjb25zdCBzbG90ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIHNsb3QuY2xhc3NMaXN0LmFkZChcImVuZW15R3JpZFNsb3RcIik7XG5cbiAgICAgICAgICAgIC8vIElmIGl0IGhhdmUgYmVlbiBhdHRhY2tlZFxuICAgICAgICAgICAgbGV0IGhhdmVCZWVuQXR0YWNrZWQgPSBmYWxzZTtcblxuICAgICAgICAgICAgLy8gQ2hlY2tzIGlmIGl0IGhhdmUgYmVlbiBoaXRcbiAgICAgICAgICAgIHRoaXMuQUkuYm9hcmQuaGl0cy5mb3JFYWNoKChjb29yKSA9PiB7XG4gICAgICAgICAgICAgIC8vIENvbXBhcmUgY29vcmRpbmF0ZXNcbiAgICAgICAgICAgICAgaWYgKGogPT0gY29vclswXSAmJiBpID09IGNvb3JbMV0pIHtcbiAgICAgICAgICAgICAgICBzbG90LmNsYXNzTGlzdC5hZGQoXCJlbmVteUdyaWRTbG90SGl0XCIpO1xuICAgICAgICAgICAgICAgIGhhdmVCZWVuQXR0YWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vIENoZWNrcyBpZiBpdCBoYXZlIGJlZW4gYXR0YWNrZWQgYnV0IG1pc3NlZFxuICAgICAgICAgICAgdGhpcy5BSS5ib2FyZC5taXNzZWQuZm9yRWFjaCgoY29vcikgPT4ge1xuICAgICAgICAgICAgICAvLyBDb21wYXJlIGNvb3JkaW5hdGVzXG4gICAgICAgICAgICAgIGlmIChqID09IGNvb3JbMF0gJiYgaSA9PSBjb29yWzFdKSB7XG4gICAgICAgICAgICAgICAgc2xvdC5jbGFzc0xpc3QuYWRkKFwiZW5lbXlHcmlkU2xvdE1pc3NlZFwiKTtcbiAgICAgICAgICAgICAgICBoYXZlQmVlbkF0dGFja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIElmIGl0IGhhdmVudCBiZWVuIGF0dGFja2VkLCBtYWtlIHJlYWR5IGZvciBpdFxuICAgICAgICAgICAgaWYgKGhhdmVCZWVuQXR0YWNrZWQgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgc2xvdC5jbGFzc0xpc3QuYWRkKFwiZW5lbXlHcmlkU2xvdFVuYXR0YWNrZWRcIik7XG4gICAgICAgICAgICAgIHNsb3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBPbiBjbGljayBhdHRhY2sgQUkgd2l0aCBjb29yZGluYXRlc1xuICAgICAgICAgICAgICAgIGlmIChnYW1lU3RvcHBlZCAhPT0gdHJ1ZSkgQUlBdHRhY2tjeWNsZShbaiwgaV0pO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZW5lbXlHYW1lYm9hcmQuYXBwZW5kQ2hpbGQoc2xvdCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBjb25zdCBwb3B1bGF0ZUZyaWVuZGx5R2FtZWJvYXJkID0gKCkgPT4ge1xuICAgICAgICAvLyBDcmVhdGUgYWxsIGdyaWQgc2xvdHNcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMTA7IGkrKykge1xuICAgICAgICAgIGZvciAobGV0IGogPSAxOyBqIDw9IDEwOyBqKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHNsb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgc2xvdC5jbGFzc0xpc3QuYWRkKFwiZW5lbXlHcmlkU2xvdFwiKTtcblxuICAgICAgICAgICAgLy8gSWYgYSBzaGlwIGhhcyBiZWVuIGhpdFxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIuYm9hcmQuaGl0cy5mb3JFYWNoKChjb29yKSA9PiB7XG4gICAgICAgICAgICAgIC8vIENvbXBhcmUgY29vcmRpbmF0ZXNcbiAgICAgICAgICAgICAgaWYgKGogPT0gY29vclswXSAmJiBpID09IGNvb3JbMV0pIHtcbiAgICAgICAgICAgICAgICBzbG90LmNsYXNzTGlzdC5hZGQoXCJlbmVteUdyaWRTbG90SGl0XCIpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vIElmIHRoZSBlbmVteSBoYXZlIG1pc3NlZFxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIuYm9hcmQubWlzc2VkLmZvckVhY2goKGNvb3IpID0+IHtcbiAgICAgICAgICAgICAgLy8gQ29tcGFyZSBjb29yZGluYXRlc1xuICAgICAgICAgICAgICBpZiAoaiA9PSBjb29yWzBdICYmIGkgPT0gY29vclsxXSkge1xuICAgICAgICAgICAgICAgIHNsb3QuY2xhc3NMaXN0LmFkZChcImVuZW15R3JpZFNsb3RNaXNzZWRcIik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gSWYgc2xvdCBpcyBhIHNoaXBcbiAgICAgICAgICAgIHRoaXMucGxheWVyLmJvYXJkLnNoaXBzLmZvckVhY2goKHNoaXBFbCkgPT4ge1xuICAgICAgICAgICAgICBzaGlwRWwuY29vci5mb3JFYWNoKChjb29yKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gQ29tcGFyZSBjb29yZGluYXRlc1xuICAgICAgICAgICAgICAgIGlmIChqID09IGNvb3JbMF0gJiYgaSA9PSBjb29yWzFdKSB7XG4gICAgICAgICAgICAgICAgICBzbG90LmNsYXNzTGlzdC5hZGQoXCJmcmllbmRseUdyaWRTbG90U2hpcFwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGZyaWVuZGx5Qm9hcmQuYXBwZW5kQ2hpbGQoc2xvdCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBwb3B1bGF0ZUVuZW15R2FtZWJvYXJkKCk7XG4gICAgICBwb3B1bGF0ZUZyaWVuZGx5R2FtZWJvYXJkKCk7XG5cbiAgICAgIGNvbnN0IEFJQXR0YWNrY3ljbGUgPSAoW3gsIHldKSA9PiB7XG4gICAgICAgIC8vIEFJIHJlY2llY2UgYXR0YWNrXG4gICAgICAgIGxldCBhdHRhY2tlZExlbmd0aCA9IHRoaXMuQUkuYm9hcmQuaGl0cy5sZW5ndGg7XG5cbiAgICAgICAgdGhpcy5BSS5ib2FyZC5yZWNpZXZlQXR0YWNrKFt4LCB5XSk7XG5cbiAgICAgICAgLy8gQ2hlY2sgaWYgaXQgaGl0IGEgc2hpcCBvciBub3RcbiAgICAgICAgaWYgKHRoaXMuQUkuYm9hcmQuaGl0cy5sZW5ndGggPT0gYXR0YWNrZWRMZW5ndGgpIHtcbiAgICAgICAgICBwbGF5U3BsYXNoU291bmQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwbGF5RXhwbG9zaW9uU291bmQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFBsYXllciByZWNpZXZlIGF0dGFja1xuICAgICAgICB0aGlzLnBsYXllci5ib2FyZC5yZWNpZXZlQXR0YWNrKHRoaXMuQUkuYXR0YWNrKHRoaXMucGxheWVyKSk7XG5cbiAgICAgICAgLy8gU2V0IGxvY2FsIHN0b3JhZ2VcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJnYW1lXCIsIEpTT04uc3RyaW5naWZ5KHRoaXMpKTtcblxuICAgICAgICAvLyBSZWxvYWQgYm90aCBnYW1lYm9hcmRzXG4gICAgICAgIHdoaWxlIChmcmllbmRseUJvYXJkLmxhc3RDaGlsZCkge1xuICAgICAgICAgIGZyaWVuZGx5Qm9hcmQucmVtb3ZlQ2hpbGQoZnJpZW5kbHlCb2FyZC5sYXN0Q2hpbGQpO1xuICAgICAgICB9XG4gICAgICAgIHdoaWxlIChlbmVteUdhbWVib2FyZC5sYXN0Q2hpbGQpIHtcbiAgICAgICAgICBlbmVteUdhbWVib2FyZC5yZW1vdmVDaGlsZChlbmVteUdhbWVib2FyZC5sYXN0Q2hpbGQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcG9wdWxhdGVFbmVteUdhbWVib2FyZCgpO1xuICAgICAgICBwb3B1bGF0ZUZyaWVuZGx5R2FtZWJvYXJkKCk7XG5cbiAgICAgICAgLy8gSWYgb25lIHdvbiBkaXNwbGF5IHdpbiBzY3JlZW5cbiAgICAgICAgaWYgKHRoaXMuQUkuYm9hcmQuYWxsU3VuaygpID09IHRydWUpIHtcbiAgICAgICAgICAvLyBDbGVhciBsb2NhbCBzdG9yYWdlXG4gICAgICAgICAgbG9jYWxTdG9yYWdlLmNsZWFyKFwiZ2FtZVwiKTtcblxuICAgICAgICAgIGdhbWVTdG9wcGVkID0gdHJ1ZTtcblxuICAgICAgICAgIGNvbnN0IHdpblNjcmVlbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgd2luU2NyZWVuLmNsYXNzTGlzdC5hZGQoXCJ3aW5TY3JlZW5QbGF5ZXJcIik7XG5cbiAgICAgICAgICBjb25zdCB3aW5TY3JlZW5UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgICAgd2luU2NyZWVuVGV4dC5jbGFzc0xpc3QuYWRkKFwid2luU2NyZWVuVGV4dFwiKTtcbiAgICAgICAgICB3aW5TY3JlZW5UZXh0LnRleHRDb250ZW50ID0gXCJZT1UgV09OISEhXCI7XG5cbiAgICAgICAgICB3aW5TY3JlZW4uYXBwZW5kQ2hpbGQod2luU2NyZWVuVGV4dCk7XG5cbiAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHdpblNjcmVlbik7XG5cbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHdpblNjcmVlbi5zdHlsZS5ib3R0b20gPSBcIjBweFwiO1xuICAgICAgICAgIH0sIDUwKTtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHdoaWxlIChjb250ZW50Lmxhc3RDaGlsZCkge1xuICAgICAgICAgICAgICBjb250ZW50LnJlbW92ZUNoaWxkKGNvbnRlbnQubGFzdENoaWxkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCA0NTAwKTtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHdpblNjcmVlbi5zdHlsZS5vcGFjaXR5ID0gXCIwXCI7XG4gICAgICAgICAgfSwgNzUwMCk7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB3aGlsZSAoZG9jdW1lbnQuYm9keS5sYXN0Q2hpbGQpIHtcbiAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChkb2N1bWVudC5ib2R5Lmxhc3RDaGlsZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsb2FkaW5nU2NyZWVuKCk7XG4gICAgICAgICAgfSwgMTE1MDApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMucGxheWVyLmJvYXJkLmFsbFN1bmsoKSA9PSB0cnVlKSB7XG4gICAgICAgICAgLy8gQ2xlYXIgbG9hY2wgc3RvcmFnZVxuICAgICAgICAgIGxvY2FsU3RvcmFnZS5jbGVhcihcImdhbWVcIik7XG5cbiAgICAgICAgICBnYW1lU3RvcHBlZCA9IHRydWU7XG5cbiAgICAgICAgICBjb25zdCB3aW5TY3JlZW5BSSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgd2luU2NyZWVuQUkuY2xhc3NMaXN0LmFkZChcIndpblNjcmVlbkFJXCIpO1xuXG4gICAgICAgICAgY29uc3Qgd2luU2NyZWVuVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgICAgIHdpblNjcmVlblRleHQuY2xhc3NMaXN0LmFkZChcIndpblNjcmVlblRleHRcIik7XG4gICAgICAgICAgd2luU2NyZWVuVGV4dC50ZXh0Q29udGVudCA9IFwiWU9VIExPU1RcIjtcblxuICAgICAgICAgIHdpblNjcmVlbkFJLmFwcGVuZENoaWxkKHdpblNjcmVlblRleHQpO1xuXG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh3aW5TY3JlZW5BSSk7XG5cbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHdpblNjcmVlbkFJLnN0eWxlLnRvcCA9IFwiMHB4XCI7XG4gICAgICAgICAgfSwgNTApO1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgd2hpbGUgKGNvbnRlbnQubGFzdENoaWxkKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoY29udGVudC5sYXN0Q2hpbGQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIDQ1MDApO1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgd2luU2NyZWVuQUkuc3R5bGUub3BhY2l0eSA9IFwiMFwiO1xuICAgICAgICAgIH0sIDc1MDApO1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgd2hpbGUgKGRvY3VtZW50LmJvZHkubGFzdENoaWxkKSB7XG4gICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZG9jdW1lbnQuYm9keS5sYXN0Q2hpbGQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbG9hZGluZ1NjcmVlbigpO1xuICAgICAgICAgIH0sIDExNTAwKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgLy8gQXBwZW5kaW5nXG4gICAgICBnYW1lYm9hcmRzQ29udGFpbmVyLmFwcGVuZENoaWxkKGVuZW15R2FtZWJvYXJkQ29uKTtcbiAgICAgIGdhbWVib2FyZHNDb250YWluZXIuYXBwZW5kQ2hpbGQoc2VhV2F2ZSk7XG4gICAgICBnYW1lYm9hcmRzQ29udGFpbmVyLmFwcGVuZENoaWxkKGZyaWVuZGx5Qm9hcmRjb24pO1xuXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgLy8gRmFkZSBpbiBhZnRlciAxLjVzXG4gICAgICAgIGVuZW15R2FtZWJvYXJkQ29uLnN0eWxlLm9wYWNpdHkgPSBcIjFcIjtcbiAgICAgICAgc2VhV2F2ZS5zdHlsZS5vcGFjaXR5ID0gXCIxXCI7XG4gICAgICAgIGZyaWVuZGx5Qm9hcmRjb24uc3R5bGUub3BhY2l0eSA9IFwiMVwiO1xuICAgICAgfSwgMTUwMCk7XG5cbiAgICAgIC8vIEFwcGVuZGluZyBhbGxcbiAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyQ29uKTtcbiAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZ2FtZWJvYXJkc0NvbnRhaW5lcik7XG5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAvLyBGYWRlIGluIGFmdGVyIDAuNXNcbiAgICAgICAgaGVhZGVyQ29uLnN0eWxlLm9wYWNpdHkgPSBcIjFcIjtcbiAgICAgIH0sIDUwMCk7XG5cbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGVudCk7XG4gICAgfSk7XG4gIH1cbn1cblxuY2xhc3MgdHdvUGxheWVyIHtcbiAgY29uc3RydWN0b3IocGxheWVyMU5hbWUsIHBsYXllcjJOYW1lKSB7XG4gICAgdGhpcy5wbGF5ZXIxID0gbmV3IHBsYXllcihwbGF5ZXIxTmFtZSk7XG4gICAgdGhpcy5wbGF5ZXIyID0gbmV3IHBsYXllcihwbGF5ZXIyTmFtZSk7XG4gIH1cbiAgZ2FtZUN5Y2xlRE9NKCkge1xuICAgIC8vIFJ1biBldmVyeSBwYXJ0IHdoZW4gaXQgcmVzb2x2ZXNcbiAgICB0aGlzLmdldE5hbWVET00oKS50aGVuKCgpID0+IHtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZ2FtZVwiLCBKU09OLnN0cmluZ2lmeSh0aGlzKSk7XG4gICAgICB0aGlzLnBhc3NTY3JlZW5ET00odGhpcy5wbGF5ZXIxKS50aGVuKCgpID0+IHtcbiAgICAgICAgcGxhY2VTaGlwc0RPTSh0aGlzLnBsYXllcjEpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZ2FtZVwiLCBKU09OLnN0cmluZ2lmeSh0aGlzKSk7XG4gICAgICAgICAgdGhpcy5wYXNzU2NyZWVuRE9NKHRoaXMucGxheWVyMikudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBwbGFjZVNoaXBzRE9NKHRoaXMucGxheWVyMikudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZ2FtZVwiLCBKU09OLnN0cmluZ2lmeSh0aGlzKSk7XG4gICAgICAgICAgICAgIHRoaXMucGFzc1NjcmVlbkRPTSh0aGlzLnBsYXllcjEpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYXR0YWNrQ3ljbGVET00odGhpcy5wbGF5ZXIxLCB0aGlzLnBsYXllcjIpO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG4gIGdldE5hbWVET00oKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gICAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoXCJjb250ZW50Q29uXCIsIFwiZ2V0TmFtZUNvbnRlbnRDb25cIik7XG4gICAgICBjb250ZW50LnNldEF0dHJpYnV0ZShcIm9uc3VibWl0XCIsIFwicmV0dXJuIGZhbHNlXCIpO1xuXG4gICAgICAvLyBDcmVhdGUgaW5wdXQgY29uXG4gICAgICBjb25zdCBuYW1lSW5wdXRDb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgbmFtZUlucHV0Q29uLmNsYXNzTGlzdC5hZGQoXCJnZXROYW1lSW5wdXRDb25Db25cIik7XG5cbiAgICAgIC8vIENyZWF0ZSBQTGF5ZXIgMSBpbnB1dGNvblxuICAgICAgY29uc3QgcGxheWVyMUlucHV0Q29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHBsYXllcjFJbnB1dENvbi5jbGFzc0xpc3QuYWRkKFwiZ2V0TmFtZUlucHV0Q29uXCIsIFwiY29udGVudENvblwiKTtcblxuICAgICAgY29uc3QgcGxheWVyMUlucHV0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgIHBsYXllcjFJbnB1dExhYmVsLmNsYXNzTGlzdC5hZGQoXCJnZXROYW1lSW5wdXRMYWJlbFwiKTtcbiAgICAgIHBsYXllcjFJbnB1dExhYmVsLnRleHRDb250ZW50ID0gXCJQTEFZRVIgMTpcIjtcblxuICAgICAgY29uc3QgcGxheWVyMUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgcGxheWVyMUlucHV0LmNsYXNzTGlzdC5hZGQoXCJnZXROYW1lSW5wdXRcIik7XG4gICAgICBwbGF5ZXIxSW5wdXQuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJOQU1FXCIpO1xuXG4gICAgICBwbGF5ZXIxSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsICgpID0+IHtcbiAgICAgICAgcGxheUJ1dHRvblNoaWZ0U291bmQoKTtcbiAgICAgICAgcGxheWVyMUlucHV0LnZhbHVlID0gcGxheWVyMUlucHV0LnZhbHVlLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgIGlmIChwbGF5ZXIxSW5wdXQudmFsdWUgIT09IFwiXCIgJiYgcGxheWVyMklucHV0LnZhbHVlICE9PSBcIlwiKSB7XG4gICAgICAgICAgbmV4dEJ0bi5jbGFzc0xpc3QuYWRkKFwiZ2V0TmFtZU5leHRCdG5SZWFkeVwiKTtcbiAgICAgICAgfSBlbHNlIGlmIChwbGF5ZXIxSW5wdXQudmFsdWUgPT0gXCJcIiB8fCBwbGF5ZXIySW5wdXQudmFsdWUgPT0gXCJcIikge1xuICAgICAgICAgIG5leHRCdG4uY2xhc3NMaXN0LnJlbW92ZShcImdldE5hbWVOZXh0QnRuUmVhZHlcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBsYXllcjFJbnB1dC52YWx1ZSAhPT0gXCJcIikge1xuICAgICAgICAgIHBsYXllcjFJbnB1dC5zZXRDdXN0b21WYWxpZGl0eShcIlwiKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHBsYXllcjFJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBwbGF5QnV0dG9uU2hpZnRTb3VuZCgpO1xuICAgICAgfSk7XG5cbiAgICAgIHBsYXllcjFJbnB1dENvbi5hcHBlbmRDaGlsZChwbGF5ZXIxSW5wdXRMYWJlbCk7XG4gICAgICBwbGF5ZXIxSW5wdXRDb24uYXBwZW5kQ2hpbGQocGxheWVyMUlucHV0KTtcblxuICAgICAgLy8gQ3JlYXRlIFBMYXllciAyIGlucHV0Y29uXG4gICAgICBjb25zdCBwbGF5ZXIySW5wdXRDb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgcGxheWVyMklucHV0Q29uLmNsYXNzTGlzdC5hZGQoXCJnZXROYW1lSW5wdXRDb25cIiwgXCJjb250ZW50Q29uXCIpO1xuXG4gICAgICBjb25zdCBwbGF5ZXIySW5wdXRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgcGxheWVyMklucHV0TGFiZWwuY2xhc3NMaXN0LmFkZChcImdldE5hbWVJbnB1dExhYmVsXCIpO1xuICAgICAgcGxheWVyMklucHV0TGFiZWwudGV4dENvbnRlbnQgPSBcIlBMQVlFUiAyOlwiO1xuXG4gICAgICBjb25zdCBwbGF5ZXIySW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICBwbGF5ZXIySW5wdXQuY2xhc3NMaXN0LmFkZChcImdldE5hbWVJbnB1dFwiKTtcbiAgICAgIHBsYXllcjJJbnB1dC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIk5BTUVcIik7XG5cbiAgICAgIHBsYXllcjJJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCkgPT4ge1xuICAgICAgICBwbGF5QnV0dG9uU2hpZnRTb3VuZCgpO1xuICAgICAgICBwbGF5ZXIySW5wdXQudmFsdWUgPSBwbGF5ZXIySW5wdXQudmFsdWUudG9VcHBlckNhc2UoKTtcbiAgICAgICAgaWYgKHBsYXllcjFJbnB1dC52YWx1ZSAhPT0gXCJcIiAmJiBwbGF5ZXIySW5wdXQudmFsdWUgIT09IFwiXCIpIHtcbiAgICAgICAgICBuZXh0QnRuLmNsYXNzTGlzdC5hZGQoXCJnZXROYW1lTmV4dEJ0blJlYWR5XCIpO1xuICAgICAgICB9IGVsc2UgaWYgKHBsYXllcjFJbnB1dC52YWx1ZSA9PSBcIlwiIHx8IHBsYXllcjJJbnB1dC52YWx1ZSA9PSBcIlwiKSB7XG4gICAgICAgICAgbmV4dEJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwiZ2V0TmFtZU5leHRCdG5SZWFkeVwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGxheWVyMklucHV0LnZhbHVlICE9PSBcIlwiKSB7XG4gICAgICAgICAgcGxheWVyMklucHV0LnNldEN1c3RvbVZhbGlkaXR5KFwiXCIpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgcGxheWVyMklucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHBsYXlCdXR0b25TaGlmdFNvdW5kKCk7XG4gICAgICB9KTtcblxuICAgICAgcGxheWVyMklucHV0Q29uLmFwcGVuZENoaWxkKHBsYXllcjJJbnB1dExhYmVsKTtcbiAgICAgIHBsYXllcjJJbnB1dENvbi5hcHBlbmRDaGlsZChwbGF5ZXIySW5wdXQpO1xuXG4gICAgICAvLyBBcHBlbmRpbmdcbiAgICAgIG5hbWVJbnB1dENvbi5hcHBlbmRDaGlsZChwbGF5ZXIxSW5wdXRDb24pO1xuICAgICAgbmFtZUlucHV0Q29uLmFwcGVuZENoaWxkKHBsYXllcjJJbnB1dENvbik7XG5cbiAgICAgIC8vIENyZWF0aW5nIG5leHRCdG5cbiAgICAgIGNvbnN0IG5leHRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICBuZXh0QnRuLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJzdWJtaXRcIik7XG4gICAgICBuZXh0QnRuLmNsYXNzTGlzdC5hZGQoXCJnZXROYW1lTmV4dEJ0blwiLCBcImJ0blwiKTtcbiAgICAgIG5leHRCdG4uc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJORVhUXCIpO1xuXG4gICAgICBsZXQgaGFzU3VibWl0dGVkID0gZmFsc2U7XG5cbiAgICAgIG5leHRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHBsYXllcjFJbnB1dC52YWx1ZSAhPT0gXCJcIiAmJlxuICAgICAgICAgIHBsYXllcjJJbnB1dC52YWx1ZSAhPT0gXCJcIiAmJlxuICAgICAgICAgIGhhc1N1Ym1pdHRlZCA9PSBmYWxzZVxuICAgICAgICApIHtcbiAgICAgICAgICBwbGF5Q2xpY2tTb3VuZCgpO1xuICAgICAgICAgIHRoaXMucGxheWVyMS5uYW1lID0gcGxheWVyMUlucHV0LnZhbHVlO1xuICAgICAgICAgIHRoaXMucGxheWVyMi5uYW1lID0gcGxheWVyMklucHV0LnZhbHVlO1xuXG4gICAgICAgICAgY29udGVudC5zdHlsZS5vcGFjaXR5ID0gXCIwXCI7XG4gICAgICAgICAgaGFzU3VibWl0dGVkID0gdHJ1ZTtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoY29udGVudCk7XG4gICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgfSwgNDA1MCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKHBsYXllcjFJbnB1dC52YWx1ZSA9PT0gXCJcIikge1xuICAgICAgICAgICAgcGxheWVyMUlucHV0LnNldEN1c3RvbVZhbGlkaXR5KFwiUGxlYXNlIGZpbGwgb3V0IHRoaXMgZmllbGRcIik7XG4gICAgICAgICAgfSBlbHNlIGlmIChwbGF5ZXIySW5wdXQudmFsdWUgPT09IFwiXCIpIHtcbiAgICAgICAgICAgIHBsYXllcjJJbnB1dC5zZXRDdXN0b21WYWxpZGl0eShcIlBsZWFzZSBmaWxsIG91dCB0aGlzIGZpZWxkXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIG5leHRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgKCkgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcGxheWVyMUlucHV0LnZhbHVlICE9PSBcIlwiICYmXG4gICAgICAgICAgcGxheWVyMklucHV0LnZhbHVlICE9PSBcIlwiICYmXG4gICAgICAgICAgaGFzU3VibWl0dGVkID09IGZhbHNlXG4gICAgICAgICkge1xuICAgICAgICAgIHBsYXlCdXR0b25TaGlmdFNvdW5kKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICAvLyBBcHBlbmRpbmcgbGFzdFxuICAgICAgY29udGVudC5hcHBlbmRDaGlsZChuYW1lSW5wdXRDb24pO1xuICAgICAgY29udGVudC5hcHBlbmRDaGlsZChuZXh0QnRuKTtcblxuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250ZW50KTtcblxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIC8vIExldCBmYWRlIGluXG4gICAgICAgIGNvbnRlbnQuc3R5bGUub3BhY2l0eSA9IFwiMVwiO1xuICAgICAgfSwgNTApO1xuICAgIH0pO1xuICB9XG4gIHBhc3NTY3JlZW5ET00ocGxheWVyKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGNvbnRlbnQuY2xhc3NMaXN0LmFkZChcInBhc3NEZXZpY2VDb25cIik7XG5cbiAgICAgIC8vIFBhc3MgaGVhZGVyXG4gICAgICBjb25zdCBwYXNzSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICBwYXNzSGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJwYXNzU2NyZWVuSGVhZGVyXCIpO1xuICAgICAgcGFzc0hlYWRlci50ZXh0Q29udGVudCA9IGBQTEVBU0UgUEFTUyBUSEUgREVWSUNFIFRPICR7cGxheWVyLm5hbWV9YDtcblxuICAgICAgLy8gQ3JlYXRlIHBhc3MgaWNvblxuICAgICAgY29uc3QgcGFzc0RldmljZUltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgICBwYXNzRGV2aWNlSW1hZ2Uuc3JjID0gcGFzc0RldmljZUltYWdlU3JjO1xuICAgICAgcGFzc0RldmljZUltYWdlLmNsYXNzTGlzdC5hZGQoXCJwYXNzRGV2aWNlSW1hZ2VcIik7XG5cbiAgICAgIC8vIFByZXNzIHRvIGNvbnRpbnVlIHRleHRcbiAgICAgIGNvbnN0IGNvbnRpbnVlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgY29udGludWVUZXh0LmNsYXNzTGlzdC5hZGQoXCJwYXNzRGV2aWNlQ29udGludWVUZXh0XCIpO1xuICAgICAgY29udGludWVUZXh0LnRleHRDb250ZW50ID0gXCJUQVAgVE8gQ09OVElOVUVcIjtcblxuICAgICAgY29udGVudC5hcHBlbmRDaGlsZChwYXNzSGVhZGVyKTtcbiAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQocGFzc0RldmljZUltYWdlKTtcbiAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGludWVUZXh0KTtcblxuICAgICAgbGV0IGlzQ2xpY2tlZCA9IGZhbHNlO1xuXG4gICAgICBjb250ZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGlmIChpc0NsaWNrZWQgPT0gZmFsc2UpIHtcbiAgICAgICAgICBpc0NsaWNrZWQgPSB0cnVlO1xuICAgICAgICAgIGNvbnRlbnQuc3R5bGUub3BhY2l0eSA9IFwiMFwiO1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChjb250ZW50KTtcbiAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICB9LCAyMDAwKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGNvbnRlbnQuc3R5bGUub3BhY2l0eSA9IFwiMFwiO1xuXG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNvbnRlbnQuc3R5bGUub3BhY2l0eSA9IFwiMVwiO1xuICAgICAgfSwgNTApO1xuICAgIH0pO1xuICB9XG4gIGF0dGFja0N5Y2xlRE9NKHBsYXllciwgcGxheWVyTmV4dCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgY29uc3QgYXR0YWNrUDEgPSAoKSA9PiB7XG4gICAgICAgIGF0dGFja0RPTShwbGF5ZXIsIHBsYXllck5leHQpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZ2FtZVwiLCBKU09OLnN0cmluZ2lmeSh0aGlzKSk7XG4gICAgICAgICAgdGhpcy5wYXNzU2NyZWVuRE9NKHBsYXllck5leHQpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgYXR0YWNrUDIoKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9O1xuXG4gICAgICBjb25zdCBhdHRhY2tQMiA9ICgpID0+IHtcbiAgICAgICAgYXR0YWNrRE9NKHBsYXllck5leHQsIHBsYXllcikudGhlbigoKSA9PiB7XG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJnYW1lXCIsIEpTT04uc3RyaW5naWZ5KHRoaXMpKTtcbiAgICAgICAgICB0aGlzLnBhc3NTY3JlZW5ET00ocGxheWVyKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIGF0dGFja1AxKCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfTtcblxuICAgICAgYXR0YWNrUDEoKTtcbiAgICB9KTtcbiAgfVxufVxuXG5jb25zdCBwbGFjZVNoaXBzRE9NID0gKHBsYXllcikgPT4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAvLyBQbGFjZSBzaGlwcyByb3RhdGVkIGlmIHRoZXkgYXJlXG4gICAgbGV0IHJvdGF0ZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRlbnQuY2xhc3NMaXN0LmFkZChcImNvbnRlbnRDb25cIiwgXCJwbGFjZW1lbnRDb25cIik7XG5cbiAgICAvLyBDcmVhdGluZyBoZWFkZXJcbiAgICBjb25zdCBoZWFkZXJDb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhlYWRlckNvbi5jbGFzc0xpc3QuYWRkKFwicGxhY2VtZW50SGVhZGVyQ29uXCIpO1xuXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXG4gICAgICBcImxvYWRpbmdzY3JlZW5IZWFkZXJcIixcbiAgICAgIFwiaW5nYW1lSGVhZGVyXCIsXG4gICAgICBcInBsYWNlbWVudEhlYWRlclwiXG4gICAgKTtcbiAgICBoZWFkZXIudGV4dENvbnRlbnQgPSBgQVlFLUFZRSBDQVBUQUlOICR7cGxheWVyLm5hbWV9IFNFTEVDVCBBTkQgRFJPUCBZT1VSIFNISVBTIFdIRVJFIFlPVSBXQU5UIFRIRU1gO1xuXG4gICAgaGVhZGVyQ29uLmFwcGVuZENoaWxkKGhlYWRlcik7XG5cbiAgICAvLyBDcmVhdGluZyBkcmFnIGFuZCBkcm9wIG1vZHVsZVxuICAgIGNvbnN0IGRyYWdBbmREcm9wQ29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkcmFnQW5kRHJvcENvbi5jbGFzc0xpc3QuYWRkKFwiZHJhZ0FuZERyb3BDb25cIik7XG5cbiAgICAvLyBDcmVhdGluZyBncmlkXG4gICAgY29uc3QgZ2FtZUJvYXJkR3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZ2FtZUJvYXJkR3JpZC5jbGFzc0xpc3QuYWRkKFwiZnJpZW5kbHlCb2FyZFwiLCBcInBsYWNlbWVudEJvYXJkXCIpO1xuXG4gICAgLy8gRm9yIHNhdmluZyBzZWxlY3RlZCBzaGlwIGluIGEgdmFyaWJsZVxuICAgIGxldCBzZWxlY3RlZFNoaXAgPSB1bmRlZmluZWQ7XG5cbiAgICAvLyBIaWdobGlnaHRzIHNlbGN0ZWQgc2hpcFxuICAgIC8vIEZuIE5PVCBQVVJFIChhY2Nlc3MgdmFyaWJsZSBvdXRzaWRlIHNjb3BlKVxuICAgIGNvbnN0IHNlbGVjdEZuID0gKCkgPT4ge1xuICAgICAgc2hpcHNDb24uY2hpbGROb2Rlcy5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKFwicGxhY2VtZW50U2VsZWN0ZWRTaGlwRWxcIik7XG4gICAgICB9KTtcbiAgICAgIHNlbGVjdGVkU2hpcC5jbGFzc0xpc3QuYWRkKFwicGxhY2VtZW50U2VsZWN0ZWRTaGlwRWxcIik7XG4gICAgfTtcblxuICAgIC8vIENhY2wgc2hpcCBjb29yZGluYXRlc1xuICAgIC8vIEZuIE5PVCBQVVJFIChhY2Nlc3MgdmFyaWJsZSBvdXRzaWRlIHNjb3BlKVxuICAgIGNvbnN0IGNhY2xTaGlwQ29vciA9IChbeCwgeV0sIG51bSkgPT4ge1xuICAgICAgLy8gU2F2ZSBjYWNsIGNvb3JkaW5hdGVzXG4gICAgICBsZXQgY29vckFyeSA9IFtdO1xuXG4gICAgICBpZiAocm90YXRlZCA9PSB0cnVlKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtOyBpKyspIHtcbiAgICAgICAgICBjb29yQXJ5LnB1c2goW3ggKyBpLCB5XSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtOyBpKyspIHtcbiAgICAgICAgICBjb29yQXJ5LnB1c2goW3gsIHkgKyBpXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBjb29yQXJ5O1xuICAgIH07XG5cbiAgICAvLyBTYXZlcyBob3ZlcmVkIHNsb3RzIGZvciBuZXh0IHJlbG9hZCBvbiBncmlkXG4gICAgbGV0IGhvdmVyZWRTbG90ID0gW1tdXTtcblxuICAgIC8vIElmIHNoaXBzIGNhbiBiZSBwbGFjZWRcbiAgICAvLyBIYXMgdG8gYmUgc2NvcGVkIGhlcmUgZm9yIGZ1bmN0aW9uIHRvIGFjY2VzcyBwcmV2aW9zIGNhbGxzXG4gICAgbGV0IGNhblBsYWNlID0gdHJ1ZTtcblxuICAgIGNvbnN0IHBvcHVsYXRlQm9hcmQgPSAoKSA9PiB7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAxMDsgaSsrKSB7XG4gICAgICAgIGZvciAobGV0IGogPSAxOyBqIDw9IDEwOyBqKyspIHtcbiAgICAgICAgICBjb25zdCBncmlkUGxhY2VtZW50U2xvdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgZ3JpZFBsYWNlbWVudFNsb3QuY2xhc3NMaXN0LmFkZChcImdyaWRQbGFjZW1lbnRTbG90XCIpO1xuXG4gICAgICAgICAgLy8gSW5kaWNhdGUgd2VhdGhlciBvciBub3QgYSBzaGlwIGhhcyBhbGxyZWFkeSBiZWVuIHBsYWNlZCBoZXJlXG4gICAgICAgICAgbGV0IHNoaXBFbFNsb3QgPSBmYWxzZTtcblxuICAgICAgICAgIHBsYXllci5ib2FyZC5zaGlwcy5mb3JFYWNoKChzaGlwRWwpID0+IHtcbiAgICAgICAgICAgIHNoaXBFbC5jb29yLmZvckVhY2goKGNvb3IpID0+IHtcbiAgICAgICAgICAgICAgaWYgKGogPT0gY29vclswXSAmJiBpID09IGNvb3JbMV0pIHtcbiAgICAgICAgICAgICAgICBncmlkUGxhY2VtZW50U2xvdC5jbGFzc0xpc3QuYWRkKFwiZnJpZW5kbHlHcmlkU2xvdFNoaXBcIik7XG4gICAgICAgICAgICAgICAgc2hpcEVsU2xvdCA9IHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgaWYgKHNoaXBFbFNsb3QgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGdyaWRQbGFjZW1lbnRTbG90LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICAgIC8vIElmIGEgc2hpcCBpcyBzZWxlY3RlZCBhbmQgc2hpcCBpcyBub3QgYW5kIGlsbGlnYWwgcGxhY2VcbiAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkU2hpcCAhPSB1bmRlZmluZWQgJiYgY2FuUGxhY2UgIT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBwbGF5U3BsYXNoU291bmQoKTtcblxuICAgICAgICAgICAgICAgIC8vIENyZWF0ZSBuZXcgc2hpcCB3aXRoIHRoZSBjYWxjdWxhdGVkIGNvb3JkaW5hdGVzXG4gICAgICAgICAgICAgICAgbGV0IG5ld1NoaXAgPSBuZXcgc2hpcChcbiAgICAgICAgICAgICAgICAgIGNhY2xTaGlwQ29vcihbaiwgaV0sIHNlbGVjdGVkU2hpcC5jaGlsZEVsZW1lbnRDb3VudClcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIC8vIFB1c2ggbmV3IHNoaXAgdG8gdGhlIHBsYXllclxuICAgICAgICAgICAgICAgIHBsYXllci5ib2FyZC5zaGlwcy5wdXNoKG5ld1NoaXApO1xuXG4gICAgICAgICAgICAgICAgLy8gTWFrZSBzaGlwIGRpc2FwZWFyIGZyb20gc2VsZWN0YWJsZSBzaGlwc1xuICAgICAgICAgICAgICAgIHNlbGVjdGVkU2hpcC5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcblxuICAgICAgICAgICAgICAgIC8vIENsZWFyIHNlbGVjdGVkIHNoaXBcbiAgICAgICAgICAgICAgICBzZWxlY3RlZFNoaXAgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgICAgICAgICAvLyBDbGVhciBob3ZlcmVkIHNsb3RzXG4gICAgICAgICAgICAgICAgaG92ZXJlZFNsb3QgPSBbW11dO1xuXG4gICAgICAgICAgICAgICAgLy8gUmVsb2FkIGdhbWVib2FyZFxuICAgICAgICAgICAgICAgIHJlbG9hZEdhbWVib2FyZEdyaWQoKTtcblxuICAgICAgICAgICAgICAgIC8vIEFsbG93IHBsYXllciB0byBtb3ZlIHRvIGJhdHRsZVxuICAgICAgICAgICAgICAgIGlmIChwbGF5ZXIuYm9hcmQuc2hpcHMubGVuZ3RoID09IDYpIHtcbiAgICAgICAgICAgICAgICAgIG5leHRCdG4uY2xhc3NMaXN0LmFkZChcInBsYWNlbWVudE5leHRCdG5SZWFkeVwiKTtcbiAgICAgICAgICAgICAgICAgIG5leHRSZWFkeSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gSWYgc2xvdCBpcyBob3ZlcmVkXG4gICAgICAgICAgICBsZXQgaXNIb3ZlcmVkU2xvdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICBpZiAoaG92ZXJlZFNsb3RbMF1bMF0gPT0gaiAmJiBob3ZlcmVkU2xvdFswXVsxXSA9PSBpKSB7XG4gICAgICAgICAgICAgIC8vIFRoaXMgaXMgaG92ZXJlZCBzbG90XG4gICAgICAgICAgICAgIGlzSG92ZXJlZFNsb3QgPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBUaGlzIGlzIG5vdCB0aGUgaG92ZXJlZCBzbG90XG4gICAgICAgICAgICBpZiAoaXNIb3ZlcmVkU2xvdCA9PSBmYWxzZSkge1xuICAgICAgICAgICAgICBncmlkUGxhY2VtZW50U2xvdC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkU2hpcCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgIC8vIGlmIGEgc2hpcCBpcyBzZWxlY3RlZFxuICAgICAgICAgICAgICAgICAgLy8gQ2FsYyBob3ZlcmVkIHNsb3RzIGJhc2VkIG9uIHNlbGVjdGVkIHNoaXBcbiAgICAgICAgICAgICAgICAgIGhvdmVyZWRTbG90ID0gY2FjbFNoaXBDb29yKFxuICAgICAgICAgICAgICAgICAgICBbaiwgaV0sXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkU2hpcC5jaGlsZEVsZW1lbnRDb3VudFxuICAgICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgICAgLy8gUmVzZXQgY2FuIHBsYWNlXG4gICAgICAgICAgICAgICAgICBjYW5QbGFjZSA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICAgIC8vIENoZWNrIGlmIGhvdmVyZWQgaXMgb3V0IG9mIGdyaWRcbiAgICAgICAgICAgICAgICAgIGhvdmVyZWRTbG90LmZvckVhY2goKGNvcnIxKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICBjb3JyMVswXSA8IDEgfHxcbiAgICAgICAgICAgICAgICAgICAgICBjb3JyMVswXSA+IDEwIHx8XG4gICAgICAgICAgICAgICAgICAgICAgY29ycjFbMV0gPCAxIHx8XG4gICAgICAgICAgICAgICAgICAgICAgY29ycjFbMV0gPiAxMFxuICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAvLyBJdCBjYW4ndCBiZSBwbGFjZWQgdGhlblxuICAgICAgICAgICAgICAgICAgICAgIGNhblBsYWNlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gQ2hlY2sgaWYgaG92ZXJlZCBzbG90cyBpcyBvdmVyIGFuIGV4aXN0aW5nIHNoaXBcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyLmJvYXJkLnNoaXBzLmZvckVhY2goKHNoaXBFbDEpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBzaGlwRWwxLmNvb3IuZm9yRWFjaCgoY29vcjIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb3JyMVswXSA9PSBjb29yMlswXSAmJiBjb3JyMVsxXSA9PSBjb29yMlsxXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBDYW4ndCBwbGFjZSBzaGlwIGhlcmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FuUGxhY2UgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgIC8vIFJlbG9hZCB0byBkaXNwbGF5IGNoYW5nZXNcbiAgICAgICAgICAgICAgICAgIHJlbG9hZEdhbWVib2FyZEdyaWQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIEFkZCBjbGFzcyB0byBhbGwgaG92ZXJlZCBzcG90c1xuICAgICAgICAgIGhvdmVyZWRTbG90LmZvckVhY2goKGNvcnIxKSA9PiB7XG4gICAgICAgICAgICBpZiAoY29ycjFbMF0gPT0gaiAmJiBjb3JyMVsxXSA9PSBpKSB7XG4gICAgICAgICAgICAgIC8vIElmIG9uZSBpcyBvdXQgb2YgcmFuZ2VcbiAgICAgICAgICAgICAgaWYgKGNhblBsYWNlID09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgZ3JpZFBsYWNlbWVudFNsb3QuY2xhc3NMaXN0LmFkZChcbiAgICAgICAgICAgICAgICAgIFwicGxhY2VtZW50SG92ZXJlZFNsb3RPdXRPZlJhbmdlXCJcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGdyaWRQbGFjZW1lbnRTbG90LmNsYXNzTGlzdC5hZGQoXCJwbGFjZW1lbnRIb3ZlcmVkU2xvdFwiKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgLy8gQXBwZW5kIG5ldyBzbG90XG4gICAgICAgICAgZ2FtZUJvYXJkR3JpZC5hcHBlbmRDaGlsZChncmlkUGxhY2VtZW50U2xvdCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gRmlyZXMgb24gbG9hZFxuICAgIHBvcHVsYXRlQm9hcmQoKTtcblxuICAgIC8vIFJlbG9hZCBmbiByZW1vdmVzIGFsbCBhbmQgcG9wdWxhdGVzIGJvYXJkXG4gICAgY29uc3QgcmVsb2FkR2FtZWJvYXJkR3JpZCA9ICgpID0+IHtcbiAgICAgIHdoaWxlIChnYW1lQm9hcmRHcmlkLmxhc3RDaGlsZCkge1xuICAgICAgICBnYW1lQm9hcmRHcmlkLnJlbW92ZUNoaWxkKGdhbWVCb2FyZEdyaWQubGFzdENoaWxkKTtcbiAgICAgIH1cbiAgICAgIHBvcHVsYXRlQm9hcmQoKTtcbiAgICB9O1xuXG4gICAgLy8gQ3JlYXRpbmcgc2hpcCBkcmFnIGFuZCBkcm9wc1xuICAgIGNvbnN0IHNoaXBEcmFnQ29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzaGlwRHJhZ0Nvbi5jbGFzc0xpc3QuYWRkKFwic2hpcERyYWdDb25cIik7XG5cbiAgICBjb25zdCBzaGlwc0NvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc2hpcHNDb24uY2xhc3NMaXN0LmFkZChcInBsYWNlbWVudFNoaXBzQ29uQ29uXCIpO1xuXG4gICAgY29uc3Qgc2hpcHNDb24xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzaGlwc0NvbjEuY2xhc3NMaXN0LmFkZChcInBsYWNlbWVudFNoaXBzQ29uXCIpO1xuXG4gICAgY29uc3Qgc2hpcHNDb24yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzaGlwc0NvbjIuY2xhc3NMaXN0LmFkZChcInBsYWNlbWVudFNoaXBzQ29uXCIpO1xuXG4gICAgLy8gQ3JlYXRlcyBzZWxlY3RhYmxlIHNoaXBzXG4gICAgY29uc3QgY3JlYXRpbmdTaGlwcyA9IChsZW5ndGgpID0+IHtcbiAgICAgIGNvbnN0IHNoaXBFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBzaGlwRWwuY2xhc3NMaXN0LmFkZChcInBsYWNlbWVudFNoaXBFbFwiKTtcblxuICAgICAgLy8gTWFrZSBzdXJlIGVhY2ggY2VsbCBpcyBlcXVhbCB0byBncmlkIGNlbGxcbiAgICAgIHNoaXBFbC5zdHlsZS5ncmlkVGVtcGxhdGVSb3dzID0gYHJlcGVhdCgke2xlbmd0aH0sMWZyYDtcbiAgICAgIHNoaXBFbC5zdHlsZS5oZWlnaHQgPSBgJHtsZW5ndGggKiAzLjV9dmhgO1xuXG4gICAgICBzaGlwRWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgLy8gQWRkIHNoaXAgdG8gc2VsZWN0ZWRcbiAgICAgICAgc2VsZWN0ZWRTaGlwID0gc2hpcEVsO1xuICAgICAgICAvLyBIaWdobGlndHMgc2VsZWN0ZWQgc2hpcFxuICAgICAgICBwbGF5QnV0dG9uU2hpZnRTb3VuZCgpO1xuICAgICAgICBzZWxlY3RGbigpO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIEFkZCBzbG90cyB0byBzaGlwIGdyaWRcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHNsb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBzbG90LmNsYXNzTGlzdC5hZGQoXCJmcmllbmRseUdyaWRTbG90U2hpcFwiLCBcImdyaWRQbGFjZW1lbnRTbG90XCIpO1xuXG4gICAgICAgIHNoaXBFbC5hcHBlbmRDaGlsZChzbG90KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHNoaXBFbDtcbiAgICB9O1xuXG4gICAgLy8gQ3JlYXRlIGFsbCBzaGlwc1xuICAgIGNvbnN0IHBvcHVsYXRlQWxsU2hpcHMgPSAoKSA9PiB7XG4gICAgICBzaGlwc0NvbjEuYXBwZW5kQ2hpbGQoY3JlYXRpbmdTaGlwcyg1KSk7XG4gICAgICBzaGlwc0NvbjEuYXBwZW5kQ2hpbGQoY3JlYXRpbmdTaGlwcyg0KSk7XG4gICAgICBzaGlwc0NvbjEuYXBwZW5kQ2hpbGQoY3JlYXRpbmdTaGlwcyg0KSk7XG4gICAgICBzaGlwc0NvbjIuYXBwZW5kQ2hpbGQoY3JlYXRpbmdTaGlwcygzKSk7XG4gICAgICBzaGlwc0NvbjIuYXBwZW5kQ2hpbGQoY3JlYXRpbmdTaGlwcygzKSk7XG4gICAgICBzaGlwc0NvbjIuYXBwZW5kQ2hpbGQoY3JlYXRpbmdTaGlwcygyKSk7XG4gICAgfTtcblxuICAgIHBvcHVsYXRlQWxsU2hpcHMoKTtcblxuICAgIC8vIENyZWF0aW5nIHJvdGF0ZUJ0blxuICAgIGNvbnN0IHJvdGF0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcm90YXRlQnRuLmNsYXNzTGlzdC5hZGQoXCJwbGFjZW1lbnRSb3RhdGVCdG5cIiwgXCJidG5cIik7XG4gICAgcm90YXRlQnRuLnRleHRDb250ZW50ID0gXCJSb3RhdGVcIjtcblxuICAgIHJvdGF0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgcGxheUJ1dHRvblNoaWZ0U291bmQoKTtcbiAgICAgIGlmIChyb3RhdGVkID09IGZhbHNlKSB7XG4gICAgICAgIC8vIFJvdGF0ZVxuICAgICAgICBzaGlwc0NvbjEuc3R5bGUucm90YXRlID0gXCI5MGRlZ1wiO1xuICAgICAgICBzaGlwc0NvbjIuc3R5bGUucm90YXRlID0gXCI5MGRlZ1wiO1xuICAgICAgICByb3RhdGVkID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAocm90YXRlZCkge1xuICAgICAgICAvLyBSb3RhdGUgYmFja1xuICAgICAgICBzaGlwc0NvbjEuc3R5bGUucm90YXRlID0gXCIwZGVnXCI7XG4gICAgICAgIHNoaXBzQ29uMi5zdHlsZS5yb3RhdGUgPSBcIjBkZWdcIjtcbiAgICAgICAgcm90YXRlZCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gQXBwZW5kaW5nXG4gICAgc2hpcHNDb24uYXBwZW5kQ2hpbGQoc2hpcHNDb24xKTtcbiAgICBzaGlwc0Nvbi5hcHBlbmRDaGlsZChzaGlwc0NvbjIpO1xuICAgIHNoaXBEcmFnQ29uLmFwcGVuZENoaWxkKHNoaXBzQ29uKTtcbiAgICBzaGlwRHJhZ0Nvbi5hcHBlbmRDaGlsZChyb3RhdGVCdG4pO1xuXG4gICAgLy8gQXBwZW5kaW5nXG4gICAgZHJhZ0FuZERyb3BDb24uYXBwZW5kQ2hpbGQoZ2FtZUJvYXJkR3JpZCk7XG4gICAgZHJhZ0FuZERyb3BDb24uYXBwZW5kQ2hpbGQoc2hpcERyYWdDb24pO1xuXG4gICAgLy8gQ3JlYXRpbmcgYnRuY29udGFpbmVyIGZvciByZXNldGJ0biBhbmQgbmV4dCBidG5cbiAgICBjb25zdCBsb3dlckJ0bkNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbG93ZXJCdG5Db24uY2xhc3NMaXN0LmFkZChcInBsYWNlbWVudExvd2VyQnRuQ29uXCIpO1xuXG4gICAgY29uc3QgcmVzZXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIHJlc2V0QnRuLmNsYXNzTGlzdC5hZGQoXCJwbGFjZW1lbnRSZXNldEJ0blwiLCBcImJ0blwiKTtcbiAgICByZXNldEJ0bi50ZXh0Q29udGVudCA9IFwiUkVTRVRcIjtcblxuICAgIGxldCBuZXh0UmVhZHkgPSBmYWxzZTtcblxuICAgIHJlc2V0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBwbGF5QnV0dG9uU2hpZnRTb3VuZCgpO1xuXG4gICAgICAvLyBJZiBhbnkgc2hpcHMgbGVmdCwgcmVtb3ZlIHRoZW1cbiAgICAgIHdoaWxlIChzaGlwc0Nvbi5sYXN0Q2hpbGQpIHtcbiAgICAgICAgc2hpcHNDb24ucmVtb3ZlQ2hpbGQoc2hpcHNDb24ubGFzdENoaWxkKTtcbiAgICAgIH1cbiAgICAgIC8vIENyZWF0ZSBuZXcgc2VsZWN0YWJsZSBzaGlwc1xuICAgICAgcG9wdWxhdGVBbGxTaGlwcygpO1xuICAgICAgLy8gQ2xlYXIgcGxheWVycyBzaGlwc1xuICAgICAgcGxheWVyLmJvYXJkLnNoaXBzID0gW107XG4gICAgICAvLyBDbGVhciB0aGUgZ2FtZWJvYXJkXG4gICAgICByZWxvYWRHYW1lYm9hcmRHcmlkKCk7XG5cbiAgICAgIC8vIE1ha2Ugc3VyZSB1c2VyIGNhbid0IGdvIHRvIGJhdHRsZSBub3dcbiAgICAgIG5leHRCdG4uY2xhc3NMaXN0LnJlbW92ZShcInBsYWNlbWVudE5leHRCdG5SZWFkeVwiKTtcbiAgICAgIG5leHRSZWFkeSA9IGZhbHNlO1xuICAgIH0pO1xuXG4gICAgY29uc3QgbmV4dEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgbmV4dEJ0bi5jbGFzc0xpc3QuYWRkKFwicGxhY2VtZW50TmV4dEJ0blwiLCBcImJ0blwiKTtcbiAgICBuZXh0QnRuLnRleHRDb250ZW50ID0gXCJORVhUXCI7XG5cbiAgICBuZXh0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAvLyBPbmx5IGlmIGFsbCBzaGlwcyBhcmUgcGxhY2VkXG4gICAgICBpZiAobmV4dFJlYWR5ID09IHRydWUpIHtcbiAgICAgICAgcGxheUNsaWNrU291bmQoKTtcbiAgICAgICAgLy8gQ3JlYXRlIG5pY2UgdHJhbnNpc3Rpb24gYmVmb3JlIGNsZWFyaW5nIGFuZCByZXNvbHZpbmdcbiAgICAgICAgY29udGVudC5zdHlsZS5yaWdodCA9IFwiMzAwdndcIjtcbiAgICAgICAgY29udGVudC5zdHlsZS50cmFuc2l0aW9uID0gXCI0cyBlYXNlLWluXCI7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoY29udGVudCk7XG4gICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICB9LCA0MDAwKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIG5leHRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgKCkgPT4ge1xuICAgICAgaWYgKG5leHRSZWFkeSA9PSB0cnVlKSB7XG4gICAgICAgIHBsYXlCdXR0b25TaGlmdFNvdW5kKCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBBcHBlbmluZ1xuICAgIGxvd2VyQnRuQ29uLmFwcGVuZENoaWxkKHJlc2V0QnRuKTtcbiAgICBsb3dlckJ0bkNvbi5hcHBlbmRDaGlsZChuZXh0QnRuKTtcblxuICAgIC8vIEFwcGVuZGluZyBsYXN0XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXJDb24pO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZHJhZ0FuZERyb3BDb24pO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobG93ZXJCdG5Db24pO1xuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250ZW50KTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29udGVudC5zdHlsZS5yaWdodCA9IFwiLTEwMHZ3XCI7XG4gICAgfSwgNTApO1xuICB9KTtcbn07XG5cbmNvbnN0IHNldHRpbmdzRE9NID0gKCkgPT4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICBjb25zdCBzZXR0aW5nSWNvbiA9IG5ldyBJbWFnZSgpO1xuICAgIHNldHRpbmdJY29uLnNyYyA9IHNldHRpbmdJY29uU3JjO1xuICAgIHNldHRpbmdJY29uLmNsYXNzTGlzdC5hZGQoXCJzZXR0aW5nSWNvblwiKTtcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2V0dGluZ0ljb24pO1xuXG4gICAgbGV0IHNldHRpbmdJY29uSGFzQmVlbkNsaWNrZWQgPSBmYWxzZTtcblxuICAgIHNldHRpbmdJY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAvLyBUbyBhdm9pZCBkb3VibGUgbG9hZFxuICAgICAgaWYgKHNldHRpbmdJY29uSGFzQmVlbkNsaWNrZWQgPT0gZmFsc2UpIHtcbiAgICAgICAgcGxheUJ1dHRvblNoaWZ0U291bmQoKTtcbiAgICAgICAgY3JlYXRlU2V0dGluZ1BhZ2UoKTtcbiAgICAgICAgc2V0dGluZ0ljb25IYXNCZWVuQ2xpY2tlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBjcmVhdGVTZXR0aW5nUGFnZSA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHNldHRpbmdQYWdlQ29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHNldHRpbmdQYWdlQ29uLmNsYXNzTGlzdC5hZGQoXCJzZXR0aW5nUGFnZUNvblwiKTtcblxuICAgICAgY29uc3QgYmFja0Fycm93ID0gbmV3IEltYWdlKCk7XG4gICAgICBiYWNrQXJyb3cuc3JjID0gYmFja0Fycm93SWNvblNyYztcbiAgICAgIGJhY2tBcnJvdy5jbGFzc0xpc3QuYWRkKFwic2V0dGluZ0JhY2tBcnJvd1wiKTtcblxuICAgICAgbGV0IGJhY2tBcnJvd0hhc0Jlbm5DbGlja2VkID0gZmFsc2U7XG5cbiAgICAgIGJhY2tBcnJvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAvLyB0byBhdm9pZCBkb3VibGUgbG9hZFxuICAgICAgICBpZiAoYmFja0Fycm93SGFzQmVubkNsaWNrZWQgPT0gZmFsc2UpIHtcbiAgICAgICAgICBwbGF5QnV0dG9uU2hpZnRTb3VuZCgpO1xuICAgICAgICAgIGJhY2tBcnJvd0hhc0Jlbm5DbGlja2VkID0gdHJ1ZTtcbiAgICAgICAgICBzZXR0aW5nSWNvbkhhc0JlZW5DbGlja2VkID0gZmFsc2U7XG4gICAgICAgICAgc2V0dGluZ1BhZ2VDb24uc3R5bGUub3BhY2l0eSA9IFwiMFwiO1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChzZXR0aW5nUGFnZUNvbik7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNldHRpbmdJY29uKTtcbiAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIC8vIENyZWF0aW5nIHNsaWRlcnNcbiAgICAgIGNvbnN0IHNsaWRlckNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBzbGlkZXJDb24uY2xhc3NMaXN0LmFkZChcImNvbnRlbnRDb25cIiwgXCJzZXR0aW5nc1NsaWRlckNvblwiKTtcblxuICAgICAgLy8gTWFzdGVyc291bmQgc2xpZGVyXG4gICAgICBjb25zdCBzbGlkZXJDb25NYXN0ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgc2xpZGVyQ29uTWFzdGVyLmNsYXNzTGlzdC5hZGQoXCJzZXR0aW5nU21hbGxTbGlkZXJDb25cIik7XG5cbiAgICAgIGNvbnN0IHNsaWRlck1pbmlDb25NYXN0ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgc2xpZGVyTWluaUNvbk1hc3Rlci5jbGFzc0xpc3QuYWRkKFwic2V0dGluZ3NTbGlkZXJNaW5pQ29uXCIpO1xuXG4gICAgICBjb25zdCBzbGlkZXJNYXN0ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICBzbGlkZXJNYXN0ZXIuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInJhbmdlXCIpO1xuICAgICAgc2xpZGVyTWFzdGVyLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIG1hc3RlclZvbHVtZSAqIDEwMCk7XG4gICAgICBzbGlkZXJNYXN0ZXIuY2xhc3NMaXN0LmFkZChcInNldHRpbmdzU2xpZGVyXCIpO1xuXG4gICAgICBjb25zdCBzbGlkZXJNYXN0ZXJWYWx1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgc2xpZGVyTWFzdGVyVmFsdWUuY2xhc3NMaXN0LmFkZChcInNldHRpbmdzU2xpZGVyVmFsdWVcIik7XG4gICAgICBzbGlkZXJNYXN0ZXJWYWx1ZS50ZXh0Q29udGVudCA9IGAke3NsaWRlck1hc3Rlci52YWx1ZX0lYDtcblxuICAgICAgc2xpZGVyTWFzdGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgKCkgPT4ge1xuICAgICAgICAvLyBDaGFuZ2UgdmFsdWVibGUgdGV4dFxuICAgICAgICBzbGlkZXJNYXN0ZXJWYWx1ZS50ZXh0Q29udGVudCA9IGAke3NsaWRlck1hc3Rlci52YWx1ZX0lYDtcblxuICAgICAgICAvLyBDaGFuZ2UgZ2xvYmFsIHZvbHVtZSB2YWx1ZVxuICAgICAgICBtYXN0ZXJWb2x1bWUgPSBzbGlkZXJNYXN0ZXIudmFsdWUgLyAxMDA7XG5cbiAgICAgICAgLy8gU2V0IHN0b3JhZ2VcbiAgICAgICAgc2F2ZUF1ZGlvVG9TdG9yYWdlKCk7XG5cbiAgICAgICAgLy8gTWFrZSBzdXJlIGFsbCBwbGF5aW5nIGF1ZGlvIGNoYW5nZSB2b2x1bWVcbiAgICAgICAgY2hhbmdlVm9sdW1lKCk7XG4gICAgICB9KTtcblxuICAgICAgc2xpZGVyTWFzdGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4ge1xuICAgICAgICAvLyBDaGFuZ2UgdmFsdWVibGUgdGV4dFxuICAgICAgICBzbGlkZXJNYXN0ZXJWYWx1ZS50ZXh0Q29udGVudCA9IGAke3NsaWRlck1hc3Rlci52YWx1ZX0lYDtcblxuICAgICAgICAvLyBDaGFuZ2UgZ2xvYmFsIHZvbHVtZSB2YWx1ZVxuICAgICAgICBtYXN0ZXJWb2x1bWUgPSBzbGlkZXJNYXN0ZXIudmFsdWUgLyAxMDA7XG5cbiAgICAgICAgLy8gU2V0IHN0b3JhZ2VcbiAgICAgICAgc2F2ZUF1ZGlvVG9TdG9yYWdlKCk7XG5cbiAgICAgICAgLy8gTWFrZSBzdXJlIGFsbCBwbGF5aW5nIGF1ZGlvIGNoYW5nZSB2b2x1bWVcbiAgICAgICAgY2hhbmdlVm9sdW1lKCk7XG4gICAgICB9KTtcblxuICAgICAgc2xpZGVyTWluaUNvbk1hc3Rlci5hcHBlbmRDaGlsZChzbGlkZXJNYXN0ZXIpO1xuICAgICAgc2xpZGVyTWluaUNvbk1hc3Rlci5hcHBlbmRDaGlsZChzbGlkZXJNYXN0ZXJWYWx1ZSk7XG5cbiAgICAgIGNvbnN0IHNsaWRlck1hc3RlckxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICBzbGlkZXJNYXN0ZXJMYWJlbC5jbGFzc0xpc3QuYWRkKFwic2V0dGluZ3NTbGlkZXJMYWJlbFwiKTtcbiAgICAgIHNsaWRlck1hc3RlckxhYmVsLnRleHRDb250ZW50ID0gXCJNQVNURVIgVk9MVU1FXCI7XG5cbiAgICAgIHNsaWRlckNvbk1hc3Rlci5hcHBlbmRDaGlsZChzbGlkZXJNYXN0ZXJMYWJlbCk7XG4gICAgICBzbGlkZXJDb25NYXN0ZXIuYXBwZW5kQ2hpbGQoc2xpZGVyTWluaUNvbk1hc3Rlcik7XG5cbiAgICAgIC8vIE11c2ljIHNvdW5kIHNsaWRlclxuICAgICAgY29uc3Qgc2xpZGVyQ29uTXVzaWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgc2xpZGVyQ29uTXVzaWMuY2xhc3NMaXN0LmFkZChcInNldHRpbmdTbWFsbFNsaWRlckNvblwiKTtcblxuICAgICAgY29uc3Qgc2xpZGVyTWluaUNvbk11c2ljID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHNsaWRlck1pbmlDb25NdXNpYy5jbGFzc0xpc3QuYWRkKFwic2V0dGluZ3NTbGlkZXJNaW5pQ29uXCIpO1xuXG4gICAgICBjb25zdCBzbGlkZXJNdXNpYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgIHNsaWRlck11c2ljLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJyYW5nZVwiKTtcbiAgICAgIHNsaWRlck11c2ljLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIG11c2ljVm9sdW1lICogMTAwKTtcbiAgICAgIHNsaWRlck11c2ljLmNsYXNzTGlzdC5hZGQoXCJzZXR0aW5nc1NsaWRlclwiKTtcblxuICAgICAgY29uc3Qgc2xpZGVyTXVzaWNWYWx1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgc2xpZGVyTXVzaWNWYWx1ZS5jbGFzc0xpc3QuYWRkKFwic2V0dGluZ3NTbGlkZXJWYWx1ZVwiKTtcbiAgICAgIHNsaWRlck11c2ljVmFsdWUudGV4dENvbnRlbnQgPSBgJHtzbGlkZXJNdXNpYy52YWx1ZX0lYDtcblxuICAgICAgc2xpZGVyTXVzaWMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCAoKSA9PiB7XG4gICAgICAgIC8vIENoYW5nZSB2YWx1ZWJsZSB0ZXh0XG4gICAgICAgIHNsaWRlck11c2ljVmFsdWUudGV4dENvbnRlbnQgPSBgJHtzbGlkZXJNdXNpYy52YWx1ZX0lYDtcblxuICAgICAgICAvLyBDaGFuZ2UgZ2xvYmFsIHZvbHVtZSB2YWx1ZVxuICAgICAgICBtdXNpY1ZvbHVtZSA9IHNsaWRlck11c2ljLnZhbHVlIC8gMTAwO1xuXG4gICAgICAgIC8vIFNldCBzdG9yYWdlXG4gICAgICAgIHNhdmVBdWRpb1RvU3RvcmFnZSgpO1xuXG4gICAgICAgIC8vIE1ha2Ugc3VyZSBhbGwgcGxheWluZyBhdWRpbyBjaGFuZ2Ugdm9sdW1lXG4gICAgICAgIGNoYW5nZVZvbHVtZSgpO1xuICAgICAgfSk7XG5cbiAgICAgIHNsaWRlck11c2ljLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4ge1xuICAgICAgICAvLyBDaGFuZ2UgdmFsdWVibGUgdGV4dFxuICAgICAgICBzbGlkZXJNdXNpY1ZhbHVlLnRleHRDb250ZW50ID0gYCR7c2xpZGVyTXVzaWMudmFsdWV9JWA7XG5cbiAgICAgICAgLy8gQ2hhbmdlIGdsb2JhbCB2b2x1bWUgdmFsdWVcbiAgICAgICAgbXVzaWNWb2x1bWUgPSBzbGlkZXJNdXNpYy52YWx1ZSAvIDEwMDtcblxuICAgICAgICAvLyBTZXQgc3RvcmFnZVxuICAgICAgICBzYXZlQXVkaW9Ub1N0b3JhZ2UoKTtcblxuICAgICAgICAvLyBNYWtlIHN1cmUgYWxsIHBsYXlpbmcgYXVkaW8gY2hhbmdlIHZvbHVtZVxuICAgICAgICBjaGFuZ2VWb2x1bWUoKTtcbiAgICAgIH0pO1xuXG4gICAgICBzbGlkZXJNaW5pQ29uTXVzaWMuYXBwZW5kQ2hpbGQoc2xpZGVyTXVzaWMpO1xuICAgICAgc2xpZGVyTWluaUNvbk11c2ljLmFwcGVuZENoaWxkKHNsaWRlck11c2ljVmFsdWUpO1xuXG4gICAgICBjb25zdCBzbGlkZXJNdXNpY0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICBzbGlkZXJNdXNpY0xhYmVsLmNsYXNzTGlzdC5hZGQoXCJzZXR0aW5nc1NsaWRlckxhYmVsXCIpO1xuICAgICAgc2xpZGVyTXVzaWNMYWJlbC50ZXh0Q29udGVudCA9IFwiTVVTSUMgVk9MVU1FXCI7XG5cbiAgICAgIHNsaWRlckNvbk11c2ljLmFwcGVuZENoaWxkKHNsaWRlck11c2ljTGFiZWwpO1xuICAgICAgc2xpZGVyQ29uTXVzaWMuYXBwZW5kQ2hpbGQoc2xpZGVyTWluaUNvbk11c2ljKTtcblxuICAgICAgLy8gU0ZYIHNvdW5kIHNsaWRlclxuICAgICAgY29uc3Qgc2xpZGVyQ29uU0ZYID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHNsaWRlckNvblNGWC5jbGFzc0xpc3QuYWRkKFwic2V0dGluZ1NtYWxsU2xpZGVyQ29uXCIpO1xuXG4gICAgICBjb25zdCBzbGlkZXJNaW5pQ29uU0ZYID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHNsaWRlck1pbmlDb25TRlguY2xhc3NMaXN0LmFkZChcInNldHRpbmdzU2xpZGVyTWluaUNvblwiKTtcblxuICAgICAgY29uc3Qgc2xpZGVyU0ZYID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgc2xpZGVyU0ZYLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJyYW5nZVwiKTtcbiAgICAgIHNsaWRlclNGWC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBTRlhWb2x1bWUgKiAxMDApO1xuICAgICAgc2xpZGVyU0ZYLmNsYXNzTGlzdC5hZGQoXCJzZXR0aW5nc1NsaWRlclwiKTtcblxuICAgICAgY29uc3Qgc2xpZGVyU0ZYVmFsdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgIHNsaWRlclNGWFZhbHVlLmNsYXNzTGlzdC5hZGQoXCJzZXR0aW5nc1NsaWRlclZhbHVlXCIpO1xuICAgICAgc2xpZGVyU0ZYVmFsdWUudGV4dENvbnRlbnQgPSBgJHtzbGlkZXJTRlgudmFsdWV9JWA7XG5cbiAgICAgIHNsaWRlclNGWC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsICgpID0+IHtcbiAgICAgICAgLy8gQ2hhbmdlIHZhbHVlYmxlIHRlXG4gICAgICAgIHNsaWRlclNGWFZhbHVlLnRleHRDb250ZW50ID0gYCR7c2xpZGVyU0ZYLnZhbHVlfSVgO1xuXG4gICAgICAgIC8vIENoYW5nZSBnbG9iYWwgdm9sdW1lIHZhbHVlXG4gICAgICAgIFNGWFZvbHVtZSA9IHNsaWRlclNGWC52YWx1ZSAvIDEwMDtcblxuICAgICAgICAvLyBTZXQgc3RvcmFnZVxuICAgICAgICBzYXZlQXVkaW9Ub1N0b3JhZ2UoKTtcblxuICAgICAgICAvLyBNYWtlIHN1cmUgYWxsIHBsYXlpbmcgYXVkaW8gY2hhbmdlIHZvbHVtZVxuICAgICAgICBjaGFuZ2VWb2x1bWUoKTtcbiAgICAgIH0pO1xuXG4gICAgICBzbGlkZXJTRlguYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XG4gICAgICAgIC8vIENoYW5nZSB2YWx1ZWJsZSB0ZVxuICAgICAgICBzbGlkZXJTRlhWYWx1ZS50ZXh0Q29udGVudCA9IGAke3NsaWRlclNGWC52YWx1ZX0lYDtcblxuICAgICAgICAvLyBDaGFuZ2UgZ2xvYmFsIHZvbHVtZSB2YWx1ZVxuICAgICAgICBTRlhWb2x1bWUgPSBzbGlkZXJTRlgudmFsdWUgLyAxMDA7XG5cbiAgICAgICAgLy8gU2V0IHN0b3JhZ2VcbiAgICAgICAgc2F2ZUF1ZGlvVG9TdG9yYWdlKCk7XG5cbiAgICAgICAgLy8gTWFrZSBzdXJlIGFsbCBwbGF5aW5nIGF1ZGlvIGNoYW5nZSB2b2x1bWVcbiAgICAgICAgY2hhbmdlVm9sdW1lKCk7XG4gICAgICB9KTtcblxuICAgICAgc2xpZGVyTWluaUNvblNGWC5hcHBlbmRDaGlsZChzbGlkZXJTRlgpO1xuICAgICAgc2xpZGVyTWluaUNvblNGWC5hcHBlbmRDaGlsZChzbGlkZXJTRlhWYWx1ZSk7XG5cbiAgICAgIGNvbnN0IHNsaWRlclNGWExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICBzbGlkZXJTRlhMYWJlbC5jbGFzc0xpc3QuYWRkKFwic2V0dGluZ3NTbGlkZXJMYWJlbFwiKTtcbiAgICAgIHNsaWRlclNGWExhYmVsLnRleHRDb250ZW50ID0gXCJTRlggVk9MVU1FXCI7XG5cbiAgICAgIHNsaWRlckNvblNGWC5hcHBlbmRDaGlsZChzbGlkZXJTRlhMYWJlbCk7XG4gICAgICBzbGlkZXJDb25TRlguYXBwZW5kQ2hpbGQoc2xpZGVyTWluaUNvblNGWCk7XG5cbiAgICAgIC8vIEFwcGVuZGluZyBzbGlkZXIgY29uc1xuICAgICAgc2xpZGVyQ29uLmFwcGVuZENoaWxkKHNsaWRlckNvbk1hc3Rlcik7XG4gICAgICBzbGlkZXJDb24uYXBwZW5kQ2hpbGQoc2xpZGVyQ29uTXVzaWMpO1xuICAgICAgc2xpZGVyQ29uLmFwcGVuZENoaWxkKHNsaWRlckNvblNGWCk7XG5cbiAgICAgIC8vIENyZWF0aW5nIGJhY2sgdG8gbG9iYnkgYnRuXG4gICAgICBjb25zdCBiYWNrVG9Mb2JieUJ0bkNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBiYWNrVG9Mb2JieUJ0bkNvbi5jbGFzc0xpc3QuYWRkKFwiYmFja1RvTG9iYnlCdG5Db25cIik7XG5cbiAgICAgIGNvbnN0IGJhY2tUb0xvYmJ5QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgIGJhY2tUb0xvYmJ5QnRuLmNsYXNzTGlzdC5hZGQoXCJidG5cIiwgXCJiYWNrVG9Mb2JieUJ0blwiKTtcbiAgICAgIGJhY2tUb0xvYmJ5QnRuLnRleHRDb250ZW50ID0gXCJMRUFWRSBHQU1FXCI7XG5cbiAgICAgIGxldCBpc2JhY2tUb0xvYmJ5QnRuQ2xpY2tlZCA9IGZhbHNlO1xuXG4gICAgICBiYWNrVG9Mb2JieUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBpZiAoaXNiYWNrVG9Mb2JieUJ0bkNsaWNrZWQgPT0gZmFsc2UpIHtcbiAgICAgICAgICAvLyBBdm9pZCBkb3VibGUgY2xpY2tcbiAgICAgICAgICBpc2JhY2tUb0xvYmJ5QnRuQ2xpY2tlZCA9IHRydWU7XG5cbiAgICAgICAgICAvLyBDbGVhciBzdG9yYWdlXG4gICAgICAgICAgbG9jYWxTdG9yYWdlLmNsZWFyKFwiZ2FtZVwiKTtcblxuICAgICAgICAgIC8vIFBsYXkgc291bmRcbiAgICAgICAgICBwbGF5Q2xpY2tTb3VuZCgpO1xuXG4gICAgICAgICAgLy8gUmVtb3ZlIGN1cnJlbnQgY29udGVudCBleGVwZWN0IHRoaXMgbmV3bHkgYXBwZW5kZWQgY2hpbGRcbiAgICAgICAgICB3aGlsZSAoZG9jdW1lbnQuYm9keS5jaGlsZEVsZW1lbnRDb3VudCAhPSAxKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGRvY3VtZW50LmJvZHkuZmlyc3RDaGlsZCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGxvYWRpbmdTY3JlZW4oKTtcbiAgICAgICAgICAvLyBNYWtlIHN1cmUgbm8gZG91YmxlIGNsaWNraW5nXG4gICAgICAgICAgYmFja0Fycm93SGFzQmVubkNsaWNrZWQgPSB0cnVlO1xuXG4gICAgICAgICAgLy8gRmFkZVxuICAgICAgICAgIHNldHRpbmdQYWdlQ29uLnN0eWxlLm9wYWNpdHkgPSBcIjBcIjtcblxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChzZXR0aW5nUGFnZUNvbik7XG4gICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBiYWNrVG9Mb2JieUJ0bkNvbi5hcHBlbmRDaGlsZChiYWNrVG9Mb2JieUJ0bik7XG5cbiAgICAgIC8vIEFwcGVuZGluZyBsYXN0XG4gICAgICBzZXR0aW5nUGFnZUNvbi5hcHBlbmRDaGlsZChiYWNrQXJyb3cpO1xuICAgICAgc2V0dGluZ1BhZ2VDb24uYXBwZW5kQ2hpbGQoc2xpZGVyQ29uKTtcblxuICAgICAgaWYgKCFkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvYWRpbmdTY3JlZW5FbFwiKSkge1xuICAgICAgICBzZXR0aW5nUGFnZUNvbi5hcHBlbmRDaGlsZChiYWNrVG9Mb2JieUJ0bkNvbik7XG4gICAgICB9XG5cbiAgICAgIHNldHRpbmdQYWdlQ29uLnN0eWxlLm9wYWNpdHkgPSBcIjBcIjtcblxuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzZXR0aW5nUGFnZUNvbik7XG5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAvLyBUcmFuc2lzdGlvbndcbiAgICAgICAgc2V0dGluZ1BhZ2VDb24uc3R5bGUub3BhY2l0eSA9IFwiMVwiO1xuICAgICAgfSwgNTApO1xuICAgIH07XG4gIH0pO1xufTtcblxuY29uc3QgYXR0YWNrRE9NID0gKGF0dGFja2luZ1BMYXllciwgcmVjaWV2aW5nUGxheWVyKSA9PiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgIC8vIENyZWF0aW5nIGJvYXJkc1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRlbnQuY2xhc3NMaXN0LmFkZChcImNvbnRlbnRDb25cIiwgXCJBSUdhbWVDb25cIik7XG5cbiAgICAvLyBDcmVhdGluZyBoZWFkZXJcbiAgICBjb25zdCBoZWFkZXJDb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhlYWRlckNvbi5jbGFzc0xpc3QuYWRkKFxuICAgICAgXCJsb2FkaW5nc2NyZWVuSGVhZGVyQ29uXCIsXG4gICAgICBcImluZ2FtZUhlYWRlckNvblwiLFxuICAgICAgXCJBSUdhbWVIZWFkZXJDb25cIlxuICAgICk7XG5cbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcImxvYWRpbmdzY3JlZW5IZWFkZXJcIiwgXCJpbmdhbWVIZWFkZXJcIik7XG4gICAgaGVhZGVyLnRleHRDb250ZW50ID0gXCJCQVRUTEVTSElQU1wiO1xuXG4gICAgaGVhZGVyQ29uLmFwcGVuZENoaWxkKGhlYWRlcik7XG5cbiAgICAvLyBDcmVhdGluZyBnYW1lYm9hcmRzXG4gICAgY29uc3QgZ2FtZWJvYXJkc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZ2FtZWJvYXJkc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY29udGVudENvblwiKTtcblxuICAgIGNvbnN0IGVuZW15R2FtZWJvYXJkQ29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBlbmVteUdhbWVib2FyZENvbi5jbGFzc0xpc3QuYWRkKFwiZW5lbXlHYW1lYm9hcmRDb25cIik7XG5cbiAgICBjb25zdCBlbmVteUdhbWVib2FyZEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIGVuZW15R2FtZWJvYXJkSGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJlbmVteUdhbWVib2FyZEhlYWRlclwiKTtcbiAgICBlbmVteUdhbWVib2FyZEhlYWRlci50ZXh0Q29udGVudCA9IFwiRU5FTVkgU0VBU1wiO1xuXG4gICAgY29uc3QgZW5lbXlHYW1lYm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGVuZW15R2FtZWJvYXJkLmNsYXNzTGlzdC5hZGQoXCJlbmVteUdhbWVib2FyZFwiKTtcblxuICAgIGVuZW15R2FtZWJvYXJkQ29uLmFwcGVuZENoaWxkKGVuZW15R2FtZWJvYXJkKTtcbiAgICBlbmVteUdhbWVib2FyZENvbi5hcHBlbmRDaGlsZChlbmVteUdhbWVib2FyZEhlYWRlcik7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIC8vIERpc3BsYXkgZnJpZW5kbHkgaGVhZGVyIGFmdGVyIDRzXG4gICAgICBmcmllbmRseUJvYXJkSGVhZGVyLnN0eWxlLm9wYWNpdHkgPSBcIjFcIjtcbiAgICB9LCAyMDAwKTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgLy8gRGlzcGxheSBlbmVteSBoZWFkZXIgYWZ0ZXIgNXMgd2l0aCByZWRcbiAgICAgIGVuZW15R2FtZWJvYXJkSGVhZGVyLnN0eWxlLm9wYWNpdHkgPSBcIjFcIjtcbiAgICAgIGVuZW15R2FtZWJvYXJkSGVhZGVyLnN0eWxlLmNvbG9yID0gXCJyZWRcIjtcbiAgICB9LCAzMDAwKTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgLy8gU2V0IGVuZW15IGhlYWRlciB0dXJuIHdoaXRlIGFnYWluXG4gICAgICBlbmVteUdhbWVib2FyZEhlYWRlci5zdHlsZS5jb2xvciA9IFwid2hpdGVcIjtcbiAgICB9LCA1MDAwKTtcblxuICAgIC8vIENyZWF0aW5nIHdhdmUgYW5pbWF0aW9uIGVsZW1lbnRcbiAgICBjb25zdCBzZWFXYXZlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzZWFXYXZlLmNsYXNzTGlzdC5hZGQoXCJzZWFXYXZlXCIpO1xuXG4gICAgLy8gQ3JlYXRpbmcgdGhlIGZyaWVuZGx5IGJvYXJkXG4gICAgY29uc3QgZnJpZW5kbHlCb2FyZGNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZnJpZW5kbHlCb2FyZGNvbi5jbGFzc0xpc3QuYWRkKFwiZnJpZW5kbHlCb2FyZGNvblwiKTtcblxuICAgIGNvbnN0IGZyaWVuZGx5Qm9hcmRIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBmcmllbmRseUJvYXJkSGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJmcmllbmRseUJvYXJkSGVhZGVyXCIpO1xuICAgIGZyaWVuZGx5Qm9hcmRIZWFkZXIudGV4dENvbnRlbnQgPSBcIkZSSUVORExZIFNFQVNcIjtcblxuICAgIGNvbnN0IGZyaWVuZGx5Qm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGZyaWVuZGx5Qm9hcmQuY2xhc3NMaXN0LmFkZChcImZyaWVuZGx5Qm9hcmRcIik7XG5cbiAgICBmcmllbmRseUJvYXJkY29uLmFwcGVuZENoaWxkKGZyaWVuZGx5Qm9hcmRIZWFkZXIpO1xuICAgIGZyaWVuZGx5Qm9hcmRjb24uYXBwZW5kQ2hpbGQoZnJpZW5kbHlCb2FyZCk7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIC8vIERpc3BsYXkgZ2FtZWJvYXJkcyBhZnRlciAzc1xuICAgICAgZW5lbXlHYW1lYm9hcmQuc3R5bGUub3BhY2l0eSA9IFwiMVwiO1xuICAgICAgZnJpZW5kbHlCb2FyZC5zdHlsZS5vcGFjaXR5ID0gXCIxXCI7XG4gICAgfSwgMTAwMCk7XG5cbiAgICBsZXQgZ2FtZVN0b3BwZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHBvcHVsYXRlRW5lbXlHYW1lYm9hcmQgPSAoKSA9PiB7XG4gICAgICAvLyBDcmVhdGUgYWxsIGdyaWQgc2xvdHNcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDEwOyBpKyspIHtcbiAgICAgICAgZm9yIChsZXQgaiA9IDE7IGogPD0gMTA7IGorKykge1xuICAgICAgICAgIGNvbnN0IHNsb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgIHNsb3QuY2xhc3NMaXN0LmFkZChcImVuZW15R3JpZFNsb3RcIik7XG5cbiAgICAgICAgICAvLyBJZiBpdCBoYXZlIGJlZW4gYXR0YWNrZWRcbiAgICAgICAgICBsZXQgaGF2ZUJlZW5BdHRhY2tlZCA9IGZhbHNlO1xuXG4gICAgICAgICAgLy8gQ2hlY2tzIGlmIGl0IGhhdmUgYmVlbiBoaXRcbiAgICAgICAgICByZWNpZXZpbmdQbGF5ZXIuYm9hcmQuaGl0cy5mb3JFYWNoKChjb29yKSA9PiB7XG4gICAgICAgICAgICAvLyBDb21wYXJlIGNvb3JkaW5hdGVzXG4gICAgICAgICAgICBpZiAoaiA9PSBjb29yWzBdICYmIGkgPT0gY29vclsxXSkge1xuICAgICAgICAgICAgICBzbG90LmNsYXNzTGlzdC5hZGQoXCJlbmVteUdyaWRTbG90SGl0XCIpO1xuICAgICAgICAgICAgICBoYXZlQmVlbkF0dGFja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICAvLyBDaGVja3MgaWYgaXQgaGF2ZSBiZWVuIGF0dGFja2VkIGJ1dCBtaXNzZWRcbiAgICAgICAgICByZWNpZXZpbmdQbGF5ZXIuYm9hcmQubWlzc2VkLmZvckVhY2goKGNvb3IpID0+IHtcbiAgICAgICAgICAgIC8vIENvbXBhcmUgY29vcmRpbmF0ZXNcbiAgICAgICAgICAgIGlmIChqID09IGNvb3JbMF0gJiYgaSA9PSBjb29yWzFdKSB7XG4gICAgICAgICAgICAgIHNsb3QuY2xhc3NMaXN0LmFkZChcImVuZW15R3JpZFNsb3RNaXNzZWRcIik7XG4gICAgICAgICAgICAgIGhhdmVCZWVuQXR0YWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgLy8gSWYgaXQgaGF2ZW50IGJlZW4gYXR0YWNrZWQsIG1ha2UgcmVhZHkgZm9yIGl0XG4gICAgICAgICAgaWYgKGhhdmVCZWVuQXR0YWNrZWQgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHNsb3QuY2xhc3NMaXN0LmFkZChcImVuZW15R3JpZFNsb3RVbmF0dGFja2VkXCIpO1xuICAgICAgICAgICAgc2xvdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgICAvLyBPbiBjbGljayBhdHRhY2sgQUkgd2l0aCBjb29yZGluYXRlc1xuICAgICAgICAgICAgICBpZiAoZ2FtZVN0b3BwZWQgIT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBnYW1lU3RvcHBlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgYXR0YWNraW5nKFtqLCBpXSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGVuZW15R2FtZWJvYXJkLmFwcGVuZENoaWxkKHNsb3QpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IHBvcHVsYXRlRnJpZW5kbHlHYW1lYm9hcmQgPSAoKSA9PiB7XG4gICAgICAvLyBDcmVhdGUgYWxsIGdyaWQgc2xvdHNcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDEwOyBpKyspIHtcbiAgICAgICAgZm9yIChsZXQgaiA9IDE7IGogPD0gMTA7IGorKykge1xuICAgICAgICAgIGNvbnN0IHNsb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgIHNsb3QuY2xhc3NMaXN0LmFkZChcImVuZW15R3JpZFNsb3RcIik7XG5cbiAgICAgICAgICAvLyBJZiBhIHNoaXAgaGFzIGJlZW4gaGl0XG4gICAgICAgICAgYXR0YWNraW5nUExheWVyLmJvYXJkLmhpdHMuZm9yRWFjaCgoY29vcikgPT4ge1xuICAgICAgICAgICAgLy8gQ29tcGFyZSBjb29yZGluYXRlc1xuICAgICAgICAgICAgaWYgKGogPT0gY29vclswXSAmJiBpID09IGNvb3JbMV0pIHtcbiAgICAgICAgICAgICAgc2xvdC5jbGFzc0xpc3QuYWRkKFwiZW5lbXlHcmlkU2xvdEhpdFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICAvLyBJZiB0aGUgZW5lbXkgaGF2ZSBtaXNzZWRcbiAgICAgICAgICBhdHRhY2tpbmdQTGF5ZXIuYm9hcmQubWlzc2VkLmZvckVhY2goKGNvb3IpID0+IHtcbiAgICAgICAgICAgIC8vIENvbXBhcmUgY29vcmRpbmF0ZXNcbiAgICAgICAgICAgIGlmIChqID09IGNvb3JbMF0gJiYgaSA9PSBjb29yWzFdKSB7XG4gICAgICAgICAgICAgIHNsb3QuY2xhc3NMaXN0LmFkZChcImVuZW15R3JpZFNsb3RNaXNzZWRcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgLy8gSWYgc2xvdCBpcyBhIHNoaXBcbiAgICAgICAgICBhdHRhY2tpbmdQTGF5ZXIuYm9hcmQuc2hpcHMuZm9yRWFjaCgoc2hpcEVsKSA9PiB7XG4gICAgICAgICAgICBzaGlwRWwuY29vci5mb3JFYWNoKChjb29yKSA9PiB7XG4gICAgICAgICAgICAgIC8vIENvbXBhcmUgY29vcmRpbmF0ZXNcbiAgICAgICAgICAgICAgaWYgKGogPT0gY29vclswXSAmJiBpID09IGNvb3JbMV0pIHtcbiAgICAgICAgICAgICAgICBzbG90LmNsYXNzTGlzdC5hZGQoXCJmcmllbmRseUdyaWRTbG90U2hpcFwiKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBmcmllbmRseUJvYXJkLmFwcGVuZENoaWxkKHNsb3QpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIHBvcHVsYXRlRW5lbXlHYW1lYm9hcmQoKTtcbiAgICBwb3B1bGF0ZUZyaWVuZGx5R2FtZWJvYXJkKCk7XG5cbiAgICBjb25zdCBhdHRhY2tpbmcgPSAoW3gsIHldKSA9PiB7XG4gICAgICAvLyBBdHRhY2sgcGxheWVyIGJvYXJkXG5cbiAgICAgIGxldCBhdHRhY2tlZExlbmd0aCA9IHJlY2lldmluZ1BsYXllci5ib2FyZC5oaXRzLmxlbmd0aDtcblxuICAgICAgcmVjaWV2aW5nUGxheWVyLmJvYXJkLnJlY2lldmVBdHRhY2soW3gsIHldKTtcblxuICAgICAgLy8gQ2hlY2sgaWYgYSBzaGlwIHdhcyBoaXRcbiAgICAgIGlmIChyZWNpZXZpbmdQbGF5ZXIuYm9hcmQuaGl0cy5sZW5ndGggPT0gYXR0YWNrZWRMZW5ndGgpIHtcbiAgICAgICAgcGxheVNwbGFzaFNvdW5kKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwbGF5RXhwbG9zaW9uU291bmQoKTtcbiAgICAgIH1cblxuICAgICAgLy8gUmVsb2FkIGJvdGggZ2FtZWJvYXJkc1xuICAgICAgd2hpbGUgKGVuZW15R2FtZWJvYXJkLmxhc3RDaGlsZCkge1xuICAgICAgICBlbmVteUdhbWVib2FyZC5yZW1vdmVDaGlsZChlbmVteUdhbWVib2FyZC5sYXN0Q2hpbGQpO1xuICAgICAgfVxuXG4gICAgICBwb3B1bGF0ZUVuZW15R2FtZWJvYXJkKCk7XG5cbiAgICAgIC8vIElmIG9uZSB3b24gZGlzcGxheSB3aW4gc2NyZWVuXG4gICAgICBpZiAocmVjaWV2aW5nUGxheWVyLmJvYXJkLmFsbFN1bmsoKSA9PSB0cnVlKSB7XG4gICAgICAgIGdhbWVTdG9wcGVkID0gdHJ1ZTtcblxuICAgICAgICBjb25zdCB3aW5TY3JlZW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB3aW5TY3JlZW4uY2xhc3NMaXN0LmFkZChcIndpblNjcmVlblBsYXllclwiKTtcblxuICAgICAgICBjb25zdCB3aW5TY3JlZW5UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgIHdpblNjcmVlblRleHQuY2xhc3NMaXN0LmFkZChcIndpblNjcmVlblRleHRcIik7XG4gICAgICAgIHdpblNjcmVlblRleHQudGV4dENvbnRlbnQgPSBgJHthdHRhY2tpbmdQTGF5ZXIubmFtZX0gV09OIFRIRSBHQU1FIWA7XG5cbiAgICAgICAgd2luU2NyZWVuLmFwcGVuZENoaWxkKHdpblNjcmVlblRleHQpO1xuXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQod2luU2NyZWVuKTtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB3aW5TY3JlZW4uc3R5bGUuYm90dG9tID0gXCIwcHhcIjtcbiAgICAgICAgfSwgNTApO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB3aGlsZSAoY29udGVudC5sYXN0Q2hpbGQpIHtcbiAgICAgICAgICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoY29udGVudC5sYXN0Q2hpbGQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgNDUwMCk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHdpblNjcmVlbi5zdHlsZS5vcGFjaXR5ID0gXCIwXCI7XG4gICAgICAgIH0sIDc1MDApO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB3aGlsZSAoZG9jdW1lbnQuYm9keS5sYXN0Q2hpbGQpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZG9jdW1lbnQuYm9keS5sYXN0Q2hpbGQpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBsb2FkaW5nU2NyZWVuKCk7XG4gICAgICAgIH0sIDExNTAwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGNvbnRlbnQuc3R5bGUub3BhY2l0eSA9IFwiMFwiO1xuICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChjb250ZW50KTtcbiAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgIH0sIDMwMDApO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBBcHBlbmRpbmdcbiAgICBnYW1lYm9hcmRzQ29udGFpbmVyLmFwcGVuZENoaWxkKGVuZW15R2FtZWJvYXJkQ29uKTtcbiAgICBnYW1lYm9hcmRzQ29udGFpbmVyLmFwcGVuZENoaWxkKHNlYVdhdmUpO1xuICAgIGdhbWVib2FyZHNDb250YWluZXIuYXBwZW5kQ2hpbGQoZnJpZW5kbHlCb2FyZGNvbik7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIC8vIEZhZGUgaW4gYWZ0ZXIgMS41c1xuICAgICAgZW5lbXlHYW1lYm9hcmRDb24uc3R5bGUub3BhY2l0eSA9IFwiMVwiO1xuICAgICAgc2VhV2F2ZS5zdHlsZS5vcGFjaXR5ID0gXCIxXCI7XG4gICAgICBmcmllbmRseUJvYXJkY29uLnN0eWxlLm9wYWNpdHkgPSBcIjFcIjtcbiAgICB9LCA1MDApO1xuXG4gICAgLy8gQXBwZW5kaW5nIGFsbFxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyQ29uKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGdhbWVib2FyZHNDb250YWluZXIpO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAvLyBGYWRlIGluIGFmdGVyIDAuNXNcbiAgICAgIGhlYWRlckNvbi5zdHlsZS5vcGFjaXR5ID0gXCIxXCI7XG4gICAgfSwgNTAwKTtcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGVudCk7XG4gIH0pO1xufTtcblxuY29uc3QgcmVzdW1lR2FtZSA9ICgpID0+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGVudC5jbGFzc0xpc3QuYWRkKFwiY29udGVudENvblwiLCBcInJlc3VtZUdhbWVCYWNrZ3JvdW5kXCIpO1xuXG4gICAgY29uc3QgbWVudUNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWVudUNvbi5jbGFzc0xpc3QuYWRkKFwicmVzdW1lR2FtZUNvblwiLCBcImNvbnRlbnRDb25cIik7XG5cbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcInJlc3VtZUdhbWVUZXh0XCIpO1xuICAgIGhlYWRlci50ZXh0Q29udGVudCA9XG4gICAgICBcIllPVSBIQVZFIEFOIFVORklOSVNIRUQgR0FNRSwgRE8gWU9VIFdBTlQgVE8gQ09OVElOVUU/XCI7XG5cbiAgICBjb25zdCBidG5Db24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGJ0bkNvbi5jbGFzc0xpc3QuYWRkKFwicmVzdW1lR2FtZUJ0bkNvblwiKTtcblxuICAgIGNvbnN0IGJhY2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGJhY2tCdG4uY2xhc3NMaXN0LmFkZChcImJ0blwiLCBcInJlc3VtZUdhbWVCYWNrQnRuXCIpO1xuICAgIGJhY2tCdG4udGV4dENvbnRlbnQgPSBcIk5PXCI7XG5cbiAgICBsZXQgYnRuQ2xpY2tlZCA9IGZhbHNlO1xuXG4gICAgYmFja0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgaWYgKGJ0bkNsaWNrZWQgPT0gZmFsc2UpIHtcbiAgICAgICAgYnRuQ2xpY2tlZCA9IHRydWU7XG4gICAgICAgIHBsYXlDbGlja1NvdW5kKCk7XG5cbiAgICAgICAgLy8gQ2xlYXIgc3RvcmFnZVxuICAgICAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoXCJnYW1lXCIpO1xuXG4gICAgICAgIGNvbnRlbnQuc3R5bGUub3BhY2l0eSA9IFwiMFwiO1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoY29udGVudCk7XG4gICAgICAgIH0sIDIwMDApO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgYmFja0J0bi5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCAoKSA9PiB7XG4gICAgICBwbGF5QnV0dG9uU2hpZnRTb3VuZCgpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgcmVzdW1lQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICByZXN1bWVCdG4uY2xhc3NMaXN0LmFkZChcImJ0blwiLCBcInJlc3VtZUdhbWVSZXN1bWVCdG5cIik7XG4gICAgcmVzdW1lQnRuLnRleHRDb250ZW50ID0gXCJZRVNcIjtcblxuICAgIHJlc3VtZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgaWYgKGJ0bkNsaWNrZWQgPT0gZmFsc2UpIHtcbiAgICAgICAgYnRuQ2xpY2tlZCA9IHRydWU7XG4gICAgICAgIHBsYXlDbGlja1NvdW5kKCk7XG4gICAgICAgIHJlc29sdmUoKTtcblxuICAgICAgICBjb250ZW50LnN0eWxlLm9wYWNpdHkgPSBcIjBcIjtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGNvbnRlbnQpO1xuICAgICAgICB9LCAyMDAwKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJlc3VtZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCAoKSA9PiB7XG4gICAgICBwbGF5QnV0dG9uU2hpZnRTb3VuZCgpO1xuICAgIH0pO1xuXG4gICAgYnRuQ29uLmFwcGVuZENoaWxkKGJhY2tCdG4pO1xuICAgIGJ0bkNvbi5hcHBlbmRDaGlsZChyZXN1bWVCdG4pO1xuXG4gICAgbWVudUNvbi5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgIG1lbnVDb24uYXBwZW5kQ2hpbGQoYnRuQ29uKTtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudUNvbik7XG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuICB9KTtcbn07XG5cbmV4cG9ydCB7IGxvYWRpbmdTY3JlZW4sIHJlc3VtZUdhbWUsIHR3b1BsYXllciwgcGxheUFnYWluc3RBSSwgcGxhY2VTaGlwc0RPTSB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL2NvbnRyb2xsZXJcIjtcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
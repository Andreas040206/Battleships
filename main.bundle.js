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
    bottom: 35vh;
  }
  80% {
    bottom: 38vh;
  }
  100% {
    bottom: 38.2vh;
  }
}

.seaWave {
  position: absolute;
  bottom: 40vh;
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
  height: 70vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 40px;
  align-items: center;
  justify-content: center;
}

.placementShipsCon {
  display: flex;
  flex-direction: row;
  gap: 10px;
  width: 32vh;
  height: 32vh;
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
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,qBAAqB;EACrB,4CAAqC;AACvC;;AAEA;EACE,yBAAyB;EACzB,WAAW;EACX,qBAAqB;EACrB,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,uBAAuB;EACvB,uBAAuB;EACvB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,yBAAyB;EACzB,qBAAqB;EACrB,YAAY;EACZ,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;EACE,WAAW;AACb;;AAEA,yBAAyB;;AAEzB;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,sBAAsB;EACtB,gBAAgB;EAChB,aAAa;EACb,UAAU;EACV,uBAAuB;EACvB,gBAAgB;EAChB,cAAc;AAChB;;AAEA;EACE,0BAA0B;EAC1B,YAAY;EACZ,kBAAkB;EAClB,aAAa;EACb,gEAAgE;EAChE,uBAAuB;AACzB;;AAEA;EACE;IACE,aAAa;EACf;EACA;IACE,YAAY;EACd;AACF;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,gBAAgB;EAChB,mBAAmB;EACnB,uBAAuB;EACvB,cAAc;AAChB;;AAEA;EACE,uBAAuB;EACvB,uBAAuB;EACvB,yBAAyB;EACzB,yBAAyB;EACzB,qBAAqB;EACrB,YAAY;AACd;;AAEA;EACE,oCAAoC;AACtC;;AAEA,6BAA6B;;AAE7B,iBAAiB;AACjB;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;EACd,UAAU;AACZ;;AAEA;EACE,sBAAsB;EACtB,eAAe;EACf,aAAa;EACb,eAAe;AACjB;;AAEA;EACE,0EAA0E;EAC1E,eAAe;EACf,yBAAyB;EACzB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,yBAAyB;EACzB,yBAAyB;EACzB,eAAe;EACf,cAAc;EACd,UAAU;AACZ;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,aAAa;EACb,sCAAsC;EACtC,mCAAmC;EACnC,oCAAoC;EACpC,cAAc;EACd,UAAU;AACZ;;AAEA;EACE;IACE,YAAY;EACd;EACA;IACE,YAAY;EACd;EACA;IACE,cAAc;EAChB;AACF;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,YAAY;EACZ,YAAY;EACZ,yBAAyB;EACzB,4DAA4D;EAC5D,cAAc;EACd,UAAU;AACZ;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,YAAY;EACZ,YAAY;EACZ,yBAAyB;EACzB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,cAAc;EACd,UAAU;AACZ;;AAEA;EACE,YAAY;EACZ,yBAAyB;EACzB,kBAAkB;EAClB,cAAc;EACd,UAAU;AACZ;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,aAAa;EACb,sCAAsC;EACtC,mCAAmC;EACnC,oCAAoC;EACpC,cAAc;EACd,UAAU;AACZ;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,iCAAiC;AACnC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;EACzB,eAAe;EACf,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,aAAa;EACb,YAAY;EACZ,cAAc;EACd,0BAA0B;EAC1B,UAAU;AACZ;;AAEA;EACE,YAAY;EACZ,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,yBAAyB;EACzB,eAAe;EACf,UAAU;EACV,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,aAAa;EACb,YAAY;EACZ,WAAW;EACX,0BAA0B;AAC5B;;AAEA,oBAAoB;AACpB;EACE,YAAY;EACZ,aAAa;EACb,yBAAyB;EACzB,uBAAuB;EACvB,eAAe;EACf,aAAa;AACf;;AAEA;EACE;IACE,YAAY;EACd;EACA;IACE,WAAW;EACb;AACF;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,UAAU;AACZ;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,eAAe;EACf,SAAS;EACT,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;EACT,WAAW;EACX,YAAY;AACd;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,iCAAiC;EACjC,YAAY;AACd;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,uBAAuB;AACzB;;AAEA;EACE,yBAAyB;EACzB,YAAY;AACd;;AAEA;EACE,yBAAyB;EACzB,cAAc;AAChB;AACA;EACE,QAAQ;AACV;;AAEA;EACE,yBAAyB;EACzB,YAAY;AACd;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,gEAAgE;AAClE;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,aAAa;EACb,uBAAuB;EACvB,kBAAkB;EAClB,kBAAkB;EAClB,qBAAqB;AACvB;;AAEA;EACE;IACE,gBAAgB;EAClB;AACF;;AAEA;EACE,cAAc;EACd,UAAU;AACZ;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,uBAAuB;AACzB;;AAEA;EACE,QAAQ;EACR,uBAAuB;AACzB;;AAEA;EACE,YAAY;EACZ,qBAAqB;EACrB,eAAe;EACf,uBAAuB;AACzB;;AAEA;EACE,eAAe;EACf,YAAY;AACd;;AAEA;EACE,gBAAgB;EAChB,cAAc;EACd,yBAAyB;EACzB,uBAAuB;EACvB,uBAAuB;AACzB;;AAEA;EACE,QAAQ;AACV;;AAEA;EACE,YAAY;EACZ,yBAAyB;AAC3B;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,iBAAiB;EACjB,YAAY;EACZ,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,yBAAyB;EACzB,0BAA0B;EAC1B,eAAe;EACf,oBAAoB;AACtB;;AAEA;EACE,YAAY;EACZ,yBAAyB;EACzB,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,YAAY;EACZ,yBAAyB;EACzB,gBAAgB;AAClB;;AAEA;EACE,sBAAsB;EACtB,eAAe;EACf,UAAU;EACV,WAAW;EACX,UAAU;EACV,gBAAgB;AAClB;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,MAAM;EACN,eAAe;EACf,aAAa;EACb,YAAY;EACZ,UAAU;EACV,yBAAyB;EACzB,cAAc;AAChB;;AAEA;EACE,sBAAsB;EACtB,eAAe;EACf,YAAY;EACZ,SAAS;EACT,QAAQ;EACR,gBAAgB;AAClB;;AAEA;EACE,UAAU;EACV,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,gBAAgB;EAChB,QAAQ;AACV;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;AACzB;;AAEA;EACE,YAAY;EACZ,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,WAAW;AACb;;AAEA;EACE,gBAAgB;EAChB,WAAW;AACb;;AAEA;EACE,WAAW;EACX,WAAW;EACX,kBAAkB;EAClB,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,wBAAwB;EACxB,WAAW;AACb;;AAEA;EACE,qBAAqB;EACrB,WAAW;AACb;;AAEA;EACE,gBAAgB;EAChB,WAAW;AACb;;AAEA;EACE,wBAAwB;EACxB,YAAY;EACZ,WAAW;EACX,yBAAyB;EACzB,kBAAkB;EAClB,eAAe;EACf,YAAY;AACd;;AAEA;EACE,qBAAqB;EACrB,YAAY;EACZ,WAAW;EACX,yBAAyB;EACzB,kBAAkB;EAClB,eAAe;EACf,YAAY;AACd;;AAEA;EACE,gBAAgB;EAChB,YAAY;EACZ,WAAW;EACX,yBAAyB;EACzB,kBAAkB;EAClB,eAAe;EACf,YAAY;AACd;;AAEA;EACE,QAAQ;EACR,eAAe;EACf,YAAY;EACZ,aAAa;EACb,sCAAsC;EACtC,0BAA0B;EAC1B,uBAAuB;EACvB,cAAc;AAChB;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,yBAAyB;EACzB,gBAAgB;EAChB,QAAQ;AACV;;AAEA;EACE,YAAY;EACZ,yBAAyB;EACzB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,uBAAuB;AACzB;;AAEA;EACE,yBAAyB;EACzB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,YAAY;EACZ,uBAAuB;EACvB,gBAAgB;AAClB;;AAEA;EACE,uBAAuB;EACvB,yBAAyB;EACzB,YAAY;AACd","sourcesContent":["@font-face {\n  font-family: \"MyFont\";\n  src: url(\"./BlackOpsOne-Regular.ttf\");\n}\n\nbody {\n  background-color: #000fb7;\n  margin: 0px;\n  font-family: \"MyFont\";\n  user-select: none;\n}\n\n.hide {\n  visibility: hidden;\n}\n\n.btn {\n  height: min(70px, 10vw);\n  width: min(200px, 30vw);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: min(30px, 6vw);\n  font-family: \"MyFont\";\n  border: none;\n  transition: 0.3s;\n  user-select: none;\n}\n\n.btn:hover {\n  scale: 1.05;\n}\n\n/* Loadingscreen styles */\n\n.contentCon {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.loadingscreenHeaderCon {\n  height: min(85px, 9vw);\n  margin-top: 10vh;\n  display: flex;\n  width: 80%;\n  justify-content: center;\n  overflow: hidden;\n  transition: 4s;\n}\n\n.loadingscreenHeader {\n  font-size: min(10vw, 90px);\n  color: white;\n  position: relative;\n  bottom: -60px;\n  transition-timing-function: cubic-bezier(0.13, 0.65, 0.46, 1.57);\n  transition-duration: 4s;\n}\n\n@keyframes move {\n  0% {\n    bottom: -10px;\n  }\n  100% {\n    bottom: -1px;\n  }\n}\n\n.loadingscreenBtnCon {\n  display: flex;\n  justify-content: center;\n  margin-top: 30vh;\n  gap: min(5vw, 50px);\n  width: min(80vw, 600px);\n  transition: 4s;\n}\n\n.loadingscreenStartBtn {\n  height: min(70px, 15vw);\n  width: min(200px, 45vw);\n  font-size: min(25px, 6vw);\n  background-color: #0180ff;\n  font-family: \"Myfont\";\n  color: white;\n}\n\n.loadingscreenStartBtn:hover {\n  background-color: rgb(191, 191, 191);\n}\n\n/* Loadingscreen styles END */\n\n/* Ingame styles*/\n.AIGameCon {\n  transition: 2s;\n}\n\n.AIGameHeaderCon {\n  transition: 2s;\n  opacity: 0;\n}\n\n.ingameHeaderCon {\n  height: min(40px, 5vw);\n  margin-top: 3vh;\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.ingameHeader {\n  animation: move 3s cubic-bezier(0.13, 0.65, 0.46, 1.57) infinite alternate;\n  margin-top: 0px;\n  font-size: min(40px, 5vw);\n  flex-wrap: wrap;\n}\n\n.enemyGameboardCon {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 3vh;\n}\n\n.enemyGameboardHeader {\n  color: rgb(255, 255, 255);\n  font-size: min(30px, 6vw);\n  margin-top: 2vh;\n  transition: 2s;\n  opacity: 0;\n}\n\n.enemyGameboard {\n  height: 35vh;\n  width: 35vh;\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  border: 2px solid rgb(255, 255, 255);\n  transition: 2s;\n  opacity: 0;\n}\n\n@keyframes gameboardWave {\n  0% {\n    bottom: 35vh;\n  }\n  80% {\n    bottom: 38vh;\n  }\n  100% {\n    bottom: 38.2vh;\n  }\n}\n\n.seaWave {\n  position: absolute;\n  bottom: 40vh;\n  height: 10vh;\n  width: 100vw;\n  background-color: #0180ff;\n  animation: gameboardWave 2.5s ease-in-out infinite alternate;\n  transition: 2s;\n  opacity: 0;\n}\n\n.friendlyBoardcon {\n  position: absolute;\n  bottom: 0;\n  height: 42vh;\n  width: 100vw;\n  background-color: #0180ff;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  transition: 2s;\n  opacity: 0;\n}\n\n.friendlyBoardHeader {\n  color: white;\n  font-size: min(30px, 6vw);\n  margin-bottom: 1vh;\n  transition: 2s;\n  opacity: 0;\n}\n\n.friendlyBoard {\n  height: 35vh;\n  width: 35vh;\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  border: 2px solid rgb(255, 255, 255);\n  transition: 2s;\n  opacity: 0;\n}\n\n.enemyGridSlot {\n  border: solid 2px white;\n}\n\n.enemyGridSlotMissed {\n  background-color: #a6a6a6;\n}\n\n.enemyGridSlotUnattacked {\n  transition: 0.3s;\n}\n\n.enemyGridSlotUnattacked:hover {\n  background-color: #5d64b5;\n}\n\n.friendlyGridSlotShip {\n  background-color: rgb(65, 65, 65);\n}\n\n.enemyGridSlotHit {\n  background-color: #ff0000;\n}\n\n.winScreenPlayer {\n  background-color: #0180ff;\n  position: fixed;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  width: 100vw;\n  bottom: -100vh;\n  transition: 4s ease-in-out;\n  z-index: 1;\n}\n\n.winScreenText {\n  color: white;\n  font-size: 70px;\n  text-align: center;\n}\n\n.winScreenAI {\n  background-color: #000fb7;\n  position: fixed;\n  z-index: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  width: 100vw;\n  top: -100vh;\n  transition: 4s ease-in-out;\n}\n\n/* Placement styles*/\n.placementCon {\n  width: 300vw;\n  height: 100vh;\n  background-color: #0180ff;\n  transition: 6s ease-out;\n  position: fixed;\n  right: -300vw;\n}\n\n@keyframes placementHeaderWave {\n  0% {\n    bottom: -2vh;\n  }\n  100% {\n    bottom: 0vh;\n  }\n}\n\n.gridPlacementSlot {\n  border: 2px white solid;\n}\n\n.placementBoard {\n  height: 35vh;\n  width: 35vh;\n  opacity: 1;\n}\n\n.dragAndDropCon {\n  height: 70vh;\n  width: 100vw;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  gap: 40px;\n  align-items: center;\n  justify-content: center;\n}\n\n.placementShipsCon {\n  display: flex;\n  flex-direction: row;\n  gap: 10px;\n  width: 32vh;\n  height: 32vh;\n}\n\n.placementShipEl {\n  display: grid;\n  border: solid 2px white;\n  width: 3.5vh;\n}\n\n.shipDragCon {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n}\n\n.placementRotateBtn {\n  background-color: rgb(65, 65, 65);\n  color: white;\n}\n\n.placementSelectedShipEl {\n  box-shadow: 0px 0px 10px white;\n}\n\n.placementHoveredSlot {\n  background-color: #7b7b7b;\n}\n\n.placementHoveredSlotOutOfRange {\n  background-color: #c55858;\n}\n\n.placementLowerBtnCon {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  width: min(65vw, 700px);\n}\n\n.placementResetBtn {\n  background-color: #c55858;\n  color: white;\n}\n\n.placementNextBtn {\n  background-color: #16599d;\n  color: #0180ff;\n}\n.placementNextBtn:hover {\n  scale: 1;\n}\n\n.placementNextBtnReady {\n  background-color: #05c6a9;\n  color: white;\n}\n\n.placementNextBtnReady:hover {\n  scale: 1.05;\n}\n\n.placementHeader {\n  animation: placementHeaderWave 3s ease-in-out infinite alternate;\n}\n\n.placementHeaderCon {\n  height: auto;\n  width: 90vw;\n  display: flex;\n  justify-content: center;\n  text-align: center;\n  margin-bottom: 3vh;\n  margin-top: calc(1vh);\n}\n\n@media only screen and (max-width: 700px) {\n  .placementLowerBtnCon {\n    margin-top: 70px;\n  }\n}\n\n.getNameContentCon {\n  transition: 4s;\n  opacity: 0;\n}\n\n.getNameInputConCon {\n  margin-top: 30vh;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  width: min(90vw, 600px);\n}\n\n.getNameInputCon {\n  gap: 5px;\n  align-items: flex-start;\n}\n\n.getNameInput {\n  color: black;\n  font-family: \"myFont\";\n  font-size: 30px;\n  width: min(230px, 40vw);\n}\n\n.getNameInputLabel {\n  font-size: 30px;\n  color: white;\n}\n\n.getNameNextBtn {\n  margin-top: 20vh;\n  color: #000fb7;\n  background-color: #000647;\n  height: min(70px, 15vw);\n  width: min(200px, 45vw);\n}\n\n.getNameNextBtn:hover {\n  scale: 1;\n}\n\n.getNameNextBtnReady {\n  color: white;\n  background-color: #05c6a9;\n}\n\n.getNameNextBtnReady:hover {\n  scale: 1.1;\n}\n\n.passDeviceCon {\n  padding-top: 15vh;\n  height: 85vh;\n  width: 100vw;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-color: #000972;\n  transition: 2s ease-in-out;\n  position: fixed;\n  gap: min(2vh, 100px);\n}\n\n.passScreenHeader {\n  color: white;\n  font-size: min(40px, 7vw);\n  text-align: center;\n  width: 90vw;\n}\n\n.passDeviceImage {\n  width: min(600px, 100vw);\n}\n\n.passDeviceContinueText {\n  color: white;\n  font-size: min(20px, 4vw);\n  margin-top: 30vh;\n}\n\n.settingIcon {\n  height: min(50px, 8vw);\n  position: fixed;\n  right: 2vw;\n  bottom: 2vw;\n  z-index: 1;\n  transition: 0.3s;\n}\n\n.settingIcon:hover {\n  scale: 1.1;\n}\n\n.settingPageCon {\n  top: 0;\n  position: fixed;\n  height: 100vh;\n  width: 100vw;\n  z-index: 2;\n  background-color: #000972;\n  transition: 1s;\n}\n\n.settingBackArrow {\n  height: min(60px, 6vw);\n  position: fixed;\n  color: white;\n  left: 5vw;\n  top: 7vh;\n  transition: 0.3s;\n}\n\n.settingBackArrow:hover {\n  scale: 1.1;\n  color: rgb(219, 219, 219);\n}\n\n.settingsSliderCon {\n  display: flex;\n  margin-top: 20vh;\n  gap: 5vh;\n}\n\n.settingSmallSliderCon {\n  display: flex;\n  flex-direction: column;\n  width: min(600px, 80vw);\n}\n\n.settingsSliderLabel {\n  color: white;\n  padding-left: 5px;\n  font-size: 20px;\n}\n\n.settingsSliderMiniCon {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n}\n\n.settingsSlider {\n  appearance: none;\n  width: 100%;\n}\n\n.settingsSliderValue {\n  height: 8px;\n  width: 50px;\n  margin-top: -2.5px;\n  color: white;\n  text-align: end;\n}\n\n.settingsSlider::-webkit-slider-runnable-track {\n  -webkit-appearance: none;\n  height: 8px;\n}\n\n.settingsSlider::-moz-range-track {\n  -moz-appearance: none;\n  height: 8px;\n}\n\n.settingsSlider::-ms-track {\n  appearance: none;\n  height: 8px;\n}\n\n.settingsSlider::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  height: 20px;\n  width: 10px;\n  background-color: #0180ff;\n  margin-top: -5.5px;\n  cursor: pointer;\n  border: none;\n}\n\n.settingsSlider::-moz-range-thumb {\n  -moz-appearance: none;\n  height: 20px;\n  width: 10px;\n  background-color: #0180ff;\n  margin-top: -5.5px;\n  cursor: pointer;\n  border: none;\n}\n\n.settingsSlider::-ms-thumb {\n  appearance: none;\n  height: 20px;\n  width: 10px;\n  background-color: #0180ff;\n  margin-top: -5.5px;\n  cursor: pointer;\n  border: none;\n}\n\n.resumeGameBackground {\n  top: 0px;\n  position: fixed;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.671);\n  backdrop-filter: blur(4px);\n  justify-content: center;\n  transition: 1s;\n}\n\n.resumeGameCon {\n  height: 25vh;\n  width: 100vw;\n  background-color: #000fb7;\n  padding-top: 5vh;\n  gap: 5vh;\n}\n\n.resumeGameText {\n  color: white;\n  font-size: min(30px, 5vw);\n  text-align: center;\n}\n\n.resumeGameBtnCon {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  width: min(500px, 70vw);\n}\n\n.resumeGameResumeBtn {\n  background-color: #05c6a9;\n  color: white;\n}\n\n.backToLobbyBtnCon {\n  display: flex;\n  flex-direction: row;\n  width: 100vw;\n  justify-content: center;\n  margin-top: 20vh;\n}\n\n.backToLobbyBtn {\n  width: min(300px, 65vw);\n  background-color: #c55858;\n  color: white;\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUNPO0FBQ2hHLDRDQUE0QywrSEFBNEM7QUFDeEYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sZ0ZBQWdGLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLGFBQWEsTUFBTSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxhQUFhLGFBQWEsTUFBTSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsTUFBTSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxZQUFZLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcs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QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlFQUFlLFNBQVMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqRVc7O0FBRXBDO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixrREFBUztBQUM5QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixrREFBUztBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVU7QUFDVjs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FB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QTtBQUNBLDBCQUEwQiw4REFBaUI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVc7QUFDWCxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVc7QUFDWCxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBLHNCQUFzQiwrQ0FBTTtBQUM1QixrQkFBa0IsMkNBQUU7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtB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QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1Q0FBdUMsc0JBQXNCOztBQUU3RDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxRQUFRO0FBQ1I7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsR0FBRztBQUNIOztBQUU4RTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQzlwRDlFO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7QUNBc0I7QUFDRCIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9hcHAvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9hcHAvcGxheWVyLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9hcHAvc2hpcHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL2dhbWVsb29wLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL0JsYWNrT3BzT25lLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiTXlGb250XCI7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xufVxuXG5ib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMGZiNztcbiAgbWFyZ2luOiAwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIk15Rm9udFwiO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuLmhpZGUge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbi5idG4ge1xuICBoZWlnaHQ6IG1pbig3MHB4LCAxMHZ3KTtcbiAgd2lkdGg6IG1pbigyMDBweCwgMzB2dyk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IG1pbigzMHB4LCA2dncpO1xuICBmb250LWZhbWlseTogXCJNeUZvbnRcIjtcbiAgYm9yZGVyOiBub25lO1xuICB0cmFuc2l0aW9uOiAwLjNzO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuLmJ0bjpob3ZlciB7XG4gIHNjYWxlOiAxLjA1O1xufVxuXG4vKiBMb2FkaW5nc2NyZWVuIHN0eWxlcyAqL1xuXG4uY29udGVudENvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5sb2FkaW5nc2NyZWVuSGVhZGVyQ29uIHtcbiAgaGVpZ2h0OiBtaW4oODVweCwgOXZ3KTtcbiAgbWFyZ2luLXRvcDogMTB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDgwJTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IDRzO1xufVxuXG4ubG9hZGluZ3NjcmVlbkhlYWRlciB7XG4gIGZvbnQtc2l6ZTogbWluKDEwdncsIDkwcHgpO1xuICBjb2xvcjogd2hpdGU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm90dG9tOiAtNjBweDtcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjEzLCAwLjY1LCAwLjQ2LCAxLjU3KTtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNHM7XG59XG5cbkBrZXlmcmFtZXMgbW92ZSB7XG4gIDAlIHtcbiAgICBib3R0b206IC0xMHB4O1xuICB9XG4gIDEwMCUge1xuICAgIGJvdHRvbTogLTFweDtcbiAgfVxufVxuXG4ubG9hZGluZ3NjcmVlbkJ0bkNvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAzMHZoO1xuICBnYXA6IG1pbig1dncsIDUwcHgpO1xuICB3aWR0aDogbWluKDgwdncsIDYwMHB4KTtcbiAgdHJhbnNpdGlvbjogNHM7XG59XG5cbi5sb2FkaW5nc2NyZWVuU3RhcnRCdG4ge1xuICBoZWlnaHQ6IG1pbig3MHB4LCAxNXZ3KTtcbiAgd2lkdGg6IG1pbigyMDBweCwgNDV2dyk7XG4gIGZvbnQtc2l6ZTogbWluKDI1cHgsIDZ2dyk7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMTgwZmY7XG4gIGZvbnQtZmFtaWx5OiBcIk15Zm9udFwiO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5sb2FkaW5nc2NyZWVuU3RhcnRCdG46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTkxLCAxOTEsIDE5MSk7XG59XG5cbi8qIExvYWRpbmdzY3JlZW4gc3R5bGVzIEVORCAqL1xuXG4vKiBJbmdhbWUgc3R5bGVzKi9cbi5BSUdhbWVDb24ge1xuICB0cmFuc2l0aW9uOiAycztcbn1cblxuLkFJR2FtZUhlYWRlckNvbiB7XG4gIHRyYW5zaXRpb246IDJzO1xuICBvcGFjaXR5OiAwO1xufVxuXG4uaW5nYW1lSGVhZGVyQ29uIHtcbiAgaGVpZ2h0OiBtaW4oNDBweCwgNXZ3KTtcbiAgbWFyZ2luLXRvcDogM3ZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5pbmdhbWVIZWFkZXIge1xuICBhbmltYXRpb246IG1vdmUgM3MgY3ViaWMtYmV6aWVyKDAuMTMsIDAuNjUsIDAuNDYsIDEuNTcpIGluZmluaXRlIGFsdGVybmF0ZTtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBmb250LXNpemU6IG1pbig0MHB4LCA1dncpO1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5lbmVteUdhbWVib2FyZENvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDN2aDtcbn1cblxuLmVuZW15R2FtZWJvYXJkSGVhZGVyIHtcbiAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgZm9udC1zaXplOiBtaW4oMzBweCwgNnZ3KTtcbiAgbWFyZ2luLXRvcDogMnZoO1xuICB0cmFuc2l0aW9uOiAycztcbiAgb3BhY2l0eTogMDtcbn1cblxuLmVuZW15R2FtZWJvYXJkIHtcbiAgaGVpZ2h0OiAzNXZoO1xuICB3aWR0aDogMzV2aDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xuICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gIHRyYW5zaXRpb246IDJzO1xuICBvcGFjaXR5OiAwO1xufVxuXG5Aa2V5ZnJhbWVzIGdhbWVib2FyZFdhdmUge1xuICAwJSB7XG4gICAgYm90dG9tOiAzNXZoO1xuICB9XG4gIDgwJSB7XG4gICAgYm90dG9tOiAzOHZoO1xuICB9XG4gIDEwMCUge1xuICAgIGJvdHRvbTogMzguMnZoO1xuICB9XG59XG5cbi5zZWFXYXZlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDQwdmg7XG4gIGhlaWdodDogMTB2aDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDE4MGZmO1xuICBhbmltYXRpb246IGdhbWVib2FyZFdhdmUgMi41cyBlYXNlLWluLW91dCBpbmZpbml0ZSBhbHRlcm5hdGU7XG4gIHRyYW5zaXRpb246IDJzO1xuICBvcGFjaXR5OiAwO1xufVxuXG4uZnJpZW5kbHlCb2FyZGNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBoZWlnaHQ6IDQydmg7XG4gIHdpZHRoOiAxMDB2dztcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAxODBmZjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdHJhbnNpdGlvbjogMnM7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi5mcmllbmRseUJvYXJkSGVhZGVyIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IG1pbigzMHB4LCA2dncpO1xuICBtYXJnaW4tYm90dG9tOiAxdmg7XG4gIHRyYW5zaXRpb246IDJzO1xuICBvcGFjaXR5OiAwO1xufVxuXG4uZnJpZW5kbHlCb2FyZCB7XG4gIGhlaWdodDogMzV2aDtcbiAgd2lkdGg6IDM1dmg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcbiAgYm9yZGVyOiAycHggc29saWQgcmdiKDI1NSwgMjU1LCAyNTUpO1xuICB0cmFuc2l0aW9uOiAycztcbiAgb3BhY2l0eTogMDtcbn1cblxuLmVuZW15R3JpZFNsb3Qge1xuICBib3JkZXI6IHNvbGlkIDJweCB3aGl0ZTtcbn1cblxuLmVuZW15R3JpZFNsb3RNaXNzZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTZhNmE2O1xufVxuXG4uZW5lbXlHcmlkU2xvdFVuYXR0YWNrZWQge1xuICB0cmFuc2l0aW9uOiAwLjNzO1xufVxuXG4uZW5lbXlHcmlkU2xvdFVuYXR0YWNrZWQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWQ2NGI1O1xufVxuXG4uZnJpZW5kbHlHcmlkU2xvdFNoaXAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjUsIDY1LCA2NSk7XG59XG5cbi5lbmVteUdyaWRTbG90SGl0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMDAwMDtcbn1cblxuLndpblNjcmVlblBsYXllciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMTgwZmY7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDB2dztcbiAgYm90dG9tOiAtMTAwdmg7XG4gIHRyYW5zaXRpb246IDRzIGVhc2UtaW4tb3V0O1xuICB6LWluZGV4OiAxO1xufVxuXG4ud2luU2NyZWVuVGV4dCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiA3MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi53aW5TY3JlZW5BSSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDBmYjc7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDB2dztcbiAgdG9wOiAtMTAwdmg7XG4gIHRyYW5zaXRpb246IDRzIGVhc2UtaW4tb3V0O1xufVxuXG4vKiBQbGFjZW1lbnQgc3R5bGVzKi9cbi5wbGFjZW1lbnRDb24ge1xuICB3aWR0aDogMzAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMTgwZmY7XG4gIHRyYW5zaXRpb246IDZzIGVhc2Utb3V0O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHJpZ2h0OiAtMzAwdnc7XG59XG5cbkBrZXlmcmFtZXMgcGxhY2VtZW50SGVhZGVyV2F2ZSB7XG4gIDAlIHtcbiAgICBib3R0b206IC0ydmg7XG4gIH1cbiAgMTAwJSB7XG4gICAgYm90dG9tOiAwdmg7XG4gIH1cbn1cblxuLmdyaWRQbGFjZW1lbnRTbG90IHtcbiAgYm9yZGVyOiAycHggd2hpdGUgc29saWQ7XG59XG5cbi5wbGFjZW1lbnRCb2FyZCB7XG4gIGhlaWdodDogMzV2aDtcbiAgd2lkdGg6IDM1dmg7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5kcmFnQW5kRHJvcENvbiB7XG4gIGhlaWdodDogNzB2aDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGdhcDogNDBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5wbGFjZW1lbnRTaGlwc0NvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGdhcDogMTBweDtcbiAgd2lkdGg6IDMydmg7XG4gIGhlaWdodDogMzJ2aDtcbn1cblxuLnBsYWNlbWVudFNoaXBFbCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGJvcmRlcjogc29saWQgMnB4IHdoaXRlO1xuICB3aWR0aDogMy41dmg7XG59XG5cbi5zaGlwRHJhZ0NvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ucGxhY2VtZW50Um90YXRlQnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDY1LCA2NSwgNjUpO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5wbGFjZW1lbnRTZWxlY3RlZFNoaXBFbCB7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCB3aGl0ZTtcbn1cblxuLnBsYWNlbWVudEhvdmVyZWRTbG90IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdiN2I3Yjtcbn1cblxuLnBsYWNlbWVudEhvdmVyZWRTbG90T3V0T2ZSYW5nZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjNTU4NTg7XG59XG5cbi5wbGFjZW1lbnRMb3dlckJ0bkNvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgd2lkdGg6IG1pbig2NXZ3LCA3MDBweCk7XG59XG5cbi5wbGFjZW1lbnRSZXNldEJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjNTU4NTg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnBsYWNlbWVudE5leHRCdG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTY1OTlkO1xuICBjb2xvcjogIzAxODBmZjtcbn1cbi5wbGFjZW1lbnROZXh0QnRuOmhvdmVyIHtcbiAgc2NhbGU6IDE7XG59XG5cbi5wbGFjZW1lbnROZXh0QnRuUmVhZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDVjNmE5O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5wbGFjZW1lbnROZXh0QnRuUmVhZHk6aG92ZXIge1xuICBzY2FsZTogMS4wNTtcbn1cblxuLnBsYWNlbWVudEhlYWRlciB7XG4gIGFuaW1hdGlvbjogcGxhY2VtZW50SGVhZGVyV2F2ZSAzcyBlYXNlLWluLW91dCBpbmZpbml0ZSBhbHRlcm5hdGU7XG59XG5cbi5wbGFjZW1lbnRIZWFkZXJDb24ge1xuICBoZWlnaHQ6IGF1dG87XG4gIHdpZHRoOiA5MHZ3O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAzdmg7XG4gIG1hcmdpbi10b3A6IGNhbGMoMXZoKTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xuICAucGxhY2VtZW50TG93ZXJCdG5Db24ge1xuICAgIG1hcmdpbi10b3A6IDcwcHg7XG4gIH1cbn1cblxuLmdldE5hbWVDb250ZW50Q29uIHtcbiAgdHJhbnNpdGlvbjogNHM7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi5nZXROYW1lSW5wdXRDb25Db24ge1xuICBtYXJnaW4tdG9wOiAzMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHdpZHRoOiBtaW4oOTB2dywgNjAwcHgpO1xufVxuXG4uZ2V0TmFtZUlucHV0Q29uIHtcbiAgZ2FwOiA1cHg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuXG4uZ2V0TmFtZUlucHV0IHtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LWZhbWlseTogXCJteUZvbnRcIjtcbiAgZm9udC1zaXplOiAzMHB4O1xuICB3aWR0aDogbWluKDIzMHB4LCA0MHZ3KTtcbn1cblxuLmdldE5hbWVJbnB1dExhYmVsIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5nZXROYW1lTmV4dEJ0biB7XG4gIG1hcmdpbi10b3A6IDIwdmg7XG4gIGNvbG9yOiAjMDAwZmI3O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwNjQ3O1xuICBoZWlnaHQ6IG1pbig3MHB4LCAxNXZ3KTtcbiAgd2lkdGg6IG1pbigyMDBweCwgNDV2dyk7XG59XG5cbi5nZXROYW1lTmV4dEJ0bjpob3ZlciB7XG4gIHNjYWxlOiAxO1xufVxuXG4uZ2V0TmFtZU5leHRCdG5SZWFkeSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA1YzZhOTtcbn1cblxuLmdldE5hbWVOZXh0QnRuUmVhZHk6aG92ZXIge1xuICBzY2FsZTogMS4xO1xufVxuXG4ucGFzc0RldmljZUNvbiB7XG4gIHBhZGRpbmctdG9wOiAxNXZoO1xuICBoZWlnaHQ6IDg1dmg7XG4gIHdpZHRoOiAxMDB2dztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA5NzI7XG4gIHRyYW5zaXRpb246IDJzIGVhc2UtaW4tb3V0O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGdhcDogbWluKDJ2aCwgMTAwcHgpO1xufVxuXG4ucGFzc1NjcmVlbkhlYWRlciB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiBtaW4oNDBweCwgN3Z3KTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogOTB2dztcbn1cblxuLnBhc3NEZXZpY2VJbWFnZSB7XG4gIHdpZHRoOiBtaW4oNjAwcHgsIDEwMHZ3KTtcbn1cblxuLnBhc3NEZXZpY2VDb250aW51ZVRleHQge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogbWluKDIwcHgsIDR2dyk7XG4gIG1hcmdpbi10b3A6IDMwdmg7XG59XG5cbi5zZXR0aW5nSWNvbiB7XG4gIGhlaWdodDogbWluKDUwcHgsIDh2dyk7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgcmlnaHQ6IDJ2dztcbiAgYm90dG9tOiAydnc7XG4gIHotaW5kZXg6IDE7XG4gIHRyYW5zaXRpb246IDAuM3M7XG59XG5cbi5zZXR0aW5nSWNvbjpob3ZlciB7XG4gIHNjYWxlOiAxLjE7XG59XG5cbi5zZXR0aW5nUGFnZUNvbiB7XG4gIHRvcDogMDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwdnc7XG4gIHotaW5kZXg6IDI7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA5NzI7XG4gIHRyYW5zaXRpb246IDFzO1xufVxuXG4uc2V0dGluZ0JhY2tBcnJvdyB7XG4gIGhlaWdodDogbWluKDYwcHgsIDZ2dyk7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgY29sb3I6IHdoaXRlO1xuICBsZWZ0OiA1dnc7XG4gIHRvcDogN3ZoO1xuICB0cmFuc2l0aW9uOiAwLjNzO1xufVxuXG4uc2V0dGluZ0JhY2tBcnJvdzpob3ZlciB7XG4gIHNjYWxlOiAxLjE7XG4gIGNvbG9yOiByZ2IoMjE5LCAyMTksIDIxOSk7XG59XG5cbi5zZXR0aW5nc1NsaWRlckNvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi10b3A6IDIwdmg7XG4gIGdhcDogNXZoO1xufVxuXG4uc2V0dGluZ1NtYWxsU2xpZGVyQ29uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IG1pbig2MDBweCwgODB2dyk7XG59XG5cbi5zZXR0aW5nc1NsaWRlckxhYmVsIHtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uc2V0dGluZ3NTbGlkZXJNaW5pQ29uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5zZXR0aW5nc1NsaWRlciB7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uc2V0dGluZ3NTbGlkZXJWYWx1ZSB7XG4gIGhlaWdodDogOHB4O1xuICB3aWR0aDogNTBweDtcbiAgbWFyZ2luLXRvcDogLTIuNXB4O1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGVuZDtcbn1cblxuLnNldHRpbmdzU2xpZGVyOjotd2Via2l0LXNsaWRlci1ydW5uYWJsZS10cmFjayB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgaGVpZ2h0OiA4cHg7XG59XG5cbi5zZXR0aW5nc1NsaWRlcjo6LW1vei1yYW5nZS10cmFjayB7XG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgaGVpZ2h0OiA4cHg7XG59XG5cbi5zZXR0aW5nc1NsaWRlcjo6LW1zLXRyYWNrIHtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgaGVpZ2h0OiA4cHg7XG59XG5cbi5zZXR0aW5nc1NsaWRlcjo6LXdlYmtpdC1zbGlkZXItdGh1bWIge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMTgwZmY7XG4gIG1hcmdpbi10b3A6IC01LjVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5zZXR0aW5nc1NsaWRlcjo6LW1vei1yYW5nZS10aHVtYiB7XG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAxODBmZjtcbiAgbWFyZ2luLXRvcDogLTUuNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLnNldHRpbmdzU2xpZGVyOjotbXMtdGh1bWIge1xuICBhcHBlYXJhbmNlOiBub25lO1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDE4MGZmO1xuICBtYXJnaW4tdG9wOiAtNS41cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4ucmVzdW1lR2FtZUJhY2tncm91bmQge1xuICB0b3A6IDBweDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42NzEpO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRyYW5zaXRpb246IDFzO1xufVxuXG4ucmVzdW1lR2FtZUNvbiB7XG4gIGhlaWdodDogMjV2aDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwZmI3O1xuICBwYWRkaW5nLXRvcDogNXZoO1xuICBnYXA6IDV2aDtcbn1cblxuLnJlc3VtZUdhbWVUZXh0IHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IG1pbigzMHB4LCA1dncpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5yZXN1bWVHYW1lQnRuQ29uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB3aWR0aDogbWluKDUwMHB4LCA3MHZ3KTtcbn1cblxuLnJlc3VtZUdhbWVSZXN1bWVCdG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDVjNmE5O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5iYWNrVG9Mb2JieUJ0bkNvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIHdpZHRoOiAxMDB2dztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDIwdmg7XG59XG5cbi5iYWNrVG9Mb2JieUJ0biB7XG4gIHdpZHRoOiBtaW4oMzAwcHgsIDY1dncpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzU1ODU4O1xuICBjb2xvcjogd2hpdGU7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGlu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RUFDZixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxRQUFRO0VBQ1IsZUFBZTtFQUNmLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0NBQXNDO0VBQ3RDLDBCQUEwQjtFQUMxQix1QkFBdUI7RUFDdkIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIk15Rm9udFxcXCI7XFxuICBzcmM6IHVybChcXFwiLi9CbGFja09wc09uZS1SZWd1bGFyLnR0ZlxcXCIpO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDBmYjc7XFxuICBtYXJnaW46IDBweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTXlGb250XFxcIjtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4uaGlkZSB7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbi5idG4ge1xcbiAgaGVpZ2h0OiBtaW4oNzBweCwgMTB2dyk7XFxuICB3aWR0aDogbWluKDIwMHB4LCAzMHZ3KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IG1pbigzMHB4LCA2dncpO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNeUZvbnRcXFwiO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgdHJhbnNpdGlvbjogMC4zcztcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4uYnRuOmhvdmVyIHtcXG4gIHNjYWxlOiAxLjA1O1xcbn1cXG5cXG4vKiBMb2FkaW5nc2NyZWVuIHN0eWxlcyAqL1xcblxcbi5jb250ZW50Q29uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmxvYWRpbmdzY3JlZW5IZWFkZXJDb24ge1xcbiAgaGVpZ2h0OiBtaW4oODVweCwgOXZ3KTtcXG4gIG1hcmdpbi10b3A6IDEwdmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDgwJTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRyYW5zaXRpb246IDRzO1xcbn1cXG5cXG4ubG9hZGluZ3NjcmVlbkhlYWRlciB7XFxuICBmb250LXNpemU6IG1pbigxMHZ3LCA5MHB4KTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJvdHRvbTogLTYwcHg7XFxuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTMsIDAuNjUsIDAuNDYsIDEuNTcpO1xcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNHM7XFxufVxcblxcbkBrZXlmcmFtZXMgbW92ZSB7XFxuICAwJSB7XFxuICAgIGJvdHRvbTogLTEwcHg7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgYm90dG9tOiAtMXB4O1xcbiAgfVxcbn1cXG5cXG4ubG9hZGluZ3NjcmVlbkJ0bkNvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiAzMHZoO1xcbiAgZ2FwOiBtaW4oNXZ3LCA1MHB4KTtcXG4gIHdpZHRoOiBtaW4oODB2dywgNjAwcHgpO1xcbiAgdHJhbnNpdGlvbjogNHM7XFxufVxcblxcbi5sb2FkaW5nc2NyZWVuU3RhcnRCdG4ge1xcbiAgaGVpZ2h0OiBtaW4oNzBweCwgMTV2dyk7XFxuICB3aWR0aDogbWluKDIwMHB4LCA0NXZ3KTtcXG4gIGZvbnQtc2l6ZTogbWluKDI1cHgsIDZ2dyk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDE4MGZmO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNeWZvbnRcXFwiO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ubG9hZGluZ3NjcmVlblN0YXJ0QnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTEsIDE5MSwgMTkxKTtcXG59XFxuXFxuLyogTG9hZGluZ3NjcmVlbiBzdHlsZXMgRU5EICovXFxuXFxuLyogSW5nYW1lIHN0eWxlcyovXFxuLkFJR2FtZUNvbiB7XFxuICB0cmFuc2l0aW9uOiAycztcXG59XFxuXFxuLkFJR2FtZUhlYWRlckNvbiB7XFxuICB0cmFuc2l0aW9uOiAycztcXG4gIG9wYWNpdHk6IDA7XFxufVxcblxcbi5pbmdhbWVIZWFkZXJDb24ge1xcbiAgaGVpZ2h0OiBtaW4oNDBweCwgNXZ3KTtcXG4gIG1hcmdpbi10b3A6IDN2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbi5pbmdhbWVIZWFkZXIge1xcbiAgYW5pbWF0aW9uOiBtb3ZlIDNzIGN1YmljLWJlemllcigwLjEzLCAwLjY1LCAwLjQ2LCAxLjU3KSBpbmZpbml0ZSBhbHRlcm5hdGU7XFxuICBtYXJnaW4tdG9wOiAwcHg7XFxuICBmb250LXNpemU6IG1pbig0MHB4LCA1dncpO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG4uZW5lbXlHYW1lYm9hcmRDb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogM3ZoO1xcbn1cXG5cXG4uZW5lbXlHYW1lYm9hcmRIZWFkZXIge1xcbiAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gIGZvbnQtc2l6ZTogbWluKDMwcHgsIDZ2dyk7XFxuICBtYXJnaW4tdG9wOiAydmg7XFxuICB0cmFuc2l0aW9uOiAycztcXG4gIG9wYWNpdHk6IDA7XFxufVxcblxcbi5lbmVteUdhbWVib2FyZCB7XFxuICBoZWlnaHQ6IDM1dmg7XFxuICB3aWR0aDogMzV2aDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbiAgYm9yZGVyOiAycHggc29saWQgcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgdHJhbnNpdGlvbjogMnM7XFxuICBvcGFjaXR5OiAwO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGdhbWVib2FyZFdhdmUge1xcbiAgMCUge1xcbiAgICBib3R0b206IDM1dmg7XFxuICB9XFxuICA4MCUge1xcbiAgICBib3R0b206IDM4dmg7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgYm90dG9tOiAzOC4ydmg7XFxuICB9XFxufVxcblxcbi5zZWFXYXZlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogNDB2aDtcXG4gIGhlaWdodDogMTB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMTgwZmY7XFxuICBhbmltYXRpb246IGdhbWVib2FyZFdhdmUgMi41cyBlYXNlLWluLW91dCBpbmZpbml0ZSBhbHRlcm5hdGU7XFxuICB0cmFuc2l0aW9uOiAycztcXG4gIG9wYWNpdHk6IDA7XFxufVxcblxcbi5mcmllbmRseUJvYXJkY29uIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMDtcXG4gIGhlaWdodDogNDJ2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMTgwZmY7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB0cmFuc2l0aW9uOiAycztcXG4gIG9wYWNpdHk6IDA7XFxufVxcblxcbi5mcmllbmRseUJvYXJkSGVhZGVyIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogbWluKDMwcHgsIDZ2dyk7XFxuICBtYXJnaW4tYm90dG9tOiAxdmg7XFxuICB0cmFuc2l0aW9uOiAycztcXG4gIG9wYWNpdHk6IDA7XFxufVxcblxcbi5mcmllbmRseUJvYXJkIHtcXG4gIGhlaWdodDogMzV2aDtcXG4gIHdpZHRoOiAzNXZoO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICB0cmFuc2l0aW9uOiAycztcXG4gIG9wYWNpdHk6IDA7XFxufVxcblxcbi5lbmVteUdyaWRTbG90IHtcXG4gIGJvcmRlcjogc29saWQgMnB4IHdoaXRlO1xcbn1cXG5cXG4uZW5lbXlHcmlkU2xvdE1pc3NlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTZhNmE2O1xcbn1cXG5cXG4uZW5lbXlHcmlkU2xvdFVuYXR0YWNrZWQge1xcbiAgdHJhbnNpdGlvbjogMC4zcztcXG59XFxuXFxuLmVuZW15R3JpZFNsb3RVbmF0dGFja2VkOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1ZDY0YjU7XFxufVxcblxcbi5mcmllbmRseUdyaWRTbG90U2hpcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjUsIDY1LCA2NSk7XFxufVxcblxcbi5lbmVteUdyaWRTbG90SGl0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjAwMDA7XFxufVxcblxcbi53aW5TY3JlZW5QbGF5ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAxODBmZjtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgYm90dG9tOiAtMTAwdmg7XFxuICB0cmFuc2l0aW9uOiA0cyBlYXNlLWluLW91dDtcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbi53aW5TY3JlZW5UZXh0IHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogNzBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLndpblNjcmVlbkFJIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDBmYjc7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB6LWluZGV4OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxuICB0b3A6IC0xMDB2aDtcXG4gIHRyYW5zaXRpb246IDRzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4vKiBQbGFjZW1lbnQgc3R5bGVzKi9cXG4ucGxhY2VtZW50Q29uIHtcXG4gIHdpZHRoOiAzMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDE4MGZmO1xcbiAgdHJhbnNpdGlvbjogNnMgZWFzZS1vdXQ7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICByaWdodDogLTMwMHZ3O1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHBsYWNlbWVudEhlYWRlcldhdmUge1xcbiAgMCUge1xcbiAgICBib3R0b206IC0ydmg7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgYm90dG9tOiAwdmg7XFxuICB9XFxufVxcblxcbi5ncmlkUGxhY2VtZW50U2xvdCB7XFxuICBib3JkZXI6IDJweCB3aGl0ZSBzb2xpZDtcXG59XFxuXFxuLnBsYWNlbWVudEJvYXJkIHtcXG4gIGhlaWdodDogMzV2aDtcXG4gIHdpZHRoOiAzNXZoO1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuLmRyYWdBbmREcm9wQ29uIHtcXG4gIGhlaWdodDogNzB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgZ2FwOiA0MHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ucGxhY2VtZW50U2hpcHNDb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBnYXA6IDEwcHg7XFxuICB3aWR0aDogMzJ2aDtcXG4gIGhlaWdodDogMzJ2aDtcXG59XFxuXFxuLnBsYWNlbWVudFNoaXBFbCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgYm9yZGVyOiBzb2xpZCAycHggd2hpdGU7XFxuICB3aWR0aDogMy41dmg7XFxufVxcblxcbi5zaGlwRHJhZ0NvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnBsYWNlbWVudFJvdGF0ZUJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjUsIDY1LCA2NSk7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5wbGFjZW1lbnRTZWxlY3RlZFNoaXBFbCB7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggd2hpdGU7XFxufVxcblxcbi5wbGFjZW1lbnRIb3ZlcmVkU2xvdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2I3YjdiO1xcbn1cXG5cXG4ucGxhY2VtZW50SG92ZXJlZFNsb3RPdXRPZlJhbmdlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjNTU4NTg7XFxufVxcblxcbi5wbGFjZW1lbnRMb3dlckJ0bkNvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHdpZHRoOiBtaW4oNjV2dywgNzAwcHgpO1xcbn1cXG5cXG4ucGxhY2VtZW50UmVzZXRCdG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M1NTg1ODtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnBsYWNlbWVudE5leHRCdG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE2NTk5ZDtcXG4gIGNvbG9yOiAjMDE4MGZmO1xcbn1cXG4ucGxhY2VtZW50TmV4dEJ0bjpob3ZlciB7XFxuICBzY2FsZTogMTtcXG59XFxuXFxuLnBsYWNlbWVudE5leHRCdG5SZWFkeSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDVjNmE5O1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ucGxhY2VtZW50TmV4dEJ0blJlYWR5OmhvdmVyIHtcXG4gIHNjYWxlOiAxLjA1O1xcbn1cXG5cXG4ucGxhY2VtZW50SGVhZGVyIHtcXG4gIGFuaW1hdGlvbjogcGxhY2VtZW50SGVhZGVyV2F2ZSAzcyBlYXNlLWluLW91dCBpbmZpbml0ZSBhbHRlcm5hdGU7XFxufVxcblxcbi5wbGFjZW1lbnRIZWFkZXJDb24ge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgd2lkdGg6IDkwdnc7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiAzdmg7XFxuICBtYXJnaW4tdG9wOiBjYWxjKDF2aCk7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcXG4gIC5wbGFjZW1lbnRMb3dlckJ0bkNvbiB7XFxuICAgIG1hcmdpbi10b3A6IDcwcHg7XFxuICB9XFxufVxcblxcbi5nZXROYW1lQ29udGVudENvbiB7XFxuICB0cmFuc2l0aW9uOiA0cztcXG4gIG9wYWNpdHk6IDA7XFxufVxcblxcbi5nZXROYW1lSW5wdXRDb25Db24ge1xcbiAgbWFyZ2luLXRvcDogMzB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgd2lkdGg6IG1pbig5MHZ3LCA2MDBweCk7XFxufVxcblxcbi5nZXROYW1lSW5wdXRDb24ge1xcbiAgZ2FwOiA1cHg7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG59XFxuXFxuLmdldE5hbWVJbnB1dCB7XFxuICBjb2xvcjogYmxhY2s7XFxuICBmb250LWZhbWlseTogXFxcIm15Rm9udFxcXCI7XFxuICBmb250LXNpemU6IDMwcHg7XFxuICB3aWR0aDogbWluKDIzMHB4LCA0MHZ3KTtcXG59XFxuXFxuLmdldE5hbWVJbnB1dExhYmVsIHtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmdldE5hbWVOZXh0QnRuIHtcXG4gIG1hcmdpbi10b3A6IDIwdmg7XFxuICBjb2xvcjogIzAwMGZiNztcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA2NDc7XFxuICBoZWlnaHQ6IG1pbig3MHB4LCAxNXZ3KTtcXG4gIHdpZHRoOiBtaW4oMjAwcHgsIDQ1dncpO1xcbn1cXG5cXG4uZ2V0TmFtZU5leHRCdG46aG92ZXIge1xcbiAgc2NhbGU6IDE7XFxufVxcblxcbi5nZXROYW1lTmV4dEJ0blJlYWR5IHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwNWM2YTk7XFxufVxcblxcbi5nZXROYW1lTmV4dEJ0blJlYWR5OmhvdmVyIHtcXG4gIHNjYWxlOiAxLjE7XFxufVxcblxcbi5wYXNzRGV2aWNlQ29uIHtcXG4gIHBhZGRpbmctdG9wOiAxNXZoO1xcbiAgaGVpZ2h0OiA4NXZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwOTcyO1xcbiAgdHJhbnNpdGlvbjogMnMgZWFzZS1pbi1vdXQ7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBnYXA6IG1pbigydmgsIDEwMHB4KTtcXG59XFxuXFxuLnBhc3NTY3JlZW5IZWFkZXIge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiBtaW4oNDBweCwgN3Z3KTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdpZHRoOiA5MHZ3O1xcbn1cXG5cXG4ucGFzc0RldmljZUltYWdlIHtcXG4gIHdpZHRoOiBtaW4oNjAwcHgsIDEwMHZ3KTtcXG59XFxuXFxuLnBhc3NEZXZpY2VDb250aW51ZVRleHQge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiBtaW4oMjBweCwgNHZ3KTtcXG4gIG1hcmdpbi10b3A6IDMwdmg7XFxufVxcblxcbi5zZXR0aW5nSWNvbiB7XFxuICBoZWlnaHQ6IG1pbig1MHB4LCA4dncpO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgcmlnaHQ6IDJ2dztcXG4gIGJvdHRvbTogMnZ3O1xcbiAgei1pbmRleDogMTtcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxufVxcblxcbi5zZXR0aW5nSWNvbjpob3ZlciB7XFxuICBzY2FsZTogMS4xO1xcbn1cXG5cXG4uc2V0dGluZ1BhZ2VDb24ge1xcbiAgdG9wOiAwO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIHotaW5kZXg6IDI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwOTcyO1xcbiAgdHJhbnNpdGlvbjogMXM7XFxufVxcblxcbi5zZXR0aW5nQmFja0Fycm93IHtcXG4gIGhlaWdodDogbWluKDYwcHgsIDZ2dyk7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBjb2xvcjogd2hpdGU7XFxuICBsZWZ0OiA1dnc7XFxuICB0b3A6IDd2aDtcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxufVxcblxcbi5zZXR0aW5nQmFja0Fycm93OmhvdmVyIHtcXG4gIHNjYWxlOiAxLjE7XFxuICBjb2xvcjogcmdiKDIxOSwgMjE5LCAyMTkpO1xcbn1cXG5cXG4uc2V0dGluZ3NTbGlkZXJDb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1hcmdpbi10b3A6IDIwdmg7XFxuICBnYXA6IDV2aDtcXG59XFxuXFxuLnNldHRpbmdTbWFsbFNsaWRlckNvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiBtaW4oNjAwcHgsIDgwdncpO1xcbn1cXG5cXG4uc2V0dGluZ3NTbGlkZXJMYWJlbCB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nLWxlZnQ6IDVweDtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuLnNldHRpbmdzU2xpZGVyTWluaUNvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uc2V0dGluZ3NTbGlkZXIge1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uc2V0dGluZ3NTbGlkZXJWYWx1ZSB7XFxuICBoZWlnaHQ6IDhweDtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgbWFyZ2luLXRvcDogLTIuNXB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgdGV4dC1hbGlnbjogZW5kO1xcbn1cXG5cXG4uc2V0dGluZ3NTbGlkZXI6Oi13ZWJraXQtc2xpZGVyLXJ1bm5hYmxlLXRyYWNrIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gIGhlaWdodDogOHB4O1xcbn1cXG5cXG4uc2V0dGluZ3NTbGlkZXI6Oi1tb3otcmFuZ2UtdHJhY2sge1xcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xcbiAgaGVpZ2h0OiA4cHg7XFxufVxcblxcbi5zZXR0aW5nc1NsaWRlcjo6LW1zLXRyYWNrIHtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICBoZWlnaHQ6IDhweDtcXG59XFxuXFxuLnNldHRpbmdzU2xpZGVyOjotd2Via2l0LXNsaWRlci10aHVtYiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICB3aWR0aDogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMTgwZmY7XFxuICBtYXJnaW4tdG9wOiAtNS41cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5zZXR0aW5nc1NsaWRlcjo6LW1vei1yYW5nZS10aHVtYiB7XFxuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICB3aWR0aDogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMTgwZmY7XFxuICBtYXJnaW4tdG9wOiAtNS41cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5zZXR0aW5nc1NsaWRlcjo6LW1zLXRodW1iIHtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICB3aWR0aDogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMTgwZmY7XFxuICBtYXJnaW4tdG9wOiAtNS41cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5yZXN1bWVHYW1lQmFja2dyb3VuZCB7XFxuICB0b3A6IDBweDtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNjcxKTtcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cHgpO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB0cmFuc2l0aW9uOiAxcztcXG59XFxuXFxuLnJlc3VtZUdhbWVDb24ge1xcbiAgaGVpZ2h0OiAyNXZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMGZiNztcXG4gIHBhZGRpbmctdG9wOiA1dmg7XFxuICBnYXA6IDV2aDtcXG59XFxuXFxuLnJlc3VtZUdhbWVUZXh0IHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogbWluKDMwcHgsIDV2dyk7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5yZXN1bWVHYW1lQnRuQ29uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgd2lkdGg6IG1pbig1MDBweCwgNzB2dyk7XFxufVxcblxcbi5yZXN1bWVHYW1lUmVzdW1lQnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwNWM2YTk7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5iYWNrVG9Mb2JieUJ0bkNvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogMjB2aDtcXG59XFxuXFxuLmJhY2tUb0xvYmJ5QnRuIHtcXG4gIHdpZHRoOiBtaW4oMzAwcHgsIDY1dncpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M1NTg1ODtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgc2hpcCBmcm9tIFwiLi9zaGlwc1wiO1xuXG5jbGFzcyBnYW1lYm9hcmQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLm1pc3NlZCA9IFtdO1xuICAgIHRoaXMuaGl0cyA9IFtdO1xuICAgIHRoaXMuc2hpcHMgPSBbXTtcbiAgfVxuXG4gIHBsYWNlU2hpcHMoYXJ5KSB7XG4gICAgYXJ5LmZvckVhY2goKG5ld0FyeSkgPT4ge1xuICAgICAgY29uc3QgbmV3U2hpcCA9IG5ldyBzaGlwKG5ld0FyeSk7XG4gICAgICB0aGlzLnNoaXBzLnB1c2gobmV3U2hpcCk7XG4gICAgfSk7XG4gIH1cblxuICBzaGlwc1NhaWxpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2hpcHMucmVkdWNlKFxuICAgICAgKGNvdW50LCBzaGlwRWwpID0+IChzaGlwRWwuaXNTdW5rKCkgPT0gZmFsc2UgPyBjb3VudCArIDEgOiBjb3VudCksXG4gICAgICAwXG4gICAgKTtcbiAgfVxuXG4gIHJlY2lldmVBdHRhY2soW3gsIHldKSB7XG4gICAgLy8gRmlyc3Qgd2UgY29tcGFyZSBjb29yZGluYXRlcyBzbyB3ZSBkb250IGhpdCB0aGUgc2FtZSBzcG90IHR3aWNlXG4gICAgaWYgKFxuICAgICAgdGhpcy5taXNzZWQucmVkdWNlKFxuICAgICAgICAoc3RhdGUsIGN1cikgPT5cbiAgICAgICAgICBjdXJbMF0gPT0geCAmJiBjdXJbMV0gPT0geSA/IChzdGF0ZSA9IGZhbHNlKSA6IChzdGF0ZSA9IHRydWUpLFxuICAgICAgICB0cnVlXG4gICAgICApID09IHRydWUgJiZcbiAgICAgIHRoaXMuaGl0cy5yZWR1Y2UoXG4gICAgICAgIChzdGF0ZSwgY3VyKSA9PlxuICAgICAgICAgIGN1clswXSA9PSB4ICYmIGN1clsxXSA9PSB5ID8gKHN0YXRlID0gZmFsc2UpIDogKHN0YXRlID0gdHJ1ZSksXG4gICAgICAgIHRydWVcbiAgICAgICkgPT0gdHJ1ZVxuICAgICkge1xuICAgICAgLy8gV2UgY2hlY2sgaWYgYSBzaGlwIGhhcyBiZWVuIGhpdFxuICAgICAgbGV0IGlzSGl0ID0gdGhpcy5zaGlwcy5yZWR1Y2UoKGlzSGl0MSwgcGxhY2VkU2hpcCkgPT4ge1xuICAgICAgICBsZXQgdmFsID0gcGxhY2VkU2hpcC5jb29yLnJlZHVjZSgoc3RhdGUsIGNvb3JkaW5hdGUpID0+IHtcbiAgICAgICAgICBpZiAoY29vcmRpbmF0ZVswXSA9PSB4ICYmIGNvb3JkaW5hdGVbMV0gPT0geSkge1xuICAgICAgICAgICAgLy8gV2UgaGF2ZSBhIGhpdFxuICAgICAgICAgICAgcGxhY2VkU2hpcC5oaXQoKTtcbiAgICAgICAgICAgIHRoaXMuaGl0cy5wdXNoKFt4LCB5XSk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgZmFsc2UpO1xuICAgICAgICBpZiAodmFsID09IHRydWUpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gaXNIaXQxO1xuICAgICAgICB9XG4gICAgICB9LCBmYWxzZSk7XG4gICAgICBpZiAoaXNIaXQgPT0gZmFsc2UpIHRoaXMubWlzc2VkLnB1c2goW3gsIHldKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gV2UgaGl0IHRoZSBzYW1lIHNwb3RcbiAgICAgIC8vIFRyb3cgZXJyb3JcbiAgICB9XG4gIH1cblxuICBhbGxTdW5rID0gKCkgPT4gKHRoaXMuc2hpcHNTYWlsaW5nKCkgPT0gMCA/IHRydWUgOiBmYWxzZSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdhbWVib2FyZDtcbiIsImltcG9ydCBnYW1lYm9hcmQgZnJvbSBcIi4vZ2FtZWJvYXJkXCI7XG5cbmNsYXNzIHBsYXllciB7XG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuYm9hcmQgPSBuZXcgZ2FtZWJvYXJkKCk7XG4gIH1cbn1cblxuY2xhc3MgQUkge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLm5hbWUgPSBcIkFJXCI7XG4gICAgdGhpcy5ib2FyZCA9IG5ldyBnYW1lYm9hcmQoKTtcbiAgICB0aGlzLmF0dGFja0xvZyA9IFtdO1xuICAgIHRoaXMubmV4dEF0dGFjayA9IFtdO1xuICAgIHRoaXMubmV3QXR0YWNrZWRTaGlwID0gW107XG4gIH1cbiAgYXR0YWNrKHBsYXllcikge1xuICAgIGNvbnN0IGhhc0F0dGFja2VkID0gKFt4LCB5XSkgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuYXR0YWNrTG9nLnJlZHVjZSgoc3RhdGUsIGNvb3IpID0+IHtcbiAgICAgICAgaWYgKGNvb3JbMF0gPT0geCAmJiBjb29yWzFdID09IHkpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICAgIH1cbiAgICAgIH0sIGZhbHNlKTtcbiAgICB9O1xuXG4gICAgY29uc3QgYXR0YWNrUmFuZG9tbHkgPSAoKSA9PiB7XG4gICAgICBsZXQgeCA9IE1hdGguY2VpbChNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgbGV0IHkgPSBNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSAqIDEwKTtcblxuICAgICAgaWYgKGhhc0F0dGFja2VkKFt4LCB5XSkgPT0gdHJ1ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5hdHRhY2socGxheWVyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuYXR0YWNrTG9nLnB1c2goW3gsIHldKTtcbiAgICAgICAgcmV0dXJuIFt4LCB5XTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKHRoaXMubmV4dEF0dGFja1swXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBXZSBoYXZlIGhpdCBzb21ldGhpbmcgYmVmb3JlLCBhbmQgd2UgaGF2ZSBhdHRhY2tlZCBhIG5ldyBzcG90XG4gICAgICBpZiAoXG4gICAgICAgIHRoaXMuYXR0YWNrTG9nW3RoaXMuYXR0YWNrTG9nLmxlbmd0aCAtIDFdWzBdID09XG4gICAgICAgICAgcGxheWVyLmJvYXJkLmhpdHNbcGxheWVyLmJvYXJkLmhpdHMubGVuZ3RoIC0gMV1bMF0gJiZcbiAgICAgICAgdGhpcy5hdHRhY2tMb2dbdGhpcy5hdHRhY2tMb2cubGVuZ3RoIC0gMV1bMV0gPT1cbiAgICAgICAgICBwbGF5ZXIuYm9hcmQuaGl0c1twbGF5ZXIuYm9hcmQuaGl0cy5sZW5ndGggLSAxXVsxXVxuICAgICAgKSB7XG4gICAgICAgIC8vIFdlIGhpdCBzb21ldGhpbmcgbGFzdCB0aW1lXG4gICAgICAgIGxldCBwcmV2QXR0YWNrID0gdGhpcy5hdHRhY2tMb2dbdGhpcy5hdHRhY2tMb2cubGVuZ3RoIC0gMV07XG5cbiAgICAgICAgLy8gUHVzaCB0byBhdHRhY2tlZCBzaGlwXG4gICAgICAgIHRoaXMubmV3QXR0YWNrZWRTaGlwLnB1c2gocHJldkF0dGFjayk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLm5ld0F0dGFja2VkU2hpcC5sZW5ndGggPiAxKSB7XG4gICAgICAgIC8vIFRoaXMgbWVhbnMgd2UgaGF2ZSBoaXQgdHdvIHBvaW50cyBvZiB0aGUgc2hpcCwgd2Uga25vdyBpdCBkaXJlY3Rpb25cbiAgICAgICAgLy8gV2UgbmVlZCB0byBjaGFuZ2UgdGhlIHBsYW5cblxuICAgICAgICBpZiAodGhpcy5uZXdBdHRhY2tlZFNoaXBbMF1bMF0gPT0gdGhpcy5uZXdBdHRhY2tlZFNoaXBbMV1bMF0pIHtcbiAgICAgICAgICAvLyBJdHMgb24gdGhlIHkgYXhpc1xuXG4gICAgICAgICAgLy8gV2UgbmVlZCB0byBjbGVhciBuZXh0IGF0dGFjayB0byBwcmV2ZW50IGF0dGFja2luZyB1bm5lY2Vzc2FyeSBzcG90c1xuICAgICAgICAgIHRoaXMubmV4dEF0dGFjayA9IFtdO1xuXG4gICAgICAgICAgLy8gRmluZCBzaGlwIGVkZ2VzXG4gICAgICAgICAgLy8gRmluZCB0aGUgc21hbGxlc3RcbiAgICAgICAgICBsZXQgc2hpcFN0YXJ0ID0gdGhpcy5uZXdBdHRhY2tlZFNoaXAucmVkdWNlKFxuICAgICAgICAgICAgKHN0YXRlLCBjdXIpID0+IChzdGF0ZVsxXSA+IGN1clsxXSA/IGN1ciA6IHN0YXRlKSxcbiAgICAgICAgICAgIFswLCBJbmZpbml0eV1cbiAgICAgICAgICApO1xuICAgICAgICAgIC8vIEZpbmQgdGhlIGdyZWF0ZXN0XG4gICAgICAgICAgbGV0IHNoaXBFbmQgPSB0aGlzLm5ld0F0dGFja2VkU2hpcC5yZWR1Y2UoXG4gICAgICAgICAgICAoc3RhdGUsIGN1cikgPT4gKHN0YXRlWzFdIDwgY3VyWzFdID8gY3VyIDogc3RhdGUpLFxuICAgICAgICAgICAgWzAsIDAgLSBJbmZpbml0eV1cbiAgICAgICAgICApO1xuXG4gICAgICAgICAgLy8gRmluZCBlbmQgYW5kIHNlZSBpZiBpdCBuZWVkcyB0byBiZSBhdHRhY2tlZFxuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIGhhc0F0dGFja2VkKFtzaGlwRW5kWzBdLCBzaGlwRW5kWzFdICsgMV0pID09IGZhbHNlICYmXG4gICAgICAgICAgICBzaGlwRW5kWzFdICsgMSA8PSAxMFxuICAgICAgICAgICkge1xuICAgICAgICAgICAgLy8gV2UgbmVlZCB0byBhdHRhY2sgdGhpcyBzcG90IGxhdGVyXG4gICAgICAgICAgICB0aGlzLm5leHRBdHRhY2sucHVzaChbc2hpcEVuZFswXSwgc2hpcEVuZFsxXSArIDFdKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gRmluZCBzdGFydCBhbmQgc2VlIGlmIGl0IG5lZWRzIHRvIGJlIGF0dGFja2VkXG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgaGFzQXR0YWNrZWQoW3NoaXBTdGFydFswXSwgc2hpcFN0YXJ0WzFdIC0gMV0pID09IGZhbHNlICYmXG4gICAgICAgICAgICBzaGlwU3RhcnRbMV0gLSAxID49IDFcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIC8vIFdlIG5lZWQgdG8gYXR0YWNrIHRoaXMgc3BvdCBsYXRlclxuICAgICAgICAgICAgdGhpcy5uZXh0QXR0YWNrLnB1c2goW3NoaXBTdGFydFswXSwgc2hpcFN0YXJ0WzFdIC0gMV0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIChoYXNBdHRhY2tlZChbc2hpcEVuZFswXSwgc2hpcEVuZFsxXSArIDFdKSA9PSB0cnVlIHx8XG4gICAgICAgICAgICAgIHNoaXBFbmRbMV0gKyAxID4gMTApICYmXG4gICAgICAgICAgICAoaGFzQXR0YWNrZWQoW3NoaXBTdGFydFswXSwgc2hpcFN0YXJ0WzFdIC0gMV0pID09IHRydWUgfHxcbiAgICAgICAgICAgICAgc2hpcFN0YXJ0WzFdIC0gMSA8IDEpXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICAvLyBXZSBoYXZlIGRlc3Ryb3llZCB0aGUgaW50aWVyZSBzaGlwXG5cbiAgICAgICAgICAgIC8vIENsZWFyIGF0dGFja2luZyBzaGlwLCBiZWNhdXNlIGl0IGlzIGRlc3Ryb3llZFxuICAgICAgICAgICAgdGhpcy5uZXdBdHRhY2tlZFNoaXAgPSBbXTtcblxuICAgICAgICAgICAgcmV0dXJuIGF0dGFja1JhbmRvbWx5KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIEl0cyBvbiB0aGUgeCBheGlzXG5cbiAgICAgICAgICAvLyBXZSBuZWVkIHRvIGNsZWFyIG5leHQgYXR0YWNrIHRvIHByZXZlbnQgYXR0YWNraW5nIHVubmVjZXNzYXJ5IHNwb3RzXG4gICAgICAgICAgdGhpcy5uZXh0QXR0YWNrID0gW107XG5cbiAgICAgICAgICAvLyBGaW5kIHNoaXAgZWRnZXNcblxuICAgICAgICAgIC8vIEZpbmQgdGhlIHNtYWxsZXN0XG4gICAgICAgICAgbGV0IHNoaXBTdGFydCA9IHRoaXMubmV3QXR0YWNrZWRTaGlwLnJlZHVjZShcbiAgICAgICAgICAgIChzdGF0ZSwgY3VyKSA9PiAoc3RhdGVbMF0gPiBjdXJbMF0gPyBjdXIgOiBzdGF0ZSksXG4gICAgICAgICAgICBbSW5maW5pdHksIDBdXG4gICAgICAgICAgKTtcbiAgICAgICAgICAvLyBGaW5kIHRoZSBncmVhdGVzdFxuICAgICAgICAgIGxldCBzaGlwRW5kID0gdGhpcy5uZXdBdHRhY2tlZFNoaXAucmVkdWNlKFxuICAgICAgICAgICAgKHN0YXRlLCBjdXIpID0+IChzdGF0ZVswXSA8IGN1clswXSA/IGN1ciA6IHN0YXRlKSxcbiAgICAgICAgICAgIFswIC0gSW5maW5pdHksIDBdXG4gICAgICAgICAgKTtcblxuICAgICAgICAgIC8vIEZpbmQgZW5kIGFuZCBzZWUgaWYgaXQgbmVlZHMgdG8gYmUgYXR0YWNrZWRcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBoYXNBdHRhY2tlZChbc2hpcEVuZFswXSArIDEsIHNoaXBFbmRbMV1dKSA9PSBmYWxzZSAmJlxuICAgICAgICAgICAgc2hpcEVuZFswXSArIDEgPD0gMTBcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIC8vIFdlIG5lZWQgdG8gYXR0YWNrIHRoaXMgc3BvdCBsYXRlclxuICAgICAgICAgICAgdGhpcy5uZXh0QXR0YWNrLnB1c2goW3NoaXBFbmRbMF0gKyAxLCBzaGlwRW5kWzFdXSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIEZpbmQgc3RhcnQgYW5kIHNlZSBpZiBpdCBuZWVkcyB0byBiZSBhdHRhY2tlZFxuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIGhhc0F0dGFja2VkKFtzaGlwU3RhcnRbMF0gLSAxLCBzaGlwU3RhcnRbMV1dKSA9PSBmYWxzZSAmJlxuICAgICAgICAgICAgc2hpcFN0YXJ0WzBdIC0gMSA+PSAxXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICAvLyBXZSBuZWVkIHRvIGF0dGFjayB0aGlzIHNwb3QgbGF0ZXJcbiAgICAgICAgICAgIHRoaXMubmV4dEF0dGFjay5wdXNoKFtzaGlwU3RhcnRbMF0gLSAxLCBzaGlwU3RhcnRbMV1dKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAoaGFzQXR0YWNrZWQoW3NoaXBFbmRbMF0gKyAxLCBzaGlwRW5kWzFdXSkgPT0gdHJ1ZSB8fFxuICAgICAgICAgICAgICBzaGlwRW5kWzBdICsgMSA+IDEwKSAmJlxuICAgICAgICAgICAgKGhhc0F0dGFja2VkKFtzaGlwU3RhcnRbMF0gLSAxLCBzaGlwU3RhcnRbMV1dKSA9PSB0cnVlIHx8XG4gICAgICAgICAgICAgIHNoaXBTdGFydFswXSAtIDEgPCAxKVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgLy8gQ2xlYXIgYXR0YWNraW5nIHNoaXAsIGJlY2F1c2UgaXQgaXMgZGVzdHJveWVkXG5cbiAgICAgICAgICAgIC8vIENsZWFyIGF0dGFja2luZyBzaGlwXG4gICAgICAgICAgICB0aGlzLm5ld0F0dGFja2VkU2hpcCA9IFtdO1xuXG4gICAgICAgICAgICByZXR1cm4gYXR0YWNrUmFuZG9tbHkoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vIHdlIG5lZWQgdG8gYXR0YWNrIGFjb3JkaW5nbHkgdG8gb3VyIHBsYW5cblxuICAgICAgdGhpcy5hdHRhY2tMb2cucHVzaCh0aGlzLm5leHRBdHRhY2tbMF0pO1xuICAgICAgdGhpcy5uZXh0QXR0YWNrLnNoaWZ0KCk7XG5cbiAgICAgIC8vIFRvIG1ha2Ugc3VyZSBpdCBkb3Nlbid0IHNraXAgYW4gYXR0YWNrIGJlY2F1c2UgbmV4dEF0dGFja1swXSA9PSB1bmRlZmluZGVkXG4gICAgICBpZiAodGhpcy5uZXh0QXR0YWNrWzBdID09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLm5leHRBdHRhY2sucHVzaChudWxsKTtcbiAgICAgIH1cblxuICAgICAgLy8gSWYgYWxsIHNwb3RzIGFyb3VuZCB0aGUgc2hpcCBoYXMgYmVlbiBhdHRhY2tlZFxuICAgICAgaWYgKFxuICAgICAgICBoYXNBdHRhY2tlZChbXG4gICAgICAgICAgdGhpcy5uZXdBdHRhY2tlZFNoaXBbMF1bMF0gLSAxLFxuICAgICAgICAgIHRoaXMubmV3QXR0YWNrZWRTaGlwWzBdWzFdLFxuICAgICAgICBdKSA9PSB0cnVlICYmXG4gICAgICAgIGhhc0F0dGFja2VkKFtcbiAgICAgICAgICB0aGlzLm5ld0F0dGFja2VkU2hpcFswXVswXSArIDEsXG4gICAgICAgICAgdGhpcy5uZXdBdHRhY2tlZFNoaXBbMF1bMV0sXG4gICAgICAgIF0pID09IHRydWUgJiZcbiAgICAgICAgaGFzQXR0YWNrZWQoW1xuICAgICAgICAgIHRoaXMubmV3QXR0YWNrZWRTaGlwWzBdWzBdLFxuICAgICAgICAgIHRoaXMubmV3QXR0YWNrZWRTaGlwWzBdWzFdICsgMSxcbiAgICAgICAgXSkgPT0gdHJ1ZSAmJlxuICAgICAgICBoYXNBdHRhY2tlZChbXG4gICAgICAgICAgdGhpcy5uZXdBdHRhY2tlZFNoaXBbMF1bMF0sXG4gICAgICAgICAgdGhpcy5uZXdBdHRhY2tlZFNoaXBbMF1bMV0gLSAxLFxuICAgICAgICBdKSA9PSB0cnVlXG4gICAgICApIHtcbiAgICAgICAgLy8gV2Ugc2hvdWxkbid0IGF0dGFjayBhcm91bmQgdGhlIHNoaXBcblxuICAgICAgICAvLyBDbGVhciBuZXdBdHRhY2tlZFNoaXBcbiAgICAgICAgdGhpcy5uZXdBdHRhY2tlZFNoaXAgPSBbXTtcblxuICAgICAgICAvLyBDbGVhciBuZXh0XG4gICAgICAgIHRoaXMubmV4dEF0dGFjayA9IFtdO1xuXG4gICAgICAgIC8vIE1ha2UgYSByYW5kb20gYXR0YWNrXG4gICAgICAgIGF0dGFja1JhbmRvbWx5KCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5hdHRhY2tMb2dbdGhpcy5hdHRhY2tMb2cubGVuZ3RoIC0gMV07XG4gICAgfSBlbHNlIGlmICh0aGlzLmF0dGFja0xvZy5sZW5ndGggPiAwICYmIHBsYXllci5ib2FyZC5oaXRzLmxlbmd0aCA+IDApIHtcbiAgICAgIGlmIChcbiAgICAgICAgdGhpcy5hdHRhY2tMb2dbdGhpcy5hdHRhY2tMb2cubGVuZ3RoIC0gMV1bMF0gPT1cbiAgICAgICAgICBwbGF5ZXIuYm9hcmQuaGl0c1twbGF5ZXIuYm9hcmQuaGl0cy5sZW5ndGggLSAxXVswXSAmJlxuICAgICAgICB0aGlzLmF0dGFja0xvZ1t0aGlzLmF0dGFja0xvZy5sZW5ndGggLSAxXVsxXSA9PVxuICAgICAgICAgIHBsYXllci5ib2FyZC5oaXRzW3BsYXllci5ib2FyZC5oaXRzLmxlbmd0aCAtIDFdWzFdXG4gICAgICApIHtcbiAgICAgICAgLy8gV2UgaGF2ZSBqdXN0IGhpdCBzb21ldGhpbmcsIGFuZCB3ZSBoYXZlIG5vIHByZXYgcGxhbnNcbiAgICAgICAgbGV0IHByZXZBdHRhY2sgPSB0aGlzLmF0dGFja0xvZ1t0aGlzLmF0dGFja0xvZy5sZW5ndGggLSAxXTtcblxuICAgICAgICAvLyBQdXNoIHRvIGF0dGFja2VkIHNoaXBcbiAgICAgICAgdGhpcy5uZXdBdHRhY2tlZFNoaXAucHVzaChwcmV2QXR0YWNrKTtcblxuICAgICAgICBpZiAoXG4gICAgICAgICAgcHJldkF0dGFja1swXSArIDEgPD0gMTAgJiZcbiAgICAgICAgICBoYXNBdHRhY2tlZChbcHJldkF0dGFja1swXSArIDEsIHByZXZBdHRhY2tbMV1dKSA9PSBmYWxzZVxuICAgICAgICApIHtcbiAgICAgICAgICAvLyBXZSBuZWVkIHRvIGNoZWNrIHRoaXMgc3BvdFxuICAgICAgICAgIHRoaXMubmV4dEF0dGFjay5wdXNoKFtwcmV2QXR0YWNrWzBdICsgMSwgcHJldkF0dGFja1sxXV0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChcbiAgICAgICAgICBwcmV2QXR0YWNrWzFdICsgMSA8PSAxMCAmJlxuICAgICAgICAgIGhhc0F0dGFja2VkKFtwcmV2QXR0YWNrWzBdLCBwcmV2QXR0YWNrWzFdICsgMV0pID09IGZhbHNlXG4gICAgICAgICkge1xuICAgICAgICAgIC8vIFdlIG5lZWQgdG8gY2hlY2sgdGhpcyBzcG90XG4gICAgICAgICAgdGhpcy5uZXh0QXR0YWNrLnB1c2goW3ByZXZBdHRhY2tbMF0sIHByZXZBdHRhY2tbMV0gKyAxXSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXG4gICAgICAgICAgcHJldkF0dGFja1swXSAtIDEgPj0gMSAmJlxuICAgICAgICAgIGhhc0F0dGFja2VkKFtwcmV2QXR0YWNrWzBdIC0gMSwgcHJldkF0dGFja1sxXV0pID09IGZhbHNlXG4gICAgICAgICkge1xuICAgICAgICAgIC8vIFdlIG5lZWQgdG8gY2hlY2sgdGhpcyBzcG90XG4gICAgICAgICAgdGhpcy5uZXh0QXR0YWNrLnB1c2goW3ByZXZBdHRhY2tbMF0gLSAxLCBwcmV2QXR0YWNrWzFdXSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKFxuICAgICAgICAgIHByZXZBdHRhY2tbMV0gLSAxID49IDEgJiZcbiAgICAgICAgICBoYXNBdHRhY2tlZChbcHJldkF0dGFja1swXSwgcHJldkF0dGFja1sxXSAtIDFdKSA9PSBmYWxzZVxuICAgICAgICApIHtcbiAgICAgICAgICAvLyBXZSBuZWVkIHRvIGNoZWNrIHRoaXMgc3BvdFxuICAgICAgICAgIHRoaXMubmV4dEF0dGFjay5wdXNoKFtwcmV2QXR0YWNrWzBdLCBwcmV2QXR0YWNrWzFdIC0gMV0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gbWFrZSBzdXJlIGl0IGRvc2VuJ3QgYXR0YWNrIHVuZGVmaW5lZFxuICAgICAgICBpZiAodGhpcy5uZXh0QXR0YWNrWzBdID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHJldHVybiBhdHRhY2tSYW5kb21seSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuYXR0YWNrTG9nLnB1c2godGhpcy5uZXh0QXR0YWNrWzBdKTtcbiAgICAgICAgICB0aGlzLm5leHRBdHRhY2suc2hpZnQoKTtcblxuICAgICAgICAgIHJldHVybiB0aGlzLmF0dGFja0xvZ1t0aGlzLmF0dGFja0xvZy5sZW5ndGggLSAxXTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gV2UgaGF2ZSBubyBjbHVlLCBzaG9vdCByYW5kb21seVxuICAgICAgICByZXR1cm4gYXR0YWNrUmFuZG9tbHkoKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gV2UgaGF2ZSBubyBjbHVlLCBzaG9vdCByYW5kb21seVxuICAgICAgcmV0dXJuIGF0dGFja1JhbmRvbWx5KCk7XG4gICAgfVxuICB9XG4gIHBsYWNlU2hpcHMoKSB7XG4gICAgbGV0IHNoaXBBcnkgPSBbXTtcblxuICAgIGNvbnN0IGNhbGNDb29yID0gKHNoaXBMZW5ndGgpID0+IHtcbiAgICAgIGxldCB4ID0gTWF0aC5jZWlsKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICBsZXQgeSA9IE1hdGguY2VpbChNYXRoLnJhbmRvbSgpICogMTApO1xuXG4gICAgICBsZXQgc2hpcENvb3JBcnkgPSBbW3gsIHldXTtcblxuICAgICAgaWYgKE1hdGgucmFuZG9tKCkgPCAwLjUpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBzaGlwTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAoeCArIHNoaXBMZW5ndGggPD0gMTApIHtcbiAgICAgICAgICAgIHNoaXBDb29yQXJ5LnB1c2goW3ggKyBpLCB5XSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNoaXBDb29yQXJ5LnB1c2goW3ggLSBpLCB5XSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHNoaXBMZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmICh5ICsgc2hpcExlbmd0aCA8PSAxMCkge1xuICAgICAgICAgICAgc2hpcENvb3JBcnkucHVzaChbeCwgeSArIGldKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2hpcENvb3JBcnkucHVzaChbeCwgeSAtIGldKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGV0IGhhc0R1YiA9IChhcnIpID0+IGFyci5sZW5ndGggIT09IG5ldyBTZXQoYXJyKS5zaXplO1xuXG4gICAgICBsZXQgc2hpcENvb3JUZXN0QXJ5ID0gW107XG5cbiAgICAgIHNoaXBBcnkuZm9yRWFjaCgoc2hpcEVsQ29vcikgPT4ge1xuICAgICAgICBzaGlwRWxDb29yLmZvckVhY2goKGNvb3JTZXQpID0+IHtcbiAgICAgICAgICBzaGlwQ29vclRlc3RBcnkucHVzaChjb29yU2V0WzBdLnRvU3RyaW5nKCkgKyBjb29yU2V0WzFdLnRvU3RyaW5nKCkpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgICBzaGlwQ29vckFyeS5mb3JFYWNoKChjb29yU2V0KSA9PiB7XG4gICAgICAgIHNoaXBDb29yVGVzdEFyeS5wdXNoKGNvb3JTZXRbMF0udG9TdHJpbmcoKSArIGNvb3JTZXRbMV0udG9TdHJpbmcoKSk7XG4gICAgICB9KTtcblxuICAgICAgaWYgKGhhc0R1YihzaGlwQ29vclRlc3RBcnkpID09IHRydWUpIHtcbiAgICAgICAgcmV0dXJuIGNhbGNDb29yKHNoaXBMZW5ndGgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHNoaXBDb29yQXJ5O1xuICAgICAgfVxuICAgIH07XG5cbiAgICBzaGlwQXJ5LnB1c2goY2FsY0Nvb3IoMikpO1xuICAgIHNoaXBBcnkucHVzaChjYWxjQ29vcigzKSk7XG4gICAgc2hpcEFyeS5wdXNoKGNhbGNDb29yKDMpKTtcbiAgICBzaGlwQXJ5LnB1c2goY2FsY0Nvb3IoNCkpO1xuICAgIHNoaXBBcnkucHVzaChjYWxjQ29vcig0KSk7XG4gICAgc2hpcEFyeS5wdXNoKGNhbGNDb29yKDUpKTtcblxuICAgIHRoaXMuYm9hcmQucGxhY2VTaGlwcyhzaGlwQXJ5KTtcbiAgfVxufVxuXG5jb25zdCBuZXdBSSA9IG5ldyBBSSgpO1xubmV3QUkucGxhY2VTaGlwcygpO1xuXG5leHBvcnQgeyBwbGF5ZXIsIEFJIH07XG4iLCJjbGFzcyBzaGlwIHtcbiAgY29uc3RydWN0b3IoYXJ5KSB7XG4gICAgdGhpcy5sZW5ndGggPSBhcnkubGVuZ3RoO1xuICAgIHRoaXMuY29vciA9IGFyeTtcbiAgICB0aGlzLmhpdHMgPSAwO1xuICB9XG4gIGhpdCgpIHtcbiAgICB0aGlzLmhpdHMrKztcbiAgfVxuICBpc1N1bmsgPSAoKSA9PiAodGhpcy5oaXRzID09IHRoaXMubGVuZ3RoID8gdHJ1ZSA6IGZhbHNlKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc2hpcDtcbiIsImltcG9ydCB7XG4gIGxvYWRpbmdTY3JlZW4sXG4gIHBsYWNlU2hpcHNET00sXG4gIHBsYXlBZ2FpbnN0QUksXG4gIHJlc3VtZUdhbWUsXG4gIHR3b1BsYXllcixcbn0gZnJvbSBcIi4vZ2FtZWxvb3BcIjtcblxubG9hZGluZ1NjcmVlbigpO1xuXG5pZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJnYW1lXCIpKSB7XG4gIC8vIElmIHRoZXJlIGlzIGRhdGEgb2YgcHJldml1cyBnYW1lLCBsZXQgdGhlbSByZXN1bWVcbiAgcmVzdW1lR2FtZSgpLnRoZW4oKCkgPT4ge1xuICAgIGNvbnN0IGdhbWUgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZ2FtZVwiKSk7XG5cbiAgICBpZiAoZ2FtZS5wbGF5ZXIxICE9PSB1bmRlZmluZWQgJiYgZ2FtZS5wbGF5ZXIyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEl0cyBhIHR3byBwbGF5ZXIgZ2FtZVxuXG4gICAgICBpZiAoXG4gICAgICAgIGdhbWUucGxheWVyMS5ib2FyZC5zaGlwc1swXSAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAgIGdhbWUucGxheWVyMi5ib2FyZC5zaGlwc1swXSAhPT0gdW5kZWZpbmVkXG4gICAgICApIHtcbiAgICAgICAgLy8gQWxsIHNoaXBzIGhhdmUgYmVlbiBwbGFjZWRcblxuICAgICAgICAvLyBDcmVhdGUgbmV3IGdhbWVcbiAgICAgICAgY29uc3QgbmV3R2FtZSA9IG5ldyB0d29QbGF5ZXIoZ2FtZS5wbGF5ZXIxLm5hbWUsIGdhbWUucGxheWVyMi5uYW1lKTtcblxuICAgICAgICAvLyBQdXNoIHNoaXAgY29vcmRpbmF0c1xuICAgICAgICBjb25zdCBwMVNoaXBDb29yID0gW107XG5cbiAgICAgICAgZ2FtZS5wbGF5ZXIxLmJvYXJkLnNoaXBzLmZvckVhY2goKHNoaXBFbCkgPT4ge1xuICAgICAgICAgIHAxU2hpcENvb3IucHVzaChzaGlwRWwuY29vcik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFB1c2ggc2hpcCBjb29yZGluYXRzXG4gICAgICAgIGNvbnN0IHAyU2hpcENvb3IgPSBbXTtcblxuICAgICAgICBnYW1lLnBsYXllcjIuYm9hcmQuc2hpcHMuZm9yRWFjaCgoc2hpcEVsKSA9PiB7XG4gICAgICAgICAgcDJTaGlwQ29vci5wdXNoKHNoaXBFbC5jb29yKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQWRkIG5ldyBzaGlwcyBzbyB0aGV5IGhhdmUgbWV0aG9lZHNcbiAgICAgICAgbmV3R2FtZS5wbGF5ZXIxLmJvYXJkLnBsYWNlU2hpcHMocDFTaGlwQ29vcik7XG4gICAgICAgIG5ld0dhbWUucGxheWVyMi5ib2FyZC5wbGFjZVNoaXBzKHAyU2hpcENvb3IpO1xuXG4gICAgICAgIC8vIEFkZCBhdHRhY2tzIGJ5IHJlY2l2aW5nIGFsbCBhdHRhY2tzLCBzbyBzaGlwcyB1cGRhdGUgdG9vXG4gICAgICAgIGdhbWUucGxheWVyMS5ib2FyZC5oaXRzLmZvckVhY2goKGhpdENvb3IpID0+IHtcbiAgICAgICAgICBuZXdHYW1lLnBsYXllcjEuYm9hcmQucmVjaWV2ZUF0dGFjayhoaXRDb29yKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQ29weSBtaXNzZWQgbG9nXG4gICAgICAgIG5ld0dhbWUucGxheWVyMS5ib2FyZC5taXNzZWQgPSBnYW1lLnBsYXllcjEuYm9hcmQubWlzc2VkO1xuXG4gICAgICAgIC8vIEFkZCBhdHRhY2tzIGJ5IHJlY2l2aW5nIGFsbCBhdHRhY2tzLCBzbyBzaGlwcyB1cGRhdGUgdG9vXG4gICAgICAgIGdhbWUucGxheWVyMi5ib2FyZC5oaXRzLmZvckVhY2goKGhpdENvb3IpID0+IHtcbiAgICAgICAgICBuZXdHYW1lLnBsYXllcjIuYm9hcmQucmVjaWV2ZUF0dGFjayhoaXRDb29yKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQ29weSBtaXNzZWQgbG9nXG4gICAgICAgIG5ld0dhbWUucGxheWVyMi5ib2FyZC5taXNzZWQgPSBnYW1lLnBsYXllcjIuYm9hcmQubWlzc2VkO1xuXG4gICAgICAgIC8vIFJlbW92ZSB0aGUgbG9hZGluZ1NjcmVlblxuICAgICAgICBjb25zdCBsb2FkaW5nU2NyZWVuRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvYWRpbmdTY3JlZW5FbFwiKTtcblxuICAgICAgICBsb2FkaW5nU2NyZWVuRWwuc3R5bGUudHJhbnNpdGlvbiA9IFwiMXNcIjtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgbG9hZGluZ1NjcmVlbkVsLnN0eWxlLm9wYWNpdHkgPSBcIjBcIjtcbiAgICAgICAgfSwgNTApO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGxvYWRpbmdTY3JlZW5FbCk7XG4gICAgICAgIH0sIDEwNTApO1xuXG4gICAgICAgIC8vIENoZWNrIHdob21zIHR1cm4gaXQgd2FzXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIG5ld0dhbWUucGxheWVyMS5ib2FyZC5taXNzZWQubGVuZ3RoICtcbiAgICAgICAgICAgICAgbmV3R2FtZS5wbGF5ZXIxLmJvYXJkLmhpdHMubGVuZ3RoID09XG4gICAgICAgICAgICBuZXdHYW1lLnBsYXllcjIuYm9hcmQubWlzc2VkLmxlbmd0aCArXG4gICAgICAgICAgICAgIG5ld0dhbWUucGxheWVyMi5ib2FyZC5oaXRzLmxlbmd0aFxuICAgICAgICAgICkge1xuICAgICAgICAgICAgLy8gSXRzIHBsYXllciAxJ3MgdHVyblxuICAgICAgICAgICAgbmV3R2FtZS5wYXNzU2NyZWVuRE9NKG5ld0dhbWUucGxheWVyMSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgIG5ld0dhbWUuYXR0YWNrQ3ljbGVET00obmV3R2FtZS5wbGF5ZXIxLCBuZXdHYW1lLnBsYXllcjIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIEl0cyBwbGF5ZXIgMidzIHR1cm5cbiAgICAgICAgICAgIG5ld0dhbWUucGFzc1NjcmVlbkRPTShuZXdHYW1lLnBsYXllcjIpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICBuZXdHYW1lLmF0dGFja0N5Y2xlRE9NKG5ld0dhbWUucGxheWVyMiwgbmV3R2FtZS5wbGF5ZXIxKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgMTA1MCk7XG4gICAgICB9IGVsc2UgaWYgKGdhbWUucGxheWVyMS5ib2FyZC5zaGlwc1swXSA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgLy8gTm8gc2hpcHMgaGF2ZSBiZWVuIHBsYWNlZFxuXG4gICAgICAgIC8vIENyZWF0ZSBuZXcgZ2FtZVxuICAgICAgICBjb25zdCBuZXdHYW1lID0gbmV3IHR3b1BsYXllcihnYW1lLnBsYXllcjEubmFtZSwgZ2FtZS5wbGF5ZXIyLm5hbWUpO1xuXG4gICAgICAgIC8vIFJlbW92ZSB0aGUgbG9hZGluZ1NjcmVlblxuICAgICAgICBjb25zdCBsb2FkaW5nU2NyZWVuRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvYWRpbmdTY3JlZW5FbFwiKTtcblxuICAgICAgICBsb2FkaW5nU2NyZWVuRWwuc3R5bGUudHJhbnNpdGlvbiA9IFwiMXNcIjtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgbG9hZGluZ1NjcmVlbkVsLnN0eWxlLm9wYWNpdHkgPSBcIjBcIjtcbiAgICAgICAgfSwgNTApO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGxvYWRpbmdTY3JlZW5FbCk7XG4gICAgICAgIH0sIDEwNTApO1xuXG4gICAgICAgIC8vIFByZWNlZWQgd2l0aCBnYW1lY3ljbGVcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgbmV3R2FtZS5wYXNzU2NyZWVuRE9NKG5ld0dhbWUucGxheWVyMSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBwbGFjZVNoaXBzRE9NKG5ld0dhbWUucGxheWVyMSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZ2FtZVwiLCBKU09OLnN0cmluZ2lmeShuZXdHYW1lKSk7XG4gICAgICAgICAgICAgIG5ld0dhbWUucGFzc1NjcmVlbkRPTShuZXdHYW1lLnBsYXllcjIpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIHBsYWNlU2hpcHNET00obmV3R2FtZS5wbGF5ZXIyKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZ2FtZVwiLCBKU09OLnN0cmluZ2lmeShuZXdHYW1lKSk7XG4gICAgICAgICAgICAgICAgICBuZXdHYW1lLnBhc3NTY3JlZW5ET00obmV3R2FtZS5wbGF5ZXIxKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbmV3R2FtZS5hdHRhY2tDeWNsZURPTShuZXdHYW1lLnBsYXllcjEsIG5ld0dhbWUucGxheWVyMik7XG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSwgMTA1MCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBwbGF5ZXIgMSBoYXMgcGxhY2VkIHRoZWlyIHNoaXBzXG5cbiAgICAgICAgLy8gQ3JlYXRlIG5ldyBnYW1lXG4gICAgICAgIGNvbnN0IG5ld0dhbWUgPSBuZXcgdHdvUGxheWVyKGdhbWUucGxheWVyMS5uYW1lLCBnYW1lLnBsYXllcjIubmFtZSk7XG5cbiAgICAgICAgLy8gUmVtb3ZlIHRoZSBsb2FkaW5nU2NyZWVuXG4gICAgICAgIGNvbnN0IGxvYWRpbmdTY3JlZW5FbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9hZGluZ1NjcmVlbkVsXCIpO1xuXG4gICAgICAgIGxvYWRpbmdTY3JlZW5FbC5zdHlsZS50cmFuc2l0aW9uID0gXCIxc1wiO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBsb2FkaW5nU2NyZWVuRWwuc3R5bGUub3BhY2l0eSA9IFwiMFwiO1xuICAgICAgICB9LCA1MCk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQobG9hZGluZ1NjcmVlbkVsKTtcbiAgICAgICAgfSwgMTA1MCk7XG5cbiAgICAgICAgLy8gUHVzaCBzaGlwIGNvb3JkaW5hdHNcbiAgICAgICAgY29uc3QgcDFTaGlwQ29vciA9IFtdO1xuXG4gICAgICAgIGdhbWUucGxheWVyMS5ib2FyZC5zaGlwcy5mb3JFYWNoKChzaGlwRWwpID0+IHtcbiAgICAgICAgICBwMVNoaXBDb29yLnB1c2goc2hpcEVsLmNvb3IpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBBZGQgbmV3IHNoaXBzIHNvIHRoZXkgaGF2ZSBtZXRob2Vkc1xuICAgICAgICBuZXdHYW1lLnBsYXllcjEuYm9hcmQucGxhY2VTaGlwcyhwMVNoaXBDb29yKTtcblxuICAgICAgICAvLyBQcmVjZWVkIHdpdGggZ2FtZWN5Y2xlXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIG5ld0dhbWUucGFzc1NjcmVlbkRPTShuZXdHYW1lLnBsYXllcjIpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgcGxhY2VTaGlwc0RPTShuZXdHYW1lLnBsYXllcjIpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImdhbWVcIiwgSlNPTi5zdHJpbmdpZnkobmV3R2FtZSkpO1xuICAgICAgICAgICAgICBuZXdHYW1lLnBhc3NTY3JlZW5ET00obmV3R2FtZS5wbGF5ZXIxKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICBuZXdHYW1lLmF0dGFja0N5Y2xlRE9NKG5ld0dhbWUucGxheWVyMSwgbmV3R2FtZS5wbGF5ZXIyKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSwgMTA1MCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIEl0cyBhbiBBSSBnYW1lXG5cbiAgICAgIGNvbnN0IG5ld0dhbWUgPSBuZXcgcGxheUFnYWluc3RBSShcIlwiKTtcblxuICAgICAgLy8gQ29weSBjb29yZGluYXRlc1xuICAgICAgY29uc3QgcGxheWVyU2hpcENvb3IgPSBbXTtcblxuICAgICAgZ2FtZS5wbGF5ZXIuYm9hcmQuc2hpcHMuZm9yRWFjaCgoc2hpcEVsKSA9PiB7XG4gICAgICAgIHBsYXllclNoaXBDb29yLnB1c2goc2hpcEVsLmNvb3IpO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIFBsYWNlIHNoaXBzIGFnYWluIHNvIHNoaXBzIGhhdmUgbWV0aG9lZHNcbiAgICAgIG5ld0dhbWUucGxheWVyLmJvYXJkLnBsYWNlU2hpcHMocGxheWVyU2hpcENvb3IpO1xuXG4gICAgICAvLyBBZGQgYXR0YWNrcyBieSByZWNpdmluZyBhbGwgYXR0YWNrcywgc28gc2hpcHMgdXBkYXRlIHRvb1xuICAgICAgZ2FtZS5wbGF5ZXIuYm9hcmQuaGl0cy5mb3JFYWNoKChoaXRDb29yKSA9PiB7XG4gICAgICAgIG5ld0dhbWUucGxheWVyLmJvYXJkLnJlY2lldmVBdHRhY2soaGl0Q29vcik7XG4gICAgICB9KTtcblxuICAgICAgLy8gQ29weSBtaXNzZWQgbG9nXG4gICAgICBuZXdHYW1lLnBsYXllci5ib2FyZC5taXNzZWQgPSBnYW1lLnBsYXllci5ib2FyZC5taXNzZWQ7XG5cbiAgICAgIC8vIENvcHkgY29vcmRpbmF0ZXNcbiAgICAgIGNvbnN0IEFJU2hpcENvb3IgPSBbXTtcblxuICAgICAgZ2FtZS5BSS5ib2FyZC5zaGlwcy5mb3JFYWNoKChzaGlwRWwpID0+IHtcbiAgICAgICAgQUlTaGlwQ29vci5wdXNoKHNoaXBFbC5jb29yKTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBQbGFjZSBzaGlwcyBhZ2FpbiBzbyBzaGlwcyBoYXZlIG1ldGhvZWRzXG4gICAgICBuZXdHYW1lLkFJLmJvYXJkLnBsYWNlU2hpcHMoQUlTaGlwQ29vcik7XG5cbiAgICAgIC8vIEFkZCBhdHRhY2tzIGJ5IHJlY2l2aW5nIGFsbCBhdHRhY2tzLCBzbyBzaGlwcyB1cGRhdGUgdG9vXG4gICAgICBnYW1lLkFJLmJvYXJkLmhpdHMuZm9yRWFjaCgoaGl0Q29vcikgPT4ge1xuICAgICAgICBuZXdHYW1lLkFJLmJvYXJkLnJlY2lldmVBdHRhY2soaGl0Q29vcik7XG4gICAgICB9KTtcblxuICAgICAgLy8gQ29weSBtaXNzZWQgbG9nXG4gICAgICBuZXdHYW1lLkFJLmJvYXJkLm1pc3NlZCA9IGdhbWUuQUkuYm9hcmQubWlzc2VkO1xuXG4gICAgICAvLyBDb3B5IGF0dGFjayBsb2dcbiAgICAgIG5ld0dhbWUuQUkuYXR0YWNrTG9nID0gZ2FtZS5BSS5hdHRhY2tMb2c7XG5cbiAgICAgIC8vIFJlbW92ZSB0aGUgbG9hZGluZ1NjcmVlblxuICAgICAgY29uc3QgbG9hZGluZ1NjcmVlbkVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2FkaW5nU2NyZWVuRWxcIik7XG5cbiAgICAgIGxvYWRpbmdTY3JlZW5FbC5zdHlsZS50cmFuc2l0aW9uID0gXCIxc1wiO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGxvYWRpbmdTY3JlZW5FbC5zdHlsZS5vcGFjaXR5ID0gXCIwXCI7XG4gICAgICB9LCA1MCk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChsb2FkaW5nU2NyZWVuRWwpO1xuICAgICAgfSwgMTA1MCk7XG5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBuZXdHYW1lLmRpc3BsYXlHYW1lRG9tKCk7XG4gICAgICB9LCAxMDUwKTtcbiAgICB9XG4gIH0pO1xufVxuIiwiaW1wb3J0IHsgcGxheWVyLCBBSSB9IGZyb20gXCIuL2FwcC9wbGF5ZXJcIjtcblxuLy8gU291bmRlZmZlY3RzXG5pbXBvcnQgYmF0dGxlTXVzaWNTcmMgZnJvbSBcIi4vQXVkaW8vYmF0dGxlLW9mLXRoZS1kcmFnb25zLTgwMzcubXAzXCI7XG5pbXBvcnQgY2xpY2tTb3VuZFNyYyBmcm9tIFwiLi9BdWRpby9jb21wdXRlci1wcm9jZXNzaW5nLXNvdW5kLWVmZmVjdHMtc2hvcnQtY2xpY2stc2VsZWN0LTAxLTEyMjEzNC5tcDNcIjtcbmltcG9ydCBidXR0b25TaGlmdFNvdW5kU3JjIGZyb20gXCIuL0F1ZGlvL2ludGVyZmFjZS1idXR0b24tMTU0MTgwLm1wM1wiO1xuaW1wb3J0IHdhdHRlclNwbGFzaFNvdW5kU3JjIGZyb20gXCIuL0F1ZGlvL3NwbGFzaC1ieS1ibGF1a3JldXotNjI2MS5tcDNcIjtcbmltcG9ydCBleHBsb3Rpb25Tb3VuZFNyYyBmcm9tIFwiLi9BdWRpby9tZWRpdW0tZXhwbG9zaW9uLTQwNDcyLm1wM1wiO1xuXG5pbXBvcnQgc2hpcCBmcm9tIFwiLi9hcHAvc2hpcHNcIjtcblxuLy8gSW1nXG5pbXBvcnQgcGFzc0RldmljZUltYWdlU3JjIGZyb20gXCIuL2ltYWdlcy9wYXNzRGV2aWNlU3JjLnBuZ1wiO1xuaW1wb3J0IHNldHRpbmdJY29uU3JjIGZyb20gXCIuL2ltYWdlcy9zZXR0aW5nc0ljb25TcmMuc3ZnXCI7XG5pbXBvcnQgYmFja0Fycm93SWNvblNyYyBmcm9tIFwiLi9pbWFnZXMvYmFja0Fycm93SWNvblNyYy5zdmdcIjtcblxubGV0IG1hc3RlclZvbHVtZSA9IDAuNTtcblxubGV0IG11c2ljVm9sdW1lID0gMTtcbmxldCBTRlhWb2x1bWUgPSAxO1xuXG4vLyBDaGVjayBsb2NhbHN0b3JhZ2UgZm9yIGF1ZGlvIGRhdGFcbmlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImF1ZGlvVm9sdW1lXCIpKSB7XG4gIC8vIFRoZXJlIGlzIGRhdGFcbiAgY29uc3QgYXVkaW9PYmogPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYXVkaW9Wb2x1bWVcIikpO1xuXG4gIC8vIFNldCBjdXJyZW50IHZvbHVtZVxuICBtYXN0ZXJWb2x1bWUgPSBhdWRpb09iai5tYXN0ZXJWb2x1bWU7XG4gIG11c2ljVm9sdW1lID0gYXVkaW9PYmoubXVzaWNWb2x1bWU7XG4gIFNGWFZvbHVtZSA9IGF1ZGlvT2JqLlNGWFZvbHVtZTtcbn1cblxuY29uc3Qgc2F2ZUF1ZGlvVG9TdG9yYWdlID0gKCkgPT4ge1xuICBjb25zdCBhdWRpb09iaiA9IHtcbiAgICBtYXN0ZXJWb2x1bWU6IG1hc3RlclZvbHVtZSxcbiAgICBtdXNpY1ZvbHVtZTogbXVzaWNWb2x1bWUsXG4gICAgU0ZYVm9sdW1lOiBTRlhWb2x1bWUsXG4gIH07XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYXVkaW9Wb2x1bWVcIiwgSlNPTi5zdHJpbmdpZnkoYXVkaW9PYmopKTtcbn07XG5cbmNvbnN0IGJhdHRsZU11c2ljID0gbmV3IEF1ZGlvKGJhdHRsZU11c2ljU3JjKTtcbmJhdHRsZU11c2ljLmxvb3AgPSB0cnVlO1xuXG5jb25zdCBjaGFuZ2VWb2x1bWUgPSAoKSA9PiB7XG4gIC8vIENoYW5nZSBtdXNpYyB2b2x1bWVcbiAgYmF0dGxlTXVzaWMudm9sdW1lID0gbWFzdGVyVm9sdW1lICogbXVzaWNWb2x1bWU7XG59O1xuXG5jaGFuZ2VWb2x1bWUoKTtcblxuY29uc3QgcGxheUJ1dHRvblNoaWZ0U291bmQgPSAoKSA9PiB7XG4gIGlmIChpbnRlcmFjdGVkID09IHRydWUpIHtcbiAgICBjb25zdCBzZnggPSBuZXcgQXVkaW8oYnV0dG9uU2hpZnRTb3VuZFNyYyk7XG4gICAgc2Z4LnZvbHVtZSA9IG1hc3RlclZvbHVtZSAqIFNGWFZvbHVtZTtcbiAgICBzZngucGxheSgpO1xuICB9XG59O1xuXG5jb25zdCBwbGF5Q2xpY2tTb3VuZCA9ICgpID0+IHtcbiAgaWYgKGludGVyYWN0ZWQgPT0gdHJ1ZSkge1xuICAgIGNvbnN0IHNmeCA9IG5ldyBBdWRpbyhjbGlja1NvdW5kU3JjKTtcbiAgICBzZngudm9sdW1lID0gbWFzdGVyVm9sdW1lICogU0ZYVm9sdW1lO1xuICAgIHNmeC5wbGF5KCk7XG4gIH1cbn07XG5cbmNvbnN0IHBsYXlTcGxhc2hTb3VuZCA9ICgpID0+IHtcbiAgaWYgKGludGVyYWN0ZWQgPT0gdHJ1ZSkge1xuICAgIGNvbnN0IHNmeCA9IG5ldyBBdWRpbyh3YXR0ZXJTcGxhc2hTb3VuZFNyYyk7XG4gICAgc2Z4LnZvbHVtZSA9IG1hc3RlclZvbHVtZSAqIFNGWFZvbHVtZTtcbiAgICBzZngucGxheSgpO1xuICB9XG59O1xuXG5jb25zdCBwbGF5RXhwbG9zaW9uU291bmQgPSAoKSA9PiB7XG4gIGlmIChpbnRlcmFjdGVkID09IHRydWUpIHtcbiAgICBjb25zdCBzZnggPSBuZXcgQXVkaW8oZXhwbG90aW9uU291bmRTcmMpO1xuICAgIHNmeC52b2x1bWUgPSBtYXN0ZXJWb2x1bWUgKiBTRlhWb2x1bWU7XG4gICAgc2Z4LnBsYXkoKTtcbiAgfVxufTtcblxubGV0IGludGVyYWN0ZWQgPSBmYWxzZTtcblxuZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBpZiAoaW50ZXJhY3RlZCA9PSBmYWxzZSkge1xuICAgIGJhdHRsZU11c2ljLnBsYXkoKTtcbiAgICBpbnRlcmFjdGVkID0gdHJ1ZTtcbiAgfVxufSk7XG5cbmNvbnN0IGxvYWRpbmdTY3JlZW4gPSAoKSA9PiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRlbnQuY2xhc3NMaXN0LmFkZChcImNvbnRlbnRDb25cIik7XG5cbiAgICAvLyBGb3IgdGFyZ2V0aW5nIGlmIHVuZmluaXNoZWQgZ2FtZSBpcyBvbiAoQ2hlY2sgY29udHJvbGxlci5qcyApXG4gICAgY29udGVudC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImxvYWRpbmdTY3JlZW5FbFwiKTtcblxuICAgIC8vIENyZWF0aW5nIGhlYWRlciBjb250YWluZXJcbiAgICBjb25zdCBoZWFkZXJDb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhlYWRlckNvbi5jbGFzc0xpc3QuYWRkKFwibG9hZGluZ3NjcmVlbkhlYWRlckNvblwiKTtcblxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwibG9hZGluZ3NjcmVlbkhlYWRlclwiKTtcbiAgICBoZWFkZXIudGV4dENvbnRlbnQgPSBcIkJBVFRMRVNISVBTXCI7XG5cbiAgICBoZWFkZXJDb24uYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuICAgIC8vIENyZWF0aW5nIGJ0bnNcbiAgICBjb25zdCBidG5Db24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGJ0bkNvbi5jbGFzc0xpc3QuYWRkKFwibG9hZGluZ3NjcmVlbkJ0bkNvblwiKTtcblxuICAgIC8vIFRvIG1ha2Ugc3VyZSBidG4gaXMgbm90IGFjdGl2YXRlZCB0d2ljZVxuICAgIGxldCBidG5DbGlja2VkID0gZmFsc2U7XG5cbiAgICBjb25zdCB0d29QbGF5ZXJCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIHR3b1BsYXllckJ0bi5jbGFzc0xpc3QuYWRkKFwibG9hZGluZ3NjcmVlblN0YXJ0QnRuXCIsIFwiYnRuXCIpO1xuICAgIHR3b1BsYXllckJ0bi50ZXh0Q29udGVudCA9IFwiMiBQbGF5ZXJcIjtcblxuICAgIHR3b1BsYXllckJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgLy8gUGxheWVzIHNvdW5kXG4gICAgICBwbGF5Q2xpY2tTb3VuZCgpO1xuXG4gICAgICAvLyBDaGVja3MgaWYgYSBidG4gYWxscmVhZHkgaGF2ZSBiZWVuIGNsaWNrZWRcbiAgICAgIGlmIChidG5DbGlja2VkID09IGZhbHNlKSB7XG4gICAgICAgIGJ0bkNsaWNrZWQgPSB0cnVlO1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgIC8vIEZhZGUgZXhpc3RpbmcgY29udGVudCBhd2F5XG4gICAgICAgICAgaGVhZGVyQ29uLnN0eWxlLm9wYWNpdHkgPSBcIjBcIjtcbiAgICAgICAgICBidG5Db24uc3R5bGUub3BhY2l0eSA9IFwiMFwiO1xuXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgfSwgNDAwMCk7XG4gICAgICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIC8vIFJlbW92ZSBjb250ZW50XG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChjb250ZW50KTtcblxuICAgICAgICAgIC8vIEFwcGVuZCB0aGUgbmV3IGNvbnRlbnRcbiAgICAgICAgICBjb25zdCBuZXdHYW1lID0gbmV3IHR3b1BsYXllcigpO1xuICAgICAgICAgIG5ld0dhbWUuZ2FtZUN5Y2xlRE9NKCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdHdvUGxheWVyQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsICgpID0+IHtcbiAgICAgIHBsYXlCdXR0b25TaGlmdFNvdW5kKCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBBSUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgQUlCdG4uY2xhc3NMaXN0LmFkZChcImxvYWRpbmdzY3JlZW5TdGFydEJ0blwiLCBcImJ0blwiKTtcbiAgICBBSUJ0bi50ZXh0Q29udGVudCA9IFwiQWdhaW5zdCBBSVwiO1xuXG4gICAgQUlCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIC8vIEFkZHMgY2xpY2sgc291bmRcbiAgICAgIHBsYXlDbGlja1NvdW5kKCk7XG5cbiAgICAgIC8vIENoZWNrcyBpZiBhIGJ0biBhbGxyZWFkeSBoYXZlIGJlZW4gY2xpY2tlZFxuICAgICAgaWYgKGJ0bkNsaWNrZWQgPT0gZmFsc2UpIHtcbiAgICAgICAgYnRuQ2xpY2tlZCA9IHRydWU7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgLy8gRmFkZSBleGlzdGluZyBjb250ZW50IGF3YXlcbiAgICAgICAgICBoZWFkZXJDb24uc3R5bGUub3BhY2l0eSA9IFwiMFwiO1xuICAgICAgICAgIGJ0bkNvbi5zdHlsZS5vcGFjaXR5ID0gXCIwXCI7XG5cbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICB9LCA0MDAwKTtcbiAgICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgLy8gUmVtb3ZlIGNvbnRlbnRcbiAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGNvbnRlbnQpO1xuXG4gICAgICAgICAgLy8gQXBwZW5kIHRoZSBuZXcgY29udGVudFxuICAgICAgICAgIGNvbnN0IG5ld0dhbWUgPSBuZXcgcGxheUFnYWluc3RBSSgpO1xuICAgICAgICAgIG5ld0dhbWUuZGlzcGxheUdhbWVjeWNsZURPTSgpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIEFJQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsICgpID0+IHtcbiAgICAgIHBsYXlCdXR0b25TaGlmdFNvdW5kKCk7XG4gICAgfSk7XG5cbiAgICBidG5Db24uYXBwZW5kQ2hpbGQodHdvUGxheWVyQnRuKTtcbiAgICBidG5Db24uYXBwZW5kQ2hpbGQoQUlCdG4pO1xuXG4gICAgLy8gQXBwZW5kaW5nIGFsbFxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyQ29uKTtcblxuICAgIC8vIE1ha2UgdGhlbSByZWFkeSB0byBmYWRlIGluIG9uIGxvYWRcbiAgICBidG5Db24uc3R5bGUub3BhY2l0eSA9IFwiMFwiO1xuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChidG5Db24pO1xuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250ZW50KTtcblxuICAgIC8vIEFwcGVuZGluZyBzZXR0aW5nIGJ0blxuICAgIHNldHRpbmdzRE9NKCk7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIC8vIE1ha2UgaGVhZGVyIHJpc2UgZWZmZWN0XG4gICAgICBoZWFkZXIuc3R5bGUuYm90dG9tID0gXCItMTBweFwiO1xuICAgIH0sIDUwMCk7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIC8vIE1ha2UgdGhlbSBmYWRlIGluXG4gICAgICBidG5Db24uc3R5bGUub3BhY2l0eSA9IFwiMVwiO1xuICAgIH0sIDIyMDApO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAvLyBXaGVuIGhlYWRlciBoYXZlIHJpc2VuLCBzdGFydCB3YXZlIGFuaW1hdGlvblxuICAgICAgaGVhZGVyLnN0eWxlLmFuaW1hdGlvbiA9IFwibW92ZSAzcyBlYXNlLWluLW91dCBpbmZpbml0ZSBhbHRlcm5hdGVcIjtcbiAgICB9LCA0NTAwKTtcbiAgfSk7XG59O1xuXG5jbGFzcyBwbGF5QWdhaW5zdEFJIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5wbGF5ZXIgPSBuZXcgcGxheWVyKFwiXCIpO1xuICAgIHRoaXMuQUkgPSBuZXcgQUkoKTtcbiAgfVxuICBkaXNwbGF5R2FtZWN5Y2xlRE9NKCkge1xuICAgIC8vIEZpcnN0IGRpc3BsYXkgcGxhY2VtZW50IHBhZ2VcbiAgICBwbGFjZVNoaXBzRE9NKHRoaXMucGxheWVyKS50aGVuKCgpID0+IHtcbiAgICAgIC8vIEFJIHBsYWNlIHNoaXBzXG4gICAgICB0aGlzLkFJLnBsYWNlU2hpcHMoKTtcblxuICAgICAgLy8gc2F2ZSBnYW1lIGluZm8gdG8gbG9jYWwgc3RvcmFnZVxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJnYW1lXCIsIEpTT04uc3RyaW5naWZ5KHRoaXMpKTtcblxuICAgICAgLy8gV2hlbiBwbGFjZW1lbnQgaXMgZG9uZSBkaXNwbGF5IGdhbWVcbiAgICAgIHRoaXMuZGlzcGxheUdhbWVEb20oKTtcbiAgICB9KTtcbiAgfVxuICBkaXNwbGF5R2FtZURvbSgpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgY29udGVudC5jbGFzc0xpc3QuYWRkKFwiY29udGVudENvblwiLCBcIkFJR2FtZUNvblwiKTtcblxuICAgICAgLy8gQ3JlYXRpbmcgaGVhZGVyXG4gICAgICBjb25zdCBoZWFkZXJDb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgaGVhZGVyQ29uLmNsYXNzTGlzdC5hZGQoXG4gICAgICAgIFwibG9hZGluZ3NjcmVlbkhlYWRlckNvblwiLFxuICAgICAgICBcImluZ2FtZUhlYWRlckNvblwiLFxuICAgICAgICBcIkFJR2FtZUhlYWRlckNvblwiXG4gICAgICApO1xuXG4gICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwibG9hZGluZ3NjcmVlbkhlYWRlclwiLCBcImluZ2FtZUhlYWRlclwiKTtcbiAgICAgIGhlYWRlci50ZXh0Q29udGVudCA9IFwiQkFUVExFU0hJUFNcIjtcblxuICAgICAgaGVhZGVyQ29uLmFwcGVuZENoaWxkKGhlYWRlcik7XG5cbiAgICAgIC8vIENyZWF0aW5nIGdhbWVib2FyZHNcbiAgICAgIGNvbnN0IGdhbWVib2FyZHNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgZ2FtZWJvYXJkc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY29udGVudENvblwiKTtcblxuICAgICAgY29uc3QgZW5lbXlHYW1lYm9hcmRDb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgZW5lbXlHYW1lYm9hcmRDb24uY2xhc3NMaXN0LmFkZChcImVuZW15R2FtZWJvYXJkQ29uXCIpO1xuXG4gICAgICBjb25zdCBlbmVteUdhbWVib2FyZEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgZW5lbXlHYW1lYm9hcmRIZWFkZXIuY2xhc3NMaXN0LmFkZChcImVuZW15R2FtZWJvYXJkSGVhZGVyXCIpO1xuICAgICAgZW5lbXlHYW1lYm9hcmRIZWFkZXIudGV4dENvbnRlbnQgPSBcIkVORU1ZIFNFQVNcIjtcblxuICAgICAgY29uc3QgZW5lbXlHYW1lYm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgZW5lbXlHYW1lYm9hcmQuY2xhc3NMaXN0LmFkZChcImVuZW15R2FtZWJvYXJkXCIpO1xuXG4gICAgICBlbmVteUdhbWVib2FyZENvbi5hcHBlbmRDaGlsZChlbmVteUdhbWVib2FyZCk7XG4gICAgICBlbmVteUdhbWVib2FyZENvbi5hcHBlbmRDaGlsZChlbmVteUdhbWVib2FyZEhlYWRlcik7XG5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAvLyBEaXNwbGF5IGZyaWVuZGx5IGhlYWRlciBhZnRlciA0c1xuICAgICAgICBmcmllbmRseUJvYXJkSGVhZGVyLnN0eWxlLm9wYWNpdHkgPSBcIjFcIjtcbiAgICAgIH0sIDQwMDApO1xuXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgLy8gRGlzcGxheSBlbmVteSBoZWFkZXIgYWZ0ZXIgNXMgd2l0aCByZWRcbiAgICAgICAgZW5lbXlHYW1lYm9hcmRIZWFkZXIuc3R5bGUub3BhY2l0eSA9IFwiMVwiO1xuICAgICAgICBlbmVteUdhbWVib2FyZEhlYWRlci5zdHlsZS5jb2xvciA9IFwicmVkXCI7XG4gICAgICB9LCA1MDAwKTtcblxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIC8vIFNldCBlbmVteSBoZWFkZXIgdHVybiB3aGl0ZSBhZ2FpblxuICAgICAgICBlbmVteUdhbWVib2FyZEhlYWRlci5zdHlsZS5jb2xvciA9IFwid2hpdGVcIjtcbiAgICAgIH0sIDcwMDApO1xuXG4gICAgICAvLyBDcmVhdGluZyB3YXZlIGFuaW1hdGlvbiBlbGVtZW50XG4gICAgICBjb25zdCBzZWFXYXZlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHNlYVdhdmUuY2xhc3NMaXN0LmFkZChcInNlYVdhdmVcIik7XG5cbiAgICAgIC8vIENyZWF0aW5nIHRoZSBmcmllbmRseSBib2FyZFxuICAgICAgY29uc3QgZnJpZW5kbHlCb2FyZGNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBmcmllbmRseUJvYXJkY29uLmNsYXNzTGlzdC5hZGQoXCJmcmllbmRseUJvYXJkY29uXCIpO1xuXG4gICAgICBjb25zdCBmcmllbmRseUJvYXJkSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICBmcmllbmRseUJvYXJkSGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJmcmllbmRseUJvYXJkSGVhZGVyXCIpO1xuICAgICAgZnJpZW5kbHlCb2FyZEhlYWRlci50ZXh0Q29udGVudCA9IFwiRlJJRU5ETFkgU0VBU1wiO1xuXG4gICAgICBjb25zdCBmcmllbmRseUJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGZyaWVuZGx5Qm9hcmQuY2xhc3NMaXN0LmFkZChcImZyaWVuZGx5Qm9hcmRcIik7XG5cbiAgICAgIGZyaWVuZGx5Qm9hcmRjb24uYXBwZW5kQ2hpbGQoZnJpZW5kbHlCb2FyZEhlYWRlcik7XG4gICAgICBmcmllbmRseUJvYXJkY29uLmFwcGVuZENoaWxkKGZyaWVuZGx5Qm9hcmQpO1xuXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgLy8gRGlzcGxheSBnYW1lYm9hcmRzIGFmdGVyIDNzXG4gICAgICAgIGVuZW15R2FtZWJvYXJkLnN0eWxlLm9wYWNpdHkgPSBcIjFcIjtcbiAgICAgICAgZnJpZW5kbHlCb2FyZC5zdHlsZS5vcGFjaXR5ID0gXCIxXCI7XG4gICAgICB9LCAzMDAwKTtcblxuICAgICAgbGV0IGdhbWVTdG9wcGVkID0gZmFsc2U7XG5cbiAgICAgIGNvbnN0IHBvcHVsYXRlRW5lbXlHYW1lYm9hcmQgPSAoKSA9PiB7XG4gICAgICAgIC8vIENyZWF0ZSBhbGwgZ3JpZCBzbG90c1xuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAxMDsgaSsrKSB7XG4gICAgICAgICAgZm9yIChsZXQgaiA9IDE7IGogPD0gMTA7IGorKykge1xuICAgICAgICAgICAgY29uc3Qgc2xvdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBzbG90LmNsYXNzTGlzdC5hZGQoXCJlbmVteUdyaWRTbG90XCIpO1xuXG4gICAgICAgICAgICAvLyBJZiBpdCBoYXZlIGJlZW4gYXR0YWNrZWRcbiAgICAgICAgICAgIGxldCBoYXZlQmVlbkF0dGFja2VkID0gZmFsc2U7XG5cbiAgICAgICAgICAgIC8vIENoZWNrcyBpZiBpdCBoYXZlIGJlZW4gaGl0XG4gICAgICAgICAgICB0aGlzLkFJLmJvYXJkLmhpdHMuZm9yRWFjaCgoY29vcikgPT4ge1xuICAgICAgICAgICAgICAvLyBDb21wYXJlIGNvb3JkaW5hdGVzXG4gICAgICAgICAgICAgIGlmIChqID09IGNvb3JbMF0gJiYgaSA9PSBjb29yWzFdKSB7XG4gICAgICAgICAgICAgICAgc2xvdC5jbGFzc0xpc3QuYWRkKFwiZW5lbXlHcmlkU2xvdEhpdFwiKTtcbiAgICAgICAgICAgICAgICBoYXZlQmVlbkF0dGFja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyBDaGVja3MgaWYgaXQgaGF2ZSBiZWVuIGF0dGFja2VkIGJ1dCBtaXNzZWRcbiAgICAgICAgICAgIHRoaXMuQUkuYm9hcmQubWlzc2VkLmZvckVhY2goKGNvb3IpID0+IHtcbiAgICAgICAgICAgICAgLy8gQ29tcGFyZSBjb29yZGluYXRlc1xuICAgICAgICAgICAgICBpZiAoaiA9PSBjb29yWzBdICYmIGkgPT0gY29vclsxXSkge1xuICAgICAgICAgICAgICAgIHNsb3QuY2xhc3NMaXN0LmFkZChcImVuZW15R3JpZFNsb3RNaXNzZWRcIik7XG4gICAgICAgICAgICAgICAgaGF2ZUJlZW5BdHRhY2tlZCA9IHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBJZiBpdCBoYXZlbnQgYmVlbiBhdHRhY2tlZCwgbWFrZSByZWFkeSBmb3IgaXRcbiAgICAgICAgICAgIGlmIChoYXZlQmVlbkF0dGFja2VkID09IGZhbHNlKSB7XG4gICAgICAgICAgICAgIHNsb3QuY2xhc3NMaXN0LmFkZChcImVuZW15R3JpZFNsb3RVbmF0dGFja2VkXCIpO1xuICAgICAgICAgICAgICBzbG90LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gT24gY2xpY2sgYXR0YWNrIEFJIHdpdGggY29vcmRpbmF0ZXNcbiAgICAgICAgICAgICAgICBpZiAoZ2FtZVN0b3BwZWQgIT09IHRydWUpIEFJQXR0YWNrY3ljbGUoW2osIGldKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGVuZW15R2FtZWJvYXJkLmFwcGVuZENoaWxkKHNsb3QpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgY29uc3QgcG9wdWxhdGVGcmllbmRseUdhbWVib2FyZCA9ICgpID0+IHtcbiAgICAgICAgLy8gQ3JlYXRlIGFsbCBncmlkIHNsb3RzXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDEwOyBpKyspIHtcbiAgICAgICAgICBmb3IgKGxldCBqID0gMTsgaiA8PSAxMDsgaisrKSB7XG4gICAgICAgICAgICBjb25zdCBzbG90ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIHNsb3QuY2xhc3NMaXN0LmFkZChcImVuZW15R3JpZFNsb3RcIik7XG5cbiAgICAgICAgICAgIC8vIElmIGEgc2hpcCBoYXMgYmVlbiBoaXRcbiAgICAgICAgICAgIHRoaXMucGxheWVyLmJvYXJkLmhpdHMuZm9yRWFjaCgoY29vcikgPT4ge1xuICAgICAgICAgICAgICAvLyBDb21wYXJlIGNvb3JkaW5hdGVzXG4gICAgICAgICAgICAgIGlmIChqID09IGNvb3JbMF0gJiYgaSA9PSBjb29yWzFdKSB7XG4gICAgICAgICAgICAgICAgc2xvdC5jbGFzc0xpc3QuYWRkKFwiZW5lbXlHcmlkU2xvdEhpdFwiKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyBJZiB0aGUgZW5lbXkgaGF2ZSBtaXNzZWRcbiAgICAgICAgICAgIHRoaXMucGxheWVyLmJvYXJkLm1pc3NlZC5mb3JFYWNoKChjb29yKSA9PiB7XG4gICAgICAgICAgICAgIC8vIENvbXBhcmUgY29vcmRpbmF0ZXNcbiAgICAgICAgICAgICAgaWYgKGogPT0gY29vclswXSAmJiBpID09IGNvb3JbMV0pIHtcbiAgICAgICAgICAgICAgICBzbG90LmNsYXNzTGlzdC5hZGQoXCJlbmVteUdyaWRTbG90TWlzc2VkXCIpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vIElmIHNsb3QgaXMgYSBzaGlwXG4gICAgICAgICAgICB0aGlzLnBsYXllci5ib2FyZC5zaGlwcy5mb3JFYWNoKChzaGlwRWwpID0+IHtcbiAgICAgICAgICAgICAgc2hpcEVsLmNvb3IuZm9yRWFjaCgoY29vcikgPT4ge1xuICAgICAgICAgICAgICAgIC8vIENvbXBhcmUgY29vcmRpbmF0ZXNcbiAgICAgICAgICAgICAgICBpZiAoaiA9PSBjb29yWzBdICYmIGkgPT0gY29vclsxXSkge1xuICAgICAgICAgICAgICAgICAgc2xvdC5jbGFzc0xpc3QuYWRkKFwiZnJpZW5kbHlHcmlkU2xvdFNoaXBcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBmcmllbmRseUJvYXJkLmFwcGVuZENoaWxkKHNsb3QpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgcG9wdWxhdGVFbmVteUdhbWVib2FyZCgpO1xuICAgICAgcG9wdWxhdGVGcmllbmRseUdhbWVib2FyZCgpO1xuXG4gICAgICBjb25zdCBBSUF0dGFja2N5Y2xlID0gKFt4LCB5XSkgPT4ge1xuICAgICAgICAvLyBBSSByZWNpZWNlIGF0dGFja1xuICAgICAgICBsZXQgYXR0YWNrZWRMZW5ndGggPSB0aGlzLkFJLmJvYXJkLmhpdHMubGVuZ3RoO1xuXG4gICAgICAgIHRoaXMuQUkuYm9hcmQucmVjaWV2ZUF0dGFjayhbeCwgeV0pO1xuXG4gICAgICAgIC8vIENoZWNrIGlmIGl0IGhpdCBhIHNoaXAgb3Igbm90XG4gICAgICAgIGlmICh0aGlzLkFJLmJvYXJkLmhpdHMubGVuZ3RoID09IGF0dGFja2VkTGVuZ3RoKSB7XG4gICAgICAgICAgcGxheVNwbGFzaFNvdW5kKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcGxheUV4cGxvc2lvblNvdW5kKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBQbGF5ZXIgcmVjaWV2ZSBhdHRhY2tcbiAgICAgICAgdGhpcy5wbGF5ZXIuYm9hcmQucmVjaWV2ZUF0dGFjayh0aGlzLkFJLmF0dGFjayh0aGlzLnBsYXllcikpO1xuXG4gICAgICAgIC8vIFNldCBsb2NhbCBzdG9yYWdlXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZ2FtZVwiLCBKU09OLnN0cmluZ2lmeSh0aGlzKSk7XG5cbiAgICAgICAgLy8gUmVsb2FkIGJvdGggZ2FtZWJvYXJkc1xuICAgICAgICB3aGlsZSAoZnJpZW5kbHlCb2FyZC5sYXN0Q2hpbGQpIHtcbiAgICAgICAgICBmcmllbmRseUJvYXJkLnJlbW92ZUNoaWxkKGZyaWVuZGx5Qm9hcmQubGFzdENoaWxkKTtcbiAgICAgICAgfVxuICAgICAgICB3aGlsZSAoZW5lbXlHYW1lYm9hcmQubGFzdENoaWxkKSB7XG4gICAgICAgICAgZW5lbXlHYW1lYm9hcmQucmVtb3ZlQ2hpbGQoZW5lbXlHYW1lYm9hcmQubGFzdENoaWxkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHBvcHVsYXRlRW5lbXlHYW1lYm9hcmQoKTtcbiAgICAgICAgcG9wdWxhdGVGcmllbmRseUdhbWVib2FyZCgpO1xuXG4gICAgICAgIC8vIElmIG9uZSB3b24gZGlzcGxheSB3aW4gc2NyZWVuXG4gICAgICAgIGlmICh0aGlzLkFJLmJvYXJkLmFsbFN1bmsoKSA9PSB0cnVlKSB7XG4gICAgICAgICAgLy8gQ2xlYXIgbG9jYWwgc3RvcmFnZVxuICAgICAgICAgIGxvY2FsU3RvcmFnZS5jbGVhcihcImdhbWVcIik7XG5cbiAgICAgICAgICBnYW1lU3RvcHBlZCA9IHRydWU7XG5cbiAgICAgICAgICBjb25zdCB3aW5TY3JlZW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgIHdpblNjcmVlbi5jbGFzc0xpc3QuYWRkKFwid2luU2NyZWVuUGxheWVyXCIpO1xuXG4gICAgICAgICAgY29uc3Qgd2luU2NyZWVuVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgICAgIHdpblNjcmVlblRleHQuY2xhc3NMaXN0LmFkZChcIndpblNjcmVlblRleHRcIik7XG4gICAgICAgICAgd2luU2NyZWVuVGV4dC50ZXh0Q29udGVudCA9IFwiWU9VIFdPTiEhIVwiO1xuXG4gICAgICAgICAgd2luU2NyZWVuLmFwcGVuZENoaWxkKHdpblNjcmVlblRleHQpO1xuXG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh3aW5TY3JlZW4pO1xuXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB3aW5TY3JlZW4uc3R5bGUuYm90dG9tID0gXCIwcHhcIjtcbiAgICAgICAgICB9LCA1MCk7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB3aGlsZSAoY29udGVudC5sYXN0Q2hpbGQpIHtcbiAgICAgICAgICAgICAgY29udGVudC5yZW1vdmVDaGlsZChjb250ZW50Lmxhc3RDaGlsZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgNDUwMCk7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB3aW5TY3JlZW4uc3R5bGUub3BhY2l0eSA9IFwiMFwiO1xuICAgICAgICAgIH0sIDc1MDApO1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgd2hpbGUgKGRvY3VtZW50LmJvZHkubGFzdENoaWxkKSB7XG4gICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZG9jdW1lbnQuYm9keS5sYXN0Q2hpbGQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbG9hZGluZ1NjcmVlbigpO1xuICAgICAgICAgIH0sIDExNTAwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnBsYXllci5ib2FyZC5hbGxTdW5rKCkgPT0gdHJ1ZSkge1xuICAgICAgICAgIC8vIENsZWFyIGxvYWNsIHN0b3JhZ2VcbiAgICAgICAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoXCJnYW1lXCIpO1xuXG4gICAgICAgICAgZ2FtZVN0b3BwZWQgPSB0cnVlO1xuXG4gICAgICAgICAgY29uc3Qgd2luU2NyZWVuQUkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgIHdpblNjcmVlbkFJLmNsYXNzTGlzdC5hZGQoXCJ3aW5TY3JlZW5BSVwiKTtcblxuICAgICAgICAgIGNvbnN0IHdpblNjcmVlblRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgICB3aW5TY3JlZW5UZXh0LmNsYXNzTGlzdC5hZGQoXCJ3aW5TY3JlZW5UZXh0XCIpO1xuICAgICAgICAgIHdpblNjcmVlblRleHQudGV4dENvbnRlbnQgPSBcIllPVSBMT1NUXCI7XG5cbiAgICAgICAgICB3aW5TY3JlZW5BSS5hcHBlbmRDaGlsZCh3aW5TY3JlZW5UZXh0KTtcblxuICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQod2luU2NyZWVuQUkpO1xuXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB3aW5TY3JlZW5BSS5zdHlsZS50b3AgPSBcIjBweFwiO1xuICAgICAgICAgIH0sIDUwKTtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHdoaWxlIChjb250ZW50Lmxhc3RDaGlsZCkge1xuICAgICAgICAgICAgICBjb250ZW50LnJlbW92ZUNoaWxkKGNvbnRlbnQubGFzdENoaWxkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCA0NTAwKTtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHdpblNjcmVlbkFJLnN0eWxlLm9wYWNpdHkgPSBcIjBcIjtcbiAgICAgICAgICB9LCA3NTAwKTtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHdoaWxlIChkb2N1bWVudC5ib2R5Lmxhc3RDaGlsZCkge1xuICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGRvY3VtZW50LmJvZHkubGFzdENoaWxkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxvYWRpbmdTY3JlZW4oKTtcbiAgICAgICAgICB9LCAxMTUwMCk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIC8vIEFwcGVuZGluZ1xuICAgICAgZ2FtZWJvYXJkc0NvbnRhaW5lci5hcHBlbmRDaGlsZChlbmVteUdhbWVib2FyZENvbik7XG4gICAgICBnYW1lYm9hcmRzQ29udGFpbmVyLmFwcGVuZENoaWxkKHNlYVdhdmUpO1xuICAgICAgZ2FtZWJvYXJkc0NvbnRhaW5lci5hcHBlbmRDaGlsZChmcmllbmRseUJvYXJkY29uKTtcblxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIC8vIEZhZGUgaW4gYWZ0ZXIgMS41c1xuICAgICAgICBlbmVteUdhbWVib2FyZENvbi5zdHlsZS5vcGFjaXR5ID0gXCIxXCI7XG4gICAgICAgIHNlYVdhdmUuc3R5bGUub3BhY2l0eSA9IFwiMVwiO1xuICAgICAgICBmcmllbmRseUJvYXJkY29uLnN0eWxlLm9wYWNpdHkgPSBcIjFcIjtcbiAgICAgIH0sIDE1MDApO1xuXG4gICAgICAvLyBBcHBlbmRpbmcgYWxsXG4gICAgICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlckNvbik7XG4gICAgICBjb250ZW50LmFwcGVuZENoaWxkKGdhbWVib2FyZHNDb250YWluZXIpO1xuXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgLy8gRmFkZSBpbiBhZnRlciAwLjVzXG4gICAgICAgIGhlYWRlckNvbi5zdHlsZS5vcGFjaXR5ID0gXCIxXCI7XG4gICAgICB9LCA1MDApO1xuXG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuICAgIH0pO1xuICB9XG59XG5cbmNsYXNzIHR3b1BsYXllciB7XG4gIGNvbnN0cnVjdG9yKHBsYXllcjFOYW1lLCBwbGF5ZXIyTmFtZSkge1xuICAgIHRoaXMucGxheWVyMSA9IG5ldyBwbGF5ZXIocGxheWVyMU5hbWUpO1xuICAgIHRoaXMucGxheWVyMiA9IG5ldyBwbGF5ZXIocGxheWVyMk5hbWUpO1xuICB9XG4gIGdhbWVDeWNsZURPTSgpIHtcbiAgICAvLyBSdW4gZXZlcnkgcGFydCB3aGVuIGl0IHJlc29sdmVzXG4gICAgdGhpcy5nZXROYW1lRE9NKCkudGhlbigoKSA9PiB7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImdhbWVcIiwgSlNPTi5zdHJpbmdpZnkodGhpcykpO1xuICAgICAgdGhpcy5wYXNzU2NyZWVuRE9NKHRoaXMucGxheWVyMSkudGhlbigoKSA9PiB7XG4gICAgICAgIHBsYWNlU2hpcHNET00odGhpcy5wbGF5ZXIxKS50aGVuKCgpID0+IHtcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImdhbWVcIiwgSlNPTi5zdHJpbmdpZnkodGhpcykpO1xuICAgICAgICAgIHRoaXMucGFzc1NjcmVlbkRPTSh0aGlzLnBsYXllcjIpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgcGxhY2VTaGlwc0RPTSh0aGlzLnBsYXllcjIpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImdhbWVcIiwgSlNPTi5zdHJpbmdpZnkodGhpcykpO1xuICAgICAgICAgICAgICB0aGlzLnBhc3NTY3JlZW5ET00odGhpcy5wbGF5ZXIxKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmF0dGFja0N5Y2xlRE9NKHRoaXMucGxheWVyMSwgdGhpcy5wbGF5ZXIyKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuICBnZXROYW1lRE9NKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICAgICAgY29udGVudC5jbGFzc0xpc3QuYWRkKFwiY29udGVudENvblwiLCBcImdldE5hbWVDb250ZW50Q29uXCIpO1xuICAgICAgY29udGVudC5zZXRBdHRyaWJ1dGUoXCJvbnN1Ym1pdFwiLCBcInJldHVybiBmYWxzZVwiKTtcblxuICAgICAgLy8gQ3JlYXRlIGlucHV0IGNvblxuICAgICAgY29uc3QgbmFtZUlucHV0Q29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIG5hbWVJbnB1dENvbi5jbGFzc0xpc3QuYWRkKFwiZ2V0TmFtZUlucHV0Q29uQ29uXCIpO1xuXG4gICAgICAvLyBDcmVhdGUgUExheWVyIDEgaW5wdXRjb25cbiAgICAgIGNvbnN0IHBsYXllcjFJbnB1dENvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBwbGF5ZXIxSW5wdXRDb24uY2xhc3NMaXN0LmFkZChcImdldE5hbWVJbnB1dENvblwiLCBcImNvbnRlbnRDb25cIik7XG5cbiAgICAgIGNvbnN0IHBsYXllcjFJbnB1dExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICBwbGF5ZXIxSW5wdXRMYWJlbC5jbGFzc0xpc3QuYWRkKFwiZ2V0TmFtZUlucHV0TGFiZWxcIik7XG4gICAgICBwbGF5ZXIxSW5wdXRMYWJlbC50ZXh0Q29udGVudCA9IFwiUExBWUVSIDE6XCI7XG5cbiAgICAgIGNvbnN0IHBsYXllcjFJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgIHBsYXllcjFJbnB1dC5jbGFzc0xpc3QuYWRkKFwiZ2V0TmFtZUlucHV0XCIpO1xuICAgICAgcGxheWVyMUlucHV0LnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiTkFNRVwiKTtcblxuICAgICAgcGxheWVyMUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKSA9PiB7XG4gICAgICAgIHBsYXlCdXR0b25TaGlmdFNvdW5kKCk7XG4gICAgICAgIHBsYXllcjFJbnB1dC52YWx1ZSA9IHBsYXllcjFJbnB1dC52YWx1ZS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICBpZiAocGxheWVyMUlucHV0LnZhbHVlICE9PSBcIlwiICYmIHBsYXllcjJJbnB1dC52YWx1ZSAhPT0gXCJcIikge1xuICAgICAgICAgIG5leHRCdG4uY2xhc3NMaXN0LmFkZChcImdldE5hbWVOZXh0QnRuUmVhZHlcIik7XG4gICAgICAgIH0gZWxzZSBpZiAocGxheWVyMUlucHV0LnZhbHVlID09IFwiXCIgfHwgcGxheWVyMklucHV0LnZhbHVlID09IFwiXCIpIHtcbiAgICAgICAgICBuZXh0QnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJnZXROYW1lTmV4dEJ0blJlYWR5XCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwbGF5ZXIxSW5wdXQudmFsdWUgIT09IFwiXCIpIHtcbiAgICAgICAgICBwbGF5ZXIxSW5wdXQuc2V0Q3VzdG9tVmFsaWRpdHkoXCJcIik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBwbGF5ZXIxSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgcGxheUJ1dHRvblNoaWZ0U291bmQoKTtcbiAgICAgIH0pO1xuXG4gICAgICBwbGF5ZXIxSW5wdXRDb24uYXBwZW5kQ2hpbGQocGxheWVyMUlucHV0TGFiZWwpO1xuICAgICAgcGxheWVyMUlucHV0Q29uLmFwcGVuZENoaWxkKHBsYXllcjFJbnB1dCk7XG5cbiAgICAgIC8vIENyZWF0ZSBQTGF5ZXIgMiBpbnB1dGNvblxuICAgICAgY29uc3QgcGxheWVyMklucHV0Q29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHBsYXllcjJJbnB1dENvbi5jbGFzc0xpc3QuYWRkKFwiZ2V0TmFtZUlucHV0Q29uXCIsIFwiY29udGVudENvblwiKTtcblxuICAgICAgY29uc3QgcGxheWVyMklucHV0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgIHBsYXllcjJJbnB1dExhYmVsLmNsYXNzTGlzdC5hZGQoXCJnZXROYW1lSW5wdXRMYWJlbFwiKTtcbiAgICAgIHBsYXllcjJJbnB1dExhYmVsLnRleHRDb250ZW50ID0gXCJQTEFZRVIgMjpcIjtcblxuICAgICAgY29uc3QgcGxheWVyMklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgcGxheWVyMklucHV0LmNsYXNzTGlzdC5hZGQoXCJnZXROYW1lSW5wdXRcIik7XG4gICAgICBwbGF5ZXIySW5wdXQuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJOQU1FXCIpO1xuXG4gICAgICBwbGF5ZXIySW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsICgpID0+IHtcbiAgICAgICAgcGxheUJ1dHRvblNoaWZ0U291bmQoKTtcbiAgICAgICAgcGxheWVyMklucHV0LnZhbHVlID0gcGxheWVyMklucHV0LnZhbHVlLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgIGlmIChwbGF5ZXIxSW5wdXQudmFsdWUgIT09IFwiXCIgJiYgcGxheWVyMklucHV0LnZhbHVlICE9PSBcIlwiKSB7XG4gICAgICAgICAgbmV4dEJ0bi5jbGFzc0xpc3QuYWRkKFwiZ2V0TmFtZU5leHRCdG5SZWFkeVwiKTtcbiAgICAgICAgfSBlbHNlIGlmIChwbGF5ZXIxSW5wdXQudmFsdWUgPT0gXCJcIiB8fCBwbGF5ZXIySW5wdXQudmFsdWUgPT0gXCJcIikge1xuICAgICAgICAgIG5leHRCdG4uY2xhc3NMaXN0LnJlbW92ZShcImdldE5hbWVOZXh0QnRuUmVhZHlcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBsYXllcjJJbnB1dC52YWx1ZSAhPT0gXCJcIikge1xuICAgICAgICAgIHBsYXllcjJJbnB1dC5zZXRDdXN0b21WYWxpZGl0eShcIlwiKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHBsYXllcjJJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBwbGF5QnV0dG9uU2hpZnRTb3VuZCgpO1xuICAgICAgfSk7XG5cbiAgICAgIHBsYXllcjJJbnB1dENvbi5hcHBlbmRDaGlsZChwbGF5ZXIySW5wdXRMYWJlbCk7XG4gICAgICBwbGF5ZXIySW5wdXRDb24uYXBwZW5kQ2hpbGQocGxheWVyMklucHV0KTtcblxuICAgICAgLy8gQXBwZW5kaW5nXG4gICAgICBuYW1lSW5wdXRDb24uYXBwZW5kQ2hpbGQocGxheWVyMUlucHV0Q29uKTtcbiAgICAgIG5hbWVJbnB1dENvbi5hcHBlbmRDaGlsZChwbGF5ZXIySW5wdXRDb24pO1xuXG4gICAgICAvLyBDcmVhdGluZyBuZXh0QnRuXG4gICAgICBjb25zdCBuZXh0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgbmV4dEJ0bi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwic3VibWl0XCIpO1xuICAgICAgbmV4dEJ0bi5jbGFzc0xpc3QuYWRkKFwiZ2V0TmFtZU5leHRCdG5cIiwgXCJidG5cIik7XG4gICAgICBuZXh0QnRuLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiTkVYVFwiKTtcblxuICAgICAgbGV0IGhhc1N1Ym1pdHRlZCA9IGZhbHNlO1xuXG4gICAgICBuZXh0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBwbGF5ZXIxSW5wdXQudmFsdWUgIT09IFwiXCIgJiZcbiAgICAgICAgICBwbGF5ZXIySW5wdXQudmFsdWUgIT09IFwiXCIgJiZcbiAgICAgICAgICBoYXNTdWJtaXR0ZWQgPT0gZmFsc2VcbiAgICAgICAgKSB7XG4gICAgICAgICAgcGxheUNsaWNrU291bmQoKTtcbiAgICAgICAgICB0aGlzLnBsYXllcjEubmFtZSA9IHBsYXllcjFJbnB1dC52YWx1ZTtcbiAgICAgICAgICB0aGlzLnBsYXllcjIubmFtZSA9IHBsYXllcjJJbnB1dC52YWx1ZTtcblxuICAgICAgICAgIGNvbnRlbnQuc3R5bGUub3BhY2l0eSA9IFwiMFwiO1xuICAgICAgICAgIGhhc1N1Ym1pdHRlZCA9IHRydWU7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGNvbnRlbnQpO1xuICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgIH0sIDQwNTApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChwbGF5ZXIxSW5wdXQudmFsdWUgPT09IFwiXCIpIHtcbiAgICAgICAgICAgIHBsYXllcjFJbnB1dC5zZXRDdXN0b21WYWxpZGl0eShcIlBsZWFzZSBmaWxsIG91dCB0aGlzIGZpZWxkXCIpO1xuICAgICAgICAgIH0gZWxzZSBpZiAocGxheWVyMklucHV0LnZhbHVlID09PSBcIlwiKSB7XG4gICAgICAgICAgICBwbGF5ZXIySW5wdXQuc2V0Q3VzdG9tVmFsaWRpdHkoXCJQbGVhc2UgZmlsbCBvdXQgdGhpcyBmaWVsZFwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBuZXh0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsICgpID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHBsYXllcjFJbnB1dC52YWx1ZSAhPT0gXCJcIiAmJlxuICAgICAgICAgIHBsYXllcjJJbnB1dC52YWx1ZSAhPT0gXCJcIiAmJlxuICAgICAgICAgIGhhc1N1Ym1pdHRlZCA9PSBmYWxzZVxuICAgICAgICApIHtcbiAgICAgICAgICBwbGF5QnV0dG9uU2hpZnRTb3VuZCgpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgLy8gQXBwZW5kaW5nIGxhc3RcbiAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobmFtZUlucHV0Q29uKTtcbiAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobmV4dEJ0bik7XG5cbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGVudCk7XG5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAvLyBMZXQgZmFkZSBpblxuICAgICAgICBjb250ZW50LnN0eWxlLm9wYWNpdHkgPSBcIjFcIjtcbiAgICAgIH0sIDUwKTtcbiAgICB9KTtcbiAgfVxuICBwYXNzU2NyZWVuRE9NKHBsYXllcikge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoXCJwYXNzRGV2aWNlQ29uXCIpO1xuXG4gICAgICAvLyBQYXNzIGhlYWRlclxuICAgICAgY29uc3QgcGFzc0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgcGFzc0hlYWRlci5jbGFzc0xpc3QuYWRkKFwicGFzc1NjcmVlbkhlYWRlclwiKTtcbiAgICAgIHBhc3NIZWFkZXIudGV4dENvbnRlbnQgPSBgUExFQVNFIFBBU1MgVEhFIERFVklDRSBUTyAke3BsYXllci5uYW1lfWA7XG5cbiAgICAgIC8vIENyZWF0ZSBwYXNzIGljb25cbiAgICAgIGNvbnN0IHBhc3NEZXZpY2VJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgcGFzc0RldmljZUltYWdlLnNyYyA9IHBhc3NEZXZpY2VJbWFnZVNyYztcbiAgICAgIHBhc3NEZXZpY2VJbWFnZS5jbGFzc0xpc3QuYWRkKFwicGFzc0RldmljZUltYWdlXCIpO1xuXG4gICAgICAvLyBQcmVzcyB0byBjb250aW51ZSB0ZXh0XG4gICAgICBjb25zdCBjb250aW51ZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgIGNvbnRpbnVlVGV4dC5jbGFzc0xpc3QuYWRkKFwicGFzc0RldmljZUNvbnRpbnVlVGV4dFwiKTtcbiAgICAgIGNvbnRpbnVlVGV4dC50ZXh0Q29udGVudCA9IFwiVEFQIFRPIENPTlRJTlVFXCI7XG5cbiAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQocGFzc0hlYWRlcik7XG4gICAgICBjb250ZW50LmFwcGVuZENoaWxkKHBhc3NEZXZpY2VJbWFnZSk7XG4gICAgICBjb250ZW50LmFwcGVuZENoaWxkKGNvbnRpbnVlVGV4dCk7XG5cbiAgICAgIGxldCBpc0NsaWNrZWQgPSBmYWxzZTtcblxuICAgICAgY29udGVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBpZiAoaXNDbGlja2VkID09IGZhbHNlKSB7XG4gICAgICAgICAgaXNDbGlja2VkID0gdHJ1ZTtcbiAgICAgICAgICBjb250ZW50LnN0eWxlLm9wYWNpdHkgPSBcIjBcIjtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoY29udGVudCk7XG4gICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgfSwgMjAwMCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBjb250ZW50LnN0eWxlLm9wYWNpdHkgPSBcIjBcIjtcblxuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250ZW50KTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjb250ZW50LnN0eWxlLm9wYWNpdHkgPSBcIjFcIjtcbiAgICAgIH0sIDUwKTtcbiAgICB9KTtcbiAgfVxuICBhdHRhY2tDeWNsZURPTShwbGF5ZXIsIHBsYXllck5leHQpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIGNvbnN0IGF0dGFja1AxID0gKCkgPT4ge1xuICAgICAgICBhdHRhY2tET00ocGxheWVyLCBwbGF5ZXJOZXh0KS50aGVuKCgpID0+IHtcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImdhbWVcIiwgSlNPTi5zdHJpbmdpZnkodGhpcykpO1xuICAgICAgICAgIHRoaXMucGFzc1NjcmVlbkRPTShwbGF5ZXJOZXh0KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIGF0dGFja1AyKCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfTtcblxuICAgICAgY29uc3QgYXR0YWNrUDIgPSAoKSA9PiB7XG4gICAgICAgIGF0dGFja0RPTShwbGF5ZXJOZXh0LCBwbGF5ZXIpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZ2FtZVwiLCBKU09OLnN0cmluZ2lmeSh0aGlzKSk7XG4gICAgICAgICAgdGhpcy5wYXNzU2NyZWVuRE9NKHBsYXllcikudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBhdHRhY2tQMSgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH07XG5cbiAgICAgIGF0dGFja1AxKCk7XG4gICAgfSk7XG4gIH1cbn1cblxuY29uc3QgcGxhY2VTaGlwc0RPTSA9IChwbGF5ZXIpID0+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgLy8gUGxhY2Ugc2hpcHMgcm90YXRlZCBpZiB0aGV5IGFyZVxuICAgIGxldCByb3RhdGVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoXCJjb250ZW50Q29uXCIsIFwicGxhY2VtZW50Q29uXCIpO1xuXG4gICAgLy8gQ3JlYXRpbmcgaGVhZGVyXG4gICAgY29uc3QgaGVhZGVyQ29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBoZWFkZXJDb24uY2xhc3NMaXN0LmFkZChcInBsYWNlbWVudEhlYWRlckNvblwiKTtcblxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKFxuICAgICAgXCJsb2FkaW5nc2NyZWVuSGVhZGVyXCIsXG4gICAgICBcImluZ2FtZUhlYWRlclwiLFxuICAgICAgXCJwbGFjZW1lbnRIZWFkZXJcIlxuICAgICk7XG4gICAgaGVhZGVyLnRleHRDb250ZW50ID0gYEFZRS1BWUUgQ0FQVEFJTiAke3BsYXllci5uYW1lfSBTRUxFQ1QgQU5EIERST1AgWU9VUiBTSElQUyBXSEVSRSBZT1UgV0FOVCBUSEVNYDtcblxuICAgIGhlYWRlckNvbi5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gICAgLy8gQ3JlYXRpbmcgZHJhZyBhbmQgZHJvcCBtb2R1bGVcbiAgICBjb25zdCBkcmFnQW5kRHJvcENvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZHJhZ0FuZERyb3BDb24uY2xhc3NMaXN0LmFkZChcImRyYWdBbmREcm9wQ29uXCIpO1xuXG4gICAgLy8gQ3JlYXRpbmcgZ3JpZFxuICAgIGNvbnN0IGdhbWVCb2FyZEdyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGdhbWVCb2FyZEdyaWQuY2xhc3NMaXN0LmFkZChcImZyaWVuZGx5Qm9hcmRcIiwgXCJwbGFjZW1lbnRCb2FyZFwiKTtcblxuICAgIC8vIEZvciBzYXZpbmcgc2VsZWN0ZWQgc2hpcCBpbiBhIHZhcmlibGVcbiAgICBsZXQgc2VsZWN0ZWRTaGlwID0gdW5kZWZpbmVkO1xuXG4gICAgLy8gSGlnaGxpZ2h0cyBzZWxjdGVkIHNoaXBcbiAgICAvLyBGbiBOT1QgUFVSRSAoYWNjZXNzIHZhcmlibGUgb3V0c2lkZSBzY29wZSlcbiAgICBjb25zdCBzZWxlY3RGbiA9ICgpID0+IHtcbiAgICAgIHNoaXBzQ29uLmNoaWxkTm9kZXMuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZShcInBsYWNlbWVudFNlbGVjdGVkU2hpcEVsXCIpO1xuICAgICAgfSk7XG4gICAgICBzZWxlY3RlZFNoaXAuY2xhc3NMaXN0LmFkZChcInBsYWNlbWVudFNlbGVjdGVkU2hpcEVsXCIpO1xuICAgIH07XG5cbiAgICAvLyBDYWNsIHNoaXAgY29vcmRpbmF0ZXNcbiAgICAvLyBGbiBOT1QgUFVSRSAoYWNjZXNzIHZhcmlibGUgb3V0c2lkZSBzY29wZSlcbiAgICBjb25zdCBjYWNsU2hpcENvb3IgPSAoW3gsIHldLCBudW0pID0+IHtcbiAgICAgIC8vIFNhdmUgY2FjbCBjb29yZGluYXRlc1xuICAgICAgbGV0IGNvb3JBcnkgPSBbXTtcblxuICAgICAgaWYgKHJvdGF0ZWQgPT0gdHJ1ZSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bTsgaSsrKSB7XG4gICAgICAgICAgY29vckFyeS5wdXNoKFt4ICsgaSwgeV0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bTsgaSsrKSB7XG4gICAgICAgICAgY29vckFyeS5wdXNoKFt4LCB5ICsgaV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gY29vckFyeTtcbiAgICB9O1xuXG4gICAgLy8gU2F2ZXMgaG92ZXJlZCBzbG90cyBmb3IgbmV4dCByZWxvYWQgb24gZ3JpZFxuICAgIGxldCBob3ZlcmVkU2xvdCA9IFtbXV07XG5cbiAgICAvLyBJZiBzaGlwcyBjYW4gYmUgcGxhY2VkXG4gICAgLy8gSGFzIHRvIGJlIHNjb3BlZCBoZXJlIGZvciBmdW5jdGlvbiB0byBhY2Nlc3MgcHJldmlvcyBjYWxsc1xuICAgIGxldCBjYW5QbGFjZSA9IHRydWU7XG5cbiAgICBjb25zdCBwb3B1bGF0ZUJvYXJkID0gKCkgPT4ge1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMTA7IGkrKykge1xuICAgICAgICBmb3IgKGxldCBqID0gMTsgaiA8PSAxMDsgaisrKSB7XG4gICAgICAgICAgY29uc3QgZ3JpZFBsYWNlbWVudFNsb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgIGdyaWRQbGFjZW1lbnRTbG90LmNsYXNzTGlzdC5hZGQoXCJncmlkUGxhY2VtZW50U2xvdFwiKTtcblxuICAgICAgICAgIC8vIEluZGljYXRlIHdlYXRoZXIgb3Igbm90IGEgc2hpcCBoYXMgYWxscmVhZHkgYmVlbiBwbGFjZWQgaGVyZVxuICAgICAgICAgIGxldCBzaGlwRWxTbG90ID0gZmFsc2U7XG5cbiAgICAgICAgICBwbGF5ZXIuYm9hcmQuc2hpcHMuZm9yRWFjaCgoc2hpcEVsKSA9PiB7XG4gICAgICAgICAgICBzaGlwRWwuY29vci5mb3JFYWNoKChjb29yKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChqID09IGNvb3JbMF0gJiYgaSA9PSBjb29yWzFdKSB7XG4gICAgICAgICAgICAgICAgZ3JpZFBsYWNlbWVudFNsb3QuY2xhc3NMaXN0LmFkZChcImZyaWVuZGx5R3JpZFNsb3RTaGlwXCIpO1xuICAgICAgICAgICAgICAgIHNoaXBFbFNsb3QgPSB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGlmIChzaGlwRWxTbG90ID09IGZhbHNlKSB7XG4gICAgICAgICAgICBncmlkUGxhY2VtZW50U2xvdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgICAvLyBJZiBhIHNoaXAgaXMgc2VsZWN0ZWQgYW5kIHNoaXAgaXMgbm90IGFuZCBpbGxpZ2FsIHBsYWNlXG4gICAgICAgICAgICAgIGlmIChzZWxlY3RlZFNoaXAgIT0gdW5kZWZpbmVkICYmIGNhblBsYWNlICE9IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgcGxheVNwbGFzaFNvdW5kKCk7XG5cbiAgICAgICAgICAgICAgICAvLyBDcmVhdGUgbmV3IHNoaXAgd2l0aCB0aGUgY2FsY3VsYXRlZCBjb29yZGluYXRlc1xuICAgICAgICAgICAgICAgIGxldCBuZXdTaGlwID0gbmV3IHNoaXAoXG4gICAgICAgICAgICAgICAgICBjYWNsU2hpcENvb3IoW2osIGldLCBzZWxlY3RlZFNoaXAuY2hpbGRFbGVtZW50Q291bnQpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAvLyBQdXNoIG5ldyBzaGlwIHRvIHRoZSBwbGF5ZXJcbiAgICAgICAgICAgICAgICBwbGF5ZXIuYm9hcmQuc2hpcHMucHVzaChuZXdTaGlwKTtcblxuICAgICAgICAgICAgICAgIC8vIE1ha2Ugc2hpcCBkaXNhcGVhciBmcm9tIHNlbGVjdGFibGUgc2hpcHNcbiAgICAgICAgICAgICAgICBzZWxlY3RlZFNoaXAuY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG5cbiAgICAgICAgICAgICAgICAvLyBDbGVhciBzZWxlY3RlZCBzaGlwXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRTaGlwID0gdW5kZWZpbmVkO1xuXG4gICAgICAgICAgICAgICAgLy8gQ2xlYXIgaG92ZXJlZCBzbG90c1xuICAgICAgICAgICAgICAgIGhvdmVyZWRTbG90ID0gW1tdXTtcblxuICAgICAgICAgICAgICAgIC8vIFJlbG9hZCBnYW1lYm9hcmRcbiAgICAgICAgICAgICAgICByZWxvYWRHYW1lYm9hcmRHcmlkKCk7XG5cbiAgICAgICAgICAgICAgICAvLyBBbGxvdyBwbGF5ZXIgdG8gbW92ZSB0byBiYXR0bGVcbiAgICAgICAgICAgICAgICBpZiAocGxheWVyLmJvYXJkLnNoaXBzLmxlbmd0aCA9PSA2KSB7XG4gICAgICAgICAgICAgICAgICBuZXh0QnRuLmNsYXNzTGlzdC5hZGQoXCJwbGFjZW1lbnROZXh0QnRuUmVhZHlcIik7XG4gICAgICAgICAgICAgICAgICBuZXh0UmVhZHkgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIElmIHNsb3QgaXMgaG92ZXJlZFxuICAgICAgICAgICAgbGV0IGlzSG92ZXJlZFNsb3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgaWYgKGhvdmVyZWRTbG90WzBdWzBdID09IGogJiYgaG92ZXJlZFNsb3RbMF1bMV0gPT0gaSkge1xuICAgICAgICAgICAgICAvLyBUaGlzIGlzIGhvdmVyZWQgc2xvdFxuICAgICAgICAgICAgICBpc0hvdmVyZWRTbG90ID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gVGhpcyBpcyBub3QgdGhlIGhvdmVyZWQgc2xvdFxuICAgICAgICAgICAgaWYgKGlzSG92ZXJlZFNsb3QgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgZ3JpZFBsYWNlbWVudFNsb3QuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZFNoaXAgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAvLyBpZiBhIHNoaXAgaXMgc2VsZWN0ZWRcbiAgICAgICAgICAgICAgICAgIC8vIENhbGMgaG92ZXJlZCBzbG90cyBiYXNlZCBvbiBzZWxlY3RlZCBzaGlwXG4gICAgICAgICAgICAgICAgICBob3ZlcmVkU2xvdCA9IGNhY2xTaGlwQ29vcihcbiAgICAgICAgICAgICAgICAgICAgW2osIGldLFxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFNoaXAuY2hpbGRFbGVtZW50Q291bnRcbiAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAgIC8vIFJlc2V0IGNhbiBwbGFjZVxuICAgICAgICAgICAgICAgICAgY2FuUGxhY2UgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgICAvLyBDaGVjayBpZiBob3ZlcmVkIGlzIG91dCBvZiBncmlkXG4gICAgICAgICAgICAgICAgICBob3ZlcmVkU2xvdC5mb3JFYWNoKChjb3JyMSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgY29ycjFbMF0gPCAxIHx8XG4gICAgICAgICAgICAgICAgICAgICAgY29ycjFbMF0gPiAxMCB8fFxuICAgICAgICAgICAgICAgICAgICAgIGNvcnIxWzFdIDwgMSB8fFxuICAgICAgICAgICAgICAgICAgICAgIGNvcnIxWzFdID4gMTBcbiAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgLy8gSXQgY2FuJ3QgYmUgcGxhY2VkIHRoZW5cbiAgICAgICAgICAgICAgICAgICAgICBjYW5QbGFjZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIENoZWNrIGlmIGhvdmVyZWQgc2xvdHMgaXMgb3ZlciBhbiBleGlzdGluZyBzaGlwXG4gICAgICAgICAgICAgICAgICAgIHBsYXllci5ib2FyZC5zaGlwcy5mb3JFYWNoKChzaGlwRWwxKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgc2hpcEVsMS5jb29yLmZvckVhY2goKGNvb3IyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29ycjFbMF0gPT0gY29vcjJbMF0gJiYgY29ycjFbMV0gPT0gY29vcjJbMV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ2FuJ3QgcGxhY2Ugc2hpcCBoZXJlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhblBsYWNlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAvLyBSZWxvYWQgdG8gZGlzcGxheSBjaGFuZ2VzXG4gICAgICAgICAgICAgICAgICByZWxvYWRHYW1lYm9hcmRHcmlkKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBBZGQgY2xhc3MgdG8gYWxsIGhvdmVyZWQgc3BvdHNcbiAgICAgICAgICBob3ZlcmVkU2xvdC5mb3JFYWNoKChjb3JyMSkgPT4ge1xuICAgICAgICAgICAgaWYgKGNvcnIxWzBdID09IGogJiYgY29ycjFbMV0gPT0gaSkge1xuICAgICAgICAgICAgICAvLyBJZiBvbmUgaXMgb3V0IG9mIHJhbmdlXG4gICAgICAgICAgICAgIGlmIChjYW5QbGFjZSA9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGdyaWRQbGFjZW1lbnRTbG90LmNsYXNzTGlzdC5hZGQoXG4gICAgICAgICAgICAgICAgICBcInBsYWNlbWVudEhvdmVyZWRTbG90T3V0T2ZSYW5nZVwiXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBncmlkUGxhY2VtZW50U2xvdC5jbGFzc0xpc3QuYWRkKFwicGxhY2VtZW50SG92ZXJlZFNsb3RcIik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIC8vIEFwcGVuZCBuZXcgc2xvdFxuICAgICAgICAgIGdhbWVCb2FyZEdyaWQuYXBwZW5kQ2hpbGQoZ3JpZFBsYWNlbWVudFNsb3QpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8vIEZpcmVzIG9uIGxvYWRcbiAgICBwb3B1bGF0ZUJvYXJkKCk7XG5cbiAgICAvLyBSZWxvYWQgZm4gcmVtb3ZlcyBhbGwgYW5kIHBvcHVsYXRlcyBib2FyZFxuICAgIGNvbnN0IHJlbG9hZEdhbWVib2FyZEdyaWQgPSAoKSA9PiB7XG4gICAgICB3aGlsZSAoZ2FtZUJvYXJkR3JpZC5sYXN0Q2hpbGQpIHtcbiAgICAgICAgZ2FtZUJvYXJkR3JpZC5yZW1vdmVDaGlsZChnYW1lQm9hcmRHcmlkLmxhc3RDaGlsZCk7XG4gICAgICB9XG4gICAgICBwb3B1bGF0ZUJvYXJkKCk7XG4gICAgfTtcblxuICAgIC8vIENyZWF0aW5nIHNoaXAgZHJhZyBhbmQgZHJvcHNcbiAgICBjb25zdCBzaGlwRHJhZ0NvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc2hpcERyYWdDb24uY2xhc3NMaXN0LmFkZChcInNoaXBEcmFnQ29uXCIpO1xuXG4gICAgY29uc3Qgc2hpcHNDb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHNoaXBzQ29uLmNsYXNzTGlzdC5hZGQoXCJwbGFjZW1lbnRTaGlwc0NvblwiKTtcblxuICAgIC8vIENyZWF0ZXMgc2VsZWN0YWJsZSBzaGlwc1xuICAgIGNvbnN0IGNyZWF0aW5nU2hpcHMgPSAobGVuZ3RoKSA9PiB7XG4gICAgICBjb25zdCBzaGlwRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgc2hpcEVsLmNsYXNzTGlzdC5hZGQoXCJwbGFjZW1lbnRTaGlwRWxcIik7XG5cbiAgICAgIC8vIE1ha2Ugc3VyZSBlYWNoIGNlbGwgaXMgZXF1YWwgdG8gZ3JpZCBjZWxsXG4gICAgICBzaGlwRWwuc3R5bGUuZ3JpZFRlbXBsYXRlUm93cyA9IGByZXBlYXQoJHtsZW5ndGh9LDFmcmA7XG4gICAgICBzaGlwRWwuc3R5bGUuaGVpZ2h0ID0gYCR7bGVuZ3RoICogMy41fXZoYDtcblxuICAgICAgc2hpcEVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIC8vIEFkZCBzaGlwIHRvIHNlbGVjdGVkXG4gICAgICAgIHNlbGVjdGVkU2hpcCA9IHNoaXBFbDtcbiAgICAgICAgLy8gSGlnaGxpZ3RzIHNlbGVjdGVkIHNoaXBcbiAgICAgICAgcGxheUJ1dHRvblNoaWZ0U291bmQoKTtcbiAgICAgICAgc2VsZWN0Rm4oKTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBBZGQgc2xvdHMgdG8gc2hpcCBncmlkXG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBsZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBzbG90ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgc2xvdC5jbGFzc0xpc3QuYWRkKFwiZnJpZW5kbHlHcmlkU2xvdFNoaXBcIiwgXCJncmlkUGxhY2VtZW50U2xvdFwiKTtcblxuICAgICAgICBzaGlwRWwuYXBwZW5kQ2hpbGQoc2xvdCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzaGlwRWw7XG4gICAgfTtcblxuICAgIC8vIENyZWF0ZSBhbGwgc2hpcHNcbiAgICBjb25zdCBwb3B1bGF0ZUFsbFNoaXBzID0gKCkgPT4ge1xuICAgICAgc2hpcHNDb24uYXBwZW5kQ2hpbGQoY3JlYXRpbmdTaGlwcyg1KSk7XG4gICAgICBzaGlwc0Nvbi5hcHBlbmRDaGlsZChjcmVhdGluZ1NoaXBzKDQpKTtcbiAgICAgIHNoaXBzQ29uLmFwcGVuZENoaWxkKGNyZWF0aW5nU2hpcHMoNCkpO1xuICAgICAgc2hpcHNDb24uYXBwZW5kQ2hpbGQoY3JlYXRpbmdTaGlwcygzKSk7XG4gICAgICBzaGlwc0Nvbi5hcHBlbmRDaGlsZChjcmVhdGluZ1NoaXBzKDMpKTtcbiAgICAgIHNoaXBzQ29uLmFwcGVuZENoaWxkKGNyZWF0aW5nU2hpcHMoMikpO1xuICAgIH07XG5cbiAgICBwb3B1bGF0ZUFsbFNoaXBzKCk7XG5cbiAgICAvLyBDcmVhdGluZyByb3RhdGVCdG5cbiAgICBjb25zdCByb3RhdGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHJvdGF0ZUJ0bi5jbGFzc0xpc3QuYWRkKFwicGxhY2VtZW50Um90YXRlQnRuXCIsIFwiYnRuXCIpO1xuICAgIHJvdGF0ZUJ0bi50ZXh0Q29udGVudCA9IFwiUm90YXRlXCI7XG5cbiAgICByb3RhdGVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIHBsYXlCdXR0b25TaGlmdFNvdW5kKCk7XG4gICAgICBpZiAocm90YXRlZCA9PSBmYWxzZSkge1xuICAgICAgICAvLyBSb3RhdGVcbiAgICAgICAgc2hpcHNDb24uc3R5bGUucm90YXRlID0gXCI5MGRlZ1wiO1xuICAgICAgICByb3RhdGVkID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAocm90YXRlZCkge1xuICAgICAgICAvLyBSb3RhdGUgYmFja1xuICAgICAgICBzaGlwc0Nvbi5zdHlsZS5yb3RhdGUgPSBcIjBkZWdcIjtcbiAgICAgICAgcm90YXRlZCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gQXBwZW5kaW5nXG4gICAgc2hpcERyYWdDb24uYXBwZW5kQ2hpbGQoc2hpcHNDb24pO1xuICAgIHNoaXBEcmFnQ29uLmFwcGVuZENoaWxkKHJvdGF0ZUJ0bik7XG5cbiAgICAvLyBBcHBlbmRpbmdcbiAgICBkcmFnQW5kRHJvcENvbi5hcHBlbmRDaGlsZChnYW1lQm9hcmRHcmlkKTtcbiAgICBkcmFnQW5kRHJvcENvbi5hcHBlbmRDaGlsZChzaGlwRHJhZ0Nvbik7XG5cbiAgICAvLyBDcmVhdGluZyBidG5jb250YWluZXIgZm9yIHJlc2V0YnRuIGFuZCBuZXh0IGJ0blxuICAgIGNvbnN0IGxvd2VyQnRuQ29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsb3dlckJ0bkNvbi5jbGFzc0xpc3QuYWRkKFwicGxhY2VtZW50TG93ZXJCdG5Db25cIik7XG5cbiAgICBjb25zdCByZXNldEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgcmVzZXRCdG4uY2xhc3NMaXN0LmFkZChcInBsYWNlbWVudFJlc2V0QnRuXCIsIFwiYnRuXCIpO1xuICAgIHJlc2V0QnRuLnRleHRDb250ZW50ID0gXCJSRVNFVFwiO1xuXG4gICAgbGV0IG5leHRSZWFkeSA9IGZhbHNlO1xuXG4gICAgcmVzZXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIHBsYXlCdXR0b25TaGlmdFNvdW5kKCk7XG5cbiAgICAgIC8vIElmIGFueSBzaGlwcyBsZWZ0LCByZW1vdmUgdGhlbVxuICAgICAgd2hpbGUgKHNoaXBzQ29uLmxhc3RDaGlsZCkge1xuICAgICAgICBzaGlwc0Nvbi5yZW1vdmVDaGlsZChzaGlwc0Nvbi5sYXN0Q2hpbGQpO1xuICAgICAgfVxuICAgICAgLy8gQ3JlYXRlIG5ldyBzZWxlY3RhYmxlIHNoaXBzXG4gICAgICBwb3B1bGF0ZUFsbFNoaXBzKCk7XG4gICAgICAvLyBDbGVhciBwbGF5ZXJzIHNoaXBzXG4gICAgICBwbGF5ZXIuYm9hcmQuc2hpcHMgPSBbXTtcbiAgICAgIC8vIENsZWFyIHRoZSBnYW1lYm9hcmRcbiAgICAgIHJlbG9hZEdhbWVib2FyZEdyaWQoKTtcblxuICAgICAgLy8gTWFrZSBzdXJlIHVzZXIgY2FuJ3QgZ28gdG8gYmF0dGxlIG5vd1xuICAgICAgbmV4dEJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwicGxhY2VtZW50TmV4dEJ0blJlYWR5XCIpO1xuICAgICAgbmV4dFJlYWR5ID0gZmFsc2U7XG4gICAgfSk7XG5cbiAgICBjb25zdCBuZXh0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBuZXh0QnRuLmNsYXNzTGlzdC5hZGQoXCJwbGFjZW1lbnROZXh0QnRuXCIsIFwiYnRuXCIpO1xuICAgIG5leHRCdG4udGV4dENvbnRlbnQgPSBcIk5FWFRcIjtcblxuICAgIG5leHRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIC8vIE9ubHkgaWYgYWxsIHNoaXBzIGFyZSBwbGFjZWRcbiAgICAgIGlmIChuZXh0UmVhZHkgPT0gdHJ1ZSkge1xuICAgICAgICBwbGF5Q2xpY2tTb3VuZCgpO1xuICAgICAgICAvLyBDcmVhdGUgbmljZSB0cmFuc2lzdGlvbiBiZWZvcmUgY2xlYXJpbmcgYW5kIHJlc29sdmluZ1xuICAgICAgICBjb250ZW50LnN0eWxlLnJpZ2h0ID0gXCIzMDB2d1wiO1xuICAgICAgICBjb250ZW50LnN0eWxlLnRyYW5zaXRpb24gPSBcIjRzIGVhc2UtaW5cIjtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChjb250ZW50KTtcbiAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgIH0sIDQwMDApO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgbmV4dEJ0bi5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCAoKSA9PiB7XG4gICAgICBpZiAobmV4dFJlYWR5ID09IHRydWUpIHtcbiAgICAgICAgcGxheUJ1dHRvblNoaWZ0U291bmQoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIEFwcGVuaW5nXG4gICAgbG93ZXJCdG5Db24uYXBwZW5kQ2hpbGQocmVzZXRCdG4pO1xuICAgIGxvd2VyQnRuQ29uLmFwcGVuZENoaWxkKG5leHRCdG4pO1xuXG4gICAgLy8gQXBwZW5kaW5nIGxhc3RcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlckNvbik7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChkcmFnQW5kRHJvcENvbik7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChsb3dlckJ0bkNvbik7XG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjb250ZW50LnN0eWxlLnJpZ2h0ID0gXCItMTAwdndcIjtcbiAgICB9LCA1MCk7XG4gIH0pO1xufTtcblxuY29uc3Qgc2V0dGluZ3NET00gPSAoKSA9PiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgIGNvbnN0IHNldHRpbmdJY29uID0gbmV3IEltYWdlKCk7XG4gICAgc2V0dGluZ0ljb24uc3JjID0gc2V0dGluZ0ljb25TcmM7XG4gICAgc2V0dGluZ0ljb24uY2xhc3NMaXN0LmFkZChcInNldHRpbmdJY29uXCIpO1xuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzZXR0aW5nSWNvbik7XG5cbiAgICBsZXQgc2V0dGluZ0ljb25IYXNCZWVuQ2xpY2tlZCA9IGZhbHNlO1xuXG4gICAgc2V0dGluZ0ljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIC8vIFRvIGF2b2lkIGRvdWJsZSBsb2FkXG4gICAgICBpZiAoc2V0dGluZ0ljb25IYXNCZWVuQ2xpY2tlZCA9PSBmYWxzZSkge1xuICAgICAgICBwbGF5QnV0dG9uU2hpZnRTb3VuZCgpO1xuICAgICAgICBjcmVhdGVTZXR0aW5nUGFnZSgpO1xuICAgICAgICBzZXR0aW5nSWNvbkhhc0JlZW5DbGlja2VkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IGNyZWF0ZVNldHRpbmdQYWdlID0gKCkgPT4ge1xuICAgICAgY29uc3Qgc2V0dGluZ1BhZ2VDb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgc2V0dGluZ1BhZ2VDb24uY2xhc3NMaXN0LmFkZChcInNldHRpbmdQYWdlQ29uXCIpO1xuXG4gICAgICBjb25zdCBiYWNrQXJyb3cgPSBuZXcgSW1hZ2UoKTtcbiAgICAgIGJhY2tBcnJvdy5zcmMgPSBiYWNrQXJyb3dJY29uU3JjO1xuICAgICAgYmFja0Fycm93LmNsYXNzTGlzdC5hZGQoXCJzZXR0aW5nQmFja0Fycm93XCIpO1xuXG4gICAgICBsZXQgYmFja0Fycm93SGFzQmVubkNsaWNrZWQgPSBmYWxzZTtcblxuICAgICAgYmFja0Fycm93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIC8vIHRvIGF2b2lkIGRvdWJsZSBsb2FkXG4gICAgICAgIGlmIChiYWNrQXJyb3dIYXNCZW5uQ2xpY2tlZCA9PSBmYWxzZSkge1xuICAgICAgICAgIHBsYXlCdXR0b25TaGlmdFNvdW5kKCk7XG4gICAgICAgICAgYmFja0Fycm93SGFzQmVubkNsaWNrZWQgPSB0cnVlO1xuICAgICAgICAgIHNldHRpbmdJY29uSGFzQmVlbkNsaWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICBzZXR0aW5nUGFnZUNvbi5zdHlsZS5vcGFjaXR5ID0gXCIwXCI7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHNldHRpbmdQYWdlQ29uKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2V0dGluZ0ljb24pO1xuICAgICAgICAgIH0sIDEwMDApO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgLy8gQ3JlYXRpbmcgc2xpZGVyc1xuICAgICAgY29uc3Qgc2xpZGVyQ29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHNsaWRlckNvbi5jbGFzc0xpc3QuYWRkKFwiY29udGVudENvblwiLCBcInNldHRpbmdzU2xpZGVyQ29uXCIpO1xuXG4gICAgICAvLyBNYXN0ZXJzb3VuZCBzbGlkZXJcbiAgICAgIGNvbnN0IHNsaWRlckNvbk1hc3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBzbGlkZXJDb25NYXN0ZXIuY2xhc3NMaXN0LmFkZChcInNldHRpbmdTbWFsbFNsaWRlckNvblwiKTtcblxuICAgICAgY29uc3Qgc2xpZGVyTWluaUNvbk1hc3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBzbGlkZXJNaW5pQ29uTWFzdGVyLmNsYXNzTGlzdC5hZGQoXCJzZXR0aW5nc1NsaWRlck1pbmlDb25cIik7XG5cbiAgICAgIGNvbnN0IHNsaWRlck1hc3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgIHNsaWRlck1hc3Rlci5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwicmFuZ2VcIik7XG4gICAgICBzbGlkZXJNYXN0ZXIuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgbWFzdGVyVm9sdW1lICogMTAwKTtcbiAgICAgIHNsaWRlck1hc3Rlci5jbGFzc0xpc3QuYWRkKFwic2V0dGluZ3NTbGlkZXJcIik7XG5cbiAgICAgIGNvbnN0IHNsaWRlck1hc3RlclZhbHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICBzbGlkZXJNYXN0ZXJWYWx1ZS5jbGFzc0xpc3QuYWRkKFwic2V0dGluZ3NTbGlkZXJWYWx1ZVwiKTtcbiAgICAgIHNsaWRlck1hc3RlclZhbHVlLnRleHRDb250ZW50ID0gYCR7c2xpZGVyTWFzdGVyLnZhbHVlfSVgO1xuXG4gICAgICBzbGlkZXJNYXN0ZXIuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCAoKSA9PiB7XG4gICAgICAgIC8vIENoYW5nZSB2YWx1ZWJsZSB0ZXh0XG4gICAgICAgIHNsaWRlck1hc3RlclZhbHVlLnRleHRDb250ZW50ID0gYCR7c2xpZGVyTWFzdGVyLnZhbHVlfSVgO1xuXG4gICAgICAgIC8vIENoYW5nZSBnbG9iYWwgdm9sdW1lIHZhbHVlXG4gICAgICAgIG1hc3RlclZvbHVtZSA9IHNsaWRlck1hc3Rlci52YWx1ZSAvIDEwMDtcblxuICAgICAgICAvLyBTZXQgc3RvcmFnZVxuICAgICAgICBzYXZlQXVkaW9Ub1N0b3JhZ2UoKTtcblxuICAgICAgICAvLyBNYWtlIHN1cmUgYWxsIHBsYXlpbmcgYXVkaW8gY2hhbmdlIHZvbHVtZVxuICAgICAgICBjaGFuZ2VWb2x1bWUoKTtcbiAgICAgIH0pO1xuXG4gICAgICBzbGlkZXJNYXN0ZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XG4gICAgICAgIC8vIENoYW5nZSB2YWx1ZWJsZSB0ZXh0XG4gICAgICAgIHNsaWRlck1hc3RlclZhbHVlLnRleHRDb250ZW50ID0gYCR7c2xpZGVyTWFzdGVyLnZhbHVlfSVgO1xuXG4gICAgICAgIC8vIENoYW5nZSBnbG9iYWwgdm9sdW1lIHZhbHVlXG4gICAgICAgIG1hc3RlclZvbHVtZSA9IHNsaWRlck1hc3Rlci52YWx1ZSAvIDEwMDtcblxuICAgICAgICAvLyBTZXQgc3RvcmFnZVxuICAgICAgICBzYXZlQXVkaW9Ub1N0b3JhZ2UoKTtcblxuICAgICAgICAvLyBNYWtlIHN1cmUgYWxsIHBsYXlpbmcgYXVkaW8gY2hhbmdlIHZvbHVtZVxuICAgICAgICBjaGFuZ2VWb2x1bWUoKTtcbiAgICAgIH0pO1xuXG4gICAgICBzbGlkZXJNaW5pQ29uTWFzdGVyLmFwcGVuZENoaWxkKHNsaWRlck1hc3Rlcik7XG4gICAgICBzbGlkZXJNaW5pQ29uTWFzdGVyLmFwcGVuZENoaWxkKHNsaWRlck1hc3RlclZhbHVlKTtcblxuICAgICAgY29uc3Qgc2xpZGVyTWFzdGVyTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgIHNsaWRlck1hc3RlckxhYmVsLmNsYXNzTGlzdC5hZGQoXCJzZXR0aW5nc1NsaWRlckxhYmVsXCIpO1xuICAgICAgc2xpZGVyTWFzdGVyTGFiZWwudGV4dENvbnRlbnQgPSBcIk1BU1RFUiBWT0xVTUVcIjtcblxuICAgICAgc2xpZGVyQ29uTWFzdGVyLmFwcGVuZENoaWxkKHNsaWRlck1hc3RlckxhYmVsKTtcbiAgICAgIHNsaWRlckNvbk1hc3Rlci5hcHBlbmRDaGlsZChzbGlkZXJNaW5pQ29uTWFzdGVyKTtcblxuICAgICAgLy8gTXVzaWMgc291bmQgc2xpZGVyXG4gICAgICBjb25zdCBzbGlkZXJDb25NdXNpYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBzbGlkZXJDb25NdXNpYy5jbGFzc0xpc3QuYWRkKFwic2V0dGluZ1NtYWxsU2xpZGVyQ29uXCIpO1xuXG4gICAgICBjb25zdCBzbGlkZXJNaW5pQ29uTXVzaWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgc2xpZGVyTWluaUNvbk11c2ljLmNsYXNzTGlzdC5hZGQoXCJzZXR0aW5nc1NsaWRlck1pbmlDb25cIik7XG5cbiAgICAgIGNvbnN0IHNsaWRlck11c2ljID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgc2xpZGVyTXVzaWMuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInJhbmdlXCIpO1xuICAgICAgc2xpZGVyTXVzaWMuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgbXVzaWNWb2x1bWUgKiAxMDApO1xuICAgICAgc2xpZGVyTXVzaWMuY2xhc3NMaXN0LmFkZChcInNldHRpbmdzU2xpZGVyXCIpO1xuXG4gICAgICBjb25zdCBzbGlkZXJNdXNpY1ZhbHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICBzbGlkZXJNdXNpY1ZhbHVlLmNsYXNzTGlzdC5hZGQoXCJzZXR0aW5nc1NsaWRlclZhbHVlXCIpO1xuICAgICAgc2xpZGVyTXVzaWNWYWx1ZS50ZXh0Q29udGVudCA9IGAke3NsaWRlck11c2ljLnZhbHVlfSVgO1xuXG4gICAgICBzbGlkZXJNdXNpYy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsICgpID0+IHtcbiAgICAgICAgLy8gQ2hhbmdlIHZhbHVlYmxlIHRleHRcbiAgICAgICAgc2xpZGVyTXVzaWNWYWx1ZS50ZXh0Q29udGVudCA9IGAke3NsaWRlck11c2ljLnZhbHVlfSVgO1xuXG4gICAgICAgIC8vIENoYW5nZSBnbG9iYWwgdm9sdW1lIHZhbHVlXG4gICAgICAgIG11c2ljVm9sdW1lID0gc2xpZGVyTXVzaWMudmFsdWUgLyAxMDA7XG5cbiAgICAgICAgLy8gU2V0IHN0b3JhZ2VcbiAgICAgICAgc2F2ZUF1ZGlvVG9TdG9yYWdlKCk7XG5cbiAgICAgICAgLy8gTWFrZSBzdXJlIGFsbCBwbGF5aW5nIGF1ZGlvIGNoYW5nZSB2b2x1bWVcbiAgICAgICAgY2hhbmdlVm9sdW1lKCk7XG4gICAgICB9KTtcblxuICAgICAgc2xpZGVyTXVzaWMuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XG4gICAgICAgIC8vIENoYW5nZSB2YWx1ZWJsZSB0ZXh0XG4gICAgICAgIHNsaWRlck11c2ljVmFsdWUudGV4dENvbnRlbnQgPSBgJHtzbGlkZXJNdXNpYy52YWx1ZX0lYDtcblxuICAgICAgICAvLyBDaGFuZ2UgZ2xvYmFsIHZvbHVtZSB2YWx1ZVxuICAgICAgICBtdXNpY1ZvbHVtZSA9IHNsaWRlck11c2ljLnZhbHVlIC8gMTAwO1xuXG4gICAgICAgIC8vIFNldCBzdG9yYWdlXG4gICAgICAgIHNhdmVBdWRpb1RvU3RvcmFnZSgpO1xuXG4gICAgICAgIC8vIE1ha2Ugc3VyZSBhbGwgcGxheWluZyBhdWRpbyBjaGFuZ2Ugdm9sdW1lXG4gICAgICAgIGNoYW5nZVZvbHVtZSgpO1xuICAgICAgfSk7XG5cbiAgICAgIHNsaWRlck1pbmlDb25NdXNpYy5hcHBlbmRDaGlsZChzbGlkZXJNdXNpYyk7XG4gICAgICBzbGlkZXJNaW5pQ29uTXVzaWMuYXBwZW5kQ2hpbGQoc2xpZGVyTXVzaWNWYWx1ZSk7XG5cbiAgICAgIGNvbnN0IHNsaWRlck11c2ljTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgIHNsaWRlck11c2ljTGFiZWwuY2xhc3NMaXN0LmFkZChcInNldHRpbmdzU2xpZGVyTGFiZWxcIik7XG4gICAgICBzbGlkZXJNdXNpY0xhYmVsLnRleHRDb250ZW50ID0gXCJNVVNJQyBWT0xVTUVcIjtcblxuICAgICAgc2xpZGVyQ29uTXVzaWMuYXBwZW5kQ2hpbGQoc2xpZGVyTXVzaWNMYWJlbCk7XG4gICAgICBzbGlkZXJDb25NdXNpYy5hcHBlbmRDaGlsZChzbGlkZXJNaW5pQ29uTXVzaWMpO1xuXG4gICAgICAvLyBTRlggc291bmQgc2xpZGVyXG4gICAgICBjb25zdCBzbGlkZXJDb25TRlggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgc2xpZGVyQ29uU0ZYLmNsYXNzTGlzdC5hZGQoXCJzZXR0aW5nU21hbGxTbGlkZXJDb25cIik7XG5cbiAgICAgIGNvbnN0IHNsaWRlck1pbmlDb25TRlggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgc2xpZGVyTWluaUNvblNGWC5jbGFzc0xpc3QuYWRkKFwic2V0dGluZ3NTbGlkZXJNaW5pQ29uXCIpO1xuXG4gICAgICBjb25zdCBzbGlkZXJTRlggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICBzbGlkZXJTRlguc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInJhbmdlXCIpO1xuICAgICAgc2xpZGVyU0ZYLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFNGWFZvbHVtZSAqIDEwMCk7XG4gICAgICBzbGlkZXJTRlguY2xhc3NMaXN0LmFkZChcInNldHRpbmdzU2xpZGVyXCIpO1xuXG4gICAgICBjb25zdCBzbGlkZXJTRlhWYWx1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgc2xpZGVyU0ZYVmFsdWUuY2xhc3NMaXN0LmFkZChcInNldHRpbmdzU2xpZGVyVmFsdWVcIik7XG4gICAgICBzbGlkZXJTRlhWYWx1ZS50ZXh0Q29udGVudCA9IGAke3NsaWRlclNGWC52YWx1ZX0lYDtcblxuICAgICAgc2xpZGVyU0ZYLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgKCkgPT4ge1xuICAgICAgICAvLyBDaGFuZ2UgdmFsdWVibGUgdGVcbiAgICAgICAgc2xpZGVyU0ZYVmFsdWUudGV4dENvbnRlbnQgPSBgJHtzbGlkZXJTRlgudmFsdWV9JWA7XG5cbiAgICAgICAgLy8gQ2hhbmdlIGdsb2JhbCB2b2x1bWUgdmFsdWVcbiAgICAgICAgU0ZYVm9sdW1lID0gc2xpZGVyU0ZYLnZhbHVlIC8gMTAwO1xuXG4gICAgICAgIC8vIFNldCBzdG9yYWdlXG4gICAgICAgIHNhdmVBdWRpb1RvU3RvcmFnZSgpO1xuXG4gICAgICAgIC8vIE1ha2Ugc3VyZSBhbGwgcGxheWluZyBhdWRpbyBjaGFuZ2Ugdm9sdW1lXG4gICAgICAgIGNoYW5nZVZvbHVtZSgpO1xuICAgICAgfSk7XG5cbiAgICAgIHNsaWRlclNGWC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcbiAgICAgICAgLy8gQ2hhbmdlIHZhbHVlYmxlIHRlXG4gICAgICAgIHNsaWRlclNGWFZhbHVlLnRleHRDb250ZW50ID0gYCR7c2xpZGVyU0ZYLnZhbHVlfSVgO1xuXG4gICAgICAgIC8vIENoYW5nZSBnbG9iYWwgdm9sdW1lIHZhbHVlXG4gICAgICAgIFNGWFZvbHVtZSA9IHNsaWRlclNGWC52YWx1ZSAvIDEwMDtcblxuICAgICAgICAvLyBTZXQgc3RvcmFnZVxuICAgICAgICBzYXZlQXVkaW9Ub1N0b3JhZ2UoKTtcblxuICAgICAgICAvLyBNYWtlIHN1cmUgYWxsIHBsYXlpbmcgYXVkaW8gY2hhbmdlIHZvbHVtZVxuICAgICAgICBjaGFuZ2VWb2x1bWUoKTtcbiAgICAgIH0pO1xuXG4gICAgICBzbGlkZXJNaW5pQ29uU0ZYLmFwcGVuZENoaWxkKHNsaWRlclNGWCk7XG4gICAgICBzbGlkZXJNaW5pQ29uU0ZYLmFwcGVuZENoaWxkKHNsaWRlclNGWFZhbHVlKTtcblxuICAgICAgY29uc3Qgc2xpZGVyU0ZYTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgIHNsaWRlclNGWExhYmVsLmNsYXNzTGlzdC5hZGQoXCJzZXR0aW5nc1NsaWRlckxhYmVsXCIpO1xuICAgICAgc2xpZGVyU0ZYTGFiZWwudGV4dENvbnRlbnQgPSBcIlNGWCBWT0xVTUVcIjtcblxuICAgICAgc2xpZGVyQ29uU0ZYLmFwcGVuZENoaWxkKHNsaWRlclNGWExhYmVsKTtcbiAgICAgIHNsaWRlckNvblNGWC5hcHBlbmRDaGlsZChzbGlkZXJNaW5pQ29uU0ZYKTtcblxuICAgICAgLy8gQXBwZW5kaW5nIHNsaWRlciBjb25zXG4gICAgICBzbGlkZXJDb24uYXBwZW5kQ2hpbGQoc2xpZGVyQ29uTWFzdGVyKTtcbiAgICAgIHNsaWRlckNvbi5hcHBlbmRDaGlsZChzbGlkZXJDb25NdXNpYyk7XG4gICAgICBzbGlkZXJDb24uYXBwZW5kQ2hpbGQoc2xpZGVyQ29uU0ZYKTtcblxuICAgICAgLy8gQ3JlYXRpbmcgYmFjayB0byBsb2JieSBidG5cbiAgICAgIGNvbnN0IGJhY2tUb0xvYmJ5QnRuQ29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGJhY2tUb0xvYmJ5QnRuQ29uLmNsYXNzTGlzdC5hZGQoXCJiYWNrVG9Mb2JieUJ0bkNvblwiKTtcblxuICAgICAgY29uc3QgYmFja1RvTG9iYnlCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgYmFja1RvTG9iYnlCdG4uY2xhc3NMaXN0LmFkZChcImJ0blwiLCBcImJhY2tUb0xvYmJ5QnRuXCIpO1xuICAgICAgYmFja1RvTG9iYnlCdG4udGV4dENvbnRlbnQgPSBcIkxFQVZFIEdBTUVcIjtcblxuICAgICAgbGV0IGlzYmFja1RvTG9iYnlCdG5DbGlja2VkID0gZmFsc2U7XG5cbiAgICAgIGJhY2tUb0xvYmJ5QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGlmIChpc2JhY2tUb0xvYmJ5QnRuQ2xpY2tlZCA9PSBmYWxzZSkge1xuICAgICAgICAgIC8vIEF2b2lkIGRvdWJsZSBjbGlja1xuICAgICAgICAgIGlzYmFja1RvTG9iYnlCdG5DbGlja2VkID0gdHJ1ZTtcblxuICAgICAgICAgIC8vIENsZWFyIHN0b3JhZ2VcbiAgICAgICAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoXCJnYW1lXCIpO1xuXG4gICAgICAgICAgLy8gUGxheSBzb3VuZFxuICAgICAgICAgIHBsYXlDbGlja1NvdW5kKCk7XG5cbiAgICAgICAgICAvLyBSZW1vdmUgY3VycmVudCBjb250ZW50IGV4ZXBlY3QgdGhpcyBuZXdseSBhcHBlbmRlZCBjaGlsZFxuICAgICAgICAgIHdoaWxlIChkb2N1bWVudC5ib2R5LmNoaWxkRWxlbWVudENvdW50ICE9IDEpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZG9jdW1lbnQuYm9keS5maXJzdENoaWxkKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgbG9hZGluZ1NjcmVlbigpO1xuICAgICAgICAgIC8vIE1ha2Ugc3VyZSBubyBkb3VibGUgY2xpY2tpbmdcbiAgICAgICAgICBiYWNrQXJyb3dIYXNCZW5uQ2xpY2tlZCA9IHRydWU7XG5cbiAgICAgICAgICAvLyBGYWRlXG4gICAgICAgICAgc2V0dGluZ1BhZ2VDb24uc3R5bGUub3BhY2l0eSA9IFwiMFwiO1xuXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHNldHRpbmdQYWdlQ29uKTtcbiAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGJhY2tUb0xvYmJ5QnRuQ29uLmFwcGVuZENoaWxkKGJhY2tUb0xvYmJ5QnRuKTtcblxuICAgICAgLy8gQXBwZW5kaW5nIGxhc3RcbiAgICAgIHNldHRpbmdQYWdlQ29uLmFwcGVuZENoaWxkKGJhY2tBcnJvdyk7XG4gICAgICBzZXR0aW5nUGFnZUNvbi5hcHBlbmRDaGlsZChzbGlkZXJDb24pO1xuXG4gICAgICBpZiAoIWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9hZGluZ1NjcmVlbkVsXCIpKSB7XG4gICAgICAgIHNldHRpbmdQYWdlQ29uLmFwcGVuZENoaWxkKGJhY2tUb0xvYmJ5QnRuQ29uKTtcbiAgICAgIH1cblxuICAgICAgc2V0dGluZ1BhZ2VDb24uc3R5bGUub3BhY2l0eSA9IFwiMFwiO1xuXG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNldHRpbmdQYWdlQ29uKTtcblxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIC8vIFRyYW5zaXN0aW9ud1xuICAgICAgICBzZXR0aW5nUGFnZUNvbi5zdHlsZS5vcGFjaXR5ID0gXCIxXCI7XG4gICAgICB9LCA1MCk7XG4gICAgfTtcbiAgfSk7XG59O1xuXG5jb25zdCBhdHRhY2tET00gPSAoYXR0YWNraW5nUExheWVyLCByZWNpZXZpbmdQbGF5ZXIpID0+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgLy8gQ3JlYXRpbmcgYm9hcmRzXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGVudC5jbGFzc0xpc3QuYWRkKFwiY29udGVudENvblwiLCBcIkFJR2FtZUNvblwiKTtcblxuICAgIC8vIENyZWF0aW5nIGhlYWRlclxuICAgIGNvbnN0IGhlYWRlckNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaGVhZGVyQ29uLmNsYXNzTGlzdC5hZGQoXG4gICAgICBcImxvYWRpbmdzY3JlZW5IZWFkZXJDb25cIixcbiAgICAgIFwiaW5nYW1lSGVhZGVyQ29uXCIsXG4gICAgICBcIkFJR2FtZUhlYWRlckNvblwiXG4gICAgKTtcblxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwibG9hZGluZ3NjcmVlbkhlYWRlclwiLCBcImluZ2FtZUhlYWRlclwiKTtcbiAgICBoZWFkZXIudGV4dENvbnRlbnQgPSBcIkJBVFRMRVNISVBTXCI7XG5cbiAgICBoZWFkZXJDb24uYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuICAgIC8vIENyZWF0aW5nIGdhbWVib2FyZHNcbiAgICBjb25zdCBnYW1lYm9hcmRzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBnYW1lYm9hcmRzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb250ZW50Q29uXCIpO1xuXG4gICAgY29uc3QgZW5lbXlHYW1lYm9hcmRDb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGVuZW15R2FtZWJvYXJkQ29uLmNsYXNzTGlzdC5hZGQoXCJlbmVteUdhbWVib2FyZENvblwiKTtcblxuICAgIGNvbnN0IGVuZW15R2FtZWJvYXJkSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgZW5lbXlHYW1lYm9hcmRIZWFkZXIuY2xhc3NMaXN0LmFkZChcImVuZW15R2FtZWJvYXJkSGVhZGVyXCIpO1xuICAgIGVuZW15R2FtZWJvYXJkSGVhZGVyLnRleHRDb250ZW50ID0gXCJFTkVNWSBTRUFTXCI7XG5cbiAgICBjb25zdCBlbmVteUdhbWVib2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZW5lbXlHYW1lYm9hcmQuY2xhc3NMaXN0LmFkZChcImVuZW15R2FtZWJvYXJkXCIpO1xuXG4gICAgZW5lbXlHYW1lYm9hcmRDb24uYXBwZW5kQ2hpbGQoZW5lbXlHYW1lYm9hcmQpO1xuICAgIGVuZW15R2FtZWJvYXJkQ29uLmFwcGVuZENoaWxkKGVuZW15R2FtZWJvYXJkSGVhZGVyKTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgLy8gRGlzcGxheSBmcmllbmRseSBoZWFkZXIgYWZ0ZXIgNHNcbiAgICAgIGZyaWVuZGx5Qm9hcmRIZWFkZXIuc3R5bGUub3BhY2l0eSA9IFwiMVwiO1xuICAgIH0sIDIwMDApO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAvLyBEaXNwbGF5IGVuZW15IGhlYWRlciBhZnRlciA1cyB3aXRoIHJlZFxuICAgICAgZW5lbXlHYW1lYm9hcmRIZWFkZXIuc3R5bGUub3BhY2l0eSA9IFwiMVwiO1xuICAgICAgZW5lbXlHYW1lYm9hcmRIZWFkZXIuc3R5bGUuY29sb3IgPSBcInJlZFwiO1xuICAgIH0sIDMwMDApO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAvLyBTZXQgZW5lbXkgaGVhZGVyIHR1cm4gd2hpdGUgYWdhaW5cbiAgICAgIGVuZW15R2FtZWJvYXJkSGVhZGVyLnN0eWxlLmNvbG9yID0gXCJ3aGl0ZVwiO1xuICAgIH0sIDUwMDApO1xuXG4gICAgLy8gQ3JlYXRpbmcgd2F2ZSBhbmltYXRpb24gZWxlbWVudFxuICAgIGNvbnN0IHNlYVdhdmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHNlYVdhdmUuY2xhc3NMaXN0LmFkZChcInNlYVdhdmVcIik7XG5cbiAgICAvLyBDcmVhdGluZyB0aGUgZnJpZW5kbHkgYm9hcmRcbiAgICBjb25zdCBmcmllbmRseUJvYXJkY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBmcmllbmRseUJvYXJkY29uLmNsYXNzTGlzdC5hZGQoXCJmcmllbmRseUJvYXJkY29uXCIpO1xuXG4gICAgY29uc3QgZnJpZW5kbHlCb2FyZEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIGZyaWVuZGx5Qm9hcmRIZWFkZXIuY2xhc3NMaXN0LmFkZChcImZyaWVuZGx5Qm9hcmRIZWFkZXJcIik7XG4gICAgZnJpZW5kbHlCb2FyZEhlYWRlci50ZXh0Q29udGVudCA9IFwiRlJJRU5ETFkgU0VBU1wiO1xuXG4gICAgY29uc3QgZnJpZW5kbHlCb2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZnJpZW5kbHlCb2FyZC5jbGFzc0xpc3QuYWRkKFwiZnJpZW5kbHlCb2FyZFwiKTtcblxuICAgIGZyaWVuZGx5Qm9hcmRjb24uYXBwZW5kQ2hpbGQoZnJpZW5kbHlCb2FyZEhlYWRlcik7XG4gICAgZnJpZW5kbHlCb2FyZGNvbi5hcHBlbmRDaGlsZChmcmllbmRseUJvYXJkKTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgLy8gRGlzcGxheSBnYW1lYm9hcmRzIGFmdGVyIDNzXG4gICAgICBlbmVteUdhbWVib2FyZC5zdHlsZS5vcGFjaXR5ID0gXCIxXCI7XG4gICAgICBmcmllbmRseUJvYXJkLnN0eWxlLm9wYWNpdHkgPSBcIjFcIjtcbiAgICB9LCAxMDAwKTtcblxuICAgIGxldCBnYW1lU3RvcHBlZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgcG9wdWxhdGVFbmVteUdhbWVib2FyZCA9ICgpID0+IHtcbiAgICAgIC8vIENyZWF0ZSBhbGwgZ3JpZCBzbG90c1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMTA7IGkrKykge1xuICAgICAgICBmb3IgKGxldCBqID0gMTsgaiA8PSAxMDsgaisrKSB7XG4gICAgICAgICAgY29uc3Qgc2xvdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgc2xvdC5jbGFzc0xpc3QuYWRkKFwiZW5lbXlHcmlkU2xvdFwiKTtcblxuICAgICAgICAgIC8vIElmIGl0IGhhdmUgYmVlbiBhdHRhY2tlZFxuICAgICAgICAgIGxldCBoYXZlQmVlbkF0dGFja2VkID0gZmFsc2U7XG5cbiAgICAgICAgICAvLyBDaGVja3MgaWYgaXQgaGF2ZSBiZWVuIGhpdFxuICAgICAgICAgIHJlY2lldmluZ1BsYXllci5ib2FyZC5oaXRzLmZvckVhY2goKGNvb3IpID0+IHtcbiAgICAgICAgICAgIC8vIENvbXBhcmUgY29vcmRpbmF0ZXNcbiAgICAgICAgICAgIGlmIChqID09IGNvb3JbMF0gJiYgaSA9PSBjb29yWzFdKSB7XG4gICAgICAgICAgICAgIHNsb3QuY2xhc3NMaXN0LmFkZChcImVuZW15R3JpZFNsb3RIaXRcIik7XG4gICAgICAgICAgICAgIGhhdmVCZWVuQXR0YWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIC8vIENoZWNrcyBpZiBpdCBoYXZlIGJlZW4gYXR0YWNrZWQgYnV0IG1pc3NlZFxuICAgICAgICAgIHJlY2lldmluZ1BsYXllci5ib2FyZC5taXNzZWQuZm9yRWFjaCgoY29vcikgPT4ge1xuICAgICAgICAgICAgLy8gQ29tcGFyZSBjb29yZGluYXRlc1xuICAgICAgICAgICAgaWYgKGogPT0gY29vclswXSAmJiBpID09IGNvb3JbMV0pIHtcbiAgICAgICAgICAgICAgc2xvdC5jbGFzc0xpc3QuYWRkKFwiZW5lbXlHcmlkU2xvdE1pc3NlZFwiKTtcbiAgICAgICAgICAgICAgaGF2ZUJlZW5BdHRhY2tlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICAvLyBJZiBpdCBoYXZlbnQgYmVlbiBhdHRhY2tlZCwgbWFrZSByZWFkeSBmb3IgaXRcbiAgICAgICAgICBpZiAoaGF2ZUJlZW5BdHRhY2tlZCA9PSBmYWxzZSkge1xuICAgICAgICAgICAgc2xvdC5jbGFzc0xpc3QuYWRkKFwiZW5lbXlHcmlkU2xvdFVuYXR0YWNrZWRcIik7XG4gICAgICAgICAgICBzbG90LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICAgIC8vIE9uIGNsaWNrIGF0dGFjayBBSSB3aXRoIGNvb3JkaW5hdGVzXG4gICAgICAgICAgICAgIGlmIChnYW1lU3RvcHBlZCAhPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIGdhbWVTdG9wcGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBhdHRhY2tpbmcoW2osIGldKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZW5lbXlHYW1lYm9hcmQuYXBwZW5kQ2hpbGQoc2xvdCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgcG9wdWxhdGVGcmllbmRseUdhbWVib2FyZCA9ICgpID0+IHtcbiAgICAgIC8vIENyZWF0ZSBhbGwgZ3JpZCBzbG90c1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMTA7IGkrKykge1xuICAgICAgICBmb3IgKGxldCBqID0gMTsgaiA8PSAxMDsgaisrKSB7XG4gICAgICAgICAgY29uc3Qgc2xvdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgc2xvdC5jbGFzc0xpc3QuYWRkKFwiZW5lbXlHcmlkU2xvdFwiKTtcblxuICAgICAgICAgIC8vIElmIGEgc2hpcCBoYXMgYmVlbiBoaXRcbiAgICAgICAgICBhdHRhY2tpbmdQTGF5ZXIuYm9hcmQuaGl0cy5mb3JFYWNoKChjb29yKSA9PiB7XG4gICAgICAgICAgICAvLyBDb21wYXJlIGNvb3JkaW5hdGVzXG4gICAgICAgICAgICBpZiAoaiA9PSBjb29yWzBdICYmIGkgPT0gY29vclsxXSkge1xuICAgICAgICAgICAgICBzbG90LmNsYXNzTGlzdC5hZGQoXCJlbmVteUdyaWRTbG90SGl0XCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIC8vIElmIHRoZSBlbmVteSBoYXZlIG1pc3NlZFxuICAgICAgICAgIGF0dGFja2luZ1BMYXllci5ib2FyZC5taXNzZWQuZm9yRWFjaCgoY29vcikgPT4ge1xuICAgICAgICAgICAgLy8gQ29tcGFyZSBjb29yZGluYXRlc1xuICAgICAgICAgICAgaWYgKGogPT0gY29vclswXSAmJiBpID09IGNvb3JbMV0pIHtcbiAgICAgICAgICAgICAgc2xvdC5jbGFzc0xpc3QuYWRkKFwiZW5lbXlHcmlkU2xvdE1pc3NlZFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICAvLyBJZiBzbG90IGlzIGEgc2hpcFxuICAgICAgICAgIGF0dGFja2luZ1BMYXllci5ib2FyZC5zaGlwcy5mb3JFYWNoKChzaGlwRWwpID0+IHtcbiAgICAgICAgICAgIHNoaXBFbC5jb29yLmZvckVhY2goKGNvb3IpID0+IHtcbiAgICAgICAgICAgICAgLy8gQ29tcGFyZSBjb29yZGluYXRlc1xuICAgICAgICAgICAgICBpZiAoaiA9PSBjb29yWzBdICYmIGkgPT0gY29vclsxXSkge1xuICAgICAgICAgICAgICAgIHNsb3QuY2xhc3NMaXN0LmFkZChcImZyaWVuZGx5R3JpZFNsb3RTaGlwXCIpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGZyaWVuZGx5Qm9hcmQuYXBwZW5kQ2hpbGQoc2xvdCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcG9wdWxhdGVFbmVteUdhbWVib2FyZCgpO1xuICAgIHBvcHVsYXRlRnJpZW5kbHlHYW1lYm9hcmQoKTtcblxuICAgIGNvbnN0IGF0dGFja2luZyA9IChbeCwgeV0pID0+IHtcbiAgICAgIC8vIEF0dGFjayBwbGF5ZXIgYm9hcmRcblxuICAgICAgbGV0IGF0dGFja2VkTGVuZ3RoID0gcmVjaWV2aW5nUGxheWVyLmJvYXJkLmhpdHMubGVuZ3RoO1xuXG4gICAgICByZWNpZXZpbmdQbGF5ZXIuYm9hcmQucmVjaWV2ZUF0dGFjayhbeCwgeV0pO1xuXG4gICAgICAvLyBDaGVjayBpZiBhIHNoaXAgd2FzIGhpdFxuICAgICAgaWYgKHJlY2lldmluZ1BsYXllci5ib2FyZC5oaXRzLmxlbmd0aCA9PSBhdHRhY2tlZExlbmd0aCkge1xuICAgICAgICBwbGF5U3BsYXNoU291bmQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBsYXlFeHBsb3Npb25Tb3VuZCgpO1xuICAgICAgfVxuXG4gICAgICAvLyBSZWxvYWQgYm90aCBnYW1lYm9hcmRzXG4gICAgICB3aGlsZSAoZW5lbXlHYW1lYm9hcmQubGFzdENoaWxkKSB7XG4gICAgICAgIGVuZW15R2FtZWJvYXJkLnJlbW92ZUNoaWxkKGVuZW15R2FtZWJvYXJkLmxhc3RDaGlsZCk7XG4gICAgICB9XG5cbiAgICAgIHBvcHVsYXRlRW5lbXlHYW1lYm9hcmQoKTtcblxuICAgICAgLy8gSWYgb25lIHdvbiBkaXNwbGF5IHdpbiBzY3JlZW5cbiAgICAgIGlmIChyZWNpZXZpbmdQbGF5ZXIuYm9hcmQuYWxsU3VuaygpID09IHRydWUpIHtcbiAgICAgICAgZ2FtZVN0b3BwZWQgPSB0cnVlO1xuXG4gICAgICAgIGNvbnN0IHdpblNjcmVlbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHdpblNjcmVlbi5jbGFzc0xpc3QuYWRkKFwid2luU2NyZWVuUGxheWVyXCIpO1xuXG4gICAgICAgIGNvbnN0IHdpblNjcmVlblRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgd2luU2NyZWVuVGV4dC5jbGFzc0xpc3QuYWRkKFwid2luU2NyZWVuVGV4dFwiKTtcbiAgICAgICAgd2luU2NyZWVuVGV4dC50ZXh0Q29udGVudCA9IGAke2F0dGFja2luZ1BMYXllci5uYW1lfSBXT04gVEhFIEdBTUUhYDtcblxuICAgICAgICB3aW5TY3JlZW4uYXBwZW5kQ2hpbGQod2luU2NyZWVuVGV4dCk7XG5cbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh3aW5TY3JlZW4pO1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHdpblNjcmVlbi5zdHlsZS5ib3R0b20gPSBcIjBweFwiO1xuICAgICAgICB9LCA1MCk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHdoaWxlIChjb250ZW50Lmxhc3RDaGlsZCkge1xuICAgICAgICAgICAgY29udGVudC5yZW1vdmVDaGlsZChjb250ZW50Lmxhc3RDaGlsZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LCA0NTAwKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgd2luU2NyZWVuLnN0eWxlLm9wYWNpdHkgPSBcIjBcIjtcbiAgICAgICAgfSwgNzUwMCk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHdoaWxlIChkb2N1bWVudC5ib2R5Lmxhc3RDaGlsZCkge1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChkb2N1bWVudC5ib2R5Lmxhc3RDaGlsZCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGxvYWRpbmdTY3JlZW4oKTtcbiAgICAgICAgfSwgMTE1MDApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgY29udGVudC5zdHlsZS5vcGFjaXR5ID0gXCIwXCI7XG4gICAgICAgIH0sIDEwMDApO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGNvbnRlbnQpO1xuICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgfSwgMzAwMCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8vIEFwcGVuZGluZ1xuICAgIGdhbWVib2FyZHNDb250YWluZXIuYXBwZW5kQ2hpbGQoZW5lbXlHYW1lYm9hcmRDb24pO1xuICAgIGdhbWVib2FyZHNDb250YWluZXIuYXBwZW5kQ2hpbGQoc2VhV2F2ZSk7XG4gICAgZ2FtZWJvYXJkc0NvbnRhaW5lci5hcHBlbmRDaGlsZChmcmllbmRseUJvYXJkY29uKTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgLy8gRmFkZSBpbiBhZnRlciAxLjVzXG4gICAgICBlbmVteUdhbWVib2FyZENvbi5zdHlsZS5vcGFjaXR5ID0gXCIxXCI7XG4gICAgICBzZWFXYXZlLnN0eWxlLm9wYWNpdHkgPSBcIjFcIjtcbiAgICAgIGZyaWVuZGx5Qm9hcmRjb24uc3R5bGUub3BhY2l0eSA9IFwiMVwiO1xuICAgIH0sIDUwMCk7XG5cbiAgICAvLyBBcHBlbmRpbmcgYWxsXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXJDb24pO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZ2FtZWJvYXJkc0NvbnRhaW5lcik7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIC8vIEZhZGUgaW4gYWZ0ZXIgMC41c1xuICAgICAgaGVhZGVyQ29uLnN0eWxlLm9wYWNpdHkgPSBcIjFcIjtcbiAgICB9LCA1MDApO1xuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250ZW50KTtcbiAgfSk7XG59O1xuXG5jb25zdCByZXN1bWVHYW1lID0gKCkgPT4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoXCJjb250ZW50Q29uXCIsIFwicmVzdW1lR2FtZUJhY2tncm91bmRcIik7XG5cbiAgICBjb25zdCBtZW51Q29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtZW51Q29uLmNsYXNzTGlzdC5hZGQoXCJyZXN1bWVHYW1lQ29uXCIsIFwiY29udGVudENvblwiKTtcblxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwicmVzdW1lR2FtZVRleHRcIik7XG4gICAgaGVhZGVyLnRleHRDb250ZW50ID1cbiAgICAgIFwiWU9VIEhBVkUgQU4gVU5GSU5JU0hFRCBHQU1FLCBETyBZT1UgV0FOVCBUTyBDT05USU5VRT9cIjtcblxuICAgIGNvbnN0IGJ0bkNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYnRuQ29uLmNsYXNzTGlzdC5hZGQoXCJyZXN1bWVHYW1lQnRuQ29uXCIpO1xuXG4gICAgY29uc3QgYmFja0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYmFja0J0bi5jbGFzc0xpc3QuYWRkKFwiYnRuXCIsIFwicmVzdW1lR2FtZUJhY2tCdG5cIik7XG4gICAgYmFja0J0bi50ZXh0Q29udGVudCA9IFwiTk9cIjtcblxuICAgIGxldCBidG5DbGlja2VkID0gZmFsc2U7XG5cbiAgICBiYWNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBpZiAoYnRuQ2xpY2tlZCA9PSBmYWxzZSkge1xuICAgICAgICBidG5DbGlja2VkID0gdHJ1ZTtcbiAgICAgICAgcGxheUNsaWNrU291bmQoKTtcblxuICAgICAgICAvLyBDbGVhciBzdG9yYWdlXG4gICAgICAgIGxvY2FsU3RvcmFnZS5jbGVhcihcImdhbWVcIik7XG5cbiAgICAgICAgY29udGVudC5zdHlsZS5vcGFjaXR5ID0gXCIwXCI7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChjb250ZW50KTtcbiAgICAgICAgfSwgMjAwMCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBiYWNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsICgpID0+IHtcbiAgICAgIHBsYXlCdXR0b25TaGlmdFNvdW5kKCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCByZXN1bWVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIHJlc3VtZUJ0bi5jbGFzc0xpc3QuYWRkKFwiYnRuXCIsIFwicmVzdW1lR2FtZVJlc3VtZUJ0blwiKTtcbiAgICByZXN1bWVCdG4udGV4dENvbnRlbnQgPSBcIllFU1wiO1xuXG4gICAgcmVzdW1lQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBpZiAoYnRuQ2xpY2tlZCA9PSBmYWxzZSkge1xuICAgICAgICBidG5DbGlja2VkID0gdHJ1ZTtcbiAgICAgICAgcGxheUNsaWNrU291bmQoKTtcbiAgICAgICAgcmVzb2x2ZSgpO1xuXG4gICAgICAgIGNvbnRlbnQuc3R5bGUub3BhY2l0eSA9IFwiMFwiO1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoY29udGVudCk7XG4gICAgICAgIH0sIDIwMDApO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmVzdW1lQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsICgpID0+IHtcbiAgICAgIHBsYXlCdXR0b25TaGlmdFNvdW5kKCk7XG4gICAgfSk7XG5cbiAgICBidG5Db24uYXBwZW5kQ2hpbGQoYmFja0J0bik7XG4gICAgYnRuQ29uLmFwcGVuZENoaWxkKHJlc3VtZUJ0bik7XG5cbiAgICBtZW51Q29uLmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgbWVudUNvbi5hcHBlbmRDaGlsZChidG5Db24pO1xuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChtZW51Q29uKTtcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGVudCk7XG4gIH0pO1xufTtcblxuZXhwb3J0IHsgbG9hZGluZ1NjcmVlbiwgcmVzdW1lR2FtZSwgdHdvUGxheWVyLCBwbGF5QWdhaW5zdEFJLCBwbGFjZVNoaXBzRE9NIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vY29udHJvbGxlclwiO1xuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
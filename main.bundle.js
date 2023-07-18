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
  margin-top: 20vh;
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

.audioBtn {
  margin-top: 5vh;
  transition: 4s;
}

.audioIconImage {
  height: min(6vw, 50px);
  width: min(6vw, 50px);
}

/* Loadingscreen styles END */

/* Ingame styles*/
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
  background-color: #5d68e4;
}

.enemyGridSlotUnattacked {
  transition: 0.3s;
}

.enemyGridSlotUnattacked:hover {
  background-color: #8085bb;
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
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n  font-family: \"MyFont\";\n  src: url(\"./BlackOpsOne-Regular.ttf\");\n}\n\nbody {\n  background-color: #000fb7;\n  margin: 0px;\n  font-family: \"MyFont\";\n}\n\n.hide {\n  visibility: hidden;\n}\n\n.btn {\n  height: min(70px, 10vw);\n  width: min(200px, 30vw);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: min(30px, 6vw);\n  font-family: \"MyFont\";\n  border: none;\n  transition: 0.3s;\n  user-select: none;\n}\n\n.btn:hover {\n  scale: 1.05;\n}\n\n/* Loadingscreen styles */\n\n.contentCon {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.loadingscreenHeaderCon {\n  height: min(85px, 9vw);\n  margin-top: 10vh;\n  display: flex;\n  width: 80%;\n  justify-content: center;\n  overflow: hidden;\n  transition: 4s;\n}\n\n.loadingscreenHeader {\n  font-size: min(10vw, 90px);\n  color: white;\n  position: relative;\n  bottom: -60px;\n  transition-timing-function: cubic-bezier(0.13, 0.65, 0.46, 1.57);\n  transition-duration: 4s;\n}\n\n@keyframes move {\n  0% {\n    bottom: -10px;\n  }\n  100% {\n    bottom: -1px;\n  }\n}\n\n.loadingscreenBtnCon {\n  display: flex;\n  justify-content: center;\n  margin-top: 20vh;\n  gap: min(5vw, 50px);\n  width: min(80vw, 600px);\n  transition: 4s;\n}\n\n.loadingscreenStartBtn {\n  height: min(70px, 15vw);\n  width: min(200px, 45vw);\n  font-size: min(25px, 6vw);\n  background-color: #0180ff;\n  font-family: \"Myfont\";\n  color: white;\n}\n\n.loadingscreenStartBtn:hover {\n  background-color: rgb(191, 191, 191);\n}\n\n.audioBtn {\n  margin-top: 5vh;\n  transition: 4s;\n}\n\n.audioIconImage {\n  height: min(6vw, 50px);\n  width: min(6vw, 50px);\n}\n\n/* Loadingscreen styles END */\n\n/* Ingame styles*/\n.AIGameHeaderCon {\n  transition: 2s;\n  opacity: 0;\n}\n\n.ingameHeaderCon {\n  height: min(40px, 5vw);\n  margin-top: 3vh;\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.ingameHeader {\n  animation: move 3s cubic-bezier(0.13, 0.65, 0.46, 1.57) infinite alternate;\n  margin-top: 0px;\n  font-size: min(40px, 5vw);\n  flex-wrap: wrap;\n}\n\n.enemyGameboardCon {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 3vh;\n}\n\n.enemyGameboardHeader {\n  color: rgb(255, 255, 255);\n  font-size: min(30px, 6vw);\n  margin-top: 2vh;\n  transition: 2s;\n  opacity: 0;\n}\n\n.enemyGameboard {\n  height: 35vh;\n  width: 35vh;\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  border: 2px solid rgb(255, 255, 255);\n  transition: 2s;\n  opacity: 0;\n}\n\n@keyframes gameboardWave {\n  0% {\n    bottom: 35vh;\n  }\n  80% {\n    bottom: 38vh;\n  }\n  100% {\n    bottom: 38.2vh;\n  }\n}\n\n.seaWave {\n  position: absolute;\n  bottom: 40vh;\n  height: 10vh;\n  width: 100vw;\n  background-color: #0180ff;\n  animation: gameboardWave 2.5s ease-in-out infinite alternate;\n  transition: 2s;\n  opacity: 0;\n}\n\n.friendlyBoardcon {\n  position: absolute;\n  bottom: 0;\n  height: 42vh;\n  width: 100vw;\n  background-color: #0180ff;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  transition: 2s;\n  opacity: 0;\n}\n\n.friendlyBoardHeader {\n  color: white;\n  font-size: min(30px, 6vw);\n  margin-bottom: 1vh;\n  transition: 2s;\n  opacity: 0;\n}\n\n.friendlyBoard {\n  height: 35vh;\n  width: 35vh;\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  border: 2px solid rgb(255, 255, 255);\n  transition: 2s;\n  opacity: 0;\n}\n\n.enemyGridSlot {\n  border: solid 2px white;\n}\n\n.enemyGridSlotMissed {\n  background-color: #5d68e4;\n}\n\n.enemyGridSlotUnattacked {\n  transition: 0.3s;\n}\n\n.enemyGridSlotUnattacked:hover {\n  background-color: #8085bb;\n}\n\n.friendlyGridSlotShip {\n  background-color: rgb(65, 65, 65);\n}\n\n.enemyGridSlotHit {\n  background-color: #ff0000;\n}\n\n.winScreenPlayer {\n  background-color: #0180ff;\n  position: fixed;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  width: 100vw;\n  bottom: -100vh;\n  transition: 4s ease-in-out;\n  z-index: 1;\n}\n\n.winScreenText {\n  color: white;\n  font-size: 70px;\n  text-align: center;\n}\n\n.winScreenAI {\n  background-color: #000fb7;\n  position: fixed;\n  z-index: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  width: 100vw;\n  top: -100vh;\n  transition: 4s ease-in-out;\n}\n\n/* Placement styles*/\n.placementCon {\n  width: 300vw;\n  height: 100vh;\n  background-color: #0180ff;\n  transition: 6s ease-out;\n  position: fixed;\n  right: -300vw;\n}\n\n@keyframes placementHeaderWave {\n  0% {\n    bottom: -2vh;\n  }\n  100% {\n    bottom: 0vh;\n  }\n}\n\n.gridPlacementSlot {\n  border: 2px white solid;\n}\n\n.placementBoard {\n  height: 35vh;\n  width: 35vh;\n  opacity: 1;\n}\n\n.dragAndDropCon {\n  height: 70vh;\n  width: 100vw;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  gap: 40px;\n  align-items: center;\n  justify-content: center;\n}\n\n.placementShipsCon {\n  display: flex;\n  flex-direction: row;\n  gap: 10px;\n  width: 32vh;\n  height: 32vh;\n}\n\n.placementShipEl {\n  display: grid;\n  border: solid 2px white;\n  width: 3.5vh;\n}\n\n.shipDragCon {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n}\n\n.placementRotateBtn {\n  background-color: rgb(65, 65, 65);\n  color: white;\n}\n\n.placementSelectedShipEl {\n  box-shadow: 0px 0px 10px white;\n}\n\n.placementHoveredSlot {\n  background-color: #7b7b7b;\n}\n\n.placementHoveredSlotOutOfRange {\n  background-color: #c55858;\n}\n\n.placementLowerBtnCon {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  width: min(65vw, 700px);\n}\n\n.placementResetBtn {\n  background-color: #c55858;\n  color: white;\n}\n\n.placementNextBtn {\n  background-color: #16599d;\n  color: #0180ff;\n}\n.placementNextBtn:hover {\n  scale: 1;\n}\n\n.placementNextBtnReady {\n  background-color: #05c6a9;\n  color: white;\n}\n\n.placementNextBtnReady:hover {\n  scale: 1.05;\n}\n\n.placementHeader {\n  animation: placementHeaderWave 3s ease-in-out infinite alternate;\n}\n\n.placementHeaderCon {\n  height: auto;\n  width: 90vw;\n  display: flex;\n  justify-content: center;\n  text-align: center;\n  margin-bottom: 3vh;\n  margin-top: calc(1vh);\n}\n\n@media only screen and (max-width: 700px) {\n  .placementLowerBtnCon {\n    margin-top: 70px;\n  }\n}\n\n.getNameContentCon {\n  transition: 4s;\n  opacity: 0;\n}\n\n.getNameInputConCon {\n  margin-top: 30vh;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  width: min(90vw, 600px);\n}\n\n.getNameInputCon {\n  gap: 5px;\n  align-items: flex-start;\n}\n\n.getNameInput {\n  color: black;\n  font-family: \"myFont\";\n  font-size: 30px;\n  width: min(230px, 40vw);\n}\n\n.getNameInputLabel {\n  font-size: 30px;\n  color: white;\n}\n\n.getNameNextBtn {\n  margin-top: 20vh;\n  color: #000fb7;\n  background-color: #000647;\n  height: min(70px, 15vw);\n  width: min(200px, 45vw);\n}\n\n.getNameNextBtn:hover {\n  scale: 1;\n}\n\n.getNameNextBtnReady {\n  color: white;\n  background-color: #05c6a9;\n}\n\n.passDeviceCon {\n  padding-top: 15vh;\n  height: 85vh;\n  width: 100vw;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-color: #000972;\n  transition: 2s ease-in-out;\n  position: fixed;\n  gap: min(2vh, 100px);\n}\n\n.passScreenHeader {\n  color: white;\n  font-size: min(40px, 7vw);\n  text-align: center;\n  width: 90vw;\n}\n\n.passDeviceImage {\n  width: min(600px, 100vw);\n}\n\n.passDeviceContinueText {\n  color: white;\n  font-size: min(20px, 4vw);\n  margin-top: 30vh;\n}\n"],"sourceRoot":""}]);
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


// const newGame = new twoPlayer("MARK", "ANDREAS");
// newGame.passScreenDOM(newGame.player1);

(0,_gameloop__WEBPACK_IMPORTED_MODULE_0__.loadingScreen)();


/***/ }),

/***/ "./src/gameloop.js":
/*!*************************!*\
  !*** ./src/gameloop.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadingScreen: () => (/* binding */ loadingScreen),
/* harmony export */   twoPlayer: () => (/* binding */ twoPlayer)
/* harmony export */ });
/* harmony import */ var _app_player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/player */ "./src/app/player.js");
/* harmony import */ var _Audio_battle_of_the_dragons_8037_mp3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Audio/battle-of-the-dragons-8037.mp3 */ "./src/Audio/battle-of-the-dragons-8037.mp3");
/* harmony import */ var _Audio_computer_processing_sound_effects_short_click_select_01_122134_mp3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Audio/computer-processing-sound-effects-short-click-select-01-122134.mp3 */ "./src/Audio/computer-processing-sound-effects-short-click-select-01-122134.mp3");
/* harmony import */ var _images_audioOnIconSrc_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/audioOnIconSrc.png */ "./src/images/audioOnIconSrc.png");
/* harmony import */ var _images_audioOffIconSrc_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/audioOffIconSrc.png */ "./src/images/audioOffIconSrc.png");
/* harmony import */ var _app_ships__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app/ships */ "./src/app/ships.js");
/* harmony import */ var _images_passDeviceSrc_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/passDeviceSrc.png */ "./src/images/passDeviceSrc.png");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './images/settingIconSrc.svg.html'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());








// Img



let audioOn = false;

const battleMusic = new Audio(_Audio_battle_of_the_dragons_8037_mp3__WEBPACK_IMPORTED_MODULE_1__);
battleMusic.volume = 0.5;

const clickSound = new Audio(_Audio_computer_processing_sound_effects_short_click_select_01_122134_mp3__WEBPACK_IMPORTED_MODULE_2__);

const loadingScreen = () => {
  return new Promise((resolve) => {
    const content = document.createElement("div");
    content.classList.add("contentCon");

    // Creating header container
    const headerCon = document.createElement("div");
    headerCon.classList.add("loadingscreenHeaderCon");

    const header = document.createElement("span");
    header.classList.add("loadingscreenHeader");
    header.textContent = "BATTELSHIPS";

    headerCon.appendChild(header);

    // Creating audio btn
    const audioBtn = document.createElement("div");
    audioBtn.classList.add("audioBtn");

    const audioOnImage = new Image();
    audioOnImage.src = _images_audioOnIconSrc_png__WEBPACK_IMPORTED_MODULE_3__;
    audioOnImage.classList.add("audioIconImage");

    const audioOffImage = new Image();
    audioOffImage.src = _images_audioOffIconSrc_png__WEBPACK_IMPORTED_MODULE_4__;
    audioOffImage.classList.add("audioIconImage");

    audioBtn.appendChild(audioOffImage);

    audioBtn.addEventListener("click", () => {
      audioBtn.removeChild(audioBtn.lastChild);
      if (audioOn == false) {
        // If audio of turn it on
        audioBtn.appendChild(audioOnImage);
        audioOn = true;
        battleMusic.play();
      } else {
        // Else turn it off
        audioBtn.appendChild(audioOffImage);
        audioOn = false;
        battleMusic.pause();
      }
    });

    // Creating btns
    const btnCon = document.createElement("div");
    btnCon.classList.add("loadingscreenBtnCon");

    // To make sure btn is not activated twice
    let btnClicked = false;

    const twoPlayerBtn = document.createElement("button");
    twoPlayerBtn.classList.add("loadingscreenStartBtn", "btn");
    twoPlayerBtn.textContent = "2 Player";

    twoPlayerBtn.addEventListener("click", () => {
      // Adds clickSound
      if (audioOn == true) clickSound.play();

      // Checks if a btn allready have been clicked
      if (btnClicked == false) {
        btnClicked = true;
        return new Promise((resolve, reject) => {
          // Fade existing content away
          audioBtn.style.opacity = "0";
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

    const AIBtn = document.createElement("button");
    AIBtn.classList.add("loadingscreenStartBtn", "btn");
    AIBtn.textContent = "Against AI";

    AIBtn.addEventListener("click", () => {
      // Adds click sound
      if (audioOn == true) clickSound.play();

      // Checks if a btn allready have been clicked
      if (btnClicked == false) {
        btnClicked = true;
        return new Promise((resolve, reject) => {
          // Fade existing content away
          audioBtn.style.opacity = "0";
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

    btnCon.appendChild(twoPlayerBtn);
    btnCon.appendChild(AIBtn);

    // Appending all
    content.appendChild(headerCon);

    // Make them ready to fade in on load
    audioBtn.style.opacity = "0";
    btnCon.style.opacity = "0";

    content.appendChild(audioBtn);
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
      audioBtn.style.opacity = "1";
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
      // When placement is done display game
      this.displayGameDom();
    });
  }
  displayGameDom() {
    return new Promise((resolve) => {
      // Creating boards
      this.AI.placeShips();

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
      header.textContent = "BATTELSHIPS";

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
        this.AI.board.recieveAttack([x, y]);

        // Player recieve attack
        this.player.board.recieveAttack(this.AI.attack());

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
          gameStopped = true;

          const winScreenAI = document.createElement("div");
          winScreenAI.classList.add("winScreenAI");

          const winScreenText = document.createElement("span");
          winScreenText.classList.add("winScreenText");
          winScreenText.textContent = "YOU LOST";

          winScreenAI.appendChild(winScreenText);

          document.body.appendChild(winScreenAI);

          setTimeout(() => {
            winScreenAI.style.bottom = "0px";
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
      this.passScreenDOM(this.player1).then(() => {
        placeShipsDOM(this.player1).then(() => {
          this.passScreenDOM(this.player2).then(() => {
            placeShipsDOM(this.player2).then(() => {
              this.passScreenDOM(this.player1).then(() => {
                this.attackCycleDOM();
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
          this.player1.name = player1Input.value;
          this.player2.name = player2Input.value;
          console.log(this);

          content.style.opacity = "0";
          hasSubmitted = true;
          setTimeout(() => {
            while (document.body.lastChild) {
              document.body.removeChild(document.body.lastChild);
            }
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
      passDeviceImage.src = _images_passDeviceSrc_png__WEBPACK_IMPORTED_MODULE_6__;
      passDeviceImage.classList.add("passDeviceImage");

      // Press to continue text
      const continueText = document.createElement("span");
      continueText.classList.add("passDeviceContinueText");
      continueText.textContent = "TAP TO CONTINUE";

      content.appendChild(passHeader);
      content.appendChild(passDeviceImage);
      content.appendChild(continueText);

      content.addEventListener("click", () => {
        content.style.opacity = "0";
        setTimeout(() => {
          document.body.removeChild(content);
          resolve();
        }, 2000);
      });

      content.style.opacity = "0";

      document.body.appendChild(content);
      setTimeout(() => {
        content.style.opacity = "1";
      }, 50);
    });
  }
  attackCycleDOM() {
    return new Promise((resolve) => {});
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
    header.textContent = `AYA-AYA CAPTAIN ${player.name} SELECT AND DROP YOUR SHIPS WHERE YOU WANT THEM`;

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
                // Create new ship with the calculated coordinates
                let newShip = new _app_ships__WEBPACK_IMPORTED_MODULE_5__["default"](
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
        // Create nice transistion before clearing and resolving
        content.style.right = "300vw";
        content.style.transition = "4s ease-in";
        setTimeout(() => {
          document.body.removeChild(content);
          resolve();
        }, 4000);
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
    settingIcon.src = Object(function webpackMissingModule() { var e = new Error("Cannot find module './images/settingIconSrc.svg.html'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());

    settingIcon.addEventListener("click", () => {});

    document.body.appendChild(settingIcon);
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

/***/ "./src/BlackOpsOne-Regular.ttf":
/*!*************************************!*\
  !*** ./src/BlackOpsOne-Regular.ttf ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b8437be32fe8faca71ed.ttf";

/***/ }),

/***/ "./src/images/audioOffIconSrc.png":
/*!****************************************!*\
  !*** ./src/images/audioOffIconSrc.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "867fac05123b9c383188.png";

/***/ }),

/***/ "./src/images/audioOnIconSrc.png":
/*!***************************************!*\
  !*** ./src/images/audioOnIconSrc.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5d3fa810d63306a0f5e1.png";

/***/ }),

/***/ "./src/images/passDeviceSrc.png":
/*!**************************************!*\
  !*** ./src/images/passDeviceSrc.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7bba34cbc2db4bfcd7b0.png";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUNPO0FBQ2hHLDRDQUE0QywrSEFBNEM7QUFDeEYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGdGQUFnRixZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sYUFBYSxNQUFNLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxhQUFhLGFBQWEsTUFBTSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsTUFBTSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxZQUFZLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFV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QUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7O0FDQXNCO0FBQ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvYXBwL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvYXBwL3BsYXllci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvYXBwL3NoaXBzLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9jb250cm9sbGVyLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9nYW1lbG9vcC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9CbGFja09wc09uZS1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIk15Rm9udFwiO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbn1cblxuYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDBmYjc7XG4gIG1hcmdpbjogMHB4O1xuICBmb250LWZhbWlseTogXCJNeUZvbnRcIjtcbn1cblxuLmhpZGUge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbi5idG4ge1xuICBoZWlnaHQ6IG1pbig3MHB4LCAxMHZ3KTtcbiAgd2lkdGg6IG1pbigyMDBweCwgMzB2dyk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IG1pbigzMHB4LCA2dncpO1xuICBmb250LWZhbWlseTogXCJNeUZvbnRcIjtcbiAgYm9yZGVyOiBub25lO1xuICB0cmFuc2l0aW9uOiAwLjNzO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuLmJ0bjpob3ZlciB7XG4gIHNjYWxlOiAxLjA1O1xufVxuXG4vKiBMb2FkaW5nc2NyZWVuIHN0eWxlcyAqL1xuXG4uY29udGVudENvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5sb2FkaW5nc2NyZWVuSGVhZGVyQ29uIHtcbiAgaGVpZ2h0OiBtaW4oODVweCwgOXZ3KTtcbiAgbWFyZ2luLXRvcDogMTB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDgwJTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IDRzO1xufVxuXG4ubG9hZGluZ3NjcmVlbkhlYWRlciB7XG4gIGZvbnQtc2l6ZTogbWluKDEwdncsIDkwcHgpO1xuICBjb2xvcjogd2hpdGU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm90dG9tOiAtNjBweDtcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjEzLCAwLjY1LCAwLjQ2LCAxLjU3KTtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNHM7XG59XG5cbkBrZXlmcmFtZXMgbW92ZSB7XG4gIDAlIHtcbiAgICBib3R0b206IC0xMHB4O1xuICB9XG4gIDEwMCUge1xuICAgIGJvdHRvbTogLTFweDtcbiAgfVxufVxuXG4ubG9hZGluZ3NjcmVlbkJ0bkNvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAyMHZoO1xuICBnYXA6IG1pbig1dncsIDUwcHgpO1xuICB3aWR0aDogbWluKDgwdncsIDYwMHB4KTtcbiAgdHJhbnNpdGlvbjogNHM7XG59XG5cbi5sb2FkaW5nc2NyZWVuU3RhcnRCdG4ge1xuICBoZWlnaHQ6IG1pbig3MHB4LCAxNXZ3KTtcbiAgd2lkdGg6IG1pbigyMDBweCwgNDV2dyk7XG4gIGZvbnQtc2l6ZTogbWluKDI1cHgsIDZ2dyk7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMTgwZmY7XG4gIGZvbnQtZmFtaWx5OiBcIk15Zm9udFwiO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5sb2FkaW5nc2NyZWVuU3RhcnRCdG46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTkxLCAxOTEsIDE5MSk7XG59XG5cbi5hdWRpb0J0biB7XG4gIG1hcmdpbi10b3A6IDV2aDtcbiAgdHJhbnNpdGlvbjogNHM7XG59XG5cbi5hdWRpb0ljb25JbWFnZSB7XG4gIGhlaWdodDogbWluKDZ2dywgNTBweCk7XG4gIHdpZHRoOiBtaW4oNnZ3LCA1MHB4KTtcbn1cblxuLyogTG9hZGluZ3NjcmVlbiBzdHlsZXMgRU5EICovXG5cbi8qIEluZ2FtZSBzdHlsZXMqL1xuLkFJR2FtZUhlYWRlckNvbiB7XG4gIHRyYW5zaXRpb246IDJzO1xuICBvcGFjaXR5OiAwO1xufVxuXG4uaW5nYW1lSGVhZGVyQ29uIHtcbiAgaGVpZ2h0OiBtaW4oNDBweCwgNXZ3KTtcbiAgbWFyZ2luLXRvcDogM3ZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5pbmdhbWVIZWFkZXIge1xuICBhbmltYXRpb246IG1vdmUgM3MgY3ViaWMtYmV6aWVyKDAuMTMsIDAuNjUsIDAuNDYsIDEuNTcpIGluZmluaXRlIGFsdGVybmF0ZTtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBmb250LXNpemU6IG1pbig0MHB4LCA1dncpO1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5lbmVteUdhbWVib2FyZENvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDN2aDtcbn1cblxuLmVuZW15R2FtZWJvYXJkSGVhZGVyIHtcbiAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgZm9udC1zaXplOiBtaW4oMzBweCwgNnZ3KTtcbiAgbWFyZ2luLXRvcDogMnZoO1xuICB0cmFuc2l0aW9uOiAycztcbiAgb3BhY2l0eTogMDtcbn1cblxuLmVuZW15R2FtZWJvYXJkIHtcbiAgaGVpZ2h0OiAzNXZoO1xuICB3aWR0aDogMzV2aDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xuICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gIHRyYW5zaXRpb246IDJzO1xuICBvcGFjaXR5OiAwO1xufVxuXG5Aa2V5ZnJhbWVzIGdhbWVib2FyZFdhdmUge1xuICAwJSB7XG4gICAgYm90dG9tOiAzNXZoO1xuICB9XG4gIDgwJSB7XG4gICAgYm90dG9tOiAzOHZoO1xuICB9XG4gIDEwMCUge1xuICAgIGJvdHRvbTogMzguMnZoO1xuICB9XG59XG5cbi5zZWFXYXZlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDQwdmg7XG4gIGhlaWdodDogMTB2aDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDE4MGZmO1xuICBhbmltYXRpb246IGdhbWVib2FyZFdhdmUgMi41cyBlYXNlLWluLW91dCBpbmZpbml0ZSBhbHRlcm5hdGU7XG4gIHRyYW5zaXRpb246IDJzO1xuICBvcGFjaXR5OiAwO1xufVxuXG4uZnJpZW5kbHlCb2FyZGNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBoZWlnaHQ6IDQydmg7XG4gIHdpZHRoOiAxMDB2dztcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAxODBmZjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdHJhbnNpdGlvbjogMnM7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi5mcmllbmRseUJvYXJkSGVhZGVyIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IG1pbigzMHB4LCA2dncpO1xuICBtYXJnaW4tYm90dG9tOiAxdmg7XG4gIHRyYW5zaXRpb246IDJzO1xuICBvcGFjaXR5OiAwO1xufVxuXG4uZnJpZW5kbHlCb2FyZCB7XG4gIGhlaWdodDogMzV2aDtcbiAgd2lkdGg6IDM1dmg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcbiAgYm9yZGVyOiAycHggc29saWQgcmdiKDI1NSwgMjU1LCAyNTUpO1xuICB0cmFuc2l0aW9uOiAycztcbiAgb3BhY2l0eTogMDtcbn1cblxuLmVuZW15R3JpZFNsb3Qge1xuICBib3JkZXI6IHNvbGlkIDJweCB3aGl0ZTtcbn1cblxuLmVuZW15R3JpZFNsb3RNaXNzZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWQ2OGU0O1xufVxuXG4uZW5lbXlHcmlkU2xvdFVuYXR0YWNrZWQge1xuICB0cmFuc2l0aW9uOiAwLjNzO1xufVxuXG4uZW5lbXlHcmlkU2xvdFVuYXR0YWNrZWQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODA4NWJiO1xufVxuXG4uZnJpZW5kbHlHcmlkU2xvdFNoaXAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjUsIDY1LCA2NSk7XG59XG5cbi5lbmVteUdyaWRTbG90SGl0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMDAwMDtcbn1cblxuLndpblNjcmVlblBsYXllciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMTgwZmY7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDB2dztcbiAgYm90dG9tOiAtMTAwdmg7XG4gIHRyYW5zaXRpb246IDRzIGVhc2UtaW4tb3V0O1xuICB6LWluZGV4OiAxO1xufVxuXG4ud2luU2NyZWVuVGV4dCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiA3MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi53aW5TY3JlZW5BSSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDBmYjc7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDB2dztcbiAgdG9wOiAtMTAwdmg7XG4gIHRyYW5zaXRpb246IDRzIGVhc2UtaW4tb3V0O1xufVxuXG4vKiBQbGFjZW1lbnQgc3R5bGVzKi9cbi5wbGFjZW1lbnRDb24ge1xuICB3aWR0aDogMzAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMTgwZmY7XG4gIHRyYW5zaXRpb246IDZzIGVhc2Utb3V0O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHJpZ2h0OiAtMzAwdnc7XG59XG5cbkBrZXlmcmFtZXMgcGxhY2VtZW50SGVhZGVyV2F2ZSB7XG4gIDAlIHtcbiAgICBib3R0b206IC0ydmg7XG4gIH1cbiAgMTAwJSB7XG4gICAgYm90dG9tOiAwdmg7XG4gIH1cbn1cblxuLmdyaWRQbGFjZW1lbnRTbG90IHtcbiAgYm9yZGVyOiAycHggd2hpdGUgc29saWQ7XG59XG5cbi5wbGFjZW1lbnRCb2FyZCB7XG4gIGhlaWdodDogMzV2aDtcbiAgd2lkdGg6IDM1dmg7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5kcmFnQW5kRHJvcENvbiB7XG4gIGhlaWdodDogNzB2aDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGdhcDogNDBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5wbGFjZW1lbnRTaGlwc0NvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGdhcDogMTBweDtcbiAgd2lkdGg6IDMydmg7XG4gIGhlaWdodDogMzJ2aDtcbn1cblxuLnBsYWNlbWVudFNoaXBFbCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGJvcmRlcjogc29saWQgMnB4IHdoaXRlO1xuICB3aWR0aDogMy41dmg7XG59XG5cbi5zaGlwRHJhZ0NvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ucGxhY2VtZW50Um90YXRlQnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDY1LCA2NSwgNjUpO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5wbGFjZW1lbnRTZWxlY3RlZFNoaXBFbCB7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCB3aGl0ZTtcbn1cblxuLnBsYWNlbWVudEhvdmVyZWRTbG90IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdiN2I3Yjtcbn1cblxuLnBsYWNlbWVudEhvdmVyZWRTbG90T3V0T2ZSYW5nZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjNTU4NTg7XG59XG5cbi5wbGFjZW1lbnRMb3dlckJ0bkNvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgd2lkdGg6IG1pbig2NXZ3LCA3MDBweCk7XG59XG5cbi5wbGFjZW1lbnRSZXNldEJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjNTU4NTg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnBsYWNlbWVudE5leHRCdG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTY1OTlkO1xuICBjb2xvcjogIzAxODBmZjtcbn1cbi5wbGFjZW1lbnROZXh0QnRuOmhvdmVyIHtcbiAgc2NhbGU6IDE7XG59XG5cbi5wbGFjZW1lbnROZXh0QnRuUmVhZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDVjNmE5O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5wbGFjZW1lbnROZXh0QnRuUmVhZHk6aG92ZXIge1xuICBzY2FsZTogMS4wNTtcbn1cblxuLnBsYWNlbWVudEhlYWRlciB7XG4gIGFuaW1hdGlvbjogcGxhY2VtZW50SGVhZGVyV2F2ZSAzcyBlYXNlLWluLW91dCBpbmZpbml0ZSBhbHRlcm5hdGU7XG59XG5cbi5wbGFjZW1lbnRIZWFkZXJDb24ge1xuICBoZWlnaHQ6IGF1dG87XG4gIHdpZHRoOiA5MHZ3O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAzdmg7XG4gIG1hcmdpbi10b3A6IGNhbGMoMXZoKTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xuICAucGxhY2VtZW50TG93ZXJCdG5Db24ge1xuICAgIG1hcmdpbi10b3A6IDcwcHg7XG4gIH1cbn1cblxuLmdldE5hbWVDb250ZW50Q29uIHtcbiAgdHJhbnNpdGlvbjogNHM7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi5nZXROYW1lSW5wdXRDb25Db24ge1xuICBtYXJnaW4tdG9wOiAzMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHdpZHRoOiBtaW4oOTB2dywgNjAwcHgpO1xufVxuXG4uZ2V0TmFtZUlucHV0Q29uIHtcbiAgZ2FwOiA1cHg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuXG4uZ2V0TmFtZUlucHV0IHtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LWZhbWlseTogXCJteUZvbnRcIjtcbiAgZm9udC1zaXplOiAzMHB4O1xuICB3aWR0aDogbWluKDIzMHB4LCA0MHZ3KTtcbn1cblxuLmdldE5hbWVJbnB1dExhYmVsIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5nZXROYW1lTmV4dEJ0biB7XG4gIG1hcmdpbi10b3A6IDIwdmg7XG4gIGNvbG9yOiAjMDAwZmI3O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwNjQ3O1xuICBoZWlnaHQ6IG1pbig3MHB4LCAxNXZ3KTtcbiAgd2lkdGg6IG1pbigyMDBweCwgNDV2dyk7XG59XG5cbi5nZXROYW1lTmV4dEJ0bjpob3ZlciB7XG4gIHNjYWxlOiAxO1xufVxuXG4uZ2V0TmFtZU5leHRCdG5SZWFkeSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA1YzZhOTtcbn1cblxuLnBhc3NEZXZpY2VDb24ge1xuICBwYWRkaW5nLXRvcDogMTV2aDtcbiAgaGVpZ2h0OiA4NXZoO1xuICB3aWR0aDogMTAwdnc7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwOTcyO1xuICB0cmFuc2l0aW9uOiAycyBlYXNlLWluLW91dDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBnYXA6IG1pbigydmgsIDEwMHB4KTtcbn1cblxuLnBhc3NTY3JlZW5IZWFkZXIge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogbWluKDQwcHgsIDd2dyk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDkwdnc7XG59XG5cbi5wYXNzRGV2aWNlSW1hZ2Uge1xuICB3aWR0aDogbWluKDYwMHB4LCAxMDB2dyk7XG59XG5cbi5wYXNzRGV2aWNlQ29udGludWVUZXh0IHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IG1pbigyMHB4LCA0dncpO1xuICBtYXJnaW4tdG9wOiAzMHZoO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UscUJBQXFCO0VBQ3JCLDRDQUFxQztBQUN2Qzs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gscUJBQXFCO0FBQ3ZCOztBQUVBO0VB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Zm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTXlGb250XFxcIjtcXG4gIHNyYzogdXJsKFxcXCIuL0JsYWNrT3BzT25lLVJlZ3VsYXIudHRmXFxcIik7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMGZiNztcXG4gIG1hcmdpbjogMHB4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNeUZvbnRcXFwiO1xcbn1cXG5cXG4uaGlkZSB7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbi5idG4ge1xcbiAgaGVpZ2h0OiBtaW4oNzBweCwgMTB2dyk7XFxuICB3aWR0aDogbWluKDIwMHB4LCAzMHZ3KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IG1pbigzMHB4LCA2dncpO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNeUZvbnRcXFwiO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgdHJhbnNpdGlvbjogMC4zcztcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4uYnRuOmhvdmVyIHtcXG4gIHNjYWxlOiAxLjA1O1xcbn1cXG5cXG4vKiBMb2FkaW5nc2NyZWVuIHN0eWxlcyAqL1xcblxcbi5jb250ZW50Q29uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmxvYWRpbmdzY3JlZW5IZWFkZXJDb24ge1xcbiAgaGVpZ2h0OiBtaW4oODVweCwgOXZ3KTtcXG4gIG1hcmdpbi10b3A6IDEwdmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDgwJTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRyYW5zaXRpb246IDRzO1xcbn1cXG5cXG4ubG9hZGluZ3NjcmVlbkhlYWRlciB7XFxuICBmb250LXNpemU6IG1pbigxMHZ3LCA5MHB4KTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJvdHRvbTogLTYwcHg7XFxuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTMsIDAuNjUsIDAuNDYsIDEuNTcpO1xcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNHM7XFxufVxcblxcbkBrZXlmcmFtZXMgbW92ZSB7XFxuICAwJSB7XFxuICAgIGJvdHRvbTogLTEwcHg7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgYm90dG9tOiAtMXB4O1xcbiAgfVxcbn1cXG5cXG4ubG9hZGluZ3NjcmVlbkJ0bkNvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiAyMHZoO1xcbiAgZ2FwOiBtaW4oNXZ3LCA1MHB4KTtcXG4gIHdpZHRoOiBtaW4oODB2dywgNjAwcHgpO1xcbiAgdHJhbnNpdGlvbjogNHM7XFxufVxcblxcbi5sb2FkaW5nc2NyZWVuU3RhcnRCdG4ge1xcbiAgaGVpZ2h0OiBtaW4oNzBweCwgMTV2dyk7XFxuICB3aWR0aDogbWluKDIwMHB4LCA0NXZ3KTtcXG4gIGZvbnQtc2l6ZTogbWluKDI1cHgsIDZ2dyk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDE4MGZmO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNeWZvbnRcXFwiO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ubG9hZGluZ3NjcmVlblN0YXJ0QnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTEsIDE5MSwgMTkxKTtcXG59XFxuXFxuLmF1ZGlvQnRuIHtcXG4gIG1hcmdpbi10b3A6IDV2aDtcXG4gIHRyYW5zaXRpb246IDRzO1xcbn1cXG5cXG4uYXVkaW9JY29uSW1hZ2Uge1xcbiAgaGVpZ2h0OiBtaW4oNnZ3LCA1MHB4KTtcXG4gIHdpZHRoOiBtaW4oNnZ3LCA1MHB4KTtcXG59XFxuXFxuLyogTG9hZGluZ3NjcmVlbiBzdHlsZXMgRU5EICovXFxuXFxuLyogSW5nYW1lIHN0eWxlcyovXFxuLkFJR2FtZUhlYWRlckNvbiB7XFxuICB0cmFuc2l0aW9uOiAycztcXG4gIG9wYWNpdHk6IDA7XFxufVxcblxcbi5pbmdhbWVIZWFkZXJDb24ge1xcbiAgaGVpZ2h0OiBtaW4oNDBweCwgNXZ3KTtcXG4gIG1hcmdpbi10b3A6IDN2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbi5pbmdhbWVIZWFkZXIge1xcbiAgYW5pbWF0aW9uOiBtb3ZlIDNzIGN1YmljLWJlemllcigwLjEzLCAwLjY1LCAwLjQ2LCAxLjU3KSBpbmZpbml0ZSBhbHRlcm5hdGU7XFxuICBtYXJnaW4tdG9wOiAwcHg7XFxuICBmb250LXNpemU6IG1pbig0MHB4LCA1dncpO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG4uZW5lbXlHYW1lYm9hcmRDb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogM3ZoO1xcbn1cXG5cXG4uZW5lbXlHYW1lYm9hcmRIZWFkZXIge1xcbiAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gIGZvbnQtc2l6ZTogbWluKDMwcHgsIDZ2dyk7XFxuICBtYXJnaW4tdG9wOiAydmg7XFxuICB0cmFuc2l0aW9uOiAycztcXG4gIG9wYWNpdHk6IDA7XFxufVxcblxcbi5lbmVteUdhbWVib2FyZCB7XFxuICBoZWlnaHQ6IDM1dmg7XFxuICB3aWR0aDogMzV2aDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbiAgYm9yZGVyOiAycHggc29saWQgcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgdHJhbnNpdGlvbjogMnM7XFxuICBvcGFjaXR5OiAwO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGdhbWVib2FyZFdhdmUge1xcbiAgMCUge1xcbiAgICBib3R0b206IDM1dmg7XFxuICB9XFxuICA4MCUge1xcbiAgICBib3R0b206IDM4dmg7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgYm90dG9tOiAzOC4ydmg7XFxuICB9XFxufVxcblxcbi5zZWFXYXZlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogNDB2aDtcXG4gIGhlaWdodDogMTB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMTgwZmY7XFxuICBhbmltYXRpb246IGdhbWVib2FyZFdhdmUgMi41cyBlYXNlLWluLW91dCBpbmZpbml0ZSBhbHRlcm5hdGU7XFxuICB0cmFuc2l0aW9uOiAycztcXG4gIG9wYWNpdHk6IDA7XFxufVxcblxcbi5mcmllbmRseUJvYXJkY29uIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMDtcXG4gIGhlaWdodDogNDJ2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMTgwZmY7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB0cmFuc2l0aW9uOiAycztcXG4gIG9wYWNpdHk6IDA7XFxufVxcblxcbi5mcmllbmRseUJvYXJkSGVhZGVyIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogbWluKDMwcHgsIDZ2dyk7XFxuICBtYXJnaW4tYm90dG9tOiAxdmg7XFxuICB0cmFuc2l0aW9uOiAycztcXG4gIG9wYWNpdHk6IDA7XFxufVxcblxcbi5mcmllbmRseUJvYXJkIHtcXG4gIGhlaWdodDogMzV2aDtcXG4gIHdpZHRoOiAzNXZoO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICB0cmFuc2l0aW9uOiAycztcXG4gIG9wYWNpdHk6IDA7XFxufVxcblxcbi5lbmVteUdyaWRTbG90IHtcXG4gIGJvcmRlcjogc29saWQgMnB4IHdoaXRlO1xcbn1cXG5cXG4uZW5lbXlHcmlkU2xvdE1pc3NlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWQ2OGU0O1xcbn1cXG5cXG4uZW5lbXlHcmlkU2xvdFVuYXR0YWNrZWQge1xcbiAgdHJhbnNpdGlvbjogMC4zcztcXG59XFxuXFxuLmVuZW15R3JpZFNsb3RVbmF0dGFja2VkOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM4MDg1YmI7XFxufVxcblxcbi5mcmllbmRseUdyaWRTbG90U2hpcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjUsIDY1LCA2NSk7XFxufVxcblxcbi5lbmVteUdyaWRTbG90SGl0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjAwMDA7XFxufVxcblxcbi53aW5TY3JlZW5QbGF5ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAxODBmZjtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgYm90dG9tOiAtMTAwdmg7XFxuICB0cmFuc2l0aW9uOiA0cyBlYXNlLWluLW91dDtcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbi53aW5TY3JlZW5UZXh0IHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogNzBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLndpblNjcmVlbkFJIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDBmYjc7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB6LWluZGV4OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxuICB0b3A6IC0xMDB2aDtcXG4gIHRyYW5zaXRpb246IDRzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4vKiBQbGFjZW1lbnQgc3R5bGVzKi9cXG4ucGxhY2VtZW50Q29uIHtcXG4gIHdpZHRoOiAzMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDE4MGZmO1xcbiAgdHJhbnNpdGlvbjogNnMgZWFzZS1vdXQ7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICByaWdodDogLTMwMHZ3O1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHBsYWNlbWVudEhlYWRlcldhdmUge1xcbiAgMCUge1xcbiAgICBib3R0b206IC0ydmg7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgYm90dG9tOiAwdmg7XFxuICB9XFxufVxcblxcbi5ncmlkUGxhY2VtZW50U2xvdCB7XFxuICBib3JkZXI6IDJweCB3aGl0ZSBzb2xpZDtcXG59XFxuXFxuLnBsYWNlbWVudEJvYXJkIHtcXG4gIGhlaWdodDogMzV2aDtcXG4gIHdpZHRoOiAzNXZoO1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuLmRyYWdBbmREcm9wQ29uIHtcXG4gIGhlaWdodDogNzB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgZ2FwOiA0MHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ucGxhY2VtZW50U2hpcHNDb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBnYXA6IDEwcHg7XFxuICB3aWR0aDogMzJ2aDtcXG4gIGhlaWdodDogMzJ2aDtcXG59XFxuXFxuLnBsYWNlbWVudFNoaXBFbCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgYm9yZGVyOiBzb2xpZCAycHggd2hpdGU7XFxuICB3aWR0aDogMy41dmg7XFxufVxcblxcbi5zaGlwRHJhZ0NvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnBsYWNlbWVudFJvdGF0ZUJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjUsIDY1LCA2NSk7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5wbGFjZW1lbnRTZWxlY3RlZFNoaXBFbCB7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggd2hpdGU7XFxufVxcblxcbi5wbGFjZW1lbnRIb3ZlcmVkU2xvdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2I3YjdiO1xcbn1cXG5cXG4ucGxhY2VtZW50SG92ZXJlZFNsb3RPdXRPZlJhbmdlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjNTU4NTg7XFxufVxcblxcbi5wbGFjZW1lbnRMb3dlckJ0bkNvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHdpZHRoOiBtaW4oNjV2dywgNzAwcHgpO1xcbn1cXG5cXG4ucGxhY2VtZW50UmVzZXRCdG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M1NTg1ODtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnBsYWNlbWVudE5leHRCdG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE2NTk5ZDtcXG4gIGNvbG9yOiAjMDE4MGZmO1xcbn1cXG4ucGxhY2VtZW50TmV4dEJ0bjpob3ZlciB7XFxuICBzY2FsZTogMTtcXG59XFxuXFxuLnBsYWNlbWVudE5leHRCdG5SZWFkeSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDVjNmE5O1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ucGxhY2VtZW50TmV4dEJ0blJlYWR5OmhvdmVyIHtcXG4gIHNjYWxlOiAxLjA1O1xcbn1cXG5cXG4ucGxhY2VtZW50SGVhZGVyIHtcXG4gIGFuaW1hdGlvbjogcGxhY2VtZW50SGVhZGVyV2F2ZSAzcyBlYXNlLWluLW91dCBpbmZpbml0ZSBhbHRlcm5hdGU7XFxufVxcblxcbi5wbGFjZW1lbnRIZWFkZXJDb24ge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgd2lkdGg6IDkwdnc7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiAzdmg7XFxuICBtYXJnaW4tdG9wOiBjYWxjKDF2aCk7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcXG4gIC5wbGFjZW1lbnRMb3dlckJ0bkNvbiB7XFxuICAgIG1hcmdpbi10b3A6IDcwcHg7XFxuICB9XFxufVxcblxcbi5nZXROYW1lQ29udGVudENvbiB7XFxuICB0cmFuc2l0aW9uOiA0cztcXG4gIG9wYWNpdHk6IDA7XFxufVxcblxcbi5nZXROYW1lSW5wdXRDb25Db24ge1xcbiAgbWFyZ2luLXRvcDogMzB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgd2lkdGg6IG1pbig5MHZ3LCA2MDBweCk7XFxufVxcblxcbi5nZXROYW1lSW5wdXRDb24ge1xcbiAgZ2FwOiA1cHg7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG59XFxuXFxuLmdldE5hbWVJbnB1dCB7XFxuICBjb2xvcjogYmxhY2s7XFxuICBmb250LWZhbWlseTogXFxcIm15Rm9udFxcXCI7XFxuICBmb250LXNpemU6IDMwcHg7XFxuICB3aWR0aDogbWluKDIzMHB4LCA0MHZ3KTtcXG59XFxuXFxuLmdldE5hbWVJbnB1dExhYmVsIHtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmdldE5hbWVOZXh0QnRuIHtcXG4gIG1hcmdpbi10b3A6IDIwdmg7XFxuICBjb2xvcjogIzAwMGZiNztcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA2NDc7XFxuICBoZWlnaHQ6IG1pbig3MHB4LCAxNXZ3KTtcXG4gIHdpZHRoOiBtaW4oMjAwcHgsIDQ1dncpO1xcbn1cXG5cXG4uZ2V0TmFtZU5leHRCdG46aG92ZXIge1xcbiAgc2NhbGU6IDE7XFxufVxcblxcbi5nZXROYW1lTmV4dEJ0blJlYWR5IHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwNWM2YTk7XFxufVxcblxcbi5wYXNzRGV2aWNlQ29uIHtcXG4gIHBhZGRpbmctdG9wOiAxNXZoO1xcbiAgaGVpZ2h0OiA4NXZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwOTcyO1xcbiAgdHJhbnNpdGlvbjogMnMgZWFzZS1pbi1vdXQ7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBnYXA6IG1pbigydmgsIDEwMHB4KTtcXG59XFxuXFxuLnBhc3NTY3JlZW5IZWFkZXIge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiBtaW4oNDBweCwgN3Z3KTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdpZHRoOiA5MHZ3O1xcbn1cXG5cXG4ucGFzc0RldmljZUltYWdlIHtcXG4gIHdpZHRoOiBtaW4oNjAwcHgsIDEwMHZ3KTtcXG59XFxuXFxuLnBhc3NEZXZpY2VDb250aW51ZVRleHQge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiBtaW4oMjBweCwgNHZ3KTtcXG4gIG1hcmdpbi10b3A6IDMwdmg7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHNoaXAgZnJvbSBcIi4vc2hpcHNcIjtcblxuY2xhc3MgZ2FtZWJvYXJkIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5taXNzZWQgPSBbXTtcbiAgICB0aGlzLmhpdHMgPSBbXTtcbiAgICB0aGlzLnNoaXBzID0gW107XG4gIH1cblxuICBwbGFjZVNoaXBzKGFyeSkge1xuICAgIGFyeS5mb3JFYWNoKChuZXdBcnkpID0+IHtcbiAgICAgIGNvbnN0IG5ld1NoaXAgPSBuZXcgc2hpcChuZXdBcnkpO1xuICAgICAgdGhpcy5zaGlwcy5wdXNoKG5ld1NoaXApO1xuICAgIH0pO1xuICB9XG5cbiAgc2hpcHNTYWlsaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnNoaXBzLnJlZHVjZShcbiAgICAgIChjb3VudCwgc2hpcEVsKSA9PiAoc2hpcEVsLmlzU3VuaygpID09IGZhbHNlID8gY291bnQgKyAxIDogY291bnQpLFxuICAgICAgMFxuICAgICk7XG4gIH1cblxuICByZWNpZXZlQXR0YWNrKFt4LCB5XSkge1xuICAgIC8vIEZpcnN0IHdlIGNvbXBhcmUgY29vcmRpbmF0ZXMgc28gd2UgZG9udCBoaXQgdGhlIHNhbWUgc3BvdCB0d2ljZVxuICAgIGlmIChcbiAgICAgIHRoaXMubWlzc2VkLnJlZHVjZShcbiAgICAgICAgKHN0YXRlLCBjdXIpID0+XG4gICAgICAgICAgY3VyWzBdID09IHggJiYgY3VyWzFdID09IHkgPyAoc3RhdGUgPSBmYWxzZSkgOiAoc3RhdGUgPSB0cnVlKSxcbiAgICAgICAgdHJ1ZVxuICAgICAgKSA9PSB0cnVlICYmXG4gICAgICB0aGlzLmhpdHMucmVkdWNlKFxuICAgICAgICAoc3RhdGUsIGN1cikgPT5cbiAgICAgICAgICBjdXJbMF0gPT0geCAmJiBjdXJbMV0gPT0geSA/IChzdGF0ZSA9IGZhbHNlKSA6IChzdGF0ZSA9IHRydWUpLFxuICAgICAgICB0cnVlXG4gICAgICApID09IHRydWVcbiAgICApIHtcbiAgICAgIC8vIFdlIGNoZWNrIGlmIGEgc2hpcCBoYXMgYmVlbiBoaXRcbiAgICAgIGxldCBpc0hpdCA9IHRoaXMuc2hpcHMucmVkdWNlKChpc0hpdDEsIHBsYWNlZFNoaXApID0+IHtcbiAgICAgICAgbGV0IHZhbCA9IHBsYWNlZFNoaXAuY29vci5yZWR1Y2UoKHN0YXRlLCBjb29yZGluYXRlKSA9PiB7XG4gICAgICAgICAgaWYgKGNvb3JkaW5hdGVbMF0gPT0geCAmJiBjb29yZGluYXRlWzFdID09IHkpIHtcbiAgICAgICAgICAgIC8vIFdlIGhhdmUgYSBoaXRcbiAgICAgICAgICAgIHBsYWNlZFNoaXAuaGl0KCk7XG4gICAgICAgICAgICB0aGlzLmhpdHMucHVzaChbeCwgeV0pO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIGZhbHNlKTtcbiAgICAgICAgaWYgKHZhbCA9PSB0cnVlKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGlzSGl0MTtcbiAgICAgICAgfVxuICAgICAgfSwgZmFsc2UpO1xuICAgICAgaWYgKGlzSGl0ID09IGZhbHNlKSB0aGlzLm1pc3NlZC5wdXNoKFt4LCB5XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFdlIGhpdCB0aGUgc2FtZSBzcG90XG4gICAgICAvLyBUcm93IGVycm9yXG4gICAgfVxuICB9XG5cbiAgYWxsU3VuayA9ICgpID0+ICh0aGlzLnNoaXBzU2FpbGluZygpID09IDAgPyB0cnVlIDogZmFsc2UpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBnYW1lYm9hcmQ7XG4iLCJpbXBvcnQgZ2FtZWJvYXJkIGZyb20gXCIuL2dhbWVib2FyZFwiO1xuXG5jbGFzcyBwbGF5ZXIge1xuICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmJvYXJkID0gbmV3IGdhbWVib2FyZCgpO1xuICB9XG59XG5cbmNsYXNzIEFJIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5uYW1lID0gXCJBSVwiO1xuICAgIHRoaXMuYm9hcmQgPSBuZXcgZ2FtZWJvYXJkKCk7XG4gICAgdGhpcy5hdHRhY2tMb2cgPSBbXTtcbiAgfVxuICBhdHRhY2soKSB7XG4gICAgbGV0IHggPSBNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICBsZXQgeSA9IE1hdGguY2VpbChNYXRoLnJhbmRvbSgpICogMTApO1xuXG4gICAgbGV0IGhhc0F0dGFja2VkID0gdGhpcy5hdHRhY2tMb2cucmVkdWNlKChzdGF0ZSwgY29vcikgPT4ge1xuICAgICAgaWYgKGNvb3JbMF0gPT0geCAmJiBjb29yWzFdID09IHkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICB9XG4gICAgfSwgZmFsc2UpO1xuXG4gICAgaWYgKGhhc0F0dGFja2VkID09IHRydWUpIHtcbiAgICAgIHJldHVybiB0aGlzLmF0dGFjaygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmF0dGFja0xvZy5wdXNoKFt4LCB5XSk7XG4gICAgICByZXR1cm4gW3gsIHldO1xuICAgIH1cbiAgfVxuICBwbGFjZVNoaXBzKCkge1xuICAgIGxldCBzaGlwQXJ5ID0gW107XG5cbiAgICBjb25zdCBjYWxjQ29vciA9IChzaGlwTGVuZ3RoKSA9PiB7XG4gICAgICBsZXQgeCA9IE1hdGguY2VpbChNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgbGV0IHkgPSBNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSAqIDEwKTtcblxuICAgICAgbGV0IHNoaXBDb29yQXJ5ID0gW1t4LCB5XV07XG5cbiAgICAgIGlmIChNYXRoLnJhbmRvbSgpIDwgMC41KSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgc2hpcExlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKHggKyBzaGlwTGVuZ3RoIDw9IDEwKSB7XG4gICAgICAgICAgICBzaGlwQ29vckFyeS5wdXNoKFt4ICsgaSwgeV0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzaGlwQ29vckFyeS5wdXNoKFt4IC0gaSwgeV0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBzaGlwTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAoeSArIHNoaXBMZW5ndGggPD0gMTApIHtcbiAgICAgICAgICAgIHNoaXBDb29yQXJ5LnB1c2goW3gsIHkgKyBpXSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNoaXBDb29yQXJ5LnB1c2goW3gsIHkgLSBpXSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldCBoYXNEdWIgPSAoYXJyKSA9PiBhcnIubGVuZ3RoICE9PSBuZXcgU2V0KGFycikuc2l6ZTtcblxuICAgICAgbGV0IHNoaXBDb29yVGVzdEFyeSA9IFtdO1xuXG4gICAgICBzaGlwQXJ5LmZvckVhY2goKHNoaXBFbENvb3IpID0+IHtcbiAgICAgICAgc2hpcEVsQ29vci5mb3JFYWNoKChjb29yU2V0KSA9PiB7XG4gICAgICAgICAgc2hpcENvb3JUZXN0QXJ5LnB1c2goY29vclNldFswXS50b1N0cmluZygpICsgY29vclNldFsxXS50b1N0cmluZygpKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgICAgc2hpcENvb3JBcnkuZm9yRWFjaCgoY29vclNldCkgPT4ge1xuICAgICAgICBzaGlwQ29vclRlc3RBcnkucHVzaChjb29yU2V0WzBdLnRvU3RyaW5nKCkgKyBjb29yU2V0WzFdLnRvU3RyaW5nKCkpO1xuICAgICAgfSk7XG5cbiAgICAgIGlmIChoYXNEdWIoc2hpcENvb3JUZXN0QXJ5KSA9PSB0cnVlKSB7XG4gICAgICAgIHJldHVybiBjYWxjQ29vcihzaGlwTGVuZ3RoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBzaGlwQ29vckFyeTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgc2hpcEFyeS5wdXNoKGNhbGNDb29yKDIpKTtcbiAgICBzaGlwQXJ5LnB1c2goY2FsY0Nvb3IoMykpO1xuICAgIHNoaXBBcnkucHVzaChjYWxjQ29vcigzKSk7XG4gICAgc2hpcEFyeS5wdXNoKGNhbGNDb29yKDQpKTtcbiAgICBzaGlwQXJ5LnB1c2goY2FsY0Nvb3IoNCkpO1xuICAgIHNoaXBBcnkucHVzaChjYWxjQ29vcig1KSk7XG5cbiAgICB0aGlzLmJvYXJkLnBsYWNlU2hpcHMoc2hpcEFyeSk7XG4gIH1cbn1cblxuY29uc3QgbmV3QUkgPSBuZXcgQUkoKTtcbm5ld0FJLnBsYWNlU2hpcHMoKTtcblxuZXhwb3J0IHsgcGxheWVyLCBBSSB9O1xuIiwiY2xhc3Mgc2hpcCB7XG4gIGNvbnN0cnVjdG9yKGFyeSkge1xuICAgIHRoaXMubGVuZ3RoID0gYXJ5Lmxlbmd0aDtcbiAgICB0aGlzLmNvb3IgPSBhcnk7XG4gICAgdGhpcy5oaXRzID0gMDtcbiAgfVxuICBoaXQoKSB7XG4gICAgdGhpcy5oaXRzKys7XG4gIH1cbiAgaXNTdW5rID0gKCkgPT4gKHRoaXMuaGl0cyA9PSB0aGlzLmxlbmd0aCA/IHRydWUgOiBmYWxzZSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHNoaXA7XG4iLCJpbXBvcnQgeyBsb2FkaW5nU2NyZWVuLCB0d29QbGF5ZXIgfSBmcm9tIFwiLi9nYW1lbG9vcFwiO1xuXG4vLyBjb25zdCBuZXdHYW1lID0gbmV3IHR3b1BsYXllcihcIk1BUktcIiwgXCJBTkRSRUFTXCIpO1xuLy8gbmV3R2FtZS5wYXNzU2NyZWVuRE9NKG5ld0dhbWUucGxheWVyMSk7XG5cbmxvYWRpbmdTY3JlZW4oKTtcbiIsImltcG9ydCB7IHBsYXllciwgQUkgfSBmcm9tIFwiLi9hcHAvcGxheWVyXCI7XG5pbXBvcnQgYmF0dGxlTXVzaWNTcmMgZnJvbSBcIi4vQXVkaW8vYmF0dGxlLW9mLXRoZS1kcmFnb25zLTgwMzcubXAzXCI7XG5pbXBvcnQgY2xpY2tTb3VuZFNyYyBmcm9tIFwiLi9BdWRpby9jb21wdXRlci1wcm9jZXNzaW5nLXNvdW5kLWVmZmVjdHMtc2hvcnQtY2xpY2stc2VsZWN0LTAxLTEyMjEzNC5tcDNcIjtcblxuaW1wb3J0IGF1ZGlvT25JbWFnZVNyYyBmcm9tIFwiLi9pbWFnZXMvYXVkaW9Pbkljb25TcmMucG5nXCI7XG5pbXBvcnQgYXVkaW9PZmZJbWFnZVNyYyBmcm9tIFwiLi9pbWFnZXMvYXVkaW9PZmZJY29uU3JjLnBuZ1wiO1xuaW1wb3J0IHNoaXAgZnJvbSBcIi4vYXBwL3NoaXBzXCI7XG5cbi8vIEltZ1xuaW1wb3J0IHBhc3NEZXZpY2VJbWFnZVNyYyBmcm9tIFwiLi9pbWFnZXMvcGFzc0RldmljZVNyYy5wbmdcIjtcbmltcG9ydCBzZXR0aW5nSWNvblNyYyBmcm9tIFwiLi9pbWFnZXMvc2V0dGluZ0ljb25TcmMuc3ZnLmh0bWxcIjtcblxubGV0IGF1ZGlvT24gPSBmYWxzZTtcblxuY29uc3QgYmF0dGxlTXVzaWMgPSBuZXcgQXVkaW8oYmF0dGxlTXVzaWNTcmMpO1xuYmF0dGxlTXVzaWMudm9sdW1lID0gMC41O1xuXG5jb25zdCBjbGlja1NvdW5kID0gbmV3IEF1ZGlvKGNsaWNrU291bmRTcmMpO1xuXG5jb25zdCBsb2FkaW5nU2NyZWVuID0gKCkgPT4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoXCJjb250ZW50Q29uXCIpO1xuXG4gICAgLy8gQ3JlYXRpbmcgaGVhZGVyIGNvbnRhaW5lclxuICAgIGNvbnN0IGhlYWRlckNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaGVhZGVyQ29uLmNsYXNzTGlzdC5hZGQoXCJsb2FkaW5nc2NyZWVuSGVhZGVyQ29uXCIpO1xuXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJsb2FkaW5nc2NyZWVuSGVhZGVyXCIpO1xuICAgIGhlYWRlci50ZXh0Q29udGVudCA9IFwiQkFUVEVMU0hJUFNcIjtcblxuICAgIGhlYWRlckNvbi5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gICAgLy8gQ3JlYXRpbmcgYXVkaW8gYnRuXG4gICAgY29uc3QgYXVkaW9CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGF1ZGlvQnRuLmNsYXNzTGlzdC5hZGQoXCJhdWRpb0J0blwiKTtcblxuICAgIGNvbnN0IGF1ZGlvT25JbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIGF1ZGlvT25JbWFnZS5zcmMgPSBhdWRpb09uSW1hZ2VTcmM7XG4gICAgYXVkaW9PbkltYWdlLmNsYXNzTGlzdC5hZGQoXCJhdWRpb0ljb25JbWFnZVwiKTtcblxuICAgIGNvbnN0IGF1ZGlvT2ZmSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICBhdWRpb09mZkltYWdlLnNyYyA9IGF1ZGlvT2ZmSW1hZ2VTcmM7XG4gICAgYXVkaW9PZmZJbWFnZS5jbGFzc0xpc3QuYWRkKFwiYXVkaW9JY29uSW1hZ2VcIik7XG5cbiAgICBhdWRpb0J0bi5hcHBlbmRDaGlsZChhdWRpb09mZkltYWdlKTtcblxuICAgIGF1ZGlvQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBhdWRpb0J0bi5yZW1vdmVDaGlsZChhdWRpb0J0bi5sYXN0Q2hpbGQpO1xuICAgICAgaWYgKGF1ZGlvT24gPT0gZmFsc2UpIHtcbiAgICAgICAgLy8gSWYgYXVkaW8gb2YgdHVybiBpdCBvblxuICAgICAgICBhdWRpb0J0bi5hcHBlbmRDaGlsZChhdWRpb09uSW1hZ2UpO1xuICAgICAgICBhdWRpb09uID0gdHJ1ZTtcbiAgICAgICAgYmF0dGxlTXVzaWMucGxheSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gRWxzZSB0dXJuIGl0IG9mZlxuICAgICAgICBhdWRpb0J0bi5hcHBlbmRDaGlsZChhdWRpb09mZkltYWdlKTtcbiAgICAgICAgYXVkaW9PbiA9IGZhbHNlO1xuICAgICAgICBiYXR0bGVNdXNpYy5wYXVzZSgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gQ3JlYXRpbmcgYnRuc1xuICAgIGNvbnN0IGJ0bkNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYnRuQ29uLmNsYXNzTGlzdC5hZGQoXCJsb2FkaW5nc2NyZWVuQnRuQ29uXCIpO1xuXG4gICAgLy8gVG8gbWFrZSBzdXJlIGJ0biBpcyBub3QgYWN0aXZhdGVkIHR3aWNlXG4gICAgbGV0IGJ0bkNsaWNrZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHR3b1BsYXllckJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgdHdvUGxheWVyQnRuLmNsYXNzTGlzdC5hZGQoXCJsb2FkaW5nc2NyZWVuU3RhcnRCdG5cIiwgXCJidG5cIik7XG4gICAgdHdvUGxheWVyQnRuLnRleHRDb250ZW50ID0gXCIyIFBsYXllclwiO1xuXG4gICAgdHdvUGxheWVyQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAvLyBBZGRzIGNsaWNrU291bmRcbiAgICAgIGlmIChhdWRpb09uID09IHRydWUpIGNsaWNrU291bmQucGxheSgpO1xuXG4gICAgICAvLyBDaGVja3MgaWYgYSBidG4gYWxscmVhZHkgaGF2ZSBiZWVuIGNsaWNrZWRcbiAgICAgIGlmIChidG5DbGlja2VkID09IGZhbHNlKSB7XG4gICAgICAgIGJ0bkNsaWNrZWQgPSB0cnVlO1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgIC8vIEZhZGUgZXhpc3RpbmcgY29udGVudCBhd2F5XG4gICAgICAgICAgYXVkaW9CdG4uc3R5bGUub3BhY2l0eSA9IFwiMFwiO1xuICAgICAgICAgIGhlYWRlckNvbi5zdHlsZS5vcGFjaXR5ID0gXCIwXCI7XG4gICAgICAgICAgYnRuQ29uLnN0eWxlLm9wYWNpdHkgPSBcIjBcIjtcblxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgIH0sIDQwMDApO1xuICAgICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAvLyBSZW1vdmUgY29udGVudFxuICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoY29udGVudCk7XG5cbiAgICAgICAgICAvLyBBcHBlbmQgdGhlIG5ldyBjb250ZW50XG4gICAgICAgICAgY29uc3QgbmV3R2FtZSA9IG5ldyB0d29QbGF5ZXIoKTtcbiAgICAgICAgICBuZXdHYW1lLmdhbWVDeWNsZURPTSgpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IEFJQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBBSUJ0bi5jbGFzc0xpc3QuYWRkKFwibG9hZGluZ3NjcmVlblN0YXJ0QnRuXCIsIFwiYnRuXCIpO1xuICAgIEFJQnRuLnRleHRDb250ZW50ID0gXCJBZ2FpbnN0IEFJXCI7XG5cbiAgICBBSUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgLy8gQWRkcyBjbGljayBzb3VuZFxuICAgICAgaWYgKGF1ZGlvT24gPT0gdHJ1ZSkgY2xpY2tTb3VuZC5wbGF5KCk7XG5cbiAgICAgIC8vIENoZWNrcyBpZiBhIGJ0biBhbGxyZWFkeSBoYXZlIGJlZW4gY2xpY2tlZFxuICAgICAgaWYgKGJ0bkNsaWNrZWQgPT0gZmFsc2UpIHtcbiAgICAgICAgYnRuQ2xpY2tlZCA9IHRydWU7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgLy8gRmFkZSBleGlzdGluZyBjb250ZW50IGF3YXlcbiAgICAgICAgICBhdWRpb0J0bi5zdHlsZS5vcGFjaXR5ID0gXCIwXCI7XG4gICAgICAgICAgaGVhZGVyQ29uLnN0eWxlLm9wYWNpdHkgPSBcIjBcIjtcbiAgICAgICAgICBidG5Db24uc3R5bGUub3BhY2l0eSA9IFwiMFwiO1xuXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgfSwgNDAwMCk7XG4gICAgICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIC8vIFJlbW92ZSBjb250ZW50XG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChjb250ZW50KTtcblxuICAgICAgICAgIC8vIEFwcGVuZCB0aGUgbmV3IGNvbnRlbnRcbiAgICAgICAgICBjb25zdCBuZXdHYW1lID0gbmV3IHBsYXlBZ2FpbnN0QUkoKTtcbiAgICAgICAgICBuZXdHYW1lLmRpc3BsYXlHYW1lY3ljbGVET00oKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBidG5Db24uYXBwZW5kQ2hpbGQodHdvUGxheWVyQnRuKTtcbiAgICBidG5Db24uYXBwZW5kQ2hpbGQoQUlCdG4pO1xuXG4gICAgLy8gQXBwZW5kaW5nIGFsbFxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyQ29uKTtcblxuICAgIC8vIE1ha2UgdGhlbSByZWFkeSB0byBmYWRlIGluIG9uIGxvYWRcbiAgICBhdWRpb0J0bi5zdHlsZS5vcGFjaXR5ID0gXCIwXCI7XG4gICAgYnRuQ29uLnN0eWxlLm9wYWNpdHkgPSBcIjBcIjtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYXVkaW9CdG4pO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYnRuQ29uKTtcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGVudCk7XG5cbiAgICAvLyBBcHBlbmRpbmcgc2V0dGluZyBidG5cbiAgICBzZXR0aW5nc0RPTSgpO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAvLyBNYWtlIGhlYWRlciByaXNlIGVmZmVjdFxuICAgICAgaGVhZGVyLnN0eWxlLmJvdHRvbSA9IFwiLTEwcHhcIjtcbiAgICB9LCA1MDApO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAvLyBNYWtlIHRoZW0gZmFkZSBpblxuICAgICAgYXVkaW9CdG4uc3R5bGUub3BhY2l0eSA9IFwiMVwiO1xuICAgICAgYnRuQ29uLnN0eWxlLm9wYWNpdHkgPSBcIjFcIjtcbiAgICB9LCAyMjAwKTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgLy8gV2hlbiBoZWFkZXIgaGF2ZSByaXNlbiwgc3RhcnQgd2F2ZSBhbmltYXRpb25cbiAgICAgIGhlYWRlci5zdHlsZS5hbmltYXRpb24gPSBcIm1vdmUgM3MgZWFzZS1pbi1vdXQgaW5maW5pdGUgYWx0ZXJuYXRlXCI7XG4gICAgfSwgNDUwMCk7XG4gIH0pO1xufTtcblxuY2xhc3MgcGxheUFnYWluc3RBSSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMucGxheWVyID0gbmV3IHBsYXllcihcIlwiKTtcbiAgICB0aGlzLkFJID0gbmV3IEFJKCk7XG4gIH1cbiAgZGlzcGxheUdhbWVjeWNsZURPTSgpIHtcbiAgICAvLyBGaXJzdCBkaXNwbGF5IHBsYWNlbWVudCBwYWdlXG4gICAgcGxhY2VTaGlwc0RPTSh0aGlzLnBsYXllcikudGhlbigoKSA9PiB7XG4gICAgICAvLyBXaGVuIHBsYWNlbWVudCBpcyBkb25lIGRpc3BsYXkgZ2FtZVxuICAgICAgdGhpcy5kaXNwbGF5R2FtZURvbSgpO1xuICAgIH0pO1xuICB9XG4gIGRpc3BsYXlHYW1lRG9tKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgLy8gQ3JlYXRpbmcgYm9hcmRzXG4gICAgICB0aGlzLkFJLnBsYWNlU2hpcHMoKTtcblxuICAgICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoXCJjb250ZW50Q29uXCIsIFwiQUlHYW1lQ29uXCIpO1xuXG4gICAgICAvLyBDcmVhdGluZyBoZWFkZXJcbiAgICAgIGNvbnN0IGhlYWRlckNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBoZWFkZXJDb24uY2xhc3NMaXN0LmFkZChcbiAgICAgICAgXCJsb2FkaW5nc2NyZWVuSGVhZGVyQ29uXCIsXG4gICAgICAgIFwiaW5nYW1lSGVhZGVyQ29uXCIsXG4gICAgICAgIFwiQUlHYW1lSGVhZGVyQ29uXCJcbiAgICAgICk7XG5cbiAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJsb2FkaW5nc2NyZWVuSGVhZGVyXCIsIFwiaW5nYW1lSGVhZGVyXCIpO1xuICAgICAgaGVhZGVyLnRleHRDb250ZW50ID0gXCJCQVRURUxTSElQU1wiO1xuXG4gICAgICBoZWFkZXJDb24uYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuICAgICAgLy8gQ3JlYXRpbmcgZ2FtZWJvYXJkc1xuICAgICAgY29uc3QgZ2FtZWJvYXJkc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBnYW1lYm9hcmRzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb250ZW50Q29uXCIpO1xuXG4gICAgICBjb25zdCBlbmVteUdhbWVib2FyZENvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBlbmVteUdhbWVib2FyZENvbi5jbGFzc0xpc3QuYWRkKFwiZW5lbXlHYW1lYm9hcmRDb25cIik7XG5cbiAgICAgIGNvbnN0IGVuZW15R2FtZWJvYXJkSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICBlbmVteUdhbWVib2FyZEhlYWRlci5jbGFzc0xpc3QuYWRkKFwiZW5lbXlHYW1lYm9hcmRIZWFkZXJcIik7XG4gICAgICBlbmVteUdhbWVib2FyZEhlYWRlci50ZXh0Q29udGVudCA9IFwiRU5FTVkgU0VBU1wiO1xuXG4gICAgICBjb25zdCBlbmVteUdhbWVib2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBlbmVteUdhbWVib2FyZC5jbGFzc0xpc3QuYWRkKFwiZW5lbXlHYW1lYm9hcmRcIik7XG5cbiAgICAgIGVuZW15R2FtZWJvYXJkQ29uLmFwcGVuZENoaWxkKGVuZW15R2FtZWJvYXJkKTtcbiAgICAgIGVuZW15R2FtZWJvYXJkQ29uLmFwcGVuZENoaWxkKGVuZW15R2FtZWJvYXJkSGVhZGVyKTtcblxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIC8vIERpc3BsYXkgZnJpZW5kbHkgaGVhZGVyIGFmdGVyIDRzXG4gICAgICAgIGZyaWVuZGx5Qm9hcmRIZWFkZXIuc3R5bGUub3BhY2l0eSA9IFwiMVwiO1xuICAgICAgfSwgNDAwMCk7XG5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAvLyBEaXNwbGF5IGVuZW15IGhlYWRlciBhZnRlciA1cyB3aXRoIHJlZFxuICAgICAgICBlbmVteUdhbWVib2FyZEhlYWRlci5zdHlsZS5vcGFjaXR5ID0gXCIxXCI7XG4gICAgICAgIGVuZW15R2FtZWJvYXJkSGVhZGVyLnN0eWxlLmNvbG9yID0gXCJyZWRcIjtcbiAgICAgIH0sIDUwMDApO1xuXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgLy8gU2V0IGVuZW15IGhlYWRlciB0dXJuIHdoaXRlIGFnYWluXG4gICAgICAgIGVuZW15R2FtZWJvYXJkSGVhZGVyLnN0eWxlLmNvbG9yID0gXCJ3aGl0ZVwiO1xuICAgICAgfSwgNzAwMCk7XG5cbiAgICAgIC8vIENyZWF0aW5nIHdhdmUgYW5pbWF0aW9uIGVsZW1lbnRcbiAgICAgIGNvbnN0IHNlYVdhdmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgc2VhV2F2ZS5jbGFzc0xpc3QuYWRkKFwic2VhV2F2ZVwiKTtcblxuICAgICAgLy8gQ3JlYXRpbmcgdGhlIGZyaWVuZGx5IGJvYXJkXG4gICAgICBjb25zdCBmcmllbmRseUJvYXJkY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGZyaWVuZGx5Qm9hcmRjb24uY2xhc3NMaXN0LmFkZChcImZyaWVuZGx5Qm9hcmRjb25cIik7XG5cbiAgICAgIGNvbnN0IGZyaWVuZGx5Qm9hcmRIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgIGZyaWVuZGx5Qm9hcmRIZWFkZXIuY2xhc3NMaXN0LmFkZChcImZyaWVuZGx5Qm9hcmRIZWFkZXJcIik7XG4gICAgICBmcmllbmRseUJvYXJkSGVhZGVyLnRleHRDb250ZW50ID0gXCJGUklFTkRMWSBTRUFTXCI7XG5cbiAgICAgIGNvbnN0IGZyaWVuZGx5Qm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgZnJpZW5kbHlCb2FyZC5jbGFzc0xpc3QuYWRkKFwiZnJpZW5kbHlCb2FyZFwiKTtcblxuICAgICAgZnJpZW5kbHlCb2FyZGNvbi5hcHBlbmRDaGlsZChmcmllbmRseUJvYXJkSGVhZGVyKTtcbiAgICAgIGZyaWVuZGx5Qm9hcmRjb24uYXBwZW5kQ2hpbGQoZnJpZW5kbHlCb2FyZCk7XG5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAvLyBEaXNwbGF5IGdhbWVib2FyZHMgYWZ0ZXIgM3NcbiAgICAgICAgZW5lbXlHYW1lYm9hcmQuc3R5bGUub3BhY2l0eSA9IFwiMVwiO1xuICAgICAgICBmcmllbmRseUJvYXJkLnN0eWxlLm9wYWNpdHkgPSBcIjFcIjtcbiAgICAgIH0sIDMwMDApO1xuXG4gICAgICBsZXQgZ2FtZVN0b3BwZWQgPSBmYWxzZTtcblxuICAgICAgY29uc3QgcG9wdWxhdGVFbmVteUdhbWVib2FyZCA9ICgpID0+IHtcbiAgICAgICAgLy8gQ3JlYXRlIGFsbCBncmlkIHNsb3RzXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDEwOyBpKyspIHtcbiAgICAgICAgICBmb3IgKGxldCBqID0gMTsgaiA8PSAxMDsgaisrKSB7XG4gICAgICAgICAgICBjb25zdCBzbG90ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIHNsb3QuY2xhc3NMaXN0LmFkZChcImVuZW15R3JpZFNsb3RcIik7XG5cbiAgICAgICAgICAgIC8vIElmIGl0IGhhdmUgYmVlbiBhdHRhY2tlZFxuICAgICAgICAgICAgbGV0IGhhdmVCZWVuQXR0YWNrZWQgPSBmYWxzZTtcblxuICAgICAgICAgICAgLy8gQ2hlY2tzIGlmIGl0IGhhdmUgYmVlbiBoaXRcbiAgICAgICAgICAgIHRoaXMuQUkuYm9hcmQuaGl0cy5mb3JFYWNoKChjb29yKSA9PiB7XG4gICAgICAgICAgICAgIC8vIENvbXBhcmUgY29vcmRpbmF0ZXNcbiAgICAgICAgICAgICAgaWYgKGogPT0gY29vclswXSAmJiBpID09IGNvb3JbMV0pIHtcbiAgICAgICAgICAgICAgICBzbG90LmNsYXNzTGlzdC5hZGQoXCJlbmVteUdyaWRTbG90SGl0XCIpO1xuICAgICAgICAgICAgICAgIGhhdmVCZWVuQXR0YWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vIENoZWNrcyBpZiBpdCBoYXZlIGJlZW4gYXR0YWNrZWQgYnV0IG1pc3NlZFxuICAgICAgICAgICAgdGhpcy5BSS5ib2FyZC5taXNzZWQuZm9yRWFjaCgoY29vcikgPT4ge1xuICAgICAgICAgICAgICAvLyBDb21wYXJlIGNvb3JkaW5hdGVzXG4gICAgICAgICAgICAgIGlmIChqID09IGNvb3JbMF0gJiYgaSA9PSBjb29yWzFdKSB7XG4gICAgICAgICAgICAgICAgc2xvdC5jbGFzc0xpc3QuYWRkKFwiZW5lbXlHcmlkU2xvdE1pc3NlZFwiKTtcbiAgICAgICAgICAgICAgICBoYXZlQmVlbkF0dGFja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIElmIGl0IGhhdmVudCBiZWVuIGF0dGFja2VkLCBtYWtlIHJlYWR5IGZvciBpdFxuICAgICAgICAgICAgaWYgKGhhdmVCZWVuQXR0YWNrZWQgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgc2xvdC5jbGFzc0xpc3QuYWRkKFwiZW5lbXlHcmlkU2xvdFVuYXR0YWNrZWRcIik7XG4gICAgICAgICAgICAgIHNsb3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBPbiBjbGljayBhdHRhY2sgQUkgd2l0aCBjb29yZGluYXRlc1xuICAgICAgICAgICAgICAgIGlmIChnYW1lU3RvcHBlZCAhPT0gdHJ1ZSkgQUlBdHRhY2tjeWNsZShbaiwgaV0pO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZW5lbXlHYW1lYm9hcmQuYXBwZW5kQ2hpbGQoc2xvdCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBjb25zdCBwb3B1bGF0ZUZyaWVuZGx5R2FtZWJvYXJkID0gKCkgPT4ge1xuICAgICAgICAvLyBDcmVhdGUgYWxsIGdyaWQgc2xvdHNcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMTA7IGkrKykge1xuICAgICAgICAgIGZvciAobGV0IGogPSAxOyBqIDw9IDEwOyBqKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHNsb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgc2xvdC5jbGFzc0xpc3QuYWRkKFwiZW5lbXlHcmlkU2xvdFwiKTtcblxuICAgICAgICAgICAgLy8gSWYgYSBzaGlwIGhhcyBiZWVuIGhpdFxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIuYm9hcmQuaGl0cy5mb3JFYWNoKChjb29yKSA9PiB7XG4gICAgICAgICAgICAgIC8vIENvbXBhcmUgY29vcmRpbmF0ZXNcbiAgICAgICAgICAgICAgaWYgKGogPT0gY29vclswXSAmJiBpID09IGNvb3JbMV0pIHtcbiAgICAgICAgICAgICAgICBzbG90LmNsYXNzTGlzdC5hZGQoXCJlbmVteUdyaWRTbG90SGl0XCIpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vIElmIHRoZSBlbmVteSBoYXZlIG1pc3NlZFxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIuYm9hcmQubWlzc2VkLmZvckVhY2goKGNvb3IpID0+IHtcbiAgICAgICAgICAgICAgLy8gQ29tcGFyZSBjb29yZGluYXRlc1xuICAgICAgICAgICAgICBpZiAoaiA9PSBjb29yWzBdICYmIGkgPT0gY29vclsxXSkge1xuICAgICAgICAgICAgICAgIHNsb3QuY2xhc3NMaXN0LmFkZChcImVuZW15R3JpZFNsb3RNaXNzZWRcIik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gSWYgc2xvdCBpcyBhIHNoaXBcbiAgICAgICAgICAgIHRoaXMucGxheWVyLmJvYXJkLnNoaXBzLmZvckVhY2goKHNoaXBFbCkgPT4ge1xuICAgICAgICAgICAgICBzaGlwRWwuY29vci5mb3JFYWNoKChjb29yKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gQ29tcGFyZSBjb29yZGluYXRlc1xuICAgICAgICAgICAgICAgIGlmIChqID09IGNvb3JbMF0gJiYgaSA9PSBjb29yWzFdKSB7XG4gICAgICAgICAgICAgICAgICBzbG90LmNsYXNzTGlzdC5hZGQoXCJmcmllbmRseUdyaWRTbG90U2hpcFwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGZyaWVuZGx5Qm9hcmQuYXBwZW5kQ2hpbGQoc2xvdCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBwb3B1bGF0ZUVuZW15R2FtZWJvYXJkKCk7XG4gICAgICBwb3B1bGF0ZUZyaWVuZGx5R2FtZWJvYXJkKCk7XG5cbiAgICAgIGNvbnN0IEFJQXR0YWNrY3ljbGUgPSAoW3gsIHldKSA9PiB7XG4gICAgICAgIC8vIEFJIHJlY2llY2UgYXR0YWNrXG4gICAgICAgIHRoaXMuQUkuYm9hcmQucmVjaWV2ZUF0dGFjayhbeCwgeV0pO1xuXG4gICAgICAgIC8vIFBsYXllciByZWNpZXZlIGF0dGFja1xuICAgICAgICB0aGlzLnBsYXllci5ib2FyZC5yZWNpZXZlQXR0YWNrKHRoaXMuQUkuYXR0YWNrKCkpO1xuXG4gICAgICAgIC8vIFJlbG9hZCBib3RoIGdhbWVib2FyZHNcbiAgICAgICAgd2hpbGUgKGZyaWVuZGx5Qm9hcmQubGFzdENoaWxkKSB7XG4gICAgICAgICAgZnJpZW5kbHlCb2FyZC5yZW1vdmVDaGlsZChmcmllbmRseUJvYXJkLmxhc3RDaGlsZCk7XG4gICAgICAgIH1cbiAgICAgICAgd2hpbGUgKGVuZW15R2FtZWJvYXJkLmxhc3RDaGlsZCkge1xuICAgICAgICAgIGVuZW15R2FtZWJvYXJkLnJlbW92ZUNoaWxkKGVuZW15R2FtZWJvYXJkLmxhc3RDaGlsZCk7XG4gICAgICAgIH1cblxuICAgICAgICBwb3B1bGF0ZUVuZW15R2FtZWJvYXJkKCk7XG4gICAgICAgIHBvcHVsYXRlRnJpZW5kbHlHYW1lYm9hcmQoKTtcblxuICAgICAgICAvLyBJZiBvbmUgd29uIGRpc3BsYXkgd2luIHNjcmVlblxuICAgICAgICBpZiAodGhpcy5BSS5ib2FyZC5hbGxTdW5rKCkgPT0gdHJ1ZSkge1xuICAgICAgICAgIGdhbWVTdG9wcGVkID0gdHJ1ZTtcblxuICAgICAgICAgIGNvbnN0IHdpblNjcmVlbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgd2luU2NyZWVuLmNsYXNzTGlzdC5hZGQoXCJ3aW5TY3JlZW5QbGF5ZXJcIik7XG5cbiAgICAgICAgICBjb25zdCB3aW5TY3JlZW5UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgICAgd2luU2NyZWVuVGV4dC5jbGFzc0xpc3QuYWRkKFwid2luU2NyZWVuVGV4dFwiKTtcbiAgICAgICAgICB3aW5TY3JlZW5UZXh0LnRleHRDb250ZW50ID0gXCJZT1UgV09OISEhXCI7XG5cbiAgICAgICAgICB3aW5TY3JlZW4uYXBwZW5kQ2hpbGQod2luU2NyZWVuVGV4dCk7XG5cbiAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHdpblNjcmVlbik7XG5cbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHdpblNjcmVlbi5zdHlsZS5ib3R0b20gPSBcIjBweFwiO1xuICAgICAgICAgIH0sIDUwKTtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHdoaWxlIChjb250ZW50Lmxhc3RDaGlsZCkge1xuICAgICAgICAgICAgICBjb250ZW50LnJlbW92ZUNoaWxkKGNvbnRlbnQubGFzdENoaWxkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCA0NTAwKTtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHdpblNjcmVlbi5zdHlsZS5vcGFjaXR5ID0gXCIwXCI7XG4gICAgICAgICAgfSwgNzUwMCk7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB3aGlsZSAoZG9jdW1lbnQuYm9keS5sYXN0Q2hpbGQpIHtcbiAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChkb2N1bWVudC5ib2R5Lmxhc3RDaGlsZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsb2FkaW5nU2NyZWVuKCk7XG4gICAgICAgICAgfSwgMTE1MDApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMucGxheWVyLmJvYXJkLmFsbFN1bmsoKSA9PSB0cnVlKSB7XG4gICAgICAgICAgZ2FtZVN0b3BwZWQgPSB0cnVlO1xuXG4gICAgICAgICAgY29uc3Qgd2luU2NyZWVuQUkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgIHdpblNjcmVlbkFJLmNsYXNzTGlzdC5hZGQoXCJ3aW5TY3JlZW5BSVwiKTtcblxuICAgICAgICAgIGNvbnN0IHdpblNjcmVlblRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgICB3aW5TY3JlZW5UZXh0LmNsYXNzTGlzdC5hZGQoXCJ3aW5TY3JlZW5UZXh0XCIpO1xuICAgICAgICAgIHdpblNjcmVlblRleHQudGV4dENvbnRlbnQgPSBcIllPVSBMT1NUXCI7XG5cbiAgICAgICAgICB3aW5TY3JlZW5BSS5hcHBlbmRDaGlsZCh3aW5TY3JlZW5UZXh0KTtcblxuICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQod2luU2NyZWVuQUkpO1xuXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB3aW5TY3JlZW5BSS5zdHlsZS5ib3R0b20gPSBcIjBweFwiO1xuICAgICAgICAgIH0sIDUwKTtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHdoaWxlIChjb250ZW50Lmxhc3RDaGlsZCkge1xuICAgICAgICAgICAgICBjb250ZW50LnJlbW92ZUNoaWxkKGNvbnRlbnQubGFzdENoaWxkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCA0NTAwKTtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHdpblNjcmVlbkFJLnN0eWxlLm9wYWNpdHkgPSBcIjBcIjtcbiAgICAgICAgICB9LCA3NTAwKTtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHdoaWxlIChkb2N1bWVudC5ib2R5Lmxhc3RDaGlsZCkge1xuICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGRvY3VtZW50LmJvZHkubGFzdENoaWxkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxvYWRpbmdTY3JlZW4oKTtcbiAgICAgICAgICB9LCAxMTUwMCk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIC8vIEFwcGVuZGluZ1xuICAgICAgZ2FtZWJvYXJkc0NvbnRhaW5lci5hcHBlbmRDaGlsZChlbmVteUdhbWVib2FyZENvbik7XG4gICAgICBnYW1lYm9hcmRzQ29udGFpbmVyLmFwcGVuZENoaWxkKHNlYVdhdmUpO1xuICAgICAgZ2FtZWJvYXJkc0NvbnRhaW5lci5hcHBlbmRDaGlsZChmcmllbmRseUJvYXJkY29uKTtcblxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIC8vIEZhZGUgaW4gYWZ0ZXIgMS41c1xuICAgICAgICBlbmVteUdhbWVib2FyZENvbi5zdHlsZS5vcGFjaXR5ID0gXCIxXCI7XG4gICAgICAgIHNlYVdhdmUuc3R5bGUub3BhY2l0eSA9IFwiMVwiO1xuICAgICAgICBmcmllbmRseUJvYXJkY29uLnN0eWxlLm9wYWNpdHkgPSBcIjFcIjtcbiAgICAgIH0sIDE1MDApO1xuXG4gICAgICAvLyBBcHBlbmRpbmcgYWxsXG4gICAgICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlckNvbik7XG4gICAgICBjb250ZW50LmFwcGVuZENoaWxkKGdhbWVib2FyZHNDb250YWluZXIpO1xuXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgLy8gRmFkZSBpbiBhZnRlciAwLjVzXG4gICAgICAgIGhlYWRlckNvbi5zdHlsZS5vcGFjaXR5ID0gXCIxXCI7XG4gICAgICB9LCA1MDApO1xuXG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuICAgIH0pO1xuICB9XG59XG5cbmNsYXNzIHR3b1BsYXllciB7XG4gIGNvbnN0cnVjdG9yKHBsYXllcjFOYW1lLCBwbGF5ZXIyTmFtZSkge1xuICAgIHRoaXMucGxheWVyMSA9IG5ldyBwbGF5ZXIocGxheWVyMU5hbWUpO1xuICAgIHRoaXMucGxheWVyMiA9IG5ldyBwbGF5ZXIocGxheWVyMk5hbWUpO1xuICB9XG4gIGdhbWVDeWNsZURPTSgpIHtcbiAgICAvLyBSdW4gZXZlcnkgcGFydCB3aGVuIGl0IHJlc29sdmVzXG4gICAgdGhpcy5nZXROYW1lRE9NKCkudGhlbigoKSA9PiB7XG4gICAgICB0aGlzLnBhc3NTY3JlZW5ET00odGhpcy5wbGF5ZXIxKS50aGVuKCgpID0+IHtcbiAgICAgICAgcGxhY2VTaGlwc0RPTSh0aGlzLnBsYXllcjEpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIHRoaXMucGFzc1NjcmVlbkRPTSh0aGlzLnBsYXllcjIpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgcGxhY2VTaGlwc0RPTSh0aGlzLnBsYXllcjIpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLnBhc3NTY3JlZW5ET00odGhpcy5wbGF5ZXIxKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmF0dGFja0N5Y2xlRE9NKCk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbiAgZ2V0TmFtZURPTSgpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgICAgIGNvbnRlbnQuY2xhc3NMaXN0LmFkZChcImNvbnRlbnRDb25cIiwgXCJnZXROYW1lQ29udGVudENvblwiKTtcbiAgICAgIGNvbnRlbnQuc2V0QXR0cmlidXRlKFwib25zdWJtaXRcIiwgXCJyZXR1cm4gZmFsc2VcIik7XG5cbiAgICAgIC8vIENyZWF0ZSBpbnB1dCBjb25cbiAgICAgIGNvbnN0IG5hbWVJbnB1dENvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBuYW1lSW5wdXRDb24uY2xhc3NMaXN0LmFkZChcImdldE5hbWVJbnB1dENvbkNvblwiKTtcblxuICAgICAgLy8gQ3JlYXRlIFBMYXllciAxIGlucHV0Y29uXG4gICAgICBjb25zdCBwbGF5ZXIxSW5wdXRDb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgcGxheWVyMUlucHV0Q29uLmNsYXNzTGlzdC5hZGQoXCJnZXROYW1lSW5wdXRDb25cIiwgXCJjb250ZW50Q29uXCIpO1xuXG4gICAgICBjb25zdCBwbGF5ZXIxSW5wdXRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgcGxheWVyMUlucHV0TGFiZWwuY2xhc3NMaXN0LmFkZChcImdldE5hbWVJbnB1dExhYmVsXCIpO1xuICAgICAgcGxheWVyMUlucHV0TGFiZWwudGV4dENvbnRlbnQgPSBcIlBMQVlFUiAxOlwiO1xuXG4gICAgICBjb25zdCBwbGF5ZXIxSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICBwbGF5ZXIxSW5wdXQuY2xhc3NMaXN0LmFkZChcImdldE5hbWVJbnB1dFwiKTtcbiAgICAgIHBsYXllcjFJbnB1dC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIk5BTUVcIik7XG5cbiAgICAgIHBsYXllcjFJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCkgPT4ge1xuICAgICAgICBwbGF5ZXIxSW5wdXQudmFsdWUgPSBwbGF5ZXIxSW5wdXQudmFsdWUudG9VcHBlckNhc2UoKTtcbiAgICAgICAgaWYgKHBsYXllcjFJbnB1dC52YWx1ZSAhPT0gXCJcIiAmJiBwbGF5ZXIySW5wdXQudmFsdWUgIT09IFwiXCIpIHtcbiAgICAgICAgICBuZXh0QnRuLmNsYXNzTGlzdC5hZGQoXCJnZXROYW1lTmV4dEJ0blJlYWR5XCIpO1xuICAgICAgICB9IGVsc2UgaWYgKHBsYXllcjFJbnB1dC52YWx1ZSA9PSBcIlwiIHx8IHBsYXllcjJJbnB1dC52YWx1ZSA9PSBcIlwiKSB7XG4gICAgICAgICAgbmV4dEJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwiZ2V0TmFtZU5leHRCdG5SZWFkeVwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGxheWVyMUlucHV0LnZhbHVlICE9PSBcIlwiKSB7XG4gICAgICAgICAgcGxheWVyMUlucHV0LnNldEN1c3RvbVZhbGlkaXR5KFwiXCIpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgcGxheWVyMUlucHV0Q29uLmFwcGVuZENoaWxkKHBsYXllcjFJbnB1dExhYmVsKTtcbiAgICAgIHBsYXllcjFJbnB1dENvbi5hcHBlbmRDaGlsZChwbGF5ZXIxSW5wdXQpO1xuXG4gICAgICAvLyBDcmVhdGUgUExheWVyIDIgaW5wdXRjb25cbiAgICAgIGNvbnN0IHBsYXllcjJJbnB1dENvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBwbGF5ZXIySW5wdXRDb24uY2xhc3NMaXN0LmFkZChcImdldE5hbWVJbnB1dENvblwiLCBcImNvbnRlbnRDb25cIik7XG5cbiAgICAgIGNvbnN0IHBsYXllcjJJbnB1dExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICBwbGF5ZXIySW5wdXRMYWJlbC5jbGFzc0xpc3QuYWRkKFwiZ2V0TmFtZUlucHV0TGFiZWxcIik7XG4gICAgICBwbGF5ZXIySW5wdXRMYWJlbC50ZXh0Q29udGVudCA9IFwiUExBWUVSIDI6XCI7XG5cbiAgICAgIGNvbnN0IHBsYXllcjJJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgIHBsYXllcjJJbnB1dC5jbGFzc0xpc3QuYWRkKFwiZ2V0TmFtZUlucHV0XCIpO1xuICAgICAgcGxheWVyMklucHV0LnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiTkFNRVwiKTtcblxuICAgICAgcGxheWVyMklucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKSA9PiB7XG4gICAgICAgIHBsYXllcjJJbnB1dC52YWx1ZSA9IHBsYXllcjJJbnB1dC52YWx1ZS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICBpZiAocGxheWVyMUlucHV0LnZhbHVlICE9PSBcIlwiICYmIHBsYXllcjJJbnB1dC52YWx1ZSAhPT0gXCJcIikge1xuICAgICAgICAgIG5leHRCdG4uY2xhc3NMaXN0LmFkZChcImdldE5hbWVOZXh0QnRuUmVhZHlcIik7XG4gICAgICAgIH0gZWxzZSBpZiAocGxheWVyMUlucHV0LnZhbHVlID09IFwiXCIgfHwgcGxheWVyMklucHV0LnZhbHVlID09IFwiXCIpIHtcbiAgICAgICAgICBuZXh0QnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJnZXROYW1lTmV4dEJ0blJlYWR5XCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwbGF5ZXIySW5wdXQudmFsdWUgIT09IFwiXCIpIHtcbiAgICAgICAgICBwbGF5ZXIySW5wdXQuc2V0Q3VzdG9tVmFsaWRpdHkoXCJcIik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBwbGF5ZXIySW5wdXRDb24uYXBwZW5kQ2hpbGQocGxheWVyMklucHV0TGFiZWwpO1xuICAgICAgcGxheWVyMklucHV0Q29uLmFwcGVuZENoaWxkKHBsYXllcjJJbnB1dCk7XG5cbiAgICAgIC8vIEFwcGVuZGluZ1xuICAgICAgbmFtZUlucHV0Q29uLmFwcGVuZENoaWxkKHBsYXllcjFJbnB1dENvbik7XG4gICAgICBuYW1lSW5wdXRDb24uYXBwZW5kQ2hpbGQocGxheWVyMklucHV0Q29uKTtcblxuICAgICAgLy8gQ3JlYXRpbmcgbmV4dEJ0blxuICAgICAgY29uc3QgbmV4dEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgIG5leHRCdG4uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInN1Ym1pdFwiKTtcbiAgICAgIG5leHRCdG4uY2xhc3NMaXN0LmFkZChcImdldE5hbWVOZXh0QnRuXCIsIFwiYnRuXCIpO1xuICAgICAgbmV4dEJ0bi5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIk5FWFRcIik7XG5cbiAgICAgIGxldCBoYXNTdWJtaXR0ZWQgPSBmYWxzZTtcblxuICAgICAgbmV4dEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcGxheWVyMUlucHV0LnZhbHVlICE9PSBcIlwiICYmXG4gICAgICAgICAgcGxheWVyMklucHV0LnZhbHVlICE9PSBcIlwiICYmXG4gICAgICAgICAgaGFzU3VibWl0dGVkID09IGZhbHNlXG4gICAgICAgICkge1xuICAgICAgICAgIHRoaXMucGxheWVyMS5uYW1lID0gcGxheWVyMUlucHV0LnZhbHVlO1xuICAgICAgICAgIHRoaXMucGxheWVyMi5uYW1lID0gcGxheWVyMklucHV0LnZhbHVlO1xuICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMpO1xuXG4gICAgICAgICAgY29udGVudC5zdHlsZS5vcGFjaXR5ID0gXCIwXCI7XG4gICAgICAgICAgaGFzU3VibWl0dGVkID0gdHJ1ZTtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHdoaWxlIChkb2N1bWVudC5ib2R5Lmxhc3RDaGlsZCkge1xuICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGRvY3VtZW50LmJvZHkubGFzdENoaWxkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICB9LCA0MDUwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAocGxheWVyMUlucHV0LnZhbHVlID09PSBcIlwiKSB7XG4gICAgICAgICAgICBwbGF5ZXIxSW5wdXQuc2V0Q3VzdG9tVmFsaWRpdHkoXCJQbGVhc2UgZmlsbCBvdXQgdGhpcyBmaWVsZFwiKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHBsYXllcjJJbnB1dC52YWx1ZSA9PT0gXCJcIikge1xuICAgICAgICAgICAgcGxheWVyMklucHV0LnNldEN1c3RvbVZhbGlkaXR5KFwiUGxlYXNlIGZpbGwgb3V0IHRoaXMgZmllbGRcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgLy8gQXBwZW5kaW5nIGxhc3RcbiAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobmFtZUlucHV0Q29uKTtcbiAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobmV4dEJ0bik7XG5cbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGVudCk7XG5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAvLyBMZXQgZmFkZSBpblxuICAgICAgICBjb250ZW50LnN0eWxlLm9wYWNpdHkgPSBcIjFcIjtcbiAgICAgIH0sIDUwKTtcbiAgICB9KTtcbiAgfVxuICBwYXNzU2NyZWVuRE9NKHBsYXllcikge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoXCJwYXNzRGV2aWNlQ29uXCIpO1xuXG4gICAgICAvLyBQYXNzIGhlYWRlclxuICAgICAgY29uc3QgcGFzc0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgcGFzc0hlYWRlci5jbGFzc0xpc3QuYWRkKFwicGFzc1NjcmVlbkhlYWRlclwiKTtcbiAgICAgIHBhc3NIZWFkZXIudGV4dENvbnRlbnQgPSBgUExFQVNFIFBBU1MgVEhFIERFVklDRSBUTyAke3BsYXllci5uYW1lfWA7XG5cbiAgICAgIC8vIENyZWF0ZSBwYXNzIGljb25cbiAgICAgIGNvbnN0IHBhc3NEZXZpY2VJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgcGFzc0RldmljZUltYWdlLnNyYyA9IHBhc3NEZXZpY2VJbWFnZVNyYztcbiAgICAgIHBhc3NEZXZpY2VJbWFnZS5jbGFzc0xpc3QuYWRkKFwicGFzc0RldmljZUltYWdlXCIpO1xuXG4gICAgICAvLyBQcmVzcyB0byBjb250aW51ZSB0ZXh0XG4gICAgICBjb25zdCBjb250aW51ZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgIGNvbnRpbnVlVGV4dC5jbGFzc0xpc3QuYWRkKFwicGFzc0RldmljZUNvbnRpbnVlVGV4dFwiKTtcbiAgICAgIGNvbnRpbnVlVGV4dC50ZXh0Q29udGVudCA9IFwiVEFQIFRPIENPTlRJTlVFXCI7XG5cbiAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQocGFzc0hlYWRlcik7XG4gICAgICBjb250ZW50LmFwcGVuZENoaWxkKHBhc3NEZXZpY2VJbWFnZSk7XG4gICAgICBjb250ZW50LmFwcGVuZENoaWxkKGNvbnRpbnVlVGV4dCk7XG5cbiAgICAgIGNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgY29udGVudC5zdHlsZS5vcGFjaXR5ID0gXCIwXCI7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoY29udGVudCk7XG4gICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICB9LCAyMDAwKTtcbiAgICAgIH0pO1xuXG4gICAgICBjb250ZW50LnN0eWxlLm9wYWNpdHkgPSBcIjBcIjtcblxuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250ZW50KTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjb250ZW50LnN0eWxlLm9wYWNpdHkgPSBcIjFcIjtcbiAgICAgIH0sIDUwKTtcbiAgICB9KTtcbiAgfVxuICBhdHRhY2tDeWNsZURPTSgpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHt9KTtcbiAgfVxufVxuXG5jb25zdCBwbGFjZVNoaXBzRE9NID0gKHBsYXllcikgPT4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAvLyBQbGFjZSBzaGlwcyByb3RhdGVkIGlmIHRoZXkgYXJlXG4gICAgbGV0IHJvdGF0ZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRlbnQuY2xhc3NMaXN0LmFkZChcImNvbnRlbnRDb25cIiwgXCJwbGFjZW1lbnRDb25cIik7XG5cbiAgICAvLyBDcmVhdGluZyBoZWFkZXJcbiAgICBjb25zdCBoZWFkZXJDb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhlYWRlckNvbi5jbGFzc0xpc3QuYWRkKFwicGxhY2VtZW50SGVhZGVyQ29uXCIpO1xuXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXG4gICAgICBcImxvYWRpbmdzY3JlZW5IZWFkZXJcIixcbiAgICAgIFwiaW5nYW1lSGVhZGVyXCIsXG4gICAgICBcInBsYWNlbWVudEhlYWRlclwiXG4gICAgKTtcbiAgICBoZWFkZXIudGV4dENvbnRlbnQgPSBgQVlBLUFZQSBDQVBUQUlOICR7cGxheWVyLm5hbWV9IFNFTEVDVCBBTkQgRFJPUCBZT1VSIFNISVBTIFdIRVJFIFlPVSBXQU5UIFRIRU1gO1xuXG4gICAgaGVhZGVyQ29uLmFwcGVuZENoaWxkKGhlYWRlcik7XG5cbiAgICAvLyBDcmVhdGluZyBkcmFnIGFuZCBkcm9wIG1vZHVsZVxuICAgIGNvbnN0IGRyYWdBbmREcm9wQ29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkcmFnQW5kRHJvcENvbi5jbGFzc0xpc3QuYWRkKFwiZHJhZ0FuZERyb3BDb25cIik7XG5cbiAgICAvLyBDcmVhdGluZyBncmlkXG4gICAgY29uc3QgZ2FtZUJvYXJkR3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZ2FtZUJvYXJkR3JpZC5jbGFzc0xpc3QuYWRkKFwiZnJpZW5kbHlCb2FyZFwiLCBcInBsYWNlbWVudEJvYXJkXCIpO1xuXG4gICAgLy8gRm9yIHNhdmluZyBzZWxlY3RlZCBzaGlwIGluIGEgdmFyaWJsZVxuICAgIGxldCBzZWxlY3RlZFNoaXAgPSB1bmRlZmluZWQ7XG5cbiAgICAvLyBIaWdobGlnaHRzIHNlbGN0ZWQgc2hpcFxuICAgIC8vIEZuIE5PVCBQVVJFIChhY2Nlc3MgdmFyaWJsZSBvdXRzaWRlIHNjb3BlKVxuICAgIGNvbnN0IHNlbGVjdEZuID0gKCkgPT4ge1xuICAgICAgc2hpcHNDb24uY2hpbGROb2Rlcy5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKFwicGxhY2VtZW50U2VsZWN0ZWRTaGlwRWxcIik7XG4gICAgICB9KTtcbiAgICAgIHNlbGVjdGVkU2hpcC5jbGFzc0xpc3QuYWRkKFwicGxhY2VtZW50U2VsZWN0ZWRTaGlwRWxcIik7XG4gICAgfTtcblxuICAgIC8vIENhY2wgc2hpcCBjb29yZGluYXRlc1xuICAgIC8vIEZuIE5PVCBQVVJFIChhY2Nlc3MgdmFyaWJsZSBvdXRzaWRlIHNjb3BlKVxuICAgIGNvbnN0IGNhY2xTaGlwQ29vciA9IChbeCwgeV0sIG51bSkgPT4ge1xuICAgICAgLy8gU2F2ZSBjYWNsIGNvb3JkaW5hdGVzXG4gICAgICBsZXQgY29vckFyeSA9IFtdO1xuXG4gICAgICBpZiAocm90YXRlZCA9PSB0cnVlKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtOyBpKyspIHtcbiAgICAgICAgICBjb29yQXJ5LnB1c2goW3ggKyBpLCB5XSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtOyBpKyspIHtcbiAgICAgICAgICBjb29yQXJ5LnB1c2goW3gsIHkgKyBpXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBjb29yQXJ5O1xuICAgIH07XG5cbiAgICAvLyBTYXZlcyBob3ZlcmVkIHNsb3RzIGZvciBuZXh0IHJlbG9hZCBvbiBncmlkXG4gICAgbGV0IGhvdmVyZWRTbG90ID0gW1tdXTtcblxuICAgIC8vIElmIHNoaXBzIGNhbiBiZSBwbGFjZWRcbiAgICAvLyBIYXMgdG8gYmUgc2NvcGVkIGhlcmUgZm9yIGZ1bmN0aW9uIHRvIGFjY2VzcyBwcmV2aW9zIGNhbGxzXG4gICAgbGV0IGNhblBsYWNlID0gdHJ1ZTtcblxuICAgIGNvbnN0IHBvcHVsYXRlQm9hcmQgPSAoKSA9PiB7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAxMDsgaSsrKSB7XG4gICAgICAgIGZvciAobGV0IGogPSAxOyBqIDw9IDEwOyBqKyspIHtcbiAgICAgICAgICBjb25zdCBncmlkUGxhY2VtZW50U2xvdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgZ3JpZFBsYWNlbWVudFNsb3QuY2xhc3NMaXN0LmFkZChcImdyaWRQbGFjZW1lbnRTbG90XCIpO1xuXG4gICAgICAgICAgLy8gSW5kaWNhdGUgd2VhdGhlciBvciBub3QgYSBzaGlwIGhhcyBhbGxyZWFkeSBiZWVuIHBsYWNlZCBoZXJlXG4gICAgICAgICAgbGV0IHNoaXBFbFNsb3QgPSBmYWxzZTtcblxuICAgICAgICAgIHBsYXllci5ib2FyZC5zaGlwcy5mb3JFYWNoKChzaGlwRWwpID0+IHtcbiAgICAgICAgICAgIHNoaXBFbC5jb29yLmZvckVhY2goKGNvb3IpID0+IHtcbiAgICAgICAgICAgICAgaWYgKGogPT0gY29vclswXSAmJiBpID09IGNvb3JbMV0pIHtcbiAgICAgICAgICAgICAgICBncmlkUGxhY2VtZW50U2xvdC5jbGFzc0xpc3QuYWRkKFwiZnJpZW5kbHlHcmlkU2xvdFNoaXBcIik7XG4gICAgICAgICAgICAgICAgc2hpcEVsU2xvdCA9IHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgaWYgKHNoaXBFbFNsb3QgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGdyaWRQbGFjZW1lbnRTbG90LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICAgIC8vIElmIGEgc2hpcCBpcyBzZWxlY3RlZCBhbmQgc2hpcCBpcyBub3QgYW5kIGlsbGlnYWwgcGxhY2VcbiAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkU2hpcCAhPSB1bmRlZmluZWQgJiYgY2FuUGxhY2UgIT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAvLyBDcmVhdGUgbmV3IHNoaXAgd2l0aCB0aGUgY2FsY3VsYXRlZCBjb29yZGluYXRlc1xuICAgICAgICAgICAgICAgIGxldCBuZXdTaGlwID0gbmV3IHNoaXAoXG4gICAgICAgICAgICAgICAgICBjYWNsU2hpcENvb3IoW2osIGldLCBzZWxlY3RlZFNoaXAuY2hpbGRFbGVtZW50Q291bnQpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAvLyBQdXNoIG5ldyBzaGlwIHRvIHRoZSBwbGF5ZXJcbiAgICAgICAgICAgICAgICBwbGF5ZXIuYm9hcmQuc2hpcHMucHVzaChuZXdTaGlwKTtcblxuICAgICAgICAgICAgICAgIC8vIE1ha2Ugc2hpcCBkaXNhcGVhciBmcm9tIHNlbGVjdGFibGUgc2hpcHNcbiAgICAgICAgICAgICAgICBzZWxlY3RlZFNoaXAuY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG5cbiAgICAgICAgICAgICAgICAvLyBDbGVhciBzZWxlY3RlZCBzaGlwXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRTaGlwID0gdW5kZWZpbmVkO1xuXG4gICAgICAgICAgICAgICAgLy8gQ2xlYXIgaG92ZXJlZCBzbG90c1xuICAgICAgICAgICAgICAgIGhvdmVyZWRTbG90ID0gW1tdXTtcblxuICAgICAgICAgICAgICAgIC8vIFJlbG9hZCBnYW1lYm9hcmRcbiAgICAgICAgICAgICAgICByZWxvYWRHYW1lYm9hcmRHcmlkKCk7XG5cbiAgICAgICAgICAgICAgICAvLyBBbGxvdyBwbGF5ZXIgdG8gbW92ZSB0byBiYXR0bGVcbiAgICAgICAgICAgICAgICBpZiAocGxheWVyLmJvYXJkLnNoaXBzLmxlbmd0aCA9PSA2KSB7XG4gICAgICAgICAgICAgICAgICBuZXh0QnRuLmNsYXNzTGlzdC5hZGQoXCJwbGFjZW1lbnROZXh0QnRuUmVhZHlcIik7XG4gICAgICAgICAgICAgICAgICBuZXh0UmVhZHkgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIElmIHNsb3QgaXMgaG92ZXJlZFxuICAgICAgICAgICAgbGV0IGlzSG92ZXJlZFNsb3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgaWYgKGhvdmVyZWRTbG90WzBdWzBdID09IGogJiYgaG92ZXJlZFNsb3RbMF1bMV0gPT0gaSkge1xuICAgICAgICAgICAgICAvLyBUaGlzIGlzIGhvdmVyZWQgc2xvdFxuICAgICAgICAgICAgICBpc0hvdmVyZWRTbG90ID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gVGhpcyBpcyBub3QgdGhlIGhvdmVyZWQgc2xvdFxuICAgICAgICAgICAgaWYgKGlzSG92ZXJlZFNsb3QgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgZ3JpZFBsYWNlbWVudFNsb3QuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZFNoaXAgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAvLyBpZiBhIHNoaXAgaXMgc2VsZWN0ZWRcbiAgICAgICAgICAgICAgICAgIC8vIENhbGMgaG92ZXJlZCBzbG90cyBiYXNlZCBvbiBzZWxlY3RlZCBzaGlwXG4gICAgICAgICAgICAgICAgICBob3ZlcmVkU2xvdCA9IGNhY2xTaGlwQ29vcihcbiAgICAgICAgICAgICAgICAgICAgW2osIGldLFxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFNoaXAuY2hpbGRFbGVtZW50Q291bnRcbiAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAgIC8vIFJlc2V0IGNhbiBwbGFjZVxuICAgICAgICAgICAgICAgICAgY2FuUGxhY2UgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgICAvLyBDaGVjayBpZiBob3ZlcmVkIGlzIG91dCBvZiBncmlkXG4gICAgICAgICAgICAgICAgICBob3ZlcmVkU2xvdC5mb3JFYWNoKChjb3JyMSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgY29ycjFbMF0gPCAxIHx8XG4gICAgICAgICAgICAgICAgICAgICAgY29ycjFbMF0gPiAxMCB8fFxuICAgICAgICAgICAgICAgICAgICAgIGNvcnIxWzFdIDwgMSB8fFxuICAgICAgICAgICAgICAgICAgICAgIGNvcnIxWzFdID4gMTBcbiAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgLy8gSXQgY2FuJ3QgYmUgcGxhY2VkIHRoZW5cbiAgICAgICAgICAgICAgICAgICAgICBjYW5QbGFjZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIENoZWNrIGlmIGhvdmVyZWQgc2xvdHMgaXMgb3ZlciBhbiBleGlzdGluZyBzaGlwXG4gICAgICAgICAgICAgICAgICAgIHBsYXllci5ib2FyZC5zaGlwcy5mb3JFYWNoKChzaGlwRWwxKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgc2hpcEVsMS5jb29yLmZvckVhY2goKGNvb3IyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29ycjFbMF0gPT0gY29vcjJbMF0gJiYgY29ycjFbMV0gPT0gY29vcjJbMV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ2FuJ3QgcGxhY2Ugc2hpcCBoZXJlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhblBsYWNlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAvLyBSZWxvYWQgdG8gZGlzcGxheSBjaGFuZ2VzXG4gICAgICAgICAgICAgICAgICByZWxvYWRHYW1lYm9hcmRHcmlkKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBBZGQgY2xhc3MgdG8gYWxsIGhvdmVyZWQgc3BvdHNcbiAgICAgICAgICBob3ZlcmVkU2xvdC5mb3JFYWNoKChjb3JyMSkgPT4ge1xuICAgICAgICAgICAgaWYgKGNvcnIxWzBdID09IGogJiYgY29ycjFbMV0gPT0gaSkge1xuICAgICAgICAgICAgICAvLyBJZiBvbmUgaXMgb3V0IG9mIHJhbmdlXG4gICAgICAgICAgICAgIGlmIChjYW5QbGFjZSA9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGdyaWRQbGFjZW1lbnRTbG90LmNsYXNzTGlzdC5hZGQoXG4gICAgICAgICAgICAgICAgICBcInBsYWNlbWVudEhvdmVyZWRTbG90T3V0T2ZSYW5nZVwiXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBncmlkUGxhY2VtZW50U2xvdC5jbGFzc0xpc3QuYWRkKFwicGxhY2VtZW50SG92ZXJlZFNsb3RcIik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIC8vIEFwcGVuZCBuZXcgc2xvdFxuICAgICAgICAgIGdhbWVCb2FyZEdyaWQuYXBwZW5kQ2hpbGQoZ3JpZFBsYWNlbWVudFNsb3QpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8vIEZpcmVzIG9uIGxvYWRcbiAgICBwb3B1bGF0ZUJvYXJkKCk7XG5cbiAgICAvLyBSZWxvYWQgZm4gcmVtb3ZlcyBhbGwgYW5kIHBvcHVsYXRlcyBib2FyZFxuICAgIGNvbnN0IHJlbG9hZEdhbWVib2FyZEdyaWQgPSAoKSA9PiB7XG4gICAgICB3aGlsZSAoZ2FtZUJvYXJkR3JpZC5sYXN0Q2hpbGQpIHtcbiAgICAgICAgZ2FtZUJvYXJkR3JpZC5yZW1vdmVDaGlsZChnYW1lQm9hcmRHcmlkLmxhc3RDaGlsZCk7XG4gICAgICB9XG4gICAgICBwb3B1bGF0ZUJvYXJkKCk7XG4gICAgfTtcblxuICAgIC8vIENyZWF0aW5nIHNoaXAgZHJhZyBhbmQgZHJvcHNcbiAgICBjb25zdCBzaGlwRHJhZ0NvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc2hpcERyYWdDb24uY2xhc3NMaXN0LmFkZChcInNoaXBEcmFnQ29uXCIpO1xuXG4gICAgY29uc3Qgc2hpcHNDb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHNoaXBzQ29uLmNsYXNzTGlzdC5hZGQoXCJwbGFjZW1lbnRTaGlwc0NvblwiKTtcblxuICAgIC8vIENyZWF0ZXMgc2VsZWN0YWJsZSBzaGlwc1xuICAgIGNvbnN0IGNyZWF0aW5nU2hpcHMgPSAobGVuZ3RoKSA9PiB7XG4gICAgICBjb25zdCBzaGlwRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgc2hpcEVsLmNsYXNzTGlzdC5hZGQoXCJwbGFjZW1lbnRTaGlwRWxcIik7XG5cbiAgICAgIC8vIE1ha2Ugc3VyZSBlYWNoIGNlbGwgaXMgZXF1YWwgdG8gZ3JpZCBjZWxsXG4gICAgICBzaGlwRWwuc3R5bGUuZ3JpZFRlbXBsYXRlUm93cyA9IGByZXBlYXQoJHtsZW5ndGh9LDFmcmA7XG4gICAgICBzaGlwRWwuc3R5bGUuaGVpZ2h0ID0gYCR7bGVuZ3RoICogMy41fXZoYDtcblxuICAgICAgc2hpcEVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIC8vIEFkZCBzaGlwIHRvIHNlbGVjdGVkXG4gICAgICAgIHNlbGVjdGVkU2hpcCA9IHNoaXBFbDtcbiAgICAgICAgLy8gSGlnaGxpZ3RzIHNlbGVjdGVkIHNoaXBcbiAgICAgICAgc2VsZWN0Rm4oKTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBBZGQgc2xvdHMgdG8gc2hpcCBncmlkXG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBsZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBzbG90ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgc2xvdC5jbGFzc0xpc3QuYWRkKFwiZnJpZW5kbHlHcmlkU2xvdFNoaXBcIiwgXCJncmlkUGxhY2VtZW50U2xvdFwiKTtcblxuICAgICAgICBzaGlwRWwuYXBwZW5kQ2hpbGQoc2xvdCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzaGlwRWw7XG4gICAgfTtcblxuICAgIC8vIENyZWF0ZSBhbGwgc2hpcHNcbiAgICBjb25zdCBwb3B1bGF0ZUFsbFNoaXBzID0gKCkgPT4ge1xuICAgICAgc2hpcHNDb24uYXBwZW5kQ2hpbGQoY3JlYXRpbmdTaGlwcyg1KSk7XG4gICAgICBzaGlwc0Nvbi5hcHBlbmRDaGlsZChjcmVhdGluZ1NoaXBzKDQpKTtcbiAgICAgIHNoaXBzQ29uLmFwcGVuZENoaWxkKGNyZWF0aW5nU2hpcHMoNCkpO1xuICAgICAgc2hpcHNDb24uYXBwZW5kQ2hpbGQoY3JlYXRpbmdTaGlwcygzKSk7XG4gICAgICBzaGlwc0Nvbi5hcHBlbmRDaGlsZChjcmVhdGluZ1NoaXBzKDMpKTtcbiAgICAgIHNoaXBzQ29uLmFwcGVuZENoaWxkKGNyZWF0aW5nU2hpcHMoMikpO1xuICAgIH07XG5cbiAgICBwb3B1bGF0ZUFsbFNoaXBzKCk7XG5cbiAgICAvLyBDcmVhdGluZyByb3RhdGVCdG5cbiAgICBjb25zdCByb3RhdGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHJvdGF0ZUJ0bi5jbGFzc0xpc3QuYWRkKFwicGxhY2VtZW50Um90YXRlQnRuXCIsIFwiYnRuXCIpO1xuICAgIHJvdGF0ZUJ0bi50ZXh0Q29udGVudCA9IFwiUm90YXRlXCI7XG5cbiAgICByb3RhdGVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGlmIChyb3RhdGVkID09IGZhbHNlKSB7XG4gICAgICAgIC8vIFJvdGF0ZVxuICAgICAgICBzaGlwc0Nvbi5zdHlsZS5yb3RhdGUgPSBcIjkwZGVnXCI7XG4gICAgICAgIHJvdGF0ZWQgPSB0cnVlO1xuICAgICAgfSBlbHNlIGlmIChyb3RhdGVkKSB7XG4gICAgICAgIC8vIFJvdGF0ZSBiYWNrXG4gICAgICAgIHNoaXBzQ29uLnN0eWxlLnJvdGF0ZSA9IFwiMGRlZ1wiO1xuICAgICAgICByb3RhdGVkID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBBcHBlbmRpbmdcbiAgICBzaGlwRHJhZ0Nvbi5hcHBlbmRDaGlsZChzaGlwc0Nvbik7XG4gICAgc2hpcERyYWdDb24uYXBwZW5kQ2hpbGQocm90YXRlQnRuKTtcblxuICAgIC8vIEFwcGVuZGluZ1xuICAgIGRyYWdBbmREcm9wQ29uLmFwcGVuZENoaWxkKGdhbWVCb2FyZEdyaWQpO1xuICAgIGRyYWdBbmREcm9wQ29uLmFwcGVuZENoaWxkKHNoaXBEcmFnQ29uKTtcblxuICAgIC8vIENyZWF0aW5nIGJ0bmNvbnRhaW5lciBmb3IgcmVzZXRidG4gYW5kIG5leHQgYnRuXG4gICAgY29uc3QgbG93ZXJCdG5Db24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxvd2VyQnRuQ29uLmNsYXNzTGlzdC5hZGQoXCJwbGFjZW1lbnRMb3dlckJ0bkNvblwiKTtcblxuICAgIGNvbnN0IHJlc2V0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICByZXNldEJ0bi5jbGFzc0xpc3QuYWRkKFwicGxhY2VtZW50UmVzZXRCdG5cIiwgXCJidG5cIik7XG4gICAgcmVzZXRCdG4udGV4dENvbnRlbnQgPSBcIlJFU0VUXCI7XG5cbiAgICBsZXQgbmV4dFJlYWR5ID0gZmFsc2U7XG5cbiAgICByZXNldEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgLy8gSWYgYW55IHNoaXBzIGxlZnQsIHJlbW92ZSB0aGVtXG4gICAgICB3aGlsZSAoc2hpcHNDb24ubGFzdENoaWxkKSB7XG4gICAgICAgIHNoaXBzQ29uLnJlbW92ZUNoaWxkKHNoaXBzQ29uLmxhc3RDaGlsZCk7XG4gICAgICB9XG4gICAgICAvLyBDcmVhdGUgbmV3IHNlbGVjdGFibGUgc2hpcHNcbiAgICAgIHBvcHVsYXRlQWxsU2hpcHMoKTtcbiAgICAgIC8vIENsZWFyIHBsYXllcnMgc2hpcHNcbiAgICAgIHBsYXllci5ib2FyZC5zaGlwcyA9IFtdO1xuICAgICAgLy8gQ2xlYXIgdGhlIGdhbWVib2FyZFxuICAgICAgcmVsb2FkR2FtZWJvYXJkR3JpZCgpO1xuXG4gICAgICAvLyBNYWtlIHN1cmUgdXNlciBjYW4ndCBnbyB0byBiYXR0bGUgbm93XG4gICAgICBuZXh0QnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJwbGFjZW1lbnROZXh0QnRuUmVhZHlcIik7XG4gICAgICBuZXh0UmVhZHkgPSBmYWxzZTtcbiAgICB9KTtcblxuICAgIGNvbnN0IG5leHRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIG5leHRCdG4uY2xhc3NMaXN0LmFkZChcInBsYWNlbWVudE5leHRCdG5cIiwgXCJidG5cIik7XG4gICAgbmV4dEJ0bi50ZXh0Q29udGVudCA9IFwiTkVYVFwiO1xuXG4gICAgbmV4dEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgLy8gT25seSBpZiBhbGwgc2hpcHMgYXJlIHBsYWNlZFxuICAgICAgaWYgKG5leHRSZWFkeSA9PSB0cnVlKSB7XG4gICAgICAgIC8vIENyZWF0ZSBuaWNlIHRyYW5zaXN0aW9uIGJlZm9yZSBjbGVhcmluZyBhbmQgcmVzb2x2aW5nXG4gICAgICAgIGNvbnRlbnQuc3R5bGUucmlnaHQgPSBcIjMwMHZ3XCI7XG4gICAgICAgIGNvbnRlbnQuc3R5bGUudHJhbnNpdGlvbiA9IFwiNHMgZWFzZS1pblwiO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGNvbnRlbnQpO1xuICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgfSwgNDAwMCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBBcHBlbmluZ1xuICAgIGxvd2VyQnRuQ29uLmFwcGVuZENoaWxkKHJlc2V0QnRuKTtcbiAgICBsb3dlckJ0bkNvbi5hcHBlbmRDaGlsZChuZXh0QnRuKTtcblxuICAgIC8vIEFwcGVuZGluZyBsYXN0XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXJDb24pO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZHJhZ0FuZERyb3BDb24pO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobG93ZXJCdG5Db24pO1xuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250ZW50KTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29udGVudC5zdHlsZS5yaWdodCA9IFwiLTEwMHZ3XCI7XG4gICAgfSwgNTApO1xuICB9KTtcbn07XG5cbmNvbnN0IHNldHRpbmdzRE9NID0gKCkgPT4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICBjb25zdCBzZXR0aW5nSWNvbiA9IG5ldyBJbWFnZSgpO1xuICAgIHNldHRpbmdJY29uLnNyYyA9IHNldHRpbmdJY29uU3JjO1xuXG4gICAgc2V0dGluZ0ljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHt9KTtcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2V0dGluZ0ljb24pO1xuICB9KTtcbn07XG5cbmV4cG9ydCB7IGxvYWRpbmdTY3JlZW4sIHR3b1BsYXllciB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL2NvbnRyb2xsZXJcIjtcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
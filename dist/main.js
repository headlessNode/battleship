/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/gameBoard.js":
/*!**********************************!*\
  !*** ./src/modules/gameBoard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship.js */ "./src/modules/ship.js");


class Gameboard {
  constructor() {
    this.coordinates = [
      [
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
      ],
      [
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
      ],
      [
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
      ],
      [
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
      ],
      [
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
      ],
      [
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
      ],
      [
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
      ],
      [
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
      ],
      [
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
      ],
      [
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
      ],
    ];
  }
  //Gameboards should be able to place ships at specific coordinates by calling the ship factory function.
  placeShip(shipLength, position, shipOrientation) {
    const shipObject = new _ship_js__WEBPACK_IMPORTED_MODULE_0__["default"](shipLength, shipOrientation);
    shipObject.startPostion = position;
    const positionRow = position[0];
    const positionCol = position[1];
    if (this.coordinates[positionRow][positionCol].ship === null) {
      if (shipObject.orientation === 'H') {
        const shipEndpoint = positionCol + (shipObject.length - 1);
        shipObject.endPosition = shipEndpoint;
        if (shipObject.endPosition <= 9) {
          for (let i = 0; i < this.coordinates.length; i++) {
            for (let j = 0; j < this.coordinates[i].length; j++) {
              if (i === positionRow && j >= positionCol && j <= shipEndpoint) {
                if (this.coordinates[i][j].ship === null) {
                  this.coordinates[i][j].ship = shipObject;
                } else {
                  throw new Error('Invalid position: Already contains a ship');
                }
              }
            }
          }
        } else {
          throw new Error('Invalid Position: Out of bounds.');
        }
      } else if (shipObject.orientation === 'V') {
        const shipEndpoint = positionRow + (shipObject.length - 1);
        shipObject.endPosition = shipEndpoint;
        if (shipObject.endPosition <= 9) {
          for (let i = 0; i < this.coordinates.length; i++) {
            for (let j = 0; j < this.coordinates[i].length; j++) {
              if (j === positionCol && i >= positionRow && i <= shipEndpoint) {
                if (this.coordinates[i][j].ship === null) {
                  this.coordinates[i][j].ship = shipObject;
                } else {
                  throw new Error('Invalid position: Already contains a ship');
                }
              }
            }
          }
        } else {
          throw new Error('Invalid Position: Out of bounds.');
        }
      }
    } else {
      throw new Error('Invalid position: Already contains a ship');
    }
  }
  receiveAttack(position) {
    const positionRow = position[0];
    const positionCol = position[1];
    this.coordinates[positionRow].forEach((value, index) => {
      if (index === positionCol) {
        if (value.isHit === false && value.ship !== null) {
          value.ship.hit();
          value.isHit = true;
          if (value.ship.isSunk()) {
            for (let i = 0; i < this.coordinates.length; i++) {
              for (let j = 0; j < this.coordinates[i].length; j++) {
                if (this.coordinates[i][j].ship === value.ship) {
                  this.coordinates[i][j].isSunk = true;
                }
              }
            }
          }
        } else if (value.isHit === false && value.ship === null) {
          value.isHit = true;
        }
      }
    });
  }
  allShipsSunk() {
    let shipsNotSunk = [];
    for (let i = 0; i < this.coordinates.length; i++) {
      for (let j = 0; j < this.coordinates[i].length; j++) {
        if (
          this.coordinates[i][j].ship !== null &&
          this.coordinates[i][j].isSunk === false
        ) {
          shipsNotSunk.push(this.coordinates[i][j].ship);
        }
      }
    }
    if (shipsNotSunk.length > 0) {
      return false;
    } else {
      return true;
    }
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);


/***/ }),

/***/ "./src/modules/player.js":
/*!*******************************!*\
  !*** ./src/modules/player.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Player {
  constructor(name, board) {
    this.name = name;
    this.board = board;
  }

  //method to place ships
  placeShipOnBoard(shipLength, position, orientation) {
    this.board.placeShip(shipLength, position, orientation);
  }
  //method to attack enemy
  attackEnemy(coordinates, enemyPlayer) {
    enemyPlayer.board.receiveAttack(coordinates);
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);


/***/ }),

/***/ "./src/modules/ship.js":
/*!*****************************!*\
  !*** ./src/modules/ship.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Ship {
  #nHits;
  constructor(length, orientation) {
    this.#nHits = 0;
    this.length = length;
    this.orientation = orientation;
    this.startPostion = null;
    this.endPosition = null;
  }
  hit() {
    if (this.#nHits < this.length) {
      this.#nHits++;
    } else {
      throw new Error('Hits cannot exceed length');
    }
  }
  isSunk() {
    if (this.length === this.#nHits) {
      return true;
    } else {
      return false;
    }
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);


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
/******/ 			// no module.id needed
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
/************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*****************************!*\
  !*** ./src/modules/main.js ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _gameBoard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameBoard.js */ "./src/modules/gameBoard.js");
/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player.js */ "./src/modules/player.js");



function getPlayerName() {
  return prompt('Enter your name:');
}

const gameController = (() => {
  //create gameboards
  const playerGameBoard = new _gameBoard_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
  const computerGameBoard = new _gameBoard_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
  //create players
  const humanPlayer = new _player_js__WEBPACK_IMPORTED_MODULE_1__["default"](getPlayerName(), playerGameBoard);
  const aiPlayer = new _player_js__WEBPACK_IMPORTED_MODULE_1__["default"]('AI', computerGameBoard);
  //place ships
  const shipSizes = [1, 1, 1, 1, 2, 2, 2, 3, 3, 4];
  humanPlayer.placeShipOnBoard(1, [0, 0], 'V');
  humanPlayer.placeShipOnBoard(1, [9, 2], 'V');
  humanPlayer.placeShipOnBoard(1, [5, 3], 'V');
  humanPlayer.placeShipOnBoard(1, [2, 7], 'V');
  humanPlayer.placeShipOnBoard(2, [0, 3], 'V');
  humanPlayer.placeShipOnBoard(2, [3, 9], 'V');
  humanPlayer.placeShipOnBoard(2, [7, 6], 'V');
  humanPlayer.placeShipOnBoard(3, [6, 1], 'V');
  humanPlayer.placeShipOnBoard(3, [7, 3], 'V');
  humanPlayer.placeShipOnBoard(4, [3, 3], 'H');

  aiPlayer.placeShipOnBoard(1, [0, 0], 'V');
  aiPlayer.placeShipOnBoard(1, [9, 2], 'V');
  aiPlayer.placeShipOnBoard(1, [5, 3], 'V');
  aiPlayer.placeShipOnBoard(1, [2, 7], 'V');
  aiPlayer.placeShipOnBoard(2, [0, 3], 'V');
  aiPlayer.placeShipOnBoard(2, [3, 9], 'V');
  aiPlayer.placeShipOnBoard(2, [7, 6], 'V');
  aiPlayer.placeShipOnBoard(3, [6, 1], 'V');
  aiPlayer.placeShipOnBoard(3, [7, 3], 'V');
  aiPlayer.placeShipOnBoard(4, [3, 3], 'H');
})();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBNkI7O0FBRTdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSx5Q0FBeUM7QUFDbkQsVUFBVSx5Q0FBeUM7QUFDbkQsVUFBVSx5Q0FBeUM7QUFDbkQsVUFBVSx5Q0FBeUM7QUFDbkQsVUFBVSx5Q0FBeUM7QUFDbkQsVUFBVSx5Q0FBeUM7QUFDbkQsVUFBVSx5Q0FBeUM7QUFDbkQsVUFBVSx5Q0FBeUM7QUFDbkQsVUFBVSx5Q0FBeUM7QUFDbkQsVUFBVSx5Q0FBeUM7QUFDbkQ7QUFDQTtBQUNBLFVBQVUseUNBQXlDO0FBQ25ELFVBQVUseUNBQXlDO0FBQ25ELFVBQVUseUNBQXlDO0FBQ25ELFVBQVUseUNBQXlDO0FBQ25ELFVBQVUseUNBQXlDO0FBQ25ELFVBQVUseUNBQXlDO0FBQ25ELFVBQVUseUNBQXlDO0FBQ25ELFVBQVUseUNBQXlDO0FBQ25ELFVBQVUseUNBQXlDO0FBQ25ELFVBQVUseUNBQXlDO0FBQ25EO0FBQ0E7QUFDQSxVQUFVLHlDQUF5QztBQUNuRCxVQUFVLHlDQUF5QztBQUNuRCxVQUFVLHlDQUF5QztBQUNuRCxVQUFVLHlDQUF5QztBQUNuRCxVQUFVLHlDQUF5QztBQUNuRCxVQUFVLHlDQUF5QztBQUNuRCxVQUFVLHlDQUF5QztBQUNuRCxVQUFVLHlDQUF5QztBQUNuRCxVQUFVLHlDQUF5QztBQUNuRCxVQUFVLHlDQUF5QztBQUNuRDtBQUNBO0FBQ0EsVUFBVSx5Q0FBeUM7QUFDbkQsVUFBVSx5Q0FBeUM7QUFDbkQsVUFBVSx5Q0FBeUM7QUFDbkQsVUFBVSx5Q0FBeUM7QUFDbkQsVUFBVSx5Q0FBeUM7QUFDbkQsVUFBVSx5Q0FBeUM7QUFDbkQsVUFBVSx5Q0FBeUM7QUFDbkQsVUFBVSx5Q0FBeUM7QUFDbkQsVUFBVSx5Q0FBeUM7QUFDbkQsVUFBVSx5Q0FBeUM7QUFDbkQ7QUFDQTtBQUNBLFVBQVUseUNBQXlDO0FBQ25ELFVBQVUseUNBQXlDO0FBQ25ELFVBQVUseUNBQXlDO0FBQ25ELFVBQVUseUNBQXlDO0FBQ25ELFVBQVUseUNBQXlDO0FBQ25ELFVBQVUseUNBQXlDO0FBQ25ELFVBQVUseUNBQXlDO0FBQ25ELFVBQVUseUNBQXlDO0FBQ25ELFVBQVUseUNBQXlDO0FBQ25ELFVBQVUseUNBQXlDO0FBQ25EO0FBQ0E7QUFDQSxVQUFVLHlDQUF5QztBQUNuRCxVQUFVLHlDQUF5QztBQUNuRCxVQUFVLHlDQUF5QztBQUNuRCxVQUFVLHlDQUF5QztBQUNuRCxVQUFVLHlDQUF5QztBQUNuRCxVQUFVLHlDQUF5QztBQUNuRCxVQUFVLHlDQUF5QztBQUNuRCxVQUFVLHlDQUF5QztBQUNuRCxVQUFVLHlDQUF5QztBQUNuRCxVQUFVLHlDQUF5QztBQUNuRDtBQUNBO0FBQ0EsVUFBVSx5Q0FBeUM7QUFDbkQsVUFBVSx5Q0FBeUM7QUFDbkQsVUFBVSx5Q0FBeUM7QUFDbkQsVUFBVSx5Q0FBeUM7QUFDbkQsVUFBVSx5Q0FBeUM7QUFDbkQsVUFBVSx5Q0FBeUM7QUFDbkQsVUFBVSx5Q0FBeUM7QUFDbkQsVUFBVSx5Q0FBeUM7QUFDbkQsVUFBVSx5Q0FBeUM7QUFDbkQsVUFBVSx5Q0FBeUM7QUFDbkQ7QUFDQTtBQUNBLFVBQVUseUNBQXlDO0FBQ25ELFVBQVUseUNBQXlDO0FBQ25ELFVBQVUseUNBQXlDO0FBQ25ELFVBQVUseUNBQXlDO0FBQ25ELFVBQVUseUNBQXlDO0FBQ25ELFVBQVUseUNBQXlDO0FBQ25ELFVBQVUseUNBQXlDO0FBQ25ELFVBQVUseUNBQXlDO0FBQ25ELFVBQVUseUNBQXlDO0FBQ25ELFVBQVUseUNBQXlDO0FBQ25EO0FBQ0E7QUFDQSxVQUFVLHlDQUF5QztBQUNuRCxVQUFVLHlDQUF5QztBQUNuRCxVQUFVLHlDQUF5QztBQUNuRCxVQUFVLHlDQUF5QztBQUNuRCxVQUFVLHlDQUF5QztBQUNuRCxVQUFVLHlDQUF5QztBQUNuRCxVQUFVLHlDQUF5QztBQUNuRCxVQUFVLHlDQUF5QztBQUNuRCxVQUFVLHlDQUF5QztBQUNuRCxVQUFVLHlDQUF5QztBQUNuRDtBQUNBO0FBQ0EsVUFBVSx5Q0FBeUM7QUFDbkQsVUFBVSx5Q0FBeUM7QUFDbkQsVUFBVSx5Q0FBeUM7QUFDbkQsVUFBVSx5Q0FBeUM7QUFDbkQsVUFBVSx5Q0FBeUM7QUFDbkQsVUFBVSx5Q0FBeUM7QUFDbkQsVUFBVSx5Q0FBeUM7QUFDbkQsVUFBVSx5Q0FBeUM7QUFDbkQsVUFBVSx5Q0FBeUM7QUFDbkQsVUFBVSx5Q0FBeUM7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixnREFBSTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLDZCQUE2QjtBQUN2RCw0QkFBNEIsZ0NBQWdDO0FBQzVEO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLDZCQUE2QjtBQUN2RCw0QkFBNEIsZ0NBQWdDO0FBQzVEO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsNkJBQTZCO0FBQ3pELDhCQUE4QixnQ0FBZ0M7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNkJBQTZCO0FBQ2pELHNCQUFzQixnQ0FBZ0M7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsU0FBUyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUMxTnpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsTUFBTSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNmdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxJQUFJLEVBQUM7Ozs7Ozs7VUN6QnBCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTnVDO0FBQ047O0FBRWpDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsOEJBQThCLHFEQUFTO0FBQ3ZDLGdDQUFnQyxxREFBUztBQUN6QztBQUNBLDBCQUEwQixrREFBTTtBQUNoQyx1QkFBdUIsa0RBQU07QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9nYW1lQm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNoaXAgZnJvbSAnLi9zaGlwLmpzJztcblxuY2xhc3MgR2FtZWJvYXJkIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5jb29yZGluYXRlcyA9IFtcbiAgICAgIFtcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UsIGlzU3VuazogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UsIGlzU3VuazogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UsIGlzU3VuazogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UsIGlzU3VuazogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UsIGlzU3VuazogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UsIGlzU3VuazogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UsIGlzU3VuazogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UsIGlzU3VuazogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UsIGlzU3VuazogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UsIGlzU3VuazogZmFsc2UgfSxcbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIHsgc2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlLCBpc1N1bms6IGZhbHNlIH0sXG4gICAgICAgIHsgc2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlLCBpc1N1bms6IGZhbHNlIH0sXG4gICAgICAgIHsgc2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlLCBpc1N1bms6IGZhbHNlIH0sXG4gICAgICAgIHsgc2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlLCBpc1N1bms6IGZhbHNlIH0sXG4gICAgICAgIHsgc2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlLCBpc1N1bms6IGZhbHNlIH0sXG4gICAgICAgIHsgc2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlLCBpc1N1bms6IGZhbHNlIH0sXG4gICAgICAgIHsgc2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlLCBpc1N1bms6IGZhbHNlIH0sXG4gICAgICAgIHsgc2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlLCBpc1N1bms6IGZhbHNlIH0sXG4gICAgICAgIHsgc2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlLCBpc1N1bms6IGZhbHNlIH0sXG4gICAgICAgIHsgc2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlLCBpc1N1bms6IGZhbHNlIH0sXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSwgaXNTdW5rOiBmYWxzZSB9LFxuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSwgaXNTdW5rOiBmYWxzZSB9LFxuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSwgaXNTdW5rOiBmYWxzZSB9LFxuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSwgaXNTdW5rOiBmYWxzZSB9LFxuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSwgaXNTdW5rOiBmYWxzZSB9LFxuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSwgaXNTdW5rOiBmYWxzZSB9LFxuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSwgaXNTdW5rOiBmYWxzZSB9LFxuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSwgaXNTdW5rOiBmYWxzZSB9LFxuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSwgaXNTdW5rOiBmYWxzZSB9LFxuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSwgaXNTdW5rOiBmYWxzZSB9LFxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UsIGlzU3VuazogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UsIGlzU3VuazogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UsIGlzU3VuazogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UsIGlzU3VuazogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UsIGlzU3VuazogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UsIGlzU3VuazogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UsIGlzU3VuazogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UsIGlzU3VuazogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UsIGlzU3VuazogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UsIGlzU3VuazogZmFsc2UgfSxcbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIHsgc2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlLCBpc1N1bms6IGZhbHNlIH0sXG4gICAgICAgIHsgc2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlLCBpc1N1bms6IGZhbHNlIH0sXG4gICAgICAgIHsgc2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlLCBpc1N1bms6IGZhbHNlIH0sXG4gICAgICAgIHsgc2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlLCBpc1N1bms6IGZhbHNlIH0sXG4gICAgICAgIHsgc2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlLCBpc1N1bms6IGZhbHNlIH0sXG4gICAgICAgIHsgc2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlLCBpc1N1bms6IGZhbHNlIH0sXG4gICAgICAgIHsgc2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlLCBpc1N1bms6IGZhbHNlIH0sXG4gICAgICAgIHsgc2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlLCBpc1N1bms6IGZhbHNlIH0sXG4gICAgICAgIHsgc2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlLCBpc1N1bms6IGZhbHNlIH0sXG4gICAgICAgIHsgc2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlLCBpc1N1bms6IGZhbHNlIH0sXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSwgaXNTdW5rOiBmYWxzZSB9LFxuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSwgaXNTdW5rOiBmYWxzZSB9LFxuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSwgaXNTdW5rOiBmYWxzZSB9LFxuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSwgaXNTdW5rOiBmYWxzZSB9LFxuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSwgaXNTdW5rOiBmYWxzZSB9LFxuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSwgaXNTdW5rOiBmYWxzZSB9LFxuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSwgaXNTdW5rOiBmYWxzZSB9LFxuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSwgaXNTdW5rOiBmYWxzZSB9LFxuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSwgaXNTdW5rOiBmYWxzZSB9LFxuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSwgaXNTdW5rOiBmYWxzZSB9LFxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UsIGlzU3VuazogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UsIGlzU3VuazogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UsIGlzU3VuazogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UsIGlzU3VuazogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UsIGlzU3VuazogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UsIGlzU3VuazogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UsIGlzU3VuazogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UsIGlzU3VuazogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UsIGlzU3VuazogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UsIGlzU3VuazogZmFsc2UgfSxcbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIHsgc2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlLCBpc1N1bms6IGZhbHNlIH0sXG4gICAgICAgIHsgc2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlLCBpc1N1bms6IGZhbHNlIH0sXG4gICAgICAgIHsgc2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlLCBpc1N1bms6IGZhbHNlIH0sXG4gICAgICAgIHsgc2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlLCBpc1N1bms6IGZhbHNlIH0sXG4gICAgICAgIHsgc2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlLCBpc1N1bms6IGZhbHNlIH0sXG4gICAgICAgIHsgc2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlLCBpc1N1bms6IGZhbHNlIH0sXG4gICAgICAgIHsgc2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlLCBpc1N1bms6IGZhbHNlIH0sXG4gICAgICAgIHsgc2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlLCBpc1N1bms6IGZhbHNlIH0sXG4gICAgICAgIHsgc2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlLCBpc1N1bms6IGZhbHNlIH0sXG4gICAgICAgIHsgc2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlLCBpc1N1bms6IGZhbHNlIH0sXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSwgaXNTdW5rOiBmYWxzZSB9LFxuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSwgaXNTdW5rOiBmYWxzZSB9LFxuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSwgaXNTdW5rOiBmYWxzZSB9LFxuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSwgaXNTdW5rOiBmYWxzZSB9LFxuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSwgaXNTdW5rOiBmYWxzZSB9LFxuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSwgaXNTdW5rOiBmYWxzZSB9LFxuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSwgaXNTdW5rOiBmYWxzZSB9LFxuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSwgaXNTdW5rOiBmYWxzZSB9LFxuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSwgaXNTdW5rOiBmYWxzZSB9LFxuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSwgaXNTdW5rOiBmYWxzZSB9LFxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UsIGlzU3VuazogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UsIGlzU3VuazogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UsIGlzU3VuazogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UsIGlzU3VuazogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UsIGlzU3VuazogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UsIGlzU3VuazogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UsIGlzU3VuazogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UsIGlzU3VuazogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UsIGlzU3VuazogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UsIGlzU3VuazogZmFsc2UgfSxcbiAgICAgIF0sXG4gICAgXTtcbiAgfVxuICAvL0dhbWVib2FyZHMgc2hvdWxkIGJlIGFibGUgdG8gcGxhY2Ugc2hpcHMgYXQgc3BlY2lmaWMgY29vcmRpbmF0ZXMgYnkgY2FsbGluZyB0aGUgc2hpcCBmYWN0b3J5IGZ1bmN0aW9uLlxuICBwbGFjZVNoaXAoc2hpcExlbmd0aCwgcG9zaXRpb24sIHNoaXBPcmllbnRhdGlvbikge1xuICAgIGNvbnN0IHNoaXBPYmplY3QgPSBuZXcgU2hpcChzaGlwTGVuZ3RoLCBzaGlwT3JpZW50YXRpb24pO1xuICAgIHNoaXBPYmplY3Quc3RhcnRQb3N0aW9uID0gcG9zaXRpb247XG4gICAgY29uc3QgcG9zaXRpb25Sb3cgPSBwb3NpdGlvblswXTtcbiAgICBjb25zdCBwb3NpdGlvbkNvbCA9IHBvc2l0aW9uWzFdO1xuICAgIGlmICh0aGlzLmNvb3JkaW5hdGVzW3Bvc2l0aW9uUm93XVtwb3NpdGlvbkNvbF0uc2hpcCA9PT0gbnVsbCkge1xuICAgICAgaWYgKHNoaXBPYmplY3Qub3JpZW50YXRpb24gPT09ICdIJykge1xuICAgICAgICBjb25zdCBzaGlwRW5kcG9pbnQgPSBwb3NpdGlvbkNvbCArIChzaGlwT2JqZWN0Lmxlbmd0aCAtIDEpO1xuICAgICAgICBzaGlwT2JqZWN0LmVuZFBvc2l0aW9uID0gc2hpcEVuZHBvaW50O1xuICAgICAgICBpZiAoc2hpcE9iamVjdC5lbmRQb3NpdGlvbiA8PSA5KSB7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNvb3JkaW5hdGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuY29vcmRpbmF0ZXNbaV0ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgaWYgKGkgPT09IHBvc2l0aW9uUm93ICYmIGogPj0gcG9zaXRpb25Db2wgJiYgaiA8PSBzaGlwRW5kcG9pbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jb29yZGluYXRlc1tpXVtqXS5zaGlwID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLmNvb3JkaW5hdGVzW2ldW2pdLnNoaXAgPSBzaGlwT2JqZWN0O1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgcG9zaXRpb246IEFscmVhZHkgY29udGFpbnMgYSBzaGlwJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBQb3NpdGlvbjogT3V0IG9mIGJvdW5kcy4nKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChzaGlwT2JqZWN0Lm9yaWVudGF0aW9uID09PSAnVicpIHtcbiAgICAgICAgY29uc3Qgc2hpcEVuZHBvaW50ID0gcG9zaXRpb25Sb3cgKyAoc2hpcE9iamVjdC5sZW5ndGggLSAxKTtcbiAgICAgICAgc2hpcE9iamVjdC5lbmRQb3NpdGlvbiA9IHNoaXBFbmRwb2ludDtcbiAgICAgICAgaWYgKHNoaXBPYmplY3QuZW5kUG9zaXRpb24gPD0gOSkge1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb29yZGluYXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmNvb3JkaW5hdGVzW2ldLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgIGlmIChqID09PSBwb3NpdGlvbkNvbCAmJiBpID49IHBvc2l0aW9uUm93ICYmIGkgPD0gc2hpcEVuZHBvaW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY29vcmRpbmF0ZXNbaV1bal0uc2hpcCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgdGhpcy5jb29yZGluYXRlc1tpXVtqXS5zaGlwID0gc2hpcE9iamVjdDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHBvc2l0aW9uOiBBbHJlYWR5IGNvbnRhaW5zIGEgc2hpcCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgUG9zaXRpb246IE91dCBvZiBib3VuZHMuJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHBvc2l0aW9uOiBBbHJlYWR5IGNvbnRhaW5zIGEgc2hpcCcpO1xuICAgIH1cbiAgfVxuICByZWNlaXZlQXR0YWNrKHBvc2l0aW9uKSB7XG4gICAgY29uc3QgcG9zaXRpb25Sb3cgPSBwb3NpdGlvblswXTtcbiAgICBjb25zdCBwb3NpdGlvbkNvbCA9IHBvc2l0aW9uWzFdO1xuICAgIHRoaXMuY29vcmRpbmF0ZXNbcG9zaXRpb25Sb3ddLmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgaWYgKGluZGV4ID09PSBwb3NpdGlvbkNvbCkge1xuICAgICAgICBpZiAodmFsdWUuaXNIaXQgPT09IGZhbHNlICYmIHZhbHVlLnNoaXAgIT09IG51bGwpIHtcbiAgICAgICAgICB2YWx1ZS5zaGlwLmhpdCgpO1xuICAgICAgICAgIHZhbHVlLmlzSGl0ID0gdHJ1ZTtcbiAgICAgICAgICBpZiAodmFsdWUuc2hpcC5pc1N1bmsoKSkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNvb3JkaW5hdGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5jb29yZGluYXRlc1tpXS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNvb3JkaW5hdGVzW2ldW2pdLnNoaXAgPT09IHZhbHVlLnNoaXApIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuY29vcmRpbmF0ZXNbaV1bal0uaXNTdW5rID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodmFsdWUuaXNIaXQgPT09IGZhbHNlICYmIHZhbHVlLnNoaXAgPT09IG51bGwpIHtcbiAgICAgICAgICB2YWx1ZS5pc0hpdCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBhbGxTaGlwc1N1bmsoKSB7XG4gICAgbGV0IHNoaXBzTm90U3VuayA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb29yZGluYXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmNvb3JkaW5hdGVzW2ldLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICB0aGlzLmNvb3JkaW5hdGVzW2ldW2pdLnNoaXAgIT09IG51bGwgJiZcbiAgICAgICAgICB0aGlzLmNvb3JkaW5hdGVzW2ldW2pdLmlzU3VuayA9PT0gZmFsc2VcbiAgICAgICAgKSB7XG4gICAgICAgICAgc2hpcHNOb3RTdW5rLnB1c2godGhpcy5jb29yZGluYXRlc1tpXVtqXS5zaGlwKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoc2hpcHNOb3RTdW5rLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVib2FyZDtcbiIsImNsYXNzIFBsYXllciB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGJvYXJkKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmJvYXJkID0gYm9hcmQ7XG4gIH1cblxuICAvL21ldGhvZCB0byBwbGFjZSBzaGlwc1xuICBwbGFjZVNoaXBPbkJvYXJkKHNoaXBMZW5ndGgsIHBvc2l0aW9uLCBvcmllbnRhdGlvbikge1xuICAgIHRoaXMuYm9hcmQucGxhY2VTaGlwKHNoaXBMZW5ndGgsIHBvc2l0aW9uLCBvcmllbnRhdGlvbik7XG4gIH1cbiAgLy9tZXRob2QgdG8gYXR0YWNrIGVuZW15XG4gIGF0dGFja0VuZW15KGNvb3JkaW5hdGVzLCBlbmVteVBsYXllcikge1xuICAgIGVuZW15UGxheWVyLmJvYXJkLnJlY2VpdmVBdHRhY2soY29vcmRpbmF0ZXMpO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBQbGF5ZXI7XG4iLCJjbGFzcyBTaGlwIHtcbiAgI25IaXRzO1xuICBjb25zdHJ1Y3RvcihsZW5ndGgsIG9yaWVudGF0aW9uKSB7XG4gICAgdGhpcy4jbkhpdHMgPSAwO1xuICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xuICAgIHRoaXMub3JpZW50YXRpb24gPSBvcmllbnRhdGlvbjtcbiAgICB0aGlzLnN0YXJ0UG9zdGlvbiA9IG51bGw7XG4gICAgdGhpcy5lbmRQb3NpdGlvbiA9IG51bGw7XG4gIH1cbiAgaGl0KCkge1xuICAgIGlmICh0aGlzLiNuSGl0cyA8IHRoaXMubGVuZ3RoKSB7XG4gICAgICB0aGlzLiNuSGl0cysrO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0hpdHMgY2Fubm90IGV4Y2VlZCBsZW5ndGgnKTtcbiAgICB9XG4gIH1cbiAgaXNTdW5rKCkge1xuICAgIGlmICh0aGlzLmxlbmd0aCA9PT0gdGhpcy4jbkhpdHMpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNoaXA7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBHYW1lYm9hcmQgZnJvbSAnLi9nYW1lQm9hcmQuanMnO1xuaW1wb3J0IFBsYXllciBmcm9tICcuL3BsYXllci5qcyc7XG5cbmZ1bmN0aW9uIGdldFBsYXllck5hbWUoKSB7XG4gIHJldHVybiBwcm9tcHQoJ0VudGVyIHlvdXIgbmFtZTonKTtcbn1cblxuY29uc3QgZ2FtZUNvbnRyb2xsZXIgPSAoKCkgPT4ge1xuICAvL2NyZWF0ZSBnYW1lYm9hcmRzXG4gIGNvbnN0IHBsYXllckdhbWVCb2FyZCA9IG5ldyBHYW1lYm9hcmQoKTtcbiAgY29uc3QgY29tcHV0ZXJHYW1lQm9hcmQgPSBuZXcgR2FtZWJvYXJkKCk7XG4gIC8vY3JlYXRlIHBsYXllcnNcbiAgY29uc3QgaHVtYW5QbGF5ZXIgPSBuZXcgUGxheWVyKGdldFBsYXllck5hbWUoKSwgcGxheWVyR2FtZUJvYXJkKTtcbiAgY29uc3QgYWlQbGF5ZXIgPSBuZXcgUGxheWVyKCdBSScsIGNvbXB1dGVyR2FtZUJvYXJkKTtcbiAgLy9wbGFjZSBzaGlwc1xuICBjb25zdCBzaGlwU2l6ZXMgPSBbMSwgMSwgMSwgMSwgMiwgMiwgMiwgMywgMywgNF07XG4gIGh1bWFuUGxheWVyLnBsYWNlU2hpcE9uQm9hcmQoMSwgWzAsIDBdLCAnVicpO1xuICBodW1hblBsYXllci5wbGFjZVNoaXBPbkJvYXJkKDEsIFs5LCAyXSwgJ1YnKTtcbiAgaHVtYW5QbGF5ZXIucGxhY2VTaGlwT25Cb2FyZCgxLCBbNSwgM10sICdWJyk7XG4gIGh1bWFuUGxheWVyLnBsYWNlU2hpcE9uQm9hcmQoMSwgWzIsIDddLCAnVicpO1xuICBodW1hblBsYXllci5wbGFjZVNoaXBPbkJvYXJkKDIsIFswLCAzXSwgJ1YnKTtcbiAgaHVtYW5QbGF5ZXIucGxhY2VTaGlwT25Cb2FyZCgyLCBbMywgOV0sICdWJyk7XG4gIGh1bWFuUGxheWVyLnBsYWNlU2hpcE9uQm9hcmQoMiwgWzcsIDZdLCAnVicpO1xuICBodW1hblBsYXllci5wbGFjZVNoaXBPbkJvYXJkKDMsIFs2LCAxXSwgJ1YnKTtcbiAgaHVtYW5QbGF5ZXIucGxhY2VTaGlwT25Cb2FyZCgzLCBbNywgM10sICdWJyk7XG4gIGh1bWFuUGxheWVyLnBsYWNlU2hpcE9uQm9hcmQoNCwgWzMsIDNdLCAnSCcpO1xuXG4gIGFpUGxheWVyLnBsYWNlU2hpcE9uQm9hcmQoMSwgWzAsIDBdLCAnVicpO1xuICBhaVBsYXllci5wbGFjZVNoaXBPbkJvYXJkKDEsIFs5LCAyXSwgJ1YnKTtcbiAgYWlQbGF5ZXIucGxhY2VTaGlwT25Cb2FyZCgxLCBbNSwgM10sICdWJyk7XG4gIGFpUGxheWVyLnBsYWNlU2hpcE9uQm9hcmQoMSwgWzIsIDddLCAnVicpO1xuICBhaVBsYXllci5wbGFjZVNoaXBPbkJvYXJkKDIsIFswLCAzXSwgJ1YnKTtcbiAgYWlQbGF5ZXIucGxhY2VTaGlwT25Cb2FyZCgyLCBbMywgOV0sICdWJyk7XG4gIGFpUGxheWVyLnBsYWNlU2hpcE9uQm9hcmQoMiwgWzcsIDZdLCAnVicpO1xuICBhaVBsYXllci5wbGFjZVNoaXBPbkJvYXJkKDMsIFs2LCAxXSwgJ1YnKTtcbiAgYWlQbGF5ZXIucGxhY2VTaGlwT25Cb2FyZCgzLCBbNywgM10sICdWJyk7XG4gIGFpUGxheWVyLnBsYWNlU2hpcE9uQm9hcmQoNCwgWzMsIDNdLCAnSCcpO1xufSkoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
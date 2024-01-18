import Ship from './ship.js';
import Gameboard from './gameBoard.js';

const gameBoardOne = new Gameboard();

const shipOne = gameBoardOne.placeShip(3, [2, 3], 'H');
const shipTwo = gameBoardOne.placeShip(4, [3, 1], 'V');

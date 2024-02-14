import '../styles/style.css';
import Gameboard from './gameBoard.js';
import { Player } from './player.js';
import { initializeDOM } from './dom.js';

function generateRandomCoordinates() {
  const yIndex = Math.floor(Math.random() * 10);
  const xIndex = Math.floor(Math.random() * 10);
  return [yIndex, xIndex];
}

export function placeEnemyShips(aiPlayer) {
  const shipSizes = [1, 1, 1, 1, 2, 2, 2, 3, 3, 4];
  const orientations = ['V', 'H'];

  shipSizes.forEach((size) => {
    let isPlacementValid = false;
    let coordinates, orientation;

    do {
      coordinates = generateRandomCoordinates();
      orientation =
        orientations[Math.floor(Math.random() * orientations.length)];

      try {
        aiPlayer.placeShipOnBoard(size, coordinates, orientation);
        isPlacementValid = true;
      } catch (error) {
        isPlacementValid = false;
      }
    } while (!isPlacementValid);
  });
}

export function initializeGame() {
  //create gameboards
  const playerGameBoard = new Gameboard();
  const computerGameBoard = new Gameboard();
  //create players
  const humanPlayer = new Player('Human', playerGameBoard);
  const aiPlayer = new Player('AI', computerGameBoard);

  initializeDOM(humanPlayer, aiPlayer);
}

initializeGame();

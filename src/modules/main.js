import '../styles/style.css';
import Gameboard from './gameBoard.js';
import Player from './player.js';

function getPlayerName() {
  return prompt('Enter your name:');
}

function renderGameBoards(humanBoard, aiBoard) {
  const boardOne = document.querySelector('.board-one');
  const boardTwo = document.querySelector('.board-two');

  for (let i = 0; i <= 9; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
    boardOne.appendChild(row);
    for (let j = 0; j <= 9; j++) {
      const block = document.createElement('div');
      block.classList.add('block');
      row.appendChild('block');
    }
  }
}

const gameController = (() => {
  //create gameboards
  const playerGameBoard = new Gameboard();
  const computerGameBoard = new Gameboard();
  //create players
  const humanPlayer = new Player(getPlayerName(), playerGameBoard);
  const aiPlayer = new Player('AI', computerGameBoard);
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
  //render gameboards
  renderGameBoards(humanPlayer.board, aiPlayer.board);
})();

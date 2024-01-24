import '../styles/style.css';
import Gameboard from './gameBoard.js';
import Player from './player.js';

function getPlayerName() {
  return prompt('Enter your name:');
}

function renderGameBoards(humanBoard, aiBoard) {
  const boardOne = document.querySelector('.board-one');
  const boardTwo = document.querySelector('.board-two');
  //create board for humanPlayer
  for (let i = 0; i <= 9; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
    boardOne.appendChild(row);
    for (let j = 0; j <= 9; j++) {
      const block = document.createElement('div');
      block.classList.add('block');
      block.dataset.xIndex = j;
      block.dataset.yIndex = i;
      if (
        //for ship with vertical orientation
        humanBoard.coordinates[i][j].ship !== null &&
        humanBoard.coordinates[i][j].ship !== 'x' &&
        humanBoard.coordinates[i][j].ship.orientation === 'V'
      ) {
        block.classList.add('ship-present');
        block.style.border = '2px solid #00f';
        block.style.background = 'rgba(0,0,255,.05)';
        //if there is a ship-part below
        if (
          i + 1 <= 9 &&
          humanBoard.coordinates[i + 1][j].ship !== null &&
          humanBoard.coordinates[i + 1][j].ship !== 'x'
        ) {
          block.style.borderBottom = 'none';
          block.style.borderBottom = '1px solid #b4b4ff';
        }
        //if there is a ship-part above
        if (
          i - 1 >= 0 &&
          humanBoard.coordinates[i - 1][j].ship !== null &&
          humanBoard.coordinates[i - 1][j].ship !== 'x'
        ) {
          block.style.borderTop = 'none';
          block.style.borderTop = '1px solid #b4b4ff';
        }
        //for ship with horizontal orientation
      } else if (
        humanBoard.coordinates[i][j].ship !== null &&
        humanBoard.coordinates[i][j].ship !== 'x' &&
        humanBoard.coordinates[i][j].ship.orientation === 'H'
      ) {
        block.classList.add('ship-present');
        block.style.border = '2px solid #00f';
        block.style.background = 'rgba(0,0,255,.05)';
        //if there is a ship-part to the right
        if (
          j + 1 <= 9 &&
          humanBoard.coordinates[i][j + 1].ship !== null &&
          humanBoard.coordinates[i][j + 1].ship !== 'x'
        ) {
          block.style.borderRight = 'none';
          block.style.borderRight = '1px solid #b4b4ff';
        }
        if (
          j - 1 >= 0 &&
          humanBoard.coordinates[i][j - 1].ship !== null &&
          humanBoard.coordinates[i][j - 1].ship !== 'x'
        ) {
          block.style.borderLeft = 'none';
          block.style.borderLeft = '1px solid #b4b4ff';
        }
      } else {
        block.style.border = '1px solid #b4b4ff';
      }
      row.appendChild(block);
    }
  }
  //create board for aiPlayer
  for (let i = 0; i <= 9; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
    boardTwo.appendChild(row);
    for (let j = 0; j <= 9; j++) {
      const block = document.createElement('div');
      block.classList.add('block');
      block.dataset.xIndex = j;
      block.dataset.yIndex = i;
      if (
        //for ship with vertical orientation
        aiBoard.coordinates[i][j].ship !== null &&
        aiBoard.coordinates[i][j].ship !== 'x' &&
        aiBoard.coordinates[i][j].ship.orientation === 'V'
      ) {
        block.classList.add('ship-present');
        block.style.border = '2px solid #00f';
        block.style.background = 'rgba(0,0,255,.05)';
        //if there is a ship-part below
        if (
          i + 1 <= 9 &&
          aiBoard.coordinates[i + 1][j].ship !== null &&
          aiBoard.coordinates[i + 1][j].ship !== 'x'
        ) {
          block.style.borderBottom = 'none';
          block.style.borderBottom = '1px solid #b4b4ff';
        }
        //if there is a ship-part above
        if (
          i - 1 >= 0 &&
          aiBoard.coordinates[i - 1][j].ship !== null &&
          aiBoard.coordinates[i - 1][j].ship !== 'x'
        ) {
          block.style.borderTop = 'none';
          block.style.borderTop = '1px solid #b4b4ff';
        }
        //for ship with horizontal orientation
      } else if (
        aiBoard.coordinates[i][j].ship !== null &&
        aiBoard.coordinates[i][j].ship !== 'x' &&
        aiBoard.coordinates[i][j].ship.orientation === 'H'
      ) {
        block.classList.add('ship-present');
        block.style.border = '2px solid #00f';
        block.style.background = 'rgba(0,0,255,.05)';
        //if there is a ship-part to the right
        if (
          j + 1 <= 9 &&
          aiBoard.coordinates[i][j + 1].ship !== null &&
          aiBoard.coordinates[i][j + 1].ship !== 'x'
        ) {
          block.style.borderRight = 'none';
          block.style.borderRight = '1px solid #b4b4ff';
        }
        if (
          j - 1 >= 0 &&
          aiBoard.coordinates[i][j - 1].ship !== null &&
          aiBoard.coordinates[i][j - 1].ship !== 'x'
        ) {
          block.style.borderLeft = 'none';
          block.style.borderLeft = '1px solid #b4b4ff';
        }
      } else {
        block.style.border = '1px solid #b4b4ff';
      }
      row.appendChild(block);
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
  humanPlayer.placeShipOnBoard(1, [0, 9], 'V');
  humanPlayer.placeShipOnBoard(1, [9, 0], 'V');
  humanPlayer.placeShipOnBoard(1, [9, 9], 'V');
  humanPlayer.placeShipOnBoard(2, [1, 5], 'V');
  humanPlayer.placeShipOnBoard(2, [6, 3], 'V');
  humanPlayer.placeShipOnBoard(2, [3, 1], 'V');
  humanPlayer.placeShipOnBoard(3, [4, 7], 'V');
  humanPlayer.placeShipOnBoard(3, [4, 5], 'V');
  humanPlayer.placeShipOnBoard(4, [9, 2], 'H');

  aiPlayer.placeShipOnBoard(1, [0, 0], 'V');
  aiPlayer.placeShipOnBoard(1, [0, 9], 'V');
  aiPlayer.placeShipOnBoard(1, [9, 0], 'V');
  aiPlayer.placeShipOnBoard(1, [9, 9], 'V');
  aiPlayer.placeShipOnBoard(2, [1, 5], 'V');
  aiPlayer.placeShipOnBoard(2, [6, 3], 'V');
  aiPlayer.placeShipOnBoard(2, [3, 1], 'V');
  aiPlayer.placeShipOnBoard(3, [4, 7], 'V');
  aiPlayer.placeShipOnBoard(3, [4, 5], 'V');
  aiPlayer.placeShipOnBoard(4, [9, 2], 'H');
  //render gameboards
  renderGameBoards(humanPlayer.board, aiPlayer.board);
})();

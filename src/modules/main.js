import '../styles/style.css';
import Gameboard from './gameBoard.js';
import Player from './player.js';
import {
  renderHumanBoard,
  renderAiBoard,
  updateAiBoard,
  updateHumanBoard,
} from './dom.js';

//get player name
//wait for player to attack enemy
//show the attack on enemy board
//enemy turn
//enemy attacks player board
//show the attack on player board
//loop until someone wins

function checkWinCondition(humanPlayer, aiPlayer) {
  if (humanPlayer.board.allShipsSunk()) {
    console.log(`${aiPlayer.name} Won the game.`);
    const blocks = document.querySelectorAll('.board-two .block');
    blocks.forEach((value) => {
      value.removeEventListener('click', clickHandler);
      value.classList.remove('hover');
    });
  } else if (aiPlayer.board.allShipsSunk()) {
    console.log(`${humanPlayer.name} Won the game.`);
    const blocks = document.querySelectorAll('.board-two .block');
    blocks.forEach((value) => {
      value.removeEventListener('click', clickHandler);
      value.classList.remove('hover');
    });
  }
}

function gameLoop(humanPlayer, aiPlayer, attackedCoordinates) {
  humanPlayer.attackEnemy(attackedCoordinates, aiPlayer);
  updateAiBoard(aiPlayer.board, attackedCoordinates);
  const aiAttackCoordinates = aiPlayer.generateAttackCoordinates(humanPlayer);
  aiPlayer.attackEnemy(aiAttackCoordinates, humanPlayer);
  updateHumanBoard(humanPlayer.board, aiAttackCoordinates);
  checkWinCondition(humanPlayer, aiPlayer);
}

function placeEnemyShips(aiPlayer) {
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
}

function placeHumanShips(humanPlayer) {
  return new Promise((resolve, reject) => {
    const initialBoard = document.createElement('div');
    initialBoard.classList.add('initial-board');
    const pageBody = document.querySelector('.page-body');
    pageBody.appendChild(initialBoard);
    //create the board
    for (let i = 0; i <= 9; i++) {
      const row = document.createElement('div');
      row.classList.add('row');
      initialBoard.appendChild(row);
      for (let j = 0; j <= 9; j++) {
        const block = document.createElement('div');
        block.classList.add('block');
        block.classList.add('hover');
        block.dataset.xIndex = j;
        block.dataset.yIndex = i;
        row.appendChild(block);
      }
    }
    const shipSizes = [1, 1, 1, 1, 2, 2, 2, 3, 3, 4];
    let currentShipIndex = 0;
    let isHorizontal = true;
    let isVertical = false;
    //add a button for ship orientation
    const btnContainer = document.createElement('div');
    btnContainer.classList.add('btn-container');
    const currentShip = document.createElement('div');
    currentShip.classList.add('current-ship');
    currentShip.textContent = 'Place your Scout';
    const button = document.createElement('button');
    button.classList.add('orientation-btn');
    button.textContent = 'Horizontal';
    btnContainer.appendChild(currentShip);
    btnContainer.appendChild(button);
    pageBody.appendChild(btnContainer);

    button.addEventListener('click', () => {
      if (isHorizontal && !isVertical) {
        button.textContent = 'Vertical';
        isHorizontal = false;
        isVertical = true;
      } else if (!isHorizontal && isVertical) {
        button.textContent = 'Horizontal';
        isHorizontal = true;
        isVertical = false;
      }
    });
    function updateInitialBoard() {
      for (let i = 0; i <= 9; i++) {
        for (let j = 0; j <= 9; j++) {
          if (
            humanPlayer.board.coordinates[i][j].ship !== null &&
            humanPlayer.board.coordinates[i][j].ship !== 'x'
          ) {
            const shipCell = initialBoard.querySelector(
              `.block[data-x-index="${j}"][data-y-index="${i}"]`,
            );
            if (humanPlayer.board.coordinates[i][j].ship.orientation === 'V') {
              shipCell.style.border = '2px solid #00f';
              shipCell.style.background = 'rgba(0,0,255,.05)';
              //if there is a ship-part below
              if (
                i + 1 <= 9 &&
                humanPlayer.board.coordinates[i + 1][j].ship !== null &&
                humanPlayer.board.coordinates[i + 1][j].ship !== 'x'
              ) {
                shipCell.style.borderBottom = 'none';
                shipCell.style.borderBottom = '1px solid #b4b4ff';
              }
              //if there is a ship-part above
              if (
                i - 1 >= 0 &&
                humanPlayer.board.coordinates[i - 1][j].ship !== null &&
                humanPlayer.board.coordinates[i - 1][j].ship !== 'x'
              ) {
                shipCell.style.borderTop = 'none';
                shipCell.style.borderTop = '1px solid #b4b4ff';
              }
              //for ship with horizontal orientation
            } else if (
              humanPlayer.board.coordinates[i][j].ship.orientation === 'H'
            ) {
              shipCell.style.border = '2px solid #00f';
              shipCell.style.background = 'rgba(0,0,255,.05)';
              //if there is a ship-part to the right
              if (
                j + 1 <= 9 &&
                humanPlayer.board.coordinates[i][j + 1].ship !== null &&
                humanPlayer.board.coordinates[i][j + 1].ship !== 'x'
              ) {
                shipCell.style.borderRight = 'none';
                shipCell.style.borderRight = '1px solid #b4b4ff';
              }
              if (
                j - 1 >= 0 &&
                humanPlayer.board.coordinates[i][j - 1].ship !== null &&
                humanPlayer.board.coordinates[i][j - 1].ship !== 'x'
              ) {
                shipCell.style.borderLeft = 'none';
                shipCell.style.borderLeft = '1px solid #b4b4ff';
              }
            }
          }
        }
      }
    }
    function handleBlockClick(e) {
      if (shipSizes[currentShipIndex + 1] === 1) {
        currentShip.textContent = 'Place your Scout';
      } else if (shipSizes[currentShipIndex + 1] === 2) {
        currentShip.textContent = 'Place your Ketch';
      } else if (shipSizes[currentShipIndex + 1] === 3) {
        currentShip.textContent = 'Place your Brig';
      } else if (shipSizes[currentShipIndex + 1] === 4) {
        currentShip.textContent = 'Place your Man-of-War';
      }
      const blockClicked = e.target;
      const xIndex = parseInt(blockClicked.dataset.xIndex);
      const yIndex = parseInt(blockClicked.dataset.yIndex);
      let orientation;
      if (isHorizontal && !isVertical) {
        orientation = 'H';
      } else if (!isHorizontal && isVertical) {
        orientation = 'V';
      }
      try {
        humanPlayer.placeShipOnBoard(
          shipSizes[currentShipIndex],
          [yIndex, xIndex],
          orientation,
        );
        updateInitialBoard();
        currentShipIndex++;
        if (currentShipIndex === shipSizes.length) {
          resolve();
        }
      } catch (error) {
        if (error.message === 'Invalid position: Already contains a ship') {
          window.alert(
            'Invalid Position: Already contains a ship or is immediately adjacent to a ship',
          );
        } else if (error.message === 'Invalid Position: Out of bounds.') {
          window.alert('Invalid Position: Out of bounds');
        }
      }
    }

    const blocks = initialBoard.querySelectorAll('.block');
    blocks.forEach((block) => {
      block.addEventListener('click', handleBlockClick);
    });
  });
}

//create gameboards
const playerGameBoard = new Gameboard();
const computerGameBoard = new Gameboard();
//create players
const humanPlayer = new Player('Human', playerGameBoard);
const aiPlayer = new Player('AI', computerGameBoard);
export const clickHandler = (event) => {
  gameLoop(humanPlayer, aiPlayer, [
    parseInt(event.target.dataset.yIndex),
    parseInt(event.target.dataset.xIndex),
  ]);
};
placeHumanShips(humanPlayer).then(() => {
  //place enemy ships
  placeEnemyShips(aiPlayer);
  //clear the pageBody
  const pageBody = document.querySelector('.page-body');
  while (pageBody.firstChild) {
    pageBody.removeChild(pageBody.firstChild);
  }
  //render gameboards
  renderHumanBoard(humanPlayer.board);
  renderAiBoard(aiPlayer.board);
  //addeventlistener to enemyboard blocks
  const enemyBoardBlocks = document.querySelectorAll('.board-two .row .block');
  enemyBoardBlocks.forEach((value) => {
    value.addEventListener('click', clickHandler);
  });
});

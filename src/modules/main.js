import '../styles/style.css';
import Gameboard from './gameBoard.js';
import Player from './player.js';
import {
  renderHumanBoard,
  renderAiBoard,
  updateAiBoard,
  updateHumanBoard,
} from './dom.js';

function getPlayerName() {
  return prompt('Enter your name:');
}

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

const gameController = (() => {
  //create gameboards
  const playerGameBoard = new Gameboard();
  const computerGameBoard = new Gameboard();
  //create players
  const humanPlayer = new Player(getPlayerName(), playerGameBoard);
  const aiPlayer = new Player('AI', computerGameBoard);
  //place ships
  //shipSizes = [1, 1, 1, 1, 2, 2, 2, 3, 3, 4];
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
  renderHumanBoard(humanPlayer.board);
  renderAiBoard(aiPlayer.board);

  return { humanPlayer, aiPlayer };
})();

//addeventlistener to enemyboard blocks
const enemyBoardBlocks = document.querySelectorAll('.board-two .row .block');
export const clickHandler = (event) => {
  gameLoop(gameController.humanPlayer, gameController.aiPlayer, [
    parseInt(event.target.dataset.yIndex),
    parseInt(event.target.dataset.xIndex),
  ]);
};
enemyBoardBlocks.forEach((value) => {
  value.addEventListener('click', clickHandler);
});

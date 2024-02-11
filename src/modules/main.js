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
  const endDialog = document.querySelector('.end-dialog');
  const winner = document.querySelector('.end-dialog .winner');
  let gameEnd = false;

  const notification = document.querySelector('.notification');
  if (humanPlayer.board.allShipsSunk()) {
    winner.textContent = `${aiPlayer.name} won the game.`;
    notification.textContent = '';
    gameEnd = true;
    const blocks = document.querySelectorAll('.board-two .block');
    blocks.forEach((value) => {
      value.removeEventListener('click', clickHandler);
      value.classList.remove('hover');
    });
    endDialog.showModal();
  } else if (aiPlayer.board.allShipsSunk()) {
    winner.textContent = `You won the game.`;
    gameEnd = true;
    notification.textContent = '';
    const blocks = document.querySelectorAll('.board-two .block');
    blocks.forEach((value) => {
      value.removeEventListener('click', clickHandler);
      value.classList.remove('hover');
    });
    endDialog.showModal();
  }
  return gameEnd;
}

function gameLoop(humanPlayer, aiPlayer, attackedCoordinates) {
  humanPlayer.attackEnemy(attackedCoordinates, aiPlayer);
  const notification = document.querySelector('.notification');
  notification.textContent = 'AI attacking. . .';
  updateAiBoard(aiPlayer.board, attackedCoordinates);
  if (!checkWinCondition(humanPlayer, aiPlayer)) {
    setTimeout(() => {
      const aiAttackCoordinates =
        aiPlayer.generateAttackCoordinates(humanPlayer);
      aiPlayer.attackEnemy(aiAttackCoordinates, humanPlayer);
      updateHumanBoard(humanPlayer.board, aiAttackCoordinates);
      if (!checkWinCondition(humanPlayer, aiPlayer)) {
        notification.textContent = 'Your turn';
      }
    }, 1000);
  } else {
    const endDialog = document.querySelector('.end-dialog');
    const pageBody = document.querySelector('.page-body');
    endDialog.addEventListener('submit', (e) => {
      e.preventDefault();
      endDialog.close();
      while (pageBody.firstChild) {
        pageBody.removeChild(pageBody.firstChild);
      }
      initializeGame();
    });
  }
}

function generateRandomCoordinates() {
  const yIndex = Math.floor(Math.random() * 10);
  const xIndex = Math.floor(Math.random() * 10);
  return [yIndex, xIndex];
}

function placeEnemyShips(aiPlayer) {
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
    //ships
    const scout = document.createElement('div');
    scout.classList.add('scout');
    scout.style.width = '32px';
    scout.style.height = '32px';
    scout.style.border = '2px solid #00f';
    scout.style.background = 'rgba(0,0,255,.05)';
    const frigate = document.createElement('div');
    frigate.classList.add('frigate');
    frigate.style.width = '64px';
    frigate.style.height = '32px';
    frigate.style.border = '2px solid #00f';
    frigate.style.background = 'rgba(0,0,255,.05)';
    const brig = document.createElement('div');
    brig.classList.add('brig');
    brig.style.width = '96px';
    brig.style.height = '32px';
    brig.style.border = '2px solid #00f';
    brig.style.background = 'rgba(0,0,255,.05)';
    const mowar = document.createElement('div');
    mowar.classList.add('mowar');
    mowar.style.width = '128px';
    mowar.style.height = '32px';
    mowar.style.border = '2px solid #00f';
    mowar.style.background = 'rgba(0,0,255,.05)';
    //add a button for ship orientation
    const btnContainer = document.createElement('div');
    btnContainer.classList.add('btn-container');
    const currentShip = document.createElement('div');
    currentShip.classList.add('current-ship');
    currentShip.textContent = 'Scout';
    currentShip.appendChild(scout);
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
        currentShip.removeChild(scout);
        currentShip.textContent = 'Scout';
        currentShip.appendChild(scout);
      } else if (shipSizes[currentShipIndex + 1] === 2) {
        if (scout === currentShip.lastChild) {
          currentShip.removeChild(scout);
        }
        if (frigate === currentShip.lastChild) {
          currentShip.removeChild(frigate);
        }
        currentShip.textContent = 'Frigate';
        currentShip.appendChild(frigate);
      } else if (shipSizes[currentShipIndex + 1] === 3) {
        if (frigate === currentShip.lastChild) {
          currentShip.removeChild(frigate);
        }
        if (brig === currentShip.lastChild) {
          currentShip.removeChild(brig);
        }
        currentShip.textContent = 'Brig';
        currentShip.appendChild(brig);
      } else if (shipSizes[currentShipIndex + 1] === 4) {
        if (brig === currentShip.lastChild) {
          currentShip.removeChild(brig);
        }
        if (mowar === currentShip.lastChild) {
          currentShip.removeChild(mowar);
        }
        currentShip.textContent = 'Man-of-War';
        currentShip.appendChild(mowar);
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
        } else {
          window.alert(error.message);
        }
      }
    }

    const blocks = initialBoard.querySelectorAll('.block');
    blocks.forEach((block) => {
      block.addEventListener('click', handleBlockClick);
    });
  });
}

export let clickHandler;

function initializeGame() {
  //create gameboards
  const playerGameBoard = new Gameboard();
  const computerGameBoard = new Gameboard();
  //create players
  const humanPlayer = new Player('Human', playerGameBoard);
  const aiPlayer = new Player('AI', computerGameBoard);

  placeHumanShips(humanPlayer).then(() => {
    //place enemy ships
    placeEnemyShips(aiPlayer);
    //clear the pageBody
    const pageBody = document.querySelector('.page-body');
    while (pageBody.firstChild) {
      pageBody.removeChild(pageBody.firstChild);
    }
    const boards = document.createElement('div');
    boards.classList.add('boards');
    pageBody.appendChild(boards);
    //render gameboards
    renderHumanBoard(humanPlayer.board);
    renderAiBoard(aiPlayer.board);
    //addeventlistener to enemyboard blocks
    const notification = document.querySelector('.notification');
    notification.textContent = 'Your turn';
    const enemyBoardBlocks = document.querySelectorAll(
      '.board-two .row .block',
    );
    clickHandler = (event) => {
      gameLoop(humanPlayer, aiPlayer, [
        parseInt(event.target.dataset.yIndex),
        parseInt(event.target.dataset.xIndex),
      ]);
    };
    enemyBoardBlocks.forEach((value) => {
      value.addEventListener('click', clickHandler);
    });
  });
}

initializeGame();

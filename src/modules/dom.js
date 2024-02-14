import { placeEnemyShips, initializeGame } from './main.js';
import { resetGlobalVariables } from './player.js';

export function renderHumanBoard(humanBoard) {
  const boardOne = document.createElement('div');
  boardOne.classList.add('board-one');
  const boards = document.querySelector('.boards');
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
  boards.appendChild(boardOne);
}
export function renderAiBoard(aiBoard) {
  const boardTwo = document.createElement('div');
  boardTwo.classList.add('board-two');
  const boards = document.querySelector('.boards');

  //create board for aiPlayer
  for (let i = 0; i <= 9; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
    boardTwo.appendChild(row);
    for (let j = 0; j <= 9; j++) {
      const block = document.createElement('div');
      block.classList.add('block');
      block.classList.add('hover');
      block.dataset.xIndex = j;
      block.dataset.yIndex = i;
      if (
        aiBoard.coordinates[i][j].ship !== null &&
        aiBoard.coordinates[i][j].ship !== 'x'
      ) {
        block.classList.add('ship-present');
      }
      row.appendChild(block);
    }
  }
  boards.appendChild(boardTwo);
}

export function updateHumanBoard(humanBoard, attackedIndex) {
  const yIndex = attackedIndex[0];
  const xIndex = attackedIndex[1];
  const board = document.querySelector('.board-one');
  const attackedCell = board.querySelector(
    `.block[data-x-index="${xIndex}"][data-y-index="${yIndex}"]`,
  );
  if (attackedCell.classList.contains('ship-present')) {
    attackedCell.innerHTML =
      '<svg width = "30" height = "30" viewBox="0 0 24 24" data-name="Flat Line" xmlns="http://www.w3.org/2000/svg" class="icon flat-line"><path d="M19 19 5 5m14 0L5 19" style="fill:none;stroke:red;stroke-linecap:round;stroke-linejoin:round;stroke-width:.9600000000000002"/></svg>';
    //add 1 in row and col
    if (yIndex + 1 <= 9 && xIndex + 1 <= 9) {
      const diagonalCell = board.querySelector(
        `.block[data-x-index="${xIndex + 1}"][data-y-index="${yIndex + 1}"]`,
      );
      diagonalCell.innerHTML =
        '<svg width="10" height="10" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><circle cx="512" cy="512" r="256" fill-rule="evenodd"/></svg>';
      diagonalCell.style.fontSize = '2rem';
      diagonalCell.style.background = '#CAD2E3';
      diagonalCell.classList.remove('hover');
      humanBoard.coordinates[yIndex + 1][xIndex + 1].isHit = true;
    }
    //add 1 in row subt 1 in col
    if (yIndex + 1 <= 9 && xIndex - 1 >= 0) {
      const diagonalCell = board.querySelector(
        `.block[data-x-index="${xIndex - 1}"][data-y-index="${yIndex + 1}"]`,
      );
      diagonalCell.innerHTML =
        '<svg width="10" height="10" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><circle cx="512" cy="512" r="256" fill-rule="evenodd"/></svg>';
      diagonalCell.style.fontSize = '2rem';
      diagonalCell.style.background = '#CAD2E3';
      diagonalCell.classList.remove('hover');
      humanBoard.coordinates[yIndex + 1][xIndex - 1].isHit = true;
    }
    //sub 1 in row sub 1 in col
    if (yIndex - 1 >= 0 && xIndex - 1 >= 0) {
      const diagonalCell = board.querySelector(
        `.block[data-x-index="${xIndex - 1}"][data-y-index="${yIndex - 1}"]`,
      );
      diagonalCell.innerHTML =
        '<svg width="10" height="10" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><circle cx="512" cy="512" r="256" fill-rule="evenodd"/></svg>';
      diagonalCell.style.fontSize = '2rem';
      diagonalCell.style.background = '#CAD2E3';
      diagonalCell.classList.remove('hover');
      humanBoard.coordinates[yIndex - 1][xIndex - 1].isHit = true;
    }
    //sub 1 in row add 1 in col
    if (yIndex - 1 >= 0 && xIndex + 1 <= 9) {
      const diagonalCell = board.querySelector(
        `.block[data-x-index="${xIndex + 1}"][data-y-index="${yIndex - 1}"]`,
      );
      diagonalCell.innerHTML =
        '<svg width="10" height="10" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><circle cx="512" cy="512" r="256" fill-rule="evenodd"/></svg>';
      diagonalCell.style.fontSize = '2rem';
      diagonalCell.style.background = '#CAD2E3';
      diagonalCell.classList.remove('hover');
      humanBoard.coordinates[yIndex - 1][xIndex + 1].isHit = true;
    }

    //if the ship is sunk add borders to the whole lenght of the ship
    if (humanBoard.coordinates[yIndex][xIndex].ship.isSunk()) {
      if (humanBoard.coordinates[yIndex][xIndex].ship.orientation === 'H') {
        const startIndex =
          humanBoard.coordinates[yIndex][xIndex].ship.startPosition[1];
        const endIndex =
          humanBoard.coordinates[yIndex][xIndex].ship.endPosition;
        //add dots to start - 1
        if (startIndex - 1 >= 0) {
          const dottedCellBefore = board.querySelector(
            `.block[data-x-index="${startIndex - 1}"][data-y-index="${yIndex}"]`,
          );
          dottedCellBefore.innerHTML =
            '<svg width="10" height="10" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><circle cx="512" cy="512" r="256" fill-rule="evenodd"/></svg>';
          dottedCellBefore.style.fontSize = '2rem';
          dottedCellBefore.style.background = '#CAD2E3';
          dottedCellBefore.classList.remove('hover');
          humanBoard.coordinates[yIndex][startIndex - 1].isHit = true;
        }
        //add dots to end + 1
        if (endIndex + 1 <= 9) {
          const dottedCellAfter = board.querySelector(
            `.block[data-x-index="${endIndex + 1}"][data-y-index="${yIndex}"]`,
          );
          dottedCellAfter.innerHTML =
            '<svg width="10" height="10" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><circle cx="512" cy="512" r="256" fill-rule="evenodd"/></svg>';
          dottedCellAfter.style.fontSize = '2rem';
          dottedCellAfter.style.background = '#CAD2E3';
          dottedCellAfter.classList.remove('hover');
          humanBoard.coordinates[yIndex][endIndex + 1].isHit = true;
        }
        //also add dots above and below if the ship is of length 1
        if (humanBoard.coordinates[yIndex][xIndex].ship.length === 1) {
          if (yIndex + 1 <= 9) {
            const dottedCellAbove = board.querySelector(
              `.block[data-x-index="${xIndex}"][data-y-index="${yIndex + 1}"]`,
            );
            dottedCellAbove.innerHTML =
              '<svg width="10" height="10" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><circle cx="512" cy="512" r="256" fill-rule="evenodd"/></svg>';
            dottedCellAbove.style.fontSize = '2rem';
            dottedCellAbove.style.background = '#CAD2E3';
            dottedCellAbove.classList.remove('hover');
            humanBoard.coordinates[yIndex + 1][xIndex].isHit = true;
          }
          if (yIndex - 1 >= 0) {
            const dottedCellBelow = board.querySelector(
              `.block[data-x-index="${xIndex}"][data-y-index="${yIndex - 1}"]`,
            );
            dottedCellBelow.innerHTML =
              '<svg width="10" height="10" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><circle cx="512" cy="512" r="256" fill-rule="evenodd"/></svg>';
            dottedCellBelow.style.fontSize = '2rem';
            dottedCellBelow.style.background = '#CAD2E3';
            dottedCellBelow.classList.remove('hover');
            humanBoard.coordinates[yIndex - 1][xIndex].isHit = true;
          }
        }

        for (let i = startIndex; i <= endIndex; i++) {
          const shipCell = board.querySelector(
            `.block[data-x-index="${i}"][data-y-index="${humanBoard.coordinates[yIndex][xIndex].ship.startPosition[0]}"]`,
          );
          if (i < endIndex) {
            shipCell.style.borderLeft = '2px solid red';
            shipCell.style.borderTop = '2px solid red';
            shipCell.style.borderBottom = '2px solid red';
          } else {
            shipCell.style.border = '2px solid red';
          }
        }
      } else {
        const startIndex =
          humanBoard.coordinates[yIndex][xIndex].ship.startPosition[0];
        const endIndex =
          humanBoard.coordinates[yIndex][xIndex].ship.endPosition;
        //add dots to start - 1
        if (startIndex - 1 >= 0) {
          const dottedCellBefore = board.querySelector(
            `.block[data-x-index="${xIndex}"][data-y-index="${startIndex - 1}"]`,
          );
          dottedCellBefore.innerHTML =
            '<svg width="10" height="10" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><circle cx="512" cy="512" r="256" fill-rule="evenodd"/></svg>';
          dottedCellBefore.style.fontSize = '2rem';
          dottedCellBefore.style.background = '#CAD2E3';
          dottedCellBefore.classList.remove('hover');
          humanBoard.coordinates[startIndex - 1][xIndex].isHit = true;
        }
        //add dots to end + 1
        if (endIndex + 1 <= 9) {
          const dottedCellAfter = board.querySelector(
            `.block[data-x-index="${xIndex}"][data-y-index="${endIndex + 1}"]`,
          );
          dottedCellAfter.innerHTML =
            '<svg width="10" height="10" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><circle cx="512" cy="512" r="256" fill-rule="evenodd"/></svg>';
          dottedCellAfter.style.fontSize = '2rem';
          dottedCellAfter.style.background = '#CAD2E3';
          dottedCellAfter.classList.remove('hover');
          humanBoard.coordinates[endIndex + 1][xIndex].isHit = true;
        }
        //also add dots left and right if the ship is of length 1
        if (humanBoard.coordinates[yIndex][xIndex].ship.length === 1) {
          if (xIndex + 1 <= 9) {
            const dottedCellRight = board.querySelector(
              `.block[data-x-index="${xIndex + 1}"][data-y-index="${yIndex}"]`,
            );
            dottedCellRight.innerHTML =
              '<svg width="10" height="10" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><circle cx="512" cy="512" r="256" fill-rule="evenodd"/></svg>';
            dottedCellRight.style.fontSize = '2rem';
            dottedCellRight.style.background = '#CAD2E3';
            dottedCellRight.classList.remove('hover');
            humanBoard.coordinates[yIndex][xIndex + 1].isHit = true;
          }
          if (xIndex - 1 >= 0) {
            const dottedCellLeft = board.querySelector(
              `.block[data-x-index="${xIndex - 1}"][data-y-index="${yIndex}"]`,
            );
            dottedCellLeft.innerHTML =
              '<svg width="10" height="10" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><circle cx="512" cy="512" r="256" fill-rule="evenodd"/></svg>';
            dottedCellLeft.style.fontSize = '2rem';
            dottedCellLeft.style.background = '#CAD2E3';
            dottedCellLeft.classList.remove('hover');
            humanBoard.coordinates[yIndex][xIndex - 1].isHit = true;
          }
        }

        for (let i = startIndex; i <= endIndex; i++) {
          const shipCell = board.querySelector(
            `.block[data-x-index="${humanBoard.coordinates[yIndex][xIndex].ship.startPosition[1]}"][data-y-index="${i}"]`,
          );
          if (i < endIndex) {
            shipCell.style.borderLeft = '2px solid red';
            shipCell.style.borderRight = '2px solid red';
            shipCell.style.borderTop = '2px solid red';
          } else {
            shipCell.style.border = '2px solid red';
          }
        }
      }
    }
  } else {
    attackedCell.innerHTML =
      '<svg width="10" height="10" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><circle cx="512" cy="512" r="256" fill-rule="evenodd"/></svg>';
    attackedCell.style.fontSize = '2rem';
    attackedCell.style.background = '#CAD2E3';
  }
}

export function updateAiBoard(aiBoard, attackedIndex) {
  const yIndex = attackedIndex[0];
  const xIndex = attackedIndex[1];
  const board = document.querySelector('.board-two');
  const attackedCell = board.querySelector(
    `.block[data-x-index="${xIndex}"][data-y-index="${yIndex}"]`,
  );
  attackedCell.classList.remove('hover');
  attackedCell.removeEventListener('click', clickHandler);
  if (attackedCell.classList.contains('ship-present')) {
    attackedCell.innerHTML =
      '<svg width = "30" height = "30" viewBox="0 0 24 24" data-name="Flat Line" xmlns="http://www.w3.org/2000/svg" class="icon flat-line"><path d="M19 19 5 5m14 0L5 19" style="fill:none;stroke:red;stroke-linecap:round;stroke-linejoin:round;stroke-width:.9600000000000002"/></svg>';
    //add 1 in row and col
    if (yIndex + 1 <= 9 && xIndex + 1 <= 9) {
      const diagonalCell = board.querySelector(
        `.block[data-x-index="${xIndex + 1}"][data-y-index="${yIndex + 1}"]`,
      );
      diagonalCell.innerHTML =
        '<svg width="10" height="10" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><circle cx="512" cy="512" r="256" fill-rule="evenodd"/></svg>';
      diagonalCell.style.fontSize = '2rem';
      diagonalCell.style.background = '#CAD2E3';
      diagonalCell.classList.remove('hover');
      diagonalCell.removeEventListener('click', clickHandler);
      aiBoard.coordinates[yIndex + 1][xIndex + 1].isHit = true;
    }
    //add 1 in row subt 1 in col
    if (yIndex + 1 <= 9 && xIndex - 1 >= 0) {
      const diagonalCell = board.querySelector(
        `.block[data-x-index="${xIndex - 1}"][data-y-index="${yIndex + 1}"]`,
      );
      diagonalCell.innerHTML =
        '<svg width="10" height="10" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><circle cx="512" cy="512" r="256" fill-rule="evenodd"/></svg>';
      diagonalCell.style.fontSize = '2rem';
      diagonalCell.style.background = '#CAD2E3';
      diagonalCell.classList.remove('hover');
      diagonalCell.removeEventListener('click', clickHandler);
      aiBoard.coordinates[yIndex + 1][xIndex - 1].isHit = true;
    }
    //sub 1 in row sub 1 in col
    if (yIndex - 1 >= 0 && xIndex - 1 >= 0) {
      const diagonalCell = board.querySelector(
        `.block[data-x-index="${xIndex - 1}"][data-y-index="${yIndex - 1}"]`,
      );
      diagonalCell.innerHTML =
        '<svg width="10" height="10" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><circle cx="512" cy="512" r="256" fill-rule="evenodd"/></svg>';
      diagonalCell.style.fontSize = '2rem';
      diagonalCell.style.background = '#CAD2E3';
      diagonalCell.classList.remove('hover');
      diagonalCell.removeEventListener('click', clickHandler);
      aiBoard.coordinates[yIndex - 1][xIndex - 1].isHit = true;
    }
    //sub 1 in row add 1 in col
    if (yIndex - 1 >= 0 && xIndex + 1 <= 9) {
      const diagonalCell = board.querySelector(
        `.block[data-x-index="${xIndex + 1}"][data-y-index="${yIndex - 1}"]`,
      );
      diagonalCell.innerHTML =
        '<svg width="10" height="10" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><circle cx="512" cy="512" r="256" fill-rule="evenodd"/></svg>';
      diagonalCell.style.fontSize = '2rem';
      diagonalCell.style.background = '#CAD2E3';
      diagonalCell.classList.remove('hover');
      diagonalCell.removeEventListener('click', clickHandler);
      aiBoard.coordinates[yIndex - 1][xIndex + 1].isHit = true;
    }

    //if the ship is sunk add borders to the whole lenght of the ship
    if (aiBoard.coordinates[yIndex][xIndex].ship.isSunk()) {
      if (aiBoard.coordinates[yIndex][xIndex].ship.orientation === 'H') {
        const startIndex =
          aiBoard.coordinates[yIndex][xIndex].ship.startPosition[1];
        const endIndex = aiBoard.coordinates[yIndex][xIndex].ship.endPosition;
        //add dots to start - 1
        if (startIndex - 1 >= 0) {
          const dottedCellBefore = board.querySelector(
            `.block[data-x-index="${startIndex - 1}"][data-y-index="${yIndex}"]`,
          );
          dottedCellBefore.innerHTML =
            '<svg width="10" height="10" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><circle cx="512" cy="512" r="256" fill-rule="evenodd"/></svg>';
          dottedCellBefore.style.fontSize = '2rem';
          dottedCellBefore.style.background = '#CAD2E3';
          dottedCellBefore.classList.remove('hover');
          dottedCellBefore.removeEventListener('click', clickHandler);
          aiBoard.coordinates[yIndex][startIndex - 1].isHit = true;
        }
        //add dots to end + 1
        if (endIndex + 1 <= 9) {
          const dottedCellAfter = board.querySelector(
            `.block[data-x-index="${endIndex + 1}"][data-y-index="${yIndex}"]`,
          );
          dottedCellAfter.innerHTML =
            '<svg width="10" height="10" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><circle cx="512" cy="512" r="256" fill-rule="evenodd"/></svg>';
          dottedCellAfter.style.fontSize = '2rem';
          dottedCellAfter.style.background = '#CAD2E3';
          dottedCellAfter.classList.remove('hover');
          dottedCellAfter.removeEventListener('click', clickHandler);
          aiBoard.coordinates[yIndex][endIndex + 1].isHit = true;
        }
        //also add dots above and below if the ship is of length 1
        if (aiBoard.coordinates[yIndex][xIndex].ship.length === 1) {
          if (yIndex + 1 <= 9) {
            const dottedCellAbove = board.querySelector(
              `.block[data-x-index="${xIndex}"][data-y-index="${yIndex + 1}"]`,
            );
            dottedCellAbove.innerHTML =
              '<svg width="10" height="10" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><circle cx="512" cy="512" r="256" fill-rule="evenodd"/></svg>';
            dottedCellAbove.style.fontSize = '2rem';
            dottedCellAbove.style.background = '#CAD2E3';
            dottedCellAbove.classList.remove('hover');
            dottedCellAbove.removeEventListener('click', clickHandler);
            aiBoard.coordinates[yIndex + 1][xIndex].isHit = true;
          }
          if (yIndex - 1 >= 0) {
            const dottedCellBelow = board.querySelector(
              `.block[data-x-index="${xIndex}"][data-y-index="${yIndex - 1}"]`,
            );
            dottedCellBelow.innerHTML =
              '<svg width="10" height="10" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><circle cx="512" cy="512" r="256" fill-rule="evenodd"/></svg>';
            dottedCellBelow.style.fontSize = '2rem';
            dottedCellBelow.style.background = '#CAD2E3';
            dottedCellBelow.classList.remove('hover');
            dottedCellBelow.removeEventListener('click', clickHandler);
            aiBoard.coordinates[yIndex - 1][xIndex].isHit = true;
          }
        }

        for (let i = startIndex; i <= endIndex; i++) {
          const shipCell = board.querySelector(
            `.block[data-x-index="${i}"][data-y-index="${aiBoard.coordinates[yIndex][xIndex].ship.startPosition[0]}"]`,
          );
          if (i < endIndex) {
            shipCell.style.borderLeft = '2px solid red';
            shipCell.style.borderTop = '2px solid red';
            shipCell.style.borderBottom = '2px solid red';
          } else {
            shipCell.style.border = '2px solid red';
          }
        }
      } else {
        const startIndex =
          aiBoard.coordinates[yIndex][xIndex].ship.startPosition[0];
        const endIndex = aiBoard.coordinates[yIndex][xIndex].ship.endPosition;
        //add dots to start - 1
        if (startIndex - 1 >= 0) {
          const dottedCellBefore = board.querySelector(
            `.block[data-x-index="${xIndex}"][data-y-index="${startIndex - 1}"]`,
          );
          dottedCellBefore.innerHTML =
            '<svg width="10" height="10" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><circle cx="512" cy="512" r="256" fill-rule="evenodd"/></svg>';
          dottedCellBefore.style.fontSize = '2rem';
          dottedCellBefore.style.background = '#CAD2E3';
          dottedCellBefore.classList.remove('hover');
          dottedCellBefore.removeEventListener('click', clickHandler);
          aiBoard.coordinates[startIndex - 1][xIndex].isHit = true;
        }
        //add dots to end + 1
        if (endIndex + 1 <= 9) {
          const dottedCellAfter = board.querySelector(
            `.block[data-x-index="${xIndex}"][data-y-index="${endIndex + 1}"]`,
          );
          dottedCellAfter.innerHTML =
            '<svg width="10" height="10" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><circle cx="512" cy="512" r="256" fill-rule="evenodd"/></svg>';
          dottedCellAfter.style.fontSize = '2rem';
          dottedCellAfter.style.background = '#CAD2E3';
          dottedCellAfter.classList.remove('hover');
          dottedCellAfter.removeEventListener('click', clickHandler);
          aiBoard.coordinates[endIndex + 1][xIndex].isHit = true;
        }
        //also add dots left and right if the ship is of length 1
        if (aiBoard.coordinates[yIndex][xIndex].ship.length === 1) {
          if (xIndex + 1 <= 9) {
            const dottedCellRight = board.querySelector(
              `.block[data-x-index="${xIndex + 1}"][data-y-index="${yIndex}"]`,
            );
            dottedCellRight.innerHTML =
              '<svg width="10" height="10" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><circle cx="512" cy="512" r="256" fill-rule="evenodd"/></svg>';
            dottedCellRight.style.fontSize = '2rem';
            dottedCellRight.style.background = '#CAD2E3';
            dottedCellRight.classList.remove('hover');
            dottedCellRight.removeEventListener('click', clickHandler);
            aiBoard.coordinates[yIndex][xIndex + 1].isHit = true;
          }
          if (xIndex - 1 >= 0) {
            const dottedCellLeft = board.querySelector(
              `.block[data-x-index="${xIndex - 1}"][data-y-index="${yIndex}"]`,
            );
            dottedCellLeft.innerHTML =
              '<svg width="10" height="10" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><circle cx="512" cy="512" r="256" fill-rule="evenodd"/></svg>';
            dottedCellLeft.style.fontSize = '2rem';
            dottedCellLeft.style.background = '#CAD2E3';
            dottedCellLeft.classList.remove('hover');
            dottedCellLeft.removeEventListener('click', clickHandler);
            aiBoard.coordinates[yIndex][xIndex - 1].isHit = true;
          }
        }

        for (let i = startIndex; i <= endIndex; i++) {
          const shipCell = board.querySelector(
            `.block[data-x-index="${aiBoard.coordinates[yIndex][xIndex].ship.startPosition[1]}"][data-y-index="${i}"]`,
          );
          if (i < endIndex) {
            shipCell.style.borderLeft = '2px solid red';
            shipCell.style.borderRight = '2px solid red';
            shipCell.style.borderTop = '2px solid red';
          } else {
            shipCell.style.border = '2px solid red';
          }
        }
      }
    }
  } else {
    attackedCell.innerHTML =
      '<svg width="10" height="10" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><circle cx="512" cy="512" r="256" fill-rule="evenodd"/></svg>';
    attackedCell.style.fontSize = '2rem';
    attackedCell.style.background = '#CAD2E3';
  }
}

function placeHumanShips(humanPlayer) {
  return new Promise((resolve) => {
    const initialBoard = document.createElement('div');
    initialBoard.classList.add('initial-board');
    const pageBody = document.querySelector('.page-body');
    pageBody.appendChild(initialBoard);
    const notification = document.querySelector('.header .notification');
    notification.textContent = 'Place your ships';
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

function checkWinCondition(humanPlayer, aiPlayer) {
  const endDialog = document.querySelector('.end-dialog');
  const winner = document.querySelector('.end-dialog .winner');
  let gameEnd = false;

  const notification = document.querySelector('.notification');
  if (humanPlayer.board.allShipsSunk()) {
    winner.textContent = `${aiPlayer.name} won the game`;
    notification.textContent = '';
    gameEnd = true;
    const blocks = document.querySelectorAll('.board-two .block');
    blocks.forEach((value) => {
      value.removeEventListener('click', clickHandler);
      value.classList.remove('hover');
    });
    endDialog.showModal();
    endDialog.style.display = 'flex';
    endDialog.style.flexDirection = 'column';
    endDialog.style.justifyContent = 'center';
    endDialog.style.alignItems = 'center';
  } else if (aiPlayer.board.allShipsSunk()) {
    winner.textContent = `You won the game`;
    gameEnd = true;
    notification.textContent = '';
    const blocks = document.querySelectorAll('.board-two .block');
    blocks.forEach((value) => {
      value.removeEventListener('click', clickHandler);
      value.classList.remove('hover');
    });
    endDialog.showModal();
    endDialog.style.display = 'flex';
    endDialog.style.flexDirection = 'column';
    endDialog.style.justifyContent = 'center';
    endDialog.style.alignItems = 'center';
  }
  return gameEnd;
}

function gameLoop(humanPlayer, aiPlayer, attackedCoordinates) {
  const aiBoardAttackedCell = document.querySelector(
    `.boards .board-two .block[data-x-index="${attackedCoordinates[1]}"][data-y-index="${attackedCoordinates[0]}"]`,
  );
  const endDialog = document.querySelector('.end-dialog');
  const pageBody = document.querySelector('.page-body');
  const notification = document.querySelector('.notification');
  humanPlayer.attackEnemy(attackedCoordinates, aiPlayer);
  updateAiBoard(aiPlayer.board, attackedCoordinates);
  if (aiBoardAttackedCell.classList.contains('ship-present')) {
    notification.textContent = 'Your turn';
    if (checkWinCondition(humanPlayer, aiPlayer)) {
      endDialog.addEventListener('submit', (e) => {
        e.preventDefault();
        endDialog.close();
        endDialog.style.display = 'none';
        resetGlobalVariables();
        while (pageBody.firstChild) {
          pageBody.removeChild(pageBody.firstChild);
        }
        initializeGame();
      });
    }
  } else {
    notification.textContent = 'AI attacking. . .';
    setTimeout(() => {
      const aiAttackCoordinates =
        aiPlayer.generateAttackCoordinates(humanPlayer);
      const humanBoardAttackedCell = document.querySelector(
        `.boards .board-one .block[data-x-index="${aiAttackCoordinates[1]}"][data-y-index="${aiAttackCoordinates[0]}"]`,
      );
      aiPlayer.attackEnemy(aiAttackCoordinates, humanPlayer);
      updateHumanBoard(humanPlayer.board, aiAttackCoordinates);
      function consequentAttacks(hitAnotherShip) {
        return new Promise((resolve) => {
          const interval = setInterval(() => {
            if (!hitAnotherShip) {
              clearInterval(interval);
              resolve();
            } else {
              const extraTurnAttackCoordinates =
                aiPlayer.generateAttackCoordinates(humanPlayer);
              aiPlayer.attackEnemy(extraTurnAttackCoordinates, humanPlayer);
              updateHumanBoard(humanPlayer.board, extraTurnAttackCoordinates);
              hitAnotherShip = document
                .querySelector(
                  `.boards .board-one .block[data-x-index="${extraTurnAttackCoordinates[1]}"][data-y-index="${extraTurnAttackCoordinates[0]}"]`,
                )
                .classList.contains('ship-present');
              if (!hitAnotherShip) {
                clearInterval(interval);
                resolve();
              }
            }
          }, 500);
        });
      }
      if (checkWinCondition(humanPlayer, aiPlayer)) {
        endDialog.addEventListener('submit', (e) => {
          e.preventDefault();
          endDialog.close();
          endDialog.style.display = 'none';
          resetGlobalVariables();
          while (pageBody.firstChild) {
            pageBody.removeChild(pageBody.firstChild);
          }
          initializeGame();
        });
      } else {
        let hitAnotherShip =
          humanBoardAttackedCell.classList.contains('ship-present');
        consequentAttacks(hitAnotherShip).then(() => {
          if (checkWinCondition(humanPlayer, aiPlayer)) {
            endDialog.addEventListener('submit', (e) => {
              e.preventDefault();
              endDialog.close();
              endDialog.style.display = 'none';
              resetGlobalVariables();
              while (pageBody.firstChild) {
                pageBody.removeChild(pageBody.firstChild);
              }
              initializeGame();
            });
          } else {
            notification.textContent = 'Your turn';
          }
        });
      }
    }, 800);
  }
}

let clickHandler;

export function initializeDOM(humanPlayer, aiPlayer) {
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

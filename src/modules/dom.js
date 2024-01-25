export function renderHumanBoard(humanBoard) {
  const boardOne = document.querySelector('.board-one');
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
}
export function renderAiBoard(aiBoard) {
  const boardTwo = document.querySelector('.board-two');
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
      diagonalCell.innerHTML = '&#183';
      diagonalCell.style.fontSize = '2rem';
      diagonalCell.style.background = '#f2f4f8';
      diagonalCell.classList.remove('hover');
    }
    //add 1 in row subt 1 in col
    if (yIndex + 1 <= 9 && xIndex - 1 >= 0) {
      const diagonalCell = board.querySelector(
        `.block[data-x-index="${xIndex - 1}"][data-y-index="${yIndex + 1}"]`,
      );
      diagonalCell.innerHTML = '&#183';
      diagonalCell.style.fontSize = '2rem';
      diagonalCell.style.background = '#f2f4f8';
      diagonalCell.classList.remove('hover');
    }
    //sub 1 in row sub 1 in col
    if (yIndex - 1 >= 0 && xIndex - 1 >= 0) {
      const diagonalCell = board.querySelector(
        `.block[data-x-index="${xIndex - 1}"][data-y-index="${yIndex - 1}"]`,
      );
      diagonalCell.innerHTML = '&#183';
      diagonalCell.style.fontSize = '2rem';
      diagonalCell.style.background = '#f2f4f8';
      diagonalCell.classList.remove('hover');
    }
    //sub 1 in row add 1 in col
    if (yIndex - 1 >= 0 && xIndex + 1 <= 9) {
      const diagonalCell = board.querySelector(
        `.block[data-x-index="${xIndex + 1}"][data-y-index="${yIndex - 1}"]`,
      );
      diagonalCell.innerHTML = '&#183';
      diagonalCell.style.fontSize = '2rem';
      diagonalCell.style.background = '#f2f4f8';
      diagonalCell.classList.remove('hover');
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
          dottedCellBefore.innerHTML = '&#183';
          dottedCellBefore.style.fontSize = '2rem';
          dottedCellBefore.style.background = '#f2f4f8';
          dottedCellBefore.classList.remove('hover');
        }
        //add dots to end + 1
        if (endIndex + 1 <= 9) {
          const dottedCellAfter = board.querySelector(
            `.block[data-x-index="${endIndex + 1}"][data-y-index="${yIndex}"]`,
          );
          dottedCellAfter.innerHTML = '&#183';
          dottedCellAfter.style.fontSize = '2rem';
          dottedCellAfter.style.background = '#f2f4f8';
          dottedCellAfter.classList.remove('hover');
        }
        //also add dots above and below if the ship is of length 1
        if (humanBoard.coordinates[yIndex][xIndex].ship.length === 1) {
          if (yIndex + 1 <= 9) {
            const dottedCellAbove = board.querySelector(
              `.block[data-x-index="${xIndex}"][data-y-index="${yIndex + 1}"]`,
            );
            dottedCellAbove.innerHTML = '&#183';
            dottedCellAbove.style.fontSize = '2rem';
            dottedCellAbove.style.background = '#f2f4f8';
            dottedCellAbove.classList.remove('hover');
          }
          if (yIndex - 1 >= 0) {
            const dottedCellBelow = board.querySelector(
              `.block[data-x-index="${xIndex}"][data-y-index="${yIndex - 1}"]`,
            );
            dottedCellBelow.innerHTML = '&#183';
            dottedCellBelow.style.fontSize = '2rem';
            dottedCellBelow.style.background = '#f2f4f8';
            dottedCellBelow.classList.remove('hover');
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
          dottedCellBefore.innerHTML = '&#183';
          dottedCellBefore.style.fontSize = '2rem';
          dottedCellBefore.style.background = '#f2f4f8';
          dottedCellBefore.classList.remove('hover');
        }
        //add dots to end + 1
        if (endIndex + 1 <= 9) {
          const dottedCellAfter = board.querySelector(
            `.block[data-x-index="${xIndex}"][data-y-index="${endIndex + 1}"]`,
          );
          dottedCellAfter.innerHTML = '&#183';
          dottedCellAfter.style.fontSize = '2rem';
          dottedCellAfter.style.background = '#f2f4f8';
          dottedCellAfter.classList.remove('hover');
        }
        //also add dots left and right if the ship is of length 1
        if (humanBoard.coordinates[yIndex][xIndex].ship.length === 1) {
          if (xIndex + 1 <= 9) {
            const dottedCellRight = board.querySelector(
              `.block[data-x-index="${xIndex + 1}"][data-y-index="${yIndex}"]`,
            );
            dottedCellRight.innerHTML = '&#183';
            dottedCellRight.style.fontSize = '2rem';
            dottedCellRight.style.background = '#f2f4f8';
            dottedCellRight.classList.remove('hover');
          }
          if (xIndex - 1 >= 0) {
            const dottedCellLeft = board.querySelector(
              `.block[data-x-index="${xIndex - 1}"][data-y-index="${yIndex}"]`,
            );
            dottedCellLeft.innerHTML = '&#183';
            dottedCellLeft.style.fontSize = '2rem';
            dottedCellLeft.style.background = '#f2f4f8';
            dottedCellLeft.classList.remove('hover');
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
    attackedCell.innerHTML = '&#183';
    attackedCell.style.fontSize = '2rem';
    attackedCell.style.background = '#f2f4f8';
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
  if (attackedCell.classList.contains('ship-present')) {
    attackedCell.innerHTML =
      '<svg width = "30" height = "30" viewBox="0 0 24 24" data-name="Flat Line" xmlns="http://www.w3.org/2000/svg" class="icon flat-line"><path d="M19 19 5 5m14 0L5 19" style="fill:none;stroke:red;stroke-linecap:round;stroke-linejoin:round;stroke-width:.9600000000000002"/></svg>';
    //add 1 in row and col
    if (yIndex + 1 <= 9 && xIndex + 1 <= 9) {
      const diagonalCell = board.querySelector(
        `.block[data-x-index="${xIndex + 1}"][data-y-index="${yIndex + 1}"]`,
      );
      diagonalCell.innerHTML = '&#183';
      diagonalCell.style.fontSize = '2rem';
      diagonalCell.style.background = '#f2f4f8';
      diagonalCell.classList.remove('hover');
    }
    //add 1 in row subt 1 in col
    if (yIndex + 1 <= 9 && xIndex - 1 >= 0) {
      const diagonalCell = board.querySelector(
        `.block[data-x-index="${xIndex - 1}"][data-y-index="${yIndex + 1}"]`,
      );
      diagonalCell.innerHTML = '&#183';
      diagonalCell.style.fontSize = '2rem';
      diagonalCell.style.background = '#f2f4f8';
      diagonalCell.classList.remove('hover');
    }
    //sub 1 in row sub 1 in col
    if (yIndex - 1 >= 0 && xIndex - 1 >= 0) {
      const diagonalCell = board.querySelector(
        `.block[data-x-index="${xIndex - 1}"][data-y-index="${yIndex - 1}"]`,
      );
      diagonalCell.innerHTML = '&#183';
      diagonalCell.style.fontSize = '2rem';
      diagonalCell.style.background = '#f2f4f8';
      diagonalCell.classList.remove('hover');
    }
    //sub 1 in row add 1 in col
    if (yIndex - 1 >= 0 && xIndex + 1 <= 9) {
      const diagonalCell = board.querySelector(
        `.block[data-x-index="${xIndex + 1}"][data-y-index="${yIndex - 1}"]`,
      );
      diagonalCell.innerHTML = '&#183';
      diagonalCell.style.fontSize = '2rem';
      diagonalCell.style.background = '#f2f4f8';
      diagonalCell.classList.remove('hover');
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
          dottedCellBefore.innerHTML = '&#183';
          dottedCellBefore.style.fontSize = '2rem';
          dottedCellBefore.style.background = '#f2f4f8';
          dottedCellBefore.classList.remove('hover');
        }
        //add dots to end + 1
        if (endIndex + 1 <= 9) {
          const dottedCellAfter = board.querySelector(
            `.block[data-x-index="${endIndex + 1}"][data-y-index="${yIndex}"]`,
          );
          dottedCellAfter.innerHTML = '&#183';
          dottedCellAfter.style.fontSize = '2rem';
          dottedCellAfter.style.background = '#f2f4f8';
          dottedCellAfter.classList.remove('hover');
        }
        //also add dots above and below if the ship is of length 1
        if (aiBoard.coordinates[yIndex][xIndex].ship.length === 1) {
          if (yIndex + 1 <= 9) {
            const dottedCellAbove = board.querySelector(
              `.block[data-x-index="${xIndex}"][data-y-index="${yIndex + 1}"]`,
            );
            dottedCellAbove.innerHTML = '&#183';
            dottedCellAbove.style.fontSize = '2rem';
            dottedCellAbove.style.background = '#f2f4f8';
            dottedCellAbove.classList.remove('hover');
          }
          if (yIndex - 1 >= 0) {
            const dottedCellBelow = board.querySelector(
              `.block[data-x-index="${xIndex}"][data-y-index="${yIndex - 1}"]`,
            );
            dottedCellBelow.innerHTML = '&#183';
            dottedCellBelow.style.fontSize = '2rem';
            dottedCellBelow.style.background = '#f2f4f8';
            dottedCellBelow.classList.remove('hover');
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
          dottedCellBefore.innerHTML = '&#183';
          dottedCellBefore.style.fontSize = '2rem';
          dottedCellBefore.style.background = '#f2f4f8';
          dottedCellBefore.classList.remove('hover');
        }
        //add dots to end + 1
        if (endIndex + 1 <= 9) {
          const dottedCellAfter = board.querySelector(
            `.block[data-x-index="${xIndex}"][data-y-index="${endIndex + 1}"]`,
          );
          dottedCellAfter.innerHTML = '&#183';
          dottedCellAfter.style.fontSize = '2rem';
          dottedCellAfter.style.background = '#f2f4f8';
          dottedCellAfter.classList.remove('hover');
        }
        //also add dots left and right if the ship is of length 1
        if (aiBoard.coordinates[yIndex][xIndex].ship.length === 1) {
          if (xIndex + 1 <= 9) {
            const dottedCellRight = board.querySelector(
              `.block[data-x-index="${xIndex + 1}"][data-y-index="${yIndex}"]`,
            );
            dottedCellRight.innerHTML = '&#183';
            dottedCellRight.style.fontSize = '2rem';
            dottedCellRight.style.background = '#f2f4f8';
            dottedCellRight.classList.remove('hover');
          }
          if (xIndex - 1 >= 0) {
            const dottedCellLeft = board.querySelector(
              `.block[data-x-index="${xIndex - 1}"][data-y-index="${yIndex}"]`,
            );
            dottedCellLeft.innerHTML = '&#183';
            dottedCellLeft.style.fontSize = '2rem';
            dottedCellLeft.style.background = '#f2f4f8';
            dottedCellLeft.classList.remove('hover');
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
    attackedCell.innerHTML = '&#183';
    attackedCell.style.fontSize = '2rem';
    attackedCell.style.background = '#f2f4f8';
  }
}

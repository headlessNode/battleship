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

// export updateHumanBoard(humanBoard, attackedIndex){

// }

//when there is a ship, add dots to position adjacent diagonally
//border all the blocks which contains a ship that is sunk

export function updateAiBoard(aiBoard, attackedIndex) {
  const yIndex = attackedIndex[0];
  const xIndex = attackedIndex[1];
  const board = document.querySelector('.board-two');
  const attackedCell = board.querySelector(
    `.block[data-x-index="${xIndex}"][data-y-index="${yIndex}"]`,
  );
  if (attackedCell.classList.contains('ship-present')) {
    attackedCell.innerHTML =
      '<svg width = "30" height = "30" viewBox="0 0 24 24" data-name="Flat Line" xmlns="http://www.w3.org/2000/svg" class="icon flat-line"><path d="M19 19 5 5m14 0L5 19" style="fill:none;stroke:red;stroke-linecap:round;stroke-linejoin:round;stroke-width:.9600000000000002"/></svg>';
    if (aiBoard.coordinates[yIndex][xIndex].ship.isSunk()) {
      if (aiBoard.coordinates[yIndex][xIndex].ship.orientation === 'H') {
        const startIndex =
          aiBoard.coordinates[yIndex][xIndex].ship.startPosition[1];
        const endIndex = aiBoard.coordinates[yIndex][xIndex].ship.endPosition;
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
  }
}

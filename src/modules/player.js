let aiAttackCoordinates = [];
let targetingList = [];
class Player {
  constructor(name, board) {
    this.name = name;
    this.board = board;
  }

  //method to place ships
  placeShipOnBoard(shipLength, position, orientation) {
    this.board.placeShip(shipLength, position, orientation);
  }
  //method to attack enemy
  attackEnemy(coordinates, enemyPlayer) {
    enemyPlayer.board.receiveAttack(coordinates);
  }
  //method for generating random attack coordinates for AI
  generateAttackCoordinates(enemyPlayer) {
    function randomCoordinatesGenerator() {
      let yIndex;
      let xIndex;
      let pairIsNotUnique = true;
      do {
        yIndex = Math.floor(Math.random() * 10);
        xIndex = Math.floor(Math.random() * 10);

        pairIsNotUnique = aiAttackCoordinates.some(
          (pair) => pair[0] === yIndex && pair[1] === xIndex,
        );
        if (
          !pairIsNotUnique &&
          enemyPlayer.board.coordinates[yIndex][xIndex].isHit === false
        ) {
          if (
            enemyPlayer.board.coordinates[yIndex][xIndex].ship !== null &&
            enemyPlayer.board.coordinates[yIndex][xIndex].ship !== 'x' &&
            !enemyPlayer.board.coordinates[yIndex][xIndex].ship.isSunk()
          ) {
            if (yIndex + 1 <= 9) {
              targetingList.push([yIndex + 1, xIndex]);
            }
            if (yIndex - 1 >= 0) {
              targetingList.push([yIndex - 1, xIndex]);
            }
            if (xIndex + 1 <= 9) {
              targetingList.push([yIndex, xIndex + 1]);
            }
            if (xIndex - 1 >= 0) {
              targetingList.push([yIndex, xIndex - 1]);
            }
          }
          aiAttackCoordinates.push([yIndex, xIndex]);
        }
      } while (pairIsNotUnique);
      return [yIndex, xIndex];
    }
    function filterTargetingList() {
      let pairIsNotUnique = true;
      let xIndex;
      let yIndex;
      do {
        if (targetingList.length === 0) {
          xIndex = null;
          yIndex = null;
          break;
        }
        let coordinates = targetingList.shift();
        yIndex = coordinates[0];
        xIndex = coordinates[1];
        pairIsNotUnique = aiAttackCoordinates.some(
          (pair) => pair[0] === yIndex && pair[1] === xIndex,
        );
        if (
          enemyPlayer.board.coordinates[yIndex][xIndex].ship !== null &&
          enemyPlayer.board.coordinates[yIndex][xIndex].ship !== 'x' &&
          !pairIsNotUnique
        ) {
          if (yIndex + 1 <= 9) {
            targetingList.push([yIndex + 1, xIndex]);
          }
          if (yIndex - 1 >= 0) {
            targetingList.push([yIndex - 1, xIndex]);
          }
          if (xIndex + 1 <= 9) {
            targetingList.push([yIndex, xIndex + 1]);
          }
          if (xIndex - 1 >= 0) {
            targetingList.push([yIndex, xIndex - 1]);
          }
          aiAttackCoordinates.push([yIndex, xIndex]);
          break;
        }
      } while (
        enemyPlayer.board.coordinates[yIndex][xIndex].ship === null ||
        enemyPlayer.board.coordinates[yIndex][xIndex].ship === 'x' ||
        pairIsNotUnique
      );
      return [yIndex, xIndex];
    }
    if (targetingList.length === 0) {
      return randomCoordinatesGenerator();
    } else {
      let coordinates = filterTargetingList();
      let yIndex = coordinates[0];
      let xIndex = coordinates[1];
      if (xIndex === null && yIndex === null) {
        return randomCoordinatesGenerator();
      } else {
        return [yIndex, xIndex];
      }
    }
  }
}
export default Player;

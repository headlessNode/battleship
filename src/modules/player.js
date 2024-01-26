let aiAttackCoordinates = [];
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
    let pairIsNotUnique = true;
    let yIndex;
    let xIndex;
    do {
      yIndex = Math.floor(Math.random() * 10);
      xIndex = Math.floor(Math.random() * 10);

      pairIsNotUnique = aiAttackCoordinates.some(
        (pair) => pair[0] === yIndex && pair[1] === xIndex,
      );
      if (enemyPlayer.board.coordinates[yIndex][xIndex].isHit) {
        console.log(`alreadyHit: ${[yIndex, xIndex]}`);
      }
      if (
        !pairIsNotUnique &&
        enemyPlayer.board.coordinates[yIndex][xIndex].isHit === false
      ) {
        aiAttackCoordinates.push([yIndex, xIndex]);
        break;
      }
    } while (pairIsNotUnique);

    return [yIndex, xIndex];
  }
}
export default Player;

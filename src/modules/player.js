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
  generateAttackCoordinates() {
    let pairIsUnique = true;
    let generatedPairs = [];
    let yIndex;
    let xIndex;

    do {
      yIndex = Math.floor(Math.random() * 10);
      xIndex = Math.floor(Math.random() * 10);

      pairIsUnique = !generatedPairs.some(
        (value) => value[0] === yIndex && value[1] === xIndex,
      );

      if (pairIsUnique) {
        generatedPairs.push([yIndex, xIndex]);
      }
    } while (pairIsUnique);

    return [yIndex, xIndex];
  }
}
export default Player;

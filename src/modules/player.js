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
}
export default Player;

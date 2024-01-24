import Ship from './ship.js';

class Gameboard {
  constructor() {
    this.coordinates = [
      [
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
      ],
      [
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
      ],
      [
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
      ],
      [
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
      ],
      [
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
      ],
      [
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
      ],
      [
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
      ],
      [
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
      ],
      [
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
      ],
      [
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
      ],
    ];
  }
  //Gameboards should be able to place ships at specific coordinates by calling the ship factory function.
  placeShip(shipLength, position, shipOrientation) {
    const shipObject = new Ship(shipLength, shipOrientation);
    shipObject.startPostion = position;
    const positionRow = position[0];
    const positionCol = position[1];
    if (this.coordinates[positionRow][positionCol].ship === null) {
      if (shipObject.orientation === 'H') {
        const shipEndpoint = positionCol + (shipObject.length - 1);
        shipObject.endPosition = shipEndpoint;
        if (shipObject.endPosition <= 9) {
          for (let i = 0; i < this.coordinates.length; i++) {
            for (let j = 0; j < this.coordinates[i].length; j++) {
              if (i === positionRow && j >= positionCol && j <= shipEndpoint) {
                if (this.coordinates[i][j].ship === null) {
                  this.coordinates[i][j].ship = shipObject;
                } else {
                  throw new Error('Invalid position: Already contains a ship');
                }
              }
            }
          }
          let topAdjacentRow = positionRow - 1;
          let topAdjacentCol = positionCol - 1;
          let btmAdjacentRow = positionRow + 1;
          let btmAdjacentCol = positionCol - 1;
          if (
            positionRow >= 0 &&
            positionRow <= 9 &&
            positionCol - 1 >= 0 &&
            positionCol - 1 <= 9
          ) {
            this.coordinates[positionRow][positionCol - 1].ship = 'x';
          }
          if (
            positionRow >= 0 &&
            positionRow <= 9 &&
            shipEndpoint + 1 >= 0 &&
            shipEndpoint + 1 <= 9
          ) {
            this.coordinates[positionRow][shipEndpoint + 1].ship = 'x';
          }
          for (let i = 0; i <= shipObject.length - 1 + 2; i++) {
            if (
              topAdjacentRow >= 0 &&
              topAdjacentRow <= 9 &&
              topAdjacentCol >= 0 &&
              topAdjacentCol <= 9
            ) {
              this.coordinates[topAdjacentRow][topAdjacentCol].ship = 'x';
            }
            if (
              btmAdjacentRow >= 0 &&
              btmAdjacentRow <= 9 &&
              btmAdjacentCol >= 0 &&
              btmAdjacentCol <= 9
            ) {
              this.coordinates[btmAdjacentRow][btmAdjacentCol].ship = 'x';
            }
            topAdjacentCol++;
            btmAdjacentCol++;
          }
        } else {
          throw new Error('Invalid Position: Out of bounds.');
        }
      } else if (shipObject.orientation === 'V') {
        const shipEndpoint = positionRow + (shipObject.length - 1);
        shipObject.endPosition = shipEndpoint;
        if (shipObject.endPosition <= 9) {
          for (let i = 0; i < this.coordinates.length; i++) {
            for (let j = 0; j < this.coordinates[i].length; j++) {
              if (j === positionCol && i >= positionRow && i <= shipEndpoint) {
                if (this.coordinates[i][j].ship === null) {
                  this.coordinates[i][j].ship = shipObject;
                } else {
                  throw new Error('Invalid position: Already contains a ship');
                }
              }
            }
          }
          let leftAdjacentRow = positionRow - 1;
          let leftAdjacentCol = positionCol - 1;
          let rightAdjacentRow = positionRow - 1;
          let rightAdjacentCol = positionCol + 1;
          if (
            positionRow - 1 >= 0 &&
            positionRow - 1 <= 9 &&
            positionCol >= 0 &&
            positionCol <= 9
          ) {
            this.coordinates[positionRow - 1][positionCol].ship = 'x';
          }
          if (
            shipEndpoint + 1 >= 0 &&
            shipEndpoint + 1 <= 9 &&
            positionCol >= 0 &&
            positionCol <= 9
          ) {
            this.coordinates[shipEndpoint + 1][positionCol].ship = 'x';
          }
          for (let i = 0; i <= shipObject.length - 1 + 2; i++) {
            if (
              leftAdjacentRow >= 0 &&
              leftAdjacentRow <= 9 &&
              leftAdjacentCol >= 0 &&
              leftAdjacentCol <= 9
            ) {
              this.coordinates[leftAdjacentRow][leftAdjacentCol].ship = 'x';
            }
            if (
              rightAdjacentRow >= 0 &&
              rightAdjacentRow <= 9 &&
              rightAdjacentCol >= 0 &&
              rightAdjacentCol <= 9
            ) {
              this.coordinates[rightAdjacentRow][rightAdjacentCol].ship = 'x';
            }
            leftAdjacentRow++;
            rightAdjacentRow++;
          }
        } else {
          throw new Error('Invalid Position: Out of bounds.');
        }
      }
    } else {
      throw new Error('Invalid position: Already contains a ship');
    }
  }
  receiveAttack(position) {
    const positionRow = position[0];
    const positionCol = position[1];
    this.coordinates[positionRow].forEach((value, index) => {
      if (index === positionCol) {
        if (
          value.isHit === false &&
          value.ship !== null &&
          typeof value.ship === 'object'
        ) {
          value.ship.hit();
          value.isHit = true;
        } else if (value.isHit === false) {
          value.isHit = true;
        }
      }
    });
  }
  allShipsSunk() {
    let shipsNotSunk = [];
    for (let i = 0; i < this.coordinates.length; i++) {
      for (let j = 0; j < this.coordinates[i].length; j++) {
        if (
          this.coordinates[i][j].ship !== null &&
          typeof this.coordinates[i][j].ship === 'object'
        ) {
          if (!this.coordinates[i][j].ship.isSunk()) {
            shipsNotSunk.push(this.coordinates[i][j].ship);
          }
        }
      }
    }
    if (shipsNotSunk.length > 0) {
      return false;
    } else {
      return true;
    }
  }
}

export default Gameboard;

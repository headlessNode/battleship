import Ship from './ship.js';

class Gameboard {
  constructor() {
    this.coordinates = [
      [
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
      ],
      [
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
      ],
      [
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
      ],
      [
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
      ],
      [
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
      ],
      [
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
      ],
      [
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
      ],
      [
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
      ],
      [
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
      ],
      [
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
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
        if (positionCol + shipObject.length <= 9) {
          const shipEndpoint = positionCol + shipObject.length;
          shipObject.endPosition = shipEndpoint;
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
        } else {
          throw new Error('Invalid Position: Out of bounds.');
        }
      } else if (shipObject.orientation === 'V') {
        if (positionRow + shipObject.length <= 9) {
          const shipEndpoint = positionRow + shipObject.length;
          shipObject.endPosition = shipEndpoint;
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
        } else {
          throw new Error('Invalid Position: Out of bounds.');
        }
      }
    } else {
      throw new Error('Invalid position: Already contains a ship');
    }

    return shipObject;
  }
  receiveAttack(position) {
    const positionRow = position[0];
    const positionCol = position[1];
    this.coordinates[positionRow].forEach((value, index) => {
      if (index === positionCol) {
        if (value.isHit === false && value.ship !== null) {
          value.ship.hit();
          value.isHit = true;
          if (value.ship.isSunk()) {
            value.isSunk = true;
          }
        } else if (value.isHit === false && value.ship === null) {
          value.isHit = true;
        }
      }
    });
  }
}

export default Gameboard;

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
        const shipEndpoint = positionCol + shipObject.length;
        shipObject.endPosition = shipEndpoint;
        for (let i = 0; i < this.coordinates.length; i++) {
          for (let j = 0; j < this.coordinates[i].length; j++) {
            if (j >= positionCol && j <= shipEndpoint) {
              this.coordinates[i][j].ship = shipObject;
            }
          }
        }
      } else if (shipObject.orientation === 'V') {
        const shipEndpoint = positionRow + shipObject.length;
        shipObject.endPosition = shipEndpoint;
        for (let i = 0; i < this.coordinates.length; i++) {
          for (let j = 0; j < this.coordinates[i].length; j++) {
            if (j === positionCol && i <= shipEndpoint) {
              this.coordinates[i][j].ship = shipObject;
            }
          }
        }
      }
    } else {
      throw new Error('Invalid position. Already contains a ship');
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
        } else if (value.isHit === false && value.ship === null) {
          value.isHit = true;
        }
      }
    });
  }
}

export default Gameboard;

import { expect, jest, test } from '@jest/globals';
import Gameboard from '../modules/gameBoard.js';
import Ship from '../modules/ship.js';

describe('test gameBoard methods', () => {
  const boardOne = new Gameboard();
  const shipObject = new Ship(4);
  test('place ship at specific coordinates', () => {
    const shipPosition = [3, 4];
    const positionRow = shipPosition[0];
    const positionCol = shipPosition[1];
    const shipEndpoint = positionCol + shipObject.length;
    boardOne.placeShip(shipObject, shipPosition, 'horizontal');
    expect(shipObject.orientation).toMatch('horizontal');
    for (let i = 0; i < boardOne.coordinates.length; i++) {
      for (let j = 0; j < boardOne.coordinates[i].length; j++) {
        if (positionRow === i && positionCol === j) {
          expect(boardOne.coordinates[i][j]).toEqual(1);
        } else if (positionRow === i && j > positionCol && j <= shipEndpoint) {
          expect(boardOne.coordinates[i][j]).toEqual(1);
        }
      }
    }
  });
});

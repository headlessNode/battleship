import { expect, jest, test } from '@jest/globals';
import Gameboard from '../modules/gameBoard.js';
import Ship from '../modules/ship.js';

describe('test gameBoard methods', () => {
  const boardOne = new Gameboard();
  test('place ship at specific coordinates with horizontal orientation', () => {
    const shipLength = 4;
    const shipOrientation = 'H';
    const shipPosition = [3, 4];
    const shipObject = boardOne.placeShip(
      shipLength,
      shipPosition,
      shipOrientation,
    );
    const positionRow = shipPosition[0];
    const positionCol = shipPosition[1];
    const shipEndpoint = positionCol + shipObject.length;
    expect(shipObject.orientation).toMatch(shipOrientation);
    expect(shipObject.startPostion).toEqual(shipPosition);
    expect(shipObject.endPosition).toEqual(shipEndpoint);
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
  test('place ship at specific coordinates with vertical orientation', () => {
    const shipLength = 4;
    const shipOrientation = 'H';
    const shipPosition = [3, 4];
    const shipObject = boardOne.placeShip(
      shipLength,
      shipPosition,
      shipOrientation,
    );
    const positionRow = shipPosition[0];
    const positionCol = shipPosition[1];
    const shipEndpoint = positionCol + shipObject.length;
    expect(shipObject.orientation).toMatch(shipOrientation);
    expect(shipObject.startPostion).toEqual(shipPosition);
    expect(shipObject.endPosition).toEqual(shipEndpoint);
    for (let i = 0; i < boardOne.coordinates.length; i++) {
      for (let j = 0; j < boardOne.coordinates[i].length; j++) {
        if (j === positionCol && i > positionRow && i <= shipEndpoint) {
          expect(boardOne.coordinates[i][j]).toEqual(1);
        }
      }
    }
  });
});

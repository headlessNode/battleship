import { expect, test } from '@jest/globals';
import Gameboard from '../modules/gameBoard.js';

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
          expect(boardOne.coordinates[i][j].ship).toEqual(shipObject);
        } else if (positionRow === i && j >= positionCol && j <= shipEndpoint) {
          expect(boardOne.coordinates[i][j].ship).toEqual(shipObject);
        }
      }
    }
  });
  test('place ship at specific coordinates with vertical orientation', () => {
    const shipLength = 4;
    const shipOrientation = 'V';
    const shipPosition = [2, 3];
    const shipObject = boardOne.placeShip(
      shipLength,
      shipPosition,
      shipOrientation,
    );
    const positionRow = shipPosition[0];
    const positionCol = shipPosition[1];
    const shipEndpoint = positionRow + shipObject.length;
    expect(shipObject.orientation).toMatch(shipOrientation);
    expect(shipObject.startPostion).toEqual(shipPosition);
    expect(shipObject.endPosition).toEqual(shipEndpoint);
    for (let i = 0; i < boardOne.coordinates.length; i++) {
      for (let j = 0; j < boardOne.coordinates[i].length; j++) {
        if (j === positionCol && i >= positionRow && i <= shipEndpoint) {
          expect(boardOne.coordinates[i][j].ship).toEqual(shipObject);
        }
      }
    }
  });
  test('place a ship at coordinates already containing a ship', () => {
    const shipLength = 4;
    const shipOrientation = 'V';
    const shipPosition = [3, 4];

    expect(() => {
      boardOne.placeShip(shipLength, shipPosition, shipOrientation);
    }).toThrowError('Invalid position: Already contains a ship');
  });
  test('place ship out of the bounds of coordinates', () => {
    const shipLength = 4;
    const shipOrientation = 'H';
    const shipPosition = [1, 8];
    expect(() => {
      boardOne.placeShip(shipLength, shipPosition, shipOrientation);
    }).toThrowError('Invalid Position: Out of bounds.');
  });
  test('place ship at specific coordinates and gameboard recieves an attack on that coordinate', () => {
    const shipLength = 4;
    const shipOrientation = 'V';
    const shipPosition = [5, 8];
    const shipObject = boardOne.placeShip(
      shipLength,
      shipPosition,
      shipOrientation,
    );
    const positionRow = shipPosition[0];
    const shipEndpoint = positionRow + shipObject.length;
    expect(shipObject.orientation).toMatch(shipOrientation);
    expect(shipObject.startPostion).toEqual(shipPosition);
    expect(shipObject.endPosition).toEqual(shipEndpoint);
    boardOne.receiveAttack([5, 8]);
    expect(boardOne.coordinates[5][8]).toEqual({
      ship: shipObject,
      isHit: true,
    });
  });
  test('gameboard recieves an attack on a coordinate without a ship', () => {
    boardOne.receiveAttack([6, 7]);
    expect(boardOne.coordinates[6][7]).toEqual({
      ship: null,
      isHit: true,
    });
  });
});

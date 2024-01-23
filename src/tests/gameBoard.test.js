import { expect, test } from '@jest/globals';
import Gameboard from '../modules/gameBoard.js';

describe('test gameBoard methods', () => {
  const boardOne = new Gameboard();
  test('place ship at specific coordinates with horizontal orientation', () => {
    const shipLength = 4;
    const shipOrientation = 'H';
    const shipPosition = [3, 4];
    boardOne.placeShip(shipLength, shipPosition, shipOrientation);
    const positionRow = shipPosition[0];
    const positionCol = shipPosition[1];
    const shipEndpoint = positionCol + (shipLength - 1);
    for (let i = 0; i < boardOne.coordinates.length; i++) {
      for (let j = 0; j < boardOne.coordinates[i].length; j++) {
        if (positionRow === i && positionCol === j) {
          expect(boardOne.coordinates[i][j].ship).not.toBe(null);
        } else if (positionRow === i && j >= positionCol && j <= shipEndpoint) {
          expect(boardOne.coordinates[i][j].ship).not.toBe(null);
        }
      }
    }
  });
  test('place ship at specific coordinates with vertical orientation', () => {
    const shipLength = 4;
    const shipOrientation = 'V';
    const shipPosition = [2, 2];
    boardOne.placeShip(shipLength, shipPosition, shipOrientation);
    const positionRow = shipPosition[0];
    const positionCol = shipPosition[1];
    const shipEndpoint = positionRow + (shipLength - 1);
    for (let i = 0; i < boardOne.coordinates.length; i++) {
      for (let j = 0; j < boardOne.coordinates[i].length; j++) {
        if (j === positionCol && i >= positionRow && i <= shipEndpoint) {
          expect(boardOne.coordinates[i][j].ship).not.toBe(null);
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
    boardOne.placeShip(shipLength, shipPosition, shipOrientation);
    boardOne.receiveAttack([5, 8]);
    expect(boardOne.coordinates[5][8].isHit).toBe(true);
    expect(boardOne.coordinates[5][8].ship).not.toBe(null);
  });
  test('gameboard recieves an attack on a coordinate without a ship', () => {
    boardOne.receiveAttack([9, 0]);
    expect(boardOne.coordinates[9][0].ship).toBe(null);
    expect(boardOne.coordinates[9][0].isHit).toBe(true);
  });
  test('ship is hit times equal to its length, all isSunk properties corresponding to that ship coordinates must be true', () => {
    const shipLength = 4;
    const shipOrientation = 'V';
    const shipPosition = [0, 0];
    boardOne.placeShip(shipLength, shipPosition, shipOrientation);
    boardOne.receiveAttack([0, 0]);
    boardOne.receiveAttack([1, 0]);
    boardOne.receiveAttack([2, 0]);
    boardOne.receiveAttack([3, 0]);
    expect(boardOne.coordinates[0][0].ship).not.toBe(null);
    expect(boardOne.coordinates[1][0].ship).not.toBe(null);
    expect(boardOne.coordinates[2][0].ship).not.toBe(null);
    expect(boardOne.coordinates[3][0].ship).not.toBe(null);
    expect(boardOne.coordinates[0][0].ship.isSunk()).toBe(true);
    expect(boardOne.coordinates[1][0].ship.isSunk()).toBe(true);
    expect(boardOne.coordinates[2][0].ship.isSunk()).toBe(true);
    expect(boardOne.coordinates[3][0].ship.isSunk()).toBe(true);
  });
  describe('test for gameboard method allShipsSunk', () => {
    test('all ships are sunk', () => {
      const boardTwo = new Gameboard();
      boardTwo.placeShip(1, [0, 0], 'V');
      boardTwo.placeShip(1, [0, 9], 'H');
      boardTwo.placeShip(1, [9, 0], 'V');
      boardTwo.placeShip(1, [9, 9], 'H');
      boardTwo.receiveAttack([0, 0]);
      boardTwo.receiveAttack([0, 9]);
      boardTwo.receiveAttack([2, 0]);
      boardTwo.receiveAttack([9, 0]);
      boardTwo.receiveAttack([9, 9]);

      expect(boardTwo.allShipsSunk()).toBe(true);
    });
    test('some ships are sunk', () => {
      const boardThree = new Gameboard();
      boardThree.placeShip(3, [0, 0], 'V');
      boardThree.placeShip(4, [0, 2], 'H');
      boardThree.placeShip(2, [4, 5], 'V');
      boardThree.placeShip(1, [9, 9], 'H');
      boardThree.receiveAttack([0, 0]);
      boardThree.receiveAttack([1, 0]);
      boardThree.receiveAttack([2, 0]);
      boardThree.receiveAttack([0, 2]);
      boardThree.receiveAttack([0, 3]);
      boardThree.receiveAttack([0, 4]);
      boardThree.receiveAttack([0, 5]);
      boardThree.receiveAttack([4, 5]);
      boardThree.receiveAttack([5, 5]);
      expect(typeof boardThree.coordinates[9][9].ship).toBe('object');
      expect(boardThree.coordinates[9][9].isSunk).toBe(false);
      expect(boardThree.allShipsSunk()).toBe(false);
    });
  });
  test('placing ships adjacent to each other results in error', () => {
    const boardFour = new Gameboard();
    boardFour.placeShip(3, [0, 0], 'V');
    expect(() => {
      boardFour.placeShip(1, [0, 1], 'V');
    }).toThrowError('Invalid position: Already contains a ship');
    expect(() => {
      boardFour.placeShip(1, [1, 1], 'V');
    }).toThrowError('Invalid position: Already contains a ship');
    expect(() => {
      boardFour.placeShip(1, [2, 1], 'V');
    }).toThrowError('Invalid position: Already contains a ship');
    expect(() => {
      boardFour.placeShip(1, [3, 1], 'V');
    }).toThrowError('Invalid position: Already contains a ship');
    expect(() => {
      boardFour.placeShip(1, [3, 0], 'V');
    }).toThrowError('Invalid position: Already contains a ship');
  });
});

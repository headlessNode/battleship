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
    const shipPosition = [2, 3];
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
    boardOne.receiveAttack([6, 7]);
    expect(boardOne.coordinates[6][7].isHit).toBe(true);
    expect(boardOne.coordinates[6][7].ship).toBe(null);
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
    expect(boardOne.coordinates[0][0].isSunk).toBe(true);
    expect(boardOne.coordinates[1][0].isSunk).toBe(true);
    expect(boardOne.coordinates[2][0].isSunk).toBe(true);
    expect(boardOne.coordinates[3][0].isSunk).toBe(true);
  });
  describe('test for gameboard method allShipsSunk', () => {
    test('all ships are sunk', () => {
      const boardTwo = new Gameboard();
      boardTwo.placeShip(3, [0, 0], 'V');
      boardTwo.placeShip(4, [0, 1], 'H');
      boardTwo.placeShip(2, [4, 5], 'V');
      boardTwo.placeShip(1, [9, 9], 'H');
      boardTwo.receiveAttack([0, 0]);
      boardTwo.receiveAttack([1, 0]);
      boardTwo.receiveAttack([2, 0]);
      boardTwo.receiveAttack([0, 1]);
      boardTwo.receiveAttack([0, 2]);
      boardTwo.receiveAttack([0, 3]);
      boardTwo.receiveAttack([0, 4]);
      boardTwo.receiveAttack([4, 5]);
      boardTwo.receiveAttack([5, 5]);
      boardTwo.receiveAttack([9, 9]);

      expect(boardTwo.allShipsSunk()).toBe(true);
    });
    test('some ships are sunk', () => {
      const boardThree = new Gameboard();
      boardThree.placeShip(3, [0, 0], 'V');
      boardThree.placeShip(4, [0, 1], 'H');
      boardThree.placeShip(2, [4, 5], 'V');
      boardThree.placeShip(1, [9, 9], 'H');
      boardThree.receiveAttack([0, 0]);
      boardThree.receiveAttack([1, 0]);
      boardThree.receiveAttack([2, 0]);
      boardThree.receiveAttack([1, 0]);
      boardThree.receiveAttack([1, 1]);
      boardThree.receiveAttack([1, 2]);
      boardThree.receiveAttack([1, 3]);
      boardThree.receiveAttack([4, 5]);
      boardThree.receiveAttack([5, 5]);
      boardThree.receiveAttack([9, 9]);

      expect(boardThree.allShipsSunk()).toBe(false);
    });
  });
});

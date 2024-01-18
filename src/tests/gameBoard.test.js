import { expect, jest, test } from '@jest/globals';
import Gameboard from '../modules/gameBoard.js';
import Ship from '../modules/ship.js';

describe('test gameBoard methods', () => {
  const boardOne = new Gameboard();
  const shipObject = new Ship(4);
  test('place ship at a specific position', () => {
    boardOne.placeShip(shipObject, ['A', 4], 'horizontal');
    expect(shipObject.position).toEqual(['A', 4]);
    expect(shipObject.orientation).toMatch('horizontal');
  });
});

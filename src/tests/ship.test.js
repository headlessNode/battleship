import { expect, jest, test } from '@jest/globals';
import Ship from '../modules/ship.js';

describe('test ship methods', () => {
  test('hit method is called', () => {
    const shipLength = 3;
    const shipObject = new Ship(shipLength);
    const hitSpy = jest.spyOn(shipObject, 'hit');

    expect(shipObject.hit()).toBeUndefined();
    expect(hitSpy).toHaveBeenCalled();
  });
  test('isSunk method is called', () => {
    const shipLength = 3;
    const shipObject = new Ship(shipLength);
    const isSunkSpy = jest.spyOn(shipObject, 'isSunk');
    expect(shipObject.isSunk()).toBe(false);
    expect(isSunkSpy).toHaveBeenCalled();
  });
  test('hit method throws error when call > length', () => {
    const shipLength = 3;
    const shipObject = new Ship(shipLength);
    const hitSpy = jest.spyOn(shipObject, 'hit');
    for (let i = 0; i === shipLength + 1; i++) {
      if (i > shipLength) {
        expect(() => {
          shipObject.hit();
        }).toThrowError('Hits cannot exceed Length');
      } else {
        expect(hitSpy).toHaveBeenCalled();
      }
    }
  });
  test('isSunk method returns true if hits equals length', () => {
    const shipLength = 3;
    const shipObject = new Ship(shipLength);
    shipObject.hit();
    shipObject.hit();
    shipObject.hit();
    expect(shipObject.isSunk()).toBe(true);
  });
});

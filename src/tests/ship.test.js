import { expect, jest, test } from '@jest/globals';
import Ship from '../modules/ship.js';

describe('test ship methods', () => {
  const shipLength = 3;
  const shipObject = new Ship(shipLength);
  test('hit method is called', () => {
    const hitSpy = jest.spyOn(shipObject, 'hit');

    expect(shipObject.hit()).toBeUndefined();
    expect(hitSpy).toHaveBeenCalled();
  });
  test('isSunk method is called', () => {
    const isSunkSpy = jest.spyOn(shipObject, 'isSunk');
    expect(shipObject.isSunk()).toBe(false);
    expect(isSunkSpy).toHaveBeenCalled();
  });
  test('hit method throws error when call > length', () => {
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
});

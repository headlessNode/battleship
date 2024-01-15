import Ship from '../modules/ship.js';

describe('test ship methods', () => {
  const shipObject = new Ship(3, 0, false);
  test('hit on the ship', () => {
    expect(shipObject.hit()).toBeUndefined();
  });
  test('sunk status of the ship', () => {
    expect(shipObject.isSunk()).toBeUndefined();
  });
});

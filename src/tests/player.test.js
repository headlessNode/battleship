import { expect, test } from '@jest/globals';
import Player from '../modules/player.js';
import Gameboard from '../modules/gameBoard.js';

describe('create players and test methods', () => {
  const playerBoard = new Gameboard();
  const computerBoard = new Gameboard();
  const humanPlayer = new Player('odin', playerBoard);
  const computerPlayer = new Player('ai', computerBoard);
  test('Human and computer players place ships on their boards', () => {
    humanPlayer.placeShipOnBoard(3, [0, 0], 'H');
    humanPlayer.placeShipOnBoard(2, [2, 5], 'V');
    humanPlayer.placeShipOnBoard(3, [5, 9], 'V');
    computerPlayer.placeShipOnBoard(3, [1, 0], 'H');
    computerPlayer.placeShipOnBoard(2, [3, 7], 'V');
    computerPlayer.placeShipOnBoard(3, [3, 9], 'V');
    //playerboard
    expect(humanPlayer.board.coordinates[0][0].ship).not.toBe(null);
    expect(humanPlayer.board.coordinates[0][1].ship).not.toBe(null);
    expect(humanPlayer.board.coordinates[0][2].ship).not.toBe(null);
    expect(humanPlayer.board.coordinates[0][3].ship).toBe(null);
    expect(humanPlayer.board.coordinates[2][5].ship).not.toBe(null);
    expect(humanPlayer.board.coordinates[3][5].ship).not.toBe(null);
    expect(humanPlayer.board.coordinates[4][5].ship).toBe(null);
    expect(humanPlayer.board.coordinates[5][9].ship).not.toBe(null);
    expect(humanPlayer.board.coordinates[6][9].ship).not.toBe(null);
    expect(humanPlayer.board.coordinates[7][9].ship).not.toBe(null);
    expect(humanPlayer.board.coordinates[8][9].ship).toBe(null);
    //computerboard
    expect(computerPlayer.board.coordinates[1][0].ship).not.toBe(null);
    expect(computerPlayer.board.coordinates[1][1].ship).not.toBe(null);
    expect(computerPlayer.board.coordinates[1][2].ship).not.toBe(null);
    expect(computerPlayer.board.coordinates[1][3].ship).toBe(null);
    expect(computerPlayer.board.coordinates[3][7].ship).not.toBe(null);
    expect(computerPlayer.board.coordinates[4][7].ship).not.toBe(null);
    expect(computerPlayer.board.coordinates[5][7].ship).toBe(null);
    expect(computerPlayer.board.coordinates[3][9].ship).not.toBe(null);
    expect(computerPlayer.board.coordinates[4][9].ship).not.toBe(null);
    expect(computerPlayer.board.coordinates[5][9].ship).not.toBe(null);
    expect(computerPlayer.board.coordinates[6][9].ship).toBe(null);
  });
  test('Human and computer players attack each others boards', () => {
    humanPlayer.attackEnemy([1, 0], computerPlayer);
    humanPlayer.attackEnemy([3, 5], computerPlayer);
    humanPlayer.attackEnemy([4, 0], computerPlayer);
    humanPlayer.attackEnemy([9, 1], computerPlayer);
    humanPlayer.attackEnemy([7, 9], computerPlayer);

    computerPlayer.attackEnemy([2, 0], humanPlayer);
    computerPlayer.attackEnemy([9, 5], humanPlayer);
    computerPlayer.attackEnemy([2, 8], humanPlayer);
    computerPlayer.attackEnemy([3, 7], humanPlayer);
    computerPlayer.attackEnemy([6, 1], humanPlayer);

    //check results of human attacks
    expect(computerPlayer.board.coordinates[1][0].isHit).toBe(true);
    expect(computerPlayer.board.coordinates[3][5].isHit).toBe(true);
    expect(computerPlayer.board.coordinates[4][0].isHit).toBe(true);
    expect(computerPlayer.board.coordinates[9][1].isHit).toBe(true);
    expect(computerPlayer.board.coordinates[7][9].isHit).toBe(true);
    //check results of computer attacks
    expect(humanPlayer.board.coordinates[2][0].isHit).toBe(true);
    expect(humanPlayer.board.coordinates[9][5].isHit).toBe(true);
    expect(humanPlayer.board.coordinates[2][8].isHit).toBe(true);
    expect(humanPlayer.board.coordinates[3][7].isHit).toBe(true);
    expect(humanPlayer.board.coordinates[6][1].isHit).toBe(true);
  });
});

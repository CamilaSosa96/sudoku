'use strict';

import Board from '../src/board.js';
import Position from '../src/position.js';
import BoardFixture from './fixtures/boards.js';
import chai from 'chai';

let expect = chai.expect;

describe('Position', () => {
  describe('#availableNumbers', () => {
    it('should be a Function', () => {
      expect(Position.prototype.availableNumbers).to.be.a('function');
    });

    it('should return the available numbers by the given position on the board 9x9', () => {
      let board = new Board(BoardFixture['9x9'].incompleted);
      let position = new Position(0, 7, board);
      expect(position.availableNumbers()).to.deep.equal([1, 2, 4, 9]);
    });

    it('should return the available numbers by the given position on the board 16x16', () => {
      let board = new Board(BoardFixture['16x16'].incompleted);
      let position = new Position(7, 2, board);
      expect(position.availableNumbers()).to.deep.equal([1, 4, 6, 9, 10, 15]);
    });
  });

  describe('#related', () => {
    it('should return the related by the given position', () => {
    let result = [
      [3, 0], [3, 1], [3, 2], [3, 3], [3, 4], [3, 5], [3, 6], [3, 7], [3, 8],
      [0, 4], [1, 4], [2, 4], [3, 4], [4, 4], [5, 4], [6, 4], [7, 4], [8, 4],
      [3, 3], [3, 4], [3, 5], [4, 3], [4, 4], [4, 5], [5, 3], [5, 4], [5, 5]
    ];
    let board = new Board(BoardFixture['9x9'].incompleted);
    let position = new Position(3, 4, board);
    expect(position.related).to.deep.equal(result);
    });
  });

  describe('#relatedByLine', () => {
    it('should return the related line by the given position', () => {
      let result = [[3, 0], [3, 1], [3, 2], [3, 3], [3, 4], [3, 5], [3, 6], [3, 7], [3, 8]];
      let board = new Board(BoardFixture['9x9'].incompleted);
      let position = new Position(3, 4, board);
      expect(position.relatedByLine).to.deep.equal(result);
    });
  });

  describe('#relatedByColumn', () => {
    it('should return the related column by the given position', () => {
      let result = [[0, 4], [1, 4], [2, 4], [3, 4], [4, 4], [5, 4], [6, 4], [7, 4], [8, 4]];
      let board = new Board(BoardFixture['9x9'].incompleted);
      let position = new Position(3, 4, board);
      expect(position.relatedByColumn).to.deep.equal(result);
    });
  });

  describe('#relatedBySquare', () => {
    it('should return the related square by the given position', () => {
      let result = [[3, 3], [3, 4], [3, 5], [4, 3], [4, 4], [4, 5], [5, 3], [5, 4], [5, 5]];
      let board = new Board(BoardFixture['9x9'].incompleted);
      let position = new Position(3, 4, board);
      expect(position.relatedBySquare).to.deep.equal(result);
    });
  });

  describe('#relatedPivot', () => {
    it('should return the related pivot by the given position', () => {
      let board = new Board(BoardFixture['9x9'].incompleted);
      let position = new Position(7, 8, board);
      expect(position.relatedPivot).to.deep.equal([6, 6]);
    });
  });

  describe('#value', () => {
    it('should return the value by the given position', () => {
      let board = new Board(BoardFixture['16x16'].completed);
      let position = new Position(5, 10, board);
      expect(position.value).to.equal(16);
    });
  });

  describe('when instantiated', () => {
    it('should return an Object', () => {
      let position = new Position();
      expect(position).to.be.an('object');
    });
  });
});
'use strict';

const expect = require('chai').expect;
const Search = require('../../commands/search');

describe('Search module', () => {
  describe('"run"', () => {
    it('should export a function', () => {
      expect(Search.run).to.be.a('function');
    });
  });
});

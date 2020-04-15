'use strict';

const rewire = require('rewire');
const expect = require('chai').expect;
const Search = rewire('../../utils/search');

describe('Search util', () => {
  it('should export a function', () => {
    expect(Search).to.be.a('function');
  });
  it('should return an array', () => {
    Search.__set__('yt', require('../mocks/youtube-search'));
    const result = Search('Dr feelgood');
    expect(result).to.be.a('array');
    expect(result).to.deep.equal(
      [
        'Dr feelgood',
        10
      ]
    );
  });
});

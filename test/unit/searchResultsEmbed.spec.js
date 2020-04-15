'use strict';

const expect = require('chai').expect;
const embed = require('../../src/utils/embeds/searchResultsEmbed');
const results = require('../data/search_dr_feelgood');

describe('Search Results Embed', () => {
  it('should export a function', () => {
    expect(embed).to.be.a('function');
  });

  it('creates an embed message', () => {
    const expected = {
      title: undefined,
      type: 'rich',
      fields: [],
      url: undefined,
      timestamp: null,
      color: 65280,
      thumbnail: null,
      image: null
    };

    const result = embed('Dr Feelgood', results).toJSON();

    for (const [key, value] of Object.entries(expected)) {
      expect(result).to.haveOwnProperty(key);
      expect(result[key]).to.deep.equal(value);
    }

    expect(result.author.name).to.equal('Results for "Dr Feelgood"');

    expect(result.description.split('\r\n').length).to.equal(10);
  });
});

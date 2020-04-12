'use strict';

const expect = require('chai').expect;
const embed = require('../../utils/createEmbed');
const results = require('../data/search_dr_feelgood');

describe('Search Results Embed', () => {
  it('should export a function', () => {
    expect(embed).to.be.a('function');
  });

  it('creates an embed message', () => {
    const expected = {
      title: undefined,
      type: 'rich',
      description: 'Results for "Dr Feelgood"',
      url: undefined,
      timestamp: null,
      color: 65280,
      thumbnail: null,
      image: null,
      author: null,
      footer: null
    };

    const result = embed('Dr Feelgood', results).toJSON();

    for (const [key, value] of Object.entries(expected)) {
      expect(result).to.haveOwnProperty(key);
      expect(result[key]).to.equal(value);
    }

    expect(result.fields).to.be.a('array');
    expect(result.fields.length).to.equal(10);
  });
});

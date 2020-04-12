'use strict';

const expect = require('chai').expect;
const embed = require('../../utils/errorEmbed');

describe('Error Embed', () => {
  it('should export a function', () => {
    expect(embed).to.be.a('function');
  });

  it('creates an embed message', () => {
    const result = embed('This is an error message');

    expect(result.toJSON()).to.deep.equal(
      {
        title: 'Error',
        type: 'rich',
        description: ':x: This is an error message',
        url: undefined,
        timestamp: null,
        color: 16711680,
        fields: [],
        thumbnail: null,
        image: null,
        author: null,
        footer: null
      }
    );
  });
});

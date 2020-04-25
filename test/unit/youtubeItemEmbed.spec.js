'use strict';

const expect = require('chai').expect;
const embed = require('~utils/embeds/youtubeItemEmbed');
const itemDetails = require('../data/search_dr_feelgood')[0];
itemDetails.user = {
  name: 'Joe Bloggs',
  avatarURL: 'https://api.adorable.io/avatars/285/abott@adorable.png'
};

describe('Youtube Item Embed', () => {
  it('should export a function', () => {
    expect(embed).to.be.a('function');
  });

  it('creates an embed message', () => {
    const expected = {
      title: 'Mötley Crüe - Dr. Feelgood (Official Music Video)',
      type: 'rich',
      description: undefined,
      url: 'https://www.youtube.com/watch?v=trGX3ET3jTQ',
      timestamp: null,
      color: 65280,
      fields: [],
      thumbnail: { url: 'https://i.ytimg.com/vi/trGX3ET3jTQ/default.jpg' },
      image: null,
      author: null,
      footer: {
        text: 'Added by Joe Bloggs',
        icon_url: 'https://api.adorable.io/avatars/285/abott@adorable.png'
      }
    };

    const result = embed(itemDetails).toJSON();

    for (const [key, value] of Object.entries(expected)) {
      expect(result).to.haveOwnProperty(key);
      expect(result[key]).to.deep.equal(value);
    }
  });
});

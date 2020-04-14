'use strict';

const expect = require('chai').expect;
const Search = require('../../commands/search');

describe('Search module', () => {
  describe('"run"', () => {
    it('should export a function', () => {
      expect(Search.run).to.be.a('function');
    });
  });

  describe('"help"', () => {
    it('should export an object', () => {
      expect(Search.help).to.be.a('object');
    });

    it('should have a name', () => {
      expect(Search.help.name).to.exist;
      expect(Search.help.name).to.be.a('string');
      expect(Search.help.name).to.not.equal('');
    });

    it('should have a description', () => {
      expect(Search.help.description).to.exist;
      expect(Search.help.description).to.be.a('string');
      expect(Search.help.description).to.not.equal('');
    });

    it('should have a usage section', () => {
      expect(Search.help.usage).to.exist;
      expect(Search.help.usage).to.be.a('string');
      expect(Search.help.usage).to.not.equal('');
    });

    // name: 'help',
    // description: 'Displays help for available commands.',
    // usage: 'help [command]'
  });
});

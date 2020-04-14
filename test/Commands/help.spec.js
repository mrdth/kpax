'use strict';

const expect = require('chai').expect;
const Help = require('../../commands/help');

describe('Help module', () => {
  describe('"run"', () => {
    it('should export a function', () => {
      expect(Help.run).to.be.a('function');
    });
  });

  describe('"help"', () => {
    it('should export an object', () => {
      expect(Help.help).to.be.a('object');
    });

    it('should have a name', () => {
      expect(Help.help.name).to.exist;
      expect(Help.help.name).to.be.a('string');
      expect(Help.help.name).to.not.equal('');
    });

    it('should have a description', () => {
      expect(Help.help.description).to.exist;
      expect(Help.help.description).to.be.a('string');
      expect(Help.help.description).to.not.equal('');
    });

    it('should have a usage section', () => {
      expect(Help.help.usage).to.exist;
      expect(Help.help.usage).to.be.a('string');
      expect(Help.help.usage).to.not.equal('');
    });

    // name: 'help',
    // description: 'Displays help for available commands.',
    // usage: 'help [command]'
  });
});

'use strict';

const expect = require('chai').expect;
const Join = require('~commands/join');

describe('Join Command', () => {
  describe('"run"', () => {
    it('should export a function', () => {
      expect(Join.run).to.be.a('function');
    });
  });

  describe('"help"', () => {
    it('should export an object', () => {
      expect(Join.help).to.be.a('object');
    });

    it('should have a name', () => {
      expect(Join.help).to.haveOwnProperty('name');
      expect(Join.help.name).to.be.a('string');
      expect(Join.help.name).to.not.equal('');
    });

    it('should have a description', () => {
      expect(Join.help).to.haveOwnProperty('description');
      expect(Join.help.description).to.be.a('string');
      expect(Join.help.description).to.not.equal('');
    });

    it('should have a usage section', () => {
      expect(Join.help).to.haveOwnProperty('usage');
      expect(Join.help.usage).to.be.a('string');
      expect(Join.help.usage).to.not.equal('');
    });
  });
});

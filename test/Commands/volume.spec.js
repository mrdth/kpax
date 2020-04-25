'use strict';

const expect = require('chai').expect;
const Volume = require('~commands/volume');

describe('Volume Command', () => {
  describe('"run"', () => {
    it('should export a function', () => {
      expect(Volume.run).to.be.a('function');
    });
  });

  describe('"help"', () => {
    it('should export an object', () => {
      expect(Volume.help).to.be.a('object');
    });

    it('should have a name', () => {
      expect(Volume.help).to.haveOwnProperty('name');
      expect(Volume.help.name).to.be.a('string');
      expect(Volume.help.name).to.not.equal('');
    });

    it('should have a description', () => {
      expect(Volume.help).to.haveOwnProperty('description');
      expect(Volume.help.description).to.be.a('string');
      expect(Volume.help.description).to.not.equal('');
    });

    it('should have a usage section', () => {
      expect(Volume.help).to.haveOwnProperty('usage');
      expect(Volume.help.usage).to.be.a('string');
      expect(Volume.help.usage).to.not.equal('');
    });
  });
});

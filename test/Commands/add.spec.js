'use strict';

const expect = require('chai').expect;
const Add = require('../../src/commands/add');

describe('Add Command', () => {
  describe('"run"', () => {
    it('should export a function', () => {
      expect(Add.run).to.be.a('function');
    });
  });

  describe('"help"', () => {
    it('should export an object', () => {
      expect(Add.help).to.be.a('object');
    });

    it('should have a name', () => {
      expect(Add.help).to.haveOwnProperty('name');
      expect(Add.help.name).to.be.a('string');
      expect(Add.help.name).to.not.equal('');
    });

    it('should have a description', () => {
      expect(Add.help).to.haveOwnProperty('description');
      expect(Add.help.description).to.be.a('string');
      expect(Add.help.description).to.not.equal('');
    });

    it('should have a usage section', () => {
      expect(Add.help).to.haveOwnProperty('usage');
      expect(Add.help.usage).to.be.a('string');
      expect(Add.help.usage).to.not.equal('');
    });
  });
});

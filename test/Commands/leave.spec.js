'use strict';

const expect = require('chai').expect;
const Leave = require('~commands/leave');

describe('Leave Command', () => {
  describe('"run"', () => {
    it('should export a function', () => {
      expect(Leave.run).to.be.a('function');
    });
  });

  describe('"help"', () => {
    it('should export an object', () => {
      expect(Leave.help).to.be.a('object');
    });

    it('should have a name', () => {
      expect(Leave.help).to.haveOwnProperty('name');
      expect(Leave.help.name).to.be.a('string');
      expect(Leave.help.name).to.not.equal('');
    });

    it('should have a description', () => {
      expect(Leave.help).to.haveOwnProperty('description');
      expect(Leave.help.description).to.be.a('string');
      expect(Leave.help.description).to.not.equal('');
    });

    it('should have a usage section', () => {
      expect(Leave.help).to.haveOwnProperty('usage');
      expect(Leave.help.usage).to.be.a('string');
      expect(Leave.help.usage).to.not.equal('');
    });
  });
});

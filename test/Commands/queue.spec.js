'use strict';

const expect = require('chai').expect;
const Queue = require('~commands/queue');

describe('Queue Command', () => {
  describe('"run"', () => {
    it('should export a function', () => {
      expect(Queue.run).to.be.a('function');
    });
  });

  describe('"help"', () => {
    it('should export an object', () => {
      expect(Queue.help).to.be.a('object');
    });

    it('should have a name', () => {
      expect(Queue.help).to.haveOwnProperty('name');
      expect(Queue.help.name).to.be.a('string');
      expect(Queue.help.name).to.not.equal('');
    });

    it('should have a description', () => {
      expect(Queue.help).to.haveOwnProperty('description');
      expect(Queue.help.description).to.be.a('string');
      expect(Queue.help.description).to.not.equal('');
    });

    it('should have a usage section', () => {
      expect(Queue.help).to.haveOwnProperty('usage');
      expect(Queue.help.usage).to.be.a('string');
      expect(Queue.help.usage).to.not.equal('');
    });
  });
});

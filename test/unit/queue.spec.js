'use strict';

const expect = require('chai').expect;
const Queue = require('../../utils/queue');

const getFilledArray = (itemCount, offset = 0) => Array.from({ length: itemCount }, (val, idx) => idx + offset);

describe('Queue util', () => {
  it('should export an object', () => {
    expect(Queue).to.be.a('object');
  });

  describe('Properties', () => {
    describe('items', () => {
      it('should exist', () => {
        expect(Queue).to.have.property('items');
      });
      it('should be an array', () => {
        expect(Queue.items).to.be.a('array');
      });
    });
  });

  describe('Methods', () => {
    beforeEach(() => {
      Queue.reset();
    });
    describe('addItem', () => {
      it('should exist and be a function', () => {
        expect(Queue).to.have.property('addItem');
        expect(Queue.addItem).to.be.a('function');
      });

      it('should add an item to the items property', () => {
        expect(Queue.items).to.be.length(0);

        Queue.addItem('test');
        expect(Queue.items).to.be.length(1);
      });
    });

    describe('getNextItem', () => {
      it('should exist and be a function', () => {
        expect(Queue).to.have.property('getNextItem');
        expect(Queue.addItem).to.be.a('function');
      });

      it('should remove & return the first item from the queue', () => {
        Queue.addItem('first');
        Queue.addItem('second');
        Queue.addItem('third');

        expect(Queue.getNextItem()).to.equal('first');
        expect(Queue.items).to.deep.equal(['second', 'third']);
      });
    });

    describe('getItemsPaginated', () => {
      const numberItems = 25;
      const defaultPageLength = 10;

      beforeEach(() => {
        Queue.reset();
        // Quickly add 25 items to the queue
        Array.from(Array(numberItems)).forEach((val, idx) => { Queue.addItem(idx); });
      });

      it('should exist and be a function', () => {
        expect(Queue).to.have.property('getItemsPaginated');
        expect(Queue.getItemsPaginated).to.be.a('function');
      });

      it('should return the first 10 items by default', () => {
        const result = Queue.getItemsPaginated();
        expect(result.items)
          .to
          .deep
          .equal(getFilledArray(defaultPageLength));
      });

      it('should return the current page number', () => {
        const result = Queue.getItemsPaginated();
        expect(result.page).to.equal(1);
      });

      it('should return the last page number', () => {
        const result = Queue.getItemsPaginated();
        expect(result.lastPage).to.equal(3);
      });

      it('should return a text description of the current page', () => {
        const result = Queue.getItemsPaginated();
        expect(result.pageText).to.equal('page 1 of 3');
      });

      it('should return the correct page number when a specific page requested', () => {
        const requestedPage = 2;
        const result = Queue.getItemsPaginated(requestedPage);
        expect(result.page).to.equal(requestedPage);
      });

      it('should return the correct items when a specific page requested', () => {
        const requestedPage = 2;
        const result = Queue.getItemsPaginated(requestedPage);
        expect(result.items)
          .to
          .deep
          .equal(getFilledArray(defaultPageLength, defaultPageLength));
      });

      it('should return the correct number of items when page length specified', () => {
        const firstPage = 1;
        const itemsPerPage = 15;
        const result = Queue.getItemsPaginated(firstPage, itemsPerPage);
        expect(result.items).to.be.length(itemsPerPage);
      });

      it('should return the correct items when page length specified', () => {
        const firstPage = 1;
        const itemsPerPage = 15;
        const result = Queue.getItemsPaginated(firstPage, itemsPerPage);
        expect(result.items)
          .to
          .deep
          .equal(getFilledArray(itemsPerPage));
      });

      it('should return the correct number of pages when page length specified', () => {
        const firstPage = 1;
        const itemsPerPage = 15;
        const result = Queue.getItemsPaginated(firstPage, itemsPerPage);
        expect(result.lastPage).to.equal(2);
      });
    });

    describe('removeItem', () => {
      it('should exist and be a function', () => {
        expect(Queue).to.have.property('removeItem');
        expect(Queue.removeItem).to.be.a('function');
      });
    });

    describe('reset', () => {
      it('should exist and be a function', () => {
        expect(Queue).to.have.property('reset');
        expect(Queue.reset).to.be.a('function');
      });

      it('should empty the items property', () => {
        Queue.addItem('test');
        expect(Queue.items).to.be.not.empty;

        Queue.reset();
        expect(Queue.items).to.be.empty;
      });
    });
  });
});

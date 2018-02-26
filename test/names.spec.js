'use strict';

const { describe, it } = require('mocha');
const assert = require('assert');
const names = require('../src/index');

describe('names', function() {
  describe('all', () => {
    it('should return array of 3 items', () => {
      const result = names.all();
      assert.equal(result.length, 3, 'unexpected amount of items was returned.');
    });
  });
  describe('random', () => {
    it('should return any of available 3 items', () => {
      const all = names.all();
      const result = names.random();
      const actual = all.filter(i => i === result);
      assert.equal(actual.length, 1, 'unexpected random item was returned.');
    });
  });
});

'use strict';

const assert = require('assert');
const largerSquares = require('../lib/largerSquares.js');

describe('largerSquares', () => {
    let initArray = [];
    let finalArray = [];
    beforeEach(() => {
        initArray = [1, 2, 3, 4, 5, 6];
    });

    it('returns an array of all numbers squared that are greater than 20', () => {
        finalArray = [25, 36];
        assert.deepEqual(largerSquares(initArray), finalArray);
    });
});
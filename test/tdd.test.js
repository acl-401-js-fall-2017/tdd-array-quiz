const assert = require('assert');
const greater = require('../lib/tdd');

describe('tdd', () => {
    it('returns different array with square values', () => {
        const arr = [1,4,5,7];
        const greaterArr = greater(arr);
        assert.deepEqual(greaterArr, [25,49]);
    });
})

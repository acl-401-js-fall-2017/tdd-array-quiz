const assert = require('assert')
const tdd =require('../lib/tdd');

describe('tdd', () => {
    it('returns different array with square values', () => {
        const arr = [1,4,5,7];
        const sqArr = tdd.square(arr);
        assert.deepEqual(sqArr, [1,16,25,49]);
    });
})

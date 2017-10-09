const assert = require('assert');
const largeSquares = require('../lib/largeSquares');

describe('largeSquares', ()=>{
    it('should returned squared array of numbers that are larger then 20', ()=>{
        const testArray = [1, 4, 5, 7];
        assert.deepEqual(largeSquares(testArray), [25,49]);
    });
});
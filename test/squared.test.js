let assert = require('assert');
let squared = require('squared');

describe('squared', () => {
    
    it('given an array of numbers it returns a copy of the array with each element squared', () => {
        const arr = [1, 4, 5, 7];
        const squaredArr = squared(arr);
        assert.deepEqual(arr*arr, squaredArr);
    });
});
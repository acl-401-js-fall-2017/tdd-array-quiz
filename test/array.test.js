const assert = require('assert');
const square = require('../lib/arraymethod')


describe('test array method', () => {
    it('square should return an array of squred numbers', () =>{
        assert.deepEqual(square([6,5,7]), [36,25,49]);
    });

    it('square should only return an array where of sqaures of the original array greater than 20', () =>{
        assert.deepEqual(square([1,6,5,7]), [36,25,49]);
    });

});
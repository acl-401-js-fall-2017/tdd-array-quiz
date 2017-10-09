const assert = require('assert');
const squareARR = require('./lab.js');

describe('an array function', () =>{
    let numArr = [];
    let resultArr = [];
    it.skip('returns an array of the n2 numbers over 20', () => {
        let numArr = [1,4,5,7];
        squareARR(numArr);
        assert.deepEquals(resultArr, [25,49]);
    });
});
const assert = require('assert');
const arrayMethod = require('../lib/array');

describe('array method', () => {

    it('should return squares of array elements which are 20 or greater', () => {
        const testArray = [3,4,5,6];
        assert.equal(arrayMethod(testArray), [25, 36] );
    });
});
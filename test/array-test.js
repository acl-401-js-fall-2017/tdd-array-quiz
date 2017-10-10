const assert = require('assert');
const arrayMethod = require('../lib/array');

describe('array method', () => {

    it('should return squares of array elements which are 20 or greater', () => {
        const testArray = [1, 4, 5, 7];
        assert.deepEqual(arrayMethod(testArray), [25, 49] );
    });

    
});
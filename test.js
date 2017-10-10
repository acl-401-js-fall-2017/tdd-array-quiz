const assert = require('assert');
const mathObj = require('../app');

describe('squared', () => {

    it('squares all nums and returns results of more than 20', (done) => {
        const testNums = [2, 3, 4, 5];

        mathObj.squared(testNums, (err, squaredNums) => {
            if(err) return done(err);
            assert.equal(squaredNums, testNums.squared);
            done();
        });
    });
});
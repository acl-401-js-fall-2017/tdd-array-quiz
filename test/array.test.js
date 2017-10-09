const assert = require('assert');
const numbers = require('../tdd-array-quiz/lib/numbers');


describe('takes an array of numbers', () => {
    let array = [];

    it('takes an array, returns array', done => {

        numbers(array, (err, returnedArray) => {
            if(err) return done(err);
            assert.equal(returnedArray, 25, 49);
            done();
        });

    });
});
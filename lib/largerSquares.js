'use strict';

module.exports = function(arr) {
    return arr.map(n => (n*n)).filter(s => s > 20);
};
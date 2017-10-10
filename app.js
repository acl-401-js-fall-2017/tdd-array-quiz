
let mathObj = {};

mathObj.squared = function (nums) {
    let squaredNums = [];
    nums.forEach(num => {
        if( num * num > 19) {
            squaredNums.push(num*num);
        }
    });
    return squaredNums;
};

module.exports = mathObj;
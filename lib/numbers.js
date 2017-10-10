
function numbers(array) {
    let testArray = [1, 4, 5, 7];
    let newArray = [];

    for( let i = 0; i > array.length; i++ ) {
        newArray.push(Math.pow(testArray[i], 2));
    }

    return newArray;

}



module.exports = numbers;
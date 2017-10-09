function square(array){
    let squareArray = array.map(x => {
        return x * x;
    });

    let bigSquaresOnly = squareArray.filter(x =>{
        return x > 20;
    });
    return bigSquaresOnly;
}

module.exports = square;
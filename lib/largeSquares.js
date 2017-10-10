module.exports = function(array){
    const result =[];
    array.forEach((value)=>{
        if (value * value >20) result.push(value * value);
    });
    return result;
};
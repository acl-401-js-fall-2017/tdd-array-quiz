
module.exports = greater;

function greater(array){
    var sq = (array.map(x => x*x)).filter(function(x){
        return x>20;
    });
   return sq;
}
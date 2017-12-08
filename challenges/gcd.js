/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
    var factor = 0 ;
    var lowerNum = 0;
    var higherNum = 0;
    var result = 1;
    var arr = [];
    if(Math.abs(a) >= Math.abs(b)) {lowerNum = Math.abs(b); higherNum = Math.abs(a)}
      if(Math.abs(a) < Math.abs(b)) {lowerNum = Math.abs(a); higherNum = Math.abs(b)}
      
      for(var i = 0; i <= lowerNum; i++){
        factor = i;
        if (lowerNum % factor === 0){arr.push(factor)}
      }
      
     
        for(var j = 0; arr.length > 0; j++){
        factor = arr.shift()
        console.log(higherNum,factor, arr)
        
        if (higherNum % factor === 0){result = factor}
      }
    return result;
    
    }

module.exports = gcd;
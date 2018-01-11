/**
 * I have an array where every number in the range 1...n appears once except for 
 * one number which appears twice.
 *
 * Write a function for finding the number that appears twice.
 *
 * BONUS:
 * Do this in O(n) time
 * Do this in O(1) space
 *
 */
function repeatNumbers(array) {
let x;
let t = array.length;
  for(var i = 0; i < t; i++){
    x = array.shift();
    if(array.indexOf(x) >= 0){break;}
   }
return x;
}

module.exports = repeatNumbers;

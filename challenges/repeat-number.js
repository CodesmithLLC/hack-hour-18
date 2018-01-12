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
  if(array.constructor !== Array) return undefined;
  for(let i = 0; i < array.length; i++){
    if(array.indexOf(array[i]) !== i){
      return array[i];
    }
  }
  return undefined; // if no repeats
}

module.exports = repeatNumbers;

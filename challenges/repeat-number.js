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
    for(let i=0; i < array.length;i++){
      let copy = array.slice();
      let value = copy.splice(i,1);
      if(copy.indexOf(value[0]) !== -1) return value[0];
    }
    return "Number not found!"
  }

module.exports = repeatNumbers;

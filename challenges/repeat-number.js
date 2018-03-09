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

// function repeatNumbers(array) {
//   let max = Math.max(...array);
//   let number = 0;
//   while (max >= 0) {
//     number += max;
//     max -= 1;
//   }
//   return array.reduce((acc, cur) => acc + cur) - number;
// }

function repeatNumbers(array) {
  let supposedSum = (array.length - 1) * (array.length / 2);
  let actualSum = array.reduce((sum, currentValue) => sum + currentValue);
  return actualSum - supposedSum;
}

let array = [1,2,3,4,5,6,7,8,9,10,2];
console.log(repeatNumbers(array));

module.exports = repeatNumbers;

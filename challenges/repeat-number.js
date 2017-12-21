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
  let max = Math.max(...array);
  let number = 0;
  while (max >= 0) {
    number += max;
    max -= 1;
  }
  return array.reduce((acc, cur) => acc + cur) - number;
}

module.exports = repeatNumbers;

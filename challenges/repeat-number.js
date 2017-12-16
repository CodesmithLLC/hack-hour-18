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
  const nums = {};
  for (let i = 0; i < array.length; i++) {
    if (nums[array[i]]) return nums[array[i]];
    else nums[array[i]] = array[i];
  }
}

module.exports = repeatNumbers;

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
  if (Array.isArray(array)) return;
  let temp;

  for (let i = 0; i < array.length; i += 1) {
    if (temp === array[i]) return temp;
    temp = array[i]
  }
}

module.exports = repeatNumbers;

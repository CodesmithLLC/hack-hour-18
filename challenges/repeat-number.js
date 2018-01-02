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
  const highest = array.pop();
  const sum = (highest * (highest - 1)) / 2;
  const sumArr = array.reduce((a, b) => {
    return a + b;
  });
  return sumArr - sum;
}

console.log(repeatNumbers([1, 2, 3, 4, 5, 6, 7, 8, 8, 9]));

module.exports = repeatNumbers;

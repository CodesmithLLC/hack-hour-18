/**
 * Write a function that will take an array of integers, all of which will appear exactly twice,
 * except for one integer that will appear exactly once. Return the integer that appears once.
 *
 * uniqueNumber([1,2,1,3,3]); -> 2
 *
 * BONUS:
 * Complete the challenge in O(n) time
 * Complete the challenge in O(1) space
 *
 */

// Use XOR `^` to solve this in O(n) time and space. '^' is a computer science
// way of converting nums to binary numbers and then comparing them
// its pretty great and Henry explaiend it really well
function uniqueNumber(array) {
  return array.reduce((a, b) => {
    return a ^ b;
  });
}

console.log(uniqueNumber([1,2,1,3,3,2,4])); // -> 4


module.exports = uniqueNumber;

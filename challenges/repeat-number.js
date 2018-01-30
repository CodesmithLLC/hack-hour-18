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

/**
 * SOULTION O(n) time O(n) space
 */
// function repeatNumbers(array) {
//   // Catch edge cases
//   if (!Array.isArray(array)) return undefined;

//   const repeated = array.reduce((acc, val) => {
//     if (acc[val]) {
//       acc = val;
//     } else if (typeof acc === 'object') {
//       acc[val] = 1;
//     }
//     return acc;
//   }, {});
//   // If no number was repeated return undefined
//   if (typeof repeated === 'object') return undefined;
//   return repeated;
// }

/**
 * SOULTION O(n) time O(1) space
 * Not sure how to do this...
 * Idea: Sort array and compare values...
 * I'm not sure of the time complexity of this solution
 */
function repeatNumbers(array) {
  // Catch edge cases
  if (!Array.isArray(array)) return undefined;
  let number = null
  const sorted = array.sort((a, b) => {
    if (a === b) number = a;
    return a - b;
  });
  return number ? number : undefined;
}

console.log(repeatNumbers([1,2,3,4,5,6,4])); // -> 4
console.log(repeatNumbers([1,2,3,3])); // -> 3
console.log(repeatNumbers([1,2,3,4,5,6,7])); // -> undefined
console.log(repeatNumbers('puppies')); // -> undefined

module.exports = repeatNumbers;

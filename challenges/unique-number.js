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
// function uniqueNumber(array) {
//   const hash = {};
//   for (let i = 0; i < array.length; i += 1) {
//     if (hash[array[i]]) {
//       hash[array[i]] += 1
//     } else {
//       hash[array[i]] = 1;
//     }
//   }
//   for (const key in hash) {
//     if (hash[key] === 1) {
//       return key;
//     }
//   }
//   return false;
// }

function uniqueNumber(array) {
  const hash = {};
  for (let i = 0; i < array.length; i += 1) {
    if (hash[array[i]]) {
      delete hash[array[i]];
    } else {
      hash[array[i]] = true;
    }
  }
  console.log(hash);
  return Object.keys(hash)[0];
}

console.log(uniqueNumber([1, 2, 1, 3, 3]));  // 2
console.log(uniqueNumber([1, 2, 1, 3, 3, 2, 5, 7, 7]));  // 5

module.exports = uniqueNumber;

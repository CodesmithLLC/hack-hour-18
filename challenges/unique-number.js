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

// O(n) time
function uniqueNumber(array) {
  if (!array.length) return undefined;
  const storage = {};
  array.forEach(elem => {
    if (storage[elem] === true) delete storage[elem];
    else storage[elem] = true;
  });
  return Object.keys(storage)[0];
}

// O(1) space - doesn't work

// function uniqueNumber(array) {
//   let result;
//   array.forEach((elem, index, arr) => {
//     arr.splice(index);
//     if (!arr.includes(elem)) result = elem;
//   });
//   return result;
// }

// test
// console.log(uniqueNumber([1,2,1,4,6,7,9,7,9,4,2]));

module.exports = uniqueNumber;

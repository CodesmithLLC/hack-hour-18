/* You are given an array of integers and a target number. Write a function that returns true if
 * there is a subset of the array that sums up to the target and returns false otherwise. A subset
 * can be any size and the elements do not have to appear consecutively in the array.
 *
 * subsetSum([3, 7, 4, 2], 5) - > true, 3 + 2 = 5
 * subsetSum([3, 34, 4, 12, 5, 12], 32) -> true, 3 + 12 + 5 + 12 = 32
 * subsetSum([8, 2, 4, 12], 13) -> false
 * subsetSum([8, -2, 1, -3], 6) -> true, 8 + 1 + (-3) = 6
 */

function subsetSum(array, target) {
  if (target === 0) return true;
  for (let i = 0; i < array.length; i += 1) {
    if (subsetSum(array.slice(i + 1), target - array[i])) {
      return true;
    }
  }
  return false;
}

// console.assert(subsetSum([3], 3) === true);
// console.assert(subsetSum([0, -1, 5, 2], 3) === false);
// console.assert(subsetSum([3, 5], 3) === true);
// console.assert(subsetSum([3, 5], 2) === false);
// console.assert(subsetSum([3, 5], 8) === true);
// console.assert(subsetSum([3, 7, 4, 2], 5) === true);
// console.assert(subsetSum([3, 34, 4, 12, 5, 12], 32) === true);
// console.assert(subsetSum([8, 2, 4, 12], 13) === false);
// console.assert(subsetSum([8, -2, 1, -3], 6) === true);
// console.assert(subsetSum([8, 8, 8, 8], 24) === true);
// console.assert(subsetSum([8, 8, 8, 8], 23) === false);

module.exports = subsetSum;

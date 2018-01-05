/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

function maxSubarray(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return 0;
  let currentMax = arr[0];
  let maxSum = currentMax;
  for (let i = 1; i < arr.length; i++) {
    currentMax += arr[i];
    maxSum = Math.max(currentMax, maxSum);
    if (currentMax < 0) currentMax = 0;
  }
  return maxSum;
}

// console.log(maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]));
// console.log(maxSubarray([15, 20, -5, 10]));

module.exports = maxSubarray;

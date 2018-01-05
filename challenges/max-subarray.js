/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

function maxSubarray(arr) {
  let sum = 0;
  let maxSum = -Infinity;
  let subarr = [];
  let maxSubarr = [];

  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] > 0) {
      sum += arr[i];
      subarr.push(arr[i]);
    }
    else if (Math.abs(arr[i]) > sum) {
      if (sum > maxSum) {
        maxSum = sum;
        maxSubarr = subarr;
      }
      subarr = [];
      sum = 0;
    }
    else if (arr[i + 1] + arr[i] >= 0) {
      sum += arr[i];
      subarr.push(arr[i]);
    }
    else {
      if (sum > maxSum) {
        maxSum = sum;
        maxSubarr = subarr;
      }
      subarr = [];
      sum = 0;
    }
    console.log(subarr);
  }
  return maxSubarr.length ? maxSubarr : subarr;
}

// const array1 = [1, -2, 3, 10, -4, 7, 2, -5];
const array2 = [15,20,-5,10];
console.log(maxSubarray(array2));

module.exports = maxSubarray;

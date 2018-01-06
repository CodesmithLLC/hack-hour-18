/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

function maxSubarray(arr) {
<<<<<<< HEAD
  let maxComb = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let y = i; y < arr.length; y++) {
      sum += arr[y];
      if (sum > maxComb) maxComb = sum;  
    }
  }
  return maxComb;
=======

>>>>>>> 86dc30b2f61f125c69915a2c8806dde48138606d
}

module.exports = maxSubarray;

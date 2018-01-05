/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

function maxSubarray(arr) {
  let maxSum = -Infinity;
  function recursion(start, end, array) {
    let sum = arr.slice(start, end).reduce((sum, curVal) => {return sum + curVal}, 0);
    if (sum >= maxSum) maxSum = sum;
    if (start === arr.length - 1 && end === arr.length) return
    if (end === arr.length && start !== arr.length - 1) recursion(start + 1, start + 1);
    else if (end !== arr.length) recursion(start, end + 1);
  }
  recursion(0,1,arr);
  return maxSum;
}
  
module.exports = maxSubarray;

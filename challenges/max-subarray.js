/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

function maxSubarray(arr) {
  if (arr.every((num) => {return num < 0})) {
    return Math.max.apply(this,arr)
  }
  var curr = 0; 
  var prev = 0; 
  for (let i = 0 ; i < arr.length; i++) {
    prev = Math.max(0,prev+arr[i]);
    curr = Math.max(curr, prev);
  }
  return curr
}

module.exports = maxSubarray;

//official 
  //   var currentMax = Number.NEGATIVE_INFINITY;
  // var finalMax = Number.NEGATIVE_INFINITY;

  // for (var i = 0; i < arr.length; i++) {
  //   currentMax = Math.max(arr[i], currentMax + arr[i]);
  //   finalMax = Math.max(finalMax, currentMax);
  // }
  // return finalMax;
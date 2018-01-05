/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

function maxSubarray(arr) {
  let start = arr[0];
  let end = arr[arr.length - 1];
  for (let i = 0; i < arr.length; i++) {
      if (start > 0 && arr[1] > 0) {
      start = i;
      break;
    }
    else if (arr[i] > start) {
      start = i;
      break;
    }
  }
  for (let y = arr.length - 1; y > 0; y--) {
    if (arr[y] > 0) {
      end = y;
      break;
    }
  }
  let toSum = (arr.slice(start, end + 1));
  console.log(toSum);
  return toSum.reduce(function(accum, currVal) {
    return accum + currVal;
  })
}

module.exports = maxSubarray;

/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

// function maxSubarray(arr) {
//   // Kadane's algorithm
//   let currentMax = 0;
//   let max = 0;
//   for (let i = 0; i < arr.length; i += 1) {
//     console.log('*****');
//     console.log(`i: ${i} arr[i]: ${arr[i]}`);
//     console.log(`currentMax before: ${currentMax}`);
//     currentMax = Math.max(0, currentMax + arr[i]);
//     console.log(`currentMax after: ${currentMax}`);
//     console.log(`max before: ${max}`);
//     max = Math.max(max, currentMax);
//     console.log(`max after: ${max}`);
//   }
//   return max;
// }

// console.log(maxSubarray([1, -2, 3, 10, -4, 7, 2, -5])); // 18
// console.log(maxSubarray([15, 20, -5, 10])); // 40

function maxSubarray(arr) {
  // Kadane's algorithm
  let currentMax = 0;
  let max = 0;
  for (let i = 0; i < arr.length; i += 1) {
    currentMax = Math.max(0, currentMax + arr[i]);
    max = Math.max(max, currentMax);
  }
  return max;
}

module.exports = maxSubarray;

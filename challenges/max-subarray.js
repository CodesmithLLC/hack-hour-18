/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

// function maxSubarray(arr) {
//   const add = (a, b) => a + b;
//   let output = [];
//   arr.forEach((elem, index, array) => {
//     if (elem >= 0 || array.slice(index).reduce(add) > 0) output.push(elem);
//     if (output.reduce(add) < 0) output = [];
//   })
//   console.log(output);
//   if (output.length === 0) return Math.max(...arr);
//   else return output.reduce(add);
// }

function maxSubarray(arr) {
  const values = [];
  const add = (a, b) => a + b;
  const getMax = array => {
    if (array.length === 1) values.push(array[0]);
    else {
      values.push(array.reduce(add));
      getMax(array.slice(1));
      getMax(array.slice(0, array.length - 1));
    }
  }
  getMax(arr);
  return values.reduce((acc, val) => Math.max(acc, val));
}

// console.log(maxSubarray([15,20,-5,10, -1000, 1000]))

module.exports = maxSubarray;

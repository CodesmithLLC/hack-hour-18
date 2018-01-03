/**
 * Write a function mergeRanges that takes an array of meeting time ranges and returns an array of condensed ranges.
 *
 * Example:
 * var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]
 *
 * mergeRanges(times); -> [[0, 1], [3, 8], [9, 12]]
 *
 * Do not assume the ranges are in order
 */

function mergeRanges(array) {
  const ranges = [];
  let output;
  // loop through array
  array.forEach((arr, idx) => {
    // examine range of values in each subarray
    let range = [];
    for (let i = arr[0]; i <= arr[arr.length - 1]; i += 1) {
      // console.log(i);
      range.push(i);
    }
    ranges.push(range);
    range = [];
  });
  // if any other arrays contain current range of values, merge together
  output = ranges.filter((val, idx, arr) => arr[idx] === val);
  // display first range value at 0 and last range value at 1 in array
  return ranges;
}

const times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]];
// const times = [[4, 8]];
console.log(mergeRanges(times));

module.exports = mergeRanges;

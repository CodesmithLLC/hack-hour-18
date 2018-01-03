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
  if (!Array.isArray(array)) return undefined;

  let result = [];
  let cur;

  // sort ranges
  let sorted = array.slice().sort((a, b) => a[0] - b[0]);
  
  sorted.forEach(ran => {
    if (!end || ran[0] > cur[1]) {
      result.push(ran);
      cur = ran;
    } else if (ran[1] > cur[1]) {
      cur[1] = ran[1];
    }
  });
  return result;
}

// var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]];

// console.log(mergeRanges(times));

module.exports = mergeRanges;

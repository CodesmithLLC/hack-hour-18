/**
 * Write a function mergeRanges that takes an array of meeting time ranges 
 * and returns an array of condensed ranges.
 *
 * Example:
 * var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]
 *
 * mergeRanges(times); -> [[0, 1], [3, 8], [9, 12]]
 *
 * Do not assume the ranges are in order
 */


function mergeRanges(array) {
  let newArr = array.sort((a, b) => {
    return a[0] - b[0];
  });
  let result = [], last;
  newArr.forEach(ele => {
    if (!last || ele[0] > last[1]) result.push(last = ele);
    else if (ele[1] > last[1]) last[1] = ele[1];
  });
  return result;
 }

module.exports = mergeRanges;

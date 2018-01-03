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


function mergeRanges(...array) {
  if (!Array.isArray(array)) return;

  const sortedArray = array.sort((a, b) => a[0] - b[0]);
  const output = [];
  let temp;

  sortedArray.forEach((elem) => {
    if (!temp || elem[0] > temp[1]) {
      output.push(temp);
    } else if (elem[1] > temp[1]) {
      temp[1] = elem[1]
    }
  });

  return output;
}

console.log(mergeRanges([[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]));

module.exports = mergeRanges;

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
  const sorted = [];
  array.forEach((elem, index, arr) => {
    if (index === arr.length - 1) sorted.push(elem);
    else if (elem[0] > arr[index + 1][0]) {
      sorted.push(arr[index + 1]);
      [arr[index], arr[index + 1]] = [arr[index + 1], arr[index]];
    }
    else sorted.push(elem);
  });
  const cleaned = [];
  sorted.map((elem, index, arr) => {
    if (index === 0) return elem;
    else if (elem[1] > arr[index - 1][1]) return elem;
  }).forEach(elem => {
    if (elem !== undefined) cleaned.push(elem);
  });
  const output = [];
  cleaned.forEach((elem, index, arr) => {
    if (output.length === 0 || elem[1] > output[output.length - 1][1]) {
      let compareIndex = index;
      while (compareIndex < arr.length) {
        if (elem[1] >= arr[compareIndex][0]) compareIndex ++;
        else break;
      }
      output.push([elem[0], arr[compareIndex - 1][1]]);
    }
  });
  return output;
}

module.exports = mergeRanges;

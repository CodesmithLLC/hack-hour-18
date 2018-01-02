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
  if (array.length === 0) return undefined;
  const mergedArray = [];
  array.forEach(range => {
    let merged = false;
    mergedArray.forEach(mergedRange => {
      if (range[0] >= mergedRange[0] && range[0] <= mergedRange[1]) {
        mergedRange[1] = range[1];
        merged = true;
      } else if (range[1] >= mergedRange[0] && range[1] <= mergedRange[1]) {
        mergedRange[0] = range[0];
        merged = true;
      }
    });
    if (!merged) mergedArray.push(range);
  });
  return mergedArray;
}

module.exports = mergeRanges;

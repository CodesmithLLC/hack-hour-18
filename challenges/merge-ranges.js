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
 return array
  .sort((a, b) => a[0] - b[0])
  .reduce((ranges, meeting) => {
    if (!ranges.length) ranges.push(meeting);
    if (meeting[0] <= ranges[ranges.length - 1][1]) {
      if (meeting[1] > ranges[ranges.length - 1][1])
        ranges[ranges.length - 1][1] = meeting[1];
    } else {
      ranges.push(meeting);
    }
    return ranges;
  }, []);
}


var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]];
var times2 = [[0,1], [2,8], [4,5], [9,10]]
console.log(mergeRanges(times)); // -> [[0, 1], [3, 8], [9, 12]]
console.log(mergeRanges(times2)); // -> [[0, 1], [2, 8], [9, 10]]

module.exports = mergeRanges;

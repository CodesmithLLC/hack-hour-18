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
   array.sort((a, b) => a[0] - b[0])
   return array.reduce((ans, arr, i) => {
     if (!ans.length) ans.push(arr)
     if (ans[ans.length-1][1] >= arr[0]) {
       ans[ans.length-1][1] = Math.max(ans[ans.length-1][1], arr[1])
       return ans
     }
     ans.push(arr)
     return ans
   }, [])
 }

module.exports = mergeRanges;

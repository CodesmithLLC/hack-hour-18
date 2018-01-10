/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */

function looper(arr, start, end, num) {
  for (start; start <= end; start++) {
    if (arr[start] === num) return true
  }
  return false
}

function findInOrderedSet(arr, target) {
  if (arr.length < 10) {
    const half = Math.floor(arr.length/2)
    return target <= arr[half] ? looper(arr, 0, half, target) : looper(arr, half, arr.length)
  }
  const j = Math.floor(arr.length/4)
  for (let i = 0; i <= arr.length; i+=j) {
    if (target <= arr[i+j]) return looper(arr, i, i+j, target)
  }
}


module.exports = findInOrderedSet;

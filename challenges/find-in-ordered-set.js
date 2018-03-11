/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


function findInOrderedSet(arr, target) {
  //initialize low and high
  let low = 0;
  let high = arr.length - 1;
  //while loop to iterate through
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) return true;
    else if (arr[mid] > target) high = mid - 1;
    else if (arr[mid] < target) low = mid + 1;
  }
  return false;
}


module.exports = findInOrderedSet;

/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45, 56]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


function findInOrderedSet(arr, target) {
  let index = Math.floor(arr.length/2)
  let compare = arr[index];
  if (target === compare) {
    return true;
  } else if (arr.length <= 1) {
    return false;
  } else if (target < compare) {
    return findInOrderedSet(arr.slice(0, index), target);
  } else if (target > compare) {
    return findInOrderedSet(arr.slice(index + 1), target);
  }
}

// var nums = [1, 4, 6, 7, 9, 17, 45, 56]
// console.log(findInOrderedSet(nums, 4));  //-> true
// console.log(findInOrderedSet(nums, 2)); // -> false

module.exports = findInOrderedSet;

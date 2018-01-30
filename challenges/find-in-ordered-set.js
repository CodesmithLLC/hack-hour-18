/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


function findInOrderedSet(arr, target) {
  // Check base cases
  if (!arr.length) return false;
  else if (arr.length === 1 && arr[0] !== target) return false; 

  // Split array in half, check the halfway point for equality, repeat...
  const halfIndex = Math.floor(arr.length / 2);
  if (arr[halfIndex] !== target) {
    if (arr[halfIndex] > target) {
      return findInOrderedSet(arr.slice(0, halfIndex), target);
    } else {
      return findInOrderedSet(arr.slice(halfIndex), target);
    }
  } else return true;
}


// var nums = [1, 4, 6, 7, 9, 17, 45, 55]
// console.log(findInOrderedSet(nums, 4)); // -> true
// console.log(findInOrderedSet(nums, 2)); // -> false
// console.log(findInOrderedSet(nums, 45)); // -> true
// console.log(findInOrderedSet(nums, 33)); // -> false
// console.log(findInOrderedSet(nums, 1)); // -> true
// console.log(findInOrderedSet(nums, 55)); // -> true


module.exports = findInOrderedSet;

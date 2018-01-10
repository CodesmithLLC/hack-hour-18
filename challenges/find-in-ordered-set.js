/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */

// http://www.andygup.net/fastest-way-to-find-an-item-in-a-javascript-array/

// function findInOrderedSet(arr, target) {
//   for (let i = 0; i < arr.length; i += 1) {
//     if (arr[i] === target) return true;
//   }
//   return false;
// }

// function findInOrderedSet(arr, target) {
//   if (arr.indexOf(target) > 0) return true;
//   return false;
// }

function findInOrderedSet(arr, target) {
  const obj = arr.reduce((acc, cur) => {
    acc[cur] = cur;
    return acc;
  }, {});
  if (obj[target]) return true;
  return false;
}

const nums = [1, 4, 6, 7, 9, 17, 45];
console.log(findInOrderedSet(nums, 45)); // -> true
console.log(findInOrderedSet(nums, 4)); // -> true
console.log(findInOrderedSet(nums, 2)); // -> false
console.log(findInOrderedSet(nums, 3)); // -> false

module.exports = findInOrderedSet;

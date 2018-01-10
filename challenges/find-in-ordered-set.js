/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


function findInOrderedSet(arr, target) {
  let cur = arr;

  if (!Array.isArray(arr)) return false;

  while (cur.length > 0) {
    // console.log(cur);
    if (cur.length === 1) return cur[0] === target;
    let split = Math.floor(cur.length / 2);
    if (target === cur[split]) {
      return true;
    } else if (target < cur[split]) {
      cur = cur.slice(0, split);
    } else if (target > cur[split]) {
      cur = cur.slice(split);
    }
  }
  return false;
}
// var nums = [1, 4, 6, 7, 9, 17, 45]
// console.log(findInOrderedSet(nums, 4));
// console.log(findInOrderedSet(nums, 46));


module.exports = findInOrderedSet;

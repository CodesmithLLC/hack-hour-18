/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


function findInOrderedSet(arr, target) {

  if (target === arr[0] || target === arr[arr.length - 1]) return true;
  else if (target < arr[0] || target > arr[arr.length - 1]) return false;
  
  let firstHalf = arr.slice(0, Math.floor(arr.length/2 + 1));
  let secondHalf = arr.slice(Math.floor(arr.length/2 + 1), arr.length - 1);
  console.log(firstHalf, secondHalf)
  let halved = firstHalf[firstHalf.length - 1];
  console.log(halved);
 if (target === halved) return true;
  
if (target < halved) {
    if (firstHalf.length <= 2) {
      if (target === firstHalf[0] || target === firstHalf[1]) return true;
      else return false;
    }
    return findInOrderedSet(firstHalf, target);
  } else if (target > halved) {
      if (secondHalf.length <= 2) {
        if (target === secondHalf[0] || target === secondHalf[1]) return true;
        else return false;
      }
    return findInOrderedSet(secondHalf, target);
  } else return false;
}

module.exports = findInOrderedSet;

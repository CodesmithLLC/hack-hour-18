/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


function findInOrderedSet(arr, target) {

<<<<<<< HEAD
	let middleIndex = Math.floor(arr.length/2);
	let middle = arr[middleIndex];
	if (middle === target) {
	  return true;
	}
	else if (arr.length === 1) {
	  return false;
	}
	else if (middle > target) {
		return findInOrderedSet(arr.slice(0,middleIndex), target)
	}
	else if (middle < target){
		return findInOrderedSet(arr.slice(middleIndex), target)
	}
=======
>>>>>>> 36118b8567f4e218cb56eeceba30a04ebece11c6
}


module.exports = findInOrderedSet;

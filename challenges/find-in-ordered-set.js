/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


function findInOrderedSet(arr, target) {
    let addr = Math.floor(arr.length/2 -1)
    
    while(addr > 0 || addr < arr.length){
      console.log(addr, arr[addr])
      if(arr[addr] === undefined){addr --}
      if(arr[addr] === 1){addr ++}
  if(arr[addr] < target){ addr = Math.floor(addr * 2 -1)}
  if (arr[addr] > target){ addr = Math.floor(addr / 2 -1 )}
  if (arr[addr] === target) {return true}
  }
  return false
  }


module.exports = findInOrderedSet;

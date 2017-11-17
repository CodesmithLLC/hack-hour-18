/* You are given an array of integers and a target number. Write a function that returns true if
 * there is a subset of the array that sums up to the target and returns false otherwise. A subset
 * can be any size and the elements do not have to appear consecutively in the array.
 *
 * subsetSum([3, 7, 4, 2], 5) - > true, 3 + 2 = 5
 * subsetSum([3, 34, 4, 12, 5, 12], 32) -> true, 3 + 12 + 5 + 12 = 32
 * subsetSum([8, 2, 4, 12], 13) -> false
 * subsetSum([8, -2, 1, -3], 6) -> true, 8 + 1 + (-3) = 6
 */


// a brute force approach would be looping through the arr again and again:
// first time see if any one element === num, then see if any element + 2nd element === num, and so on
// ^^ a recursive solution could work for this approach.

// would be nice to have a more elegant solution, but I can't think of one

function subsetSum(array, target) {
  for(let x = 0; x < array.length; x+=1){
    if(x === target) return true;
  }
  for(let x = 0; x < array.length; x+=1){
    arrayMinusCurrentElement = array.slice(0, x).concat(array.slice(x + 1, array.length));
    if (subsetSum(arrayMinusCurrentElement, target - array[x]) === true) return true; // if statement so continues looping/trying to find if not true for a specific case
  }
  return false;
}

//module.exports = subsetSum;

// console.log(subsetSum([3, 7, 4, 2], 5)); // T
// console.log(subsetSum([3, 34, 4, 12, 5, 12], 32)); // T
console.log(subsetSum([8, 2, 4, 12], 13)); // F
// console.log(subsetSum([8, -2, 1, -3], 6)); // T

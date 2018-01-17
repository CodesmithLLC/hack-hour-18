/**
 * Write a function that will take an array of integers, all of which will appear exactly twice,
 * except for one integer that will appear exactly once. Return the integer that appears once.
 *
 * uniqueNumber([1,2,1,3,3]); -> 2
 *
 * BONUS:
 * Complete the challenge in O(n) time
 * Complete the challenge in O(1) space
 *
 */
function uniqueNumber(array) {
  if(!Array.isArray(arr)) return undefined;
  // sort array
  array.sort(function(a,b){
    return a-b;
  })
  // loop through array by two.
  for(let i = 0; i < array.length-2; i = i+2){
    //if array[i] != array[i+1] return array[i]
    if(array[i]!= array[i+1]){
      return array[i];
    }
  }
  return undefined;
}

let arr = [1,2,1,3,3,7,12,13,7,13,12,14,18,18,2];
uniqueNumber(arr)

module.exports = uniqueNumber;

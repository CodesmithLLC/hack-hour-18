/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

function maxSubarray(arr) {
  while(arr[arr.length-1] < 0) arr.pop();
  let currentMax = Number.NEGATIVE_INFINITY;
  let finalMax = arr[0];

  for(let i = 0; i < arr.length; i++){

    if(arr[i] > currentMax + arr[i]){
      currentMax = arr[i];
    }else{
      currentMax = currentMax + arr[i];
    }
    //compare currentMax to finalMax
    if(currentMax > finalMax){
      finalMax = currentMax;
    }
  }
  console.log(finalMax);
  return finalMax;
}

maxSubarray([1, 1, -2, 3, 10, -4, 7, 2, -5])
maxSubarray([15,20,-5,10])
module.exports = maxSubarray;


/* CODESMITH SOLUTION */

// function maxSubarray(arr) {

//   let currentMax = Number.NEGATIVE_INFINITY;
//   let finalMax = Number.NEGATIVE_INFINITY;

//   for (let i = 0; i < arr.length; i++) {
//     currentMax = Math.max(arr[i], currentMax + arr[i]);
//     finalMax = Math.max(finalMax, currentMax);
//   }
//   console.log(finalMax);
//   return finalMax;
// }
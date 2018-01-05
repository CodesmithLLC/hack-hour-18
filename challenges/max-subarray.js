/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

function maxSubarray(arr) {
  if(!Array.isArray(arr) || !arr.length) return;
  let total = arr.reduce((acc,ele) => acc + ele);
  for(let i=0; i < arr.length;i++){
    for(let j=arr.length; j > i;j--){
      let tempArr = arr.slice(i,j);
      let tempTotal = tempArr.reduce((acc,ele) => acc + ele);
      if(tempTotal > total) total = tempTotal;
    }
  }
  return total;
}

module.exports = maxSubarray;

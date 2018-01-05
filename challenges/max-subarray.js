/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

 function arrSum(arr) {
   return arr.reduce((acc, num) => acc += num)
 }

 function maxSubarray(arr) {
   let fullPositive = true;
   for (let i = 0; i < arr.length; i++) if (arr[i] < 0) fullPositive = false;
   if (fullPositive) return arrSum(arr)

   const storage = []
   for (let i = 0; i < arr.length; i++) {
     for (let j = 1; j+i <= arr.length; j++) {
       storage.push(arrSum(arr.slice(i,j+i)))
     }
   }

   return storage.reduce((acc, num) => Math.max(acc, num))
 }

module.exports = maxSubarray;

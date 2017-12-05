/**
 * We have our lists of orders sorted numerically already, in arrays.
 * Write a functin to merge our arrays of orders into one sorted array.
 * These may be of different lengths.
 *
 * var my_array = [3,4,6,10,11,15,21];
 * var another_array = [1,5,8,12,14,19];
 *
 * mergeArrays(my_array, another_array); -> [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19, 21]
 * 
 * BONUS: 
 * Complete in O(n) time  
 *
 */

function mergeArrays(arr1, arr2) {
<<<<<<< HEAD
if (!Array.isArray(arr1) || !arr1.length > 0) return arr2;
if (!Array.isArray(arr2) || !arr1.length > 0) return arr1;

arr1 = arr1.concat(arr2)
return arr1.sort((a,b) => a - b)
=======

>>>>>>> 25eabbee635632bc431e57ed1bd98f0c688a9815
}

module.exports = mergeArrays;

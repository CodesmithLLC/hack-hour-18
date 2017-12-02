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
  let i = 0;
  let j = 0;
  let result = [];

  if (!Array.isArray(arr1)) return arr2;
  if (!Array.isArray(arr2)) return arr1;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }
 
  if (j < arr2.length - 1) {result = result.concat(arr2.slice(j));}
  if (i < arr1.length - 1) {result = result.concat(arr1.slice(1));}

  return result;
}

// var my_array = [3,4,6,10,11,15,21];
// var another_array = [1,5,8,12,14,19];
// console.log(mergeArrays(my_array, another_array));

module.exports = mergeArrays;

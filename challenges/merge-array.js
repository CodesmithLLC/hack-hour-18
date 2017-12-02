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
  if (!(Array.isArray(arr1) && Array.isArray(arr2))) throw new Error('Must be arrays');
  const newArr = [];
  let i = 0;
  let i1 = 0;
  let i2 = 0;
  while (i1 < arr1.length && i2 < arr2.length) {
    if (arr1[i1] < arr2[i2]) {
      newArr[i] = arr1[i1];
      i1 += 1;
    } else {
      newArr[i] = arr2[i2];
      i2 += 1;
    }
    i += 1;
  }
  if (i1 < arr1.length) {
    for (; i1 < arr1.length; i1 += 1, i += 1) {
      newArr[i] = arr1[i1];
    }
  }
  if (i2 < arr2.length) {
    for (; i2 < arr2.length; i2 += 1, i += 1) {
      newArr[i] = arr2[i2];
    }
  }
  return newArr;
}

// const arr1 = [3,4,6,10,11,15,21];
// const arr2 = [1,5,8,12,14,19];
// const arr3 = [3,4];
//
// console.assert(String(mergeArrays(arr1, arr2)) === '1,3,4,5,6,8,10,11,12,14,15,19,21');
// console.assert(String(mergeArrays(arr2, arr1)) === '1,3,4,5,6,8,10,11,12,14,15,19,21');
// console.assert(String(mergeArrays(arr1, arr3)) === '3,3,4,4,6,10,11,15,21');
// console.assert(String(mergeArrays(arr3, arr1)) === '3,3,4,4,6,10,11,15,21');

module.exports = mergeArrays;

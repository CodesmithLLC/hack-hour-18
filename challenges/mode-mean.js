/*
 * Given an array of numbers, determine if the mode and mean of the array are equivalent
 *
 * Caveats:
 * 	- Math.floor the mean
 * 	- If there are multiple modes, use the max of the modes
 *
 * Return true or false
 *
 */

function getMean(array) {
  return array.reduce((a, b) => a + b) / array.length;
}

function getMode(array) {
  if (array.length < 2) return array[0];
  let maxCountIndex = 0;
  for (let i = 1, maxCount = 0, count = 0; i < array.length; i += 1) {
    if (array[i] === array[i - 1]) {
      count += 1;
      if (count >= maxCount) {
        maxCount = count;
        maxCountIndex = i;
      }
    } else {
      count = 0;
    }
  }
  return array[maxCountIndex];
}

function modemean(array) {
  if (array.constructor !== Array || array.length < 1) return false;
  const sorted = array.sort((a, b) => a - b);
  return Math.floor(getMean(sorted)) === getMode(sorted);
}

// const arr1 = [1, 2, 3, 3, 3, 3, 4, 4, 4, 4];
// const arr2 = 'hello';

// console.log(getMean(arr1));
// console.log(getMode(arr1));

// console.log(modemean(arr2));
// console.log(modemean(arr2));

module.exports = modemean;

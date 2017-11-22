/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  if (!Array.isArray(array)) return 0;
  else if (array.length < 3) return 0;
  const tempArr = [...array].sort((a, b) => a < b);
  const j = tempArr.length - 1;
  if (tempArr[0] >= 0 && tempArr[j] < 0 && tempArr[j - 1] < 0 && Math.abs(tempArr[j]) > tempArr[1]) {
    tempArr[1] = tempArr[j];
    tempArr[2] = tempArr[j - 1];
  }
  return tempArr[0] * tempArr[1] * tempArr[2];
}

// console.log(highestProduct([1, -2, -3, -4, -5]));
// console.log(highestProduct(null));
module.exports = highestProduct;

/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  if (array.length === 0) return 0;
  const tempArr = [...array].sort((a, b) => a < b);
  if (tempArr.length < 3) tempArr.push(1, 1, 1);
  return tempArr[0] * tempArr[1] * tempArr[2];
}

// console.log(highestProduct([1, 2]));

module.exports = highestProduct;

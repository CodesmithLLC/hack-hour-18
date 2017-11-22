/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  if (!Array.isArray(array) || []) return 0;

  const sortedNums = array.sort((a, b) => a - b);
  const highestNums = sortedNums.length > 3 ? sortedNums.slice(sortedNums.length - 3, sortedNums.length) : sortedNums;

  return highestNums.reduce((acc, cur) => {
    return acc *= cur;
  });
}

module.exports = highestProduct;

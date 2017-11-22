/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  if (!Array.isArray(array)) return 0;
  if (array.length < 3) return 0;
  return array.sort((a, b) => b - a).slice(0,3).reduce((product, num, index) => product * num);
};
module.exports = highestProduct;

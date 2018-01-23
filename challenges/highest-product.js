/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  if (array.length < 3) return 0;
  if (!Array.isArray(array)) return 0;
  const sorted = array.sort((a, b) => a > b);
  const maxes = [sorted[sorted.length - 3], sorted[sorted.length - 2], sorted[sorted.length - 1]];
  if ((sorted[0] * sorted[1]) > maxes[0] * maxes[1]) {
    maxes[0] = sorted[0];
    maxes[1] = sorted[1];
  }
  return maxes.reduce((accum, num) => num * accum);
}

module.exports = highestProduct;

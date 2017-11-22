/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  if (!Array.isArray(array)) return 0;
  if (array.length < 3) return 0;
  array = array.sort((a, b) => b - a);
  if (array[array.length - 1] < 0 && array[array.length - 2] < 0) {
    array[array.length - 1] *= -1;
    array[array.length - 2] *= -1;
    array = array.sort((a, b) => b - a);
  }
  return array.slice(0,3).reduce((product, num) => product * num);
};
module.exports = highestProduct;

console.log(highestProduct([-1,-2,-3, 4, -4]))

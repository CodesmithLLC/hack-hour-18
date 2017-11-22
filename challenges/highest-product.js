/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  if (array.length < 3) return 0;
  if (!Array.isArray(array)) return 0;
  const maxes = [];
  while (maxes.length < 3) {
    let max = findMax(array);
    maxes.push(max);
    let index = array.indexOf(max);
    array.splice(index, 1);
  }
  return maxes.reduce((accum, num) => accum * num);
}

function findMax(array) {
  let max = -Infinity;
  array.forEach(num => {
    if (num > max) max = num;
  });
  return max;
}

module.exports = highestProduct;

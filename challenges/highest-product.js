/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  if (!array.length) return;
  return array.sort((a, b) => b - a).reduce((product, num, index) => {
    if (index < 3) return product * num;
    else return product;
  });
};

module.exports = highestProduct;

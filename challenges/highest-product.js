/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  if (!Array.isArray(array)) return 0;
  if (array.length < 3) return 0;

  array = array.sort((a, b) => a - b);

  const negArray = [];

  array.forEach((x) => {
    if (x < 0 && negArray.length < 2) {
      negArray.push(x);
    }
  });

  let length = array.length;
  let negProduct;
  negArray.length === 2 ? negProduct = negArray[0] * negArray[1] * array[length - 1] : negProduct = -Infinity;
  let arrProduct = array[length - 1] * array[length - 2] * array[length - 3];

  return arrProduct >= negProduct ? arrProduct : negProduct;
}


module.exports = highestProduct;

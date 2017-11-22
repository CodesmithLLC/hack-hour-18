/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  if (array.length < 3) {
    throw new Error ('Need at least three integers!')
  }
  const sorted = array.sort((a, b) => {
    return a - b;
  });
  const threeNums = sorted.slice(sorted.length-3);
  return threeNums.reduce(function(accum, val) {
    return accum * val;
  })
}


module.exports = highestProduct;

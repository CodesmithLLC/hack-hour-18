/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  if (array.length < 3 || !Array.isArray(array)) {
    return 0;
  }
  const sorted = array.sort((a, b) => {
    return a - b;
  });
  const threeNums = sorted.slice(sorted.length-3);
  return threeNums.reduce(function(accum, val) {
    return Math.abs(accum) * Math.abs(val);
  })
}


module.exports = highestProduct;

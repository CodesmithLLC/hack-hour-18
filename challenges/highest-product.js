/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  if (array.constructor !== Array) return 0;
  if (array.length < 3) return 0;

  const sorted = array.sort((a,b)=> a - b)
  const prod1 = sorted[0] * sorted[1] * sorted[array.length-1]
  const prod2 = sorted[array.length-1] * sorted[array.length-2] * sorted[array.length-3]
  return Math.max(prod1,prod2)
}


module.exports = highestProduct;

/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
<<<<<<< HEAD
  if (!Array.isArray(array)) return 0;
  else if (array.length < 3) return 0;
  
  const sorted = array.sort((a, b) => a - b);
  
  const negPosProd = sorted[0] * sorted[1] * sorted[sorted.length - 1];
  const posProd = sorted[sorted.length - 1] * sorted[sorted.length - 2] * sorted[sorted.length - 3];
  return Math.max(negPosProd, posProd);
=======

>>>>>>> 81790851c47a06eea328985f518243546443b162
}


module.exports = highestProduct;

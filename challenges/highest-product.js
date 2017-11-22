/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  return array.sort((a,b)=> b-a).reduce((acc,curr,i)=> i < 3 ? acc * curr : acc)
}


module.exports = highestProduct;

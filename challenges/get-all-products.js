/* Accepts an array of integers and returns an array of all the possible products made by
 * multiplying all but one number. In other words, find all the products of multiplying any
 * array.length-1 numbers in the array.
 *
 * ex: getProducts([1, 7, 3, 4]); ->  [84, 12, 28, 21]
 * this is done via:
 * [7*3*4, 1*3*4, 1*7*4, 1*7*3]
 *
 * do not use division, becuase zero might be in the array and you cannot divide by zero
 */

function getAllProducts(array) {
  if (!Array.isArray(array)) return;

  const result = [];
  for (let i = 0; i < array.length; i += 1) {
    let firstHalf = array.slice(0, i);
    let secHalf = array.slice(i + 1, array.length);
    let nums = firstHalf.concat(secHalf);

    let product = nums.reduce((a, b) => a * b);
    result.push(product);
  }
  return result;
}

console.log(getAllProducts([1, 7, 3, 4]));

module.exports = getAllProducts;

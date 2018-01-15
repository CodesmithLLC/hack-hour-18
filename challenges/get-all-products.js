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
  if (array.length === 0) return [0];
  let total = array.reduce((acc, cur) => acc * cur);
  let result = [];
  for (let i=0; i<array.length; i++) {
    let prod;
    if (array[i] === 0) {
      prod = array.reduce((acc, cur, ind) => {
        if (ind !== i) {
          return acc * cur;
        } else {
          return acc;
        }
      });
    } else {
      prod = total / array[i];
    }
    result.push(prod);
  }
  return result;
}

// console.log(getAllProducts([1, 7, 3, 4, 0]));
console.log(getAllProducts([]));

module.exports = getAllProducts;

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

// O(n^2)
// function getAllProducts(array) {
//   const output = [];
//   for (const i in array) {
//     let product = 1;
//     for (const j in array) {
//       console.log(`** I:  ${i}`);
//       console.log(`array[j]:  ${array[j]}`);
//       // if both loops are not at the same index, multiply product by current value
//       if (i != j) product *= array[j];
//       console.log(`product:  ${product}`);
//     }
//     // push after all but 1 values have been multiplied
//     output.push(product);
//   }
//   return output;
// }

// O(n^2)
function getAllProducts(array) {
  const output = [];
  for (const i in array) {
    let product = 1;
    for (const j in array) {
      // if both loops are not at the same index, multiply product by current value
      if (i != j) product *= array[j];
    }
    // push after all but 1 values have been multiplied
    output.push(product);
  }
  return output;
}

console.log(getAllProducts([1, 7, 3, 4])); // -> [84, 12, 28, 21]

module.exports = getAllProducts;

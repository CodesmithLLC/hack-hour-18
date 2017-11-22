/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

// function highestProduct(array) {
//   if (!(array.length >= 3) || !Array.isArray(array)) return null;
//   let largestSoFar = -Infinity;
//   array.forEach((firstMult, i) => {
//     // console.log('First', firstMult);
//     array.slice(i + 1).forEach((secondMult, j) => {
//       // console.log('Second', secondMult);
//       array.slice(j + i + 1 + 1).forEach((thirdMult) => {
//         // console.log('Third', thirdMult);
//         largestSoFar = Math.max(largestSoFar, firstMult * secondMult * thirdMult);
//       });
//     });
//   });
//   return largestSoFar;
// }

function highestProduct(array) {
  if (!(array.length >= 3) || !Array.isArray(array)) return null;
  array.sort((a, b) => b - a);
  if (array[array.length - 1] < 0 && array[array.length - 2] < 0) {
    array[array.length - 1] *= -1;
    array[array.length - 2] *= -1;
    // const final = -1 * array.pop();
    // const seclast = -1 * array.pop();
    // array.push(final, seclast);
    array.sort((a, b) => b - a);
  }
  return array.slice(0, 3).reduce((a, c) => a * c);
}

// console.assert(highestProduct([]) === null);
// console.assert(highestProduct([1, 2, 3]) === 6);
// console.assert(highestProduct([1, 2, 3, 4]) === 24);
// console.assert(highestProduct([4, 2, 1, 3]) === 24);
// console.assert(highestProduct([4, 2, 1, 3, 5]) === 60);
// console.assert(highestProduct([4, 2, 10, 3, 5]) === 200);
// // console.log(highestProduct([4, 2, 10, 3, 5]));
// console.assert(highestProduct([4, 2, -10, 3, -5]) === 200);
// // console.log(highestProduct([4, 2, -10, 3, -5]));
// console.assert(highestProduct([-4, 2, -10, 3, -5]) === 150);


module.exports = highestProduct;

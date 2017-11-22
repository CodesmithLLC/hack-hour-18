/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  if (! (array.length >= 3) || !Array.isArray(array)) return null;
  let largestSoFar = -Infinity;
  array.forEach((firstMult, i) => {
    // console.log('First', firstMult);
    array.slice(i + 1).forEach((secondMult, j) => {
      // console.log('Second', secondMult);
      array.slice(j + i + 1 + 1).forEach((thirdMult) => {
        // console.log('Third', thirdMult);
        largestSoFar = Math.max(largestSoFar, firstMult * secondMult * thirdMult);
      });
    });
  });
  return largestSoFar;
}

console.assert(highestProduct([]) === null);
console.assert(highestProduct([1, 2, 3]) === 6);
console.assert(highestProduct([1, 2, 3, 4]) === 24);
console.assert(highestProduct([4, 2, 1, 3]) === 24);
console.assert(highestProduct([4, 2, 1, 3, 5]) === 60);
console.assert(highestProduct([4, 2, 10, 3, 5]) === 200);


module.exports = highestProduct;

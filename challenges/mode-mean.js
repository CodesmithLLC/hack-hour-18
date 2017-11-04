/*
 * Given an array of numbers, determine if the mode and mean of the array are equivalent
 *
 * Caveats:
 * 	- Math.floor the mean
 * 	- If there are multiple modes, use the max of the modes
 *
 * Return true or false
 *
 */


function modemean(array) {
  // Track count of numbers seen
  const seen = {};
  // Track mode
  let mode = null;
  // Loop through to get mean, and at same time count each number seen
  // and check if it should replace mode
  const mean = Math.floor(array.reduce((a, b) => {
    if (typeof b !== 'number') throw new Error(`Element ${b} is not a number`);
    if (!(b in seen)) seen[b] = 0;
    seen[b] += 1;
    if (seen[b] > 1) {
      if (mode === null) mode = b;
      if (seen[b] > seen[mode]) mode = b;
      if (seen[b] === seen[mode] && b > mode) mode = b;
    }
    return a + b;
  }, 0) / (array.length || 1)); // If length === 0, use 1 so we avoid NaN
  return mean === mode;
}

const testArray1 = [1, 2, 3, 3, 4, 5];
console.log('Should be true:', modemean(testArray1));
console.assert(modemean(testArray1) === true);

const testArray2 = [1, 1, 2, 2, 3, 3];
console.log('Should be false:', modemean(testArray2));
console.assert(modemean(testArray2) === false);

console.assert(modemean([]) === false);

// console.log(modemean(['1', 2, 3])) // Should throw an error

module.exports = modemean;

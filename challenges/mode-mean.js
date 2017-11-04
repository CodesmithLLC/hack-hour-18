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
  // Loop through to get mean, and at same time count each number seen
  const mean = Math.floor(array.reduce((a, b) => {
    if (typeof b !== 'number') throw new Error(`Element ${b} is not a number`);
    if (!(b in seen)) seen[b] = 0;
    seen[b] += 1;
    return a + b;
  }, 0) / (array.length || 1)); // If length === 0, use 1 so we avoid NaN
  // Get the key (number) and value (times) of most frequent number.
  // If there isn't one, it is null
  const modeArr = Object.entries(seen).reduce((mode, [num, times]) => {
    // If there is no mode and times not greater than 1
    if (mode === null && !(times > 1)) return null;
    // If there isn't a mode times > 1, save current to mode
    if (mode === null) return [num, times];
    // If there is a mode and current times > mode's times, save current
    if (times >= mode[1]) return [num, times];
    // Else, just return what we have
    return mode;
  }, null);
  // From mode array, get mode num if mode is not null
  const mode = modeArr === null ? null : Number(modeArr[0]);
  // console.log(mean, mode, seen);
  // Check if mean and mode are equal
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

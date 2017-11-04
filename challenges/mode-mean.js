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
  
  function sum(x, y) {
    return x + y;
  }

  const mean = Math.floor(array.reduce(sum) / array.length);

  const modeObj = array.reduce((acc, num) => {
    acc[num] ? acc[num]++ : acc[num] = 1;
    return acc;
  }, {});

  let mode;
  let occurrences = 1;
  
  for (let key in modeObj) {
    if (modeObj[key] > occurrences) {
      occurrences = modeObj[key];
      mode = parseInt(key);
    }
  }
  return mean === mode;
}

module.exports = modemean;

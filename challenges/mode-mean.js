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
  const modeObj = {};
  array.forEach(num => {
    if (modeObj[num]) modeObj[num]++;
    else modeObj[num] = 1;
  });
  let mode = 0, max = 0;
  for (let key in modeObj) {
    if (modeObj[key] >= max && key > mode) {
      max = modeObj[key];
      mode = key;
    }
  }
  let sum = array.reduce((num, acc) => acc += num);
  let mean = Math.floor(sum / array.length);
  return Number(mode) === mean;
}

module.exports = modemean;

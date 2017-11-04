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
  if(array.length === 0) return false;
  let obj = {};
  array.forEach(x => {
    if(obj[x]) obj[x] = obj[x] + 1;
    else obj[x] = 1;
  });
  const node =  Object.keys(obj).reduce( (accumulator, currentValue) => {
    return obj[accumulator] > obj[currentValue] ? accumulator : currentValue;
  });
  const sum = array.reduce( (a, b) => {
    return a + b
  });
  const mean = Math.floor(sum / array.length);
  // console.log(node);
  // console.log(mean);
  return node == mean;
}

// console.log(modemean([4, 8,3, 2, 3,3, 45, 4, 8, 8]));
module.exports = modemean;

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
  // find mean
  const total = array.reduce((acc, cur) => {
    return acc += cur
  }, 0);

  const mean = Math.floor(total / array.length);

  // find modes
  const modes = [];
  const count = []; 
  let number; 
  let maxIndex = 0;

  for (let i = 0; i < array.length; i += 1) {
    number = array[i];
    count[number] = (count[number] || 0) + 1;

    if (count[number] > maxIndex) {
      maxIndex = count[number];
    }
  }

  Object.keys(count).forEach(elem => {
    if (count.hasOwnProperty(elem)) {
      if (count[elem] === maxIndex) {
        modes.push(Number(elem));
      }
    }
  });
  const mode = modes.reduce((a, b) => Math.max(a, b));

  return (mode === mean);
}

modemean([1, 2, 3, 4, 5, 1, 2, 7]);

module.exports = modemean;

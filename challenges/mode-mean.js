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
  function add(a, b) {
    return a + b;
  }
  let mean = Math.floor(array.reduce(add)/array.length);

  const obj = {};

  array.sort();

  array.forEach(function(elem) {
    obj[elem] = 0;
  })

  array.forEach(function(elem) {
    obj[elem] += 1;
  })
  
  const objKeys = Object.keys(obj);
  
  let mode = objKeys[0];
      
  for (let i = 0; i < objKeys.length; i++) {
    if (obj[objKeys[i]] >= obj[mode]) {
      mode = objKeys[i]
    }
  }

  return (mean == mode);
}

module.exports = modemean;

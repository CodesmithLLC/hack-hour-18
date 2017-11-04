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
	//mode: value that occurs most often
	//mean: avg -- values added / number of values
	
	const store = {};
	const arr = [];
	let key;
	let value;
	
	const sum = array.reduce(function(accum, val, currIndex, arr) {
	  return (accum + val); 
	}, 0);
	
    const mean = sum/array.length;

	for (let i = 0; i < array.length; i++) {
	  if (typeof array[i] !== 'number') {
	    throw new Error('Need an array of numbers!');
	}
	 
	if (store[array[i]]) {
	  store[array[i]]++;
	} else if (!store[array[i]]) {
        key = array[i];
        value = 1;
	    store[key] = value;
	  } 
	}
	
	for (var prop in store) {
	  arr.push(parseInt(prop));
	}

	var max = arr.reduce(function(a, b) {
      return Math.max(a, b);
    });

    return max === mean;
}


module.exports = modemean;

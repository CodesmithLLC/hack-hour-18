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
  if (array.length === 0){return undefined;}
	const sum = array.reduce((a,b) => a +b),
	      mean = Math.floor(sum/array.length);
	const counts = array.reduce(function(acc,start){ //find the number of counts of each number then return the key that has the highest value;
		acc[start] = acc[start] + 1 || 1;
		return acc;
	},{})
	const max_values = Math.max.apply(this,Object.values(counts));
	const arrOfMode = [];
	for (var key in counts){
		if (counts[key] === max_values){
			arrOfMode.push(key);
		}
	}
	var mode = Math.max.apply(this,arrOfMode);
	return mean === mode;
}

module.exports = modemean;

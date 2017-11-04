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

 // mode -  most frequently occurring number found in a set of numbers
 // mean - determined by adding all the data points in a population and then dividing the total by the number of points

function modemean(array) {
    let mean = Math.floor(array.reduce((acc, cur) => acc  + cur) / array.length);
    let mode = array.filter((elm, idx, arr) => arr.indexOf(elm) !== idx).pop();
    return mode === mean;
}

console.log(modemean([1, 2, 3, 4, 2, 3, 4, 4, 4]));

module.exports = modemean;

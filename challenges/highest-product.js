/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
	if (array.length <= 3) {return array.reduce((a,b) => {return a * b})}
	var prod = 1; 
	var max = 1;
	for (let i = 0; i < array.length; i++) {
	  for (let j = i + 1; j < array.length; j++) {
	    for (let k = j + 1; k < array.length; k++) {
	      prod = array[i] * array[j] * array[k];
	      if (prod > max) {
	        max = prod
	      }
	    }
	  }
	}
	return max;
}


module.exports = highestProduct;

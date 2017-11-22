/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
	if (!Array.isArray(array)) {
		return 0;
	}
	if (array.length < 3) {return 0}
	if (array.length === 3) {return array.reduce((a,b) =>  (a * b))}
// 	var prod = 1; 
// 	var max = 1;
// 	for (let i = 0; i < array.length; i++) {
// 	  for (let j = i + 1; j < array.length; j++) {
// 	    for (let k = j + 1; k < array.length; k++) {
// 	      prod = array[i] * array[j] * array[k];
// 	      if (prod > max) {
// 	        max = prod
// 	      }
// 	    }
// 	  }
// 	}
// 	return max;
  var sort = array.sort((a,b) => (b - a))
  if (sort[sort.length-1]  < 0 && sort[sort.length-2] < 0) {
    return sort[sort.length-1] * sort[sort.length-1] * sort[0];
  }
  else {
    return sort[0] * sort[1] * sort[2]
  }
}

//this solution does not work for negative numbers
module.exports = highestProduct;

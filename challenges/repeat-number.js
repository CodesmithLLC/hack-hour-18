/**
 * I have an array where every number in the range 1...n appears once except for 
 * one number which appears twice.
 *
 * Write a function for finding the number that appears twice.
 *
 * BONUS:
 * Do this in O(n) time
 * Do this in O(1) space
 *
 */

function repeatNumbers(array) {

	//are they sorted? 
	//[2,4,3,1,5,6,2]
	for (let i = 0 ; i < array.length; i++) {
		for (let j = i+1; j < array.length; j++) {
			let product = 0; 
			product = array[i]/array[j];
			if (product === 1) {
				return array[j]
			}
		} 
	}

	return undefined;

}


}

module.exports = repeatNumbers;

/**
 * We have our lists of orders sorted numerically already, in arrays.
 * Write a functin to merge our arrays of orders into one sorted array.
 * These may be of different lengths.
 *
 * var my_array = [3,4,6,10,11,15,21];
 * var another_array = [1,5,8,12,14,19];
 *
 * mergeArrays(my_array, another_array); -> [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19, 21]
 * 
 * BONUS: 
 * Complete in O(n) time  
 *
 */

function mergeArrays(arr1, arr2) {

//you have two arrays arr1, arr2;
//push item arr1 then arr2 and rotate
//if the number of arr1 is greater than that of arr2, we will add the arr2 item to result. if not, then add item from arr1? but every time we have to splice it?
	const result = [];
	while (arr1.length || arr2.length) {
		if (arr1[0] === undefined) { //this is when arr1 has finally no more elements. 
			result.push(arr2[0]);
			arr2.splice(0,1); //eliminate the number that has been added to the result array already
		}
		else if (arr1[0] > arr2[0]) { //if the number from arr1 is greater than that of arr2, then we want to add the number from arr2 first because it is smaller. 
			result.push(arr2[0]);
			arr2.splice(0,1);
		}
		else {
			result.push(arr1[0]); //same as the previous condtion except it's for the other array
			arr1.splice(0,1)
		}
	}
	return result;
}

module.exports = mergeArrays;

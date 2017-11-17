/* You are given an array of integers and a target number. Write a function that returns true if
 * there is a subset of the array that sums up to the target and returns false otherwise. A subset
 * can be any size and the elements do not have to appear consecutively in the array.
 * 
 * subsetSum([3, 7, 4, 2], 5) - > true, 3 + 2 = 5
 * subsetSum([3, 34, 4, 12, 5, 12], 32) -> true, 3 + 12 + 5 + 12 = 32
 * subsetSum([8, 2, 4, 12], 13) -> false
 * subsetSum([8, -2, 1, -3], 6) -> true, 8 + 1 + (-3) = 6
 */

// possibly some recursion or reduce involved
// try: if statement, array reduce starting from entire length of array
// else, decrement length, and use recursion
// actually it would have to be base case if reduce of length 1 

// generate all combinations, including single elements, and push to an array

function subsetSum(array, target) {
	let combinations = [[]];

	for (let i=0; i<array.length; i++){
		for (let j=0; j<combinations.length; j++){
			let result = combinations[j].concat(array[i]); //produce combos as arrays
			combinations.push(result); //push combo arrays to main combo array
		}
	}
	//once we have all the combinations, use reduce to sum
	return array.reduce((prev,curr)=>{

	})

}

module.exports = subsetSum;

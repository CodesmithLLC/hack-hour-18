/**
 * Given a string, determine if any of the permutations of that string is a palindrome
 *
 * Example:
 * 	- permPalin('abab') => true
 * 	- permPalin('cbaba') => true
 * 	- permPalin('cbac') => false
 * 	- permPalin('a') => true
 *
 */

function permPalin(str) {
	const strToArray = str.split('');
	let counter = 0;
	while (strToArray) {
		let shifted = strToArray[0];
		strToArray.shift();
		let copyOfShifted = strToArray.indexOf(shifted);
		if (copyOfShifted > -1) strToArray.splice(copyOfShifted);
		else if (counter === 1) return false;
		else counter += 1;
	}
	if (!strToArray.length || strToArray.length === 1) return true;
};

// console.log(permPalin('abab'));
// console.log(permPalin('cbaba'));
console.log(permPalin('cbac'));
// console.log(permPalin('a'));
module.exports = permPalin;

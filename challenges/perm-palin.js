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
	while (strToArray || strToArray.length > 1) {
		let shifted = strToArray[0];
		strToArray.shift();
		let copyOfShifted = strToArray.indexOf(shifted);
		if (copyOfShifted > -1) strToArray.splice(copyOfShifted);
		else if (strToArray.length === 0) return true;
		else return false;
	}
	if (!strToArray.length || strToArray.length === 1) return true;
};

// console.log(permPalin('abab'));

module.exports = permPalin;

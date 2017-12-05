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

//instead of checking if any permutation is a palindrome
//can instead check if even, if the count for each letter is even
//and if odd, check if the count for each letter is even, and the last letter odd
function permPalin(str) {
	let charCount = {};
	for (let i=0; i < str.length; i++){
		let letter = str[i];
		charCount[letter] = (charCount[letter] || 0) + 1;
	}
	let charCountLen = Object.keys(charCount).length;

	if (charCountLen % 2 == 

}

	// var permutations = [];

	// if (string.length < 2) return string; // This is our break condition

 //    for (var i=0; i<string.length; i++) {
 //    	var char = string[i];

 //        // Cause we don't want any duplicates:
 //        if (string.indexOf(char) != i) // if char was used already
 //            continue;           // skip it this time

 //        var remainingString = string.slice(0,i) + string.slice(i+1,string.length); //Note: you can concat Strings via '+' in JS

 //        for (var subPermutation of permut(remainingString))
 //            permutations.push(char + subPermutation)
 //    }


module.exports = permPalin;
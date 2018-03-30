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
	const map = {};
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    map[str[i]] = 1 + map[str[i]] || 1;
  }
	for (key in map) {
		count += map[key] % 2;
  }
	return count <= 1;
}



module.exports = permPalin;
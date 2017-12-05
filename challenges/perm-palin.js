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
 	str = str.toLowerCase()
 	const tally = str.split('').reduce((cache, letter) => {
 	  cache[letter] ? cache[letter]++ : cache[letter] = 1
 	  return cache
 	}, {})
 	const tallyValues = Object.values(tally)
 	let oddCount = 0
 	for (let i = 0; i < tallyValues.length; i++) {
 	  if (tallyValues[i] % 2 !== 0) oddCount++
 	  if (oddCount > 1) return false
 	}
 	return true
 }

module.exports = permPalin;

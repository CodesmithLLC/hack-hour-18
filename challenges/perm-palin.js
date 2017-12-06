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
  if (typeof str !== 'string' || str.length < 1) return false;
  const letters = {};
  str.split('').forEach(letter => {
    if (letters[letter]) letters[letter]++;
    else letters[letter] = 1;
  });
  let oddCount = 0;
  for (let prop in letters) {
    if (letters[prop] % 2 !== 0) oddCount++;
  }
  return oddCount > 1 ? false : true;
}

module.exports = permPalin;
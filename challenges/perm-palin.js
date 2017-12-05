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
  if (str.length < 2) return true;
  const unmatchedChars = [];
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i).match(/\s/)) continue;
    let matchIndex = unmatchedChars.indexOf(str.charAt(i).toLowerCase());
    if (matchIndex === -1) {
      unmatchedChars.push(str.charAt(i).toLowerCase());
    } else {
      unmatchedChars.splice(matchIndex, 1);
    }
  }
  return unmatchedChars.length <= 1;
}

console.log(permPalin('abab')) // => true
console.log(permPalin('cbaba')) // => true
console.log(permPalin('cbac')) // => false
console.log(permPalin('a')) // => true
console.log(permPalin('Race car')) // => true
console.log(permPalin('ojnoajnsfnov')) // => false

module.exports = permPalin;
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
  if (typeof str !== 'string') throw new Error('Must pass string');
  const letterCounts = {};
  for (let i = 0; i < str.length; i += 1) {
    const curLetter = str[i];
    if (!(letterCounts[curLetter])) letterCounts[curLetter] = 0;
    letterCounts[curLetter] += 1;
  }
  let seenOdd = false;
  const counts = Object.values(letterCounts);
  for (let i = 0; i < counts.length; i += 1) {
    const count = counts[i];
    if (count % 2 === 1) {
      if (seenOdd) return false;
      seenOdd = true;
    }
  }
  return true;
}

console.assert(permPalin('abab') === true);
console.assert(permPalin('cbaba') === true);
console.assert(permPalin('cbac') === false);
console.assert(permPalin('a') === true);
console.assert(permPalin('') === true);

module.exports = permPalin;

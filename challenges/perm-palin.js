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
  if(typeof str !== 'string' || str.length === 0) return;
  for(let i = 0;i < str.length;i++){
    if(str.split("").reverse().join("") === str) {
      return true;
    } else if (str[i] === str[i+2]) {
      return true;
    }
  }
  return false;
}

console.log(permPalin('abab'));
console.log(permPalin('cbaba'));
console.log(permPalin('cbac'));
console.log(permPalin('a'));

module.exports = permPalin;
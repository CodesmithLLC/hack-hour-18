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
  let matches = [];
  let copyArr = str.split('');

  for (let i=0; i< copyArr.length; i++) {
    if (matches.indexOf(copyArr[i]) === -1) {
      matches.push(copyArr[i]);
    } else {
      matches.splice(matches.indexOf(copyArr[i]), 1);
    }
  }

  if (str.length % 2 === 0) {
    return matches.length === 0;
  }
  if (str.length % 2 === 1) {
    return matches.length === 1;
  }
	
}
// console.log(permPalin('ccbllabam'));
module.exports = permPalin;
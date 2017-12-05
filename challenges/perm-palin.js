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
function isPalindrome(str) {
  return str === str.split('').reverse().join('');
}

function getPermutations(str) {
  if (str.length < 2) return str;
  const permutations = [];
  for (let i = 0; i < str.length; i++) {
    const curr = str[i];

    if (str.indexOf(curr) !== i) continue;

    const remainingStr = str.slice(0, i) + str.slice(i + 1);
    for (let subPermutation of getPermutations(remainingStr)) {
      permutations.push(curr + subPermutation);
    }
  }
  return permutations;
}

function permPalin(str) {
  const permArr = getPermutations(str);
  for (let i = 0; i < permArr.length; i++) {
    if (isPalindrome(permArr[i])) return true;
  }
  return false;
}

// console.log(permPalin('abab'));
// console.log(permPalin('cbaba'));
// console.log(permPalin('cbac'));
// console.log(permPalin('a'));

module.exports = permPalin;

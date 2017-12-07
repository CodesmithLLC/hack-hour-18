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
function permutations(str) {
  // break condition
  if (str.length < 2) return str;
  // permutations array to hold permutations
  const permutationArr = [];
  // loop through string
  for (let i = 0; i < str.length; i += 1) {
    // get current character
    const char = str[i];
    // skip duplicate characters
    if (str.indexOf(char) !== i) continue;
    // save remaining characters in str to new variable
    const remaining = str.slice(0, i) + str.slice(i + 1, str.length);
    // for subpermutations recursively call permutation func on remaining string
    // push char + subpermutations to permutations array
    for (const subpermutation of permutations(remaining)) permutationArr.push(char + subpermutation);
  }
  return permutationArr;
}


function permPalin(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].split('').reverse().join('') === array[i]) return true;
  }
  return false;
}

console.log(permPalin(permutations('abab')));

module.exports = permPalin;

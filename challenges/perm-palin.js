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

function getPerms(string) {
  if (string.length < 2) return string;
  const perms = [];

  for (let i = 0; i < string.length; i++) {
    let char = string[i];

    let remainingString = `${string.slice(0 , i)}${string.slice(i + 1,string.length)}`;

    for (let subPerm of getPerms(remainingString))
      perms.push(char + subPerm)
  }
  return perms;
}

function permPalin(str) {
  const perms = getPerms(str);
  let reverseStr;

  for (let i = 0; i < perms.length; i += 1) {
    reverseStr = perms[i].split('').reverse().join('');
    console.log(str, reverseStr);
    if (str === reverseStr) return true;
  }
}

module.exports = permPalin;
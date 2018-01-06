/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example:
  * var result = anagrams('abc');
  * console.log(result); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

function anagrams(string) {
  if (typeof string !== 'string') return;
  const perms = [];

  if (string.length < 2) {
    perms.push(string);
    return perms;
  };

  for (let i = 0; i < string.length; i += 1) {
    let char = string[i];
    let remainingString = `${string.slice(0, i)}${string.slice(i + 1, string.length)}`;

    for (let subPerm of anagrams(remainingString)) {
      perms.push(char + subPerm)
    }
  }
  return perms;
}

module.exports = anagrams;

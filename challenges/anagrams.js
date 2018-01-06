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

function permuteHelper(str, chosen, result) {
  // console.log(str, chosen, result);
  if (!str.length) {
    result.add(chosen.join(''));
  } else {
    // choose/explore/unchoose
    for (let i = 0; i < str.length; i++) {
      // choose
      const c = str[i];
      chosen.push(c);
      str.splice(i, 1);
      // explore
      permuteHelper(str, chosen, result);
      // unchoose
      str.splice(i, 0, c);
      chosen.pop();
    }
  }
}

function anagrams(str) {
  const result = new Set();
  permuteHelper(str.split(''), [], result);
  return [...result];
}

// console.log(anagrams('aba'));

module.exports = anagrams;

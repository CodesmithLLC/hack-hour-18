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

// would be better to implement Heap's algorithm, the most efficient permuations
// algorithm for computers
function anagrams(str) {
  const permutations = [];
  if (str.length === 1) return str;

  for (let i = 0; i < str.length; i += 1) {
    const current = str[i];
    const remainingStr = str.slice(0, i) + str.slice(i + 1, str.length);

    for (const subpermutation of anagrams(remainingStr)) {
      permutations.push(current + subpermutation);
    }
  }

  return permutations
}


const result = anagrams('abc');
console.log(result); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]

module.exports = anagrams;

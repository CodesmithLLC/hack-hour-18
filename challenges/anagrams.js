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
  if (string.length === 0) return [''];
  const obj = {};
  const length = string.length;
  const getGrams = (subString, positions) => {
    if (subString.length === length) obj[subString] = subString;
    else positions.forEach((position, index, array) => {
      let newPositions = array.slice();
      newPositions.splice(index, 1);
      getGrams(subString + string[position], newPositions)
    });
  }
  string.split('').forEach((letter, i, arr) => {
    let positions = arr.map((elem, ind) => ind);
    positions.splice(i, 1);
    getGrams(letter, positions);
  })
  return Object.keys(obj);
}

module.exports = anagrams;

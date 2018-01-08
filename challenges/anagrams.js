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
  if (string === '') return [];

  function helper(str, pos, combos) {
    let result = [];
    console.log(combos);
    if (str === '' || pos === str.length) return combos;

    let cur = str[pos];

    for (let i=0; i < combos.length; i++) {
      for (let j=0; j < combos[i].length; j++) {
        console.log('combos', combos[i].split('').slice().splice(i, 0, cur));
        result.push(combos[i].split('').slice(0, i).concat([cur]).concat(combos[i].split('').slice(i)).splice(i, 0, cur).join(''));
      }
    }
    helper(str, pos + 1, result);
  }
  return helper(string, 0, [ string[0] ]);
}

console.log(anagrams('abc'));
// console.log('test', ['a'].splice(0, 0, 'b'));

module.exports = anagrams;

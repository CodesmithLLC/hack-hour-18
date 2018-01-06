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
  let arr = string.split("");
  let str = string.slice();
  const result = [];
  
  for (let i=0; i<string.length; i++) {
    let temp = arr[i]
    arr.splice(i,1)
    result.push(temp.concat(arr.join('')))
    result.push(temp.concat(arr.reverse().join('')))
    arr = string.split("")
  }
  return result
}

module.exports = anagrams;

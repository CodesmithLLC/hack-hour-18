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
  let returnArray = [];

  function swap(str, l, i) {
    let arr = str.split('');
    let tmp = arr[l];
    arr[l] = arr[i];
    arr[i] = tmp
    return arr.join('');
  }

  function permute(returnArray, string, start, end) {
    if (start === end) {
      returnArray.push(string);
      return;
    }
    else {
      for (let i = start; i <= end; i++ ) {
        string = swap(string, start, i);
        permute(returnArray, string, start + 1, end);
        string = swap(string, start, i) //backtrack
      }
    }

  }
  permute(returnArray, string, 0, string.length - 1);
  return returnArray;
}

  
module.exports = anagrams;
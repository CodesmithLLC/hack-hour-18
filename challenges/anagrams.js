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
    let result = [];
    let s;
    let t;
    let count = 0;
    let x = Array.from(string)
    
    for(var j = 0; j < x.length; j++){
    for(var i = 0; i < x.length; i++){
      result.push(x.toString().replace(/,/g, ''))
      x.unshift(x.pop())
    }
    count++;
    for(var r = 0; r < count; r++){
    x.unshift(x.pop())
    }
    s = x.shift()
    t = x.shift()
    x.unshift(s)
    x.unshift(t)
    }
    return result;
    }

module.exports = anagrams;

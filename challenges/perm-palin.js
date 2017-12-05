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

function permPalin(str, recursive, count = 0) {
  if(typeof str !== 'string') return false; //edge case
  if(!recursive && str.length === 1){ //edge case
    return true;
  }else if(recursive === true && str.length <= 2){ //edge case
    return false;
  }
  count++
  if(str === str.split('').reverse().join('')){
    return true;
  }else {
    return count % 2 === 0 ? permPalin(str.slice(1), true, count) : permPalin(str.slice(0,str.length-1), true, count)
  }
}

module.exports = permPalin;
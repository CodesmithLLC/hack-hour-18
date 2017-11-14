/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *
 */

// solution will not work for '[](){}';
function balancedParens(input){
  if (typeof input !== 'string') return;
  let newStr = '';

  // try to use regex to only match brackets
  input.split('').forEach(elem => {
    if (elem === '(' || elem === '{' || elem === '[' || elem === ']' || elem === '}' || elem === ')') {
      newStr += elem;
    }
  });

  // get 2 halves of bracket strings
  const str1 = newStr.slice(0, Math.floor(newStr.length / 2));
  const str2 = newStr.slice(Math.floor(newStr.length / 2), newStr.length);


  function compare(x, y) {
    if (x === '(' && y !== ')') {
      return false;
    } else if (x === '{' && y !== '}') {
      return false
    } else if (x === '[' && y !== ']') {
      return false;
    }
    return true;
  }

  for (let i = 0; i < str1.length; i += 1) {
    for (let j = str2.length - 1; j >= 0; j -= 1) {
      return compare(str1[i], str2[j]);
    }
  }
}

module.exports = balancedParens;

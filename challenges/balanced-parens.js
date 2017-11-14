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

function balancedParens(input){
  const openArray = ['[','(','{'];
  const closeArray = [']',')','}'];
  const lastArray = [];

  for (let i = 0; i < input.length; i++) {
    if (openArray.includes(input[i])) {
      lastArray.push(input[i]);
    } else if (closeArray.includes(input[i])) {
      if (openArray.indexOf(lastArray[lastArray.length - 1]) === closeArray.indexOf(input[i])) {
        lastArray.pop();
      } else return false;
    }
  } return lastArray.length === 0 ? true : false;
}

module.exports = balancedParens;

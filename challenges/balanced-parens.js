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

function balancedParens(input) {
  return isBalanced(input, 0) > 0;
}

function isBalanced(input, initPos) {
  if (input[initPos] === '(') {
    for (let pos = initPos + 1; pos < input.length; pos += 1) {
      const curChar = input[pos];
      if (curChar === ')') return pos;
      if (curChar === '(') {
        pos = isBalanced(input, pos);
      }
    }
  }
  return false;
}

console.assert(balancedParens('(') === false);  // false
console.assert(balancedParens('()') === true); // true
console.assert(balancedParens(')(') === false);  // false
console.assert(balancedParens('(())') === true);  // true
console.assert(balancedParens('(()') === false);  // false

module.exports = balancedParens;

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
 *   make your solution work for all types of braces
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

const braces = { '{': '}', '[': ']', '(': ')' };

function isOpenBrace(element) {
  return braces[element];
}

function isCloseBrace(element) {
  return Object.values(braces).indexOf(element) !== -1;
}

function balancedParens(input) {
  if (typeof input !== 'string') return undefined;
  const braceStack = [];
  const inputArr = input.split('');
  for (let i = 0; i < inputArr.length; i++) {
    if (isOpenBrace(inputArr[i])) braceStack.push(inputArr[i]);
    else if (braceStack.length !== 0 && inputArr[i] === braces[braceStack[braceStack.length - 1]]) braceStack.pop();
    else if (isCloseBrace(inputArr[i])) return false;
  }
  return braceStack.length === 0;
}

// console.log(balancedParens(' var wow  = { yo: thisIsAwesome() }')) // true
// console.log(balancedParens(' var hubble = function() { telescopes.awesome();')) // false
// console.log(balancedParens('[](){}')); // true
// console.log(balancedParens('[({})]')); // true
// console.log(balancedParens('[(]{)}')); // false
// console.log(balancedParens(7)); // false


module.exports = balancedParens;

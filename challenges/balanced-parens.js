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
  return braces[element] ? true : false;
}

function isCloseBrace(element) {
  return Object.values(braces).indexOf(element) !== -1;
}

function balancedParens(input) {
  if (typeof input !== 'string') return undefined;
  const braceStack = [];
  // const inputArr = input.split('');
  for (let i = 0; i < input.length; i++) {
    if (isOpenBrace(input[i])) braceStack.push(input[i]);
    else if (braceStack.length !== 0 && input[i] === braces[braceStack[braceStack.length - 1]]) braceStack.pop();
    else if (isCloseBrace(input[i])) return false;
  }
  return braceStack.length === 0;
}

// console.log(balancedParens('('));  // false
// console.log(balancedParens('()')); // true
// console.log(balancedParens(')('));  // false
// console.log(balancedParens('(())'));  // true
// console.log(balancedParens(' var wow  = { yo: thisIsAwesome() }')); // true
// console.log(balancedParens(' var hubble = function() { telescopes.awesome();')); // false
// console.log(balancedParens('[](){}')); // true
// console.log(balancedParens('[({})]')); // true
// console.log(balancedParens('[(]{)}')); // false
// console.log(balancedParens(7)); // undefined


module.exports = { balancedParens: balancedParens, isOpenBrace: isOpenBrace, isCloseBrace: isCloseBrace };

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
  const parens = { '(': ')', '{': '}', '[': ']' };
  const openParens = Object.keys(parens);
  const closeParens = Object.values(parens);
  for (let pos = 0; pos < input.length; pos += 1) {
    const curChar = input[pos];
    if (openParens.indexOf(curChar) > -1) {
      pos = isBalanced(input, pos);
    }
    if (pos === false || closeParens.indexOf(curChar) > -1) {
      return false;
    }
  }
  return true;
}

function isBalanced(input, initPos) {
  const parens = { '(': ')', '{': '}', '[': ']' };
  const closing = parens[input[initPos]];
  for (let pos = initPos + 1; pos < input.length; pos += 1) {
    const curChar = input[pos];
    // Reached closing paren
    if (curChar === closing) return pos;
    // Reached another opening paren
    if (curChar in parens) pos = isBalanced(input, pos);
    // Reached a closing paren that doesn't match the current type
    if (pos === false || Object.entries(parens).indexOf(curChar) !== -1) {
      return false;
    }
  }
  return false;
}

// function balancedParens(input) {
//   const parens = { '(': ')', '{': '}', '[': ']' };
//   const parensStack = [];
//   for (let i = 0; i < input.length; i += 1) {
//     const cur = input[i];
//     if (cur in parens) {
//       parensStack.push(parens[cur]);
//     }
//     if (cur === parensStack[parensStack.length - 1]) {
//       parensStack.pop();
//     }
//   }
//   return parensStack.length === 0;
// }

console.assert(balancedParens('(') === false);  // false
console.assert(balancedParens('()') === true); // true
console.assert(balancedParens(')(') === false);  // false
console.assert(balancedParens('(())') === true);  // true
console.assert(balancedParens('(()') === false);  // false

console.assert(balancedParens('[](){}') === true); // true
console.assert(balancedParens('[}') === false); // false
console.assert(balancedParens('[({})]') === true);   // true
console.assert(balancedParens('[(]{)}') === false); // false

console.assert(balancedParens(' var wow  = { yo: thisIsAwesome() }') === true); // true
console.assert(balancedParens(' var hubble = function() { telescopes.awesome();') === false); // false

module.exports = balancedParens;

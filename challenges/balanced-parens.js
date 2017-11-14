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
  for (let pos = 0; pos < input.length; pos += 1) {
    if ('({['.indexOf(input[pos]) > -1) {
      const result = isBalanced(input, pos);
      if (result === false) return false;
      pos = result;
    } else if (')}]'.indexOf(input[pos]) > -1) {
      return false;
    }
  }
  return true;
}

function isBalanced(input, initPos) {
  const startChar = '({[';
  const endChar = ')}]';
  const charI = startChar.indexOf(input[initPos]);
  // if (charI === -1) return false;
  for (let pos = initPos + 1; pos < input.length; pos += 1) {
    const curChar = input[pos];
    // Reached closing paren
    if (curChar === endChar[charI]) return pos;
    // Reached another opening paren
    if (startChar.indexOf(curChar) > -1) {
      pos = isBalanced(input, pos);
      if (pos === false) return false;
    }
    // Reached a closing paren that doesn't match the current type
    else if (')}]'.indexOf(curChar) !== -1) {
      return false;
    }
  }
  return false;
}

// console.assert(balancedParens('(') === false);  // false
// console.assert(balancedParens('()') === true); // true
// console.assert(balancedParens(')(') === false);  // false
// console.assert(balancedParens('(())') === true);  // true
// console.assert(balancedParens('(()') === false);  // false
//
// console.assert(balancedParens('[](){}') === true); // true
// console.assert(balancedParens('[}') === false); // false
// console.assert(balancedParens('[({})]') === true);   // true
// console.assert(balancedParens('[(]{)}') === false); // false
//
// console.assert(balancedParens(' var wow  = { yo: thisIsAwesome() }') === true); // true
// console.assert(balancedParens(' var hubble = function() { telescopes.awesome();') === false); // false

module.exports = balancedParens;

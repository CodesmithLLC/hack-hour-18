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

function balancedParens(input) { // trying to implement with a stack from solution online
  const stack = [];
  const open = {
    '{': '}',
    '[': ']',
    '(': ')',
  };
  const closed = {
    '}': true,
    ']': true,
    ')': true,
  };
  for (i = 0; i < input.length; i++) {
    const char = input[i];
    if (open[char]) stack.push(char);
    else if (closed[char]) {
      if (open[stack.pop()] !== char) return false;
    }
  }
  return stack.length === 0;
}

console.log(balancedParens('(')); // false
console.log(balancedParens('()')); // true
console.log(balancedParens(')(')); // false
console.log(balancedParens('(())')); // true

console.log(balancedParens('[](){}')); // true
console.log(balancedParens('[({})]')); // true
console.log(balancedParens('[(]{)}')); // false

module.exports = balancedParens;


// function balancedParens(input) { //doesn't work for step three and for '[{]' this case
//   const obj = {
//     '(': 0,
//     ')': 0,
//     '{': 0,
//     '}': 0,
//     '[': 0,
//     ']': 0,
//   };
//   const splitInput = input.split('');
//   for (i = 0; i < splitInput.length; i++) { // cannot use forEach loop bc cannot break or return from it
//     obj[splitInput[i]] += 1;
//     if (obj[')'] > obj['(']) return false;
//     if (obj[']'] > obj['[']) return false;
//     if (obj['}'] > obj['{']) return false;
//   }
//   if (obj[')'] !== obj['(']) return false;
//   if (obj[']'] !== obj['[']) return false;
//   if (obj['}'] !== obj['{']) return false;
//   return true;
// }

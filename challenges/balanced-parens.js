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
    for (let i = 0; i < input.length; i++) {
        if (input[i] === ')' || input[i] === '}' || input[i] === ']') {
          return false;
        } else if (input.length <= 1) {
            return false;
          } else if (input[i] === '(' || input[i] === '{' || input[i] === '[') {
              let position = i;
              let newString = input.slice(position+1);
              for (let j = newString.length - 1; j >= 0; j--) {
                if (newString[j] === ')' || newString[j] === '}' || newString[j] === ']') {
                  return true;
                } else return false;
          }
        } else throw new Error ('Need to pass in parens, brackets or curly braces!')
      }
}

module.exports = balancedParens;

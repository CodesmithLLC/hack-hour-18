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
    if (input.length === 0) return false;

    const inputArr = input.split('');
    const inputObj = {};
    inputArr.forEach(element => {
        if (inputObj[element]){
            inputObj[element]++;
        } else {
            inputObj[element] = 1;
        }
    });

    const curlyBrackets = inputObj['{'] === inputObj['}'];
    const parens = inputObj['('] === inputObj[')'];
    const squareBrackets = inputObj['['] === inputObj[']'];

    return curlyBrackets && parens && squareBrackets;
}

module.exports = balancedParens;

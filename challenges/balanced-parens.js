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
    let openers = [];
    const chars = input.split('').filter(c => {
        return (c === '(' || c === ')' || c === '[' || c === ']' || c === '{' || c === '}');
    });
    for (let i = 0; i < chars.length; i++) {
        switch (chars[i]) {
            case '(':   openers.push('(');
                        break;
            case ')':   if (openers[openers.length - 1] === '(') openers.pop();
                        else return false;
                        break;
            case '[':   openers.push('[');
                        break;
            case ']':   if (openers[openers.length - 1] === '[') openers.pop();
                        else return false;
                        break;
            case '{':   openers.push('{');
                        break;
            case '}':   if (openers[openers.length - 1] === '{') openers.pop();
                        else return false;
                        break;
        } 
    }
    return (openers.length === 0);
}

module.exports = balancedParens;

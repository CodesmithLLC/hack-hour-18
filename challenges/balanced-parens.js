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
    let begin = 0;
    let end = input.length -1;
    const brackets = ['[', ']', '(', ')'];
    let found = false;

    for (let i=0; i< input.length; i++) {
        if (input[i] === '(') {
            let j = i + 1;
            let finished = false;
            while (!finished) {
                if (j = input.length) return false;
                if (input[j] === ')') {
                    i = j;
                    finished = true;
                } else if (input[j] === ']' || input[j] === '}') {
                    return false;
                }
                j++;
            }
            
        }
        if (input[i] === '[') {
            let j = i + 1;
            let finished = false;
            while (!finished) {
                if (j = input.length) return false;
                if (input[j] === ']') {
                    i = j;
                    finished = true;
                } else if (input[j] === ')' || '}') {
                    return false;
                }
                j++;
            }
        }
        if (input[i] === '{') {
            let j = i + 1;
            let finished = false;
            while (!finished) {
                if (j = input.length) return false;
                if (input[j] === '}') {
                    i = j;
                    finished = true;
                } else if (input[j] === ')' || ']') {
                    return false;
                }
                j++;
            }
        }
    }
    return true;
}

module.exports = balancedParens;

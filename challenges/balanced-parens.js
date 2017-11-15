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


// REFACTOR
// save each opening bracket to a hash map 
// if a matching closing bracket is found in the rest of the string return true

function balancedParens(input){
    // input type string
    // return boolean
    if(input.constructor !== String) return false;
    const cleanInput = input.replace(/([A-Z])\w+/ig, ''); // remove all non bracket characters from input string
    console.log('cleanInput:  ', cleanInput);
    for (let i = 0; i < cleanInput.length; i++) {
        switch (cleanInput[i]) {
            case '(':
                // console.log('cleanInput[i]:  ', cleanInput[i], '  cleanInput[i + 1]:  ', cleanInput[i + 1], "cleanInput[i + 1] === ')':  ", cleanInput[i + 1] === ')');
                if (cleanInput[i + 1] === ')') return true;
                break;
            case '[':
                // console.log('cleanInput[i]:  ', cleanInput[i], '  cleanInput[i + 1]:  ', cleanInput[i + 1], "cleanInput[i + 1] === ']':  ", cleanInput[i + 1] === ')');
                if (cleanInput[i + 1] === ']') return true;
                break;
            case '{':
                // console.log('cleanInput[i]:  ', cleanInput[i], '  cleanInput[i + 1]:  ', cleanInput[i + 1], "cleanInput[i + 1] === '}':  ", cleanInput[i + 1] === ')');
                if (cleanInput[i + 1] === '}') return true;
                break;
            default:
                break;
        }
    }
    return false;
}

// console.log(balancedParens(11));  // false
// console.log(balancedParens('('));  // false
// console.log(balancedParens('()')); // true
// console.log(balancedParens(')('));  // false
// console.log(balancedParens('(())'));  // true

//  console.log(balancedParens('[](){}')); // true
//  console.log(balancedParens('[({})]'));  // true
//  console.log(balancedParens('[(]{)}')); // false

//  console.log(balancedParens(' var wow  = { yo: thisIsAwesome() }')); // true
 console.log(balancedParens(' var hubble = function() { telescopes.awesome();')); // false

module.exports = balancedParens;

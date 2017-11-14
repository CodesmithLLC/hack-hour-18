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
    let newOpening = [], 
        newClosing = [];
        parenOpening = /[{[(]/gi,
        parenClosing = /[})\]]/gi
        flag = true;
            
    if (input.length === 0)    
        return flag;
        
    for (let i = 0; i < input.length; i++) {
        if (input[i].match(parenOpening)) {
            newOpening.push(input[i]);
        }
        if(input[i].match(parenClosing)) {
            newClosing.push(input[i]);
        }
    }
        
    for (let j = 0; j < newOpening.length; j++ ) {
        if ((newOpening[j] == '[' && newClosing[j] == ']') || 
            (newOpening[j] == '{' && newClosing[j] == '}') || 
            (newOpening[j] == '(' && newClosing[j] == ')'))
             ;
        else 
            flag = false;
    }   
    return flag;
}
    
module.exports = balancedParens;

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
    //filtering out unneeded characters
    input = input.replace(/[\w:;.,'\s\d]/gi, "")
    
    //checking if balanced at half
    let clone = input.slice(0,input.length/2)
    let cloned = clone.concat(clone.split("").map(val=> val ==="{" ? "}" : val === "(" ? ")" : "]" ).reverse().join(""))
    if (input === cloned) {
      return true
    }
    
    //checking for pairs
    let temp = input.replace( "()" , "" )
    temp = temp.replace( "{}" , "" )
    temp = temp.replace( "[]" , "" )
    return temp.length > 0 ? false : true
}
module.exports = balancedParens;

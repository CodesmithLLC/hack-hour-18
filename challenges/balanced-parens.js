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
    if (typeof input !== 'string'){ return false}
    let x = Array.from(input);
    let y = x.filter((elem) =>  {if (elem === '(' || elem === ')' || elem === '{' || elem === '}' || elem === '[' || elem === ']' ) {return elem}})
    
    if (y.length % 2 !== 0) {return false}
    
    for (var i = 0; i < y.length; i++){
      let temp = y.shift();
      
      if(temp === '(' && y.indexOf(')') >= 0) { y.splice(y.indexOf(')'))} else y.push(temp)
       if(temp === '{' && y.indexOf('}') >= 0) { y.splice(y.indexOf('}'))} else y.push(temp)
       if(temp === '[' && y.indexOf(']') >= 0) { y.splice(y.indexOf(']'))}
      
     
    }
    return (y.length === 0)
    }

module.exports = balancedParens;

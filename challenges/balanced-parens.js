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
  if(typeof input !== 'string' || input.length === 0) return;
  let charsArr = ["[", "]", "{", "}", "(", ")"];
  var chars = [...input];
  let balance;
  chars.forEach(function(cv){
    if(charsArr.includes(cv)){
      charsArr.forEach(function(ele,i){
        if(ele === cv && i % 2 === 0){
          balance = true;
        } else {
          balance = false;
        }
      })
    }       
  })
  return balance;
}

module.exports = balancedParens;

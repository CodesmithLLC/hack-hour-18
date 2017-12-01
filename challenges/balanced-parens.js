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
   const bracketsArr = '{} [] ()'.split(' ')
   const brackets = '{}[]()'.split('')
   const bracketsOnly = input.split('').filter(str=>{
     return brackets.indexOf(str) !== -1
   }).join('')

   const removeBrackets = (str) => {
     if (!str.length) return true
     let index = 0
     let check = false
     bracketsArr.forEach(ele => {
       index = str.indexOf(ele)
       if (index > -1) {
         str = str.split('')
         str.splice(index, 2)
         str = str.join('')
         check = true
       }
     })
     if (!check) return false
     return removeBrackets(str)
   }
   return removeBrackets(bracketsOnly)
 }

module.exports = balancedParens;

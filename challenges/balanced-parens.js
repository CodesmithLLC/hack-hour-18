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
    //    let array = input.split("");
        let newOpening = [], newClosing = [];
        let parenOpening = /[{[(]/gi,
            parenClosing = /[})\]]/gi;
        
        for (let i = 0; i < input.length; i++) {
           if (input[i].match(parenOpening)) {
              newOpening.push(input[i]);
           }
           //console.log("]".match(parenClosing));
          if(input[i].match(parenClosing)) {
              newClosing.push(input[i]);
          }
        }
        
        for (let j = 0; j < newOpening.length; j++ ) {
       //   console.log(newOpening[j].match('[\[]'))
       
          if (newOpening[j].match('[\[]') && newClosing[j].match('[\]]'))
            
          ;
        }
    }
    
    balancedParens('[](){}');

module.exports = balancedParens;

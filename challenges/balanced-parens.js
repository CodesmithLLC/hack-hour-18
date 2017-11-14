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
    let queue = [];
    const begB = ['(', '[', '{'];
    const endB = [')', ']', '}'];
    
    for (let i=0; i< input.length; i++) {
      if (endB.indexOf(input[i]) > -1) {
        console.log('end check ' + queue);
        let char = begB[endB.indexOf(input[i])];
        let temp = queue.indexOf(char);
        console.log(temp);
        if (temp > -1) {
          queue.splice(temp, 1);
          console.log(queue);
        } else {
          return false;
        }
        
      }
      if (begB.indexOf(input[i]) > -1) {
        queue.push(input[i]);
        console.log(queue);
      }
    }
    
    if (queue === []) {
      return true;
    } else {
      return false;
    }
}

module.exports = balancedParens;

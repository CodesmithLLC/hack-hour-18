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
    let holder = input.split("");

    let parens = 0;
    let curlys = 0;
    let angles = 0;

    let first = undefined;
    let last = undefined;
    
    let validsyntax = false;
    
    for(let i=0; i<holder.length;i++){
       if(holder[i]==="(" || holder[i] === ")"){
          parens++;
            if(first===undefined){
              first = holder[i];
            }else{
              last = holder[i];
            }
       }else if(holder[i]==="{" || holder[i] === "}"){
           curlys++;
            if(first===undefined){
              first = holder[i];
            }else{
              last = holder[i];
            }
       }else if(holder[i]==="[" || holder[i] === "]"){
           angles++;
           if(first===undefined){
            first = holder[i];
          }else{
            last = holder[i];
          }
       }
    }
  
  if(first==="(" && last === ")"){
    validsyntax = true;
  }else if(first === "{" && last === "}"){
    validsyntax = true;
  }else if(first === "[" && last === "]"){
    validsyntax = true;
  }

    if((parens%2===0) && (curlys%2===0) && (angles%2===0) && validsyntax){
        return true;
    }else{
        return false;
    }
}

module.exports = balancedParens;

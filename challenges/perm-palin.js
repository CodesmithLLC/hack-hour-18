/**
 * Given a string, determine if any of the permutations of that 
 * string is a palindrome
 *
 * Example:
 * 	- permPalin('abab') => true
 * 	- permPalin('cbaba') => true
 * 	- permPalin('cbac') => false
 * 	- permPalin('a') => true
 *
 */

function permPalin(str) {
    let strarray = str.split("");
    let lettercollection = { };

    for(let i=0;i<strarray.length;i++){
      if(!lettercollection[strarray[i]]){
        lettercollection[strarray[i]] = 1;
      }else{
        lettercollection[strarray[i]]++;
      }
    }

    let exception = 0;

    for(var key in lettercollection){
        if(lettercollection[key]===1){
            exception++;
        }
    }

    if(exception>1){
        return false;
    }else{
        return true;
    }
}

module.exports = permPalin;


// strarray = ['a','b','c']
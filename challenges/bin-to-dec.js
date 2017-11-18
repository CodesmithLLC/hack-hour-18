/* You are given a string that represents a binary number
 *
 * Write a function that converts the binary string to a decimal number
 *
 * Example:
* 	binToDec('0')   -> 0
 * 	binToDec('11')  -> 3
 * 	binToDec('100') -> 4
 * 	binToDec('101') -> 5
 *  binToDec('0101') -> 5
 *
 * Extension:
 * Write a function that converts a decimal number to binary (then maybe hexadecimal)
 */

function binToDec(binary) {
    let work = Array.from(binary)
    let length = work.length;
    let counter = 1;
    let result = 0;
    
    for(var i = 0; i < length; i++){
      result = result + (work.pop() * counter);
      counter = counter * 2;
    }
    return result;
    }

module.exports = binToDec;

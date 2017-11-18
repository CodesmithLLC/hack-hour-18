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
  let results = 0;
  for (let i = binary.length - 1, j = 0; i >= 0, j < binary.length; i--, j++) {
    if (binary[j] === '0') {
      results += 0; 
    } else results += Math.pow(2, i);
  }
  return results;
} 

module.exports = binToDec;

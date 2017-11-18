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
  // return parseInt(binary, 2);
  let exp = binary.length;
  return binary.split('').reduce((dec, curr) => {
    exp -= 1;
    if (curr !== '0') return dec + (2 ** exp);
    return dec;
  }, 0);
}

console.log(binToDec('0101'));

module.exports = binToDec;

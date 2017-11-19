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
  let total = 0;
  for (let i = 0; i < binary.length; i += 1) {
    const pos = binary.length - 1 - i;
    total += binary[pos] * (2 ** i);
  }
  return total;
}

// console.assert(binToDec('0') === 0);
// console.assert(binToDec('11') === 3);
// console.assert(binToDec('100') === 4);
// console.assert(binToDec('101') === 5);
// console.assert(binToDec('0101') === 5);
// console.assert(binToDec('1000') === 8);
// console.assert(binToDec('1001') === 9);

module.exports = binToDec;

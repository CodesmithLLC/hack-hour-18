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
  let doubler = 1;
  return binary.split('').reverse().map(n => Number(n)).reduce((accum, num) => {
    if (num !== 0) accum += doubler;
    doubler = doubler * 2;
    return accum;
  }, 0);
}

function decToBin(decimal) {
  let doubler = 1;
  while (doubler < decimal) doubler = doubler * 2;
  doubler = doubler / 2;
  const binaryArray = [];
  while (doubler >= 1) {
    if (decimal - doubler >= 0) {
      binaryArray.push('1');
      decimal = decimal - doubler;
    } else {
      binaryArray.push('0');
    }
    doubler = doubler / 2;
  }
  return binaryArray.join('');
}

module.exports = { binToDec, decToBin };

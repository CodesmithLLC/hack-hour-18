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
  if (typeof binary !== 'string') return ('improper input');
  let binArr = binary.split('');
  if (!binArr.every((x) => x == 0 || x == 1)) return ('not a binary number');
  binArr = binArr.reverse();
  const numArr = binArr.map((elem, index) => {
    return elem * Math.pow(2, index);
  });
  return numArr.reduce((acc, val) => {return acc + val}, 0);
}


function decToBin(num) {
  if (num === 0) {return '0'}
  let binLength = 0;
  while (num >= Math.pow(2, binLength)) {
    binLength ++;
  }
  let binArray = [];
  for (let i = binLength - 1; i >= 0; i--) {
    if (num >= Math.pow(2, i)) {
      binArray.push('1');
      num -= Math.pow(2, i);
    } else binArray.push('0');
  }
  return binArray.join('');
}

// console.log(binToDec('0'))   //-> 0
// console.log(binToDec('11'))  //-> 3
// console.log(binToDec('100')) //-> 4
// console.log(binToDec('101')) //-> 5
// console.log(binToDec('0101')) //-> 5
// console.log(binToDec('100101011001101011')); // -> 153,195
// console.log(binToDec(undefined))

module.exports = binToDec;

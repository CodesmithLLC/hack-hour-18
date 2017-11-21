"use strict";
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

 // The decimal number is equal to the sum of binary digits (dn) times their power of 2 (2n)
 // 11 = (1 * 2^1) + (1 * 2^0)
 // 11 = 2 + 1
 // 11 = 3

 // 100 = (1 * 2^2) + (0 * 2^1) + (0 * 2^0)
 // 100 = 4 + 0 + 0
 // 100 = 4

 // 101 = (1 * 2^2) + (0 * 2^1) + (1 * 2^0)
 // 101 = 4 + 0 + 1 
 // 101 = 5

 // 0101 = (0 * 2^3) + (1 * 2^2) + (0 * 2^1) + (1 * 2^0)
 // 0101 = 0 + 4 + 0 + 1
 // 0101 = 5

function binToDec(binary) {
    const binaryArr = binary.split('');
    let output = 0;
    for (let i = 0, j = binaryArr.length - 1; i < binaryArr.length; i++, j--) {
        output = output + binaryArr[i] * (2 ** j);
    }
    return output;
}

// console.log(binToDec('0')); // -> 0
// console.log(binToDec('11')); // -> 3
// console.log(binToDec('100')); // -> 4
// console.log(binToDec('101')); // -> 5
// console.log(binToDec('0101')); // -> 5

module.exports = binToDec;

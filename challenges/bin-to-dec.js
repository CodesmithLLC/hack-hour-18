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
    let result = 0;
    let pos = binary.length - 1;

    for (let i = binary.length -1, pos = 0; i >= 0; i--, pos++) {
        if (binary[i] === '1') {
            result = result + Math.pow(2, pos);
        } else if (binary[i] !== '0') {
            return undefined;
        }
    }
    return result;
}
console.log(binToDec('0'));
console.log(binToDec('11'));
console.log(binToDec('101'));
module.exports = binToDec;

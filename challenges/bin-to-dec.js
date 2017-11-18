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

    for (let i = binary.length -1, pos = 0; i >= 0; i--, pos++) {
        if (binary[i] === '1') {
            result = result + Math.pow(2, pos);
        } else if (binary[i] !== '0') {
            return undefined;
        }
    }
    return result;
}

function hexToDec(hex) {
    let result = 0;
    const keys = ['a', 10, 'b', 11, 'c', 12, 'd', 13, 'e', 14, 'f', 15];
    for (let i = hex.length -1, pos=0; i>=0; i--, pos++) {
        if (keys.indexOf(hex[i]) > -1) {
            result += keys[1 + keys.indexOf(hex[i])] * Math.pow(16, pos);
        } else if (typeof parseInt(hex[i]) === 'number') {
            result += parseInt(hex[i]) * Math.pow(16, pos);
        } else {
            return undefined;
        }

    }
    return result;
}

module.exports = binToDec;

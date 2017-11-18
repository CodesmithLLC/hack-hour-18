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
    // const obj = {'0': 1,'1': 2,'2': 4,'3': 8,'4': 16,'5': 32,'6': 64,'7': 128, '8':256, '9': 512, '10': 1024, '11':2048};
    let obj = {};
    for (let i = 0; i < binary.length; i++){
        obj[i] = Math.pow(2, i);
    }

    const binArr = binary.split('').reverse();
    let returnVal = 0;
    binArr.forEach((element, index) => {
        if (binArr[index] === '1'){
            returnVal += obj[index];
        }
    });
    return returnVal;
}

module.exports = binToDec;

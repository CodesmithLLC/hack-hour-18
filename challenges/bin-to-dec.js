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
  if(typeof binary !== 'string' || binary === 0) return;
  let binaryArr = binary.split("").reverse();
  let double = 1;
  let total = 0;
  for(let i = 0; i < binaryArr.length;i++){
    if(parseInt(binaryArr[i]) === 1){
      total = parseInt(binaryArr[i]) * double;
      double *= 2;
    } else {
      double *= 2;
    }
  }
  return total;
}

module.exports = binToDec;

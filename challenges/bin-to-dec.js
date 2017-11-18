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

// function binToDec(binary) {
//   let totalDigits = binary.length
//   let binArr = binary.split('');
//   let total = Number(binArr[binArr.length-1]);
//   for(let i = 0; i < totalDigits-1; i++){
//     let currentDigit = (totalDigits - 1) - i
//     if(Number(binArr[i]) === 1){
//       total += Math.pow(2, currentDigit);
//     }
//   }
//   return total;
// }


// done recursively
// NOTE: in the recursive call - it does the power calculation no matter what in recursive call
// but it multiplies by current digit, so if that is a 0 it will end up adding zero to total
function binToDec(binary, total) {
  if(total === undefined) total = 0;
  let digit = binary.length-1;
  if(binary.length === 1) return total + Number(binary)
  return binToDec(binary.slice(1), Number(binary[0])*Math.pow(2, digit)+total)
}

module.exports = binToDec;

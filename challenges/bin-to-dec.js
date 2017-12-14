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
   const binaryArr = binary.split('').reverse()
   return binaryArr.reduce((acc, ele, index) => {
     return ele === '1' ? acc + Math.pow(2, index) : acc
   }, 0)
 }

//  function decToBin(num, bin = 0) {
//   if (num === 1) return bin +1
//   if (num === 0) return bin
//   let bits = 2
//   let power = 1
//   while (num >= bits*2) {
//     power++
//     bits *= 2
//   }
//   return decToBin(num-bits, bin += Math.pow(10, power))
// }

module.exports = binToDec;

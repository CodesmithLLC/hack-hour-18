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
    // return parseInt(binary, 2)
    let list = binary.split("").reverse()
    let total = 0
    // console.log(list)
    list.forEach((val, i)=> {
      // console.log(i)
      if (i===0 && val > 0) {total += 1}
      else if (i===1 && val > 0) {total += 2}
      else if (i===2 && val > 0) {total += 4}
      else if (i===3 && val > 0) {total += 8}
      else if (i===4 && val > 0) {total += 16}
      else if (i===5 && val > 0) {total += 32}
      else if (i===6 && val > 0) {total += 64}
      else if (i===7 && val > 0) {total += 128}
    })
    
    return total
}
module.exports = binToDec;

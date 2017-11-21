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
	const sum = 0; 
	for (let i = binary.length-1, j = 0; i >= 0, j < binary.length; i--, j++) {
	  sum += (Math.pow(2,i)*binary[j])
	}
	return sum;
	// return parseInt(binary,2);
}


module.exports = binToDec;

/*codesmith solution

function binToDec(binary) {
  var len = binary.length;
  var dec = 0;
  var BASE = 2;
  for (var i = 0; i < len; i++){
    dec += binary[i] * Math.pow(BASE,len-1-i);
  }
  return dec;
}
//incomplete: doesn't account for plain 0. does account for leading 0



function decToBin(decimal) {
  let dec = decimal;
  let bin = '';
  let binSpaces = Math.floor(Math.log2(dec));
  while (binSpaces >= 0){
    let temp = Math.pow(2, binSpaces);
    if (dec == temp) {
      bin += '1' + '0'.repeat(binSpaces);
      return bin;
    }
    if (dec > temp) {
      bin += '1';
      dec -= temp;
    } else bin+='0';
    binSpaces--;
  }
  return bin;
}
*/

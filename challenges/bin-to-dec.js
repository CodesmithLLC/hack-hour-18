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

// binary -> decimal
// split binary into array
// iterate through each element in the array
// for each element take starting from 1*2^(length-1)
// or reverse and 
// use reduce or recursion

function binToDec(binary) {
	let binArray = binary.split('').reverse().map(function(num){
		return parseInt(num, 10);
	});
	// 111001
	// (1*(2^5))+(1*(2^4))+(1*(2^3))+(0*(2^2))+(0*(2^1))+(1*(2^0))
	return binArray.reduce(function(prev, curr, index){
		if (curr === 1){
			prev + Math.pow(2, index);
		} else {
			prev;
		}
	})
}

// let decimal = parseInt(binary, 2)

// decimal -> binary
// divide by 2 until it's 1/2, keep track of the remainder each time
// then append all the remainders in reverse

module.exports = binToDec;

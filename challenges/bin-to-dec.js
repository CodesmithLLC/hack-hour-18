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

    var newArray = binary.split(""), sum = 0;
    console.log(newArray);

    for (let i = newArray.length - 1, j = 0; i >= 0; i--, j++) {
        if (newArray[i] == '1') {
            sum += Math.pow(2, j);
        }
        else sum+=0;
    }
    return sum;    
}

function decToBin(num) {
    
    str = "";
    
    while (num != 1) {
        str = str + (num % 2).toString();
        num = num/2;
    }

    console.log("h");
}


//decToBin(5);
//binToDec('0101');
module.exports = binToDec;

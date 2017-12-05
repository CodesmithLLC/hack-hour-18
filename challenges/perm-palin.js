/**
 * Given a string, determine if any of the permutations of that string is a palindrome
 *
 * Example:
 * 	- permPalin('abab') => true
 * 	- permPalin('cbaba') => true ababc
 * 	- permPalin('cbac') => false
 * 	- permPalin('a') => true
 *
 */

function permPalin(str) {
    var re = /[\W_]/g
    string = str.toLowerCase().replace(re, "")
    reverseStr = str.split("").reverse().join("")

    return string === reverseStr
}

module.exports = permPalin;
/**
 * Given a string, determine if any of the permutations of that string is a palindrome
 *
 * Example:
 * 	- permPalin('abab') => true
 * 	- permPalin('cbaba') => true
 * 	- permPalin('cbac') => false
 * 	- permPalin('a') => true
 *
 */

function permPalin(str) {
    console.log('inputs: ', str);
    let string = str.toLowerCase();
    let storage = {};
    for (let i = 0; i < str.length; i++){
        if (storage[str[i]]) storage[str[i]]++;
        else storage[str[i]] = 1;
    }
    let array = Object.values(storage);
    let counter = 0;
    return array.reduce((acc, curval) => {
        if (counter === 1) return false && acc;
        if (curval === 1) counter++;
        return acc && true;
    }, true)
}

module.exports = permPalin;
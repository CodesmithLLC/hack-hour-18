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

function permPalin(string) { //actually a better solution is just store the amounts of each letter of the string
    // in an object and see if every amount for each letter is even
    debugger;
    const str = string;
    let output = [];
    const stringLength = string.length;
    const recurs = (str) => {
        for (i = 0; i < str.length; i++) {
            let remainder = str.slice(0, i) + str.slice(i + 1, str.length); //everything except str[i];
            if (remainder.length > 0) {
                let permutation = str[i] + recurs(remainder);
                if (permutation.length = stringLength) output.push(permutation)
            }
        }
    }
    recurs(str);
    return output;
}

// module.exports = permPalin;

permPalin('abab');
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
    str = str.replace(/[\W0-9]/g, "")
    const cache = {}
    const re = str.split("").forEach((val, i) => cache[val] === undefined ? cache[val] = 1 : cache[val] += 1)
    const odds = []
    for (keys in cache) {
      if (cache[keys] % 2 !== 0) odds.push(cache[keys])
    } 
    return odds.length <= 1
}

module.exports = permPalin;
/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
if (a % 2 === 0 && b % 2 !== 0) return 1; // even/odd
else if (b % 2 === 0 && a % 2 !== 0) return 1 // odd/even
else if (a % 2 !== 0 && b % 2 !== 0) return 3; //odd/odd
else if (a % 2 === 0 && b % 2 === 0) return 2; //even/even
}

module.exports = gcd;
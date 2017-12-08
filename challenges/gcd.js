/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  if (b === 0) return a;
  return gcd(b, (a % b));
}

// console.log(gcd(10, 8)); // -> 2
// console.log(gcd(10, 9)); // -> 1
// console.log(gcd(90, 5)); // -> 5
// console.log(gcd(333, 111)); // -> 111

module.exports = gcd;
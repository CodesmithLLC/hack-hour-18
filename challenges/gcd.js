/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b, max=b) {
  if (typeof a !== 'number' || typeof b !== 'number' || a < 0 || b < 0) return undefined;
  return a % max === 0 && b % max === 0 ? max : gcd(a, b, max - 1);
}

console.log(gcd(27, 18));


module.exports = gcd;
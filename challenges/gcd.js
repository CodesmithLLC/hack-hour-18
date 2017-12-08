/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') return;
  let divisor  = 0;

  for (let i = 0; i <= a || i <= b; i += 1) {
    if (a % i === 0 && b % i === 0) divisor = i;
  }
  return divisor;
}

module.exports = gcd;


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
  const maxLength = Math.min(a, b);
  let greatest = 1;
  for (let i = 1; i <= maxLength; i++) {
    if (a % i === 0 && b % i === 0 && i > greatest) greatest = i;
  }
  return greatest;
}

module.exports = gcd;

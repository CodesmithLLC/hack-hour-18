/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') return undefined;
  if (a <= 0 || b <= 0) return undefined;
  if (a === 1 || b === 1) return 1;
  const aDivisors = findDivisors(a);
  const bDivisors = findDivisors(b);
  for (let i = 0; i < aDivisors.length; i++) {
    for (let j = 0; j < bDivisors.length; j++) {
      if (aDivisors[i] === bDivisors[j]) return aDivisors[i];
    }
  }
}

function findDivisors(num) {
  let n = num - 1;
  const divisors = [];
  while (n > 0) {
    if (num % n === 0) divisors.push(n);
    n--;
  }
  return divisors;
}

module.exports = gcd;
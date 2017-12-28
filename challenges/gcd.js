/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  let min = Math.min(a,b);
  const max = Math.max(a,b);
  
  if (a % 2 === 0 && b % 2 === 0) {  // even/even
    while (min > 0) {
      if (max % min === 0) return min
      min = min/2;
    }
  } 
  else return max % min === 0 ? min : 1
}

module.exports = gcd;
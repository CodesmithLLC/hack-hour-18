/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
<<<<<<< HEAD
  let ints = [a, b].sort(function(a, b) {
    return a - b;
  });
  let max = Math.max(a,b);
  for (let i = ints[1]; i > 0; i--) {
    if (ints[0] % i === 0 && ints[1] % i === 0) {
      return i;
    }
  }
=======

>>>>>>> ae02edd2f7cd7a16b9c6d1f04c3c1d145b6a5dd0
}

module.exports = gcd;
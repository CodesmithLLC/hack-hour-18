/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  let stack = [];
  const pushDivisor = (num) => {
    for (let i = 1; i < num; i += 1) {
      stack.push(num / i);
    }
  };
  pushDivisor(a);
  pushDivisor(b);
  stack = stack.filter((val, idx, arr) => arr.indexOf(val) !== idx);
  return stack.length ? Math.max(...stack) : 1;
}

module.exports = gcd;

/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
  if (typeof base !== 'number' || typeof power !== 'number') return undefined;
  if (power < 0) return new Error('Sorry no negative powers');
  if (power === 0) return 1;
  return base * pow(base, power - 1);
}

module.exports = pow;

// console.log(pow(2, -2));

// 2^3
// 2 * 2 * 2
// 3   2   1  0
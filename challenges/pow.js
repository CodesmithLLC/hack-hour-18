/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power, accum = 1) {
  if (typeof base !== 'number' || typeof power !== 'number' || power < 0) return undefined;
  if (power === 0) return 1;
  if (power === 1) return base * accum;
  return pow(base, power - 1, accum * base);
}

module.exports = pow;

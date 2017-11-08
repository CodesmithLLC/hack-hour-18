/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power, total = base) {
	if (typeof base !== 'number' || typeof power !== 'number') return NaN;
	if (power === 0) return 1;
	if (power === 1) return total;
  return pow(base, power - 1, base * total);
}

module.exports = pow;

/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
  if (typeof base !== 'number' || typeof power !== 'number') {
    throw new Error('Base and power must be numbers');
  }
  if (power === 0) return 1;
  if (power < 0) {
    return 1 / pow(base, (-1 * power));
  }
  return base * pow(base, power - 1);
}

console.log('starting tests');

console.assert(pow(2, 0) === 1);
console.assert(pow(2, 1) === 2);
console.assert(pow(2, 2) === 4);
console.assert(pow(2, 3) === 8);

console.assert(pow(3, 0) === 1);
console.assert(pow(3, 1) === 3);
console.assert(pow(3, 2) === 9);

console.assert(pow(2, -1) === 0.5);
console.assert(pow(2, -2) === 0.25);
console.assert(pow(2, -3) === 0.125);

console.assert(pow(8, -1) === 0.125);
console.assert(pow(8, -2) === 0.015625);

module.exports = pow;

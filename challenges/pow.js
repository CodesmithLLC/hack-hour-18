/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

 function pow(base, power, product = 1) {
   if (typeof base !== 'number' || typeof power !== 'number') return;
   if (power === 0) return product
   if (power > 0) return pow(base, power - 1, product * base)
   if (power < 0) {
     power *= -1
     return 1/pow(base, power - 1, product * base)
   }
 }
module.exports = pow;

/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

 function pow(base, power = 0, current = 1) {
   if (!power) return current
   current *= base
   return  pow(base, --power, current)
 }

module.exports = pow;

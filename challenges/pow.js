/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

 function pow(base, power = 0) {
   if(typeof base != 'number') return;
   power--
   if(power === -1) return 1;
   if(power === 0) return base;
   return base*(pow(base, power));
 }
module.exports = pow;

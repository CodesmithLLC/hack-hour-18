/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
  //edge cases
  if (typeof base !== 'number' || typeof base !== 'number' || !Number.isInteger(power)) return undefined;
  console.log(power);
  //base case
  if (power === 0) return 1;
  
  //negative exponents recursive call
  else if (power < 0) {
    base = 1/base
    return base / pow(base, ++power)
  }
  
  //positive exponents recursive call
  else {
    return base * pow(base, --power) 
  }
} 

module.exports = pow;

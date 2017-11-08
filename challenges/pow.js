/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
  //check edge cases: power must be a number (a base that's not a number will automatically throw a NaN error);
  //if power is less than 0, we'll have to make it positive.
  if (typeof power !== 'number') {
    throw new Error ('Power must be a number!')
  } 
  
  if (power < 0) {
    let pos = Math.abs(power);
    if (pos === 0) {
    return 1;
  }
  return base * pow(base, pos - 1);
  }
  
  if (power === 0) {
    return 1;
  }
  return base * pow(base, power - 1);
}

module.exports = pow;

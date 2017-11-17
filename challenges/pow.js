/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

 //slight change to see if email for pull request is working

function pow(base, power) {
  let counter = power;
  if (base === 0) return 0;
  if (power === 0) return 1;
  return (function recurs() {
    if (counter === 1) return base;
    counter -= 1;
    return base * recurs();
  }());
}

module.exports = pow;

//console.log(pow(-5, 9));

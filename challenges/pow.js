/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {

    if (base < 0) base = base * -1;
    if (power < 0) power = power * -1;

    if (power == 0) return 1;
    else  return pow(base, power - 1) * base;
}

console.log(pow(4,1))

module.exports = pow;

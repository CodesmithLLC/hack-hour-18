/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
    // return Math.pow(base, power);
    if(power === 0) return 1; // base raised to 0 returns 1;
    if(power < 0) return 1 / pow(base, -power); // base raised to a negative - move the base to the demoninator and switch the sign of the exponent
    if(power > 0) return base * pow(base, power - 1); // base raised to a positive 
}

console.log(pow(2, 3)); // -> 8
console.log(pow(2, 0)); // -> 1
console.log(pow(2, -3)); // 0.125

// module.exports = pow;


/*
 * SOLUTION
* function pow(base, power) {
* if (!power) return 1;
*
* return base * pow(base, power - 1);
* }
*/

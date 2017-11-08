/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
    // Edge case    
    if (typeof base !== 'number' || typeof power !== 'number') {
        return;
    }

    // Base case
    if (power === 1) {return base;}
    if (power === 0) {
        return base;
    }

    // Recursion stuff
    power--;
    return base * pow(base, power);

}
module.exports = pow;

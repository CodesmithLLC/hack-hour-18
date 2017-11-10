/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
<<<<<<< HEAD
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
=======

}

>>>>>>> 0f6a8f50172c9a792500c914e92ddb30987ac4e7
module.exports = pow;

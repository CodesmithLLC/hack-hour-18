/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
<<<<<<< HEAD
    if(typeof base !== 'number' || typeof power !== 'number' ){return undefined}
      if (power < 0) {
        power = Math.abs(power)
        base = 1/base
      }
      if (power === 0){ return 1}
      return base * pow(base, power - 1)
    }
=======

}
>>>>>>> 0f6a8f50172c9a792500c914e92ddb30987ac4e7

module.exports = pow;

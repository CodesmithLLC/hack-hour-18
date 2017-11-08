/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
	if (power === 0){ // base case goes till 0
		return 1; //terminates
	} else {
		return base * pow(base, power-1);
	}

	//=> (2,5)
	//=> 2*(2*(2*(2*{2*(2*pow(base, 0)))
	//=> 5  4  3  2  1  0
}

module.exports = pow;

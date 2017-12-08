/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
	if (b===0){
		return a;
	} else {
		return gcd(b, a%b);
	}

	//do recursively, OR
	//get divisors of each as array?
	//get shared divisors as new array
	//then get keep dividing both until don

}

module.exports = gcd;
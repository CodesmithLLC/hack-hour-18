/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
	// let min = Math.min(a,b);
	// if (a%min === 0 && b&min === 0) {
	// 	return min 
	// }
	// else {
	// 	return gcd(a,min-1)
	// }
	let max = Math.max(a,b);
	for (let i = max; i > 0; i--) {
		if (a%i == 0 && b%i === 0) {
			return i
		}
	}
	else {
		return undefined;
	}
}

module.exports = gcd;
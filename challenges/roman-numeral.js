/* Given a positive integer, return it as a string in Roman Numeral form.
 * Some basic conversions are given below:
 *
 *      1     ->    I
 *      4     ->    IV
 *      5     ->    V
 *      9     ->    IX
 *      10    ->    X
 *      40    ->    XL
 *      50    ->    L
 *      90    ->    XC
 *      100   ->    C
 *      400   ->    CD
 *      500   ->    D
 *      900   ->    CM
 *      1000  ->    M
 * 
 */

function romanNumeral(n) {
	var conversions = {
      1 : "I",
      5: "V",
      10: "X",
      50: "L",
      100: "C",
      500: "D",
      1000: "M"
	}
	var nums = [1,5,10,50,100,500,1000];
	if (conversions[n]) {return conversions[n]};
	var roman= "";
	var difference = [];
	// if (n <= 3) {
	// 	for (let i = 1 ; i < n; i++) {
	// 		roman = conversions[1];
	// 	}
	// 	return roman;
	// }
	// if (n <= 4) {
	// 	for (let i = 1 ; i < n; i++) {
	// 		roman = conversions[1];
	// 	}
	// 	return roman;
	// for (var key in conversions) {
	// 	difference.push(n - key);
	// }
	// var min = Math.min.apply(this,difference);
	// var ones; 
	
	// for (var key in conversions) {
	// 	if (key === (n-min)) {
	// 		roman = conversions[key];
	// 	}
	// 	for (let i = 1; i <= min; i++) {
	// 		ones = ones + conversions[min];
	// 	}
	// 	roman = conversions[key] + ones;
	// }
	// return roman;

	for (let i = 0 ; i < nums.length; i++) {
		difference.push(n%nums[i])
	}
	var min = Math.min.apply(this,difference);
	var index = difference.indexOf(min);
	for (var key in conversions) {
		if (key === nums[index]) {
			roman = conversions[key];
		}

	}
	return roman; //??????


}

module.exports = romanNumeral;

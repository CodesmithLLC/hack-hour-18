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
	const decimalValue = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
	const romanNumeral = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];
	let romanNumResult = "";

	for (let i=0; i<decimalValue.length; i++){
		while(decimalValue[i]<=n){ //if decimalValue < n, enter while loop and increment back up until exact 
			romanNumResult += romanNumeral[i]; //add corresponding romNum
			n -= decimalValue[i];
		}
	}

	return romanNumResult;
}

module.exports = romanNumeral;

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

/*
codesmith's solution
*/

/* Given a positive integer, return it as a string in Roman Numeral form.
 * Some basic conversions are given below:
 *
 *      1     ->    I
 *      4     ->    IV
 *      5     ->    V
 
      9     ->    IX
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


const romanNumeral = num => {
  // store integer - roman numeral pairings in array
  const denominations = [
    1000, 'M', 900, 'CM', 500, 'D', 400, 'CD', 100, 'C', 90, 'XC', 50, 'L',
    40, 'XL', 10, 'X', 9, 'IX', 5, 'V', 4, 'IV', 1, 'I'
  ];
  // initialize roman numeral string
  let romanStr = '';
  // iterate through array, starting from largest denomination for as long as number > 0
  // increment a pair at a time
  for (let i = 0; num > 0 && i < denominations.length; i += 2) {
    // while number is greaterthan/equalto current denomination
    while (num >= denominations[i]) {
      // add roman numeral string of current denomination to roman string
      romanStr += denominations[i + 1];
      // decrement number by denomination value
      num -= denominations[i];
    }
  }
  // return roman string
  return romanStr
};


// With reduce
const romanNumeralReduce = num => {
  // store integer - roman pairings in array of objects 
  // why store in array?
  const mapping = [
    { denomination: 1000, roman: 'M' },
    { denomination: 900,  roman: 'CM' },
    { denomination: 500,  roman: 'D' },
    { denomination: 400,  roman: 'CD' },
    { denomination: 100,  roman: 'C' },
    { denomination: 90,   roman: 'XC' },
    { denomination: 50,   roman: 'L' },
    { denomination: 40,   roman: 'XL' },
    { denomination: 10,   roman: 'X' },
    { denomination: 9,    roman: 'IX' },
    { denomination: 5,    roman: 'V' },
    { denomination: 4,    roman: 'IV' },
    { denomination: 1,    roman: 'I' },
  ];

  // return reduced array, initialized with empty string
  return mapping.reduce((prev, curr) => {
    // while number is >= current denom
    while (num >= curr.denomination) {
      // add roman numeral string to previous
      prev += curr.roman;
      // decrement number by current denom value
      num -= curr.denomination;
    }
    // return previous
    return prev;
  }, '');
};
module.exports = romanNumeral;

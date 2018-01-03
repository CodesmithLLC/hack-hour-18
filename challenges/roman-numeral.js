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
  if (typeof n !== 'number') return 'not a number';
  if (n === 0) return 'nulla';
  if (n < 0) return 'negative Roman numerals are not a thing';

  // getting the total number of each roman numeral needed
  let thousands = Math.floor(n / 1000);
  let fiveHundreds = Math.floor(n % 1000 / 500);
  let hundreds = Math.floor(n % 500 / 100);
  let fifties = Math.floor(n % 100 / 50);
  let tens = Math.floor(n % 50 / 10);
  let fives = Math.floor(n % 10 / 5);
  let ones = Math.floor(n % 5)

  // creating the roman numerals
  let thousandsNumeral = 'M'.repeat(thousands);
  let fiveHundredsNumeral = 'D'.repeat(fiveHundreds);
  let hundredsNumeral = 'C'.repeat(hundreds);
  let fiftiesNumeral = 'L'.repeat(fifties);
  let tensNumeral = 'X'.repeat(tens);
  let fivesNumeral = 'V'.repeat(fives);
  let onesNumeral = 'I'.repeat(ones);

  // cases for 900, 400, 90, 40, 9, 4
  if (hundreds === 4) {
    if (fiveHundreds === 1) {
      hundredsNumeral = 'CM';
      fiveHundredsNumeral = '';
    } else hundredsNumeral = 'CD'
  }

  if (tens === 4) {
    if (fifties === 1) {
      tensNumeral = 'XC';
      fiftiesNumeral = '';
    } else tensNumeral = 'XL'
  }

  if (ones === 4) {
    if (fives === 1) {
      onesNumeral = 'IX';
      fivesNumeral = '';
    } else onesNumeral = 'IV'
  }

return thousandsNumeral + fiveHundredsNumeral + hundredsNumeral + fiftiesNumeral + tensNumeral + fivesNumeral + onesNumeral;


}

module.exports = romanNumeral;

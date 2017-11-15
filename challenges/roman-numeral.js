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

const romans = {
  1000: 'M',
  900: 'CM',
  500: 'D',
  400: 'CD',
  100: 'C',
  90: 'XC',
  50: 'L',
  40: 'XL',
  10: 'X',
  9: 'IX',
  5: 'V',
  4: 'IV',
  1: 'I',
};

function romanNumeral(n) {
  if (typeof n !== 'number') return '';
  if (romans[n]) return romans[n];
  const keyArr = Object.keys(romans);
  for (let i = keyArr.length - 1; i >= 0; --i) {
    if (keyArr[i] <= n) {
      return romans[keyArr[i]] + romanNumeral(n - keyArr[i]);
    }
  }
}

// console.log(romanNumeral(10)); // X
// console.log(romanNumeral(39)); // XXXIX
// console.log(romanNumeral(932)); // CMXXXII
// console.log(romanNumeral(145)); // CXLV
// console.log(romanNumeral(11)); // XI
// console.log(romanNumeral(14)); // XIV
// console.log(romanNumeral(777)); // DCCLXXVII

module.exports = romanNumeral;

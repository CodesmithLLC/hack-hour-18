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

const convert = {
  1: 'I',
  5: 'V',
  10: 'X',
  50: 'L',
  100: 'C',
  500: 'D',
  1000: 'M',
};

const amount = Object.keys(convert);

function romanNumeral(n, pos = (amount.length - 1)) {
  debugger
  if (amount[pos] > n) return romanNumeral(n, pos - 1);

  if (n in convert) {
    return convert[n];
  }

  let total = n;
  let result = '';
  let count = 0;
  while (total > 0) {
    if (count === 3) return convert[amount[pos]] + convert[amount[pos + 1]];
    total -= amount[pos];
    result += convert[amount[pos]];
    count ++;
  }
  return result;
}

console.assert(romanNumeral(1) === 'I');
console.assert(romanNumeral(3) === 'III');
console.assert(romanNumeral(4) === 'IV');
console.assert(romanNumeral(5) === 'V');
// console.log(romanNumeral(9) === 'IX');
console.assert(romanNumeral(10) === 'X');
console.assert(romanNumeral(40) === 'XL');
console.assert(romanNumeral(50) === 'L');
// console.log(romanNumeral(90));     XC
console.assert(romanNumeral(100) === 'C');
console.assert(romanNumeral(400) === 'CD');
console.assert(romanNumeral(500) === 'D');
// console.log(romanNumeral(900));    CM
console.assert(romanNumeral(1000) === 'M');

module.exports = romanNumeral;

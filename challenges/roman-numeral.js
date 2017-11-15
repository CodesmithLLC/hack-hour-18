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
  if (n < 4) {
    return "I".repeat(n);
  } else if (n === 4) {
    return "IV";
  } else if (n === 5) {
    return "V";
  } else if (n < 9) {
    return `V${"I".repeat(n - 5)}`;
  } else if (n === 9) {
    return "IX";
  } else if (n < 40) {
    return `X${romanNumeral(n - 10)}`;
  } else if (n < 50) {
    return `XL${romanNumeral(n - 40)}`;
  } else if (n === 50) {
    return "L"
  } else if (n < 90) {
    return `L${romanNumeral(n - 50)}`;
  } else if (n === 90) {
    return "XC";
  } else if (n < 100) {
    return `XC${romanNumeral(n - 90)}`;
  } else if (n < 400) {
    return `C${romanNumeral(n - 100)}`;
  } else if (n < 500) {
    return `CD${romanNumeral(n - 400)}`;
  } else if (n === 500) {
    return "D"
  } else if (n < 900) {
    return `D${romanNumeral(n - 500)}`;
  } else if (n < 1000) {
    return `CM${romanNumeral(n - 900)}`;
  } else if (n === 1000) {
    return "M";
  }
}

module.exports = romanNumeral;

// console.log(romanNumeral(999));

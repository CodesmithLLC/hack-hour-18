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
  const table = { I:1, V:5, X:10, L:50, C:100, D:500, M:1000 };
  let sum = 0;
  let temp;
  for (let i = 0; i < n.length; i++) {
    if (table[n[i]] > temp) sum += table[n[i]] - temp - temp;
    else sum += table[n[i]];
    temp = table[n[i]];
  }
  return sum;
}

module.exports = romanNumeral;

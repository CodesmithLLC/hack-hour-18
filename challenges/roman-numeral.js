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
    if (typeof n !== 'number') return undefined;
    if (n < 1) return '';
    if (n >= 1000) return 'M'.concat(romanNumeral(n - 1000));
    if (n >= 900) return 'CM'.concat(romanNumeral(n - 900));
    if (n >= 500) return 'D'.concat(romanNumeral(n - 500));
    if (n >= 400) return 'CD'.concat(romanNumeral(n - 400));
    if (n >= 100) return 'C'.concat(romanNumeral(n - 100));
    if (n >= 90) return 'XC'.concat(romanNumeral(n - 90));
    if (n >= 50) return 'L'.concat(romanNumeral(n - 50));
    if (n >= 40) return 'XL'.concat(romanNumeral(n - 40));
    if (n >= 10) return 'X'.concat(romanNumeral(n - 10));
    if (n >= 9) return 'IX'.concat(romanNumeral(n - 9));
    if (n >= 5) return 'V'.concat(romanNumeral(n - 5));
    if (n >= 4) return 'IV'.concat(romanNumeral(n - 4));
    if (n >= 1) return 'I'.concat(romanNumeral(n - 1));

}

module.exports = romanNumeral;

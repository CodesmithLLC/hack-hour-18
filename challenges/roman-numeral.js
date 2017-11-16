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
    const romanObj = {'M':1000, 'CM': 900, 'D': 500, 'CD': 400, 'C': 100, 'XC': 90, 'L':50,'XL': 40, 'X': 10, 'IX':9, 'V': 5, 'IV': 4, 'I': 1};
    // {'I': 1, 'IV': 4, 'V': 5, 'IX':9, 'X': 10, 'XL': 40, 'L':50, 'XC': 90, 'C': 100, 'CD': 400, 'D': 500, 'CM': 900, 'M':1000}
    let returnString = '';

    while (n > 0){
        for (let key in romanObj) {
            if (n >= romanObj[key]) {
                returnString = returnString + key;
                n = n - romanObj[key];
                break;
            }
        }
    }
    return returnString;
}

console.log(romanNumeral(2011));

// module.exports = romanNumeral;

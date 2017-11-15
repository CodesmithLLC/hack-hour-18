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

function romanize(str, place) {
  let returnStr = '';

  const thousands = { '1': 'M', 'x': '' };
  const hundreds = { '1': 'C', '5': 'D', '0': 'M', 'x': ''};
  const tens = { '1': 'X', '5': 'L', '0': 'C', 'x': '' };
  const ones = { '1': 'I', '5': 'V', '0': 'X', 'x': '' };

  for (let i = 0; i < str.length; i++) {
    if (place === 4) {
      returnStr += thousands[str[i]];
    } else if (place === 3) {
      returnStr += hundreds[str[i]];
    } else if (place === 2) {
      returnStr += tens[str[i]];
    } else {
      returnStr += ones[str[i]];
    }
  }
  return returnStr;
}

function romanNumeral(n) {
  const arr = n.toString().split('');
  const places = arr.length;
  let romanStr = '';

  const format = { '1': '1', '2': '11', '3': '111', '4': '15', '5': '5', '6': '51', '7': '511', '8': '5111', '9': '10', '0': 'x' };
  

  for (let i = places - 1; i >= 0; i--) {
    romanStr += romanize(format[arr[i]], i + 1);
  }

  return romanStr;
}

module.exports = romanNumeral;


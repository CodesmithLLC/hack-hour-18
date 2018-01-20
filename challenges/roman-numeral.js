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
  const arr = String(n).split('').reverse();
  if (arr.length > 4) {
    for (let i = 4; i < arr.length; i++) {
      arr[3] = arr[3].concat(arr[i]);
    }
    arr.length = 4;
  }
  return arr.map((num, index) => {
    switch (index) {
      case 3: 
        return 'M'.repeat(num);
        break;
      case 2: 
        if (num === '4') return 'CD';
        else if (num === '5') return 'D';
        else if (num === '6') return 'DC';
        else if (num === '7') return 'DCC';
        else if (num === '8') return 'DCCC';
        else if (num === '9') return 'CM';
        else return 'C'.repeat(num);
        break;
      case 1:
        if (num === '4') return 'XL';
        else if (num === '5') return 'L';
        else if (num === '6') return 'LX';
        else if (num === '7') return 'LXX';
        else if (num === '8') return 'LXXX';
        else if (num === '9') return 'XC';
        else return 'X'.repeat(num);
        break;
      case 0:
        if (num === '4') return 'IV';
        else if (num === '5') return 'V';
        else if (num === '6') return 'VI';
        else if (num === '7') return 'VII';
        else if (num === '8') return 'VIII';
        else if (num === '9') return 'IX';
        else return 'I'.repeat(num);
        break;
    }
  }).reverse().join('');
}

module.exports = romanNumeral;

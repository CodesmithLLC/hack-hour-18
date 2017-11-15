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
  if(typeof n !== 'number' || n < 0) return;
  
  let values = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
  }
  
  let highest;
  
  for(let key in values){
    if(values[key] > n){
      highest = values[key];
      break;
    }
  }
  
  function convert(n){
    let converted = '';
    let singles = '';
    if(highest - n === 1 && n < 5){
      return "IV";
    } else if(n < 5){
      while(n !== 0){
        converted += "I";
        n--;
      }
    } else if (n === 5){
      return "V"
    } else if (highest - n === 1 && n < 10){
      return "IX"
    } else if (n < 5){
      while(n !== 0){
      }
    }
    return converted;
  }
  
  return convert(n);
};

module.exports = romanNumeral;

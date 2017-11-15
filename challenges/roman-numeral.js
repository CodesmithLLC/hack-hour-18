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
    if (n <= 0) {
        throw new Error ('n must be greater than 0');
      }
      //check for 1 - 4;
      let counter = 0;
      let romanNum = '';
      if (n < 4) {
        while (counter < n) {
          romanNum += 'I';
          counter++;
        }
      } else if (n === 4) romanNum = 'IV';
      else if (n >= 5 && n <= 9) {
        romanNum = 'V';
        counter = 5;
        while (counter < n) {
          romanNum += 'I';
          counter++;
        } 
      } else if (n >= 10 && n <= 13) {
        romanNum = 'X';
        counter = 10;
        while (counter < n) {
          romanNum += 'I';
          counter++
        }
      }
    return romanNum;
}    


module.exports = romanNumeral;

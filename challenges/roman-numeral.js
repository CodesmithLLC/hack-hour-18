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
   const numArr = n.toString().split('').reverse()
   const ones = ',I,II,III,IV,V,VI,VII,VIII,IX'.split(',')
   const tens = ',X,XX,XXX,XL,L,LX,LXX,LXXX,XC'.split(',')
   const hundreds = ',C,CC,CCC,CD,D,DC,DCC,DCCC,CM'.split(',')
   const thousands = ',M,MM,MMM'.split(',')
   const numerals = [ones, tens, hundreds, thousands]

   return numArr.reduce((acc, el, i) => {
     return numerals[i][el]+acc
   },'')
 }
 
module.exports = romanNumeral;

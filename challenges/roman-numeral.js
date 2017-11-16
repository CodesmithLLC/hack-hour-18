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
  const romanLookup = [
    {int: 1000, roman: 'M'},
    {int: 900, roman: 'CM'},
    {int: 500, roman: 'D'},
    {int: 400, roman: 'CD'},
    {int: 100, roman: 'C'},
    {int: 90, roman: 'XC'},
    {int: 50, roman: 'L'},
    {int: 40, roman: 'XL'},
    {int: 10, roman: 'X'},
    {int: 9, roman: 'IX'},
    {int: 5, roman: 'V'},
    {int: 4, roman: 'IV'},
    {int: 1, roman: 'I'},
  ]

  let romanStr = '';
  for(let i = 0; i < romanLookup.length; i++){
    if(n >= romanLookup[i].int){
      romanStr += romanLookup[i].roman;
      n = n - romanLookup[i].int;
    }
    if(n === 0) break;
    }
  return romanStr;
  }
}

module.exports = romanNumeral;

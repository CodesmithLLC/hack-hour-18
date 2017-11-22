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
// Letters of the alphabet used in ancient Rome to represent numbers: I = 1; V = 5; X = 10; L = 50; C = 100; D = 500; M = 1000. 
// The numbers one through ten are written I, II, III, IV, V, VI, VII, VIII, IX, and X

// function romanNumeral(n) {
//     // if input is not a number, return NaN
//     if(typeof n !== 'number') return NaN;

//     // convert input to array of strings
//     const digits = n.toString().split('');
//     // console.log('digits:  ', digits);
//     // key of roman numerals
//     // 0 does not have a roman numeral
//     // index 0 - 29 for 30 numbers
//     const numerals = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM",
//         "", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC",
//         "", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];

//     // output a string
//     let output = '';

//     // converting 3 digits
//     let counter = 3;

//     while(counter > 0) {
//         counter--;
//         console.log('+digits.pop():  ', digits.pop());
//         console.log('counter:  ', counter * 10);
//         console.log('numerals[+digits.pop() + (counter * 10)]:  ', numerals[digits.pop() + (counter * 10)]);
//     }
// }

function romanNumeral(n) {
    const key = [1, 'I', 4, 'IV', 5, 'V', 9, 'IX', 10, 'X', 40, 'XL', 50, 'L', 90, 'XC', 100, 'C', 400, 'CD', 500, 'D', 900, 'CM', 1000, 'M'];
    const output = '';

    
}

// console.log(romanNumeral(1)); // I
// console.log(romanNumeral(4)); // IV
// console.log(romanNumeral(5)); // V
// console.log(romanNumeral(9)); // IV

console.log(romanNumeral(10)); // X
// console.log(romanNumeral(40)); // XL

// console.log(romanNumeral(100)); // C

// console.log(romanNumeral(1000)); // M

module.exports = romanNumeral;

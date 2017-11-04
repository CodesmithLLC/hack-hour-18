/* Write a function that console logs a staircase of any given height where 1 <= N <= 100.
 The staircase must climb up from left to right. The last line should only consist of asterisks,
 without any leading/trailing spaces.
 
 For example:     
 drawStairs(6) ->          
     *
    **
   ***
  ****
 *****
******

*/

function drawStairs(n) {
<<<<<<< HEAD
    if (typeof n !== 'number') {return 'Input is not a number.'}
    if (n < 1) {return 'Input is too small.'}
    if (n > 100) {return 'Input is too large'}
    let returnString = '';
    for (let i = 1; i <= n; i++) {
        for (let j = 0; j < n-i; j++) {
            returnString += ' ';
        } for (let k = i; k > 0; k--)  {
            returnString += '*' 
        } if (i < n) {returnString += '\n'}
    } return returnString;
=======

>>>>>>> 4279cb36c11220dee95d613583620ce192dff701
}


module.exports = drawStairs;

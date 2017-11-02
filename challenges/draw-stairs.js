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
    if (typeof n !== 'number') return;
    if (n < 1) n = 1;
    if (n > 100) n = 100;

    let string = '';

    function drawLine(lineNum) {
        let line = '';
        for (let pos = 0; pos < n; pos++) {
            if (pos < (n - lineNum) - 1) line += ' ';
            else line += '*';
        }
        if (lineNum < n - 1) line += '\n';
        return line;
    }

    for (let i = 0; i < n; i++) {
        string += drawLine(i);
    }

    console.log(string);
    }


module.exports = drawStairs;

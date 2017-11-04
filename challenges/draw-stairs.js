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
    n = Math.floor(n);
    let str = '';
    let x = n - 1;
    let y = 1;
    for (let i = 0; i < n; i++, x--, y++) {
        str += ' '.repeat(x) + '*'.repeat(y) + '\n';
    }
    console.log(str);
    return str;
}

console.log(drawStairs(10));
console.log(drawStairs(0));
console.log(drawStairs(10.5));
console.log(drawStairs('10.5'));
console.log(drawStairs());

module.exports = drawStairs;

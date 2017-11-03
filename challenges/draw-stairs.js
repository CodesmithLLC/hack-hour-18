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

  let stairs = '';

  for (let i = 1; i <= n; i += 1) {
    const stars = '*'.repeat(i);
    const space = ' '.repeat(n - i);
    const level = `${space}${stars}\n`;
    stairs += level;
  }
  console.log(stairs);
}

drawStairs(6);
drawStairs(3);

module.exports = drawStairs;

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
  let counter = n;
  for (let y = 0; y < n; y++) {
    counter -= 1;
    let line = '';
    for (let x = 0; x < n; x++) {
      if (x < counter) line += ' ';
      else line += '*';
    }
    console.log(line);
  }
}


module.exports = drawStairs;

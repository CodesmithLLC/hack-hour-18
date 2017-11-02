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
  if (n < 1 || n > 100) return;
  Array(n).fill(Array(n).fill(' ')).map((el, i) => {
    console.log(el.fill('*', n-i-1, n).join(''))
  })
}

module.exports = drawStairs;

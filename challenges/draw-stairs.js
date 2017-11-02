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

function createStairs(n) {
  const stairs = [];
  for (let num = 1; num <= n; num += 1) {
    const level = ' '.repeat(n - num) + '*'.repeat(num);
    stairs.push(level);
  }
  return stairs.join('\n');
}

function drawStairs(n) {
  console.log(createStairs(n));
}

// Test case
// const stairs =
//   '     *\n' +
//   '    **\n' +
//   '   ***\n' +
//   '  ****\n' +
//   ' *****\n' +
//   '******';
//
// console.assert(createStairs(6) === stairs);


module.exports = drawStairs;

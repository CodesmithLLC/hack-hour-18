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
    let newArr = new Array(n);
    let steps = newArr.map(item => {
        item = ' ';
    });
    let str = '';
    let i = n - 1;

    for (let i=1; i <= n; i++) {
        let str = '';
        for (let k = 0; k < i; k++) {
            str = '*' + str;
        }
        for (let j = n - i; j > 0; j--) {
            str = ' ' + str;
        }
        console.log(str);
    }
}


module.exports = drawStairs;

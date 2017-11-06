/* Write a function that console logs a staircase of any given height where 1 <= N <= 100.
 The staircase must climb up from left to right. The last line should only consist of asterisks,
 without any leading/trailing spaces.
<<<<<<< HEAD

 For example:
 drawStairs(6) ->
=======
 
 For example:     
 drawStairs(6) ->          
>>>>>>> 8e9e4b2f9b61581fd7fde4cdeb41f4d885d099fb
     *
    **
   ***
  ****
 *****
******

*/

function drawStairs(n) {
<<<<<<< HEAD
for (var i = 0; i <= n; i++){
let result = []
var j = n - i;
  while( j > 0){
    result.push(' ')
    j--
}
var k = n - n+ i;
while(k >= 0){
     result.push('*')
k--
}
console.log(result.toString().replace(/,/g, ''))
}
=======

>>>>>>> 8e9e4b2f9b61581fd7fde4cdeb41f4d885d099fb
}


module.exports = drawStairs;

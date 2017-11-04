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
	for(let i = 1; i <= n; i++){
	  var str = "";
		for (let j = n-i; j >= 0; j--){
		  str = str + " ";
		}
		for (let k = n-i+1; k <= n; k++){
		  str = str + "*"
		}
		console.log(str)
	}
}
drawStairs(6);


module.exports = drawStairs;

//way better
function drawStairs(n){
	var str = "";
	var spacing = " ".repeat(n);
	for (let i = 1; i <= n; i++){
		str = str + "*";
		spacing = spacing.slice(0,n-i)
		console.log(spacing + str);
	}
}
=======

}


module.exports = drawStairs;
>>>>>>> 8e9e4b2f9b61581fd7fde4cdeb41f4d885d099fb

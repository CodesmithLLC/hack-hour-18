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
	let output = '';

	const drawSpace = function(num) {
		let output = '';
		for(let i = n; i > num; i--) {
			output += '  '
		}
		return output;
	}

	const drawStars = function(num) {
		let output = '';
		for(let i = 0; i < num; i++) {
			output += '*';
		}
		return output;
	}

	for(let i = 0; i <= n; i++) {
		output += `${drawSpace(i)} ${drawStars(i)} \n`
	}
	return output;
}

=======

}


>>>>>>> 8e9e4b2f9b61581fd7fde4cdeb41f4d885d099fb
module.exports = drawStairs;

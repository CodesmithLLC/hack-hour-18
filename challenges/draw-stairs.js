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
	let output = '';

	const drawSpace = function(num) {
		let output = '';
		for(let i = 0; i < num; i++) {
			output += '!'
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
		output += `${drawSpace(i)}` + `${drawStars(i)}` + '\n'
		// console.log('output:  ', output);
	}
	return output;
}

console.log(drawStairs(6));

module.exports = drawStairs;

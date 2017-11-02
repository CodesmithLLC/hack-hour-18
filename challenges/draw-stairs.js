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
	//input: number (our height);
	//output: white paces and asterisks forming 'stairs' going from left to right;
	//first line has 5 spaces, one asterisk at the end;
	//second line has four spaces, two asterisks at the end;
	//third line has three spaces, three asterks at the end;
	//and so forth ...
	//edge case: if n is not a number, just return;
	//need a counter initially set to our input n;
	//var spaces increments until its length is less than counter;
	//var steps increments as long as its length is less than our input minus our decrementing counter;
	//let stairs = spaces + steps;
	//prints stairs;
	if (typeof n !== 'number') {
	  return;
	}
    let counter = n;
    while (counter > 0) {
      counter--;
      let spaces = '';
      let steps = '';
        while (spaces.length < counter) {
          spaces += ' ';
        } 
        while (steps.length < (n - counter)) {
          steps += '*';
        }
      let stairs = spaces + steps;
      console.log(stairs);
    }     
}


module.exports = drawStairs;

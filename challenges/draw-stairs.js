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
	//loop through and draw the row, adding (n-i) blank spaces + i asterisks
	//loop through and draw the rest of the columns
	// 	for (let i=1;i<=n;i++){ //
	// 		asterisks += asterisk;//do i times
	// 		for (let j=1; j<=(n-i);n++){
	// 		  spaces += space;//do n-i times
	// 		}
	// 		console.log(spaces + asterisks);
	// 	}

	let row = [];
	let result = '';
	
	for(i = 1; i <= n; i++ ){ //loop to create individual row
	
	  for(var j = 0; j <= n-i-1; j++){
	    row.push(' '); //add spaces in front/on left to right justify
	  }
	  
	  for(var k = 0; k+i > 0; k--){
	    row.push('*'); //add asterisks after
	  }
	  
	  result = result + row.join(''); //create individual row
	  result = result + '\n'; //add line break to end of row to join to next row
	  row = []; //set row to blank for next row
	}
    console.log(result);
}


module.exports = drawStairs;

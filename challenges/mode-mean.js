/*
 * Given an array of numbers, determine if the mode and mean of the array are equivalent
 *
 * Caveats:
 * 	- Math.floor the mean
 * 	- If there are multiple modes, use the max of the modes
 *
 * Return true or false
 *
 */

//1,2,3,4,5,6


function modemean(array) {
	//mode get the middle index of the array.
	//if odd array length, get the middle
// 	let modeIndex = (array.length/2);

	let mean = Math.floor(array.length/2);
	let mode = array.reduce(function(prev, curr){
	  
	})

	
  // 	function medianFunc(){
  // 	  if (array.length % 2 === 0){ //if even, get the mean of the two middle values
  // 	    let mode = ((array[modeIndex])+(array[modeIndex+1]))/2;
  // 	    //check if more than one mode
  // 	  } else {
  // 	  }
  // 	}
	
	return mode === mean;
	
}
}

module.exports = modemean;

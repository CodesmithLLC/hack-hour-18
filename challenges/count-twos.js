// Write a function "countTwos" that takes a number as an argument, n. 
// The function will return the number of 2s encountered when counting from 1 to n (inclusive). 
// 2222 counts as having 4 2s.

// countTwos(1);  -> 0
// countTwos(3);  -> 1
// countTwos(13);  -> 2
// countTwos(1000);  -> 300
// countTwos(11420);  -> 4483

//is there a way to do it other than with strings?
//string way is to take the number, convert it into a string, separate out the string
//count the number of twos, then increment a counter
//then proceed to next number

//other way is to do it recursively?
function countTwos(num) {
	let count = 0;

	for (let i=0; i<=num; i++){
	  let splitStr = i.toString().split('');
	 // console.log("splitStr: ", splitStr);
	 // console.log("splitStrlength: ", splitStr.length);
		for (let j=0; j<splitStr.length; j++){
			if (splitStr[j] === "2"){
				count+=1;
				// console.log("count: ", count);
			}
		}
	}
	
	return count;
}

module.exports = countTwos;
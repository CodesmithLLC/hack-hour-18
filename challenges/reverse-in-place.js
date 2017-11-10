'use strict';
/**
 * Write a function to reverse an array in place
 *
 * "In place" means "without creating a new object in memory"
 *
 * In some languages, strings are mutable (like in Ruby). In other languages,
 * such as Python and Javascript, strings are immutable, meaning they cannot
 * be changed after they're created.
 *
 * Since strings are immutable in javascript, we will be reversing an array of characters instead.
 *
 * DO NOT USE THE BUILT IN REVERSE METHOD
 */

// function reverseInPlace(array) {
// 	let newArray = []; //creating new object in memory
// 	for (let i=array.length; i > 0; i--){
// 		newArray.push(array[i]);
// 	}
// }

function reverseInPlace(array){
	let len = array.length-1;
	let arrayMiddle = Math.floor(len/2);
	let i = -1;

	//still not sure, testing

	while(i++ < arrayMiddle){
		let swapPos = array[len-i];
		array[len-i] = array[i];
		array[i] = swapPos;
	}
}

module.exports = reverseInPlace;

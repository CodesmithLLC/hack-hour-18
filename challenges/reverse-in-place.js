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

function reverseInPlace(array) {
	for (let i = array.length - 2; i >= 0; i--) {
		array.push(array.splice(i, 1)[0]);
	}
	return array;
}

// function reverseInPlace(array) {
// 	const string = array.toString();
// 	let item = '';
// 	let newString = '';
// 	for (let i = 0; i < string.length; i++) {
// 		if (string.charAt(i) !== ',') {
// 			if (i - 1 < string.length) {
// 				item += string.charAt(i);
// 			} else {
// 				item += string.charAt(i);
// 			}
// 		} else {
// 			newString = ',' + item + newString;
// 			item = '';
// 		}
// 	}
// 	return newString;
// }

module.exports = reverseInPlace;

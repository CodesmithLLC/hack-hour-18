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
    // loop through array forward and backward
    // once i is less than j the loop has reach the middle of the array and can stop looping
    for (let i = 0, j = array.length - 1; i < j; i++, j--) {
        // destructure array to move the values from the first half of the array to the second half of the array and vice versa
        [array[i], array[j]] = [array[j], array[i]]
    }
}

module.exports = reverseInPlace;

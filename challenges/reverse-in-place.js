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
  if (array.constructor !== Array) return undefined;
  let temp;
  for (let first = 0, last = array.length - 1; first < last; first++, last--) {
    temp = array[first];
    array[first] = array[last];
    array[last] = temp;
  }
  return array;
}

// console.log(reverseInPlace([0, 1, 2, 3, 4, 5]));
// console.log(reverseInPlace('hello'));
// console.log(reverseInPlace([]));

module.exports = reverseInPlace;

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
  if (!Array.isArray(array)) throw new Error('Must be an array');
  // Reference the array parameter to abide by airbnb
  const arr = array;
  for (let i = 0; i < arr.length / 2; i += 1) {
    [arr[i], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[i]];
  }
  return arr;
}

// const arr = [1, 2, 3];
// console.log(reverseInPlace(arr));
// console.log(arr);

module.exports = reverseInPlace;

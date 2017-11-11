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

 // function reverseInPlace(array) {    // doesn't work - does splice make new array?
 //   let len = array.length;
 //   for(let i = array.length-2; i >= 0; i--) array.push(array[i]);
 //   return array.splice(len-1);
 // }

 function reverseInPlace(array){
   var left = null, right = null;
   var length = array.length;
   for(let i = 0; i < length/2; i++){
     right = lenth - 1 - i;
     [array[left], array[right]] = [array[right],array[left]]
   }
   return array;
 }
module.exports = reverseInPlace;

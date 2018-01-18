// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort


function bubbleSort(array) {
  // iterate through the set of numbers sequentially
  // repeat this process as many times as there are numbers in the set
  for (let i = 0; i < array.length; i += 1) {
    // each iteration will sort through one less number until the list is in order
    for (let i = 0; i < array.length - 1; i += 1) {
      // compare each adjacent pair in order
      // if the number on the left is greater than the number on the right, swap them
      const current = array[i];
      const next = array[i + 1];
      if (current > next) {
        array[i] = next;
        array[i + 1] = current;
      }
    }
  }
  return array;
}

console.log(bubbleSort([6, 5, 3, 1, 8, 7, 2, 4]));
console.log(bubbleSort([2, 4, 6, 8, 10, 1, 3, 5, 7, 9]));

module.exports = bubbleSort;



// NOTES FROM MARY

// given an unordered set (arr of numbers)
// iterate though the length of the array
// compare adjacent pair sets (2 elements)
// Move larger values to the right 
// move smaller values to the left 
// if nothing have moved through the course of the iteration then the array is order 
// if above return array
// while iterating grab 2 elements and make the above check
// After each iteration I need to iterate again, but this time 
// stop at the array length - 1 
// after the first iteration, the item to the utmost right is in the correct place
// after the 2nd iteration the last 2 items are in the correct place etc.
// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    let swapped = false;
    for (let j = 0; j < array.length; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        swapped = true
      }
    }
    if (swapped === false) return array;
  }
}

// const unsorted = [2,5,6,4,3,7,1,8];
// console.log(bubbleSort(unsorted));

module.exports = bubbleSort;

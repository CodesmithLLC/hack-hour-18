// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort

function bubbleSort(array) {
  let sorted = false;
  let length = array.length;
  while (!sorted) {
    sorted = true;
    for (let i = 0, j = 1; j < length; i++ , j++) {
      if (array[j] < array[i]) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
        sorted = false;
      }
    }
    if (!sorted) length--;
  }
  return array;
}

module.exports = bubbleSort;

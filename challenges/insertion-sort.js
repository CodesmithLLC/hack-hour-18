// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort


function insertionSort(array) {
  let i = 1;
  while (i < array.length) {
    let j = i;
    while (array[j - 1] > array[j] && j > 0) {
      let tmp = array[j - 1];
      array[j - 1] = array[j];
      array[j] = tmp;
      j = j - 1;
    };
    i = i + 1;
  }
  return array;
}

module.exports = insertionSort;
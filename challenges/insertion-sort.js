// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let current = array[i], c = 0, sorted = false;
    while (!sorted) {
      if (current >= array[i - c - 1] || (i - c - 1) === -1) sorted = true;
      else {
        array[i - c] = array[i - c - 1];
        array[i - c - 1] = current;
        c++;
      }
    }
  }
  return array;
}

module.exports = insertionSort;
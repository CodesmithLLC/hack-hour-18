// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
  for (let i = 0; i < array.length; i += 1) {
    for (let j = 0; j < i; j += 1) {
      if (array[j] > array[i]) {
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }
  return array;
}

module.exports = insertionSort;

console.log(insertionSort([4, 1, 7, 4, 56, 8, 12, 45]));

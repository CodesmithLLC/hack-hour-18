// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
  for (let i = 0; i < array.length; i += 1) {
    let currentValue = array[i];
    let previousIndex = i - 1;
    while (previousIndex >= 0 && array[previousIndex] > currentValue) {
      array[previousIndex + 1] = array[previousIndex];
      previousIndex--;
    }
    array[previousIndex + 1] = currentValue;
  }
  return array;
}

console.log(insertionSort([3, 6, 8, 9, 1, 4, 7, 5, 2]));

module.exports = insertionSort;
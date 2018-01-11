// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
  for (let i = 1; i < array.length; i += 1) {
    let temp = array[i];
    for (let j = i - 1; j >= 0 && temp < array[j]; j -= 1) {
      array[j + 1] = array[j];
      array[j] = temp;
    }
  }
  return array;
}
// insertionSort([6,5,3,1,8,7,2,4]);
module.exports = insertionSort;

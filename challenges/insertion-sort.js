// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let j = i;
    while (j > 0 && array[j - 1] > array[j]) {
      [array[j - 1], array[j]] = [array[j], array[j - 1]];
      j--;
    }
  }
  return array;
}

const arr = [3,6,5,2,8,7,4,1];
console.log(insertionSort(arr));

module.exports = insertionSort;
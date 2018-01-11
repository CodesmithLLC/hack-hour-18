// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort

function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let j = i;
    while (array[i] < array[j - 1]) {
      j--;
    }
    const hold = array[i];
    array.splice(i, 1);
    array.splice(j, 0, hold);
  }
  return array;
}

// const arr = [5, 4, 3, 2, 1];
// console.log(insertionSort(arr));

module.exports = insertionSort;

// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
  sortArray = array.slice();
  sortArray.forEach((elem, index, arr) => {
    let tempIndex = index;
    while (tempIndex > 0) {
      if (elem < arr[tempIndex - 1]) {
        [arr[tempIndex], arr[tempIndex - 1]] = [arr[tempIndex - 1], arr[tempIndex]];
        tempIndex--;
      } else tempIndex = 0;
    }
  });
  return sortArray;
}

module.exports = insertionSort;
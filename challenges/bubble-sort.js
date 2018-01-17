// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {
  let counter = 0;

  while (counter < array.length) {
    for (let i = 0; i < array.length - counter; i += 1) {
      if (array[i] > array[i + 1]) {
        let temp = array[i + 1];
        array[i + 1] = array[i];
        array[i] = temp;
      }
    }
    counter += 1;
  }
  return array;
}

console.log(bubbleSort([3, 2, 7, 9, 4, 1, 5, 8, 6]));

module.exports = bubbleSort;

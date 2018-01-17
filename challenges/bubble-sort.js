// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {
  let temp;
  let sorted = true;
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] > array[i + 1]) {
      sorted = false;
      temp = array[i];
      array[i] = array[i + 1];
      array[i + 1] = temp;
    }
  }
  if (sorted) return array;
  else return bubbleSort(array);
}

// console.log(bubbleSort([5, 1, 4, 2, 8]))

module.exports = bubbleSort;

// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {
  let temp;
  const arr = array.slice();
  for (let i = arr.length - 1; i >= 0; i--) {
    let iterator = arr[0];
    for (let j = 1; j <= i; j++) {
      if (iterator > arr[j]) {
        temp = arr[j];
        arr[j] = iterator;
        arr[j - 1] = temp;
      } else iterator = arr[j];
    }
  }
  return arr;
}

// const testArr = [6, 3, 1, 0, 9, -12, 13, 11, -90, Infinity, -Infinity];
// console.log(bubbleSort(testArr));

module.exports = bubbleSort;

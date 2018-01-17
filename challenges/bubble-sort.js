// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {
  if (array.length <= 1) return array;
  let swap = false, arr = array.slice();
  
  for (let j=arr.length; j > 0; j--) {
    for (let i=0; i < j; i++) {
      // console.log('j is ' + j);
      if (arr[i-1] > arr[i]) {
        let temp = arr[i];
        arr[i] = arr[i-1];
        arr[i-1] = temp;
        swap = true;
      }
    }
    if (!swap) return arr;
    swap = false;
  }
  return arr;
}
// console.log(bubbleSort([2, 3, 1, 4, 7]));
module.exports = bubbleSort;

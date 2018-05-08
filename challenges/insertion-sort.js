// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
  if(!Array.isArray(arr)) return undefined;
  let temp;
  for(let i = 1; i < array.length; i++){
    let count = 0;
    if(array[i] < array[i-1]){
      temp = array[i];
      while(temp < array[i-1-count]){
        array[i-count] = array[i-1-count];
        count++;
      }
      array[i-count] = temp;
    }
  }
  return array;
}


let arr = [6,5,3,1,8,7,2,4];
iterationSort(arr);
module.exports = insertionSort;
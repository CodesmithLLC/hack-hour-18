// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {
  if(!Array.isArray(array)) return undefined;
  let changedFlag = false;
  for(let i = 0; i < array.length - 1; i++){
    if(array[i+1]<array[i]){
      let temp = array[i+1];
      array[i+1] = array[i];
      array[i] = temp;
      changedFlag = true;
    }
  }
  console.log(array)
  if(changedFlag === true){
    bubbleSort(array)
  }
  return array;
}


module.exports = bubbleSort;

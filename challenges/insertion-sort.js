// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
    let result = [];
    while(array.length >= 1){
    result.push(array.splice(array.indexOf(Math.min(...array)), 1)[0])
    }
    return result;
    }

module.exports = insertionSort;
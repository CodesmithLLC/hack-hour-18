// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
	for (let i=0; i<array.length; i++) {
		let temp = array[i]; //target element
		let index = i - 1; //previous index number
		console.log('outside', index, 'i',i, array, array[i])
		while (index >=0 && array[index] > temp) {//if current number is less than the previous number
			console.log('index', index, 'array', array)
			array[index + 1] = array[index]; //bump up the index of the current element by 1
			index--; //Iterate to the previous index
			//and repeat until it doesn't need to(while loop condition)
			// console.log('index', index, 'array', array)
		}
		// console.log('outside', index, 'i',i, array)
		array[index + 1] = temp //set the target element to the index value at 'index' in the array
	}
	return array //return the sorted array back out.
}

let list = [2,6,8,9,16,4,36,7]
console.log(insertionSort(list))
module.exports = insertionSort;


// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {
	let tempNum
	let length = array.length
	while (length !== 1) {
		for (let i=0; i<length; i++) {
			if (array[i+1] < array[i]) {
				tempNum = array[i]
				array[i] = array[i+1]
				array[i+1] = tempNum
			}
		}
		length--
	}
	return array
}

// console.log(bubbleSort([5,8,4,2,9]))

module.exports = bubbleSort;

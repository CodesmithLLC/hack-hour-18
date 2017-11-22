/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
    if (array.length === 2) return array[0] * array[1];
    if (array.length === 1) return array[0]
    if (array.length === 0) return 0;
    let highestNumber = 0;

    function recursive(array, i, n, f) {
        if ((array[i] * array[n] * array[f]) > highestNumber) highestNumber = array[i] * array[n] * array[f];
        if (i === array.length - 3) return;
        if (f === array.length - 1) recursive (array, i + 1, i + 2, i + 3);
        else recursive(array, i, n + 1, f + 1);
    }
    
    recursive(array, 0, 1, 2);

    return highestNumber;
}

// console.log(highestProduct([1,2,3,4,5,9,29]));
module.exports = highestProduct;


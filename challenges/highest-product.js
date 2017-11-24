/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
    console.log(array);
    if (!(Array.isArray(array))) return 0;
    if (array.length < 3) return 0;
    let highestNumber = -Infinity;

    function recursive(array, i, n, f) {
        if ((array[i] * array[n] * array[f]) > highestNumber) highestNumber = array[i] * array[n] * array[f];
        if (i === array.length - 3) return;
        if (f === array.length - 1) recursive (array, i + 1, i + 2, i + 3);
        else {
            recursive(array, i, n + 1, f + 1);
            recursive(array, i, n, f + 1);
        }
            
        console.log(highestNumber);
    }
    
    recursive(array, 0, 1, 2);

    return highestNumber;
}

// console.log(highestProduct([ -1, 2, 3 ]));
console.log(highestProduct([ -5, 11, -1, -10 ]));
// console.log(highestProduct([ -5,0,5, 10]));
module.exports = highestProduct;


/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
    if(array.length < 3 || array.every((elem) => typeof(elem) !== 'number')) return undefined;
    array = array.sort();
    return array.pop() * array.pop() * array.pop();
    }

module.exports = highestProduct;

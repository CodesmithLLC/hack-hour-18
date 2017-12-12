/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
<<<<<<< HEAD
    if(array.length < 3 || array.every((elem) => typeof(elem) !== 'number')) return undefined;
    array = array.sort();
    return array.pop() * array.pop() * array.pop();
    }
=======

}

>>>>>>> c1ccae33ed66dda976cb62dfd5e9918bc6d43844

module.exports = highestProduct;

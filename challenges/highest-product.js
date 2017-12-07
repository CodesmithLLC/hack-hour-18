/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
<<<<<<< HEAD
    if(!Array.isArray(array) || array.length <= 0) return [];
    let numbers = array.sort(function(a, b) {return a - b}).slice(array.length-3,array.length);
    return numbers.reduce(function(acc,ele) {return acc + ele});
=======

>>>>>>> c1ccae33ed66dda976cb62dfd5e9918bc6d43844
}


module.exports = highestProduct;

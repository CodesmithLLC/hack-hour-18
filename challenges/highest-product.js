/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
    const prods = [];
    if (array.length === 0) return undefined;

    function helper(arr, count, prod) {
        if (arr.length === 0) {
            prods.push(prod);
        } else if (count === 3) {
            prods.push(prod);
        } else {
            let tmp = arr.shift();
            helper(arr.slice(), count + 1, prod * tmp); 
            helper(arr.slice(), count, prod);
        }
    }
    let temp = array.shift();
 
    helper(array, 1, temp);
    helper(array, 0, 1); 

    return Math.max(...prods);
}

// console.log(highestProduct([2, 3, 4, 5, 5]));
module.exports = highestProduct;

/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
    const prods = [];
    if (!Array.isArray(array)) return 0;
    if (array.length < 3) return 0;

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

// console.log(highestProduct([2, 3, 4, 5, 5, -11]));
module.exports = highestProduct;

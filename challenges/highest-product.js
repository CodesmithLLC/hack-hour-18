/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) { //probably better to do one for loop so less time complexity!
    if(array.length <= 3) {
        return array.reduce((a, b) => {
            return a * b
        })
    }
    let num1 = Math.max(...array)
    array.splice(array.indexOf(num1), 1);
    let num2 = Math.max(...array)
    array.splice(array.indexOf(num2), 1);
    let num3 = Math.max(...array)
    array.splice(array.indexOf(num3), 1);
 
    return num1 * num2 * num3;
}


// module.exports = highestProduct;


// highestProduct([50, 1, 2, 1, 1, 2, 7, 9, 5]);
/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
    array.sort((a, b) => (a-b)); 
    console.log(array);
    var l = array.length;
    if (array.length < 3) return 1;
    else {
        if ((array[l-1]*array[l-2]*array[l-3]) > (array[l-1]*array[0]*array[1])) 
            console.log(array[l-1]*array[l-2]*array[l-3]);
        else 
        console.log(array[l-1]*array[0]*array[1]);

    }
}
// Array [1, -4, 3, -6, 7, 0 ] => 168
//highgArray [-10, -3, 5, 6, -20] => 1200
// Array [-8, 5, 8, 10, 20, 30] ==> 6000
highestProduct([-10, -3, 5, 6, -20]);
module.exports = highestProduct;

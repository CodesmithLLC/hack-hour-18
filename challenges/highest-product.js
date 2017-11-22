/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

// const integers1 = [1, 2, 3, 4]; // -> 24
// const integers2 = [2, 4, 6, 8]; // -> 192
// const integers3 = [2, 4, 'A', 8]; // -> 'Invalid array values.'
// const integers4 = [5, 6]; // -> 'Invalid input length.'

function highestProduct(array) {
    const checkInt = (val) => { return val.constructor === Number; }
    if (!array.every(checkInt)) return 'Invaled array values.'
    if (array.length < 3) return 'Invalid input length.';

    const productArr = []

    for (let i = 0; i < 3; i++) {
        const largest = Math.max(...array);
        let largestIdx = array.indexOf(largest);
        productArr.push(largest);
        array.splice(largestIdx, 1);
    }

    return productArr.reduce((acc, cur) => {
        return acc * cur;
    });
}

// console.log('highestProduct(integers1):  ', highestProduct(integers1));
// console.log('highestProduct(integers2):  ', highestProduct(integers2));
// console.log('highestProduct(integers3):  ', highestProduct(integers3));
// console.log('highestProduct(integers4):  ', highestProduct(integers4));

module.exports = highestProduct;

/* You are given an array of integers and a target number. Write a function that returns true if
 * there is a subset of the array that sums up to the target and returns false otherwise. A subset
 * can be any size and the elements do not have to appear consecutively in the array.
 * 
 * subsetSum([3, 7, 4, 2], 5) - > true, 3 + 2 = 5
 * subsetSum([3, 34, 4, 12, 5, 12], 32) -> true, 3 + 12 + 5 + 12 = 32
 * subsetSum([8, 2, 4, 12], 13) -> false
 * subsetSum([8, -2, 1, -3], 6) -> true, 8 + 1 + (-3) = 6
 */

function subsetSum(array, target) {
    let firstVal = array[0];
    let accumulator = firstVal;
    console.log('firstVal:  ', firstVal);
    for (let i = 0; i < array.length; i++) {
        console.log('1) accumulator:  ', accumulator);
        accumulator = accumulator + array[i + 1];
        console.log('2) accumulator:  ', accumulator, ' + ', array[i + 1], ' = ', accumulator);
        if (accumulator > target) accumulator = firstVal;
        if (accumulator === target) return true;
        console.log('3) accumulator:  ', accumulator, '\n');
    }

    return false;
}

// console.log(subsetSum([3, 7, 4, 2], 5)); // - > true, 3 + 2 = 5
console.log(subsetSum([3, 34, 4, 12, 5, 12], 32)); // -> true, 3 + 12 + 5 + 12 = 32
// console.log(subsetSum([8, 2, 4, 12], 13)); // -> false
// console.log(subsetSum([8, -2, 1, -3], 6)); // -> true, 8 + 1 + (-3) = 6

module.exports = subsetSum;

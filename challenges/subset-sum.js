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
    let result = false;

    if (array.length === 0) return false; 
    
    function adder(arr) {
        let sum = 0;
        for (let i=0; i<arr.length; i++) {
          sum += arr[i];
        }
        return sum;
    }
    
    function helper(tArr) {
        if (adder(tArr) === target) {
            result = true;
        } else if (tArr.length === 0) {
            return result;
        } else {
            for (let i=0; i<tArr.length; i++) {
                let tempArr = tArr.slice();
                tempArr.splice(i, 1);
                helper(tempArr);
            }
        }   
    }

    helper(array);

    return result;
}

module.exports = subsetSum;

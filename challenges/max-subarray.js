/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

function maxSubarray(arr) {
    var sum = 0;
    var sum2 = 0;
    var max = 0;
    var max2 = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = arr[i] + sum;
        if (sum > max)
            max = sum;
        for (let j = i+1; j < arr.length; j++) {
            sum2 = arr[j] + sum2;
            if (sum2 > max2)
            max2 = sum2;
        }
        sum2 = 0;
    }
    if (max2 > max) return max2;
    
    return max;
}


console.log(maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]));

module.exports = maxSubarray;


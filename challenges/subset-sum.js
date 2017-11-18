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
    const total = array.reduce((prev,curr)=> prev+curr)
    // return array
    
    function test(arr, tar) {
      let result = 0
      for (let i=0; i<arr.length; i++) {
        if (result + arr[i] <= tar) {result += array[i]} 
        else
        if (result + arr[i] > tar) {continue;}
      }
      return result === tar ? true : false
    }
    
    if (total > target) {
      array = array.filter(val=> val < target).sort((a,b)=> b-a)
      if (test(array, target) !== true) {
        array.shift()
        return test(array,target)
      } else {
        return test(array, target)
      }
    }
    
    // array = array.sort((prev,curr)=> )
    // return total
    // return array
}
// console.log(subsetSum([3, 34, 4, 12, 5, 12], 32))

module.exports = subsetSum;

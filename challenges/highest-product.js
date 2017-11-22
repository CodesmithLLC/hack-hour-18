/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  if(array.length < 3) return undefined;  //edge case
  var sortedArr = array.sort((a,b) =>{
    return b - a;
  })
  return(sortedArr[0] * sortedArr[1] * sortedArr[2])
}

highestProduct([2,4,7,8,5,6,9,1,0]);



module.exports = highestProduct;

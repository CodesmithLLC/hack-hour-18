/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  if(array.length < 3 || !Array.isArray(array)) return 0;  //edge case
  var sortedArr = array.sort((a,b) =>{
    return b - a;
  })
  return sortedArr.reduce((accum,next,index) => {
    let temp = sortedArr[index]*sortedArr[index+1]*sortedArr[index+2];
    if (temp > accum) accum = temp;
    return accum;
  },sortedArr[0]*sortedArr[sortedArr.length-1]*sortedArr[sortedArr.length-2]);
}

highestProduct([2,4,7,8,5,6,9,1,0]);



module.exports = highestProduct;

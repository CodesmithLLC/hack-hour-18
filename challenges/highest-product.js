/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
    if (array.constructor !== Array || array.length < 3) {return 0}
    const pos = []
    const neg = []
    for (let i=0; i<array.length; i++) {
      if (array[i] > 0) {
        pos.push(array[i])
      } else {neg.push(array[i])}
    }
    array = pos.sort((a,b)=> b-a).concat(neg.sort((a,b)=> b-a))
    return array[0] * array[1] * array[2]
}


module.exports = highestProduct;

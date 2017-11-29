/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

 function highestProduct(array) {
   if (array.length < 3 || !Array.isArray(array)) return 0

   array.sort((a, b) => b - a)

   let endIndex = array.length-1
   let zeroes = 0
   let positives = 0
   let negatives = 0
   array.forEach(num => {
     if (!num) zeroes++
     if (num < 0) negatives++
     if (num > 0) positives++
   })

   if (!positives) {
     if (zeroes) return 0
     return array[0] * array[1] * array[2]
   }

   if (negatives > 1) {
     array[endIndex] *= -1
     array[endIndex-1] *= -1
     array.sort((a, b) => b - a)
   }
   return array[0] * array[1] * array[2]
 }


module.exports = highestProduct;

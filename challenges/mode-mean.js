/*
 * Given an array of numbers, determine if the mode and mean of the array are equivalent
 *
 * Caveats:
 * 	- Math.floor the mean
 * 	- If there are multiple modes, use the max of the modes
 *
 * Return true or false
 *
 */

 function modemean(array) {
   let mean = 0
   const cache = {}
   array.forEach((el) => {
     mean += el
     cache[el] ? cache[el]++ : cache[el] = 1
   })
   const mode = Object.entries(cache).reduce((big, el) => {
     if (el[1] > big[1] || el[1] === big[1] && el[0] > big[0]) big = el
     return big
   })
   return Math.floor(mean/array.length).toString() === mode[0]
 }


module.exports = modemean;

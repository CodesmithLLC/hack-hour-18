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
   const cache = {}

   const mean = Math.floor(array.reduce((acc, ele) => {
     cache[ele] ? cache[ele]++ : cache[ele] = 1
     return acc + ele
   }, 0)/array.length).toString()

   const mode = Object.entries(cache).reduce((acc, ele) => {
     if (acc[1] === ele[1]) return acc[0] > ele[0] ? acc : ele
     return acc[1] > ele[1] ? acc : ele
   })[0]

   return mode === mean
 }

module.exports = modemean;

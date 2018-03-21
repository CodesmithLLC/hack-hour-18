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

function modemean(array){
  if(array.length === 1) return true
  // Find the mode
  let mean = 0; let mode = 0;
  let obj = {};
  for(let i =0; i < array.length; i++){
    if(obj.hasOwnProperty(array[i])){
      obj[array[i]]++;
      if(obj[array[i]] >= mode) mode = array[i]
    }else{
      obj[array[i]] = 1
    }
  }
  // Find the mean
  mean = array.reduce(function(accum, next){
    return accum + next;
  })/array.length

  // See if mode === mean
  console.log('mean: ', mean);
  console.log('mode: ', mode);
  return mode === mean
 }

console.log(modemean([1,2,3,3,3,4,5,5]));
console.log(modemean([1,2,3,3,4,5]));
module.exports = modemean;

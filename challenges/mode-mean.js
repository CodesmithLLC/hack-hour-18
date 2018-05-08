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
/* NOT COVERING CAVEATS
function modemean(array){
  if(array.length === 1) return true
  let mean = 0; let mode = 0;
  let obj = {};
  // Find the mode
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
*/

// COVERS CAVEATS
function modemean(array) {
  // solve for mode
  let modeObj = {'currMode': -Infinity};
  let mode = 0; let modeCount = 0; let mean;
  // --------------
  // solve for mode
  // --------------
  for(let i = 0; i < array.length; i++){
    // build out mode object
    if(modeObj[array[i]]){
      modeObj[array[i]] += 1;
    } else {
      modeObj[array[i]] = 1;
    }
    if(modeObj[array[i]] === modeCount) {
      if(array[i] > modeObj['currMode']) {
        modeCount = modeObj[array[i]];
        mode = array[i];
        modeObj['currMode'] = array[i];
      }
      // see if current property is larger than mode
      // if yes - set to mode
    } else if(modeObj[array[i]] > modeCount) {
      modeCount = modeObj[array[i]];
      mode = array[i];
      modeObj['currMode'] = array[i];        
    }
  }
  // --------------
  // solve for mean
  // --------------
  mean = array.reduce( (a,b) => {
    return a + b;
  }) / array.length;
  console.log('mode, mean: ', mode, ' , ',mean);
  return mode === Math.floor(mean);
}

console.log(modemean([1,2,3,3,3,4,5,5]));
console.log(modemean([1,2,3,3,4,5,7,7,7]));
module.exports = modemean;

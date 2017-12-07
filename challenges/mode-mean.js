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
<<<<<<< HEAD
  if(!Array.isArray(array)) return;
  let mean = 0;
  let count = {};
  let mode;
  let total = 0;
  array.forEach(function(cv){
    mean += cv;
    if(!count.hasOwnProperty(cv)){
      count[cv] = 1;
    } else {
      count[cv]++;
    }
  });
  mean = Math.floor(mean / array.length);
  for(let key in count){
    if(count[key] >= total){
        total = count[key];
        mode = key;
    }
  }
  return mean === parseInt(mode);
=======

>>>>>>> 5ccd7b8bc5ed636ddf4b402100947c0bb75eec2a
}

module.exports = modemean;

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
   if(array.length === 1) return true;
   let mean = array.reduce(function(accum, next){  // solve for mean
     return accum + next
   },0)/array.length;
   let obj = {};
   for(let i = 0; i < array.length; i++){
     if(array.indexOf(array[i]) === i){
       obj[array[i]] = 1;
     }else{
       obj[array[i]] += 1;
     }
   }

   console.log(obj)
   if(Object.keys(obj).length === 1) return true;
   let mode = 0;
   let modeCount = 0;
   let i = 0;
   for(let key in obj){          // solve for mode

     if(obj[key] > modeCount){
       modeCount = obj[key]
       mode = Object.keys(obj)[i];
     }
     i++;
   }

   return Number(mode) === mean
 }

module.exports = modemean;

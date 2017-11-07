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
let mean = Math.floor(
    (array.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;})
    )/array.length);

let cache = {};

for(let i=0;i<array.length;i++){
    if (cache[i]){
        cache[i]+=1;
    }else{
        cache[i]=1;
    }
}

let cachearray = Object.values(cache);
let mode = Math.max(cachearray);

}

module.exports = modemean;

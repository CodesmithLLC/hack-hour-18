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
    let sum = array.reduce((a,b) => a + b);
    let mean = Math.floor(sum / array.length);
    let mode = 1;
    let modeCounter = 0;
    let modeObj = {};
    
    array.forEach(function(elements){
        if (modeObj[elements]){
            modeObj[elements]++;
        } else {
            modeObj[elements] = 1;
        }
    });

    for (let elements in modeObj){
        if (modeObj[elements] >= modeCounter && Number(elements) > mode){
            mode = Number(elements);
            modeCounter = modeObj[elements]
        }
    }
    if (mean === mode) return true;
    else return false;
}

module.exports = modemean;

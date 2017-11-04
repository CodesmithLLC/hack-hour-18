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
    let arr = array.slice().sort((a,b)=> a-b) 
    let mean = 0
    let mode = 0
    let count = {}

    mean = arr.reduce((acc,curr)=> acc = acc+curr) / array.length // finding mean
    arr.map((curr)=> count[curr] ? count[curr]++ : count[curr] = 1 ) // storing repeated values into an object

    //getting the highest mode value in the object
    let modeValue = Object.values(count).reduce((acc,curr)=> curr > acc ? acc = curr : acc )
    for (let keys in count) {
        if (count[keys] === modeValue) {
            mode = keys
        }
    }
    return mode === arr;
}

module.exports = modemean;

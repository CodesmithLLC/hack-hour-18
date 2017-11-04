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
    let mean;
    let mode;
    let modeArr;
    const cache = [];

    // find mean (average)
    mean = Math.floor(array.reduce((acc, cur) => {
        return acc + cur;
    }, 0) / array.length);

    // If mean is negative, return false;
    if (mean < 0) return false;

    // find mode (most frequent)
    array.forEach((item) => {
        if (cache[item] === undefined) {
            cache[item] = 1;
        } else {
            cache[item] = cache[item] + 1;
        }
    });

    modeTimes = -1;
    for (let i=0; i < cache.length; i++) {
        if (modeTimes <= cache[i]) {
            modeTimes = cache[i];
        }
    }

    mode = cache.indexOf(modeTimes);

    return mean === mode;
}

module.exports = modemean;

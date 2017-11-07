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
    
    var result = 0, 
        obj = {},
        max = 0,
        mean;
    // loop through the array to get the sum of the elements and put each element into the object with the value as 1 if it is undefined, else add 1 to its value. 
 
   array.forEach(function(item) {
        result = item + result;
        if (obj[item] === undefined) 
            obj[item] = 1;
        else obj[item]++;
    });

    for (var prop in obj) {
        if (max < obj[prop]) {
          max = obj[prop]
          mean = prop;
        }
    }

    return mean == Math.floor(result/array.length);
}

module.exports = modemean;

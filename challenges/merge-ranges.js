/**
 * Write a function mergeRanges that takes an array of meeting time ranges and returns an array of condensed ranges.
 *
 * Example:
 * var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]
 *
 * mergeRanges(times); -> [[0, 1], [3, 8], [9, 12]]
 *
 * Do not assume the ranges are in order
 */


function mergeRanges(array) {
  var sort = array.sort((a,b) => {return a[0] - b[0]})
  var result = [];
	for (let i = 0 ; i < sort.length-1; i++) {
	  var clone = sort[i].slice();
	  for (let j = i+1; j < sort.length; j++) {
	    var head = sort[i][0];
	    var tail = sort[i][1];
	    if (sort[j][0] >= head && sort[j][0] <= tail) {
	      clone.push(sort[j][0],sort[j][1])
	      sort.splice(j,1)
	    }
	  }
	  result.push(clone)
	}
	for (let k = 0 ; k < result.length; k++) {
	  if (result[k].length > 2) {
	    result[k].splice(1,result[k].length-2)
	  }
	}
	return result;
}

module.exports = mergeRanges;

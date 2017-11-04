// Write a function that returns an array containing the numbers 1 to NUM. Put "fizz" in place of numbers divisble by 3, "buzz" in place of numbers divisble by 5, and "fizzbuzz" in place of numbers divisble by both 3 and 5
// fizzbuzz(16);  -> [ 1,
//                     2,
//                     'fizz',
//                     4,
//                     'buzz',
//                     'fizz',
//                     7,
//                     8,
//                     'fizz',
//                     'buzz',
//                     11,
//                     'fizz',
//                     13,
//                     14,
//                     'fizzbuzz',
//                     16 ]

function fizzbuzz(num) {
	const result = []; 
	for (var i = 1 ; i <= num; i++){result.push(i)}
	for (var j = 0; j < result.length; j++){
		if (result[j]%3 === 0 && result[j]%5 ===0){
			result[j] = 'fizzbuzz'
		}
		else if (result[j]%3 ===0){
			result[j] = 'fizz'
		}
		else if (result[j]%5 === 0){
			result[j] = 'buzz'
		}
	}
	return result;
}


module.exports = fizzbuzz;

//another way
function fizzbuzz(num) {
	const result = [];
	for (var i = 1 ; i <= num; i++){result.push(i)}
	var test = function(i){
	  if (i%3===0 && i%5===0){
	    return i = 'fizzbuzz'
	  }
	  else if (i%5===0){
	    return i = "buzz"
	  }
	  else if (i%3 ===0){
	    return i = 'fizz'
	  }
	  return i;
	}
	return result.map(function(i){
	  return test(i); 
	})
}
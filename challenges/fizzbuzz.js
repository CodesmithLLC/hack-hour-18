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
	let output = [];

	const test = function(x) {
		const divisibleByThree = x % 3 === 0;
		const divisibleByFive = x % 5 === 0;
		if(divisibleByThree && divisibleByFive) return 'fizzbuzz';
		if(divisibleByThree) return 'fizz';
		if(divisibleByFive) return 'buzz';
	}

	for(let i = 1; i <= num ; i++) {
		output.push(test(i) || i);
	}

	return output;
}

module.exports = fizzbuzz;

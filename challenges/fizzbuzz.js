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
  const output = [];
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) output.push('fizzbuzz');
    else if (i % 3 === 0) output.push('fizz');
    else if (i % 5 === 0) output.push('buzz');
    else output.push(i);
  }
  return output;
}

module.exports = fizzbuzz;


// A very natural next step is turning every number in the original problem description into a parameter for our function, and we end up with something like this:

// function fizzBuzz(length, fizzNumber, buzzNumber){
// 	var output;
// 	for(var i=1;i<=length;i++){
// 		output = '';
// 		if(i%fizzNumber === 0){
// 			output+='Fizz';
// 		}
// 		if(i%buzzNumber === 0){
// 			output+='Buzz';
// 		}
// 		if(i%fizzNumber !== 0 && i%buzzNumber !== 0) {
// 			output+=i;
// 		}
// 		print(output);
// 	}
// }
// Now a fizzBuzz(100,3,5) invocation will yield the same output as our earlier solutions, but we don't have to sweat if the requirements change.

// But turns out other interview rooms have started using our implementation as a reference in the meantime, and we just broke the public API for this immense user base - ie. calling fizzBuzz() now would produce no output whatsoever, not even error messages. By adding some default values to the beginning of our implementation, we're creating a backwards compatible solution:

// var length = length || 100;
// var fizzNumber = fizzNumber || 3;
// var buzzNumber = buzzNumber || 5;
// If you're not from a Javascript background, it might be interesting to note here how the OR operator returns the first truthy argument it encounters, and not a boolean as it would in some other languages. For the rest of this page, I leave the setting of default parameter values (which will only get more and more complicated) as an exercise for the reader.

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
  //declare a counter var starting at 0;
  //declare an empty numbers array to store each digit;
  //create a while loop: while counter < num, counter++;
  //push counter to numbers array;
  //iterate through the array:
  	//if num % 3 === 0 AND num % 5 === 0, change num to 'fizzbuzz';
  	//if num % 3 === 0, change num to 'fizz';
  	//if num % 5 === 0, change num to 'buzz';
  //return the numbers array;
  let counter = 0;
  const numbers = [];
  while (counter < num) {
    counter++
    numbers.push(counter);
  }
  
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 3 === 0 && numbers[i] % 5 === 0) {
      numbers[i] = 'fizzbuzz';
    } else if (numbers[i] % 3 === 0) {
      numbers[i] = 'fizz';
    } else if (numbers[i] % 5 === 0) {
      numbers[i] = 'buzz';
    }
  }
  return numbers;
}

module.exports = fizzbuzz;

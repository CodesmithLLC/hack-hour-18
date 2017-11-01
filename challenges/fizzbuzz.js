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
  const resultsArray = [];
  const ifThree = (x) => (x % 3 === 0);
  const ifFive = (x) => (x % 5 === 0);
  for (let i = 1; i <= num; i++) {
    ifThree(i) && ifFive(i) ? resultsArray.push('fizzbuzz') : 
    ifThree(i) ? resultsArray.push('fizz') : 
    ifFive(i) ? resultsArray.push('buzz') : resultsArray.push(i);
  } return resultsArray;
}

module.exports = fizzbuzz;

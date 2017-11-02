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
  for (let n = 1; n <= num; n ++) {
    let ans = n;
    if (n % 15 === 0) ans = 'fizzbuzz';
    else if (n % 3 === 0) ans = 'fizz';
    else if (n % 5 === 0) ans = 'buzz';
    result.push(ans);
  }
  return result;
}

module.exports = fizzbuzz;

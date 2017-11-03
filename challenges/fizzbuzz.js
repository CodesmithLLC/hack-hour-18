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
  function divisibleBy(num, divisor) {
    return num % divisor === 0;
  }
  
  // slower but fun
  return Array.from(new Array(num), function(x, i) {
    return i + 1;
  }).map(function(x) {
    return divisibleBy(x, 3) ? (divisibleBy(x, 5) ?  'fizzbuzz' : 'fizz') : (divisibleBy(x, 5) ? 'buzz' : x);
  });

  // faster but boring :(

  // const arr = [];

  // for (let i = 1; i <= num; i++) {
  //   if (divisibleBy(i, 3)) {
  //     if (divisibleBy(i, 5)) {
  //       arr.push('fizzbuzz');
  //     }
  //     else {
  //       arr.push('fizz');
  //     }
  //   } else if (divisibleBy(i, 5)) {
  //     arr.push('buzz');
  //   } else {
  //     arr.push(i);
  //   }
  // }
  // return arr;
}

module.exports = fizzbuzz;

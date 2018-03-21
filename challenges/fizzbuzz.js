// Write a function that returns an array containing the numbers 1 to NUM. Put "fizz" in place of numbers divisble by 3, "buzz" in place of numbers divisble by 5, and "fizzbuzz" in place of numbers divisble by both 3 and 5
// fizzbuzz(16);  -> [ 1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz', 11, 'fizz', 13, 14, 'fizzbuzz', 16 ]

function fizzbuzz(num){
  const result = [];
  for (let i = 1; i <= num; i++){
    let str = '';
    (i % 3 === 0) ? str += 'fizz' : str;
    (i % 5 === 0) ? str += 'buzz' : str;
    (str.length !== 0) ? result.push(str) : result.push(i)
  }
  return result;
}

console.log(fizzbuzz(31));
module.exports = fizzbuzz;






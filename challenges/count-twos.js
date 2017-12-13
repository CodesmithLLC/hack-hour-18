// Write a function "countTwos" that takes a number as an argument, n. The function will return the number of 2s encountered when counting from 1 to n (inclusive). 2222 counts as having 4 2s.

// countTwos(1);  -> 0
// countTwos(3);  -> 1
// countTwos(13);  -> 2
// countTwos(1000);  -> 300
// countTwos(11420);  -> 4483


function countTwos(num) {
  let count = 0;
  if (num <= 1) return count;
  num.toString().split('').forEach(numString => {
    if (numString === '2') count += 1;
  })
  num -= 1;
  while (!(num).toString().includes('2')) num -= 1;
  return count + countTwos(num)
}

module.exports = countTwos;

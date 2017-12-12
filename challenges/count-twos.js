// Write a function "countTwos" that takes a number as an argument, n. The function will return the number of 2s encountered when counting from 1 to n (inclusive). 2222 counts as having 4 2s.

// countTwos(1);  -> 0
// countTwos(3);  -> 1
// countTwos(13);  -> 2
// countTwos(1000);  -> 300
// countTwos(11420);  -> 4483

// 2 12 22 32 42 52 62 72 82 92 20-29 : 10 + 10

// 0 - 100 : 10 + 10 = 20
// 200 - 299 : 100 + 120 = 120
// 0 100 200 300 400 500 600 700 800 900
// 0 - 1000 : 20 * 9 + 120

// BRUTE FORCE
function countTwos(num) {
  let count = 0;
  for (let i = 1; i <= num; i++) {
    count += (String(i).match(/2/gi) || []).length;
  }
  return count;
}

// console.log(countTwos(1000));

module.exports = countTwos;

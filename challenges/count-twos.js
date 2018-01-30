// Write a function "countTwos" that takes a number as an argument, n. The function will return the number of 2s encountered when counting from 1 to n (inclusive). 2222 counts as having 4 2s.

// countTwos(1);  -> 0
// countTwos(3);  -> 1
// countTwos(13);  -> 2
// countTwos(1000);  -> 300
// countTwos(11420);  -> 4483


function countTwos(num) {
  count = 0;
  for (let i = 1; i <= num; i++) {
    let twos = i.toString().match(/2/g);
    if (twos) count += twos.length;
  }
  return count;
}

console.log(countTwos(1)); // -> 0
console.log(countTwos(3)); // -> 1
console.log(countTwos(13)); // -> 2
console.log(countTwos(1000)); // -> 300
console.log(countTwos(11420)); // -> 4483
console.log(countTwos()); // -> 0
console.log(countTwos('kittens')); // -> 0
console.log(countTwos(301613312)) // -> 

module.exports = countTwos;
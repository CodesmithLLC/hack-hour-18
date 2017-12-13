// Write a function "countTwos" that takes a number as an argument, n. The function will return the number of 2s encountered when counting from 1 to n (inclusive). 2222 counts as having 4 2s.

// countTwos(1);  -> 0
// countTwos(3);  -> 1
// countTwos(13);  -> 2
// countTwos(1000);  -> 300
// countTwos(11420);  -> 4483


function countTwos(num) {
  let numArr = num.toString().split('').reverse();
  let answer = 0;
  if (numArr[0] >= 2) answer++
  numArr.forEach((x, i) => {
    answer += x * i * Math.pow(10, i - 1);
    if (x === 2) answer += (Number(numArr.slice(0, i).reverse().join('')) + 1);
    console.log(Number(numArr.slice(0, i).reverse().join('')) + 1)
    if (x > 2) answer += Math.pow(10, i);
  });
  return answer;
}

console.log(countTwos(11420));

// 10   100     1000    10000   100000
// 1    20      300     4000    50000    
 

module.exports = countTwos;
// Write a function "countTwos" that takes a number as an argument, n. The function will return the number of 2s encountered when counting from 1 to n (inclusive). 2222 counts as having 4 2s.

// countTwos(1);  -> 0
// countTwos(3);  -> 1
// countTwos(13);  -> 2
// countTwos(1000);  -> 300
// countTwos(11420);  -> 4483


function countTwos(num) {
  if(typeof num !== "number") return;
  let count = 0;
  let i = 0;
  while(i <= num){
    let numStr = i.toString().split("");
    numStr.forEach((ele) => {
      if(ele === "2") count++
    })
    i++;
  }
  return count;
}

module.exports = countTwos;
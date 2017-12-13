// Write a function "countTwos" that takes a number as an argument, n. The function will return the number of 2s encountered when counting from 1 to n (inclusive). 2222 counts as having 4 2s.

// countTwos(1);  -> 0
// countTwos(3);  -> 1
// countTwos(13);  -> 2
// countTwos(1000);  -> 300
// countTwos(11420);  -> 4483


function countTwos(num) { // not working
  let count = 0;

  if (num < 2) return count;

  for (let i = 0; i < num; i += 2) {
    let str = i.toString()
    for (let j = 0; i < str.length; j++) {
      if (str[j] === "2") count += 1;
    }
  }

  return count;
}

// module.exports = countTwos;

console.log(countTwos(2));

// function countTwos(num) { // not working
//   debugger;
//   let len = num.toString().length;
//   let count = 0;
//   num.toString().split('').forEach(x => {
//     if ( parseInt(x) >= 2 && len > 1) {
//       count = count + Math.pow(10, len - 2) + parseInt(x)
//     } else if ( len > 1) {
//       count = count + Math.pow(10, len - 2) + parseInt(x) - 1
//     } else if ( parseInt(x) >= 2 ) {
//       count += 1;
//     }
//     len -= 1
//   })
//   return count;
// }
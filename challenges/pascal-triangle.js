/*
  Construct Pascal's Triangle up to n levels deep, starting from n = 1. Each row
  is represented as an array of numbers.

  https://en.wikipedia.org/wiki/Pascal%27s_triangle

  e.g.
  pascalTriangle(1):
  [[1]]

  pascalTriangle(2):
  [
    [1],
    [1, 1]
  ]

  pascalTriangle(3) :
  [
    [1],
    [1,1],
    [1,2,1]
  ]

  pascalTriangle(6) :
  [
    [1],
    [1,1],
    [1,2,1],
    [1,3,3,1],
    [1,4,6,4,1],
    [1,5,10,10,5,1]
  ]
*/

function pascalTriangle(numRows) {

  function helper(n, maxNum, res = []) {
    result = res.slice();
    const row = [];
    row[0] = 1;

    for (let i=1; i < n-1; i++) {
      row[i] = result[n-2][i-1] + result[n-2][i];
    }
    row[n-1] = 1;
    result.push(row);

    if (n === maxNum) return result;
    else return helper(n+1, maxNum, result);
  }
  return helper(1, numRows);
}
// console.log(pascalTriangle(6));
module.exports = pascalTriangle;

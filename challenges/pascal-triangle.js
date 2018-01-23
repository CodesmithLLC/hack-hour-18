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
  const triangle = [];
  if (numRows === 0) return triangle;
  triangle[0] = [1];
  if (numRows === 1) return triangle;
  triangle[1] = [1, 1];
  if (numRows === 0) return triangle;
  for (let i = 2; i < numRows; i++) {
    triangle[i] = [1];
    for (let j = 1; j <= i - 1; j++) {
      triangle[i][j] = triangle[i - 1][j] + triangle[i - 1][j - 1];
      triangle[i].push(1);
    }
  }
  return triangle;
}

// console.log(pascalTriangle(0));
module.exports = pascalTriangle;

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
  
  let arr = [];
  if (numRows === 1) {
      arr[0] = [];
      arr[0][0] = 1;
  } else if (numRows === 2) {
      arr[0] = [];
      arr[0][0] = 1;
      arr[1] = [];
      arr[1][0] = 1;
      arr[1][1] = 1;
  } else if (numRows > 2) {
      arr[0] = [];
      arr[1] = [];
      arr[0][0] = 1;
      arr[1][0] = 1;
      arr[1][1] = 1;
      for (i = 2; i < numRows; i++) {
          arr[i] = [];
          arr[i][0] = 1;
          for (j = 1; j < i; j++) {
              arr[i][j] = arr[i - 1][j - 1] + arr[i - 1][j];
          }
          arr[i][j] = 1;
      }
  }
  arr.forEach(ele => console.log(ele));
  return arr;
}

module.exports = pascalTriangle;

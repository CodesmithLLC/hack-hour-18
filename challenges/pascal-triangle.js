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
  if (numRows === 0) return [];
  const triangle = [[1]];
  if (numRows === 1) return triangle;
  for (let i = 2; i <= numRows; i++) {
    triangle.push(arrGen(triangle[triangle.length - 1]));
  }
  function arrGen(arr) {
    const newArr = [1];
    for (let i = 0; i < arr.length - 1; i++) {
      newArr.push(arr[i] + arr[i + 1]);
    }
    newArr.push(1);
    return newArr;
  }
  return triangle;
}

module.exports = pascalTriangle;

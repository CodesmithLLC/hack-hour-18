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
  let counter = 1;
  const array = [];

  while (counter <= numRows) {
    if (array.length === 0) {
      array.push([1]);
    } else {
      const lastInArray = array[array.length - 1];
      let row = [];
      row.push(1);
      for (let i = 0; i < array.length - 1; i += 1) {
        row.push(lastInArray[i] + lastInArray[i + 1])
      }
      row.push(1);
      array.push(row);
    }
    counter += 1;
  }
  return array;
}

module.exports = pascalTriangle;

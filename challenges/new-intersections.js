/**
 *
 * You are given an array x and an array y that represent the coordinates of several OLD points
 * 
 *   - x is the array of x-coordinates and y is the array of y-coordinates 
 *   - (x[i], y[i]) correspond to coordinates of the i'th OLD point
 *
 * Write an algorithm to find the number of NEW points that can be placed 
 * such that there are OLD points above, below, to the left, and to the right of the NEW point
 *
 *   - 'OLD directly above NEW' means the NEW x-coordinate = OLD x-coordinate & NEW y-coordinate < OLD y-coordinate
 *
 * Constraints and Notes:
 *
 * 	 - x and y will contain the same number of elements
 *   - if a new point is bounded by old points and lands on an old point, then count it
 * 	 
 */

function newIntersections(x, y) {
  let counter = 0;
  x.forEach((xVal, xIndex, xArr) => {
    console.log('xVal is ', xVal);
    xArr.slice(xIndex + 1).forEach((xVal2, xIndex2, xArr2) => {
      console.log('xVal2 is ',xVal2)
      console.log('ys are:', y[xIndex2 + xIndex + 1], y[xIndex]);
      if (xVal2 === xVal && y[xIndex2 + xIndex] !== y[xIndex]) {
        console.log('x values are equal');
        y.forEach((yVal, yIndex, yArr) => {
          if (yVal < Math.max(y[xIndex], y[xIndex2 + xIndex + 1]) && yVal > Math.min(y[xIndex], y[xIndex2 + xIndex + 1])) {
            yArr.slice(yIndex + 1).forEach((yVal2, yIndex2, yArr2) => {
              if (yVal2 === yVal && Math.min(x[yIndex], x[yIndex2 + yIndex + 1]) < xVal && Math.max(x[yIndex], x[yIndex2 + yIndex + 1]) > xVal) counter ++;
            }) 
          }
        })
      }
    })
  })
  return counter;
}

const x = [5, 5, 3, 7];
const y = [3, 7, 5, 5];

console.log(newIntersections(x, y));

module.exports = newIntersections;

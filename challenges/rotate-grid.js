/* You are given a NxN grid of elements represented by a 2D array. The ith nested array represents 
 * the ith row in the grid.
 * 
 * Write a function to rotate the grid 90 degrees clockwise. 
 *
 * For example:     sampleGrid before:  [   [1, 2, 3],
 *                                          [4, 5, 6],
 *                                          [7, 8, 9]  ]
 *                  
 *                  rotateGrid(sampleGrid, 3);
 *                  
 *                  sampleGrid after:   [   [7, 4, 1],
 *                                          [8, 5, 2],
 *                                          [9, 6, 3]  ]
 * 
 * 00-02, 01-12, 02-22,
 * 10-01, 11-11, 12-21,
 * 20-00, 21-10, 22-20,
 * 
 * 00-01, 01-11,
 * 10-00, 11-01,
 *
 * BONUS: Do this in place
 */

function rotateGrid(grid, n) {

  const newGrid = [[],[],[]];

  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid.length; c++ ) {
      newGrid[c].push(grid[n - 1][r]);
    }
    n = n -1;
  }

  return newGrid;

}

console.log(rotateGrid([
  [1,2,3],
  [4,5,6],
  [7,8,9]
]));

module.exports = rotateGrid;

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
 * BONUS: Do this in place
<<<<<<< HEAD
 
 */

function rotateGrid(grid, n) {
  const results = [];
  for (let i = 0; i < n; i++) {
    let temp = [];
    for (let j = 0; j < n; j++) {
      temp.push(null);
    };
    results.push(temp);
  };
  grid.forEach((array, index) => {
    array.forEach((elem, ind) => {
      if (index < array.length / 2 - 0.5) results[ind][index + array.length - 1] = elem;
      if (index >= array.length / 2 - 0.5) {
        if (index === array.length / 2 - 0.5) {
          results[ind][index] = elem;
        }
        else results[ind][index - array.length + 1] = elem;
      } 
    });
  });
  return results;
};

=======
 */

function rotateGrid(grid, n) {

}
>>>>>>> c1e4bd20e5cba5f467120c19c08ec8af3a674752

module.exports = rotateGrid;

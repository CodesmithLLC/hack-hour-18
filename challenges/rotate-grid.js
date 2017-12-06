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
 */


// one approach could be to flatten array, and then look for pattern between numbers
// but I think that's the harder solution, and the faster solution is to use map
// can break it down where we can reverse each row, and transpose (so make each row into a column)
// BUT ugh not being done in place!
function rotateGrid(grid, n) {
    //get first row to iterate over columns
    const transposed = grid[0].map((col, c) => {
        return grid.map((row, r) => {
            return grid[r][c]
        })
    });
    const reversed = transposed.map((row, r) => {
        return row.reverse();
    })
    return reversed;
}

module.exports = rotateGrid;


// sampleGrid = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];
// console.log(rotateGrid(sampleGrid, 3));
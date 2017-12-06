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


//top row becomes right column
//middle row becomes middle column
//bottom row becomes left column

function rotateGrid(grid, n) {
	let newGrid = [];
	let rowLength = Math.sqrt(n*n);
	newGrid.length = (n*n);

	for(let i=0; i<(n*n); i++){
		//convert to x/y
		let x = i % rowLength;
		let y = Math.floor(i/rowLength);

		//find new x/y
		let newX = rowLength - y - 1;
		let newY = x;

		//convert back to index
		let newPosition = newY * rowLength + newX;
		newGrid[newPosition] = grid[i];
	}

	return newGrid;
}

module.exports = rotateGrid;

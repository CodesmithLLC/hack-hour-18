/* You are given a NxN grid of elements represented by a 2D array. 
/*The ith nested array represents 
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

function rotateGrid(grid, n) {
    let innerArrayIndex = n-1;
    let relevantRow = grid[innerArrayIndex];
    let referenceArray = [];

    for(let i=0; i<grid.length; i++){
        for(let j=0; j<grid[i].length; j++){
            referenceArray.push(grid[i][j]);
        }
    }

    for(let x=0; x<grid.length; x++){
        
        if(x===0){
            for(let c=0;c<grid[i].length;c++){
               grid[i].push(grid[i][c]);
            }
          grid[i].splice(0,0,relevantRow[0]);

        }else if(i > 0 && i < innerArrayIndex){
            for(let q=0;q<grid[i].length-1;q++){
                grid[i][q]
            }
          grid[i].splice(0,0,relevantRow[]);
          
        }else if(i===innerArrayIndex){
          for(let y=0; y=relevantRow.length;y++){
          grid[i].splice(0,0,relevantRow[y]);
          }
          
        }

        grid[i].splice(0,0,relevantRow[y]);
    }

}

module.exports = rotateGrid;

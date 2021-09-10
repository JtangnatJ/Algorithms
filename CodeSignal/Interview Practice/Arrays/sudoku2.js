// Sudoku is a number-placement puzzle. The objective is to fill a 9 × 9 grid with numbers in such a way that each column, each row,
    // and each of the nine 3 × 3 sub-grids that compose the grid all contain all of the numbers from 1 to 9 one time.

// Implement an algorithm that will check whether the given grid of numbers represents a valid Sudoku puzzle according to the layout rules described above.
    // Note that the puzzle represented by grid does not have to be solvable.

function sudoku2(grid) {
    //row check
        // check all rows for repeat numbers
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] !== '.') {
                if (grid[i].indexOf(grid[i][j]) !== grid[i].lastIndexOf(grid[i][j])) {
                    console.log('rowCheck: ', grid[i][j]);
                    return false;
                }
            }
        }
    }
    
    //col check
        // insert one column at a time into the array colCheck
        // check all columns for repeat numbers
    let colCheck = [];
    
    for (let x = 0; x < grid[0].length; x++) {
        for (let y = 0; y < grid.length; y++) {
            colCheck.push(grid[y][x]);
        }
        
        for (let c = 0; c < colCheck.length; c++) {
            if (colCheck[c] !== '.') {
                if (colCheck.indexOf(colCheck[c]) !== colCheck.lastIndexOf(colCheck[c])) {
                    console.log('colCheck: ', colCheck);
                    return false;
                }
            }
        }
        
        colCheck = [];
    }
    
    //3x3 check
        // insert all 3x3 squares into the gradCheck array one at a time
        // check each grid for repeat numbers
    let gridCheck = [];
    
    for (let k = 0; k < grid.length; k += 3) {
        for (let l = 0; l < grid[k].length; l += 3) {
            for (let q = 0; q < 3; q++) {
                for (let w = 0; w < 3; w++) {
                    gridCheck.push(grid[k+q][l+w]);
                }
            }
            
            for (let g = 0; g < gridCheck.length; g++) {
                if (gridCheck[g] !== '.') {
                    if (gridCheck.indexOf(gridCheck[g]) !== gridCheck.lastIndexOf(gridCheck[g])) {
                        console.log('gridCheck: ', gridCheck);
                        return false;
                    }
                } 
            }
            
            gridCheck = [];
        }
    }
    
    // return true if all checks pass
    return true;
}

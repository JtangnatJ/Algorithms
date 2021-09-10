function sudoku2(grid) {
    //row check
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
    
    return true;
}

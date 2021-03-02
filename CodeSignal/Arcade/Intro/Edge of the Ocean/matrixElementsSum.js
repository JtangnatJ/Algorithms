// After becoming famous, the CodeBots decided to move into a new building together.
    // Each of the rooms has a different cost, and some of them are free, but there's a rumour that all the free rooms are haunted!
    // Since the CodeBots are quite superstitious, they refuse to stay in any of the free rooms, or any of the rooms below any of the free rooms.
// Given matrix, a rectangular matrix of integers,
    // where each value represents the cost of the room,
    // your task is to return the total sum of all rooms that are suitable for the CodeBots
    // (ie: add up all the values that don't appear below a 0).

// Example: 
    // For
    // matrix = [[0, 1, 1, 2], 
    //           [0, 5, 0, 0], 
    //           [2, 0, 3, 3]]
    //         the output should be
    //         matrixElementsSum(matrix) = 9.

function matrixElementsSum(matrix) {
    // tracker array to check whether there has been a room in the column
        // aka whether there has been a 0 room above
    let tracker = Array(matrix[0].length).fill(1);
    // the total sum of all rooms which we will be returning at the end
    let total = 0;
    // iterate through the arrays, aka horizontally
    for (let i = 0; i < matrix.length; i++) {
        // second iteration through each individual array, aka vertically
        // due to the formation of a matrix, iterating from 0 for both loops will start us in the "top left" of the matrix and end with the "bottom right"
        for (let j = 0; j < matrix[i].length; j++) {
            // this indicates a haunted room
            if (matrix[i][j] === 0) {
                // change the index in tracker to equal 0, all rooms at this vertical index from now on will be below a haunted room
                tracker[j] = 0;
                // check, if all rooms are 0 rooms, or haunted rooms, then we have our total, there will be no more rooms
                if (tracker.reduce((a, b) => a + b) === 0) {
                    return total;
                }
            }
            // if the current tracker index is not 0, then the above rooms have not been haunted yet
                // the current room will be a viable room for CodeBots
                // adding that room value to our total
            if (tracker[j] !== 0) {
                total += matrix[i][j];
            }
        }
    }
    
    return total;
}

// myJinXin2015's Improvement
function matrixElementsSum(matrix) {
    // it will still be matrix[i][j]
    // putting j on the first, outside loop will mean we are iterating vertically before horizontally
    // initializing r as the total
    for (var r = 0, j = 0; j < matrix[0].length;j ++) {
        // once again, j on the outside and i on the inside means iterating vertically before horizontally
        // we will still be going from left to right, top to bottom due to starting at indices 0 and incrementing
        for (var i=0; i < matrix.length; i++) {
            // the moment we see a 0 room we can break
                // any future rooms for this inside loop will be below a haunted room and are no longer viable
            if (matrix[i][j] === 0) {
                break;
            // otherwise keep adding viable rooms to the total 'r'
            } else {
                r += matrix[i][j];
            }
        }
    }
    return r;
  }
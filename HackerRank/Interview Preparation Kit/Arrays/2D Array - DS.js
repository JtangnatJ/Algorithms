// Given a 6x6 2D array: 
    // find the largest hourglass sum in the array

function hourglassSum(arr) {
    // as mentioned in coomments, due to problem restraints, the smallest possible sum at any given time is -63
        // we could have initialized our tracker variable to that, but it's personal preference 
            // -Infinity adapts to more situations so I have gotten used to using it in such scenarios
    let largestSum = -Infinity;
    // two for loops to iterate over every cell in the matrix
        // arr[i][j] is one cell within the matrix
    for (let i = 0; i < arr.length - 2; i++) {
        for (let j = 0; j < arr[i].length - 2; j++) {
            // fidn the sum of our current hourglass
            let tempSum = 0;
            // you know the dimensions of each hourglass so you can determine their numbers from your current cell
            let top = arr[i][j] + arr[i][j + 1] + arr[i][j + 2];
            let mid = arr[i + 1][j + 1];
            let bot = arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2];
            
            tempSum = top + mid + bot;
            // looking back now, rather than an if check I would prefer Math.max()
                // largestSum = Math.max(largestSum, tempSum)
            if (tempSum > largestSum) {
                largestSum = tempSum;
            }
        }
    }

    return largestSum;
}
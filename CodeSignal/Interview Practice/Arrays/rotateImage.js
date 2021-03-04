// Note: Try to solve this task in-place (with O(1) additional memory), since this is what you'll be asked to do during an interview.

// You are given an n x n 2D matrix that represents an image. Rotate the image by 90 degrees (clockwise).

// you really only have to isolate one quarter of the matrix. The default is probably the top left.
    // after determining the quarter, you rotate one element and continue swapping elements from all four quarters rotate
    // by limiting the iteration correctly, you will rotate all elements from all quarters
function rotateImage(a) {
    const n = a.length;
    const x = Math.floor(n / 2);
    const y = n - 1;
    for (let i = 0; i < x; i++) {
        for (let j = i; j < y - i; j++) {
            k = a[i][j];
            a[i][j] = a[y - j][i];
            a[y - j][i] = a[y - i][y - j];
            a[y - i][y - j] = a[j][y - i]
            a[j][y - i] = k
        }
    }
    
    return a; 
}

// daniel_m147's ES6 one-liner
rotateImage = a => a.map((row, rowIndex) => a.map(val => val[rowIndex]).reverse())
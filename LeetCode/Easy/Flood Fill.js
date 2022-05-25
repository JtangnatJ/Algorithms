// An image is represented by an m x n integer grid image where image[i][j] represents the pixel value of the image.

// You are also given three integers sr, sc, and newColor. You should perform a flood fill on the image starting from the pixel image[sr][sc].

// To perform a flood fill, consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the same color as the starting pixel,
    // plus any pixels connected 4-directionally to those pixels (also with the same color), and so on. Replace the color of all of the aforementioned pixels with newColor.

// Return the modified image after performing the flood fill.

var floodFill = function(image, sr, sc, newColor) {
    let color = image[sr][sc];
    
    if (color === newColor) {
        return image;
    }
    
    const fill = (r, c) => {
        if (image[r][c] === color) {
            image[r][c] = newColor;
            if (r > 0) fill(r - 1, c);
            if (r < image.length - 1) fill(r + 1, c);
            if (c > 0) fill(r, c - 1);
            if (c < image[sr].length - 1) fill(r, c + 1);
        }
    }
    
    fill(sr, sc);
    
    return image;
};
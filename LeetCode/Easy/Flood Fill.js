// An image is represented by an m x n integer grid image where image[i][j] represents the pixel value of the image.

// You are also given three integers sr, sc, and newColor. You should perform a flood fill on the image starting from the pixel image[sr][sc].

// To perform a flood fill, consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the same color as the starting pixel,
    // plus any pixels connected 4-directionally to those pixels (also with the same color), and so on. Replace the color of all of the aforementioned pixels with newColor.

// Return the modified image after performing the flood fill.

var floodFill = function(image, sr, sc, newColor) {
    // save the original color to a variable for comparison
    let color = image[sr][sc];
    // if the original color is the same as the newColor, then there is nothing to fill
    if (color === newColor) {
        return image;
    }
    // build out a helper function that we will call recursively 
    const fill = (r, c) => {
        // we should only continue if the square we are on matches the original color, otherwise no fill needed
        if (image[r][c] === color) {
            // fill in the current square with the new color
            image[r][c] = newColor;
            // these are if checks to determine whether the next square will be within bounds and whether or not we should continue recursing 
            if (r > 0) fill(r - 1, c);
            if (r < image.length - 1) fill(r + 1, c);
            if (c > 0) fill(r, c - 1);
            if (c < image[sr].length - 1) fill(r, c + 1);
        }
    }
    // don't forget to invoke the helper!
    fill(sr, sc);
    // return the modified image 
    return image;
};
// Below we will define an n-interesting polygon. Your task is to find the area of a polygon for a given n.
    // A 1-interesting polygon is just a square with a side of length 1. 
    // An n-interesting polygon is obtained by taking the n - 1-interesting polygon and appending 1-interesting polygons to its rim, side by side.
    // Pictures are on the CodeSignal website.

    //Example:
        // For n = 2, the output should be
            // shapeArea(n) = 5;
        // For n = 3, the output should be
            // shapeArea(n) = 13.

// there is a noticeable mathematical pattern
    // the sum of n-squared and (n-1)-squared 
function shapeArea(n) {
    return Math.pow(n, 2) + Math.pow(n-1, 2); 
}

// ES6
const shapeArea = (n) => Math.pow(n, 2) + Math.pow(n-1, 2);
const shapeArea = (n) => n*n + (n-1)*(n-1);

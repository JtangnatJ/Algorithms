// Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

function adjacentElementsProduct(inputArray) {
    let largestProduct;
    
    // iterate up to inputArray.length - 1 because there is no additional element next to the last one
    for (let i = 0; i < inputArray.length - 1; i++) {
        // if we currently do not have a largest product, then initialize it to the first product we get
        if (largestProduct === undefined) {
            largestProduct = inputArray[i] * inputArray[i + 1];
        // use Math.max to compare the largestProduct we have saved to the current tested pair and reassign the larger value
        } else {
            largestProduct = Math.max(largestProduct, inputArray[i] * inputArray[i + 1]);
        }
    }
    
    return largestProduct;
}

// ternary operator
function adjacentElementsProduct(inputArray) {
    let largestProduct;
    
    for (let i = 0; i < inputArray.length - 1; i++) {
        largestProduct === undefined ? largestProduct = inputArray[i] * inputArray[i + 1] : largestProduct = Math.max(largestProduct, inputArray[i] * inputArray[i + 1]);
        // really long line, hard to read and comprehend
    }
    
    return largestProduct;
}

// alternatively can initialize largestProduct to the smallest number imaginable and skip the if check altogether
function adjacentElementsProduct(inputArray) {
    let largestProduct = -Infinity;
    
    for (let i = 0; i < inputArray.length - 1; i++) {
        largestProduct = Math.max(largestProduct, inputArray[i] * inputArray[i + 1]);
    }
    
    return largestProduct;
}

// ES6 and improvement
    // checked the solutions tab to find this
    // spread operator to separate the elements of the final array, allows for usage of Math.max()
    // slice from 1 because the array of products will always be one less in length than the original array
    // map over the copied array and multiply each element "x" with the previous element in the original array
        // this is done by including index in the callback for the map function
        // since we sliced from index 1, the indices of the sliced array will one ahead compared to the original
            // i.e original = [1, 2, 3] || sliced = [2, 3]
            // sliced[0] = 2 and original[0] = 1
            // indices from the sliced array will give us the previous element in the original array
    // Math.max() will give us the highest value amongst all elements after they have been converted to the products
const adjacentElementsProduct = (arr) => Math.max(...arr.slice(1).map((x,i) => x * arr[i]))
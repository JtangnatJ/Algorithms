// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

var sortedSquares = function(nums) {
    // this would be the most obvious method, iterate through the array and map the elements with a square function
    const squaredNums = nums.map(num => num * num);
    // then sort the array with it's new elements and return
    return squaredNums.sort((a, b) => a - b);
};

// ES6 one liner
const sortedSquares = (nums) => nums.map(num => num * num).sort((a, b) => a - b);

// a more elegant method, only O(n) time complexity
var sortedSquares = function(nums) {
    // we create a new array to store the new elements
    const squaredNums = [];
    // we have two variables, i and j tracking the lowest and highest index of our nums array respectively
    let i = 0, j = nums.length - 1;
    
    while (i <= j) {
        // check whether the left number is greater than or equal to the right number
            // this is to account for negatives becoming positive after quaring them
        if (Math.abs(nums[i]) >= Math.abs(nums[j])) {
            // if they are then square the number and place it at the appropriate index.
                // by using j - i and the if check, we are effectively finding the highest number each time and placing it as far down the array as possible
            squaredNums[j - i] = nums[i] * nums[i];
            // increment the left tracker
            i += 1;
        } else {
            // otherwise, the right number is larger, square it and place it accordingly,
            squaredNums[j - i] = nums[j] * nums[j];
            // decrememnt the right tracker
            j -= 1;
        }
    }
    // return the final array, squared and sorted
    return squaredNums;
}
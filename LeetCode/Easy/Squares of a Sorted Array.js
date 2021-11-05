// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

var sortedSquares = function(nums) {
    // this would be the most obvious method, iterate through the array and map the elements with a square function
    const squaredNums = nums.map(num => num * num);
    // then sort the array with it's new elements and return
    return squaredNums.sort((a, b) => a - b);
};

// ES6 one liner
const sortedSquares = (nums) => nums.map(num => num * num).sort((a, b) => a - b);

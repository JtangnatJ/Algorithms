// Given an array, rotate the array to the right by k steps, where k is non-negative.

var rotate = function(nums, k) {
    // to account for scenarios where k is larger than the length of our array, we use modulo to find the appropriate amount of rotation
    k = k % nums.length;
    // we cut off the end that we want to rotate, 
    const rotatedPart = nums.splice(nums.length - k);
    // and then add it to the beginning of our nums array
    return nums.unshift(...rotatedPart);
};


// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// brute force
    // probably the most obvious solution but will give you a terrible run time
var containsDuplicate = function(nums) {
    // iterate through the array,     
    for(let i = 0; i < nums.length; i++) {
        // use the built in array functions indexOf and lastIndexOf and compare
            // if the indexes don't match then the element is in two different places of the array, retrun true
        if (nums.indexOf(nums[i]) !== nums.lastIndexOf(nums[i])) {
            return true;
        }
    }
    // if we make it through the array loop, then there were only unique elements in the array, allowing us to return true;
    return false;
};
// O(n^2n): the built in array functions actually iterate the array so we have a nested loop

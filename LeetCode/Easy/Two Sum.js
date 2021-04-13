// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
    // You may assume that each input would have exactly one solution, and you may not use the same element twice.
    // You can return the answer in any order.

// Brute force approach, since there is only one solution and we cannot re-use the same element twice, a nested iteration will give us all combinations of elements
    // time complexity is O(n^2)
var twoSum = function(nums, target) {
    for(let i = 0; i < nums.length; i++) {
        for(let j = i+1; j < nums.length; j++) {
            if(nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
};

// A more time conscious approach would employ the use of a map or object to reduce look up time when finding the complement to the current number
var twoSum = function(nums, target) {
    const complementMap = {};

    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        // this lets us check whether the complement is in our complementMap, same as going complementMap.hasOwnProperty(complement)
        if (complement in complementMap) {
            return [complementMap[complement], i];
        } else {
            complementMap[nums[i]] = i;
        }
    }
};
// this solution requires us to sacrifice space by making a new map/object, but it save a lot in time by changing our time complexity from quadratic time O(n^2) to linear time O(n) 
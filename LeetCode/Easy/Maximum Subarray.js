// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// A subarray is a contiguous part of an array.

var maxSubArray = function(nums) {
    // we are told the array will have at least one number, so we can start our trackers at the first element of the array
    let max = nums[0];
    let currentMax = nums[0];
    // we can start iterating through the array at the second element because we do not need to compare the first element to itself
    for(let i = 1; i < nums.length; i++) {
        // by using Math.max, we compare our current element to our current biggest sum plus the current element
            // for example, if our array starts with 3 negative numbers and then gives us a positive number, why bother including the negatives, 
                // just set the current max to the positive
        currentMax = Math.max(nums[i], currentMax + nums[i]);
        // after determining our currentMax, let us use the same method to compare the currentMax to overall max
            // this way we can compare sum of subarrays
        max = Math.max(max, currentMax);
    }
    // return the largest subarray sum
    return max;
};
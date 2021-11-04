// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// A subarray is a contiguous part of an array.

var maxSubArray = function(nums) {
    // we are told the array will have at least one number, so we can start our trackers at the first element of the array
    let max = nums[0];
    let currentMax = nums[0];
    // we can start iterating through the array at the second element because we do not need to compare the first element to itself
    for (let i = 1; i < nums.length; i++) {
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

var maxSubArray = function(nums) {
    // we iterate through the array from the second array,
        // the first element will always be the max we can get from a one index subarray beginning with the first element
    for (let i = 1; i < nums.length; i++) {
        // rewrite the element with the larger number between the original element and the sum of current subarray
            // as we rewrite the elements, the previous element will be the largest sum of a contiguous subarray
        nums[i] = Math.max(nums[i], nums[i] + nums[i - 1]);
    }
    // use a spread operator on our overwritten array and Math.max to find the largest element
        // this will be the sum of the subarray
    return Math.max(...nums);
};
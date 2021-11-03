// Given a sorted array of distinct integers and a target value, return the index if the target is found.
//     If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

// this is a binary search function, either we find the target, or we find where the target is supposed to go.
var searchInsert = function(nums, target) {
    let lo = 0, hi = nums.length - 1;

    if (target < nums[lo]) {
        return 0;
    }

    if (target > nums[hi]) {
        return hi + 1;
    }

    while(lo < hi) {
        let midPoint = lo + Math.floor((hi - lo) / 2);
        // target is found
        if (target === nums[midPoint]) {
            return midPoint;
        } else if (target > nums[midPoint]) {
            lo = midPoint + 1;
        } else {
            hi = midPoint;
        }
    }

    // once lo and hi converge, the target will either be the midpoint or not found
        // if target is not found, then we return the index it should be inserted into, in which case it is the index where lo and hi converges anyways
    return lo;
};
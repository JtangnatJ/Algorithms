// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums.
    // If target exists, then return its index. Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.

var search = function(nums, target) {
    // instantiate two trackers on each end of the array
    let left = 0;
    let right = nums.length - 1;
    // while the trackers are not equal to each other, 
    while(left < right) {
        // find a midpoint index that splits the array in half
        let midPoint = Math.floor((right + left) / 2);
        // if our target is on the midpoint, then we found the midpoint, return the index
        if (target === nums[midPoint]) {
            return midPoint;
        // otherwise, find which side of the midpoint the target falls under
            // if target is on the larger  than the midpoint element, then bring the left tracker to the right of the midpoint,
                // essentially getting rid of half the array we know will definitely not contain the target element
        } else if (target > nums[midPoint]) {
            left = midPoint + 1;
            // do the same but to the right tracker if the target is smaller than the midpoint element
        } else {
            right = midPoint - 1;
        }
    }
    // we are constantly lowering the area in which we are looking for our target by half until we find our target
        // this is feasible because the given array is ordered for us
    // after we break the loop, we have to do one final check in case the left and right indexes are equal, and that is the target
        // otherwise return -1 because the target cannot be found
    if (nums[left] === target) {
        return left;
    }

    return -1;
};
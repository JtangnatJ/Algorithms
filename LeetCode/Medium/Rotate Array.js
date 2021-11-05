// Given an array, rotate the array to the right by k steps, where k is non-negative.

var rotate = function(nums, k) {
    // to account for scenarios where k is larger than the length of our array, we use modulo to find the appropriate amount of rotation
    k = k % nums.length;
    // we cut off the end that we want to rotate, 
    const rotatedPart = nums.splice(nums.length - k);
    // and then add it to the beginning of our nums array
    return nums.unshift(...rotatedPart);
};

var rotate = function(nums, k) {
    // same as before, we are accoutn of cases where k is larger than nums.length
    k = k % nums.length;
    // we extend our nums array, duplicating the beginning
        // [1, 2, 3, 4, 5] with k = 3 becomes [1, 2, 3, 1, 2, 3, 4, 5]
    for(let i = nums.length - 1; i >= 0; i--) {
        nums[i + k] = nums[i];
    }
    // then we remove each element at the end and place them in the apprpriate place, eliminating the duplicated beginning
        // [1, 2, 3, 1, 2, 3, 4, 5] => [1, 2, 5, 1, 2, 3, 4] => [1, 4, 5, 1, 2, 3] => [3, 4, 5, 1, 2]
    for(let j = k - 1; j >= 0; j--) {
        nums[j] = nums.pop();
    }

    return nums;
};
// O(n + k): we iterate the length of the original array, then we have a loop that iterates through the length of k

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

// the reverse method
    // we reverse the entire array, then we reverse two subarrays
var rotate = function(nums, k) {
    //accounting for cases where k is larger than nums.length
    k = k % nums.length;
    // helper function that can reverse the entire nums array, or a section of the nums array
    const reverse = (start, end) => {
        while(start < end) {
            let temp = nums[start];
            nums[start] = nums[end];
            nums[end] = temp;
            start++;
            end--;
        }
    }
    // reverse the entire array: [1, 2, 3, 4, 5] => [5, 4, 3, 2, 1]
    reverse(0, nums.length - 1);
    // reverse the section that was "rotated": [5, 4, 3, 2, 1] => [3, 4, 5, 2, 1] assuming k = 3
    reverse(0, k - 1);
    // reverse the rest of the array to return the original order: [3, 4, 5, 2, 1] => [3, 4, 5, 1, 2]
    reverse(k, nums.length - 1);
   
    return nums;
};
// this allows us to "rotate" the array in place without using extra space by splicing or extra entries in the array
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

// slightly optimized by using extra space 
var containsDuplicate = function(nums) {
    // use a map or an object to track elements in the array
    const numberMap = new Map();

    for (let i = 0; i < nums.length; i++) {
        // iterate through the array and check if our map contains the current element
        if(numberMap.has(nums[i])) {
            // if it does, then we have seen the element before, making it a duplicate; allowing us to return true;
            return true;
        }
        // if we have not seen the element previously, we move on and create an entry for it in our map with an arbitrary value
        numberMap.set(nums[i], 1);
    }
    // making it out the loop means we have only unique elements within the array, leading to us returning false;
    return false;
};
// O(n) time complexity: we iterate the array only once, obtaining a faster runtime by using extra space to track our elements

// cleanest code
var containsDuplicate = function(nums) {
    // we use a set to create a data structure that only contains unique entries of elements within nums
    const numberSet = new Set(nums);
    // we compare the sizes of the set and our nums. if the set is smaller, then there were duplicates within nums
    return numberSet.size < nums.length;
};
// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

// Example 1:
    // Input: nums1 = [1,3], nums2 = [2]
    // Output: 2.00000
    // Explanation: merged array = [1,2,3] and median is 2.
// Example 2:
    // Input: nums1 = [1,2], nums2 = [3,4]
    // Output: 2.50000
    // Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
// Example 3:
    // Input: nums1 = [0,0], nums2 = [0,0]
    // Output: 0.00000
// Example 4:
    // Input: nums1 = [], nums2 = [1]
    // Output: 1.00000
// Example 5:
    // Input: nums1 = [2], nums2 = []
    // Output: 2.00000

// Simple Approach
    // Merge the two arrays and then find the median
var findMedianSortedArrays = function(nums1, nums2) {
    // we will employ a helper function to merge our arrays
    const mergedArray = sortedArrayMerger(nums1, nums2);
    const length = mergedArray.length;
    const mid = Math.floor(length / 2);
    // if the array length is even then we will be finding the average of two numbers
    if (length % 2 === 0) {
        return (mergedArray[mid - 1] + mergedArray[mid]) / 2;
    } else {
        return mergedArray[mid];
    }
};
// helper function
const sortedArrayMerger = (arr1, arr2) => {
    let i = 0;
    let j = 0;
    let result = [];
    // iterate through both arrays and add them into our results array until one is empty
    while(i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }
    // check whether there are any numbers left in arr1
    while(i < arr1.length) {
        result.push(arr1[i]);
        i++;
    }
    // check whether there are any numbers left in arr2
    while(j < arr2.length) {
        result.push(arr2[j]);
        j++;
    }

    return result;
}
// O(n + m) time complexity due to having to iterate over both arrays
    // O(n + m) space since we have to make a new array based on both of the provided arrays

// save some time by stopping the merge/sort once we reach the halfway mark
var findMedianSortedArrays = function(nums1, nums2) {
    // total length of both arrays
    const totalLen = nums1.length + nums2.length;
    // indexes for both arrays, the current element, the previous element, in case of uneven total array length;
    let idx1 = 0, idx2 = 0, curr, prev;

    // while we havent reached the mid point of the combined arrays
    while (idx1 + idx2 <= totalLen / 2) {
        // updating our previous tracker
        if (curr !== undefined) {
            prev = curr;
        }
        // simplifies future coding
        let elem1 = nums1[idx1];
        let elem2 = nums2[idx2];
        // if there are no more elements in array1
        if (elem1 === undefined) {
            curr = elem2;
            idx2++;
            continue;
        }
        // if there are no more elements in array2
        if (elem2 === undefined) {
            curr = elem1;
            idx1++;
            continue;
        }
        // update according to how the elements would be sorted
        if (elem1 < elem2) {
            curr = elem1;
            idx1++;
        } else {
            curr = elem2;
            idx2++;
        }
    }
    // return based off of the total length, median would either be current or the average of two elements
    return totalLen % 2 === 0 ? (prev + curr) / 2 : curr;
};

// TODO: logarithmic time
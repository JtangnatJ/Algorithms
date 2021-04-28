// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

// Example 1:
    // Input: x = 123
    // Output: 321
// Example 2:
    // Input: x = -123
    // Output: -321
// Example 3:
    // Input: x = 120
    // Output: 21
// Example 4:
    // Input: x = 0
    // Output: 0

// String approach
var reverse = function(x) {
    const MAX = Math.pow(2, 31) - 1;
    const MIN = -1 * Math.pow(2, 31);
    
    const reversedStrArr = Math.abs(x).toString().split('');
    let reversedNum = Number(reversedStrArr.reverse().join(''));

    if (x < 0) {
        reversedNum *= -1;
    }

    if (reversedNum > MAX || reversedNum < MIN) {
        return 0;
    }

    return reversedNum;
};
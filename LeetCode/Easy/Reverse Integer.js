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
    // problem states that our reversed number has to stay within bounds, so we will use these variables to compare 
    const MAX = Math.pow(2, 31) - 1;
    const MIN = -1 * Math.pow(2, 31);
    // convert our number into a string and reverse it
    const reversedStr = Math.abs(x).toString().split('').reverse().join('');
    // convert it back into a Number, we use 'let' because we plan on modifying the number in the future
    let reversedNum = Number(reversedStr);
    // we could have done these two steps in one line, but that makes everything harder to read
    // check if the original number was negative to ensure our reversed number has the right sign
    if (x < 0) {
        reversedNum *= -1;
    }
    // check whether or not we are within bounds
    if (reversedNum > MAX || reversedNum < MIN) {
        return 0;
    }
    // return the answer at last if all checks pass
    return reversedNum;
};

//String Approach small improvements
var reverse = function(x) {
    // problem states that our reversed number has to stay within bounds, so we will use these variables to compare 
    const MAX = Math.pow(2, 31) - 1;
    const MIN = -1 * Math.pow(2, 31);
    
    const reversedStr = Math.abs(x).toString().split('').reverse().join('');
    // isntead of using an if check to apply the negative, we use Math.sign and multiply it into our Number to get the proper sign and can use const instead of let, removing ambiguity
    const reversedNum = Math.sign(x) * Number(reversedStr);
    // once again we separate the conversions to make things easier to read

    // by using a ternary operator, we save some lines of code
    return (reversedNum > MAX || reversedNum < MIN) ? 0 : reversedNum;
};

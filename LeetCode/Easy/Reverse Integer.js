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
    const MAX = Math.pow(2, 31) - 1;
    const MIN = -1 * Math.pow(2, 31);
    
    const reversedStr = Math.abs(x).toString().split('').reverse().join('');
    // isntead of using an if check to apply the negative, we use Math.sign and multiply it into our Number to get the proper sign and can use const instead of let, removing ambiguity
    const reversedNum = Math.sign(x) * Number(reversedStr);
    // once again we separate the conversions to make things easier to read

    // by using a ternary operator, we save some lines of code
    return (reversedNum > MAX || reversedNum < MIN) ? 0 : reversedNum;
};

//Numerical Solution
var reverse = function(x) {
    const MAX = Math.pow(2, 31) - 1;
    const MIN = -1 * Math.pow(2, 31);
    // tracking our answer
    let result = 0;
    // we want our process to repeat until the original number x is gone and completely reversed so we use a while loop
    while(x !== 0) {
        // we don't need this variable, it just makes the code look a little cleaner
        let popped = x % 10;
        //we have to use Math.trunc instead of Math.floor due to the possibility of x being negative. 
            // If we use Math.floor then the while loop would be never ending since x would evnetually resolve -1 and stay that way
        x = Math.trunc(x / 10);
        //by multiplying by 10 and adding the popped number, we begin to reverse x
        result = result * 10 + popped;
    }
    // this check can happen inside the while loop, and probably should be inside the while loop if x grows into a large number
        // do you want to check AFTER you reversed the entire number or check every while iteration and stop the loop if the number grows out of bounds, depends on the number right?
    if (result > MAX || result < MIN) {
        return 0;
    }

    return result;
};

//The numerical approach will give slower results on LeetCode, but you save space by not having to make an array. 
    // String method for smaller numbers and math method for larger numbers

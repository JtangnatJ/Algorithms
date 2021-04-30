// Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer (similar to C/C++'s atoi function).

// The algorithm for myAtoi(string s) is as follows:
    // Read in and ignore any leading whitespace.
    /*  Check if the next character (if not already at the end of the string) is '-' or '+'.
        Read this character in if it is either. This determines if the final result is negative or positive respectively.
        Assume the result is positive if neither is present. */
    // Read in next the characters until the next non-digit charcter or the end of the input is reached. The rest of the string is ignored.
    // Convert these digits into an integer (i.e. "123" -> 123, "0032" -> 32). If no digits were read, then the integer is 0. Change the sign as necessary (from step 2).
    /*  If the integer is out of the 32-bit signed integer range [-231, 231 - 1], then clamp the integer so that it remains in the range.
        Specifically, integers less than -231 should be clamped to -231, and integers greater than 231 - 1 should be clamped to 231 - 1. */
    // Return the integer as the final result.
// Note:
    // Only the space character ' ' is considered a whitespace character.
    // Do not ignore any characters other than the leading whitespace or the rest of the string after the digits.

const myAtoi = (s) => {
    // maximum bounds
    const MAX = Math.pow(2, 31) - 1;
    const MIN = -1 * Math.pow(2, 31);

    s = s.trim(); // eliminates leading white space
    let sign = 1; // sign tracker
    let result = 0; // result tracker
        
    if (s[0] === "-") { // our number is negative
        sign = -1;
    }
    if (s[0] === "+" || s[0] === "-") { // get rid of the first slot only if it is a sign indicator
        s = s.slice(1);
    }

    for (let el of s) { 
        if(Number.isNaN(Number(el)) || el === ' ') { // if the element is not a number or if it is a white space
            break;
        } else {  
            result = result * 10 + Number(el);
        }
    }
    
    result = result * sign;
    
    if (result < MIN) {
        result = MIN;
    }

    if(result > MAX) {
        result = MAX;
    }
        
    return result;
};

// Minor Improvement for eye - relief
const myAtoi = (s) => {
    const MAX = Math.pow(2, 31) - 1;
    const MIN = -1 * Math.pow(2, 31);

    s = s.trim();
    let sign = 1;
    let result = 0;
        
    if (s[0] === "-") {
        sign = -1;
    }
    if (s[0] === "+" || s[0] === "-") {
        s = s.slice(1);
    }

    for (let el of s) { 
        // by putting a '+' in front of the element, it will be converted into a number
            // then do a shallow comparison with the string element to see if it is valid: 1 != '1' is false
        if(+el != el || el === ' ') {
            break;
        } else {  
            result = result * 10 + Number(el);
        }
    }
    
    result = result * sign;
    
    if (result < MIN) {
        result = MIN;
    }

    if(result > MAX) {
        result = MAX;
    }
        
    return result;
};

//Simple Code Fast Solution
const myAtoi = (s) => {
    if(!s) {
        return 0;
    }
    
    let num = parseInt(s); //parseInt will take care of any leading white spaces
    // parseInt will also stop if it detects any NaN and will give us what we have
    
    if(isNaN(num)) {
        return 0;
    }
    
    if(num > (Math.pow(2, 31) - 1)) {
        return Math.pow(2, 31) - 1;
    }
    if(num < (-Math.pow(2, 31))) {
        return -Math.pow(2, 31);
    }
    
    return num;
};
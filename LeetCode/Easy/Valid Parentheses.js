// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
    // An input string is valid if:
        // Open brackets must be closed by the same type of brackets.
        // Open brackets must be closed in the correct order.

var isValid = function(s) {
    // we build a key for us to easily retrieve parenthesis pairs
        // all open parenthesis will be keys and the matching closing parenthesis will be the value
    const key = {
        '(' : ')',
        '{' : '}',
        '[' : ']',
    };

    // a stack allows us to track the order of parentheses needed
        // first in last out is the ideal situation due to needing parentheses to be closed in a certain order
    let stack = [];

    //iterate through the array
    for (let i = 0; i < s.length; i++) {
        // add into the stack if it is an open parenthesis
        if (key.hasOwnProperty(s[i])) {
            stack.push(s[i]);
        // else will cover if the parenthesis is a closing parenthesis
        } else {
            // stack.pop will return the last element of stack which would be our most recent open parentheses
                // check if the complement matches the closing parentheses we are seeing
            if (key[stack.pop()] === s[i]) {
                continue;
                // if there is no match then the string is invalid
            } else {
                return false;
            }
        }
    }
    
    // if we finish iterating over the string and the stack is not empty then the string will be invalid
    if (stack.length > 0) {
        return false;
    }
    
    // we can return true at the end after passing all checks
    return true;
};


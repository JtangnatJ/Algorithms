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

// switch solution
var isValid = function(s) {
    const stack = [];
    
    for (let i = 0 ; i < s.length ; i++) {
        let c = s.charAt(i);

        // this allows us to handle the different cases of open parentheses and closing parentheses rather than nested if checks
            // also eliminates the need for a key object
            // slightly more typing but more clarity and readability
        switch(c) {
            case '(': stack.push(')');
                break;
            case '[': stack.push(']');
                break;
            case '{': stack.push('}');
                break;
            default:
                if (c !== stack.pop()) {
                    return false;
                }
        }
    }
    
    // combines the empty stack check with the final return statement
    return stack.length === 0;
};


// slight improvements
var isValid = function(s) {
    // a simple length check early on
        // if the string length is odd then we automatically fail
    if(s.length % 2 !== 0) {
        return false
    }

    const key = {
        '(' : ')',
        '{' : '}',
        '[' : ']',
    };

    let stack = [];

    for (let i = 0; i < s.length; i++) {
        // simplify the if check
        if (key[s[i]]) {
            stack.push(s[i]);
        // the only options are open or close parentheses so no need to nest the checks
        } else if (s[i] !== stack.pop()) {
            return false;
        }
    }
    
    return stack.length === 0;
};
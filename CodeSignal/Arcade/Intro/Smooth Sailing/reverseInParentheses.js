// Write a function that reverses characters in (possibly nested) parentheses in the input string.
    // Input strings will always be well-formed with matching ()s.

// Examples: 
    // For inputString = "(bar)", the output should be
        // reverseInParentheses(inputString) = "rab";
    // For inputString = "foo(bar)baz", the output should be
        // reverseInParentheses(inputString) = "foorabbaz";
    // For inputString = "foo(bar)baz(blim)", the output should be
        // reverseInParentheses(inputString) = "foorabbazmilb";
    // For inputString = "foo(bar(baz))blim", the output should be
        // reverseInParentheses(inputString) = "foobazrabblim".
    // Because "foo(bar(baz))blim" becomes "foo(barzab)blim" and then "foobazrabblim".

    function reverseInParentheses(inputString) {
        for (let i = 0; i < inputString.length; i++) {
            // find the first case of a closing parentheses
            if (inputString[i] === ')') {
                // split the string into substrings and add them together
                    // the substrings will be the first part of the string until the closing parentheses
                        // and everything after the closing parentheses
                    // erases the closing parentheses that we are currently on
                inputString = inputString.substring(0, i) + inputString.substring(i + 1);
                // decrement i by 1 so the current letter is the one before the closing parentheses
                i--;
                // initialize and empty string to track reversed letters
                let reversed = '';
                // use a while statement until we see another open parentheses to reverse the letters that were inside the parentheses
                while (inputString[i] !== '(') {
                    // add the current character to our reversed string
                    reversed += inputString[i];
                    // use our trick of substrings to erase the current character
                    inputString = inputString.substring(0, i) + inputString.substring(i + 1);
                    // decrement i to ensure we are going backwards
                        // this means we are going backwards from when we saw a closing parentheses until we get an opening parentheses
                    i--;
                }
                // after we find the openening parentheses, once again use the substring trick to get rid of the opening parentheses
                    // however this time we add our reversed string inbetween the two substrings to effectively reverse the letters
                inputString = inputString.substring(0, i) + reversed + inputString.substring(i + 1);
                // add the length of our reversed section minus 1 to i to save some time on our for loop
                    // we know for a fact that there will be no closing parentheses in that section, 
                        // no need to waste computational time on iterating over those characters
                i += reversed.length - 1;
            }
        }
        
        return inputString
    }

// daniel_z38's simplification
    function reverseInParentheses(s) {
    // we use true and create and endless while loop because the only time we want to be done
        // is when we have no more parentheses
            // this is taken care of by an if check within the while loop that will break when the condition is fulfilled
    while (true) {
        // find the first instance of a closing parentheses
        let c = s.indexOf(")");
        // if no closing parentheses then there is nothing to do, break
        if (c === -1) {
            break;
        }
        // "o" will be the index of the last opening parentheses
            // this opening parentheses will pair with the first closing parentheses
        let o = s.substring(0, c).lastIndexOf("(");
        // start will be the substring from the start of the string until "o"
        let start = s.substring(0, o);
        // middle will be the section we need to reverse
            // using split, reverse, join is the easiest chainable method
        let middle = s.substring(o + 1, c).split("").reverse().join("");
        // end is anything after the closing parentheses
        let end = s.substring(c + 1, s.length);
        // put the string back together
        s = start + middle + end;
    }
    
    return s;
}

// jakzo's solution w/ regex
    // unfortunately I am currently not well versed enough with regex to break down this solution
function reverseInParentheses(inputString) {
    // however we can see that the while statement checks for open parentheses
    while (inputString.includes('(')) {
        // and using context clues, we can see that the idea is still the same after the regex pattern
            // find the section between parentheses and then reverse it
                // jakzo used a spread operator instead of {str.split('')}
                    //same effect, personal preference
        inputString = inputString.replace(/\(([^()]*)\)/, (_, str) => [...str].reverse().join(''));
    }
    return inputString;
}
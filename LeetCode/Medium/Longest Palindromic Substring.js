// Given a string s, return the longest palindromic substring in s.

// Example 1:
    // Input: s = "babad"
    // Output: "bab"
    // Note: "aba" is also a valid answer.
// Example 2:
    // Input: s = "cbbd"
    // Output: "bb"
// Example 3:
    // Input: s = "a"
    // Output: "a"
// Example 4:
    // Input: s = "ac"
    // Output: "a"

// Brute force: Iterating over the entire string and testing substrings
var longestPalindrome = function(s) {
    // if the string is only one letter long then it is what we want
    if (s.length === 1) {
        return s;
    };

    let longPalin = '';
    for (let i = 0; i < s.length; i++) {
        // use our helper function to find any odd length palindromes centered around our current index
        let oddNumString = palindromeRetriever(s, i, i);
        //update our result tracker variable if necessary
        if (oddNumString.length > longPalin.length) {
            longPalin = oddNumString;
        }
        // use our helper function to find any even length palindromes centered around our current index
        let evenNumString = palindromeRetriever(s, i, i + 1);
        // update our result tracker variable if necessary
        if (evenNumString.length > longPalin.length) {
            longPalin = evenNumString;
        }
    }

    return longPalin;
};
// helper function
const palindromeRetriever = (s, start, end) => {
    // our conditions, first and last letter are the same, starting index and ending index are within string bounds
    while(s[start] === s[end] && start >= 0 && end < s.length) {
        //move the first letter backwards
        start--;
        // move the ending letter forwards
        end++;
    }
    // our loop breaks when our substring is no longer a palindrome, so we take the substring of what we have before we changed modified start and end
        // add one to start to revert to our desired starting point
        // due to how the substring function works, we don't need to change end
    return s.substring(start + 1, end);
};

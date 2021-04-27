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
    if (s.length === 1) {
        return s;
    };

    let longPalin = '';

    for (let i = 0; i < s.length; i++) {
        // console.log(i);
        let oddNumString = palindromeRetriever(s, i, i);
        // console.log(oddNumString);
        if (oddNumString.length > longPalin.length) {
            longPalin = oddNumString;
        }

        let evenNumString = palindromeRetriever(s, i, i + 1);
        // console.log(evenNumString);
        if (evenNumString.length > longPalin.length) {
            longPalin = evenNumString;
        }
    }

    return longPalin;
};

const palindromeRetriever = (s, start, end) => {
    while(s[start] === s[end] && start >= 0 && end < s.length) {
        start--;
        end++;
    }

    return s.substring(start + 1, end);
};

// longestPalindrome('babad');
// longestPalindrome('cbbd');
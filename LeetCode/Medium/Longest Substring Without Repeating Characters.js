// Given a string s, find the length of the longest substring without repeating characters.

// Example 1:
    // Input: s = "abcabcbb"
    // Output: 3
    // Explanation: The answer is "abc", with the length of 3.
// Example 2:
    // Input: s = "bbbbb"
    // Output: 1
    // Explanation: The answer is "b", with the length of 1.
// Example 3:
    // Input: s = "pwwkew"
    // Output: 3
    // Explanation: The answer is "wke", with the length of 3.
    // Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
// Example 4:
    // Input: s = ""
    // Output: 0

// Best Solution
var lengthOfLongestSubstring = function(s) {
    // initialize two trackers: i and j to operate our sliding window, this window will be our unique substring at any given time
        // longestSubstrLength to track our longest substring length
    let i = 0, j = 0, longestSubstrLength = 0;
    // create a map or obj to track occurrences of characters in our window
    const charMap = {};
    // j is our open end on the window so we will iterate over the entire string with j
    while(j < s.length) {
        // if the character at index j has already been sighted and is in our charMap,
        if(s[j] in charMap) {
            // then we check i
                // charMap[s[j]] stores the index that occurs AFTER the character we are looking at.
                    // this allows us to move i to the character that comes AFTER the duplication
                        // for example: in 'abcda' the first char 'a' has the index of 0
                            // but we store it into 
            i = Math.max(charMap[s[j]], i);
        }
        longestSubstrLength = Math.max(longestSubstrLength, j - i + 1);
        charMap[s[j]] = j + 1;
        j++;
    }
    return longestSubstrLength;
};
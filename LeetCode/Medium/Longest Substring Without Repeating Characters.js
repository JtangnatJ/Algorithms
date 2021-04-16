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


// Brute Force Solution
    // the simplest method would be to check every substring and identify whether all the characters in the substrings were unique
var lengthOfLongestSubstring = function(s) {
    // helper function to check unique-ness within substring
    var uniqueCheck = function(start, end) {
        let charMap = {};

        for (let i = start; i <= end; i++){
            if (charMap[s[i]] === 1) {
                return false;
            } else {
                charMap[s[i]] = 1;
            }
        }

        return true;
    }
    // tracker variable for longest substring length
    let longestSubstrLength = 0;
    // nested iteration loop to find all substrings within the given string
    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < s.length; j++) {
            // if the substring has no repeating characters then compare to current longest tracked length and update if necessary
            if (uniqueCheck(i, j)) {
                longestSubstrLength = Math.max(longestSubstrLength, j - i + 1);
            }
        }
    }

    return longestSubstrLength;
};
// this solution is not the greatest and will take an insanely long time with longer strings
    // Worst case scenario is O(n^3)
        // because we iterate the s three times? nested loop and then once again for uniqueCheck?
// Space complexity is O(Math.min(m, n)) because the only additional space we take up is our charMap which can potentially be as big as the entire string
    // but it can also only be m size which is the number of unique characters i nthe string

// Optimized Solution
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
                            // but we store it into our charMap tracked to the value of 1
                                // this way, when we encounter 'a' again, we can tell our left tracker, i, to move to index 1 and eliminate the duplicate
                // if i is larger than charMap[s[j]], then the duplicate letter is currently not within our window and can be ignored
            i = Math.max(charMap[s[j]], i);
        }
        // compare our current substring length to our tracker variable and update if necessary
        longestSubstrLength = Math.max(longestSubstrLength, j - i + 1);
        // update our charMap on the index of the current letter, but plus 1
            // remember this is so any letter that we come across as duplicate, the left tracker variable i will move to the NEXT letter to eliminate deuplicates in the substring
        charMap[s[j]] = j + 1;
        // move j to the next index before repeating our loop
        j++;
    }
    return longestSubstrLength;
};
// This is O(n) time complexity due to us only having to iterate over the string once
    // Still O(Math.min(m, n)) space complexity because our charMap will be dependent on the number of unique characters in the string
        // worst case scenario, the entire string contains only unique characters and our charMap will require one entry per character
    
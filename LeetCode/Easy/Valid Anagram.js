// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

var isAnagram = function(s, t) {
    // length check, if they have the same number of letters then they have the same length
    if(s.length !== t.length) {
        return false;
    }

    // a map where we store our letters and their counts
    const lettersMap = {};

    // loop through one of the strings and add the letters and their counts into the map
    for (let i = 0; i < s.length; i++) {
        lettersMap[s[i]] = (lettersMap[s[i]] || 0) + 1;
    }

    // now we go through the other string and compare the letter to the map
    for (let c of t) {
        // if the count of letter c is 0 or non-existent, then it is a letter than the first string did not have
        if (!lettersMap[c]) {
            return false;
        }
        // if the letter has been seen in the first string, then decrement the count, indicating that we are erasing matches
        lettersMap[c]--
    }

    return true;
}; 

// a more readable way of doing the final if check on line 22 would be to decrement if the letter exists, other wise return false
    // if (lettersMap[c]) {
    //     lettersMap[c]--
    // } else {
    //     return false;
    // }

// one-liner
    // slower and bigger due to running sorts and splits
var isAnagram = function(s, t) {
    return s.split('').sort().join('') === t.split('').sort().join('');
};
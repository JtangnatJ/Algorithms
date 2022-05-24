// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

var isAnagram = function(s, t) {
    if(s.length !== t.length) {
        return false;
    }

    const lettersMap = {};

    for (let i = 0; i < s.length; i++) {
        lettersMap[s[i]] = (lettersMap[s[i]] || 0) + 1;
    }

    for (let c of t) {
        if (!lettersMap[c]) {
            return false;
        }

        lettersMap[c]--
    }

    return true;
}; 
// Given a string s consisting of small English letters, find and return the first instance of a non-repeating character in it.
    // If there is no such character, return '_'.

function firstNotRepeatingCharacter(s) {
    for (let i = 0; i < s.length; i++) {
        // if the letter is unique, find indexOf() and lastIndexOf() should be the same
            // indexOf() returns the first occurrence
            // lastIndexOf() returns the last occurrence
        if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
            return s[i];
        }
    }
    // otherwise if no match is found there is no unique non-repeating letter
        // return '_' as asked
    return '_';
}

// copthuy using an object
firstNotRepeatingCharacter = s => {
    // we can use an object to track all occurrences of letters in the string
        // then iterate through the object and find the unique occurrence 
    r = {}
    for (e of s)
        r[e] = -~r[e]
        // {~} basically multiplies the number by negative 1 and then adds 1
            // ~1 === -2
            // the extra negative sign flips the value again so effectively only adding one
            // -~1 === 2
        // {-~undefined === 1}
            // so we are continuously incrementing the occurrence of a letter whenever we see it
    for (e in r)
        if (r[e] == 1)
        // iterate over the tracking object we have and find the letter that only occurred once
            return e
    return '_'
}
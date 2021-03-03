// Given two strings, find the number of common characters between them.

// Example: 
    // For s1 = "aabcc" and s2 = "adcaa", the output should be
        // commonCharacterCount(s1, s2) = 3.
        // The strings have 3 common characters - 2 "a"s and 1 "c".

function commonCharacterCount(s1, s2) {
    // we will be comparing the two strings, can start with either s1 or s2, I chose s1
        // we name a variable comparison and set it to an array of s1 letters
    let comparison = s1.split('');
    // initialized a variable to track the number of shared letters
    let shared = 0;
    
    for (let i = 0; i < s2.length; i++) {
        // because we chose s1 to make 'comparison', we iterate through s2
        if (comparison.includes(s2[i])) {
            // if our comparison array contains the current letter of s2, remove it from our comparison array and incrememnt the shared counter
            comparison.splice(comparison.indexOf(s2[i]), 1);
            shared++;
        }
    }
    
    return shared;
}

// lifeofnations's improvement
function commonCharacterCount(s1, s2) {
    for (var i = 0; i < s1.length; i++) {
        // replace will find the first occurence of the element and replace it with '!'
        s2 = s2.replace(s1[i], "!");
    }
    // using replace again, we remove all elements from s2 that are not "!"
        // returning the length will give us the number of "!", which is also the number of shared characters
    return s2.replace(/[^!]/g, "").length;
}

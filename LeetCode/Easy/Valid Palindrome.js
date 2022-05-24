// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters,
//     it reads the same forward and backward. Alphanumeric characters include letters and numbers.
    // Given a string s, return true if it is a palindrome, or false otherwise.

// reverse approach
var isPalindrome = function(s) {
    // make all letters lowercase and use regex to replace the white spaces and non alphanumeric characters
    const strippedString = s.toLowerCase().replace(/\W|_/g, '');

    // generate the reverse of the stripped string
    const reversedString = strippedString.split('').reverse().join('');

    // return the comparison
    return strippedString === reversedString;
};

// two pointer solution
var isPalindrome = function(s) {
    const strippedString = s.toLowerCase().replace(/\W|_/g, '');

    for (let i = 0, j = s.length -1; i <= j; i++, j--) {
        if (strippedString.charAt(i) !== strippedString.charAt(j)) {
            return false;
        }
    }

    return true;
};
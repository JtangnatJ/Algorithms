// Given the string, check if it is a palindrome.

function checkPalindrome(inputString) {
    // turn the inputString into an array using Array.prototype.split()
    // Array.prototype.reverse() the array then Array.prototype.join() to get the inputString but backwards
    // by returning the comparison of the two, it will either be true or false
    return inputString === inputString.split('').reverse().join('');
}

// ES6
const checkPalindrome = (s) => s === s.split('').reverse().join('');
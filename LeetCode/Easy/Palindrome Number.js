// Given an integer x, return true if x is palindrome integer.
// An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.

// String Solution
var isPalindrome = function(x) {
    let str = x.toString().split('').reverse().join('');

    return str === x.toString();
};

// Mathematical Solution
var isPalindrome = function(x) {
    if (x < 0) { // it will always be false if the number is negative, the '-' symbol interferes
        return false;
    }

    let temp = x;
    let reversedNum = 0;

    while (temp !== 0) {
        reversedNum = (reversedNum * 10) + (temp % 10); // add the last digit to our reversed number
        temp = Math.trunc(temp / 10); // remove the last digit from our temporary original number
    }

    return reversedNum === x; // check if they are deeply equal
};
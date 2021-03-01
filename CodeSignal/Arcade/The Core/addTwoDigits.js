//You are given a two-digit integer n. Return the sum of its digits.
    // addTwoDigits(29) = 11 
    // 2 + 9 = 11

// Initial solution
function addTwoDigits(n) {
    // convert the number into a string to consistently access both digits
    let str = n.toString();
    
    // parseInt each "number" in the string and add them together 
    return parseInt(str[0]) + parseInt(str[1]);
}

// more mathy solution
function addTwoDigits(n) {
    // n % 10 will always return the ones place digit
    // Math.floor(n/10) will always return the tens place digit
    return n % 10 + Math.floor(n/10);
}

//ES6
const addTwoDigits = (n) => n % 10 + Math.floor(n/10);
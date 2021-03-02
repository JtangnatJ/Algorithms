// Given a year, return the century it is in. 
// The first century spans from the year 1 up to and including the year 100, the second - from the year 101 up to and including the year 200, etc.

function centuryFromYear(year) {
    // use a variable such as century rather than repeating year/100 over and over
    let century = year/100;
    
    // if variable century is a whole number then you have the century
        // i.e 100/100 === 1 which is the first century and 1000/100 === 10 giving you the tenth century
    if (century % 1 === 0) {
        return century;
    }
    
    // if "century" is not a whole number then simply round down and add one to get the current century
        // 105/100 === 1.05
        // Math.floor(1.05) === 1
        // 1 + 1 === 2
    // Can also use Math.ceil() to simplify the function even further 
    return Math.floor(century) + 1;
}

// Improvement
    // don't need to check whether "century" in the previous method is a whole number
    // if you Math.ceil() and it is a whole number, there will be no change
function centuryFromYear(year) {
    return Math.ceil(year / 100);
}

// ES6 one-liner
const centuryFromYear = (year) => Math.ceil(year / 100);
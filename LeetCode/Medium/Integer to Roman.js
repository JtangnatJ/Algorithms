// Roman numerals are usually written largest to smallest from left to right.
    // However, the numeral for four is not IIII. Instead, the number four is written as IV.
    // Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX.
    // There are six instances where subtraction is used:
        // I can be placed before V (5) and X (10) to make 4 and 9. 
        // X can be placed before L (50) and C (100) to make 40 and 90. 
        // C can be placed before D (500) and M (1000) to make 400 and 900.
// Given an integer, convert it to a roman numeral.

// This is essentially our key, the numbers in the values array coincide with the elements of the romanNum array according to index.
    // the "key" is rranged from large to small on purpose
    // this is easier to iterate than an object key.
const romanNum = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
const value = [1000,900,500,400,100,90,50,40,10,9,5,4,1];

var intToRoman = function(num) {
    // our result string that we are returning
    let result = "";
    // iterate through the indices with the stop condition being our given number hits 0
    for (let i = 0; num > 0; i++) {
        // while we iterate through our two key arrays, we start from the biggest values to begin our Roman numeral
            // we aren't worried about exceptions because we have them included in our "key"
        while (num >= value[i]) {
            // if the number were 3210, we would add 'M' 3 times and subtract 1000 each time we add 'M' to the result
            result += romanNum[i];
            num -= value[i];
            // once the number is smaller than our current index, we break the loop and increase the index, comparing what we have left to the next entry in our key,
                // until our number hits 0
        }
    }

    return result;
};
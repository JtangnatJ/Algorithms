// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this:
    // P   A   H   N
    // A P L S I I G
    // Y   I   R

// And then read line by line: "PAHNAPLSIIGYIR"

// Write the code that will take a string and make this conversion given a number of rows:

// Example 1:
    // Input: s = "PAYPALISHIRING", numRows = 3
    // Output: "PAHNAPLSIIGYIR"
// Example 2:
    // Input: s = "PAYPALISHIRING", numRows = 4
    // Output: "PINALSIGYAHRPI"
    // Explanation:
        // P     I    N
        // A   L S  I G
        // Y A   H R
        // P     I
// Example 3:
    // Input: s = "A", numRows = 1
    // Output: "A"

var convert = function(s, numRows) {
    if (numRows === 1) {
        return s;
    }

    const result = new Array(numRows);
    result.fill('');

    let row = 0;
    let isIncreasing = true;

    for (let i =  0; i < s.length; i++) {
        result[row] += s[i];

        if (row === 0) {
            isIncreasing = true;
        }

        if (row === numRows - 1) {
            isIncreasing = false;
        }

        row += isIncreasing ? 1 : -1;
    }

    return result.join('');
};
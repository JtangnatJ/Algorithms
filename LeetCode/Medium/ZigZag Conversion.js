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
    //if there is only one row then we will just be returning the string, there is no zigging or zagging
    if (numRows === 1) {
        return s;
    }
    // since we want to isolate each row individually, we can create and array where each row is an element within the array 
    const result = new Array(numRows);
    //have each element be an empty string for now so we can add letters to them later accordingly
    result.fill('');
    // we will have two tracker variables, one to track which row we are currently in,
    let row = 0;
    // and one to track whether we are zigging or zagging
    let isIncreasing = true;

    for (let i =  0; i < s.length; i++) {
        //iterate through the string and add our current letter to the appropriate 'row' in our array
        result[row] += s[i];
        // once we hit our last row, we are done zigging and have to zag back down, therefore we set isIncreasing to false to indicate this
        if (row === numRows - 1) {
            isIncreasing = false;
        }
        // once we hit the first row again, we are done zagging and have to zig back up so we set isIncreasing to true to indicate this
        if (row === 0) {
            isIncreasing = true;
        }
        // we update our row tracker accordingly depending on our isIncreasing tracker, 
            // if isIncreasing then we continue onto the next row so we add 1 , otherwise we are going backwards so we add -1
        row += isIncreasing ? 1 : -1;
    }
    // the problem is looking for a string formatted solution so we join our array and return it
    return result.join('');
};
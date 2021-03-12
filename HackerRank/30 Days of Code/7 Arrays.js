// Given an array, 'A', of 'N' integers, print 'A''s elements in reverse order as a single line of space-separated numbers.

// the step by step way
function main() {
    // HackerRank now parses the readLine() for you and even converted into an array of numbers
    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
    // we can initialize an empty string
    let result = '';
    // we can iterate through the array in reverse
    for (let i = arr.length - 1; i >= 0; i--) {
        // add the element to our reverse string. JS logic will turn the number into a string for us
        result += arr[i];
        // add a space to the string to maintain space between each element
        result += ' ';
    }
    // print the result
    console.log(result);
}

// Improvement
function main() {
    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
    // we can turn it into a one-liner by using built in array functions
        // reverse the array then use a join to add a space between all elements and then log the result
    console.log(arr.reverse().join(' '));
}

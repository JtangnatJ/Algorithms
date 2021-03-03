// Ticket numbers usually consist of an even number of digits. 
    // A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half.
    // Given a ticket number n, determine if it's lucky or not.

// Example: 
    // For n = 1230, the output should be
        // isLucky(n) = true.
    //  For n = 239017, the output should be
        // isLucky(n) = false.

function isLucky(n) {
    // convert the number into string then split into an array
    let numArr = JSON.stringify(n).split('');
    // find the midpoint then split the two halves
    let mid = numArr.length / 2;
    let firstHalf = numArr.slice(0, mid);
    let secondHalf = numArr.slice(mid);
    // use helper function to get the sum of each half and compare them
    return firstHalf.reduce(reducer) === secondHalf.reduce(reducer);
}
// helper function to reduce an array while converting the strings to numbers
const reducer = (a, b) => parseInt(a) + parseInt(b);

// evgenia_y's simplification
function isLucky(n) {
    // count seems to be a tracker variable
    var count = 0;
    // eliminating the need for a helper function by converting the number into a string and splitting into and array then
        // mapping over the array and using parseInt to convert all elements into numbers in one step
    n = String(n).split('').map(t => {return parseInt(t)});
    // using a ternary operator with the condition of whether the element is in the first half or the second half
        // if the element is in the first half, add it to our count variable
        // else: subtract it from the count variable
        // if the number is lucky and both halve are equal in sum, count should be equal to 0 at the end
    n.forEach( (el, i) => { (i < n.length / 2) ? count += el : count -= el });
    // determine whether count is 0 or not to see if the number is lucky
    return count == 0;
}

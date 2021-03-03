// Given an array of strings, return another array containing all of its longest strings.

// Example:
    // For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
        // allLongestStrings(inputArray) = ["aba", "vcd", "aba"].

function allLongestStrings(inputArray) {
    // initialized a tracker variable for the longest length
        // could have used -Infinity, but the longest string couldbe the first one so saving a step
    let longest = inputArray[0].length;
    // storage array for our answers
    let result = [];
    
    for (let i = 0; i < inputArray.length; i++) {
        // if the current element is longer than our tracker then recalibrate our tracker element and reset our storage array of answers
        if (inputArray[i].length > longest) {
            longest = inputArray[i].length;
            result = [];
        }
        // if the current element is shorter than our tracked length then don't even bother with it
        if (inputArray[i].length < longest) {
            continue;
        }
        // at this point we know that the current element has the length that we are tracking and add it into our storage array
        result.push(inputArray[i]);
    }
    
    return result;
}

// xyrn's improvement
function allLongestStrings(inputArray) {
    // use spread operator so that we can apply Math.max on all elements of the array
        // use the map function to create a new array where all elements are the lengths of the original elements, allowing us to use Math.max and find the longest length
        // the longest length will be tracked by our variable maxSize
    let maxSize = Math.max(...inputArray.map(x => x.length));
    // use the filter function to make a new array that only contains elements with length equal to our maxSize tracker variable
    return inputArray.filter(x => x.length === maxSize);
}


// Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, each statue having an non-negative integer size.
// Since he likes to make things perfect, he wants to arrange them from smallest to largest so that each statue will be bigger than the previous one exactly by 1.
// He may need some additional statues to be able to accomplish that. Help him figure out the minimum number of additional statues needed.

// Example: 
    // For statues = [6, 2, 3, 8], the output should be
        // makeArrayConsecutive2(statues) = 3.

    // Ratiorg needs statues of sizes 4, 5 and 7.

function makeArrayConsecutive2(statues) {
    // sort the array of statues 
    let sorted = statues.sort((a, b) => a-b);
    
    // the range tells us the total number of statues we should have
    let range = sorted[sorted.length - 1] - sorted[0];
    
    // subtract the length of the array and add 1 to determine how many we are missing
        // can use statues.length, can use sorted.length... it's the same length
    return range - sorted.length + 1;
}

// Improvement
    // thanks to myjinxin2015's solution on CodeSignal for this one
        // the wording and title of the problem made me lean towards sorting the provided array
    // skip the whole sorting step, simply use the spread operator and Math.max() and Math.min() to find the range
        // same as before, subtract the length of what we have and add 1 to find the number of missing statues
function makeArrayConsecutive2(statues) {
    return Math.max(...statues) - Math.min(...statues) - statues.length + 1;
}

// ES6 one-liner
const makeArrayConsecutive2 = (statues) => Math.max(...statues) - Math.min(...statues) - statues.length + 1;
// Given an integer, 'n', perform the following conditional actions:
    // If 'n' is odd, print Weird
    // If 'n' is even and in the inclusive range of 2 to 5, print Not Weird
    // If 'n' is even and in the inclusive range of 6 to 20, print Weird
    // If 'n' is even and greater than 20, print Not Weird

// The most obvious way is to separate by odds and evens and then layer the if statements
function main() {
    const N = parseInt(readLine(), 10);
        
    if (N % 2 === 1) {
        console.log('Weird');
    } else {
        if (N >= 2 && N < 5) {
            console.log('Not Weird');
        } else if (N >= 6 && N <= 20) {
            console.log('Weird');
        } else if (N > 20) {
            console.log('Not Weird');
        }
    }
}

// Improvements
    // Obviously this is not pretty to read
    // we can simplify our problem by checking whether it is even and then checking each
        // conditional and decide whether we are printing 'Weird' or 'Not Weird'
    // We can also combine our 'Not Weird' conditionals by using an OR inside our conditional check

function main() {
    const N = parseInt(readLine(), 10);
    // 'Weird' is inside both answers so we initialize with 'Weird'
    let result = 'Weird';
    // if even then chance for 'Not Weird'
    if (N % 2 === 0) {
        // check our 'Not Weird' conditionals
            // combined the two of them with an OR operator
        if ((N >= 2 && N < 5) || N > 20) {
            // change our result by prepending with 'Not '
                // the space is important!
            result = 'Not ' + result; 
        }
    }
    // print the result, if our conditionals fail then we were supposed to print 'Weird' anyways
    console.log(result);
    
    // (N % 2 === 1 || (N > 5 && N < 21)) ? console.log('Weird') : console.log('Not Weird');
}

// ternary operator reduces the function even more!
function main() {
    const N = parseInt(readLine(), 10);
    // if odd or within the range, then print 'Weird' otherwise pring 'Not Weird'
    (N % 2 === 1 || (N > 5 && N < 21)) ? console.log('Weird') : console.log('Not Weird');
}

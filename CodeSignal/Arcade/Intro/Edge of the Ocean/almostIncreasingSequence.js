// Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array.

function almostIncreasingSequence(sequence) {
    // tracker variable
    let firstError = true;
    
    // iterate through the elements
    for (let i = 0; i < sequence.length; i++) {
        // if current element is greater than or equal to the next element, then it is not sequential
        if (sequence [i] >= sequence[i + 1]) {
            // check if it is the first error
            if (firstError) {
                // change the tracker so this no longer applies when it happens again
                firstError = false;
                // check surrounding elements to determine sequential validity
                    // current element vs element two places ahead
                    // previous element with next element
                if (sequence[i] >= sequence[i+2] && sequence[i-1] >= sequence[i+1]) {
                    // return false if sequential check fails
                    return false;
                }
            } else {
                // it was not the first error, therefore return false
                return false;
            }
        }   
    }
    // return true only if all checks pass
    return true;
}

// myJinXin2015 alternative tracking method
function almostIncreasingSequence(seq) {
    //tracker variable to count the number of non-sequential errors
    var bad = 0;

    for(var i = 1; i < seq.length; i++) {
        // if current element is smaller than previous element
        if (seq[i] <= seq[i - 1]) {
            // increase the counter of errors
            bad++;
            // if there is more than one error then return false
            if (bad > 1) {
                return false;
            }
            //same as my method, check surrounding elements to determine sequential validity
            if(seq[i] <= seq[i - 2] && seq[i + 1] <= seq[i - 1]) {
                return false;
            }
        }
    }
    // only return true if all checks pass
    return true;
}

//no one-liner
// Given an array a that contains only numbers in the range from 1 to a.length,
    // find the first duplicate number for which the second occurrence has the minimal index.
// In other words, if there are more than 1 duplicated numbers,
    // return the number for which the second occurrence has a smaller index than the second occurrence of the other number does.
// If there are no such elements, return -1.

function firstDuplicate(a) {
    // we use a map here to track occurrences of elements within the array
        // an object would work as well
    let collection = new Map();
    
    for (let i = 0; i < a.length; i++) {
        // iterate the array and find the first element that has already been input into our map/object
            // this will be the duplicate with the smallest index, aka the first duplicate
        if (collection.has(a[i])) {
            return a[i];
        // if the map/object does not contain the element, then we make evidence that we have seen it
            // just in case it becomes our first duplicate
        } else {
            collection.set(a[i], 1);
        }
    }
    // at the end if there are no duplicates then we return -1 as asked
    return -1;
}

// copthuy's ES6 set solution
firstDuplicate = a => {
    // a set only holds unique values whereas a map is more akin an object with keyed values
        // this saves us the effort of having to make key-value pairs for maps and objects
    r = new Set()
    // a for in loop operates in the same way as an iteration loop
    for (e of a)
        if (r.has(e))
            return e
        else
            r.add(e)
    return -1
}

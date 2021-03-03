// Some people are standing in a row in a park.
    // There are trees between them which cannot be moved.
    // Your task is to rearrange the people by their heights in a non-descending order without moving the trees.
    // People can be very tall!

// Example: 
    // For a = [-1, 150, 190, 170, -1, -1, 160, 180], the output should be
        // sortByHeight(a) = [-1, 150, 160, 170, -1, -1, 180, 190].

// -1 indicates the position of a tree.
// Why say "non-descending" instead of ascending?

function sortByHeight(a) {
    // create and temp array and collect the height of the people excluding the trees
    let temp = [];
    
    for (let i = 0; i < a.length; i++) {
        // if the element is "-1" then it is a tree, continue to skip
        if (a[i] === -1) {
            continue;
        }
        // only add elements that aren't "-1"
        temp.push(a[i]);
    }
    //sort the array with all the heights in ascending order
    temp.sort((a, b) => a - b)
    // iterate through the original array again
        // the goal now is to replace elements that aren't trees with elements of the appropriate height
    for (let k = 0, j = 0; j < a.length; j++) {
        // once again, if the element is a tree, ignore it
        if (a[j] === -1) {
            continue;
        }
        // otherwise, replace the element with whatever is next in line in the sorted array
        a[j] = temp[k];
        k++;
    }
    
    return a;
}


// haynar's solution
    // same concept, sort the heights then reintroduce them in order
function sortByHeight(a) {
    // s is our array of heights that aren't trees
        // using filter to sort out the trees, then sort in ascending order
    var s = a.filter(h => h > 0).sort((a, b) => a - b)
    // return the array after using map and reordering the array
    return a.map(p => {
        // if not a tree
        if (p !== -1) {
            // return the first element of the "s" array
                // which is also the shortest element with Array.prototype.shift()
            return s.shift();
        }
        // cancel the callback function on the current element otherwise
        return -1;
    })
}

// There is a large pile of socks that must be paired by color.
    // Given an array of integers representing the color of each sock,
        // determine how many pairs of socks with matching colors there are.

// Given 'n' number of socks and array 'ar' of socks, find the number of pairs
function sockMerchant(n, ar) {
    // initialize a counter variable "pairs" and a socks object for tracking said pairs
        // we use an object because it helps reduce the time complexity of lookups
    let pairs = 0;
    let socks = {};
    
    for (let i = 0; i < n; i++) {
        // if check determines if we have seen this sock before, if we have: 
        if (socks[ar[i]]) {
            // increment the counter variable and delete the sock that we have seen before because it already has its own pair
            pairs++;
            delete socks[ar[i]];
        } else {
            // otherwise, we make a note that we have seen this particular sock before and are looking for a partner
                // setting it equal to 1 will allow us to pass our if statement later on
                    // any thing truthy would work as well, one is jsut the simplest
            socks[ar[i]] = 1;
        } 
    }
    
    return pairs;
}
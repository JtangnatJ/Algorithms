// You are a product manager and currently leading a team to develop a new product.
//     Unfortunately, the latest version of your product fails the quality check.
//     Since each version is developed based on the previous version, all the versions after a bad version are also bad.

// Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.

// You are given an API bool isBadVersion(version) which returns whether version is bad.
//     Implement a function to find the first bad version. You should minimize the number of calls to the API.

// since we want to minimize the number of calls to the API, we should use a binary search.
    // n is our total number of versions.
const badVersionFinder = function(n) {
    let lo = 1, hi = n;
    
    while(lo < hi) {
        let midPoint = lo + Math.floor((hi - lo) / 2);
        // isBadVersion is our given API call that returns true or false
            // if the midpoint is a bad version, the first bad version could be the midpoint, or it could be earlier
            // unlike the Binary Serach problem, we do not want to exclude the midpoint for the highs just in case the midpoint is the first bad version, saves a tracking headache
        if (isBadVersion(midPoint)) {
            hi = midPoint;
        } else {
            // if the midpoint is not a bad version, then we can do the next element for our low. we only want to find bad versions
            lo = midPoint + 1;
        }
    }
    // once lo === hi, we will have foudn our first bad version, we can return either lo or hi
    return lo;
};
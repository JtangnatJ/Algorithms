// Several people are standing in a row and need to be divided into two teams.
    // The first person goes into team 1, the second goes into team 2, the third goes into team 1 again, the fourth into team 2, and so on.
// You are given an array of positive integers - the weights of the people.
    // Return an array of two integers, where the first element is the total weight of team 1, and the second element is the total weight of team 2 after the division is complete.

// Example: 
    // For a = [50, 60, 60, 45, 70], the output should be
        // alternatingSums(a) = [180, 105].
            // 50 + 60 + 70 = 180
            // 60 + 45 = 105

function alternatingSums(a) {
    // two variables to track each team
        // better naming convention would have been to use team1 and team2
        // at the time I used odd and even due to team1 being odd and team 2 being even on a 1-index system
            // leads to some minor confusion
    let odd = 0;
    let even = 0;
    
    for (let i = 0; i < a.length; i++) {
        // even index represents team1 which we add to the odd variable???
            // this is why naming convention is important
            // also don't use 1-index logic in a 0-index game
        if (i % 2 === 0) {
            odd += a[i];
        } else {
            even += a[i];
        }
    }
    
    return [odd, even];
}

// better naming convention
function alternatingSums(a) {
    let team1 = 0;
    let team2 = 0;
    
    for (let i = 0; i < a.length; i++) {
        // no confusion in an even index number being added to the "odd" tracker variable
        if (i % 2 === 0) {
            team1 += a[i];
        } else {
            team2 += a[i];
        }
    }
    
    return [team1, team2];
}

// bintay1 simplification
function alternatingSums(a) {
    // rather than two tracker variables we start with the answer format
        // meaning we will have to figure out where each weight goes and add to the current total
    var res = [0, 0]
    for(var i in a){
        // by using {i % 2}, the answer will always be 0 or 1!
        res[i % 2] += a[i]
    }
    return res
}

//codeedog ES6 one-liner
    // using array.reduce and an initial value of [0, 0]
        // we are starting with [0, 0] and will be adding to it through our reduce function
            // similar to how bintay1 did it, just a different process
    // I had to turn to stackOverflow to figure out what's going on here, great resource
    // BITWISE OPERATOR
        // by using {i & 1}, codeedog is turning every index into a 0 or a 1, based on odd or even, 
            // allowing us to sort by team1 or team2!
            // this is a different way of writing what bitnay1 wrote above with the modulo operand
    // the p that shows up after the comma in the callback function shows that there is a second statement
        // shorthand for saying "return p"
alternatingSums = a => a.reduce((p, v, i) => (p[i & 1] += v, p), [0, 0])

//codeedog ES6 longhand
const alternatingSums = (a) => {
    a.reduce((p, v, i) => {
        p[i & 1] += v;
        return p;
    }, [0, 0])
}

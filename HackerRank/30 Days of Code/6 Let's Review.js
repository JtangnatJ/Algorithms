// Given a string, 'S' , of length 'N' that is indexed from 0 to N-1, print its even-indexed and odd-indexed characters as 2 space-separated strings on a single line

// Example:
    // s = adbecf
    // prints - abc def

function processData(input) {
    //Enter your code here
    let inputStrings = input.split('\n').slice(1);
    
    inputStrings.forEach((str) => {
        let evens = '', odds = '';
        
        str.split('').forEach((char, i) => {
            if (i % 2 === 0) {
                evens += char;
            } else {
                odds += char;
            }
        })
        
        console.log(`${evens} ${odds}`)
    })
}

// frustrating that this function has to take into account all inputs 
    // considering HackerRank includes an arbitrary number in the beginning to let you know how many inputs there will be
    // that is why we split the {input} based on line breaks
        // then slice from 1 to gather all inputs except the first element


// Improvement
function processData(input) {
    //Enter your code here
    let inputStrings = input.split('\n').slice(1);
    
    inputStrings.forEach((str) => {
        let evens = '', odds = '';
        
        str.split('').forEach((char, i) => i % 2 ? odds += char : evens += char)
        
        console.log(`${evens} ${odds}`)
    })
}

// reduce our second forEach function into a one-liner to make things look nicer
    // i % 2 will either return 0, a falsy number or 1 a truthy number so we can build a ternary around that
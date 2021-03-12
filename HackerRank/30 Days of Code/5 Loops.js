// Given an integer, 'n', print its first 10 multiples. Each multiple 'n x i' (where 1 <= i <= 10) should be printed on a new line in the form: n x i = result.

function main() {
    // once again you have to use readLine() and parseInt to get the value of n that they want
    const n = parseInt(readLine(), 10);
    // establish the loop
    for (let i = 1; i < 11; i++) {
        // format the print statements to the desired format
        console.log(`${n} x ${i} = ${n * i}`)
    }
}



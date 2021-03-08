// Complete the code in the editor below. The variables 'i', 'd', and 's' are already declared and initialized for you. You must:
    // Declare 3 variables: one of type int, one of type double, and one of type String.
    // Read 3 lines of input from stdin (according to the sequence given in the Input Format section below) and initialize your  variables.
    // Use the '+' operator to perform the following operations:
        // Print the sum of 'i' plus your int variable on a new line.
        // Print the sum of 'd' plus your double variable to a scale of one decimal place on a new line.
        // Concatenate 's' with the string you read as input and print the result on a new line.

// Declare second integer, double, and String variables.
   let int, double, string;
// Read and save an integer, double, and String to your variables.
    int = parseInt(readLine());
    double = parseFloat(readLine());
    string = readLine();
// Print the sum of both integer variables on a new line.
    console.log(i + int);
// Print the sum of the double variables on a new line.
    console.log((d + double).toFixed(1));
// Concatenate and print the String variables on a new line
// The 's' variable above should be printed first.
    console.log(s + string);


// it is important that you use readLine() when initializing your variables and converting to the proper variable type
    // not explained anywhere considering this is supposed to be a beginners section
        // probably due to this being geared towards a different language
    // not to mention how confusing the HackerRank platform is in terms of input

// you ahve to use toFixed(1) in the sum of the double variables to maintain double status
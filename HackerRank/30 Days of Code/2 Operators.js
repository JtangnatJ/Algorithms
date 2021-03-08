// Given the meal price (base cost of a meal), tip percent (the percentage of the meal price being added as tip),
    // and tax percent (the percentage of the meal price being added as tax) for a meal, find and print the meal's total cost. 
// Round the result to the nearest integer.

function solve(meal_cost, tip_percent, tax_percent) {
    let total = meal_cost + ((meal_cost * (tip_percent + tax_percent)) / 100);
    
    console.log(round(total));
}

// I built a helper function to help determine whether to roudn up or down.
    // I was originally building this into my solve function but decided to practice separation of concerns

let round = (num) => {
    let remainder = num % 1;
    // modulo 1 to eliminate all whole numbers and check the remainder
        // determine what action to take based on the remainder
    if (remainder >= 0.5) {
        return Math.ceil(num);
    } else {
        return Math.floor(num);
    }
}


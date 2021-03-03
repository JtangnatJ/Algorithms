// Given a rectangular matrix of characters, add a border of asterisks(*) to it.

// Example:
    // For
            // picture = ["abc",
            //            "ded"]
        // the output should be
            // addBorder(picture) = ["*****",
            //                       "*abc*",
            //                       "*ded*",
            //                       "*****"]

function addBorder(picture) {
    // the top border and the bottom border are the same
        // will also always be the length of an element inside picture plus two
            // one extra asterisk on each side
    return [
        '*'.repeat(picture[0].length + 2),
        // we map through each element of the picture and add asterisks surrounding the element with a string literal template
            // then we use a spread operator to insert each element where we want it inside the array we return
        ...picture.map(elem => `*${elem}*`),
        '*'.repeat(picture[0].length + 2)
        ]
}

// improvement
function addBorder(picture) {
    // since we know what the border is and we know that there will be two
        // we can set a variable equal to it and reuse the variable twice
            // reduces eye strain and makes the code easier to read
    const border = '*'.repeat(picture[0].length + 2);

    return [
        border,
        ...picture.map(elem => `*${elem}*`),
        border
        ]
}

// ES6 one-liner
const addBorder = (picture) => [border = '*'.repeat(picture[0].length + 2), ...picture.map(elem => `*${elem}*`), border];

// codeedog w/ the regex
addBorder = p => [(t = p[0].replace(/./g, '*')+'**'), ...p.map(v => `*${v}*`), t]
    // the second part of the solution is the same
    // instead of simply repeating the asterisk a certain number of times
        // we use regex instead
            // the pattern applied here searches through one element of the picture
                // and replaces all of the characters with an asterisk
                    // then we add on two more to reach the required length
            // remember the 'g' outside of the forward slashes applies the pattern globally
                // otherwise the regex pattern would find only the first character to replace and stop there
            // {/./} means any character that is not a linebreak
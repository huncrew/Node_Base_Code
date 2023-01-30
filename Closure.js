/*
ARROW FUNCTIONS / CLOSURE MULTIPLICATION PROGRAM.
parse the multiplication number to the outer function, then call the function, parsing the print message,
loop and parse through the number to the inner function for the calculation.
*/

const multiplication = number => print => {
    for (let i = 0; i < 11; i++) {
        console.log(`${print} ${number} x ${i} = ${number*i}`)
    }
}

const calculation = multiplication(10);
calculation("The calculation is:")
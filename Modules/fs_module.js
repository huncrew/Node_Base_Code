const fs = require('fs');

const firstFile = fs.readFileSync('Modules/testy.txt', 'utf8');
const secondFile = fs.readFileSync('Modules/test/test1.txt', 'utf8');

console.log(secondFile);

// callback below, the whole function and body of code is entered as an argument.
const asyncFile = fs.readFile('Modules/test/test1.txt', 'utf8', (err, result) => {
    if(err) {
        return console.log('there is an error')
    }
    console.log(result);
})

console.log('Hello')
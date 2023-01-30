/*

FUNCTIONAL PROGRAMMING - TREATING FUNCTIONS AS FIRST CLASS VALUES, PASSING THEM AROUND AS VARIABLES,
AS ESSENTIALLY A FUNCTION IS EQUAL TO ITS RETURN VALUE, known as FIRST CLASS FUNCTIONS.

THE ARRAY CLASS HAS BUILT IN METHODS THAT TAKE FUNCTIONS AS PARAMETERS,
SUCH AS .MAP, .FILTERS, AND .REDUCE.
*/

/*
HIGHER ORDER FUNCTION EXAMPLE
*/
const arr1 = [1, 2, 3, 4, 5];
const multiTwo = item => item * 2; // every item parsed to this function, returns * 2;

//.map parses every item from the arr1 array through it's parenthesis, calling the multiTwo function on each element,pushing the return values to arr2
const arr2 = arr1.map(multiTwo); 
/*
HIGHER ORDER FUNCTION EXAMPLE - A CALLBACK FUNCTION IS JUST A FUNCTION PARSED AS AN ARGUMENT,
LIKE PARSING THE MULTITWO FUNCTION ABOVE TO THE .MAP METHOD, ITS A CALLBACK FUNCTION THAT IS CALLED BACK ON EACH ELEMENT.
MIMICKS THE .MAP FUNCTION
*/
const wordsArray = ['Express', 'Javascipt', 'React', 'Node'];
let myMapper = arr => fn => { // this function is replicating what the above .map(multiTwo) function is doing.
    // its also a closure function, the 'fn' being a function within the function.
    const arrayAfterMapping = [];
    for (let i = 0; i < arr.length; i++) {
        arrayAfterMapping.push((arr[i]))
    }
    return arrayAfterMapping;
}
const outputArray = myMapper(wordsArray)(item => item.length + ' ');
/*
HIGHER ORDER FUNCTION MIMICKING THE .FILTER FUNCTION
*/
// using the .filter method with a callback function:
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const lengthFunction = item => item.length > 6; // don't you get it? 'word => word.length > 6, is a function, parsed to the .filter function
const result = words.filter(lengthFunction); 

// NOW REPLICATING THE .FILTER FUNCTION WITH MY OWN FUNCTION BEING PARSED TO IT.
const arrayWords = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present', 'workin', 'veryyy', 'harddd', 'sucess']
let myFilterFunction = arr => fn => { // this function is replicating what the above .map(multiTwo) function is doing.
    // its also a closure function, the 'fn' being a function within the function.
    const arrayAfterFilter = [];
    for (let i = 0; i < arr.length; i++) {
       if (fn(arr[i])) {
        arrayAfterFilter.push(arr[i])
       }
    }
    return arrayAfterFilter;
}
const flteredArray = myFilterFunction(arrayWords)(item => item.length == 6);

/*
CALLBACK CALLBACK CALLBACK CALLBACK FUNCTIONS
A CALLBACK FUNCTION IS A FUNCTION PASSED AS AN ARGUMENT TO ANOTHER FUNCTION, THAT 'CALLBACK' FUNCTION CAN THEN BE CALLED WITHIN THE OUTER FUNCTION.
A FUNCTION THAT RECEIVES A SECOND FUNCTION AS AN ARGUMENT IS A HIGHER ORDER FUNCTION, THE FUNCTION PASSED AS AN ARGUMENT IS A CALLBACK FUNCTION.
- looks like its also a function that is called at a later time.
*/
/*
TIME OUT FUNCTION CALLED AFTER 5 SECONDS, REST OF CODE EXECUTES, JAVASCRIPT ENGINE WAITS TO CALL SETTIMEOUT.
*/
const first = () => {
    setTimeout(function() {
        console.log("TIMEOUT BICHHH");
    }, 5000)
}
const second = () => {
    console.log('This is in second');
}
first();
second();
/*
THE FUNCTION CAN BE PASSED ANONYMOUSLY, OR BE ASSIGNED TO A VARIABLE.
Remember, im parsing the anonymous arrow function as a callback function to the setTimeout, the arrow function will be called back after 8 seconds.
*/
setTimeout(() => {
    console.log('I used an arrow function as a callback argument to the setTimeout function')
}, 8000);
/*
Using a variable, and to be reused many times.
*/
let callbackToBePassedAsArgument = () => {
    console.log('See I can be passed as an argument, to then be called back at a later time, get it?');
}
setTimeout(callbackToBePassedAsArgument, 10000);
/*
PRRRROOOOOOMMMIIIIISSSEEEESSSSSS PROMISES PROMISES PROMISES PROMISES
PROMISES ARE ASYNCHRONOUS AND RUN SEPARATELY FROM THE REST OF MY CODE.
*/
/*
Promise API Call - using fetch.
*/
let jokes = [];
fetch("https://api.chucknorris.io/jokes/random") // this is the promise 'fetch'
    .then(res => res.json()) // this is a function to convert the test 'res - resulting text' into a json object, with key value pairs I can access.
    .then((result) => { // this is now the return, it seems that the return statement is carried over to the final 'then' .then(takes an arrow function here as a callback function.)
        jokes = result; // now I'm in the final block of code, I an run assignments such as jokes = result
        console.log(jokes.value);
    }),
    (error) => {
        console.log(error);
    }
/*
Creating my own Promise Call, a Promise is an object, creating an instance of a class, and passing it two callback functions as parameters.
*/
let myPromise = new Promise((resolve, reject) => { // the fetch function will look like this.
    let x = 0;
    if(5 < 1) {
        x = 1;
    } else {
        x = 0;
    }
    if(x === 1) {
        resolve("Resolved Correctly"); // return statement
    } else {
        reject(Error("The code ran incorrectly")); // return statement
    }
});
// now we call on the instance of the promise object we have created 'myPromise'
// remember .then is just a method for a promise OBJECT - REMEMBER, a new Promise - is just an object, then() is a method, that takes callback functions.
myPromise.then(res => console.log(res), err => console.log(err));
/*
Promise API Call EXAMPLE
*/
fetch("https://www.affirmations.dev/") // this is the promise 'fetch'
    .then(res => res.json()) // this is a function to convert the test 'res - resulting text' into a json object, with key value pairs I can access.
    .then((result) => { // this is now the return, it seems that the return statement is carried over to the final 'then' .then(takes an arrow function here as a callback function.)
        affirmation = result; // now I'm in the final block of code, I an run assignments such as jokes = result
        console.log(affirmation.affirmation);
    }),
    (error) => {
        console.log(error);
    }
/*
Promise API Call.
Get pokemons details by passing in pokemon name to call
access JSON using dot notation.
*/
fetch("https://www.pokeapi.co/api/v2/pokemon/rayquaza") // promise for api call
    .then(res => res.json()) 
    .then((result) => { 
        pokemon = result; 
        console.log("Name: \n",pokemon.name);
        console.log("Weight: \n", pokemon.weight);
        console.log("Abilities: \n", pokemon.abilities);
    }),
    (error) => {
        console.log(error);
    }

/*
ASYNC/AWAIT - WHEN TO USE? - Use promises for simple logic, async functions for more complex.
*/ 
let myAsyncFunction = async() => { // simply a function thats asynchronous.
    let randomNumber = Math.floor(Math.random() * 10);

    if (randomNumber >= 5) {
        return('number was greater (resolved)')
    } else {
        return('rEJECTED mofo')
    }
}
console.log(myAsyncFunction());
/*
AWAIT AWAIT AWAIT - TELLS AN ASYNC FUNCTION to wait for a process to finish before continuing - 
Look I completely get it, an async function will operate WHILE the javascript engine completes other code,
but we can also PAUSE that async function, making that wait - so have multiple things going on within the javascript code.
*/
const returnName = () => {
    return 'spine1'
}// although this function will run asynchronously, it will wait on the line with 'myName' has its return value, before moving on.
const asyncArrow = async () => { 
    let myName = await returnName();
    console.log(myName);
}
asyncArrow();
/*
ASYNC / AWAIT API CALL 
- REMEMBER, WITHIN AN ASYNC/AWAIT FUNCTION, IF YOU DONT USE AWAIT, THE REST OF THE CODE WILL RUN, EVEN IF
THE API CALL HASN'T RECEIVED ITS VALUES, OBVIOUSLY THIS WILL THROW AN ERROR.
*/
const apiFetcher = async () => { 
    let apiItem = await fetch("https://www.pokeapi.co/api/v2/pokemon/rayquaza");
    console.log(apiItem);
}
apiFetcher();
/*
FUNCTIONAL PROGRAMMING
*/
var horniness = 10;
function hornynessLevel(daysWithout) {
    var level = horniness + daysWithout * 5;
    return level;
}

function camWatch() {
    console.log('AW Cams baby')
}

function prozHunt() {
    console.log('Action: Find escort')
}

function action(hornyLevel) {
    if (hornyLevel > 20) {
        return prozHunt();
    } else {
        return camWatch();
    }
}
function hornyTest(daysWithout) {
    level = hornynessLevel(daysWithout)
    action(level)
}
hornyTest(1)
/*
HIGHER ORDER FUNCTION - HIGHER ORDER FUNCTIONS TAKE FUNCTIONS AS ARGUMENTS, AND/OR RETURN FUNCTIONS
its functional programming.
*/
function prozAction(days, availability) {
    var level = 0;
    if (days > 2 && availability == true) {
        level += 50;
        return level;
    } else {
        level += 10;
        return level
    }
}
function fundsAlocation(funds) {
    if (funds <= 50) {
        return 80;
    } else {
        return 20;
    }
}
function calculateHorny(daysWithout, prozAvailability, funds) {
    return prozAction(daysWithout, prozAvailability) + fundsAlocation(funds);
}
console.log(calculateHorny(2, true, 50));
/*
HIGHER ORDER FUNCTIONS MORE - 
*/



/*
CLOSURES - 
- stops repeating self as outer function is stored in variable, and inner function is called when function called.
*/
function userTitle(title) {
    return function userName(name) {
        console.log(`Hello ${name}, your title is set to ${title}`)
    }
}
const mr = userTitle('Mr');
const mrs = userTitle('Mrs');

mr('Dale');
mrs('Robyn');
/*
ARROW FUNCTIONS - 
- STANDARD FOR JS, I WILL USE THEM ALMOST ENTIRELY FROM NOW ON- 
*/

// simply this acts as a closure function, with 'name' being returned when the variable is called and the argument for name parsed.
const personTitle = title => name => {
    console.log(`Hello ${name}, your title is set to ${title}`);
}

const addressHim = personTitle('Mr');
const addressHer = personTitle('Mrs');

// addressHim('Daaaale');
// addressHer('Robyyyyn');

/*
ARROW FUNCTIONS / CLOSURE MULTIPLICATION PROGRAM.
*/

const multiplication = number => print => {
    for (let i = 0; i < 11; i++) {
        console.log(`${print} ${number} x ${i} = ${number*i}`)
    }
}

const calculation = multiplication(10);


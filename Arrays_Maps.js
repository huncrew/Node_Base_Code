/*
REMEMBER THE FOR OF LOOP
*/
let dale = ['sexy', 'strong', 'handsome', 'fearless', 'confident', 'unperturbed']

for (let traits of dale) {
    console.log(traits)
}
/*
BUT THE BEST TO USE, FOREACH
for each is a method for array objects, it calls the method on each element of the array,
it also takes in an index which it provides as the number for each element.
*/
dale.forEach((element, index) => {
    console.log(element, index)
});
/*
ARRAY MAP - VERY IMPORTANT AND USEFUL, Different to a map object.
- The Array.map() method creates a new array from the results of calling a function for every element.    
*/
const numbers = [65, 44, 12, 4];
const newArr = numbers.map(myFunction)

function myFunction(num) {
  return num * 10;
}
/*
ADDS TO END OF ARRAY
*/
dale.push('smart');

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
/*
DELETING ELEMENTS / CHANGING ELEMENTS
*/
dale.pop() //deletes last entry
dale.shift() //deletes first entry
dale.reverse() // reverses elements
dale.splice(i, 1);// remove element, starting point and then number of elements, rest of array will shift down.
/*
SEEEETTTTTSSSSS -- contains only unique values, just like math sets
*/
const mySet = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 19]); //
/*
MAPS- maps are like python dictionaries, with key / value pairs.
- the keys need to be unique
- I think they can be used instead of objects to loop through, as I would a python dictionary.
*/
let daleGrant = new Map();
daleGrant.set('Sexy', 99);
daleGrant.set('Smarts', 99);

for (let [key, value] of daleGrant) { // loop through both key and value
    console.log(key, value)
}
for (let theKey of daleGrant.keys()) { // use .keys() to access keys, loop through
    console.log(theKey);
}
for (let theValue of daleGrant.values()) { // use .values() to access values and loop through.
    console.log(theValue);
}

let value = daleGrant.get('Sexy'); //gets a keys value
console.log(value);

/*
BOOTCAMP PROGRAMMES
*/
/*
create array variable to hold the names
Create a loop to prompt the user to enter a name,
add names to the array
when the array reaches 10
11th person added to the array
console the user to tell them they already have 10 people, would they like to replae anybody
if the user enters yes, 
print the list
prompt the user for who to be replaced
remove the person who was asked to be replaced, the 11th person added falls into 10th place.
output the list
*/
/*
Program that takes 11 people on a guest list, and asks the user if they want to replace an existing guest.
If the answer is 'y' the existing guest entered will be removed from the array and the array will retain the 11th.
*/
let guestList = [];
let overTen = false;
let extraPerson = '';
while(overTen == false) {
    let answer = prompt('Enter a guests name to join the party.');
    guestList.push(answer);
    if (guestList.length > 10) {
        let replacementQuestion = prompt('You already have 10 people on the list, would you like to replace somebody? y/n');
        if (replacementQuestion == 'y') {
            guestList.forEach(element => {
                console.log(element)
            });
        let replacement = prompt('Who would you like to replace?');
        let updatedArray = guestList.filter(item => item !== replacement);
        console.log('Your updated list:') ;
        updatedArray.forEach(element => {
            console.log(element)
        });
        }
        else {
            guestList.pop();
        }
        overTen = true;
    }
}

/*
create map with 10 english words and 10 spanish words as key value pairs
prompt the user for which word theyd like to translate, listing the 10 words
print the corresponding value to the key.
*/
/*
Program that shows 10 english words to the user, and from their input finds the value in map by using the key.
*/
let tenWords = new Map();
tenWords.set('Hello', 'Hola');
tenWords.set('Strong', 'Fuerte');
tenWords.set('Smart', 'Inteligente');
tenWords.set('Cool', 'Frio');
tenWords.set('Music', 'Musica');
tenWords.set('Dance', 'Baile');
tenWords.set('Sing', 'Cantar');
tenWords.set('Move', 'Muevete');
tenWords.set('Travel', 'Viajar');
tenWords.set('House', 'Casa');

let wordList =[];

for (let theKey of tenWords.keys()) { 
    wordList.push(theKey)
}

let word = prompt('Please select a word from below to translate to spanish\n',wordList)
let translatedWord = tenWords.get(word);
console.log('English word:', word, '... Spanish translation:',translatedWord);

/*
2D Arrays, an array of arrays.
*/

const heroes = [
    ['NAME', 'OCCUPATION', 'CHEESE'],
    ['John D Rockefeller', 'Businessman'],
    ['Thomas Edison', 'Inventor'],
    ['Tupac', 'Story-Teller'],
    ['Eminem', 'Rapper'],
    ['Oasis', 'RocknRoll'],
]

// printing a single column of a row
const rowData = (data) => {
    data.forEach((row) => {
        let rowData = row[0].trim();
        console.log(rowData);
    })
}
// pretty printing
const display = (grid) => {
    let output = "\n";
    grid.forEach((row) => {
    output += `${row[0]} | ${row[1]} | ${row[2]}\n`
    });
    console.log(output);
}
const accessColumns = (data) => {
    data.forEach((row) => {
        // forEach() method will make col every next value in the row
        row.forEach((col) => {
        // .trim() method will remove all whitespaces
        col = col.trim();
        console.log(col);
        })
    })
}

//accessing inner array
accessColumns(heroes);


/*
Below is a great demonstration of a callback, you can clearly see the undefined function is the second parameter
for the addEventListener function, so when its called, that undefined function goes to the browsers API.
When the window is loaded, which is the 'event' - the undefined function is excecuted, and that makes perfect sense
as you only want certain code to run AFTER the window is loaded!
*/
window.addEventListener('load', () => {
    // window loaded
    // do what you want
  });


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
Callback Node Server Example
*/

function final(someInput, callback) {
    callback(`${someInput} and terminated by executing callback `);
  }
  
  function middleware(someInput, callback) {
    return final(`${someInput} touched by middleware `, callback);
  }
  
  function initiate() {
    const someInput = 'hello this is a function ';
    middleware(someInput, function (result) {
      console.log(result);
      // requires callback to `return` result
    });
  }
  
  initiate();
  
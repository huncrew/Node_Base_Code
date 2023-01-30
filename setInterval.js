/*
Calls a callback function every set number of milliseconds

See below that when a condition is met, clearInterval (which removes the setInterval)
*/
const interval = setInterval(() => {
    if (App.somethingIWait === 'arrived') {
      clearInterval(interval);
    }
    // otherwise do things
  }, 100);

/*
Recursive function.
*/
const myFunction = () => {
  // do something

  setTimeout(myFunction, 1000);
};

setTimeout(myFunction, 1000);
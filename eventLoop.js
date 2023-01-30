// https://nodejs.dev/en/learn/understanding-setimmediate/

/*
There are three different queues within the event loop,
The nextTick queue is handled first, then the promises queue, then the macrotask (setTimeout, setImmediate) queue 
*/
const fs = require('fs');

const baz = () => console.log('baz');
const foo = () => console.log('foo');
const zoo = () => console.log('zoo');
const start1 = () => {
  console.log('start');
  setImmediate(baz);
  new Promise((resolve, reject) => {
    resolve('bar');
  }).then((resolve) => {    
    console.log(resolve);
    process.nextTick(zoo);
  });
  process.nextTick(foo);
};
start1();


fs.readFile('./dale.txt', function(err, data){
    console.log(data);
  });


/*
Below code shows although setTimeouts callback is set to trigger after 1 second, it will be delayed 
because the thread is busy with the while loop, so will show after 4 seconds.
*/
// set function to be called after 1 second
setTimeout(function() {
    console.log('Timeout ran at ' + new Date().toTimeString());
 }, 1000);
 
 // store the start time
 var start = new Date();
 console.log('Enter loop at: '+start.toTimeString());
 
 // run a loop for 4 seconds
 var i = 0;
 // increment i while (current time &lt; start time + 4000 ms)
 while(new Date().getTime() + 4000) {
    i++;
 }
 console.log('Exit loop at: '
             +new Date().toTimeString()
             +'. Ran '+i+' iterations.');


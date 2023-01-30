const os = require('os');

console.log(os.userInfo());
console.log(os.uptime());

const operatingInfo = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
};

console.log(operatingInfo);

console.log(typeof os);
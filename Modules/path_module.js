const path = require('path');
console.log(path.sep);

const filePath = path.join('test', 'path_module.js');
console.log(filePath);

const base = path.basename(filePath);
console.log(base);

const absolute = path.resolve(__dirname, 'test', 'path_module.js');
console.log(absolute);

/*
Seems a bit pointless to me, it doesnt intelligently fetch the paths at all. Just structures it with the info you provide. 
*/
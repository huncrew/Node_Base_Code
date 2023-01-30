const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Homepage!');
    }
    if (req.url === '/about') {
        res.end('ABOUT PAGE');
    }
    res.end('WRONG FUCKING PAGE');
})

server.listen(5000);
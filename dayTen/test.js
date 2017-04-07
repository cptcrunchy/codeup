const http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World! \n This is a sample page using NodeJS.');
}).listen(8080, 'localhost');
console.log('Server running at http://localhost:8080/');
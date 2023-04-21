/* We will make our own web server.
in Php , java and other languages we need Xammp etc. web server to run these langauges 
we can use xampp for node.js also but creating own web server by using node.js is better. */
// Adding http module
const http = require('http');

// creating server
const server = http.createServer((req, res) => {
    // giving response of request
    res.end("This is response of from server !!");
});

// listening request
server.listen(4500, '127.0.0.1', () => {
    console.log("I am using port 8000 to listening request ");
});
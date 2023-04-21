/* What is routing -> Routing refers to determining how an application responds to a
 client request to a particular endpoint, which is a URI (or path) and a specific HTTP
  request method (GET, POST, and so on). In simple terms, Routing allows targeting
   different routes or different URLs on our page. */
/*There are mainly two ways to implement Routing in Node.js
By Using Framework
Without Using Framework. */

/*Routing Without Framework
Let’s take an example wherein there is a simple server setup using Node.js in the following app.js file.

// Node.js has a built-in module called HTTP,
// which allows Node.js to transfer data over the
//  HyperText Transfer Protocol (HTTP).
// To include the HTTP module, the require method is
// used
var http = require('http');

// The HTTP module can create an HTTP server that
// listens to server ports and gives a response back to the client.
// Use the createServer() method to create an HTTP server:
var server = http.createServer(function(req, res)
{
  // The function passed into the http.createServer()
  // has a req argument that represents the request from
  // the client, as an object (http.IncomingMessage object).
  // This object has a property called "url" which holds the
  // part of the url that comes after the domain name:
  console.log('A request was made: ' + req.url)

  // The first argument of the res.writeHead()
  // method is the status code, 200 means that
  // all is OK, the second argument is an object
  // containing the response headers.
  res.writeHead(200, {'Content-Type': 'text-plain'});
  res.end('Response ended'); // ends the response
});

server.listen(3000, '127.0.0.1');
console.log('Listening to port 3000') */
// creating server
const http = require('http');
const server = http.createServer((req, res) => {
    if (req.url == "/") {
        res.end("This is home page");
    } else if (req.url == "/about") {
        res.end("This is about page");
    } else if (req.url == "/contact") {
        res.end("This is contact page");
    } else if (req.url == "/services") {
        res.end("This is service page");
    } else {
        res.writeHead(404);
        res.end("404 Error found !");
    }
});

server.listen(3000, "127.0.0.1", () => {
    console.log("listening to port 3000");
});
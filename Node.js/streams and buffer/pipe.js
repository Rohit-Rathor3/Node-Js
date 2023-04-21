/* stream.pipe(), the method used to take a redable stream and connect it to a writable stream.
Within Node applications, streams can be piped together using the pipe() method, 
which takes two arguments:
A Required writable stream that acts as the destination for the data and
An optional object used to pass in options. */

const fs = require('fs');
const http = require("http");
const server = http.createServer();
server.on('request', (req, res) => {
    const rstream = fs.createReadStream("file.txt");
    rstream.pipe(res);
});
server.listen(8080, "127.0.0.1");
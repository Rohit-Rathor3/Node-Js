/* streams are object that let us read data from a source or write data to a destination 
 in continuous manner fashion. In node.js there are four types of streams -
 1. Readable -> Streams which is used for read operation.
 2. Writable -> Streams which is used for write operation.
 3. Duplex -> Stream which can be used for both read and write operation.
 4. Transform -> A type of duplex stream where the output is computded based on input.
 */
/* Each type of stream is an EventEmitter instance and throws several events at different instance
of times. Some of the commonly used events are -
1. data -> This event is fired when there is data available to read.
2. end -> This event is fired when there is no more data to read.
3. error -> This events is fired when there is any error recieving or writing data
4. finish -> This event is fired when all the data has been flushed to underlying system.
note :- plz Google for more events. */

/* in this tutorial we will read a file as streams */
const fs = require('fs');
const http = require("http");
const server = http.createServer();

/* we will have to create readable stream, by using createReadStream() method
  and handle stream events like data , end and error. */
server.on('request', (req, res) => {
    const rstream = fs.createReadStream("fi le.txt");
    rstream.on('data', (chunkData) => {
        res.write(chunkData);
    });
    rstream.on('end', () => {
        res.end();
    });
    rstream.on('error', (error) => {
        console.log(error);
        res.end("file not found ");
    });
});

server.listen(8080, "127.0.0.1")
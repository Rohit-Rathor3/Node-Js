/* In this session we will create , write and read a file 
   first of all we have to add module of filesystem */
// adding core module of file system
let fs = require("fs");
// creating a file 
// it will create new one if not exist , if exist then overwride that.
fs.writeFileSync("readAndWrite.txt", "Hello I'am learning file system ::");
//let append new data in our file
fs.appendFileSync("readAndWrite.txt", "\nI am appending new data in file :");

//now read data from file
// it will return buffer data which is not understandable by human being
var data = fs.readFileSync("readAndWrite.txt");
console.log(data);
// let understand buffered data of file
let original_data = data.toString();
console.log("Reading Data of file !\n");
console.log(original_data);
// We can rename of file also, let see
fs.renameSync("readAndWrite.txt", "fileehandling.txt");
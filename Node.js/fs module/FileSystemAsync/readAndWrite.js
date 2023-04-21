/* in asynchronous , we pass a callback function.
    callback function -> These are a function we, pass them as an argument , 
    that gets called when task compeleted .
    The callback function has an argument that tells you whether the operation compeleted successfully.
    Now we need to say that to do when fs.writeFile() has completed(even it its nothing),
    and start checking for erros. */

// creating file
let fs = require("fs");
fs.writeFile("readAndWrite.txt", "I am learining Asynchronous file system 😊✔\n",
    (err) => {
        console.log("file created");
        console.log(err);
    });

// appending data in file
fs.appendFile("readAndWrite.txt", "This is appended data\n", (err) => {
    console.log("Data append operation got successfully !!");
    console.log(err);
});

// reading file

fs.readFile("readAndWrite.txt", "utf-8", (err, data) => {
    console.log("----------------- Reading a file ------------");
    console.log(data);
})
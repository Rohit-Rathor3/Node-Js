/* In asynchronous we have to pass cal back function.
    1.  Create a new folder named it rohit
    2. create a file in it named filehandlingPart2.txt and  add  data into it.
    3. Add or append new data at the end of the existing data.
    4. Read the data without getting the buffer data at first.
    5. Rename the file name to filehandling.txt
    6. Now delete both the file and folder.*/

const fs = require("fs");

// Making a new folder
/*let fs = require('fs');
fs.mkdir("rohit", (err) => {
    console.log("folder created");
});*/

// 2. creating file
fs.writeFile("./rohit/filehandlingpart2.txt", "I'm creating file !🎁🎂\n",
        (err) => {
            console.log("file created !");
        })
    //3. appending data
let age = 20;
fs.appendFile("./rohit/filehandlingpart2.txt", "This is appended data 🥓🥯",
    (err) => {
        console.log("appending operation successful !");
    });

//4. reading data from file
let result = fs.readFile("./rohit/filehandlingpart2.txt", "utf8", (err, data) => {
    console.log("------------ Reading from File -----------------");
    console.log(data);

});

//5. Renaming file
fs.rename("./rohit/filehandlingpart2.txt", "./rohit/filehandling.txt", (err) => {
    console.log("file renamed !");
});

// Deleting folder

//6. Deleting file
fs.unlink("./rohit/filehandling.txt", (err) => {
    console.log("file deleted!");
});
fs.rmdir("./ rohit", (err) => {
    console.log("folder deleted!");
});
/*  1.  Create a new folder named it rohit
    2. create a file in it named filehandlingPart2.txt and  add  data into it.
    3. Add or append new data at the end of the existing data.
    4. Read the data without getting the buffer data at first.
    5. Rename the file name to filehandling.txt
    6. Now delete both the file and folder.*/

// Making a new folder
let files = require('fs');
files.mkdirSync("rohit");

//creating new file inside rohit folder
files.writeFileSync("./rohit/filehandlingPart2.txt", "I am learing CRUD operation in file :\n");
// adding or appending  new data at the end of file
files.appendFileSync("./rohit/filehandlingPart2.txt", "I am appending new data at the end of file !😎😉😊😂\n");

// reading file without getting buffer data
console.log("------------------- Reading a file -------------------");
let data = files.readFileSync("./rohit/filehandlingPart2.txt", "utf-8");
console.log(data);

//renaming file
files.renameSync("./rohit/filehandlingPart2.txt", "./rohit/filehandling.txt")

// Deleting file and folder
// first of all i will delete file
files.unlinkSync("./rohit/filehandling.txt");
console.log("----File Deleted Successfully");
// now we will delete folder 'rohit'
files.rmdirSync("./rohit");
console.log("Folder deleted succesfully");
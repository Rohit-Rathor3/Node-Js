/* Path module is also one of inbuilt modules of node.js */
/* The path module provides utilities for working with files and directory paths. 
 There are many methods of path module in node.js , disscusse few of them.  */
const path = require("path");

//1. dirname(p)-> It returns the directory name of a path.
let dir = path.dirname("d:\NODE JS\path module\path_module.js");
console.log(dir);

//2. parse()-> it returns an object from a path
let base = path.parse("d:/NODE JS/path module/path_module.js");
console.log(base);

//3. extname()-> it returns extention
let ex = path.extname("file.mp4");
console.log(ex);

console.log(path);
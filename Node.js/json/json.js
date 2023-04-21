/* What is JSON?

JavaScript Object Notation, or JSON, is a lightweight data format that has become 
the defacto standard for the web. JSON can be represented as either a list of values,
 e.g. an Array, or a hash of properties and values, e.g. an Object.

// a JSON array
["one", "two", "three"]

// a JSON object
{ "one": 1, "two": 2, "three": 3 }
Encoding and Decoding
JavaScript provides 2 methods for encoding data structures to json and encoding json back to JavaScript
 objects and arrays. They are both available on the JSON object that is available in the global scope.

JSON.stringify takes a JavaScript object or array and returns a serialized string in the JSON format.

const data = {
  name: 'John Doe',
  age: 32,
  title: 'Vice President of JavaScript'
};

const jsonStr = JSON.stringify(data);

console.log(jsonStr);

// prints '{"name":"John Doe","age":32,"title":"Vice President of JavaScript"}'
JSON.parse takes a JSON string and decodes it to a JavaScript data structure.

const jsonStr =
  '{"name":"John Doe","age":32,"title":"Vice President of JavaScript"}';

const data = JSON.parse(jsonStr);

console.log(data.title);

// prints 'Vice President of JavaScript */
/* 

Here , i will do following operation 
1. convert a object to json
2. write that object to file
3. read from file
4. again  convert json to original object
5. console.log */
let obj = {
    Name: "Rohit Bhai",
    age: 20,
    job: "Software developer",
};
// converting javasvript object to json 
let jsonObj = JSON.stringify(obj);
console.log(jsonObj);
/* we cannot access property of json obj individually *
console.log(jsonObj.age);
it will show 'undefined' */


// writing json object to file
let fs = require('fs');
fs.writeFile("jsonFile.json", jsonObj, (err) => {
    console.log("done");
});
// reading from file
fs.readFile("jsonFile.json", "utf-8", (err, data) => {
    console.log(data);
});

// converting json to original object
let originalObj = JSON.parse(jsonObj);
console.log(originalObj);
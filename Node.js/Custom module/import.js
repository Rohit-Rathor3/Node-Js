/* method 1. -> In this method , module returns an object */
const importing = require("./export");
console.log(importing.greet);
console.log(importing.welcome);
console.log(importing.add(3, 4));
console.log(importing.sub(30, 10));


/*
method 2.
const { add, sub, welcome, greet } = require("./export");
console.log(greet);
console.log(welcome);
console.log(add(3, 4));
console.log(sub(30, 10));
*/
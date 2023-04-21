/* In this program we will exports this file or making this file to work like a module */
/* let, i am making two functions and two variable in this file , that be used in another file */
// This is sum function two add two arguments
const add = (a, b) => {
    console.log("\nThe sum = " + (a + b));
}

// This is subtarct function of two numbers
const sub = (a, b) => {
    console.log("\nThe sub = " + (a - b));
}

// This is variable to be export
let welcome = "Welcome to Node.js Tutorial !(●'◡'●):-)😎\n";
let greet = "Hello , coder! What's up ?\n";


// method 1.
module.exports = { add, sub, welcome, greet };


/*method 2. -> By using this method we can only import one property at a time.
               This is not a good method to export.           
module.exports = add;
module.exports = sub;
module.exports = welcome;
module.exports = greet;
*/

/*
method 3.
module.exports.add = add;
module.exports.sub= sub;
module.exports.welcome = welcome;
module.exports.greet = greet;
*/

/*
method 4.
module.exports.additon = add;
module.exports.subtarction= sub;
module.exports.welcoming = welcome;
module.exports.greeting = greet;
*/
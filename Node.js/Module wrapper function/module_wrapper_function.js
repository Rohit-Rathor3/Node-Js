/* Module Wrapper Function: Under the hood, NodeJS does not run our code directly,
 it wraps the entire code inside a function before execution.
 This function is termed as Module Wrapper Function.

 Before a module’s code is executed, NodeJS wraps it with a function wrapper 
 that has the following structure:

(function (exports, require, module, __filename, __dirname) {
  //module code
});

Use of Module Wrapper Function in NodeJS:

The top-level variables declared with var, 
const, or let are scoped to the module rather than to the global object.
It provides some global-looking variables that are specific to the module, such as:
The module and exports object that can be used to export values from the module.
The variables like  __filename and __dirname, that tells us the module’s absolute 
filename and its directory path.    */
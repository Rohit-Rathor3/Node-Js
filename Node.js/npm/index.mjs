import cha from 'chalk';

console.log(cha.red("hello"));

import val from 'validator';
var a = val.isEmail("roht");
var b = val.isEmail("rohit133@gmai.com");
console.log(cha.red(a));
console.log(cha.green(b));
// write a dynamic greeter program that asks for a name and then prints a greeting
let rlSync = require('readline-sync');
let firstName = rlSync.question('Hi. What is your first name?\n');
let lastName = rlSync.question('Hi. What is your last name?\n');
console.log(`Hello, ${firstName} ${lastName}!`);
// write a dynamic greeter program that asks for a name and then prints a greeting
let rlSync = require('readline-sync');
function getNames(text){
  return rlSync.question(`${text}\n`);
}
let firstName = getNames('Hi. What is your first name?');
let lastName = getNames('Hi. What is your last name?');
console.log(`Hello, ${firstName} ${lastName}!`);
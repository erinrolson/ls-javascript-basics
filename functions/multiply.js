function multiply( a, b ){
  return a * b;
}

function getNumber(text){
  let rlSync = require("readline-sync");
  return parseFloat(rlSync.question(`${text}\n`));
}
let num1 = getNumber('Please enter the first number:');
let num2 = getNumber('Please enter the second number:');

console.log(`${num1} * ${num2} = ${multiply(num1,num2)}`);

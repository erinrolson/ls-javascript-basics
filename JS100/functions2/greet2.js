/*
alter the function definition of greet so that the parameter greeting is 
assigned a default value of 'Hello'
*/
function greet(greeting = 'Hello', recipient = 'world') {
  console.log(`${greeting}, ${recipient}!`);
}

greet();
greet('Salutations'); // logs: Salutations, world!

greet('Good morning', 'Launch School');
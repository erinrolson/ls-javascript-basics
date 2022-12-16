/*
alter the function definition of greet so that the parameter greeting is 
assigned a default value of 'Hello'
*/
function greet(greeting = 'Hello') {
  console.log(greeting + ', world!');
}

greet('Salutations'); // logs: Salutations, world!

greet();              // logs: undefined, world!
                      // should log: Hello, world!
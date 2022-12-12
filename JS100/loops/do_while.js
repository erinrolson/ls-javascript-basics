//What is the difference between the following two code snippets?
/*
A while checks the condition and then the code block is run if truthy, not if
falsy.
*/
let counter = 0;

while (counter > 0) {
  console.log('Woooot!');
  counter -= 1;
}
/*
A do...while statement will always run the code block at least one time.
Then check the case statement for a truthy or falsy value.
*/
let counter = 0;

do {
  console.log('Woooot!');
  counter -= 1;
} while (counter > 0);
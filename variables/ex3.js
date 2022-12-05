// what happens when you run the following program? Why?
{
  let foo = 'bar';
}

console.log(foo);

/* the variable foo is defined within block scope and therefore
does not exist outside of the block. You will receive a reference error.
*/
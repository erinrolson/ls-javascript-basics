// what is logged to the console? why?
let foo = 'bar';
{
  let foo = 'qux';
}

console.log(foo); 
/* 
'bar' will be logged to the console. the second variable assignment of foo is
scoped to the block and does not exist outside of the block scope. The first 
variable assignment of foo is globally scoped and therefore available anywhere in
the program.
*/
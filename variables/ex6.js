// will the program produce an error? Why or why not?
const FOO = 'bar';
{
  const FOO = 'qux';
}

console.log(FOO);

/*
No error is produced. The first const FOO variable is initialized in the global scope.
The the second const FOO is initialized in block scope. When this happens the global
FOO is shadowed (kinda pushed back and away from the program 'view'). When the block
finishes the blocked scoped variable ceases the exist and the global variable is
back in view and logged to the console.
*/
/*
Question:
Will an error occur if you try to access an array element 
with an index that is greater than or equal to the length 
of the array?
*/

let foo = ['a', 'b', 'c'];
console.log(foo.length);  // => 3
console.log(foo[3]);      // will this result in an error?

/*
No error will be produced and undefined will be printed 
to the console. This is an example of JavaScript failing
silently.
*/
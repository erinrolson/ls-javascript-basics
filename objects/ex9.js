// what is logged to the console? why?
let foo = {
  a: 'hello',
  b: 'world',
};

let qux = 'hello';

function bar(argument1, argument2) {
  argument1.a = 'hi';
  argument2 = 'hi';
}

bar(foo, qux);

/*
Foo is an object therefore it is passed by reference. It is also mutable. The location in memory
where foo is located is passed to the function.
qux is a primitive therefore it is passed by value. In pass by value parameters
passed as arguments aractually working off a 'copy'. Changes made inside a function are made to 
a copy and not the original value.
Line 10 is able to access the a property of foo and  change it to 'hi' at the actual object
reference in memory.
Line 11 is updating a copy of the argument qux and not the actual value.
*/

console.log(foo.a); // hi
console.log(qux); // hello
function hello(greeting, name) {
  return greeting + ' ' + name;
}

function xyzzy() {
  return { a: 1, b: 2, c: [3, 4, 5], d: {} };
}

const howdy = hello('Hi', 'Grace');
let foo = xyzzy();
/*
Identify all of the variables, object property names, primitive values, 
and objects shown in the following code (assume the code has not been executed). 
Don't panic if you miss a few items - this exercise is more challenging than it looks.

variables:
 hello, greeting, name
 xyzzy
 howdy
 foo
 
 Object property names: xxx Array indexes are property names, doh!
 a , b, c, d or foo.a, foo.b, foo.c etc
 
 privitive values: xxx ' ' empty string is primitive, doh
 1, 2. 3. 4, 5
 howdy = 'Hi Grace'
 
 objects:
 { a: 1, b: 2, c: [3, 4, 5], d: {} }
 [3, 4, 5]
 {}
 foo = { a: 1, b: 2, c: [3, 4, 5], d: {} }
*/
// what does this code log to the console?
let bar = 1;
function foo() {
  let bar = 2;
}

foo();
console.log(bar);

/* 
the global variable bar is logged to the console => 1
*/
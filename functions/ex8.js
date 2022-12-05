//what will the output be?
function foo(bar, qux) {
  console.log(bar);
  console.log(qux);
}

foo(42, 3.1415, 2.718);
/*
42
3.2425
The third argument will be ignored
*/
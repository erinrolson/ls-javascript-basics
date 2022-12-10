// update code to run properly
function foo(bar) {
  console.log(bar, bar, bar);
}
let bar = foo; //added
foo("hello"); // should print "hello hello hello"
bar("hi");    // should print "hi hi hi"
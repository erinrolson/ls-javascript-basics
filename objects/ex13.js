function foo(bar) { //the parameter is intended to take a function
  console.log(bar()); // function is called
}
// use function expression as the argument to log desired results

foo(function() { return 'Welcome' });    // Should print 'Welcome'
foo(function() { return 3.1415 });    // Should print 3.1415
foo(function() { return [1, 2, 3] });    // Should print [1, 2, 3]
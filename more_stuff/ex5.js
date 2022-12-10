//what does the following function do?
function doSomething(string) {
  return string.split(' ').reverse().map((value) => value.length);
}
/*
-split string at white spaces and return a list
-reverse the order of the list
-return a new list w/ the list element length values
*/
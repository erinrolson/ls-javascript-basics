// write a function that checks whether a string is empty or not
function isBlank(string){
  if (string) { return false; }
  return true;
}

console.log(isBlank('mars')); // false
console.log(isBlank('  '));   // false
console.log(isBlank(''));     // true
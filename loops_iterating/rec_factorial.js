/*function factorial(n){
  let factorial = 1;
  for(let i = n; i >= 1; i -= 1){
    factorial *= i;
  }
  return factorial;
}

console.log(factorial(4));*/

function factorial(n){
  while (n - 1 >= 1){
    return n * factorial(n - 1);
  } 
  return 1;
}

console.log(factorial(3));

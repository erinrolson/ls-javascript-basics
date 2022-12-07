function factorial(n){
  let factorial = 1;
  for(let i = n; i >= 1; i -= 1){
    factorial *= i;
  }
  return factorial;
}

console.log(factorial(4));
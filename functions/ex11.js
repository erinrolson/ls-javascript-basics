//identify all variables named on each line of code
function multiply(left, right) {  // multiply (global), left (local), right (local)
  let product = left * right;     // product (local), left (local), right (local)
  return product;                 // product (local)
}

function getNumber(prompt) {      // getNumber (global), prompt (local)
  return parseFloat(question(prompt));  //parseFloat (global), question (global), prompt (local)
}

let left = getNumber('Enter the first number: ');  // left (global), getNumber (global)
let right = getNumber('Enter the second number: '); //right (global), getNumber(global)
console.log(`${left} * ${right} = ${multiply(left, right)}`); // console (global), left (global), right (global), multiply (global), left, right

/*
Question:
Using the code from Exercise 9, are the left and right variables on lines 1 and 2 
the same as the left and right variables on lines 10-12? Explain your reasoning.

Answer:
No. The left and right variables on line 2 are scoped locally 
to the function declaration. Once the function is called and executed
those variables disappear. The left and right variables on
lines 11 and 12 are in the global scope, they are not in a code
block defined my { }.
*/
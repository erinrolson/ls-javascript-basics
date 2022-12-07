/* Without using a for, while, or do/while loop, write some code that checks 
whether the number 3 appears inside these arrays:
*/
let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = [];
let numbers3 = [2, 4, 6, 8];

console.log(`Array numbers1 includes 3? ${numbers1.includes(3)}`);
console.log(`Array numbers2 includes 3? ${numbers2.includes(3)}`);
console.log(`Array numbers3 includes 3? ${numbers3.includes(3)}`);

function check3(array){
  if(array.includes(3)){
    console.log('I contain the number 3.');
  }
}

check3(numbers1);
check3(numbers2);
check3(numbers3);
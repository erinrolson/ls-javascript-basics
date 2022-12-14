/* Implement a function repeat that repeats an input string a given number of 
times, as shown in the example below */
function repeat(num, string){
  let repeated = '';
  while (num >= 1){
    repeated += string;
    num -= 1;
  }
  return repeated;
}

console.log(repeat(3, 'ha')); // 'hahaha'
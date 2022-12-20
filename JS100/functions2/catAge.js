/* implement a cat age function that takes a number of human years
and converts them to cat years.
calculated as follows:
- first human year = 15 cat years
- second human year = 9 cat years
- all other years = 4 cat years
*/
function catAge(years){
  if (years === 0) { return 0 }
  let catsAge = 0;
  for (let i = years; i >= 1; i -= 1){
    if ( i > 2){
      catsAge += 4;
    } else if (i === 2){
      catsAge += 9;
    } else if ( i === 1){
      catsAge += 15;
      return catsAge;
    }
  }
}

console.log(catAge(0)); // 0
console.log(catAge(1)); // 15
console.log(catAge(2)); // 24
console.log(catAge(3)); // 28
console.log(catAge(4)); // 32
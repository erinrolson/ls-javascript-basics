// Write a function that logs whether a number is between 0 and 50 (inclusive), 
// between 51 and 100 (inclusive), greater than 100, or less than 0.

function checkNum(num){
  if (num < 0){
    console.log(`${num} is less than 0`);
  } else if (num <= 50){
    console.log(`${num} is between 0 and 50`);
  } else if (num <= 100){
    console.log(`${num} is between 51 and 100`);
  } else{
    console.log(`${num} is greater than 100`);
  }
}

checkNum(-23);
checkNum(125);
checkNum(45);
checkNum(70);
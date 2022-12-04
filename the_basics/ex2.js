//make this a recursive function?
function getDigits(number){
  if (number - 10 <= 0){ //if we have isolated the final digit
    console.log(number);
    return;
  }
  let mod = number % 10;
  console.log(mod);
  getDigits((number - mod) / 10);
}

getDigits(4936);


/*
create a recursive function from the following prompt:

Suppose you want to know the result of doubling a number, 
then the result of doubling that number, and so on until 
the number reaches some predefined maximum, such as 50. 
*/
function doubleThis(num){
  console.log(num);
  if (num > 50){
    return;
  } else {
    doubleThis(num * 2);
  }
}

doubleThis(25);
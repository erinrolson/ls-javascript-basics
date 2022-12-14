// what will the code log to the console?

function multiplesOfThree() {
  let divisor = 1;

  for (let dividend = 3; dividend <= 30; dividend += 3) {
    console.log(dividend + ' / ' + divisor + ' = 3');
    divisor += 1;
  }
}

multiplesOfThree; // nothing will be output bc function not invoked.
// 3 / 1 = 3
// 6 / 2 = 3
// 9 / 3 = 3
// etc.. until dividend is <= 30
// write a function that determines if the argument is an even number
// 
function evenOrOdd(argument){
  if (!Number.isInteger(argument)){
    console.log('The argument passed is not an integer.');
    return;
  } else {
    let num =(argument % 2 === 0 ) ? 'even' : 'odd'
    console.log(`Your number was ${num}`);
  }

}

evenOrOdd(22);
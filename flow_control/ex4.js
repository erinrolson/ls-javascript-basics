//what will be logged to the console?
function barCodeScanner(serial) {
  switch (serial) {
    case '123':
      console.log('Product1');
    case '113':
      console.log('Product2');
    case '142':
      console.log('Product3');
    default:
      console.log('Product not found!');
  }
}

barCodeScanner('113');
/*
The following are all logged to the console:
Product2
Product3
Product not found!
Because the switch statement does not use the break
keyword as soon as the case is met on line 7 control 
falls through all other case and default statenents and
executes their code.
*/
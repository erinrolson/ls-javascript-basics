// the following code causes an infinite loop. why?
let counter = 0;

while (counter = 1) { // counter is always assigned value of one, never changes to be > 2
  console.log(counter);
  counter += 1;

  if (counter > 2) {
    break;
  }
}
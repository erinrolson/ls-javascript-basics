// does the following produce an error? why or why not?
// what is output to the console?
for (let i = 0; i < 5;) {
  console.log(i += 1);
}
/*
The code does not produce an error, however it is poorly
written and anyone reading it may belive there are mistakes.
It is certainly not easy to read.
what is logged to the console?
1
2
3
4
5
*/
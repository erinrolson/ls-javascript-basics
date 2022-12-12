// why does this code create an infinite loop? fix it to stop after 1 iteration.
/*
for (let i = 0; ; i += 1) { //there is no condition for when the iteration should stop
  console.log("and on");
}
*/

//fixed
for (let i = 0; i < 1 ; i += 1) {
  console.log("and on");
}
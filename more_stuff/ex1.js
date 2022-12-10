// what is logged to the console? why?
let array1 = [1, 2, 3];
let array2 = array1;
array1[1] = 4;
console.log(array2); // [1, 4, 3]

/*
array1 and array2 are referencing the same object.
the object is mutated, no reassignment, so no pointer 
reference are changed.
*/